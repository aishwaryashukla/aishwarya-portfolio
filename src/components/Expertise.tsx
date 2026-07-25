const Expertise = () => {
    const skills = [
        {
            title: "Client Experience & Consulting",
            description: "Enhanced overall client working experience through data-driven approaches, driving rapid resolution workflows that improved executive decision turnaround and transparency across strategic partnerships.",
            highlight: "Strategic Partnership"
        },
        {
            title: "Business Problem Orchestration",
            description: "Solved complex enterprise challenges by bridging the gap between business needs and high-end technical architectures, architecting enterprise-grade prototypes that validate ROI before full-scale deployment.",
            highlight: "Problem Solver"
        },
        {
            title: "Investment Analytics Strategy",
            description: "Delivering institutional-grade data frameworks for portfolio managers to evaluate research alpha, providing quantitative models to measure analyst performance and research value at scale.",
            highlight: "Financial Intelligence"
        },
        {
            title: "Global Leadership & Operations",
            description: "Leading multi-market APAC engineering teams to modernize core automation and data infrastructure, overseeing cross-functional teams to drive digital transformation and IT excellence.",
            highlight: "Executive Management"
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
