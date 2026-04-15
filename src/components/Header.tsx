import Link from "next/link";

export default function Header() {
    return (
        <header className="header-glass">
            <div className="header-content">
                <Link href="/" className="logo">
                    AISHWARYASHUKLA<span style={{ color: "var(--primary)" }}>.INFO</span>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="available-badge">
                        <div className="pulse"></div>
                        STRATEGIC AI LEADERSHIP
                    </div>
                    <nav className="nav-links">
                        <a href="#expertise">EXPERTISE</a>
                        <Link href="#projects">PROJECTS</Link>
                        <a href="#contact">CONTACT</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
