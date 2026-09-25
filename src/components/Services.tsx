import { ArrowRight, Compass, Database, Devices, Spark } from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { engagementSteps, services } from "@/content/site";
import styles from "./Services.module.css";

const icons = [Spark, Database, Devices, Compass];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          titleId="services-title"
          index="03"
          label="Services"
          aside="Remote · Hong Kong"
          title={
            <>
              Bring me in for <em>the hard parts.</em>
            </>
          }
          intro="I take on select projects where deep experience in data, AI and finance makes a real difference. You work with me directly, from the first conversation to launch."
        />

        <ul className={styles.grid}>
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li
                key={service.title}
                className={styles.card}
                data-reveal
                style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span className={`label ${styles.index}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                </div>
                <h3 className={`display ${styles.title}`}>{service.title}</h3>
                <p className={styles.body}>{service.body}</p>
                <div className={styles.tags}>
                  {service.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.process} data-reveal>
          <h3 className="label">How we&apos;d work together</h3>
          <ol className={styles.steps}>
            {engagementSteps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepIndex}>{index + 1}</span>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className={styles.cta}>
            <p>Have something in mind? Tell me about it.</p>
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a project
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
