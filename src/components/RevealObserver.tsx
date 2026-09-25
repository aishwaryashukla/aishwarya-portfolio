"use client";

import { useEffect } from "react";

/**
 * Fades [data-reveal] elements in as they scroll into view. Elements that are
 * already on screen when this runs stay visible, and nothing is hidden at all
 * without JavaScript or when the visitor prefers reduced motion.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const fold = window.innerHeight * 0.95;

    for (const el of elements) {
      if (el.getBoundingClientRect().top < fold) el.classList.add("is-visible");
    }
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
    );
    for (const el of elements) {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
