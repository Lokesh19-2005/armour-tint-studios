'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(0,0,0,0.97)'
            : 'transparent',
          borderBottom: scrolled
            ? '1px solid rgba(201,168,76,0.15)'
            : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '72px' : '96px',
            transition: 'height 0.4s ease',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: scrolled ? '48px' : '60px', height: scrolled ? '48px' : '60px', transition: 'all 0.4s ease' }}>
              <Image
                src="/logo.jpeg"
                alt="Armour Tint Studios"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLElement).style.color = 'var(--color-gold)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="tel:+19033579824"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                color: 'var(--color-gold)',
                textDecoration: 'none',
              }}
              className="hidden-mobile"
            >
              <Phone size={14} />
              (903) 357-9824
            </a>

            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                background: 'var(--gradient-gold)',
                color: '#000',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
              className="hidden-mobile"
            >
              Get a Quote
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-white)',
                cursor: 'pointer',
                padding: '8px',
                display: 'none',
              }}
              className="show-mobile"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1100,
          background: 'rgba(0,0,0,0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '28px',
          padding: '100px 24px 40px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '28px',
            right: '24px',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-white)',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <Image src="/logo.jpeg" alt="ATS" width={80} height={80} style={{ objectFit: 'contain' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', width: '100%', maxWidth: '360px' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: '300',
                color: 'var(--color-white)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                width: '100%',
                textAlign: 'center',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-white)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+19033579824"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--color-gold)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontWeight: '600',
            letterSpacing: '0.1em',
            fontSize: '14px',
          }}
        >
          <Phone size={16} />
          (903) 357-9824
        </a>

        <a
          href="#contact"
          onClick={handleLinkClick}
          style={{
            marginTop: '16px',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '14px 28px',
            background: 'var(--gradient-gold)',
            color: '#000',
            textDecoration: 'none',
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.9')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
        >
          Get a Quote
        </a>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
