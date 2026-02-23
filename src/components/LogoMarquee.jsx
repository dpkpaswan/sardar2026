const LOGOS = [
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784835/logo-1_tnuoh8.png', alt: 'Sponsor 1' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784835/logo-2_fd8hss.png', alt: 'Sponsor 2' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784835/logo-3_d3tig3.png', alt: 'Sponsor 3' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784835/logo-4_vfonev.png', alt: 'Sponsor 4' },
]

// Triplicate for seamless infinite loop
const ALL = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

export default function LogoMarquee() {
    return (
        <section className="logo-marquee-section">
            <div className="logo-marquee-wrapper">
                <div className="logo-marquee-track">
                    {ALL.map((logo, i) => (
                        <img
                            key={i}
                            src={logo.src}
                            alt={logo.alt}
                            className="marquee-logo"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
