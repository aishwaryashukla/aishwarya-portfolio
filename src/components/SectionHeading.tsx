import type { ReactNode } from "react";

import styles from "./SectionHeading.module.css";

type Props = {
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  titleId: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
};

/** Report-style section opener: numbered rule, serif title and optional intro. */
export default function SectionHeading({ titleId, index, label, title, intro, aside }: Props) {
  return (
    <header className={styles.heading}>
      <div className={styles.rule} data-reveal>
        <span className="label">{index}</span>
        <span className="label">{label}</span>
        <span className={styles.line} aria-hidden="true" />
        {aside && <span className="label">{aside}</span>}
      </div>
      <div className={styles.body}>
        <h2 id={titleId} className={`display ${styles.title}`} data-reveal>
          {title}
        </h2>
        {intro && (
          <p className={styles.intro} data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
