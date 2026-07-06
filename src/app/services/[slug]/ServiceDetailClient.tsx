'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'
import { ServiceData } from '@/lib/services'

const F = 'Outfit, sans-serif'
const accentCycle = ['#C8102E', '#0D0D0D', '#C8102E', '#0D0D0D', '#C8102E']

export default function ServiceDetailClient({ svc }: { svc: ServiceData }) {
  const num = parseInt(svc.num) - 1
  const accent = accentCycle[num % accentCycle.length]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* Breadcrumb */}
        <div style={{ background: '#0D0D0D', borderBottom: '4px solid #0D0D0D', padding: '16px 64px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/services" style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(240,240,240,0.3)', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C8102E' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,240,240,0.3)' }}
          >
            ← Services
          </Link>
          <div style={{ width: 8, height: 2, background: 'rgba(240,240,240,0.2)' }} />
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C8102E' }}>
            {svc.title}
          </span>
        </div>

        {/* HERO — two-column */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '4px solid #0D0D0D' }}>
          {/* Left: headline */}
          <div style={{ background: '#0D0D0D', padding: '80px 64px', borderRight: '4px solid #0D0D0D', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 2px, transparent 2px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            {/* Accent line */}
            <div style={{ width: 40, height: 4, background: accent, marginBottom: 32, position: 'relative', zIndex: 1 }} />
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: accent, marginBottom: 20, position: 'relative', zIndex: 1 }}>
              {svc.tag}
            </div>
            <h1
              style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(52px, 5vw, 80px)', lineHeight: 0.88, textTransform: 'uppercase', color: '#F5F2EE', letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}
              dangerouslySetInnerHTML={{ __html: svc.titleHtml.replace(/style="color:var\(--red\)"/g, `style="color:${accent}"`) }}
            />
            {/* Service number — big background */}
            <div style={{ position: 'absolute', bottom: 0, right: 64, fontFamily: F, fontWeight: 900, fontSize: 160, color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none' }}>
              {svc.num}
            </div>
          </div>

          {/* Right: intro + geometric */}
          <div style={{ background: accent, padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 2px, transparent 2px)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />
            {/* Geometric shapes */}
            <div style={{ position: 'absolute', top: 32, right: 32, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '3px solid rgba(255,255,255,0.2)' }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32, width: 60, height: 60, background: 'rgba(0,0,0,0.12)', border: '3px solid rgba(0,0,0,0.15)', transform: 'rotate(45deg)' }} />
            {/* Bottom-right fill */}
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 72, height: 72, background: 'rgba(0,0,0,0.15)' }} />

            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 17, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', position: 'relative', zIndex: 1 }}>
              {svc.intro}
            </p>

            <div style={{ display: 'flex', gap: 12, position: 'relative', zIndex: 1 }}>
              <Link href="/contact" style={{
                background: '#F5F2EE',
                color: '#0D0D0D',
                fontFamily: F, fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
                padding: '14px 28px', textDecoration: 'none',
                border: '2px solid #0D0D0D',
                boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.25)',
                transition: 'transform 0.12s, box-shadow 0.12s',
                display: 'inline-block',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translate(2px,2px)'; el.style.boxShadow = 'none' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,0.25)' }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section style={{ background: '#F5F2EE', borderBottom: '4px solid #0D0D0D', padding: '72px 64px' }}>
          <AnimateIn>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: accent, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 24, height: 2, background: accent }} />
              Portfolio
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 52px)', textTransform: 'uppercase', marginBottom: 40, letterSpacing: '-0.02em', lineHeight: 0.9 }}>
              {svc.portfolioTitle}
            </h2>
          </AnimateIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
            {svc.projects.map((p, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: i === 1 || i === 2 ? '3/4' : '4/3',
                  position: 'relative', overflow: 'hidden',
                  cursor: 'pointer',
                  border: '4px solid #0D0D0D',
                  boxShadow: '6px 6px 0px 0px #0D0D0D',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translate(-2px,-2px)'; el.style.boxShadow = '8px 8px 0px 0px #0D0D0D' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '6px 6px 0px 0px #0D0D0D' }}
              >
                <Image
                  src={p.imagePath}
                  alt={p.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,0.06), rgba(18,18,18,0.62))' }} />
                {/* Number badge */}
                <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', background: accent, color: '#fff', padding: '5px 10px', border: '2px solid #0D0D0D' }}>0{i + 1}</div>
                {/* Hover content */}
                <div className="overlay-bg" style={{ position: 'absolute', inset: 0, background: 'rgba(18,18,18,0)', transition: 'background 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 28 }}>
                  <div className="overlay-content" style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff', opacity: 0, transform: 'translateY(12px)', transition: 'all 0.3s' }}>{p.location}</div>
                  <div className="overlay-content" style={{ fontFamily: F, fontWeight: 900, fontSize: 20, textTransform: 'uppercase', color: '#fff', opacity: 0, transform: 'translateY(12px)', transition: 'all 0.3s 0.05s' }}>{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES — split */}
        <AnimateIn>
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '4px solid #0D0D0D' }}>
            {/* Left: headline */}
            <div style={{ background: '#0D0D0D', padding: '72px 64px', borderRight: '4px solid #0D0D0D', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 2px, transparent 2px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
              <div style={{ width: 36, height: 4, background: accent, marginBottom: 28, position: 'relative', zIndex: 1 }} />
              <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 52px)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.02em', color: '#F5F2EE', marginBottom: 24, position: 'relative', zIndex: 1 }}>
                What&apos;s<br /><span style={{ color: accent }}> Included</span>
              </h2>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, lineHeight: 1.85, color: 'rgba(240,240,240,0.5)', position: 'relative', zIndex: 1 }}>
                {svc.featuresText}
              </p>
            </div>
            {/* Right: feature list */}
            <div style={{ background: '#F5F2EE', padding: '72px 64px' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {svc.features.map((f, fi) => (
                  <li key={fi} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    fontFamily: F, fontWeight: 500, fontSize: 14, color: '#0D0D0D',
                    padding: '18px 0', borderBottom: fi < svc.features.length - 1 ? '2px solid #DDD9D4' : 'none',
                  }}>
                    <div style={{ width: 10, height: 10, background: accent, flexShrink: 0, marginTop: 3, border: '2px solid #0D0D0D' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimateIn>

        {/* CTA */}
        <section style={{ background: '#C8102E', padding: '80px 64px', borderBottom: '4px solid #0D0D0D', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 48, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(18,18,18,0.06)', right: 200, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <div>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 20, height: 2, background: 'rgba(255,255,255,0.4)' }} />
              Interested?
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 52px)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.9, color: '#fff' }}>
              Get a Free Quote<br />for {svc.title}
            </h2>
          </div>
          <Link href="/contact" style={{
            background: '#0D0D0D', color: '#fff',
            fontFamily: F, fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            padding: '16px 36px', textDecoration: 'none', whiteSpace: 'nowrap',
            border: '2px solid #0D0D0D',
            boxShadow: '4px 4px 0px 0px rgba(18,18,18,0.25)',
            transition: 'transform 0.12s, box-shadow 0.12s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translate(2px,2px)'; el.style.boxShadow = 'none' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '4px 4px 0px 0px rgba(18,18,18,0.25)' }}
          >
            Contact Us Today
          </Link>
        </section>

        <Footer />
      </main>
    </>
  )
}
