import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import MobileDrawer from './components/MobileDrawer'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Prizes from './components/Prizes'
import VibeGrid from './components/VibeGrid'
import ChiefGuest from './components/ChiefGuest'
import LogoMarquee from './components/LogoMarquee'
import PastGallery from './components/PastGallery'
import Bazaar from './components/Bazaar'
import Register from './components/Register'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'

export default function App() {
  const [page, setPage] = useState('home')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const videoRef = useRef(null)

  // Force video autoplay on iOS and other browsers that block it
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    vid.muted = true          // must be muted for autoplay policy
    vid.playsInline = true
    const playPromise = vid.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay blocked, retry once on first user interaction
        const retry = () => { vid.play(); document.removeEventListener('touchstart', retry); document.removeEventListener('click', retry) }
        document.addEventListener('touchstart', retry, { once: true })
        document.addEventListener('click', retry, { once: true })
      })
    }
  }, [])

  // Handle hash-based routing for gallery
  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash
      if (hash === '#gallery-page') {
        setPage('gallery')
        window.scrollTo(0, 0)
      } else {
        setPage('home')
      }
    }
    checkRoute()
    window.addEventListener('hashchange', checkRoute)
    return () => window.removeEventListener('hashchange', checkRoute)
  }, [])

  const goHome = (anchor = '') => {
    setPage('home')
    window.history.pushState(null, '', anchor ? `#${anchor}` : '/')
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goGallery = () => {
    setPage('gallery')
    window.history.pushState(null, '', '#gallery-page')
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Background video — webkit-playsinline for older iOS */}
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
      >
        <source src="https://res.cloudinary.com/dd9qhriun/video/upload/v1771841761/Video_ftik7v.mp4" type="video/mp4" />
      </video>

      <Navbar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        goHome={goHome}
        goGallery={goGallery}
        currentPage={page}
      />
      <MobileDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        goHome={goHome}
        goGallery={goGallery}
        currentPage={page}
      />

      {page === 'gallery' ? (
        <GalleryPage goHome={goHome} />
      ) : (
        <main>
          <Hero />
          <About />
          <Events />
          <Prizes />
          <VibeGrid />
          <ChiefGuest />
          <LogoMarquee />
          <PastGallery goGallery={goGallery} />
          <Bazaar />
          <Register />
          <Footer goHome={goHome} />
        </main>
      )}
    </>
  )
}
