import useScrollReveal from '../hooks/useScrollReveal'

export default function Prizes() {
    useScrollReveal()
    return (
        <section className="prizes" id="prizes">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ Glory Awaits ✦</span>
                    <h2 className="section-title">Total Prize Pool: ₹2,50,000+</h2>
                    <div className="section-divider" />
                </div>

                <div className="prizes-podium">
                    {/* 2nd */}
                    <div className="prize-card prize-silver reveal-element" style={{ '--delay': 1 }}>
                        <div className="prize-glow" />
                        <div className="prize-rank">2<sup>nd</sup></div>
                        <div className="prize-trophy">🥈</div>
                        <div className="prize-amount">₹7,000</div>
                        <div className="prize-label">Runner Up</div>
                        <div className="prize-label">Event wise</div>
                        <div className="prize-pedestal" />
                    </div>

                    {/* 1st */}
                    <div className="prize-card prize-gold reveal-element" style={{ '--delay': 0 }}>
                        <div className="prize-glow" />
                        <div className="prize-crown">👑</div>
                        <div className="prize-rank">1<sup>st</sup></div>
                        <div className="prize-trophy">🏆</div>
                        <div className="prize-amount">₹10,000</div>
                        <div className="prize-label">Champion</div>
                        <div className="prize-label">Event wise</div>
                        <div className="prize-pedestal" />
                    </div>

                    {/* 3rd */}
                    <div className="prize-card prize-bronze reveal-element" style={{ '--delay': 2 }}>
                        <div className="prize-glow" />
                        <div className="prize-rank">3<sup>rd</sup></div>
                        <div className="prize-trophy">🥉</div>
                        <div className="prize-amount">₹5,000</div>
                        <div className="prize-label">Second Runner Up</div>
                        <div className="prize-label">Event wise</div>
                        <div className="prize-pedestal" />
                    </div>
                </div>
            </div>
        </section>
    )
}
