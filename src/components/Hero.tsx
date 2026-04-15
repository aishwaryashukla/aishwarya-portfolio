import Marquee from './Marquee'

const Hero = () => {
    return (
        <section className="hero" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
            <div className="section" style={{ position: 'relative' }}>
                <div className="reveal">
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.3rem', fontWeight: 700 }}>
                        STRATEGIC TECHNOLOGY & ANALYTICS LEADER
                    </h2>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1', marginBottom: '2rem' }}>
                        AISHWARYASHUKLA<span className="outline-text">.INFO</span>
                    </h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'start' }}>
                        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '500px', lineHeight: '1.6' }}>
                            Strategic and innovation-driven technology leader with over 15 years of experience driving digital transformation, AI adoption, and enterprise-level IT operations across financial and investment platforms.
                        </p>
                        <div style={{ textAlign: 'right' }}>
                            <div className="available-badge">
                                <div className="pulse"></div>
                                STRATEGIC AI LEADERSHIP
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal" style={{ marginTop: '6rem', position: 'relative', height: '400px' }}>
                    <div style={{
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
                    <div style={{ position: 'absolute', bottom: '2rem', left: '0', zIndex: '2' }}>
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
