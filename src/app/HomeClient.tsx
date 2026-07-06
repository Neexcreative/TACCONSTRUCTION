'use client'

import Link from 'next/link'
import { ServiceData } from '@/lib/services'

const F = 'Outfit, sans-serif'

const accentColors = ['#C8102E', '#202020', '#8A8F8A', '#C8102E', '#202020']

type Props =
  | { variant: 'services'; services: ServiceData[] }
  | { variant: 'cta' }

export default function HomeClient(props: Props) {
  if (props.variant === 'services') {
    return (
      <section style={{ background: '#F7F4F0', borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
        <div
          style={{
            padding: '80px 64px 40px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(13,13,13,0.12)',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 16 }}>
              What We Do
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(34px, 4vw, 52px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#111111', maxWidth: 720 }}>
              Construction and renovation services delivered with clean execution and dependable planning.
            </h2>
          </div>

          <Link
            href="/services"
            style={{
              fontFamily: F,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#111111',
              textDecoration: 'none',
              border: '1px solid rgba(17,17,17,0.16)',
              padding: '12px 20px',
              display: 'inline-block',
            }}
          >
            View All
          </Link>
        </div>

        <div className="responsive-three-col" style={{ borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
          {props.services.map((service, index) => {
            const accent = accentColors[index % accentColors.length]

            return (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: '#FFFFFF',
                    padding: '40px 36px 36px',
                    borderRight: index % 3 !== 2 ? '1px solid rgba(13,13,13,0.08)' : 'none',
                    borderBottom: index < 3 ? '1px solid rgba(13,13,13,0.08)' : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'background 280ms ease, transform 280ms ease, box-shadow 280ms ease',
                    cursor: 'pointer',
                    boxShadow: '0 0 0 rgba(0,0,0,0)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#f3f3f3'
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = '0 14px 28px rgba(17,17,17,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#FFFFFF'
                    el.style.transform = ''
                    el.style.boxShadow = '0 0 0 rgba(0,0,0,0)'
                  }}
                >
                  <div style={{ fontFamily: F, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(18,18,18,0.28)', marginBottom: 18 }}>
                    {service.num}
                  </div>
                  <div style={{ width: 34, height: 2, background: '#C8102E', marginBottom: 20 }} />
                  <div style={{ fontFamily: F, fontWeight: 650, fontSize: 24, letterSpacing: '-0.025em', color: '#111111', marginBottom: 16 }}>
                    {service.title}
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(18,18,18,0.6)', lineHeight: 1.8 }}>
                    {service.intro.split('.')[0]}.
                  </div>
                  <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, background: accent, borderRadius: '50%' }} />
                    <span style={{ fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#111111' }}>
                      {service.tag}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}

          <Link href="/services" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: '#111111',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                cursor: 'pointer',
                height: '100%',
                minHeight: 200,
                transition: 'background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
                borderLeft: '1px solid rgba(13,13,13,0.08)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#1A1A1A'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 14px 28px rgba(17,17,17,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#111111'
                el.style.transform = ''
                el.style.boxShadow = 'none'
              }}
            >
              <div>
                <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,242,238,0.48)', marginBottom: 16 }}>
                  View All
                </div>
                <div style={{ fontFamily: F, fontWeight: 650, fontSize: 24, color: '#FFFFFF', letterSpacing: '-0.025em' }}>
                  All Services
                </div>
              </div>
              <div style={{ width: 44, height: 2, background: '#C8102E' }} />
            </div>
          </Link>
        </div>
      </section>
    )
  }

  if (props.variant === 'cta') {
    return (
      <section
        className="responsive-two-col"
        style={{
          background: '#F2ECE7',
          borderBottom: '1px solid rgba(13,13,13,0.12)',
          padding: '88px 64px',
          alignItems: 'center',
          gap: 48,
        }}
      >
        <div>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 18 }}>
            Ready to Start?
          </div>
          <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, color: '#111111', letterSpacing: '-0.03em', maxWidth: 640 }}>
            Let&apos;s plan a project that feels architectural, balanced, and built to last.
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
            Get a Free Quote
          </Link>
          <Link
            href="/contact"
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
              border: '1px solid rgba(17,17,17,0.18)',
              display: 'inline-block',
            }}
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    )
  }

  return null
}
