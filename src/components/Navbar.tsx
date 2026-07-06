'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const F = 'Outfit, sans-serif'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow || ''
    }

    return () => {
      document.body.style.overflow = previousOverflow || ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }} aria-label="T.A.C Construction home">
          <Image
            src="/images/Logo.png"
            alt="T.A.C Construction"
            width={180}
            height={56}
            style={{ height: 'auto', width: 'clamp(128px, 16vw, 180px)' }}
            priority
          />
        </Link>

        <div className="site-nav-desktop">
          <ul className="site-nav-links">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <li key={href} style={{ display: 'flex', alignItems: 'center' }}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    style={{
                      fontFamily: F,
                      fontSize: 11,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: active ? '#C8102E' : '#0D0D0D',
                      textDecoration: 'none',
                      borderBottom: active ? '2px solid #C8102E' : '2px solid transparent',
                      paddingBottom: 2,
                      transition: 'color 0.15s, border-color 0.15s',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link
            href="/contact"
            className="site-nav-cta"
            style={{
              background: '#C8102E',
              color: '#fff',
              fontFamily: F,
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 600,
              padding: '10px 22px',
              textDecoration: 'none',
              border: '1px solid rgba(13,13,13,0.18)',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="visually-hidden">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ width: 18, height: 2, background: '#0D0D0D', transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }} />
            <span style={{ width: 18, height: 2, background: '#0D0D0D', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s ease' }} />
            <span style={{ width: 18, height: 2, background: '#0D0D0D', transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transition: 'transform 0.2s ease' }} />
          </div>
        </button>
      </nav>

      {mobileOpen ? (
        <>
          <div className="site-nav-mobile-backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div id="mobile-navigation" className="site-nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <ul className="site-nav-mobile-links">
              {navLinks.map(({ href, label }) => {
                const active = isActive(href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: '12px 10px',
                        textDecoration: 'none',
                        fontFamily: F,
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: active ? '#C8102E' : '#0D0D0D',
                        background: active ? 'rgba(200,16,46,0.06)' : 'transparent',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
                background: '#C8102E',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '14px 18px',
                fontFamily: F,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                border: '1px solid rgba(13,13,13,0.18)',
              }}
            >
              Get a Quote
            </Link>
          </div>
        </>
      ) : null}
    </>
  )
}
