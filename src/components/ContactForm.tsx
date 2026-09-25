"use client";

import { useState, type FormEvent } from "react";

import { ArrowRight, Check } from "@/components/Icons";
import { contactTopics, type ContactTopic } from "@/content/contact";
import { site } from "@/content/site";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "email" | "message";

const emptyForm = { name: "", email: "", company: "", topic: "project" as ContactTopic, message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const update = (key: keyof typeof emptyForm) => (value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (key in errors) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "A sentence or two helps me reply properly.";
    setErrors(next);

    // Move focus to the first field that needs attention.
    const firstInvalid = (["name", "email", "message"] as const).find((key) => next[key]);
    if (firstInvalid) document.getElementById(`contact-${firstInvalid}`)?.focus();
    return !firstInvalid;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending" || !validate()) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Check />
        </span>
        <p className={`display ${styles.successTitle}`}>Thank you, {form.name.trim().split(/\s+/)[0]}.</p>
        <p className={styles.successText}>
          Your message is on its way. I&apos;ll reply to <strong>{form.email.trim()}</strong> as soon as I can.
        </p>
        <button
          type="button"
          className={`btn ${styles.ghostButton}`}
          onClick={() => {
            setForm(emptyForm);
            setStatus("idle");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldProps = (key: Field) => ({
    id: `contact-${key}`,
    name: key,
    value: form[key],
    onChange: (event: { target: { value: string } }) => update(key)(event.target.value),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <fieldset className={styles.topics}>
        <legend className={`label ${styles.fieldLabel}`}>I&apos;m getting in touch about</legend>
        <div className={styles.topicList}>
          {contactTopics.map((topic) => (
            <label key={topic.value} className={styles.topic}>
              <input
                type="radio"
                name="topic"
                value={topic.value}
                checked={form.topic === topic.value}
                onChange={() => update("topic")(topic.value)}
              />
              <span>{topic.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={`label ${styles.fieldLabel}`}>
            Name
          </label>
          <input type="text" autoComplete="name" required maxLength={100} {...fieldProps("name")} />
          {errors.name && (
            <p id="contact-name-error" className={styles.error}>
              {errors.name}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email" className={`label ${styles.fieldLabel}`}>
            Email
          </label>
          <input type="email" autoComplete="email" required maxLength={200} {...fieldProps("email")} />
          {errors.email && (
            <p id="contact-email-error" className={styles.error}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-company" className={`label ${styles.fieldLabel}`}>
          Company <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={120}
          value={form.company}
          onChange={(event) => update("company")(event.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={`label ${styles.fieldLabel}`}>
          Message
        </label>
        <textarea
          rows={5}
          required
          maxLength={5000}
          placeholder="A little about the role, the product or the problem you're solving…"
          {...fieldProps("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update("website")(event.target.value)}
        />
      </div>

      <div className={styles.submitRow}>
        <button type="submit" className="btn btn-lg btn-accent" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowRight />
        </button>
        <p className={styles.status} role="status" aria-live="polite">
          {status === "error" && (
            <>
              Something went wrong sending your message. Please try again, or reach me on{" "}
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
