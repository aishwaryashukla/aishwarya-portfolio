import Image from "next/image";

import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { ArrowUpRight, Check } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects, moreProjects, type Project } from "@/content/site";
import styles from "./Work.module.css";

function plateStyle(project: Project) {
  return { "--plate-a": project.plate[0], "--plate-b": project.plate[1] } as React.CSSProperties;
}

function Visual({ project, sizes }: { project: Project; sizes: string }) {
  const href = project.links[0]?.href;
  const content = project.image ? (
    <>
      <BrowserFrame
        image={project.image}
        alt={project.imageAlt ?? project.name}
        domain={project.domain}
        sizes={sizes}
        className={`${styles.browser} ${project.mobile ? styles.browserWithPhone : ""}`}
      />
      {project.mobile && (
        <PhoneFrame
          image={project.mobile.image}
          alt={project.mobile.alt}
          sizes="(max-width: 900px) 30vw, 200px"
          className={styles.phone}
        />
      )}
    </>
  ) : (
    <div className={styles.typePlate}>
      <span className={styles.typeDomain}>{project.domain}</span>
      <p className={`display ${styles.typeTitle}`}>{project.name}</p>
      {project.plateNote && <span className={styles.typeNote}>{project.plateNote}</span>}
      <svg className={styles.ornament} viewBox="0 0 200 200" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <line key={i} x1="100" y1="100" x2="100" y2="4" transform={`rotate(${i * 15} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="44" />
      </svg>
    </div>
  );

  // The whole plate links to the live product for pointer users; keyboard and
  // screen-reader users get the explicit links next to it instead.
  return (
    <a
      href={href}
      className={styles.visual}
      style={plateStyle(project)}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      aria-hidden="true"
    >
      {content}
    </a>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className={styles.links}>
      {project.links.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          className={index === 0 ? "btn btn-primary" : "btn btn-secondary"}
          target="_blank"
          rel="noreferrer"
        >
          {index === 0 ? `Visit ${link.label}` : link.label}
          <ArrowUpRight />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

function Feature({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <article className={styles.feature} aria-labelledby={`${project.slug}-title`}>
      <div className={styles.featureVisual} data-reveal>
        <Visual project={project} sizes="(max-width: 900px) 92vw, 640px" />
      </div>

      <div className={styles.info} data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        <p className={styles.meta}>
          <span className={`label ${styles.count}`}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="label">{project.kicker}</span>
        </p>

        <h3 id={`${project.slug}-title`} className={`display ${styles.name}`}>
          {project.name}
        </h3>
        {project.companion && (
          <p className={styles.companion}>
            {project.appIcon && (
              <Image src={project.appIcon} alt="" width={28} height={28} className={styles.appIcon} />
            )}
            {project.companion}
          </p>
        )}

        <p className={styles.summary}>{project.summary}</p>

        <ul className={styles.points}>
          {project.highlights.map((point) => (
            <li key={point}>
              <Check />
              {point}
            </li>
          ))}
        </ul>

        <dl className={styles.specs}>
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Built with</dt>
            <dd className={styles.chips}>
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const link = project.links[0];
  return (
    <article
      className={styles.card}
      aria-labelledby={`${project.slug}-title`}
      data-reveal
      style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <Visual project={project} sizes="(max-width: 900px) 92vw, 600px" />
      <div className={styles.cardBody}>
        <p className="label">{project.kicker}</p>
        <h3 id={`${project.slug}-title`} className={`display ${styles.cardName}`}>
          {project.name}
        </h3>
        <p className={styles.cardSummary}>{project.summary}</p>
        {link && (
          <a href={link.href} className="link" target="_blank" rel="noreferrer">
            {link.label}
            <ArrowUpRight />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          titleId="work-title"
          index="01"
          label="Selected work"
          aside="All live"
          title={
            <>
              Products I&apos;ve designed, built <em>and shipped.</em>
            </>
          }
          intro="Independent products I've taken from idea to production, covering product thinking, UX, full-stack engineering, AI and deployment. Everything here is live, so feel free to try it."
        />

        <div className={styles.features}>
          {featuredProjects.map((project, index) => (
            <Feature key={project.slug} project={project} index={index} total={featuredProjects.length} />
          ))}
        </div>

        <div className={styles.moreHead} data-reveal>
          <h3 className="label">Client &amp; community websites</h3>
          <span className={styles.moreLine} aria-hidden="true" />
        </div>
        <div className={styles.cards}>
          {moreProjects.map((project, index) => (
            <Card key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
