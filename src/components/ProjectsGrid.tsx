import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    const projects = [
        {
            title: "OFFICEGOOGLE",
            description: "A comprehensive digital solution with integrated management features.",
            link: "http://officegoogle.com",
            tech: ["Python", "Django", "React"],
            bentoClass: "bento-large"
        },
        {
            title: "SENSEISAM",
            description: "Educational platform designed for structured learning and growth.",
            link: "http://Senseisam.com",
            tech: ["Python", "React", "EdTech"],
            bentoClass: "bento-medium"
        },
        {
            title: "MYWEALTHWATCH",
            description: "Financial tracking and portfolio management dashboard.",
            link: "http://mywealthwatch.com",
            tech: ["Django", "React", "Finance"],
            bentoClass: "bento-medium"
        },
        {
            title: "PATH SOLUTION DIAGNOSTICS",
            description: "Diagnostic services platform delivering critical healthcare solutions.",
            link: "https://pathsolutiondiagnostics.com/",
            tech: ["Web Technologies", "Healthcare"],
            bentoClass: "bento-small"
        },
        {
            title: "HINDU ASSOCIATION HK",
            description: "Community and cultural association portal for Hong Kong members.",
            link: "https://www.hinduassociationhk.com/",
            tech: ["Web Development", "Community"],
            bentoClass: "bento-small"
        },
        {
            title: "OFFINEX (iOS APP)",
            description: "Mobile application for continuous offline connectivity and utility.",
            link: "https://apps.apple.com/hk/app/offinex/id6760941493?l=en-GB",
            tech: ["iOS", "Swift", "Mobile"],
            bentoClass: "bento-wide"
        }
    ];

    return (
        <section className="section" id="projects">
            <div className="reveal">
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.2em' }}>SELECTED WORK</h2>
                <h3 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1, marginBottom: '5rem' }}>FEATURED <br /><span className="outline-text">PROJECTS</span></h3>
            </div>
            <div className="bento-grid">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} index={idx} />
                ))}
            </div>
        </section>
    );
}
