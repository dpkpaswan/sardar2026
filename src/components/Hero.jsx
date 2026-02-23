import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import useCountdown from '../hooks/useCountdown'

export default function Hero() {
    useScrollReveal()
    const { days, hours, minutes, seconds } = useCountdown()
    const canvasRef = useRef(null)

    // Particle constellation
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animationId
        const PARTICLE_COUNT = 30
        const CONNECTION_DISTANCE = 100
        let particles = []

        function resize() {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        function createParticles() {
            particles = []
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                    color: ['#D4A017', '#00A896', '#C0006A', '#F5E6A3'][Math.floor(Math.random() * 4)],
                })
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = dx * dx + dy * dy
                    if (dist < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                        const opacity = (1 - Math.sqrt(dist) / CONNECTION_DISTANCE) * 0.15
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(212,160,23,${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
            particles.forEach((p) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.opacity
                ctx.fill()
                ctx.globalAlpha = 1
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0
            })
            animationId = requestAnimationFrame(draw)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!animationId) { resize(); createParticles(); draw() }
                    } else {
                        if (animationId) { cancelAnimationFrame(animationId); animationId = null }
                    }
                })
            },
            { threshold: 0 }
        )

        const section = canvas.closest('section')
        if (section) observer.observe(section)

        let resizeTimeout
        const handleResize = () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => { resize(); createParticles() }, 200)
        }
        window.addEventListener('resize', handleResize)

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            cancelAnimationFrame(animationId)
        }

        return () => {
            cancelAnimationFrame(animationId)
            observer.disconnect()
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className="hero" id="hero">
            <canvas className="hero-canvas" ref={canvasRef} />

            <div className="hero-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
            </div>

            <div className="hero-content">
                <h2 className="hero-college reveal-element">Arts &amp; Culture Club and Student Council</h2>
                <p className="hero-presents reveal-element">Presents</p>
                <h1 className="hero-title reveal-element">
                    <img
                        src="https://res.cloudinary.com/dd9qhriun/image/upload/v1771785255/sardar-logo_yced2g.png"
                        alt="SARDAR"
                        className="title-logo"
                    />
                </h1>
                <p className="hero-tagline reveal-element">Inter-College Cultural Festival 2026</p>
                <div className="hero-dates reveal-element">
                    <span className="date-icon">📅</span>
                    <span>27th &amp; 28th February 2026</span>
                </div>

                <div className="hero-countdown reveal-element">
                    <h3 className="hero-countdown-title">SARDAR Begins In</h3>
                    <div className="hero-countdown-timer">
                        <div className="hero-cd-unit">
                            <div className="hero-cd-number">{days}</div>
                            <div className="hero-cd-label">Days</div>
                        </div>
                        <div className="hero-cd-sep">:</div>
                        <div className="hero-cd-unit">
                            <div className="hero-cd-number">{hours}</div>
                            <div className="hero-cd-label">Hours</div>
                        </div>
                        <div className="hero-cd-sep">:</div>
                        <div className="hero-cd-unit">
                            <div className="hero-cd-number">{minutes}</div>
                            <div className="hero-cd-label">Minutes</div>
                        </div>
                        <div className="hero-cd-sep">:</div>
                        <div className="hero-cd-unit">
                            <div className="hero-cd-number">{seconds}</div>
                            <div className="hero-cd-label">Seconds</div>
                        </div>
                    </div>
                </div>

                <div className="hero-ctas reveal-element">
                    <a href="#events" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        <span>Explore Events</span>
                        <span className="btn-arrow">→</span>
                    </a>
                    <a href="#register" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }) }}>
                        <span>Register Now</span>
                        <span className="btn-arrow">→</span>
                    </a>
                </div>
            </div>

            <div className="hero-scroll-hint">
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}
