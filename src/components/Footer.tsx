'use client'

import Image from 'next/image'
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react'

const serviceLinks = [
  'Automotive Window Tinting',
  'Residential Window Tinting',
  'Commercial Window Tinting',
  'Car Detailing',
  'Ceramic Coating',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ position: 'relative', background: 'var(--color-surface)', borderTop: '1px solid rgba(201,168,76,0.15)', overflow: 'hidden' }}>
      <Image
        src="/images/footer/footer-bg.webp"
        alt="Dark luxury automotive background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', filter: 'brightness(0.25) contrast(1.05)', zIndex: 0 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 0 }} />
      {/* Main footer */}
      <div className="container-luxury" style={{ padding: '80px 40px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '60px' }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <Image src="/logo.jpeg" alt="Armour Tint Studios" width={80} height={80} style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontStyle: 'italic', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', maxWidth: '280px', marginBottom: '24px' }}>
              Where Protection Meets Perfection.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.3)', lineHeight: '1.8', maxWidth: '300px' }}>
              Full-service protection and enhancement studio in Dallas, Texas. Premium materials. Precision installation. Luxury results.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
              {[
                { icon: Instagram, href: 'https://www.instagram.com/armourtintstudios', label: 'Instagram' },
                { icon: Facebook, href: 'https://www.facebook.com/share/16wJ1BE3h8/', label: 'Facebook' },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--color-gold)'
                      el.style.color = 'var(--color-gold)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'rgba(255,255,255,0.1)'
                      el.style.color = 'rgba(255,255,255,0.4)'
                    }}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '24px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <span style={{ width: '20px', height: '1px', background: 'rgba(201,168,76,0.3)', flexShrink: 0 }} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '24px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '24px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: Phone, value: '(903) 357-9824', href: 'tel:+19033579824' },
                { icon: Mail, value: 'Armourtintstudio@gmail.com', href: 'mailto:Armourtintstudio@gmail.com' },
                { icon: MapPin, value: 'Dallas, Texas', href: '#' },
              ].map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.value}
                    href={c.href}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <Icon size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                    {c.value}
                  </a>
                )
              })}
            </div>

            {/* Hours summary */}
            <div style={{ marginTop: '28px', padding: '20px', border: '1px solid rgba(201,168,76,0.1)', background: 'rgba(201,168,76,0.02)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-gold)', marginBottom: '12px' }}>
                HOURS
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8' }}>
                Mon–Fri: 9:00 AM – 9:00 PM
                <br />
                Sat–Sun: By Appointment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="container-luxury"
          style={{
            padding: '24px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>
            © {year} Armour Tint Studios. All rights reserved. Dallas, Texas.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Protection Meets Perfection
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
