import { ArrowRight, Download, LinkedIn, Trophy } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { credentials, experience, site } from "@/content/site";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`} aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          titleId="experience-title"
          index="02"
          label="Experience"
          aside="2006 — Now"
          title={
            <>
              From trading systems to <em>AI at scale.</em>
            </>
          }
          intro="15+ years across engineering and leadership, from middle-office trading systems to data platforms and AI for one of the world's largest asset managers."
        />

        <ol className={styles.timeline}>
          {experience.map((role, index) => (
            <li key={`${role.company}-${role.period}`} className={styles.role} data-reveal>
              <p className={`label ${styles.period}`}>
                {index === 0 && <span className={styles.current} aria-hidden="true" />}
                {role.period}
              </p>

              <div className={styles.main}>
                <h3 className={styles.company}>
                  {role.company}
                  {role.client && <span className={styles.client}>{role.client}</span>}
                </h3>
                <p className={styles.title}>{role.title}</p>
                {role.summary && <p className={styles.summary}>{role.summary}</p>}
                {role.points && (
                  <ul className={styles.points}>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {role.tags && (
                  <div className={styles.tags}>
                    {role.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className={`label ${styles.location}`}>{role.location}</p>
            </li>
          ))}
        </ol>

        <ul className={styles.credentials} aria-label="Education, awards and certifications">
          {credentials.map((item, index) => (
            <li
              key={item.title}
              className={`${styles.credential} ${item.kind === "Award" ? styles.award : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <span className="label">{item.kind}</span>
              {item.kind === "Award" && <Trophy className={styles.trophy} />}
              <p className={styles.credentialTitle}>{item.title}</p>
              <p className={styles.credentialDetail}>{item.detail}</p>
            </li>
          ))}
        </ul>

        <aside className={styles.hiring} data-reveal aria-labelledby="hiring-title">
          <div>
            <p className={`label ${styles.hiringLabel}`}>For recruiters &amp; hiring teams</p>
            <h3 id="hiring-title" className={`display ${styles.hiringTitle}`}>
              Hiring for a senior technology role?
            </h3>
            <p className={styles.hiringText}>
              I lead teams across data engineering, analytics and AI, and I still like to stay close to the code. My
              résumé has the full story.
            </p>
          </div>
          <div className={styles.hiringActions}>
            {site.resume && (
              <a href={site.resume} className="btn btn-lg btn-accent" download>
                Download résumé
                <Download />
              </a>
            )}
            <a href={site.linkedin} className={`btn btn-lg ${styles.ghost}`} target="_blank" rel="noreferrer">
              <LinkedIn />
              Connect on LinkedIn
            </a>
            <a href="#contact" className={`link ${styles.hiringLink}`}>
              Or send a message
              <ArrowRight />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
