import useScrollReveal from '../hooks/useScrollReveal'

const VIBES = [
    { color: '#D4A017', icon: '🎨', title: 'Art & Creativity', desc: 'Where imagination takes physical form' },
    { color: '#00A896', icon: '🎵', title: 'Music & Rhythm', desc: 'Melodies that move your soul' },
    { color: '#C0006A', icon: '💃', title: 'Dance & Movement', desc: 'Express with every step' },
    { color: '#E05C00', icon: '📷', title: 'Photography', desc: 'Freeze moments forever' },
    { color: '#0A1562', icon: '🎭', title: 'Drama & Performance', desc: 'Stage is your canvas' },
    { color: '#D4A017', icon: '🏆', title: 'Glory & Champions', desc: 'Legends are born here' },
]

export default function VibeGrid() {
    useScrollReveal()
    return (
        <section className="vibe" id="vibe">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ The SARDAR Vibe ✦</span>
                    <h2 className="section-title">Feel the Energy</h2>
                    <div className="section-divider" />
                </div>
                <div className="vibe-grid">
                    {VIBES.map((v) => (
                        <div key={v.title} className="vibe-card reveal-element" style={{ '--vibe-color': v.color }}>
                            <div className="vibe-card-bg" />
                            <div className="vibe-icon">{v.icon}</div>
                            <h3 className="vibe-title">{v.title}</h3>
                            <p className="vibe-desc">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
