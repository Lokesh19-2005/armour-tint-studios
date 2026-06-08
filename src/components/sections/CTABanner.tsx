'use client'

import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0',
      }}
    >
      <Image
        src="/images/contact/contact-bg.webp"
        alt="Luxury product background"
        fill
        style={{ objectFit: 'cover', filter: 'brightness(0.35) contrast(1.05)' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.72))',
          zIndex: 0,
        }}
      />
      {/* BG pattern */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaPattern)" />
        </svg>
      </div>

      <div
        className="container-luxury"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.5)',
              marginBottom: '16px',
            }}
          >
            Dallas, Texas
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: '600',
              color: '#000',
              lineHeight: '1.0',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Protection Meets Perfection
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(0,0,0,0.6)',
              letterSpacing: '0.05em',
            }}
          >
            Request your free quote today — no pressure, no obligation.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 44px',
              background: '#000',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = 'rgba(0,0,0,0.85)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = '#000'
              el.style.transform = 'none'
            }}
          >
            Get a Free Quote
            <ArrowRight size={14} />
          </a>
          <a
            href="tel:+19033579824"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 44px',
              background: 'transparent',
              color: '#000',
              border: '2px solid rgba(0,0,0,0.3)',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(0,0,0,0.8)'
              el.style.background = 'rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(0,0,0,0.3)'
              el.style.background = 'transparent'
            }}
          >
            <Phone size={14} />
            Call (903) 357-9824
          </a>
        </div>
      </div>
    </section>
  )
}
