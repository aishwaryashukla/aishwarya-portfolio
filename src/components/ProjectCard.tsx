interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tech: string[];
    index: number;
    bentoClass?: string;
}

export default function ProjectCard({ title, description, link, tech, index, bentoClass }: ProjectCardProps) {
    const paddedIndex = (index + 1).toString().padStart(2, '0');

    return (
        <div className={`project-card-wrapper reveal ${bentoClass || ''}`}>
            <span className="project-index">{paddedIndex}</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-pro">
                <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-desc" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>{description}</p>
                    <div className="tech-stack">
                        {tech.map((item, idx) => (
                            <span key={idx} className="available-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="card-glow"></div>
            </a>
        </div>
    );
}
