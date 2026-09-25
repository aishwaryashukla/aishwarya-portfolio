import Image from "next/image";

import portrait from "@/assets/portrait.jpg";
import { ArrowRight, Download, LinkedIn, Trophy } from "@/components/Icons";
import LocalTime from "@/components/LocalTime";
import Ticker from "@/components/Ticker";
import { hero, site, ticker } from "@/content/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const { statement, badges, clients } = hero;

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {site.availability}
            <span className={styles.statusSep} aria-hidden="true" />
            <span className={styles.statusMuted}>{site.location}</span>
          </p>

          <h1 id="hero-title" className={`display ${styles.statement}`}>
            {statement.before} <em>{statement.emphasis}</em> {statement.after}
          </h1>

          <p className={styles.intro}>
            <strong>{hero.intro.lead}</strong> {hero.intro.body}
          </p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a project
              <ArrowRight />
            </a>
            {site.resume && (
              <a href={site.resume} className="btn btn-secondary btn-lg" download>
                Download résumé
                <Download />
              </a>
            )}
            <a
              href={site.linkedin}
              className={styles.social}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedIn />
            </a>
          </div>

          <div className={styles.clients}>
            <p className="label">Built technology for</p>
            <ul>
              {clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        </div>

        <figure className={styles.figure}>
          <div className={styles.print}>
            <Image
              src={portrait}
              alt={`Portrait of ${site.name}`}
              placeholder="blur"
              preload
              sizes="(max-width: 900px) 80vw, 420px"
              className={styles.photo}
            />
          </div>
          <figcaption className={`label ${styles.caption}`}>
            <span>Fig. 01</span>
            <span>
              {site.name}, {site.location}
            </span>
          </figcaption>

          <div className={`${styles.badge} ${styles.badgeAward}`}>
            <span className={styles.badgeIcon}>
              <Trophy />
            </span>
            <span>
              <strong>{badges.award.title}</strong>
              <span className={styles.badgeDetail}>{badges.award.detail}</span>
            </span>
          </div>

          <div className={`${styles.badge} ${styles.badgeTime}`}>
            <span className={styles.clockDot} aria-hidden="true" />
            <span>
              <strong>
                <LocalTime />
              </strong>
              <span className={styles.badgeDetail}>Local time · GMT+8</span>
            </span>
          </div>
        </figure>
      </div>

      <Ticker items={ticker} />
    </section>
  );
}
