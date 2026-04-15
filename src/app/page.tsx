"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import ProjectsGrid from "@/components/ProjectsGrid";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-container">
      <Header />
      <main>
        <Hero />
        <Stats />

        <section className="section" id="philosophy">
          <div className="reveal">
            <div style={{ maxWidth: '800px' }}>
              <h2 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.2em' }}>VISION & STRATEGY</h2>
              <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>BRINGING <span className="outline-text">IDEAS TO LIFE</span></h3>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--muted)' }}>
                I specialize in bringing ideas to life by transforming complex concepts into highly functional, robust solutions. From designing and leading enterprise-level data platforms to engineering sophisticated AI and analytics tools, I bridge the gap between technical possibility and strategic business outcomes.
              </p>
            </div>
          </div>
        </section>

        <Expertise />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
