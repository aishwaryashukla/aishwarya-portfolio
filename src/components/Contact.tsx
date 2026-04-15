import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="section" id="contact" style={{ paddingBottom: '10rem' }}>
            <div className="reveal">
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '0.2em' }}>GET IN TOUCH</h2>
                <h3 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1, marginBottom: '5rem' }}>LET'S <span className="outline-text">CONNECT</span></h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                        <div className="card-glow" style={{ opacity: 1 }}></div>
                        <img src="/DSCF8700.jpg" alt="Aishwarya Contact" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', mixBlendMode: 'luminosity', opacity: 0.8 }} />
                    </div>

                    <div className="project-card-pro" style={{ padding: '3rem' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>NAME</label>
                                <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', fontSize: '1.1rem' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>EMAIL</label>
                                <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', fontSize: '1.1rem' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>MESSAGE</label>
                                <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', fontSize: '1.1rem', resize: 'vertical' }}></textarea>
                            </div>

                            <button disabled={status === 'loading'} type="submit" style={{ padding: '1.2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s' }}>
                                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>

                            {status === 'success' && <p style={{ color: '#4ade80', textAlign: 'center', marginTop: '1rem' }}>Message sent successfully!</p>}
                            {status === 'error' && <p style={{ color: '#f87171', textAlign: 'center', marginTop: '1rem' }}>Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
