interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    index: number;
    bentoClass?: string;
}

export default function ProjectCard({ title, description, link, index, bentoClass }: ProjectCardProps) {
    const paddedIndex = (index + 1).toString().padStart(2, '0');

    return (
        <div className={`project-card-wrapper reveal ${bentoClass || ''}`}>
            <span className="project-index">{paddedIndex}</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-pro">
                <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-desc" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{description}</p>
                </div>
                <div className="card-glow"></div>
            </a>
        </div>
    );
}
