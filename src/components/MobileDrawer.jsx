import { useEffect } from 'react'

export default function MobileDrawer({ open, setOpen, goHome, goGallery, currentPage }) {
    const close = () => setOpen(false)

    // Prevent body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    const handleLink = (anchor) => {
        close()
        if (currentPage === 'gallery') {
            goHome(anchor)
        } else {
            setTimeout(() => {
                const el = document.getElementById(anchor)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 300)
        }
    }

    const handleGallery = () => { close(); goGallery() }
    const handleHome = () => { close(); goHome('') }

    return (
        <div className={`mobile-drawer${open ? ' open' : ''}`} id="mobileDrawer">
            <div className="drawer-overlay" onClick={close} id="drawerOverlay" />
            <div className="drawer-content">
                <div className="drawer-header nav-logo">
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">SARDAR</span>
                </div>
                <ul className="drawer-links">
                    <li><button className="drawer-link" onClick={handleHome}>Home</button></li>
                    <li><button className="drawer-link" onClick={() => handleLink('about')}>About</button></li>
                    <li><button className="drawer-link" onClick={() => handleLink('events')}>Events</button></li>
                    <li><button className="drawer-link" onClick={() => handleLink('prizes')}>Prizes</button></li>
                    <li><button className="drawer-link" onClick={() => handleLink('chief-guest')}>Chief Guest</button></li>
                    <li><button className="drawer-link" onClick={handleGallery}>Gallery</button></li>
                    <li><button className="drawer-link" onClick={() => handleLink('bazaar')}>Bazaar</button></li>
                    <li>
                        <a
                            href="https://www.amjaincollege.edu.in/"
                            className="drawer-link"
                            target="_blank"
                            rel="noreferrer"
                            onClick={close}
                        >AMJC</a>
                    </li>
                    <li>
                        <a
                            href="https://forms.gle/f3ncj5aSB1qgwPFx7"
                            className="drawer-link drawer-cta"
                            target="_blank"
                            rel="noreferrer"
                            onClick={close}
                        >Register Now</a>
                    </li>
                </ul>
                <div className="drawer-footer">
                    <p>Arts &amp; Culture Club × Student Council</p>
                </div>
            </div>
        </div>
    )
}
