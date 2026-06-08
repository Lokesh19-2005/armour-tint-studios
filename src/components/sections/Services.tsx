'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Car, Building2, Home, Sparkles, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Automotive Window Tinting',
    subtitle: 'Vehicle Protection',
    description:
      'Premium heat-rejection and UV-protection films for enhanced comfort, privacy, and appearance. We use only top-tier materials for a flawless, lasting finish.',
    features: ['Heat Rejection', 'UV Protection', 'Privacy Enhancement', 'Glare Reduction'],
    image: '/images/tinting/tint-1.webp',
    tag: '01',
  },
  {
    icon: Home,
    title: 'Residential Window Tinting',
    subtitle: 'Home Enhancement',
    description:
      'Transform your home with premium window films. Improve privacy, reduce glare, increase energy efficiency, and protect your furnishings from UV damage.',
    features: ['Energy Savings', 'Privacy Control', 'UV Furniture Protection', 'Heat Reduction'],
    image: '/images/residential/residential-1.webp',
    tag: '02',
  },
  {
    icon: Building2,
    title: 'Commercial Window Tinting',
    subtitle: 'Business Solutions',
    description:
      'Professional film solutions designed to improve security, comfort, and operating efficiency for offices, storefronts, and commercial properties.',
    features: ['Security Films', 'Energy Efficiency', 'Glare Control', 'Professional Look'],
    image: '/images/commercial/commercial-1.webp',
    tag: '03',
  },
  {
    icon: Sparkles,
    title: 'Professional Car Detailing',
    subtitle: 'Interior & Exterior',
    description:
      'Beyond a standard clean — we restore, refine, and revitalize every surface. From deep interior cleaning to exterior paint correction, delivering a showroom-quality finish.',
    features: ['Paint Correction', 'Interior Detailing', 'Clay Bar Treatment', 'Showroom Finish'],
    image: '/images/detailing/detailing-1.webp',
    tag: '04',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    subtitle: 'Advanced Paint Protection',
    description:
      'Advanced nano-ceramic technology that bonds a hydrophobic, glass-like shield to your paint — defending against elements while maintaining a deep, mirror-like gloss for years.',
    features: ['Hydrophobic Barrier', '9H Hardness', 'Mirror Gloss', 'Years of Protection'],
    image: '/images/ceramic/ceramic-2.webp',
    tag: '05',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" style={{ background: 'var(--color-void)', padding: '140px 0' }}>
      <div className="container-luxury">
        {/* Header */}
        <div className="services-header-grid" style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end' }}>
          <div>
            <div className="label-gold" style={{ marginBottom: '20px' }}>Our Services</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: '300',
                lineHeight: '1.0',
                letterSpacing: '-0.02em',
                color: 'var(--color-white)',
              }}
            >
              Complete{' '}
              <span className="text-gold-gradient">Protection</span>
              <br />
              <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>& Enhancement</span>
            </h2>
          </div>
          <div style={{ maxWidth: '400px', marginLeft: 'auto' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', fontFamily: 'var(--font-body)', fontSize: '16px' }}>
              Every service executed with precision, premium materials, and an unwavering commitment to excellence. Your investment deserves nothing less.
            </p>
          </div>
        </div>

        <div className="divider-gold" style={{ marginBottom: '80px' }} />

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '2px',
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const isHovered = hovered === i
            return (
              <div
                key={service.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHovered ? 'rgba(201,168,76,0.04)' : 'var(--color-void)',
                  padding: '48px',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                  overflow: 'hidden',
                  borderTop: isHovered ? '1px solid rgba(201,168,76,0.3)' : '1px solid transparent',
                }}
              >
                {/* Tag number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '32px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.1)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {service.tag}
                </div>

                {/* Background image accent */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', filter: 'brightness(0.62) contrast(0.95)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.92))' }} />
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    border: `1px solid ${isHovered ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.1)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '28px',
                    transition: 'all 0.4s ease',
                    background: isHovered ? 'rgba(201,168,76,0.08)' : 'transparent',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Icon
                    size={22}
                    color={isHovered ? 'var(--color-gold)' : 'rgba(255,255,255,0.5)'}
                    style={{ transition: 'color 0.4s ease' }}
                  />
                </div>

                {/* Subtitle */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.6)',
                    marginBottom: '12px',
                  }}
                >
                  {service.subtitle}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '26px',
                    fontWeight: '500',
                    color: 'var(--color-white)',
                    marginBottom: '16px',
                    lineHeight: '1.2',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: '1.8',
                    marginBottom: '32px',
                  }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {service.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        fontWeight: '500',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '5px 12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.4)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: isHovered ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Get a Quote
                  <ArrowRight
                    size={12}
                    style={{
                      transform: isHovered ? 'translateX(4px)' : 'none',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </a>

                {/* Bottom glow on hover */}
                {isHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                    }}
                  />
                )}
              </div>
            )
          })}

          {/* Filler / CTA card */}
          <div
            style={{
              background: 'rgba(201,168,76,0.03)',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px solid rgba(201,168,76,0.1)',
              gap: '24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.3',
              }}
            >
              Not sure which
              <br />
              service you need?
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.3)', maxWidth: '240px' }}>
              Contact us for a free consultation. We&apos;ll guide you to the right solution.
            </p>
            <a
              href="tel:+19033579824"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'var(--gradient-gold)',
                color: '#000',
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Call Us Today
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-header-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
