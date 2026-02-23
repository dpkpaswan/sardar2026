import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const elements = document.querySelectorAll('.reveal-element')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.style.getPropertyValue('--delay')
                        const ms = delay ? parseInt(delay) * 120 : 0
                        setTimeout(() => {
                            entry.target.classList.add('revealed')
                        }, ms)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return ref
}
