import { useState, useEffect, useCallback } from 'react'

const GALLERY_IMAGES = [
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784416/gallery-1_k4lch8.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784423/gallery-2_mzmef3.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782315/gallery-3_un1er5.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782296/gallery-4_gnglyz.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782299/gallery-5_m5jmgo.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782296/gallery-6_necpvb.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782295/gallery-7_ifpokr.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782296/gallery-8_g3qiou.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784416/gallery-9_m4heti.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784416/gallery-10_aozs7h.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782297/gallery-11_oknnku.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782301/gallery-12_wevznv.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782299/gallery-13_dg5z8s.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784416/gallery-14_yigxuv.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782301/gallery-15_gm4fbo.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784417/gallery-16_qdsxbh.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784418/gallery-17_b8bovd.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782300/gallery-18_ngnllr.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782307/gallery-19_e7pdkt.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771784417/gallery-20_u1f0qp.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782302/gallery-21_a3thbx.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782301/gallery-22_l4nnha.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782305/gallery-23_f4mfsu.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782303/gallery-24_cdv0jv.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782304/gallery-25_prijvp.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782305/gallery-26_dguvwn.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782306/gallery-27_eww0in.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782307/gallery-28_s7i8ub.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782309/gallery-29_uevzsu.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782308/gallery-30_yvyobd.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782308/gallery-31_xnyapr.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782312/gallery-32_qhxsoh.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782310/gallery-33_lxuczd.jpg',
    'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782310/gallery-34_diig9x.jpg',
]

export default function GalleryPage({ goHome }) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (index) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
        document.body.style.overflow = 'hidden'
    }
    const closeLightbox = useCallback(() => {
        setLightboxOpen(false)
        document.body.style.overflow = ''
    }, [])
    const navigate = useCallback((dir) => {
        setCurrentIndex((i) => (i + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return
        const handler = (e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') navigate(-1)
            if (e.key === 'ArrowRight') navigate(1)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [lightboxOpen, closeLightbox, navigate])

    // Cleanup on unmount
    useEffect(() => {
        return () => { document.body.style.overflow = '' }
    }, [])

    return (
        <>
            <section className="gallery-page">
                <div className="section-container">
                    <button className="gallery-back" onClick={() => goHome('past-gallery')}>
                        <span className="gallery-back-arrow">←</span>
                        <span>Back to Home</span>
                    </button>

                    <div className="section-header">
                        <span className="section-badge">✦ Memories ✦</span>
                        <h2 className="section-title">Past Event Gallery</h2>
                        <div className="section-divider" />
                    </div>

                    <div className="gallery-full-grid">
                        {GALLERY_IMAGES.map((src, i) => (
                            <div
                                key={src}
                                className="gallery-full-item"
                                onClick={() => openLightbox(i)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
                            >
                                <img src={src} alt={`Past Event ${i + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <div
                className={`lightbox${lightboxOpen ? ' active' : ''}`}
                onClick={(e) => e.target === e.currentTarget && closeLightbox()}
            >
                <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
                <button className="lightbox-nav lightbox-prev" onClick={() => navigate(-1)} aria-label="Previous">‹</button>
                {lightboxOpen && (
                    <img
                        src={GALLERY_IMAGES[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="lightbox-img"
                    />
                )}
                <button className="lightbox-nav lightbox-next" onClick={() => navigate(1)} aria-label="Next">›</button>
            </div>
        </>
    )
}
