import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="container"
      style={{
        minHeight: "78vh",
        display: "grid",
        alignContent: "center",
        justifyItems: "start",
        gap: 24,
        paddingTop: "calc(var(--header-h) + 48px)",
        paddingBottom: 64,
      }}
    >
      <p className="label">Error 404</p>
      <h1 className="display" style={{ fontSize: "clamp(3rem, 2rem + 5vw, 6.5rem)", maxWidth: "12ch" }}>
        This page took <em>another route.</em>
      </h1>
      <p style={{ maxWidth: "32em", color: "var(--muted)", fontSize: "1.0625rem" }}>
        The link may be old or mistyped. Everything lives on the home page: my work, experience and a way to get in
        touch.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        Back to the home page
        <ArrowRight />
      </Link>
    </main>
  );
}
