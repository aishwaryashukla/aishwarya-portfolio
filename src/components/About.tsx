import SectionHeading from "@/components/SectionHeading";
import { about } from "@/content/site";
import styles from "./About.module.css";

export default function About() {
  const [lede, ...rest] = about.paragraphs;

  return (
    <section id="about" className={`section ${styles.section}`} aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          titleId="about-title"
          index="04"
          label="About"
          title={
            <>
              Close to the problem, <em>close to the code.</em>
            </>
          }
        />

        <div className={styles.grid}>
          <div className={styles.story}>
            <p className={`display ${styles.lede}`} data-reveal>
              {lede}
            </p>
            {rest.map((paragraph, index) => (
              <p
                key={paragraph}
                className={styles.paragraph}
                data-reveal
                style={{ "--reveal-delay": `${(index + 1) * 80}ms` } as React.CSSProperties}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className={styles.facts} data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {about.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className="label">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.toolkit} data-reveal>
          <h3 className="label">Toolkit</h3>
          <div className={styles.groups}>
            {about.toolkit.map((group) => (
              <div key={group.group} className={styles.group}>
                <p className={styles.groupName}>{group.group}</p>
                <ul className={styles.items}>
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
