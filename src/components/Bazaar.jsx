import useScrollReveal from '../hooks/useScrollReveal'

export default function Bazaar() {
    useScrollReveal()
    return (
        <section className="bazaar-section" id="bazaar">
            <div className="bazaar-container">
                <h2 className="bazaar-heading reveal-element">🎪 AMJCIAN BAZAAR 2K26</h2>
                <p className="bazaar-subheading reveal-element">Your Campus Marketplace is Live!</p>

                <p className="bazaar-description reveal-element">
                    Explore 100+ stalls offering food, fashion, accessories, games, handmade crafts, and much more!
                    The AMJCIAN Bazaar is a vibrant platform celebrating student entrepreneurship and innovation.
                    Find your favorite stall, discover new products, and support student businesses all in one place.
                </p>

                <div className="bazaar-stats-grid">
                    {[
                        { icon: '📦', num: '100', label: 'Stalls', sub: 'Food & Non-Food' },
                        { icon: '🎯', num: '53', label: 'Food Stalls', sub: 'Delicious Cuisines' },
                        { icon: '🛍', num: '47', label: 'Non-Food Stalls', sub: 'Fashion, Games, Crafts & More' },
                    ].map((s) => (
                        <div key={s.label} className="bazaar-stat-box reveal-element">
                            <div className="stat-icon">{s.icon}</div>
                            <div className="stat-number">{s.num}</div>
                            <div className="stat-label">{s.label}</div>
                            <div className="stat-sublabel">{s.sub}</div>
                        </div>
                    ))}
                </div>

                <div className="bazaar-cta reveal-element">
                    <a
                        href="https://amjcbazaar2026.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="bazaar-button"
                    >
                        Explore Bazaar Stalls →
                    </a>
                </div>
            </div>
        </section>
    )
}
