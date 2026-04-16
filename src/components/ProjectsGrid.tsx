import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    const projects = [
        {
            title: "OFFICEGOOGLE",
            description: "Solving enterprise efficiency through a unified digital ecosystem that streamlines operations and management workflows.",
            link: "http://officegoogle.com",
            bentoClass: "bento-large"
        },
        {
            title: "SENSEISAM",
            description: "Bridging the gap in structured learning with a platform designed to solve retention and growth challenges for education businesses.",
            link: "http://Senseisam.com",
            bentoClass: "bento-medium"
        },
        {
            title: "MYWEALTHWATCH",
            description: "Solving financial transparency issues for high-net-worth portfolios with a data-driven tracking and analytics infrastructure.",
            link: "http://mywealthwatch.com",
            bentoClass: "bento-medium"
        },
        {
            title: "PATH SOLUTION DIAGNOSTICS",
            description: "Enhancing healthcare delivery by solving critical connectivity and data management challenges for diagnostic services.",
            link: "https://pathsolutiondiagnostics.com/",
            bentoClass: "bento-small"
        },
        {
            title: "HINDU ASSOCIATION HK",
            description: "Optimizing community engagement and operational transparency for a major non-profit cultural organization.",
            link: "https://www.hinduassociationhk.com/",
            bentoClass: "bento-small"
        },
        {
            title: "OFFINEX (iOS APP)",
            description: "Addressing the digital divide with a connectivity-first utility that ensures business-critical operations continue offline.",
            link: "https://apps.apple.com/hk/app/offinex/id6760941493?l=en-GB",
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
