export default function Footer({ goHome }) {
    const scrollTo = (id) => {
        goHome(id)
    }

    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo nav-logo">
                            <span className="logo-icon">✦</span>
                            <span className="logo-text">SARDAR</span>
                        </div>
                        <p className="footer-tagline">Inter-College Cultural Festival</p>
                        <p className="footer-college">Agurchand Manmull Jain College, Chennai</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><button onClick={() => scrollTo('about')}>About</button></li>
                            <li><button onClick={() => scrollTo('events')}>Events</button></li>
                            <li><button onClick={() => scrollTo('prizes')}>Prizes</button></li>
                            <li><button onClick={() => scrollTo('register')}>Register</button></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Get in Touch</h4>
                        <p>Arts &amp; Culture Club</p>
                        <p>AMJ College, Meenambakkam</p>
                        <p>Chennai – 600 061</p>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com/amjaincollege_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="social-icon"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@amjaincollege54321"
                                className="social-icon"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/amjcclg?s=11"
                                className="social-icon"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter / X"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                                    <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider" />
                    <p>© 2026 SARDAR — Agurchand Manmull Jain College. All rights reserved.</p>
                    <p className="footer-credit">Crafted with ❤ by the PR TEAM</p>
                </div>
            </div>
        </footer>
    )
}
