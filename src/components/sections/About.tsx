'use client'

import Image from 'next/image'
import { Award, Zap, Eye, Gem, HeartHandshake, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Professionally Trained',
    description: 'Every technician is rigorously trained to industry-leading standards, ensuring flawless installation every time.',
  },
  {
    icon: Gem,
    title: 'Premium Materials Only',
    description: 'We source only top-tier films, coatings, and products. No compromises when it comes to quality.',
  },
  {
    icon: Zap,
    title: 'Precision Installation',
    description: 'Meticulous attention to every edge, corner, and curve. Our installs are clean, bubble-free, and permanent.',
  },
  {
    icon: Eye,
    title: 'Luxury-Level Finish',
    description: 'The standard we hold ourselves to is the showroom floor. Every job is inspected to exacting specifications.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Satisfaction First',
    description: 'Your experience matters from first contact to final delivery. We don\'t close a job until you\'re thrilled.',
  },
  {
    icon: Clock,
    title: 'Long-Term Protection',
    description: 'Our work is built to last. We use materials designed for years of performance, not months.',
  },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--color-surface)', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-200px',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-luxury">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            marginBottom: '120px',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                paddingTop: '110%',
                background: '#000',
                border: '1px solid rgba(201,168,76,0.15)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/detailing/detailing-2.webp"
                alt="Luxury auto detailing service"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.55)' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.9))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Armour Tint Studios"
                  width={42}
                  height={42}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            <div
              className="about-info-card"
              style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                background: 'var(--gradient-gold)',
                padding: '28px 36px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '42px',
                  fontWeight: '700',
                  color: '#000',
                  lineHeight: 1,
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.7)',
                  marginTop: '6px',
                }}
              >
                Satisfaction
                <br />
                Guaranteed
              </div>
            </div>
          </div>

          <div>
            <div className="label-gold" style={{ marginBottom: '20px' }}>Our Story</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4vw, 60px)',
                fontWeight: '300',
                lineHeight: '1.1',
                color: 'var(--color-white)',
                marginBottom: '32px',
              }}
            >
              Where <span className="text-gold-gradient">Protection</span>
              <br />
              Meets <span style={{ fontStyle: 'italic' }}>Perfection</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.9' }}>
                At Armour Tint Studios, we are a full-service protection and enhancement studio dedicated to preserving and elevating what matters most — your vehicle, your home, and your business.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.9' }}>
                Newly established in Dallas and professionally trained, we launched with one mission: to deliver luxury-level results with uncompromising attention to detail from day one.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.9' }}>
                Every vehicle, home, and commercial project receives the highest level of care and craftsmanship — because your investment deserves nothing less.
              </p>
            </div>

            <div
              style={{
                marginTop: '40px',
                padding: '28px',
                border: '1px solid rgba(201,168,76,0.2)',
                background: 'rgba(201,168,76,0.03)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontStyle: 'italic',
                  fontWeight: '300',
                  color: 'var(--color-gold-light)',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                &ldquo;Fresh Start. Serious Standards. Every client, every project receives the care and craftsmanship it deserves.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="label-gold" style={{ textAlign: 'center', marginBottom: '16px' }}>Why Choose Us</div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: '300',
            textAlign: 'center',
            color: 'var(--color-white)',
            marginBottom: '64px',
          }}
        >
          The Armour Tint <span className="text-gold-gradient">Difference</span>
        </h2>

        <div
          className="reasons-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                style={{
                  background: 'var(--color-surface)',
                  padding: '48px 40px',
                  position: 'relative',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.04)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-surface)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={20} color="var(--color-gold)" />
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      color: 'var(--color-white)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {reason.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: '1.8',
                  }}
                >
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .reasons-grid { grid-template-columns: 1fr !important; }
          .about-info-card {
            position: static !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 32px !important;
            width: auto !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
