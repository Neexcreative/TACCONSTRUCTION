'use client'

import Link from 'next/link'

const F = 'Outfit, sans-serif'

export default function AboutClient() {
  return (
    <section
      className="responsive-two-col"
      style={{
        background: '#F1ECE7',
        borderTop: '1px solid rgba(13,13,13,0.12)',
        borderBottom: '1px solid rgba(13,13,13,0.12)',
        padding: '72px 64px',
        alignItems: 'center',
        gap: 40,
      }}
    >
      <div>
        <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.52)', marginBottom: 18 }}>
          Work With Us
        </div>
        <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(36px, 4vw, 58px)', lineHeight: 0.98, color: '#111111', letterSpacing: '-0.03em', maxWidth: 600 }}>
          Experienced delivery, measured communication, and a finish that feels worth the investment.
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
        <Link
          href="/contact"
          style={{
            background: '#111111',
            color: '#FFFFFF',
            fontFamily: F,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '15px 28px',
            textDecoration: 'none',
            border: '1px solid rgba(17,17,17,0.2)',
            display: 'inline-block',
          }}
        >
          Start Your Project
        </Link>
        <Link
          href="/services"
          style={{
            background: 'transparent',
            color: '#111111',
            fontFamily: F,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '15px 28px',
            textDecoration: 'none',
            border: '1px solid rgba(17,17,17,0.24)',
            display: 'inline-block',
          }}
        >
          Our Services
        </Link>
      </div>
    </section>
  )
}
