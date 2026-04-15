const Expertise = () => {
    const skills = [
        {
            title: "Big Data & AI Development",
            description: "Led AI-driven transformation efforts, including RAG models using LLMs for secure document intelligence.",
            highlight: "AI/ML Innovation"
        },
        {
            title: "Data Engineering & Pipeline Solutions",
            description: "Designed core data pipelines, ingestion architectures, and advanced analytics frameworks that improved data transparency globally.",
            highlight: "Core Systems"
        },
        {
            title: "Global Team Management",
            description: "Directed APAC-level data engineering and automation functions, overseeing teams for IT support and complex application engineering.",
            highlight: "Cross-Functional Leadership"
        },
        {
            title: "DevOps & CI/CD",
            description: "Established an efficient DevOps model implementing Azure-based CI/CD pipelines to ensure application scalability and security.",
            highlight: "Cloud Infrastructure"
        }
    ]

    return (
        <section className="section" id="expertise">
            <div className="reveal">
                <h2 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.2em' }}>EXPERT CAPABILITIES</h2>
                <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '4rem', lineHeight: '1.1' }}>
                    BRIDGING COMPLEXITY <br />
                    <span className="outline-text">WITH INTELLIGENCE</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skills.map((skill, index) => (
                        <div key={index} className="project-card-pro" style={{ padding: '2.5rem' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.1em' }}>
                                {skill.highlight}
                            </div>
                            <h4 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{skill.title}</h4>
                            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.6' }}>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Expertise
