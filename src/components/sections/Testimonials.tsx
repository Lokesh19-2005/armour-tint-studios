'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus T.',
    vehicle: '2023 BMW M4',
    service: 'Full Ceramic Coating + Tint',
    rating: 5,
    text: 'Absolutely blown away by the results. My M4 looks like it just came off the factory floor — except better. The ceramic coating is immaculate and the tint is perfectly even. Armour Tint Studios is the real deal.',
    location: 'Dallas, TX',
  },
  {
    name: 'Jennifer R.',
    vehicle: 'Residential Home',
    service: 'Privacy & UV Window Film',
    rating: 5,
    text: 'Our home stays so much cooler now and the privacy film is stunning. I can barely tell it\'s there from the outside, but inside the difference in heat and glare is remarkable. Professional team, exceptional results.',
    location: 'Plano, TX',
  },
  {
    name: 'David K.',
    vehicle: '2022 Range Rover Sport',
    service: 'Detailing + Window Tint',
    rating: 5,
    text: 'This is not your average detailing shop. They treated my Range Rover like it was going into a museum. The attention to detail is extraordinary — every surface, every crevice. Worth every penny.',
    location: 'Frisco, TX',
  },
  {
    name: 'Sarah M.',
    vehicle: 'Commercial Office — 8,000 sq ft',
    service: 'Commercial Window Film',
    rating: 5,
    text: 'We had Armour Tint Studios do the entire south face of our building. Energy bills dropped noticeably and the office is so much more comfortable. The team was professional and efficient. Highly recommend.',
    location: 'Dallas, TX',
  },
  {
    name: 'Chris L.',
    vehicle: '2024 Porsche Cayenne',
    service: 'Ceramic Coating — Full Body',
    rating: 5,
    text: 'I was skeptical about ceramic coating being worth the investment but after seeing my Cayenne — I\'m a believer. The depth of gloss is incredible. Paint is hydrophobic like nothing I\'ve ever seen. Outstanding work.',
    location: 'Southlake, TX',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section id="testimonials" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-surface)', padding: '140px 0' }}>
      <Image
        src="/images/testimonials/testimonial-bg.webp"
        alt="Dark premium testimonials background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', filter: 'brightness(0.22) contrast(1.05)', zIndex: 0 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 0 }} />
      {/* BG decor */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-luxury">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="label-gold" style={{ marginBottom: '16px' }}>Client Reviews</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: '300',
              color: 'var(--color-white)',
            }}
          >
            What Our{' '}
            <span className="text-gold-gradient">Clients</span>
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>Are Saying</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Quote icon */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Quote size={48} color="rgba(201,168,76,0.2)" />
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '36px' }}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={18} color="var(--color-gold)" fill="var(--color-gold)" />
            ))}
          </div>

          {/* Quote text */}
          <p
            key={active}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: '300',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.7',
              textAlign: 'center',
              marginBottom: '48px',
              animation: 'fadeIn 0.5s ease',
            }}
          >
            &ldquo;{t.text}&rdquo;
          </p>

          {/* Author */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-white)',
                marginBottom: '6px',
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: 'var(--color-gold)',
                marginBottom: '4px',
              }}
            >
              {t.service}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              {t.vehicle} · {t.location}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '60px' }}>
            <button
              onClick={prev}
              style={{
                width: '48px',
                height: '48px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent',
                color: 'var(--color-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-gold)'
                el.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.15)'
                el.style.color = 'var(--color-white)'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '32px' : '8px',
                    height: '2px',
                    background: i === active ? 'var(--color-gold)' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '48px',
                height: '48px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent',
                color: 'var(--color-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-gold)'
                el.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.15)'
                el.style.color = 'var(--color-white)'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Google rating strip */}
        <div
          style={{
            marginTop: '100px',
            padding: '40px 60px',
            border: '1px solid rgba(201,168,76,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap',
            background: 'rgba(0,0,0,0.3)',
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} color="var(--color-gold)" fill="var(--color-gold)" />
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '600', color: 'var(--color-gold)', lineHeight: 1 }}>
              5.0
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', letterSpacing: '0.1em' }}>
              Google Rating
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '600', color: 'var(--color-white)', lineHeight: 1 }}>
              100%
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', letterSpacing: '0.1em' }}>
              Client Satisfaction
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '600', color: 'var(--color-white)', lineHeight: 1 }}>
              Dallas
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', letterSpacing: '0.1em' }}>
              Texas Based
            </div>
          </div>

          <div>
            <a
              href="https://www.facebook.com/share/16wJ1BE3h8/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'var(--color-gold)',
                border: '1px solid rgba(201,168,76,0.4)',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(201,168,76,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'transparent'
              }}
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}
