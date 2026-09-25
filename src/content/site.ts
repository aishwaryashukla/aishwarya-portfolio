/**
 * All of the site's copy and data lives here, so the page can be updated
 * without touching any component or style.
 */
import type { StaticImageData } from "next/image";

import officegoogleShot from "@/assets/work/officegoogle.webp";
import offinexAiShot from "@/assets/work/offinex-ai.webp";
import offinexIcon from "@/assets/work/offinex-icon.webp";
import mywealthwatchShot from "@/assets/work/mywealthwatch.webp";
import senseisamShot from "@/assets/work/senseisam.webp";
import pathsolutionShot from "@/assets/work/pathsolution.webp";

export const site = {
  name: "Aishwarya Shukla",
  firstName: "Aishwarya",
  role: "Technology & AI Leader",
  url: "https://aishwaryashukla.info",
  location: "Hong Kong",
  timeZone: "Asia/Hong_Kong",
  timeZoneLabel: "HKT",
  linkedin: "https://www.linkedin.com/in/aishwaryashukla/",
  /** Set to `null` to hide every résumé download button. */
  resume: "/Aishwarya-Shukla-Resume.pdf" as string | null,
  title: "Aishwarya Shukla — Technology & AI Leader in Hong Kong",
  description:
    "Aishwarya Shukla is a Hong Kong–based technology and AI leader with 15+ years building data platforms, risk analytics and AI for global investment teams, and a builder of independent web and mobile products.",
  availability: "Available for select projects",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export const hero = {
  statement: { before: "I turn complex data into", emphasis: "intelligent", after: "products." },
  intro: {
    lead: "I'm Aishwarya Shukla,",
    body: "a VP at BlackRock in Hong Kong with 15+ years building data platforms, risk analytics and AI for global investment teams. I also design and ship products of my own, from first sketch to the App Store.",
  },
  badges: {
    award: { title: "3× Hackathon Champion", detail: "BlackRock APAC · 2021 · 2022 · 2024" },
  },
  /** Organisations whose technology I've built (directly or via Wipro and TCS). */
  clients: ["BlackRock", "Royal Bank of Scotland", "Citi", "Nortel Networks"],
};

export const ticker = [
  "Agentic AI",
  "RAG & LLMs",
  "Data platforms",
  "Risk analytics",
  "Portfolio analytics",
  "Python",
  "React",
  "Azure",
  "CI/CD",
  "Machine learning",
  "Product strategy",
  "Team leadership",
];

export const highlights = [
  { value: "15+", label: "Years building and leading technology in finance" },
  { value: "40%", label: "Less manual work from portfolio analytics frameworks I built" },
  { value: "3×", label: "BlackRock APAC Hackathon champion — 2021, 2022, 2024" },
  { value: "6", label: "Products and websites designed and shipped independently" },
];

export type Project = {
  slug: string;
  name: string;
  companion?: string;
  kicker: string;
  summary: string;
  highlights: string[];
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  /** Domain shown in the browser frame's address bar. */
  domain: string;
  image?: StaticImageData;
  imageAlt?: string;
  mobile?: { image: StaticImageData; alt: string };
  appIcon?: StaticImageData;
  /** Two colours for the artwork plate behind the screenshot. */
  plate: [string, string];
  /** Shown on a typographic plate when there is no screenshot. */
  plateNote?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "officegoogle",
    name: "OfficeGoogle",
    companion: "Offinex for iPhone & iPad",
    kicker: "Productivity suite · Web & iOS",
    summary:
      "An all-in-one workspace for everyday office work: world-time meeting planning, PDF, QR, image and text tools, invoices, file diffs and time tracking, with a built-in AI assistant. It ships on the web and on the App Store as Offinex.",
    highlights: [
      "Ten everyday tools behind one clean, consistent interface",
      "OfficeBot, an in-app AI assistant running open models such as Llama 3.2",
      "Published for iPhone and iPad on the App Store as Offinex",
    ],
    role: "Product, design and full-stack engineering",
    stack: ["Python", "React", "LLMs", "iOS"],
    links: [
      { label: "officegoogle.com", href: "https://officegoogle.com" },
      { label: "App Store", href: "https://apps.apple.com/hk/app/offinex/id6760941493" },
    ],
    domain: "officegoogle.com",
    image: officegoogleShot,
    imageAlt: "OfficeGoogle's World Time Planner comparing Hong Kong, London, New York and Tokyo",
    mobile: { image: offinexAiShot, alt: "Offinex iPhone app showing its Smart AI Tools screen" },
    appIcon: offinexIcon,
    plate: ["#5b83ff", "#1c3fc4"],
  },
  {
    slug: "mywealthwatch",
    name: "MyWealthWatch",
    companion: "by AuntyQuanty",
    kicker: "Personal finance · FinTech",
    summary:
      "A wealth tracker for people whose money lives in several countries and currencies. It covers net-worth history, global asset allocation with automatic FX conversion, goals, statement ingestion and AI-powered insights.",
    highlights: [
      "Multi-currency net worth, normalised automatically across markets",
      "AI agents and statement ingestion to keep records current",
      "Free planning calculators: FIRE, retirement, rent vs. buy and tax",
    ],
    role: "Product, design and full-stack engineering",
    stack: ["Python", "React", "AI agents"],
    links: [{ label: "mywealthwatch.com", href: "https://mywealthwatch.com" }],
    domain: "mywealthwatch.com",
    image: mywealthwatchShot,
    imageAlt: "MyWealthWatch rent-versus-buy calculator with a 30-year net worth projection",
    plate: ["#8a78ff", "#3d2bb0"],
  },
  {
    slug: "senseisam",
    name: "SenseiSam",
    kicker: "EdTech · Learning platform",
    summary:
      "An adaptive practice platform for K-12 students, parents and teachers. It has a distraction-free test runner, deep performance analytics, a marketplace for published tests and parent controls, all aligned to CBSE, Cambridge and Common Core.",
    highlights: [
      "Timed test runner with hints and split-screen passage reading",
      "Analytics on accuracy, pace and topic mastery over time",
      "Test marketplace plus linked parent–child accounts",
    ],
    role: "Product, design and full-stack engineering",
    stack: ["Python", "React", "Analytics"],
    links: [{ label: "senseisam.com", href: "https://senseisam.com" }],
    domain: "senseisam.com",
    image: senseisamShot,
    imageAlt: "SenseiSam test marketplace with filters for curriculum, grade and subject",
    plate: ["#23b9a9", "#2a62d4"],
  },
];

export const moreProjects: Project[] = [
  {
    slug: "pathsolution",
    name: "PathSolution Diagnostics",
    kicker: "Healthcare · Website",
    summary:
      "Website for a growing network of pathology labs in Prayagraj, India, built around WhatsApp-first booking, home sample collection and digital report delivery.",
    highlights: [],
    role: "Design and build",
    stack: ["Website", "Booking funnel"],
    links: [{ label: "pathsolutiondiagnostics.com", href: "https://pathsolutiondiagnostics.com" }],
    domain: "pathsolutiondiagnostics.com",
    image: pathsolutionShot,
    imageAlt: "PathSolution Diagnostics homepage promoting digital reports over email or WhatsApp",
    plate: ["#f07a5c", "#c13f2c"],
  },
  {
    slug: "hindu-association",
    name: "The Hindu Association of Hong Kong",
    kicker: "Non-profit · Community website",
    summary:
      "Website for the Hindu Temple in Happy Valley, Hong Kong's first Hindu temple (opened in 1953), which serves a community of around 120,000 with events, services, resources and a gallery.",
    highlights: [],
    role: "Design and build",
    stack: ["Website", "Community"],
    links: [{ label: "hinduassociationhk.com", href: "https://www.hinduassociationhk.com" }],
    domain: "hinduassociationhk.com",
    plate: ["#f5a13a", "#c2410c"],
    plateNote: "Happy Valley · since 1953",
  },
];

export type Role = {
  period: string;
  company: string;
  client?: string;
  location: string;
  title: string;
  summary?: string;
  points?: string[];
  tags?: string[];
};

export const experience: Role[] = [
  {
    period: "2019 — Now",
    company: "BlackRock",
    location: "Hong Kong",
    title: "Vice President, Active Investing Analytics",
    summary:
      "Lead the Active Investing Analytics team in Hong Kong, delivering risk analytics and IT modernisation for investment platforms.",
    points: [
      "Led AI transformation, including a retrieval-augmented generation (RAG) platform on large language models for secure document intelligence and client-query automation.",
      "Built scalable portfolio management and analytics frameworks that improved transparency and cut manual dependency by 40%.",
      "Designed an enterprise data platform, with pipelines and data-access APIs, that became a model production platform for researchers.",
      "Established an Azure-based CI/CD and DevOps model for scalable, secure and reliable delivery.",
    ],
    tags: ["AI & LLMs", "Data platforms", "Risk analytics", "Azure DevOps", "Leadership"],
  },
  {
    period: "2011 — 2018",
    company: "BlackRock",
    location: "India",
    title: "Vice President, Head of Data Engineering — APAC",
    points: [
      "Directed APAC data engineering and automation, leading multi-disciplinary teams across IT support and digital tooling.",
      "Owned end-to-end product and reporting architecture for portfolio risk and return, staying hands-on in Python, Perl and EPL.",
      "Pioneered enterprise-wide automation that improved delivery efficiency and reporting accuracy.",
    ],
    tags: ["Data engineering", "Automation", "Team leadership"],
  },
  {
    period: "2011",
    company: "Royal Bank of Scotland",
    location: "Gurgaon",
    title: "Credit Risk Technology",
    summary: "Development and support for the Credit Risk team.",
  },
  {
    period: "2008 — 2011",
    company: "Wipro",
    client: "for Citi",
    location: "Mumbai",
    title: "Senior Software Engineer",
    summary: "Equity trading technology: middle-office application development and support for Citi.",
  },
  {
    period: "2006 — 2008",
    company: "Tata Consultancy Services",
    client: "for Nortel",
    location: "Mumbai",
    title: "Systems Engineer",
    summary: "Development and support for Nortel Networks' network management system.",
  },
];

export const credentials = [
  { kind: "Award", title: "3× APAC Hackathon Champion", detail: "BlackRock · 2021, 2022, 2024" },
  { kind: "Education", title: "PG Diploma, Investment Management", detail: "The University of Hong Kong · 2021" },
  { kind: "Education", title: "MCA & BCA, Computer Applications", detail: "Birla Institute of Technology, Mesra" },
  { kind: "Certification", title: "Sun Certified Java Professional", detail: "Sun Microsystems" },
];

export const services = [
  {
    title: "AI & LLM applications",
    body: "Retrieval-augmented assistants, document intelligence and agentic workflows, grounded in your own data and built to be secure.",
    tags: ["RAG", "LLMs", "Agents"],
  },
  {
    title: "Data platforms & analytics",
    body: "Pipelines, data-access APIs and analytics frameworks that replace manual work with reliable systems that scale.",
    tags: ["Pipelines", "APIs", "BI"],
  },
  {
    title: "Web & mobile products",
    body: "From idea to launched MVP: product thinking, UX, full-stack engineering in Python and React, and cloud deployment with CI/CD.",
    tags: ["Python", "React", "Azure"],
  },
  {
    title: "Technology advisory",
    body: "Architecture reviews, AI adoption roadmaps and delivery coaching for teams modernising how they build, especially in financial services.",
    tags: ["Strategy", "Architecture", "Agile"],
  },
];

export const engagementSteps = [
  { title: "Understand", body: "Start with the problem, the people and what success looks like." },
  { title: "Shape", body: "Agree a clear scope, architecture and plan before writing code." },
  { title: "Build", body: "Work in short iterations, with working software you can try early." },
  { title: "Launch", body: "Deploy, document and hand over cleanly, or stay on for support." },
];

export const about = {
  paragraphs: [
    "I'm Aishwarya, a technology leader based in Hong Kong. I started out as an engineer: network management software for Nortel at TCS, equity trading and middle-office systems for Citi at Wipro, then credit-risk technology at the Royal Bank of Scotland.",
    "I joined BlackRock in 2011, went on to lead data engineering and automation across APAC, and now lead the Active Investing Analytics team in Hong Kong, bringing data platforms, risk analytics and AI to investment teams.",
    "Through all of it I've kept building. I've been on the winning team at BlackRock's APAC hackathon three times, and in my own time I design and ship products, because putting technology in people's hands is the best way to understand it.",
  ],
  facts: [
    { label: "Based in", value: "Hong Kong (GMT+8)" },
    { label: "Education", value: "HKU — PG Diploma, Investment Management · BIT Mesra — MCA, BCA" },
    { label: "Certified", value: "Sun Certified Java Professional" },
    { label: "Languages", value: "English, Hindi · learning Mandarin" },
  ],
  toolkit: [
    { group: "AI & ML", items: ["LLMs", "RAG", "Agentic AI", "Machine learning"] },
    { group: "Data", items: ["Data pipelines", "Data APIs", "Big data", "Tableau", "Jupyter"] },
    { group: "Engineering", items: ["Python", "React", "Java", "Perl"] },
    { group: "Cloud & delivery", items: ["Azure", "Docker", "CI/CD", "Agile"] },
    { group: "Finance", items: ["Portfolio analytics", "Risk analytics", "Investment management"] },
  ],
};
