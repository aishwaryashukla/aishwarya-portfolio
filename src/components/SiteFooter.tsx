import Link from "next/link";

import { ArrowUp, ArrowUpRight } from "@/components/Icons";
import LocalTime from "@/components/LocalTime";
import { nav, site } from "@/content/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const [firstName, ...lastNames] = site.name.split(" ");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <p className={`display ${styles.wordmark}`} aria-hidden="true">
            {firstName} <em>{lastNames.join(" ")}</em>
          </p>
          <Link href="/#top" className={styles.backToTop}>
            Back to top
            <ArrowUp />
          </Link>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {site.name}
          </p>

          <nav aria-label="Footer">
            <ul className={styles.links}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={`/${item.href}`}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight />
                </a>
              </li>
              {site.resume && (
                <li>
                  <a href={site.resume} download>
                    Résumé
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <p className={styles.time}>
            {site.location} · <LocalTime />
          </p>
        </div>
      </div>
    </footer>
  );
}
