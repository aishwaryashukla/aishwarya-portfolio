import { highlights } from "@/content/site";
import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section className={styles.section} aria-label="Highlights">
      <dl className={`container ${styles.grid}`}>
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={styles.item}
            data-reveal
            style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
          >
            <dt className={styles.label}>{item.label}</dt>
            <dd className={`display ${styles.value}`}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
