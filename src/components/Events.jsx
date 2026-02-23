import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const EVENTS = [
    { category: 'off-stage', icon: '🏏', name: 'AMJ Premier League', desc: 'Cricket-inspired strategy game that tests your sporting instincts and team coordination.' },
    { category: 'off-stage', icon: '⛵', name: 'Sail or Sink', desc: 'A thrilling quiz challenge where knowledge is your lifeline. Sink or swim!' },
    { category: 'off-stage', icon: '🧩', name: 'Snap & Solve', desc: 'Decode visual puzzles and brain teasers at lightning speed. Sharp eyes win.' },
    { category: 'off-stage', icon: '♻️', name: 'Bin to Brilliance', desc: 'Turn waste into wonder. Craft innovation from the most unexpected materials.' },
    { category: 'off-stage', icon: '📸', name: 'PhotoPhoria', desc: 'Capture moments that speak volumes. Your lens, your story, your glory.' },
    { category: 'off-stage', icon: '⏱️', name: 'Sixty Second Spotlight', desc: 'You have 60 seconds. One mic. Make every word count.' },
    { category: 'on-stage', icon: '🎤', name: 'Tune Twins', desc: 'A dynamic dance face-off for singles or duos with songs revealed on the spot.' },
    { category: 'on-stage', icon: '🎬', name: 'Reel to Real', desc: 'Short film competition. Tell stories that move, inspire, and captivate.' },
    { category: 'on-stage', icon: '💃', name: 'Sync & Spin', desc: 'Synchronized group dance. Every step, every beat, in perfect unison.' },
    { category: 'on-stage', icon: '👗', name: 'Finesse & Fabulous', desc: 'Fashion show extravaganza. Walk the ramp with style, grace, and attitude.' },
    { category: 'on-stage', icon: '🎸', name: 'Plug and Play', desc: 'Band performance showdown. Plug in, turn up, and blow the roof off.' },
    { category: 'on-stage', icon: '🕺', name: 'Dance Deja Vu', desc: 'Solo dance battle. One dancer, one stage, one chance to own the spotlight.' },
]

export default function Events() {
    useScrollReveal()
    const [filter, setFilter] = useState('all')

    const visible = EVENTS.filter(e => filter === 'all' || e.category === filter)

    return (
        <section className="events" id="events">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ The Lineup ✦</span>
                    <h2 className="section-title">12 Events. 2 Days. Infinite Glory.</h2>
                    <div className="section-divider" />
                </div>

                <div className="event-tabs reveal-element">
                    {[['all', 'All Events'], ['off-stage', 'Off-Stage'], ['on-stage', 'On-Stage']].map(([key, label]) => (
                        <button
                            key={key}
                            className={`event-tab${filter === key ? ' active' : ''}`}
                            onClick={() => setFilter(key)}
                        >{label}</button>
                    ))}
                </div>

                <div className="events-grid" id="eventsGrid">
                    {visible.map((ev) => (
                        <div
                            key={ev.name}
                            className={`event-card ${ev.category} reveal-element`}
                            data-category={ev.category}
                        >
                            <div className="event-card-glow" />
                            <div className={`event-category-badge ${ev.category === 'off-stage' ? 'off-stage-badge' : 'on-stage-badge'}`}>
                                {ev.category === 'off-stage' ? 'Off-Stage' : 'On-Stage'}
                            </div>
                            <div className="event-icon">{ev.icon}</div>
                            <h3 className="event-name">{ev.name}</h3>
                            <p className="event-desc">{ev.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
