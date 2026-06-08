'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, Send, CheckCircle } from 'lucide-react'

const services = [
  'Automotive Window Tinting',
  'Residential Window Tinting',
  'Commercial Window Tinting',
  'Car Detailing',
  'Ceramic Coating',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', background: '#000', padding: '140px 0' }}>
      <Image
        src="/images/contact/contact-bg.webp"
        alt="Luxury dark automotive studio background"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.32) contrast(1.05)',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.68)', zIndex: 0 }} />
      <div className="container-luxury" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <div className="label-gold" style={{ marginBottom: '16px' }}>Get In Touch</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: '300',
              color: 'var(--color-white)',
              lineHeight: '1.1',
            }}
          >
            Request Your
            <br />
            <span className="shimmer-gold">Free Quote</span>
          </h2>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>
          {/* Left — Info */}
          <div>
            {/* Info blocks */}
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '(903) 357-9824',
                href: 'tel:+19033579824',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'Armourtintstudio@gmail.com',
                href: 'mailto:Armourtintstudio@gmail.com',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Dallas, Texas',
                href: 'https://maps.google.com/?q=Dallas,TX',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '28px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.paddingLeft = '8px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.paddingLeft = '0'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="var(--color-gold)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: '500', color: 'var(--color-white)' }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              )
            })}

            {/* Hours */}
            <div style={{ padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} color="var(--color-gold)" />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  Business Hours
                </div>
              </div>
              {[
                { day: 'Mon – Fri', hours: '9:00 AM – 9:00 PM' },
                { day: 'Saturday', hours: 'By Appointment' },
                { day: 'Sunday', hours: 'By Appointment' },
              ].map((h) => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', paddingLeft: '64px' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{h.day}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-gold)', fontWeight: '500' }}>{h.hours}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ paddingTop: '32px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '20px' }}>
                Follow Us
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
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
                      style={{
                        width: '48px',
                        height: '48px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = 'var(--color-gold)'
                        el.style.color = 'var(--color-gold)'
                        el.style.background = 'rgba(201,168,76,0.05)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = 'rgba(255,255,255,0.1)'
                        el.style.color = 'rgba(255,255,255,0.5)'
                        el.style.background = 'transparent'
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '56px' }}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', gap: '24px', textAlign: 'center' }}>
                <CheckCircle size={56} color="var(--color-gold)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '300', color: 'var(--color-white)' }}>
                  Message Received
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '340px' }}>
                  Thank you for reaching out. We&apos;ll be in contact within 24 hours to discuss your project.
                </p>
                <div className="label-gold">Armour Tint Studios — Dallas, TX</div>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '400', color: 'var(--color-white)', marginBottom: '8px' }}>
                  Request a Quote
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.35)', marginBottom: '40px' }}>
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { id: 'name', label: 'Full Name *', type: 'text', required: true },
                    { id: 'email', label: 'Email Address *', type: 'email', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  ].map((field) => (
                    <div key={field.id}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'var(--color-white)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  ))}

                  {/* Service select */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                      Service Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: form.service ? 'var(--color-white)' : 'rgba(255,255,255,0.4)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                      }}
                    >
                      <option value="" style={{ background: '#111' }}>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: '#111' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your vehicle, property, or project..."
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--color-white)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '18px',
                      background: loading ? 'rgba(201,168,76,0.5)' : 'var(--gradient-gold)',
                      color: '#000',
                      border: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      marginTop: '8px',
                    }}
                  >
                    {loading ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
