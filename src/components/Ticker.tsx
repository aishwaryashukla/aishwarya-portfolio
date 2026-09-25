import styles from "./Ticker.module.css";

/** A market-ticker style tape of focus areas. The list is duplicated for a seamless loop. */
export default function Ticker({ items }: { items: string[] }) {
  return (
    <div className={styles.ticker}>
      <p className="visually-hidden">Focus areas: {items.join(", ")}.</p>
      <div className={styles.track} aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className={styles.list}>
            {items.map((item) => (
              <li key={item}>
                <span className={styles.glyph}>▲</span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
