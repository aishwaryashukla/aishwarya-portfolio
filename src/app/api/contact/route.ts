import { NextResponse } from "next/server";

import { contactTopics } from "@/content/contact";

const RECIPIENT = { email: "aishwarya.shukla@gmail.com", name: "Aishwarya" };
const SENDER = { email: "aishwarya.shukla@gmail.com", name: "Portfolio Contact Form" };

const LIMITS = { name: 100, email: 200, company: 120, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple per-IP rate limit. The site runs as a single container, so memory is enough.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend success and drop the message.
  if (text(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const name = text(body.name, LIMITS.name).replace(/[\r\n]+/g, " ");
  const email = text(body.email, LIMITS.email);
  const company = text(body.company, LIMITS.company).replace(/[\r\n]+/g, " ");
  const message = text(body.message, LIMITS.message);
  const topic = contactTopics.find((item) => item.value === body.topic) ?? contactTopics[contactTopics.length - 1];

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 422 });
  }

  // Behind the reverse proxy, X-Real-IP (or the last X-Forwarded-For hop) is the client address;
  // earlier X-Forwarded-For entries can be set by the client itself.
  const ip =
    req.headers.get("x-real-ip")?.trim() || req.headers.get("x-forwarded-for")?.split(",").pop()?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("Contact form: BREVO_API_KEY is not set.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  const rows = [
    ["Topic", topic.label],
    ["Name", name],
    ["Email", email],
    ...(company ? [["Company", company]] : []),
  ]
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
    .join("");

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: SENDER,
        to: [RECIPIENT],
        replyTo: { email, name },
        subject: `Portfolio: ${topic.label} — ${name}${company ? ` (${company})` : ""}`,
        htmlContent: `${rows}<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
        textContent: `Topic: ${topic.label}\nName: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Brevo responded", response.status, await response.text());
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form: request to Brevo failed", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
