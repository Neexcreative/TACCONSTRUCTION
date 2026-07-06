'use client'
import Image from 'next/image'
import Link from 'next/link'

const F = 'Outfit, sans-serif'

const serviceLinks = [
  { href: '/services/renovation', label: 'Full Renovation' },
  { href: '/services/heating', label: 'Heating Systems' },
  { href: '/services/roofing', label: 'Roofing' },
  { href: '/services/plumbing', label: 'Plumbing' },
  { href: '/services/construction', label: 'Construction' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const linkStyle: React.CSSProperties = {
    fontFamily: F, fontSize: 13, fontWeight: 500,
    color: 'rgba(240,240,240,0.5)', textDecoration: 'none',
    transition: 'color 0.15s',
    display: 'block',
  }

  return (
    <footer style={{ background: '#0D0D0D', borderTop: '4px solid #0D0D0D' }}>

      {/* Top bar — yellow accent line */}
      <div style={{ height: 6, background: '#C8102E' }} />

      {/* Main footer content */}
      <div className="responsive-four-col" style={{ padding: '64px 64px 48px', gap: 48 }}>

        {/* Brand column */}
        <div>
          {/* Logo */}
          <Image src="/images/logo-full.png" alt="T.A.C Construction" width={220} height={70} style={{ height: 'auto', width: 'min(220px, 100%)', marginBottom: 20 }} />
          <p style={{ fontFamily: F, fontSize: 13, fontWeight: 400, color: 'rgba(240,240,240,0.4)', lineHeight: 1.8, maxWidth: 260, marginBottom: 28 }}>
            Professional construction and renovation services across Dublin and Ireland. Built on trust, quality, and decades of experience.
          </p>
          {/* Irish badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: '2px solid rgba(240,240,240,0.1)',
            padding: '8px 14px',
          }}>
            <div style={{ display: 'flex', width: 24, height: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
              <div style={{ flex: 1, background: '#009A44' }} />
              <div style={{ flex: 1, background: '#fff' }} />
              <div style={{ flex: 1, background: '#FF7900' }} />
            </div>
            <span style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,240,240,0.35)' }}>
              100% Irish Owned
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 20, borderBottom: '2px solid rgba(200,16,46,0.3)', paddingBottom: 12 }}>
            Navigation
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={linkStyle}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F5F2EE' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,240,240,0.5)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 20, borderBottom: '2px solid rgba(208,32,32,0.3)', paddingBottom: 12 }}>
            Services
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={linkStyle}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F5F2EE' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,240,240,0.5)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 20, borderBottom: '2px solid rgba(200,16,46,0.3)', paddingBottom: 12 }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Phone', val: '+353 1 234 5678' },
              { label: 'Email', val: 'info@tacconstruction.ie' },
              { label: 'Location', val: 'Dublin, Ireland' },
            ].map(({ label, val }) => (
              <div key={label}>
                <div style={{ fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,240,240,0.25)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 500, color: 'rgba(240,240,240,0.6)' }}>{val}</div>
              </div>
            ))}

            {/* Quote CTA */}
            <Link href="/contact" style={{
              marginTop: 8,
              background: '#C8102E', color: '#fff',
              fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '10px 18px', textDecoration: 'none',
              border: '2px solid rgba(240,240,240,0.2)',
              boxShadow: '3px 3px 0px 0px rgba(240,240,240,0.15)',
              display: 'inline-block',
              transition: 'transform 0.12s, box-shadow 0.12s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translate(2px,2px)'; el.style.boxShadow = 'none' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '3px 3px 0px 0px rgba(240,240,240,0.15)' }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '2px solid rgba(240,240,240,0.08)',
        padding: '20px 64px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <p style={{ fontFamily: F, fontSize: 12, color: 'rgba(240,240,240,0.25)' }}>
          © {year} T.A.C Construction. All rights reserved.
        </p>
        {/* Bauhaus decorative dots */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8102E' }} />
          <div style={{ width: 8, height: 8, background: '#0D0D0D' }} />
          <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '8px solid #C8102E' }} />
        </div>
        <p style={{ fontFamily: F, fontSize: 12, color: 'rgba(240,240,240,0.25)' }}>
          Site by{' '}
          <a href="https://neexcreative.com" style={{ color: '#C8102E', textDecoration: 'none' }}>Neex Creative</a>
        </p>
      </div>
    </footer>
  )
}
