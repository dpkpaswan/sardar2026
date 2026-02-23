import { useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
    useScrollReveal()
    return (
        <section className="about" id="about">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ About the Festival ✦</span>
                    <h2 className="section-title">Where Culture Comes Alive</h2>
                    <div className="section-divider" />
                </div>

                <div className="about-grid">
                    <div className="about-text reveal-element">
                        <p>
                            <strong>SARDAR</strong> is not merely a college fest — it is the pride, prestige, and cultural
                            heartbeat of A.M. Jain College. A grand inter-college spectacle, SARDAR brings together the most
                            dynamic and talented minds from across Tamil Nadu under one electrifying stage.
                        </p>
                        <p>
                            For two unforgettable days, our campus transforms into a vibrant empire of art, energy, and
                            expression. From high-voltage dance battles that ignite the crowd… to soul-stirring musical
                            performances that leave audiences spellbound… from powerful theatrical showcases — every moment at
                            SARDAR is designed to inspire, challenge, and celebrate creativity.
                        </p>
                        <p>
                            <strong>This is not just another fest. This is a movement. A legacy in the making.</strong>
                            <br />
                            Two days of unstoppable passion, fierce competition, roaring applause, and memories that echo far
                            beyond campus life.
                        </p>
                        <p>
                            Whether you are a singer ready to mesmerize, a dancer prepared to set the stage on fire, an actor
                            eager to command attention, a thinker ready to dominate the arena, or someone who simply wants to
                            witness greatness — <strong>SARDAR gives you the spotlight.</strong>
                        </p>
                        <p className="about-cta-text">
                            <strong>Step forward. Own the stage. Create history.</strong>
                        </p>
                        <a
                            href="#events"
                            className="btn btn-outline"
                            onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }) }}
                        >
                            <span>View All Events</span>
                            <span className="btn-arrow">→</span>
                        </a>
                    </div>

                    <div className="about-stats">
                        {[
                            { icon: '🎭', num: '2', label: 'Days of Madness', delay: 0 },
                            { icon: '🎪', num: '12', label: 'Epic Events', delay: 1 },
                            { icon: '🏆', num: '₹2,50,000+', label: 'Prize Pool', delay: 2 },
                            { icon: '✨', num: '∞', label: 'Memories', delay: 3 },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="stat-card reveal-element"
                                style={{ '--delay': s.delay }}
                            >
                                <div className="stat-icon">{s.icon}</div>
                                <div className="stat-number">{s.num}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mandala-decoration">
                    <svg className="mandala-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
                        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
                        <path d="M100 10 L100 190" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                        <path d="M10 100 L190 100" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                        <path d="M30 30 L170 170" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                        <path d="M170 30 L30 170" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
