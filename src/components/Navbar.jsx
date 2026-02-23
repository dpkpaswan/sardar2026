import { useEffect, useState } from 'react'

export default function Navbar({ drawerOpen, setDrawerOpen, goHome, goGallery, currentPage }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (anchor) => {
        if (currentPage === 'gallery') {
            goHome(anchor)
        } else {
            const el = document.getElementById(anchor)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            {/* nav-container: logo on left, links in middle (hidden mobile), hamburger on right */}
            <div className="nav-container">

                {/* LOGO */}
                <div className="nav-logo" style={{ flexShrink: 0, minWidth: 0, overflow: 'hidden' }}>
                    <button
                        className="nav-sardar-link"
                        onClick={() => goHome('')}
                        style={{ background: 'none', padding: 0, border: 'none', flexShrink: 0 }}
                    >
                        <img
                            src="https://res.cloudinary.com/dd9qhriun/image/upload/v1771785253/college-logo_auumwy.png"
                            alt="AMJ College"
                            className="nav-college-logo"
                        />
                    </button>
                    <button
                        className="nav-sardar-link"
                        onClick={() => goHome('')}
                        style={{ background: 'none', padding: 0, border: 'none', flexShrink: 0 }}
                    >
                        <span className="logo-icon">✦</span>
                        <span className="logo-text">SARDAR</span>
                    </button>
                </div>

                {/* DESKTOP LINKS */}
                <ul className="nav-links">
                    <li><button className="nav-link" onClick={() => handleNavClick('about')}>About</button></li>
                    <li><button className="nav-link" onClick={() => handleNavClick('events')}>Events</button></li>
                    <li><button className="nav-link" onClick={() => handleNavClick('prizes')}>Prizes</button></li>
                    <li><button className="nav-link" onClick={() => handleNavClick('chief-guest')}>Chief Guest</button></li>
                    <li>
                        <button
                            className={`nav-link${currentPage === 'gallery' ? ' active' : ''}`}
                            onClick={goGallery}
                        >Gallery</button>
                    </li>
                    <li><button className="nav-link" onClick={() => handleNavClick('bazaar')}>Bazaar</button></li>
                    <li>
                        <a href="https://www.amjaincollege.edu.in/" className="nav-link" target="_blank" rel="noreferrer">AMJC</a>
                    </li>
                    <li>
                        <a href="https://forms.gle/f3ncj5aSB1qgwPFx7" className="nav-cta" target="_blank" rel="noreferrer">
                            Register Now
                        </a>
                    </li>
                </ul>

                {/* HAMBURGER — always rendered, shown via CSS on mobile */}
                <button
                    className={`nav-hamburger${drawerOpen ? ' active' : ''}`}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    aria-label="Toggle menu"
                    style={{ flexShrink: 0, marginLeft: 'auto' }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </nav>
    )
}
