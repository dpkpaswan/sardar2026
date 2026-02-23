import { useState, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const GUESTS = [
    {
        img: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771827852/IMG_20251219_000239.jpg_kyb2zy.jpg',
        name: 'R. Parthiban',
        title: 'Actor & Director',
    },
    {
        img: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771827850/2ef4851f0c1687a2b8c4f389c0b6ad74.jpg_c0bqrx.jpg',
        name: 'Malavika Manoj',
        title: 'Actress',
    },
    {
        img: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771827851/549284662_18385429201135958_7623799450784014178_n.jpg_s4ccj8.jpg',
        name: 'Sam Vishal',
        title: 'Singer',
    },
    {
        img: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771827851/244469475_3088476871437760_1654254708242052184_n.jpg_ysqxve.jpg',
        name: 'Maalavika Sundar',
        title: 'Singer',
    },
    {
        img: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771828554/IMG_20260222_141602_ko2mne.jpg',
        name: 'Sampath Ram',
        title: 'Actor',
    },
    {
        img: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771828615/1500x900_496611-ttf-vasan_ynrfho.jpg',
        name: 'TTF Vasan',
        title: 'Influencer',
    },
]

export default function ChiefGuest() {
    useScrollReveal()
    const [current, setCurrent] = useState(0)
    const [activeCard, setActiveCard] = useState(null)

    // Touch swipe support
    const touchStartX = useRef(null)

    const prev = () => setCurrent((c) => (c - 1 + GUESTS.length) % GUESTS.length)
    const next = () => setCurrent((c) => (c + 1) % GUESTS.length)

    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 40) { diff > 0 ? next() : prev() }
        touchStartX.current = null
    }

    return (
        <section className="chief-guest" id="chief-guest">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ Our Honored Guests ✦</span>
                    <h2 className="section-title">Chief Guests</h2>
                    <div className="section-divider" />
                </div>

                {/* ── DESKTOP: 3×2 grid ── */}
                <div className="guest-grid guest-grid-desktop">
                    {GUESTS.map((g, i) => (
                        <div
                            key={g.name}
                            className={`guest-card reveal-element${activeCard === i ? ' guest-active' : ''}`}
                            style={{ '--delay': i }}
                            onClick={() => setActiveCard(activeCard === i ? null : i)}
                        >
                            <div className="guest-image-wrapper">
                                <img src={g.img} alt={g.name} className="guest-image" loading="lazy" />
                                <div className="guest-overlay">
                                    <h3 className="guest-name">{g.name}</h3>
                                    <p className="guest-title">{g.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── MOBILE: one-by-one carousel ── */}
                <div
                    className="guest-carousel"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Prev arrow */}
                    <button className="guest-carousel-arrow guest-carousel-prev" onClick={prev}>‹</button>

                    {/* Single card */}
                    <div className="guest-carousel-card">
                        <div className="guest-image-wrapper">
                            <img
                                src={GUESTS[current].img}
                                alt={GUESTS[current].name}
                                className="guest-image"
                                loading="lazy"
                            />
                            {/* Always show name on carousel */}
                            <div className="guest-overlay guest-overlay-always">
                                <h3 className="guest-name">{GUESTS[current].name}</h3>
                                <p className="guest-title">{GUESTS[current].title}</p>
                            </div>
                        </div>
                    </div>

                    {/* Next arrow */}
                    <button className="guest-carousel-arrow guest-carousel-next" onClick={next}>›</button>
                </div>

                {/* Dot indicators */}
                <div className="guest-carousel-dots">
                    {GUESTS.map((_, i) => (
                        <button
                            key={i}
                            className={`guest-dot${i === current ? ' active' : ''}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
