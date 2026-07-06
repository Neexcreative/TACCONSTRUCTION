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
        <div className="breadcrumb-bar" style={{ background: '#0D0D0D' }}>
          <Link
            href="/services"
            style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,240,240,0.4)', textDecoration: 'none' }}
          >
            Back to Services
          </Link>
          <div style={{ width: 8, height: 2, background: 'rgba(240,240,240,0.2)' }} />
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E' }}>
            {svc.title}
          </span>
        </div>

        <section className="service-detail-hero" style={{ borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
          <div style={{ background: '#0D0D0D', padding: 'clamp(44px, 7vw, 80px) clamp(20px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 2px, transparent 2px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            <div style={{ width: 40, height: 3, background: accent, marginBottom: 28, position: 'relative', zIndex: 1 }} />
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 18, position: 'relative', zIndex: 1 }}>
              {svc.tag}
            </div>
            <h1
              style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(38px, 5vw, 72px)', lineHeight: 0.98, color: '#F5F2EE', letterSpacing: '-0.03em', position: 'relative', zIndex: 1, maxWidth: 560 }}
              dangerouslySetInnerHTML={{ __html: svc.titleHtml.replace(/<br\/>/g, ' ').replace(/style="color:var\(--red\)"/g, `style="color:${accent}"`) }}
            />
          </div>

          <div style={{ background: '#F5F2EE', padding: 'clamp(44px, 7vw, 80px) clamp(20px, 5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.85, color: 'rgba(18,18,18,0.64)', maxWidth: 520 }}>
              {svc.intro}
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
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
                  padding: '14px 24px',
                  textDecoration: 'none',
                  border: '1px solid rgba(17,17,17,0.18)',
                }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell" style={{ background: '#F5F2EE', borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
          <AnimateIn>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>
              Portfolio
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 32, letterSpacing: '-0.03em', lineHeight: 1, color: '#111111' }}>
              {svc.portfolioTitle}
            </h2>
          </AnimateIn>

          <div className="service-detail-portfolio-grid">
            {svc.projects.map((project, index) => (
              <div
                key={index}
                style={{
                  aspectRatio: index === 1 || index === 2 ? '3/4' : '4/3',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(13,13,13,0.12)',
                  background: '#DDD',
                  minHeight: 220,
                }}
              >
                <Image src={project.imagePath} alt={project.name} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,0.08), rgba(18,18,18,0.62))' }} />
                <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.16em', background: accent, color: '#fff', padding: '5px 10px' }}>
                  0{index + 1}
                </div>
                <div style={{ position: 'absolute', left: 22, right: 22, bottom: 22 }}>
                  <div style={{ fontFamily: F, fontSize: 10, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.64)', marginBottom: 6 }}>
                    {project.location}
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(18px, 2vw, 24px)', color: '#fff', letterSpacing: '-0.02em' }}>
                    {project.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AnimateIn>
          <section className="service-detail-hero" style={{ borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
            <div style={{ background: '#0D0D0D', padding: 'clamp(44px, 7vw, 72px) clamp(20px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 2px, transparent 2px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
              <div style={{ width: 36, height: 3, background: accent, marginBottom: 24, position: 'relative', zIndex: 1 }} />
              <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#F5F2EE', marginBottom: 20, position: 'relative', zIndex: 1 }}>
                What&apos;s Included
              </h2>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 15, lineHeight: 1.85, color: 'rgba(240,240,240,0.6)', position: 'relative', zIndex: 1 }}>
                {svc.featuresText}
              </p>
            </div>

            <div style={{ background: '#F5F2EE', padding: 'clamp(44px, 7vw, 72px) clamp(20px, 5vw, 64px)' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {svc.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      fontFamily: F,
                      fontWeight: 500,
                      fontSize: 14,
                      color: '#0D0D0D',
                      padding: '16px 0',
                      borderBottom: featureIndex < svc.features.length - 1 ? '1px solid #DDD9D4' : 'none',
                    }}
                  >
                    <div style={{ width: 10, height: 10, background: accent, flexShrink: 0, marginTop: 5, borderRadius: 999 }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimateIn>

        <section className="responsive-two-col" style={{ background: '#C8102E', padding: 'clamp(44px, 7vw, 80px) clamp(20px, 5vw, 64px)', borderBottom: '1px solid rgba(13,13,13,0.12)', alignItems: 'center', gap: 28 }}>
          <div>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
              Interested?
            </div>
            <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1, color: '#fff' }}>
              Get a free quote for {svc.title}
            </h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              href="/contact"
              style={{
                background: '#0D0D0D',
                color: '#fff',
                fontFamily: F,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '15px 28px',
                textDecoration: 'none',
                border: '1px solid rgba(13,13,13,0.18)',
                display: 'inline-block',
              }}
            >
              Contact Us Today
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
