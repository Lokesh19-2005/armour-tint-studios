'use client'

import Image from 'next/image'
import { Shield, Droplets, Sun, Zap } from 'lucide-react'

const benefits = [
  { icon: Shield, title: '9H Ceramic Hardness', desc: 'A glass-like nano-ceramic barrier bonds permanently to your paint surface.' },
  { icon: Droplets, title: 'Hydrophobic Barrier', desc: 'Water, mud, and contaminants bead off effortlessly — your car stays cleaner, longer.' },
  { icon: Sun, title: 'UV & Oxidation Defense', desc: 'Blocks harmful UV rays that cause paint fading, oxidation, and clear-coat failure.' },
  { icon: Zap, title: 'Deep Mirror Gloss', desc: 'Amplifies your paint\'s depth and clarity to a mirror-like, showroom-level finish.' },
]

export default function CeramicShowcase() {
  return (
    <section style={{ background: 'var(--color-void)', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative SVG */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="cg1" cx="70%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#cg1)" />
          {/* Hexagonal grid */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => {
              const x = col * 140 + (row % 2) * 70
              const y = row * 80
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x},${y+20} ${x+35},${y} ${x+70},${y+20} ${x+70},${y+60} ${x+35},${y+80} ${x},${y+60}`}
                  fill="none"
                  stroke="rgba(201,168,76,0.04)"
                  strokeWidth="1"
                />
              )
            })
          )}
        </svg>
      </div>

      <div className="container-luxury" style={{ position: 'relative', zIndex: 1 }}>
        <div className="ceramic-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="label-gold" style={{ marginBottom: '20px' }}>Featured Service</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5vw, 68px)',
                fontWeight: '300',
                color: 'var(--color-white)',
                lineHeight: '1.1',
                marginBottom: '32px',
              }}
            >
              Ceramic
              <br />
              <span className="shimmer-gold">Coating</span>
              <br />
              <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', fontSize: '0.8em' }}>Excellence</span>
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.9', marginBottom: '48px' }}>
              Our professional-grade nano-ceramic coating creates a permanent bond with your vehicle&apos;s paint, delivering unmatched protection and a deep, glass-like gloss that endures for years — not months.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.title} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="var(--color-gold)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '15px', color: 'var(--color-white)', marginBottom: '4px', letterSpacing: '0.03em' }}>
                        {b.title}
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.7' }}>
                        {b.desc}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

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
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              Get Ceramic Quote
            </a>
          </div>

          {/* Right: Visual representation */}
          <div style={{ position: 'relative' }}>
            {/* Main display box */}
            <div
              style={{
                position: 'relative',
                paddingTop: '100%',
                background: '#080808',
                border: '1px solid rgba(201,168,76,0.2)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/ceramic/ceramic-1.webp"
                alt="Premium ceramic coating finish on luxury vehicle"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.7) contrast(1.05)' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.8))',
                }}
              />

              {/* Corner ornaments */}
              {[
                { top: '12px', left: '12px' },
                { top: '12px', right: '12px', transform: 'scaleX(-1)' },
                { bottom: '12px', left: '12px', transform: 'scaleY(-1)' },
                { bottom: '12px', right: '12px', transform: 'scale(-1)' },
              ].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: '24px', height: '24px', borderTop: '1px solid rgba(201,168,76,0.5)', borderLeft: '1px solid rgba(201,168,76,0.5)', ...s }} />
              ))}
            </div>

            {/* Floating badges */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--gradient-gold)', padding: '20px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: '#000', lineHeight: 1 }}>9H</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: 'rgba(0,0,0,0.6)', marginTop: '4px' }}>HARDNESS</div>
            </div>

            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--color-surface)', border: '1px solid rgba(201,168,76,0.3)', padding: '20px 24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '4px' }}>PROTECTION</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '500', color: 'var(--color-white)', lineHeight: 1 }}>3–5 Years</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ceramic-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
