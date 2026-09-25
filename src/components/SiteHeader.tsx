"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { ArrowRight, Close, Download, LinkedIn, Menu } from "@/components/Icons";
import ThemeToggle from "@/components/ThemeToggle";
import { nav, site } from "@/content/site";
import styles from "./SiteHeader.module.css";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export default function SiteHeader() {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // Sections crossing a thin band in the middle of the viewport; none (e.g. at the hero) clears the highlight.
    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }
        const current = sections.find((section) => inBand.has(section.id));
        setActive(current ? `#${current.id}` : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape, focus the first link.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 960px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled || open ? styles.scrolled : ""} ${open ? styles.open : ""}`}
      >
        <div className={`container ${styles.bar}`}>
          <Link href="/#top" className={styles.brand} onClick={close}>
            <span className={styles.mark} aria-hidden="true">
              AS
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{site.name}</span>
              <span className={styles.brandRole}>{site.role}</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    className={styles.navLink}
                    aria-current={active === item.href ? "true" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <ThemeToggle className={styles.iconButton} />
            <Link href="/#contact" className={`btn btn-primary ${styles.cta}`}>
              Let&apos;s talk
              <ArrowRight />
            </Link>
            <button
              type="button"
              className={`${styles.iconButton} ${styles.menuButton}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise become the containing block. */}
      <div id="mobile-menu" ref={menuRef} className={styles.mobileMenu} hidden={!open}>
        <nav className="container" aria-label="Mobile">
          <ul className={styles.mobileList}>
            {[...nav, { href: "#contact", label: "Contact" }].map((item, index) => (
              <li key={item.href} style={{ "--i": index } as React.CSSProperties}>
                <Link href={`/${item.href}`} onClick={close}>
                  <span className="label">0{index + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileFooter}>
            {site.resume && (
              <a href={site.resume} className="btn btn-secondary" download>
                Résumé
                <Download />
              </a>
            )}
            <a href={site.linkedin} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <LinkedIn />
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
