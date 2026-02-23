import React, { useState, useEffect } from 'react'
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
      {/* Background video */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dd9qhriun/video/upload/v1771841761/Video_ftik7v.mp4" />
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
