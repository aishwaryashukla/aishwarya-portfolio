interface MarqueeProps {
    items?: string[];
}

const Marquee = ({ items }: MarqueeProps) => {
    const defaultItems = ["AGENTIC AI", "ENTERPRISE ARCHITECTURE", "GEN AI", "DATA SCIENCE", "RISK ANALYTICS"];
    const displayItems = items || defaultItems;
    const text = displayItems.join(" • ") + " • ";

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {Array(10).fill(text).join("") || text}
            </div>
        </div>
    );
};

export default Marquee;
