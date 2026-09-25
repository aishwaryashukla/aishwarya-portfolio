import ContactForm from "@/components/ContactForm";
import { ArrowUpRight, Download, LinkedIn } from "@/components/Icons";
import LocalTime from "@/components/LocalTime";
import { site } from "@/content/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.card} data-reveal>
          <div className={styles.intro}>
            <p className={`label ${styles.kicker}`}>
              <span>05</span> Contact
            </p>
            <h2 id="contact-title" className={`display ${styles.title}`}>
              Have a role or a project in mind? <em>Let&apos;s talk.</em>
            </h2>
            <p className={styles.lead}>
              Tell me a little about what you&apos;re working on: a senior role, a product idea, or a data or AI
              challenge.
            </p>

            <ul className={styles.direct}>
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  <span className={styles.directIcon}>
                    <LinkedIn />
                  </span>
                  <span>
                    <span className={styles.directLabel}>LinkedIn</span>
                    <span className={styles.directValue}>in/aishwaryashukla</span>
                  </span>
                  <ArrowUpRight className={styles.directArrow} />
                </a>
              </li>
              {site.resume && (
                <li>
                  <a href={site.resume} download>
                    <span className={styles.directIcon}>
                      <Download />
                    </span>
                    <span>
                      <span className={styles.directLabel}>Résumé</span>
                      <span className={styles.directValue}>PDF download</span>
                    </span>
                    <ArrowUpRight className={styles.directArrow} />
                  </a>
                </li>
              )}
            </ul>

            <p className={styles.where}>
              <span className={styles.whereDot} aria-hidden="true" />
              Based in {site.location} · <LocalTime /> · working with teams worldwide
            </p>
          </div>

          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
