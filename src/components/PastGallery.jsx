import useScrollReveal from '../hooks/useScrollReveal'

const PREVIEW_IMAGES = [
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782299/gallery-13_dg5z8s.jpg', alt: 'Past Event 1' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782300/gallery-18_ngnllr.jpg', alt: 'Past Event 2' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782315/gallery-3_un1er5.jpg', alt: 'Past Event 3' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782296/gallery-4_gnglyz.jpg', alt: 'Past Event 4' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782301/gallery-15_gm4fbo.jpg', alt: 'Past Event 5' },
    { src: 'https://res.cloudinary.com/dd9qhriun/image/upload/v1771782308/gallery-30_yvyobd.jpg', alt: 'Past Event 6' },
]

export default function PastGallery({ goGallery }) {
    useScrollReveal()
    return (
        <section className="past-gallery" id="past-gallery">
            <div className="section-container">
                <div className="section-header reveal-element">
                    <span className="section-badge">✦ Memories ✦</span>
                    <h2 className="section-title">Past Event Gallery</h2>
                    <div className="section-divider" />
                </div>

                <div className="gallery-grid reveal-element">
                    {PREVIEW_IMAGES.map((img) => (
                        <div key={img.src} className="gallery-item">
                            <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
                        </div>
                    ))}
                </div>

                <div className="gallery-view-more reveal-element">
                    <button className="btn btn-outline btn-large" onClick={goGallery}>
                        <span>View More</span>
                        <span className="btn-arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
