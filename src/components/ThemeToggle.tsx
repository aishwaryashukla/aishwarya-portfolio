"use client";

import { useEffect } from "react";

import { Moon, Sun } from "@/components/Icons";
import styles from "./ThemeToggle.module.css";

const STORAGE_KEY = "theme";

function storedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * The active theme lives on <html data-theme>, set before paint by the script in
 * layout.tsx. CSS picks which icon to show, so there is no hydration mismatch.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  // Follow OS theme changes until the visitor picks a theme themselves.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!storedTheme()) document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the switch still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
    </button>
  );
}
