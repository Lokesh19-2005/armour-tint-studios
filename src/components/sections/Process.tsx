'use client'

import { MessageSquare, Wrench, Settings, CheckCircle, Star } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description: 'We discuss your goals, assess your vehicle or property, and recommend the best solution tailored to your needs and budget.',
  },
  {
    icon: Wrench,
    step: '02',
    title: 'Preparation',
    description: 'Your vehicle or surface is thoroughly cleaned and prepared. Proper prep is the foundation of a flawless, long-lasting result.',
  },
  {
    icon: Settings,
    step: '03',
    title: 'Installation',
    description: 'Our certified technicians apply your chosen film or coating with surgical precision using professional-grade tools and techniques.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Quality Inspection',
    description: 'Every inch is carefully inspected against our strict quality standards. We don\'t pass a job that isn\'t perfect.',
  },
  {
    icon: Star,
    step: '05',
    title: 'Delivery',
    description: 'You receive your vehicle or property back looking exceptional, along with care instructions to maximize longevity.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--color-void)', padding: '140px 0', overflow: 'hidden' }}>
      <div className="container-luxury">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <div className="label-gold" style={{ marginBottom: '16px' }}>How It Works</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: '300',
              color: 'var(--color-white)',
              lineHeight: '1.1',
            }}
          >
            The{' '}
            <span className="text-gold-gradient">Armour</span>
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Process</span>
          </h2>
        </div>

        {/* Steps - horizontal timeline */}
        <div style={{ position: 'relative' }}>
          {/* Connection line */}
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: '60px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.5), rgba(201,168,76,0.3), transparent)',
            }}
          />

          <div
            className="process-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '0',
            }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0 20px',
                    position: 'relative',
                  }}
                >
                  {/* Step circle */}
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--color-void)',
                      marginBottom: '40px',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'rgba(201,168,76,0.1)'
                      el.style.borderColor = 'var(--color-gold)'
                      el.style.boxShadow = '0 0 40px rgba(201,168,76,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'var(--color-void)'
                      el.style.borderColor = 'rgba(201,168,76,0.3)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    <Icon size={28} color="var(--color-gold)" />
                  </div>

                  {/* Step number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      color: 'rgba(201,168,76,0.5)',
                      marginBottom: '12px',
                    }}
                  >
                    STEP {step.step}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: '500',
                      color: 'var(--color-white)',
                      marginBottom: '16px',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: '1.8',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '100px',
            padding: '60px',
            border: '1px solid rgba(201,168,76,0.15)',
            background: 'rgba(201,168,76,0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: '300',
                color: 'var(--color-white)',
                lineHeight: '1.2',
              }}
            >
              Ready to get started?
              <br />
              <span className="text-gold-gradient">Let&apos;s talk.</span>
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                padding: '16px 40px',
                background: 'var(--gradient-gold)',
                color: '#000',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              Book a Consultation
            </a>
            <a
              href="tel:+19033579824"
              style={{
                padding: '16px 40px',
                background: 'transparent',
                color: 'var(--color-white)',
                border: '1px solid rgba(255,255,255,0.2)',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-gold)'
                el.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.2)'
                el.style.color = 'var(--color-white)'
              }}
            >
              (903) 357-9824
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
