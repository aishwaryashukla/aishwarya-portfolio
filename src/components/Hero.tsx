import Marquee from './Marquee'

const Hero = () => {
    return (
        <section className="hero" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
            <div className="section" style={{ position: 'relative' }}>
                <div className="reveal">
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.3rem', fontWeight: 700 }}>
                        STRATEGIC BUSINESS PROBLEM SOLVER
                    </h2>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1', marginBottom: '2rem' }}>
                        AISHWARYASHUKLA<span className="outline-text">.INFO</span>
                    </h1>

                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'start' }}>
                        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '500px', lineHeight: '1.6' }}>
                            Strategic and innovation-driven leader with over 20 years of experience solving complex business problems through data-driven insights, client-centric consulting, and agile technical orchestration.
                        </p>
                        <div className="hero-cta-row">
                            <a
                                href="https://www.linkedin.com/in/aishwaryashukla/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-primary"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                View LinkedIn Profile
                            </a>
                            <a
                                href="#contact"
                                className="cta-btn cta-secondary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Get in Touch
                            </a>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div className="available-badge">
                                <div className="pulse"></div>
                                STRATEGIC AI LEADERSHIP
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal" style={{ marginTop: '6rem', position: 'relative', height: '400px' }}>
                    <div className="hero-portrait-container" style={{
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        width: '60%',
                        height: '100%',
                        background: 'linear-gradient(45deg, var(--secondary), transparent)',
                        borderRadius: '24px',
                        border: '1px solid var(--glass-border)',
                        overflow: 'hidden'
                    }}>
                        <img src="/aishwarya_portrait.png" alt="Aishwarya Shukla" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} />
                    </div>
                    <div className="hero-orchestration-text" style={{ position: 'absolute', bottom: '2rem', left: '0', zIndex: '2' }}>
                        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0' }}>AGENTIC AI</h3>
                        <h3 className="outline-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>ORCHESTRATION</h3>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '4rem' }}>
                <Marquee items={['AGENTIC AI', 'ENTERPRISE ARCHITECTURE', 'GEN AI FOR FINANCE', 'DATA PIPELINES', 'DATA ENGINEERING', 'RISK SYSTEMS']} />
            </div>
        </section>
    )
}

export default Hero
