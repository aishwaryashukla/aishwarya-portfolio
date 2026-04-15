export default function Stats() {
    const stats = [
        { value: "14+", label: "YEARS EXP" },
        { value: "VP", label: "LEADERSHIP" },
        { value: "GLOBAL", label: "SCALE ANALYTICS" },
        { value: "AI", label: "AGENTIC FOCUS" },
    ];

    return (
        <section className="section">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item reveal">
                        <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
