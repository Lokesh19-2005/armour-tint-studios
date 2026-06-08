'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Phone, ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <Image
        src="/images/hero/hero-car.webp"
        alt="Luxury car in premium studio"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.35) contrast(1.1) saturate(0.9)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* Dark gradient base */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(20,15,0,1) 0%, rgba(0,0,0,1) 70%)',
          }}
        />

        {/* Gold atmospheric glow - upper right */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '70%',
            height: '80%',
            background:
              'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 60%)',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Gold atmospheric glow - lower left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '60%',
            height: '70%',
            background:
              'radial-gradient(ellipse at center, rgba(139,105,20,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Grid lines */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0.04,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Diagonal accent line */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#lineGrad)" strokeWidth="1" />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div
        className="container-luxury hero-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '160px',
          paddingBottom: '100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left — Text */}
        <div>
          {/* Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <span
              style={{
                width: '40px',
                height: '1px',
                background: 'var(--color-gold)',
                display: 'block',
              }}
            />
            <span className="label-gold">Dallas, Texas · Est. 2024</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 88px)',
              fontWeight: '300',
              lineHeight: '1.0',
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(30px)',
              transition: 'all 0.9s ease 0.35s',
            }}
          >
            <span style={{ color: 'var(--color-white)' }}>Premium</span>
            <br />
            <span className="shimmer-gold">Protection</span>
            <br />
            <span style={{ color: 'var(--color-white)' }}>For What</span>
            <br />
            <span
              style={{
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Matters Most
            </span>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              fontWeight: '400',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '480px',
              marginBottom: '48px',
              letterSpacing: '0.02em',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(30px)',
              transition: 'all 0.9s ease 0.5s',
            }}
          >
            Luxury window tinting, ceramic coatings, and expert detailing
            for vehicles, homes, and businesses in Dallas. Where precision
            meets perfection.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(30px)',
              transition: 'all 0.9s ease 0.65s',
            }}
          >
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                background: 'var(--gradient-gold)',
                color: '#000',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 10px 40px rgba(201,168,76,0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              Get a Quote
              <ArrowRight size={14} />
            </a>

            <a
              href="tel:+19033579824"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                background: 'transparent',
                color: 'var(--color-white)',
                border: '1px solid rgba(255,255,255,0.25)',
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
                el.style.borderColor = 'var(--color-gold)'
                el.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.25)'
                el.style.color = 'var(--color-white)'
              }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '72px',
              paddingTop: '48px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 1s ease 1s',
            }}
          >
            {[
              { num: '500+', label: 'Projects Completed' },
              { num: '5★', label: 'Average Rating' },
              { num: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: '600',
                    color: 'var(--color-gold)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    fontWeight: '500',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Logo/Visual */}
        <div
          className="hero-visual"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'scale(0.9)',
            transition: 'all 1.2s ease 0.4s',
          }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: 'absolute',
              width: '520px',
              height: '520px',
              border: '1px solid rgba(201,168,76,0.1)',
              borderRadius: '50%',
              animation: 'spin-slow 20s linear infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              border: '1px solid rgba(201,168,76,0.06)',
              borderRadius: '50%',
              animation: 'spin-slow 15s linear infinite reverse',
            }}
          />

          {/* Gold atmospheric glow behind logo */}
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(20px)',
            }}
          />

          {/* Logo */}
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              animation: 'float 6s ease-in-out infinite',
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            <Image
              src="/logo.jpeg"
              alt="Armour Tint Studios"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Corner accents */}
          {[
            { top: '5%', right: '5%', rotate: '0deg' },
            { bottom: '5%', left: '5%', rotate: '180deg' },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                ...pos,
                width: '40px',
                height: '40px',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRight: 'none',
                borderBottom: 'none',
                transform: `rotate(${pos.rotate})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.5s',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            animation: 'bounce 2s ease-in-out infinite',
          }}
        >
          <ChevronDown size={16} color="rgba(201,168,76,0.6)" />
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .hero-section { padding-top: 100px !important; padding-bottom: 60px !important; }
        }
      `}</style>
    </section>
  )
}
