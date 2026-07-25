interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
    index: number;
    bentoClass?: string;
    role?: string;
}

export default function ProjectCard({ title, description, link, image, index, bentoClass, role }: ProjectCardProps) {
    const paddedIndex = (index + 1).toString().padStart(2, '0');

    return (
        <div className={`project-card-wrapper reveal ${bentoClass || ''}`}>
            <span className="project-index">{paddedIndex}</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-pro">
                <div className="project-content">
                    {role && (
                        <span className="project-role-badge">{role}</span>
                    )}
                    <h3 className="project-title">{title}</h3>
                    <p className="project-desc" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.85 }}>{description}</p>
                </div>
                
                <div className="project-visual-container">
                    <div className="browser-mockup">
                        <div className="browser-header">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="image-wrap">
                            <img src={image} alt={title} className="project-image" loading="lazy" />
                        </div>
                    </div>
                </div>
                
                <div className="card-glow"></div>
            </a>
        </div>
    );
}
