import { useState, useEffect } from 'react'

const TARGET_DATE = new Date('2026-02-27T09:00:00+05:30').getTime()

export default function useCountdown() {
    const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })

    useEffect(() => {
        function update() {
            const diff = TARGET_DATE - Date.now()
            if (diff <= 0) {
                setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' })
                return
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((diff / (1000 * 60)) % 60)
            const seconds = Math.floor((diff / 1000) % 60)
            setTime({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            })
        }
        update()
        const id = setInterval(update, 1000)
        return () => clearInterval(id)
    }, [])

    return time
}
