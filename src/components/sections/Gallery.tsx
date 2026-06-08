'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    category: 'Automotive Tinting',
    label: 'Premium Sedan Tint Installation',
    image: '/images/tinting/tint-1.webp',
    alt: 'Luxury sedan receiving premium window tint service',
  },
  {
    id: 2,
    category: 'Automotive Tinting',
    label: 'Signature Dark Film Finish',
    image: '/images/tinting/tint-2.webp',
    alt: 'Close-up of automotive window tinting on a premium vehicle',
  },
  {
    id: 3,
    category: 'Automotive Tinting',
    label: 'Executive SUV Privacy Upgrade',
    image: '/images/tinting/tint-3.webp',
    alt: 'Luxury SUV with professionally installed tint film',
  },
  {
    id: 4,
    category: 'Ceramic Coating',
    label: 'Glass-Like Finish Protection',
    image: '/images/ceramic/ceramic-1.webp',
    alt: 'High-gloss ceramic coating shine on premium paintwork',
  },
  {
    id: 5,
    category: 'Ceramic Coating',
    label: 'Hydrophobic Shield Detail',
    image: '/images/ceramic/ceramic-2.webp',
    alt: 'Water beading off ceramic-coated paint surface',
  },
  {
    id: 6,
    category: 'Ceramic Coating',
    label: 'Luxury Coupe Ceramic Finish',
    image: '/images/ceramic/ceramic-3.webp',
    alt: 'Premium coupe showing mirror gloss ceramic protection',
  },
  {
    id: 7,
    category: 'Detailing',
    label: 'Showroom-Level Interior Refresh',
    image: '/images/detailing/detailing-1.webp',
    alt: 'Professional detailing of luxury car interior',
  },
  {
    id: 8,
    category: 'Detailing',
    label: 'Precision Paint Renewal',
    image: '/images/detailing/detailing-2.webp',
    alt: 'Close-up of elite car detailing and paint correction',
  },
  {
    id: 9,
    category: 'Detailing',
    label: 'Executive Vehicle Final Touch',
    image: '/images/detailing/detailing-3.webp',
    alt: 'High-end car detailing finish in luxury studio',
  },
  {
    id: 10,
    category: 'Residential Tinting',
    label: 'Premium Home Privacy Film',
    image: '/images/residential/residential-1.webp',
    alt: 'Luxury residential window film installation on modern home',
  },
  {
    id: 11,
    category: 'Residential Tinting',
    label: 'Energy-Saving Glass Shield',
    image: '/images/residential/residential-2.webp',
    alt: 'Modern home windows with tinted solar film',
  },
  {
    id: 12,
    category: 'Residential Tinting',
    label: 'Executive Property Protection',
    image: '/images/residential/residential-3.webp',
    alt: 'Residential architecture with premium privacy glazing',
  },
  {
    id: 13,
    category: 'Commercial Tinting',
    label: 'Corporate Facade Film Upgrade',
    image: '/images/commercial/commercial-1.webp',
    alt: 'Commercial building with premium security tint film',
  },
  {
    id: 14,
    category: 'Commercial Tinting',
    label: 'Office Glass UV Shield',
    image: '/images/commercial/commercial-2.webp',
    alt: 'Office building showing dark commercial window tint',
  },
  {
    id: 15,
    category: 'Commercial Tinting',
    label: 'High-End Property Film Solution',
    image: '/images/commercial/commercial-3.webp',
    alt: 'Commercial glass facade with reflective window film',
  },
]

const categories = ['All', 'Automotive Tinting', 'Ceramic Coating', 'Detailing', 'Residential Tinting', 'Commercial Tinting']

type GalleryItem = typeof galleryItems[number]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hovered, setHovered] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" style={{ position: 'relative', background: '#000', padding: '140px 0' }}>
      <div className="container-luxury" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="label-gold" style={{ marginBottom: '16px' }}>Portfolio</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: '300',
              color: 'var(--color-white)',
              lineHeight: '1.1',
              marginBottom: '24px',
            }}
          >
            Our Work{' '}
            <span className="text-gold-gradient">Speaks</span>
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>For Itself</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.4)', maxWidth: '580px', margin: '0 auto' }}>
            A gallery of premium transformations across tinting, ceramic coating, detailing, and glass protection. Every image reflects the luxury finish you can expect.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '60px', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                padding: '12px 22px',
                borderRadius: '999px',
                background: activeCategory === cat ? 'var(--gradient-gold)' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? '#000' : 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="gallery-card"
            >
              <div className="gallery-card-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 48vw, 32vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </div>
              <div className="gallery-card-gradient" />
              <div className="gallery-card-info">
                <div className="gallery-card-category">{item.category}</div>
                <div className="gallery-card-title">{item.label}</div>
              </div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
            Discover more premium transformations on{' '}
            <a
              href="https://www.instagram.com/armourtintstudios"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold)', textDecoration: 'none' }}
            >
              @armourtintstudios
            </a>
            .
          </p>
        </div>
      </div>

      {lightbox && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button type="button" className="gallery-lightbox-close" onClick={() => setLightbox(null)}>
            Close
          </button>
          <div className="gallery-lightbox-content">
            <Image
              src={lightbox.image}
              alt={lightbox.alt}
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <div className="gallery-lightbox-copy">
              <div className="gallery-card-category">{lightbox.category}</div>
              <div className="gallery-card-title">{lightbox.label}</div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-masonry {
          column-count: 3;
          column-gap: 18px;
        }

        .gallery-card {
          display: inline-block;
          width: 100%;
          margin: 0 0 18px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 18px 50px rgba(0,0,0,0.25);
          background: #111;
          position: relative;
          cursor: pointer;
          transition: transform 0.35s ease, border-color 0.35s ease;
          break-inside: avoid;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,168,76,0.18);
        }

        .gallery-card-image {
          position: relative;
          height: 0;
          padding-bottom: 75%;
          overflow: hidden;
        }

        .gallery-card-image img {
          transform: scale(1);
        }

        .gallery-card:hover .gallery-card-image img {
          transform: scale(1.08);
        }

        .gallery-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.82) 100%);
          pointer-events: none;
        }

        .gallery-card-info {
          position: absolute;
          left: 24px;
          bottom: 24px;
          right: 24px;
          z-index: 2;
          color: #fff;
        }

        .gallery-card-category {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: 10px;
        }

        .gallery-card-title {
          font-family: var(--font-display);
          font-size: 20px;
          line-height: 1.2;
          color: #fff;
        }

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }

        .gallery-lightbox-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255,255,255,0.08);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 14px 20px;
          font-family: var(--font-body);
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          z-index: 10000;
        }

        .gallery-lightbox-content {
          max-width: 1180px;
          width: 100%;
          position: relative;
        }

        .gallery-lightbox-copy {
          position: absolute;
          left: 32px;
          bottom: 32px;
          color: #fff;
          text-shadow: 0 18px 45px rgba(0,0,0,0.35);
        }

        .gallery-lightbox-copy .gallery-card-category {
          color: var(--color-gold);
          margin-bottom: 8px;
        }

        .gallery-lightbox-copy .gallery-card-title {
          font-size: 26px;
          line-height: 1.2;
        }

        @media (max-width: 1100px) {
          .gallery-masonry { column-count: 2; }
        }

        @media (max-width: 768px) {
          .gallery-masonry { column-count: 1; }
          .gallery-card { margin-bottom: 20px; }
          .gallery-lightbox {
            padding: 16px;
          }
          .gallery-lightbox-copy {
            left: 20px;
            bottom: 20px;
          }
          .gallery-lightbox-copy .gallery-card-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  )
}
