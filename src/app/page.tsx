import portrait from "@/assets/portrait.jpg";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { about, site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${portrait.src}`,
  jobTitle: "Vice President",
  worksFor: { "@type": "Organization", name: "BlackRock" },
  address: { "@type": "PostalAddress", addressLocality: site.location },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "The University of Hong Kong" },
    { "@type": "CollegeOrUniversity", name: "Birla Institute of Technology, Mesra" },
  ],
  knowsAbout: about.toolkit.flatMap((group) => group.items),
  sameAs: [site.linkedin],
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Highlights />
      <Work />
      <Experience />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
