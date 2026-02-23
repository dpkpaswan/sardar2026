import useScrollReveal from '../hooks/useScrollReveal'

export default function Register() {
    useScrollReveal()
    return (
        <section className="register" id="register">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ Join the Movement ✦</span>
                    <h2 className="section-title">Register for SARDAR 2026</h2>
                    <div className="section-divider" />
                </div>

                <div className="register-grid">
                    <div className="register-info reveal-element">
                        <h3 className="register-subtitle">How to Register</h3>
                        <ol className="register-steps">
                            <li>Scan the QR code or click the registration link</li>
                            <li>Fill in your details (Name, College, Event)</li>
                            <li>Download the rulebook for event guidelines</li>
                            <li>Show up. Compete. Win.</li>
                        </ol>
                        <div className="register-ctas">
                            <a
                                href="https://forms.gle/f3ncj5aSB1qgwPFx7"
                                className="btn btn-primary btn-large"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Register Now</span>
                                <span className="btn-arrow">→</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1xA3ZIYWAbWlZP_d34CniCUnthto3FqF4/view?usp=sharing"
                                className="btn btn-outline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Download Rulebook</span>
                                <span className="btn-arrow">↓</span>
                            </a>
                        </div>
                    </div>

                    <div className="register-qr reveal-element">
                        <div className="qr-card">
                            <div className="qr-frame">
                                <img
                                    src="https://res.cloudinary.com/dd9qhriun/image/upload/v1771740511/Asset_7_3x_ci5dqb.png"
                                    alt="Scan to Register for SARDAR 2026"
                                    className="qr-image"
                                />
                            </div>
                            <p className="qr-label">Registration QR Code</p>
                        </div>
                    </div>
                </div>

                <div className="venue-info reveal-element">
                    <div className="venue-card">
                        <div className="venue-icon">📍</div>
                        <h3 className="venue-title">Festival Venue</h3>
                        <p className="venue-address">
                            Agurchand Manmull Jain College<br />
                            Meenambakkam, Chennai – 600 061<br />
                            Tamil Nadu, India
                        </p>
                    </div>
                </div>

                <div className="developer-credit reveal-element">
                    <div className="developer-card">
                        <span className="developer-icon">💻</span>
                        <p className="developer-text">Website Designed &amp; Developed by PR TEAM</p>
                        <p className="developer-name">ABHAYA SARAN NAYAK &nbsp;(Bsc.CS)</p>
                        <p className="developer-name">DEEPAK PASWAN &nbsp;(Bcom.ISM)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
