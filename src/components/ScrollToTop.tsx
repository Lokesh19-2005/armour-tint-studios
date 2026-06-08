'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '28px',
        zIndex: 9999,
        width: '52px',
        height: '52px',
        borderRadius: '999px',
        border: '1px solid rgba(255,255,255,0.18)',
        background: 'rgba(0,0,0,0.72)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'none')}
    >
      <ArrowUp size={20} />
    </button>
  )
}
