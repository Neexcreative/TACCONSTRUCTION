'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const F = 'Outfit, sans-serif'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <nav className="site-nav">

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Image src="/images/Logo.png" alt="T.A.C Construction" width={180} height={56} style={{ height: 56, width: 'auto' }} priority />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="site-nav-links">
          {navLinks.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href} style={{ display: 'flex', alignItems: 'center' }}>
                <Link href={href} style={{
                  fontFamily: F,
                  fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
                  color: active ? '#C8102E' : '#0D0D0D',
                  textDecoration: 'none',
                  borderBottom: active ? '2px solid #C8102E' : '2px solid transparent',
                  paddingBottom: 2,
                  transition: 'color 0.15s, border-color 0.15s',
                }}
                  onMouseEnter={e => {
                    if (!active) {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = '#C8102E'
                      el.style.borderBottomColor = '#C8102E'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = '#0D0D0D'
                      el.style.borderBottomColor = 'transparent'
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <Link href="/contact" className="site-nav-cta" style={{
          background: '#C8102E', color: '#fff',
          fontFamily: F,
          fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
          padding: '10px 22px', textDecoration: 'none',
          border: '1px solid rgba(13,13,13,0.18)',
          transition: 'transform 0.12s, box-shadow 0.12s',
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = 'translate(2px,2px)'
            el.style.boxShadow = 'none'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = ''
            el.style.boxShadow = '4px 4px 0px 0px #0D0D0D'
          }}
        >
          Get a Quote
        </Link>
      </nav>

      {/* Mobile menu placeholder — visible on small screens via JS if needed */}
    </>
  )
}
