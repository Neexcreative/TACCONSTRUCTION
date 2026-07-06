'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ServiceData } from '@/lib/services'

const F = 'Outfit, sans-serif'
const accentColors = ['#C8102E', '#0D0D0D', '#C8102E', '#C8102E', '#0D0D0D']

export default function ServicesListClient({ services }: { services: ServiceData[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<{ svc: ServiceData; index: number } | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div style={{ borderBottom: '4px solid #0D0D0D' }}>
        {services.map((s, si) => {
          const isOpen = openSlug === s.slug
          const accent = accentColors[si % accentColors.length]

          return (
            <div key={s.slug} style={{ borderBottom: isOpen ? 'none' : '4px solid #0D0D0D' }}>
              {/* Row */}
              <div
                onClick={() => setOpenSlug(isOpen ? null : s.slug)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr auto auto 56px',
                  alignItems: 'center',
                  padding: '0 64px',
                  background: isOpen ? '#0D0D0D' : '#F5F2EE',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  gap: 24,
                }}
                onMouseEnter={e => { if (!isOpen) (e.currentTarget as HTMLElement).style.background = '#DDD9D4' }}
                onMouseLeave={e => { if (!isOpen) (e.currentTarget as HTMLElement).style.background = '#F5F2EE' }}
              >
                {/* Number */}
                <div style={{ fontFamily: F, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: isOpen ? 'rgba(240,240,240,0.3)' : 'rgba(18,18,18,0.3)', padding: '36px 0', transition: 'color 0.2s' }}>
                  {s.num}
                </div>

                {/* Accent bar + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '36px 0' }}>
                  <div style={{ width: 4, height: 32, background: isOpen ? accent : 'rgba(18,18,18,0.1)', flexShrink: 0, transition: 'background 0.2s' }} />
                  <span style={{
                    fontFamily: F, fontWeight: 900,
                    fontSize: 'clamp(22px, 2.5vw, 38px)',
                    textTransform: 'uppercase', letterSpacing: '-0.01em',
                    color: isOpen ? '#F5F2EE' : '#0D0D0D',
                    transition: 'color 0.2s',
                  }}>
                    {s.title}
                  </span>
                </div>

                {/* Tag chip */}
                <div style={{
                  fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: isOpen ? accent : accent,
                  background: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(18,18,18,0.05)',
                  border: `2px solid ${accent}`,
                  padding: '6px 12px',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}>
                  {s.tag}
                </div>

                {/* Short intro on closed */}
                {!isOpen && (
                  <div style={{ fontFamily: F, fontSize: 12, color: 'rgba(18,18,18,0.4)', maxWidth: 260, lineHeight: 1.5 }}>
                    {s.intro.split('.')[0]}.
                  </div>
                )}
                {isOpen && <div />}

                {/* Arrow */}
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  style={{ fontFamily: F, fontSize: 20, color: isOpen ? '#F5F2EE' : 'rgba(18,18,18,0.35)', textAlign: 'right', transition: 'color 0.2s' }}
                >
                  →
                </motion.div>
              </div>

              {/* Expanded panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
                    style={{ overflow: 'hidden', borderBottom: '4px solid #0D0D0D' }}
                  >
                    <div style={{ padding: '56px 64px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, background: '#fff' }}>

                      {/* Left: intro + features */}
                      <div>
                        {/* Accent bar */}
                        <div style={{ width: 40, height: 4, background: accent, marginBottom: 28 }} />
                        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 400, color: 'rgba(18,18,18,0.65)', lineHeight: 1.8, marginBottom: 36 }}>
                          {s.intro}
                        </p>
                        <p style={{ fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.35)', marginBottom: 16 }}>
                          {s.featuresText}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {s.features.map((f, fi) => (
                            <li key={fi} style={{
                              fontFamily: F, fontSize: 13, fontWeight: 500, color: '#0D0D0D',
                              padding: '12px 0', borderBottom: '2px solid #F5F2EE',
                              display: 'flex', alignItems: 'center', gap: 14,
                            }}>
                              <div style={{ width: 8, height: 8, background: accent, flexShrink: 0, borderRadius: si % 3 === 0 ? '50%' : '0' }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: portfolio grid */}
                      <div>
                        <p style={{ fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.35)', marginBottom: 20 }}>
                          {s.portfolioTitle}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                          {s.projects.map((p, pi) => (
                            <motion.div
                              key={pi}
                              whileHover={{ y: -4 }}
                              transition={{ duration: 0.15 }}
                              onClick={e => { e.stopPropagation(); setLightbox({ svc: s, index: pi }) }}
                              style={{
                                aspectRatio: '4/3', cursor: 'pointer',
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                                padding: 20,
                                border: '2px solid #0D0D0D',
                                boxShadow: '4px 4px 0px 0px #0D0D0D',
                                position: 'relative', overflow: 'hidden',
                              }}
                            >
                              <Image
                                src={p.imagePath}
                                alt={p.name}
                                fill
                                sizes="(max-width: 900px) 100vw, 25vw"
                                style={{ objectFit: 'cover' }}
                              />
                              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,0.08), rgba(18,18,18,0.62))' }} />
                              {/* Number badge */}
                              <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: accent, background: 'rgba(0,0,0,0.4)', padding: '4px 8px', border: `1px solid ${accent}` }}>0{pi + 1}</div>
                              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', position: 'relative', zIndex: 1 }}>{p.name}</div>
                              <div style={{ fontFamily: F, fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.55)', marginTop: 4, position: 'relative', zIndex: 1 }}>{p.location}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(18,18,18,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '60vw', maxWidth: 800, aspectRatio: '16/9',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: 48, position: 'relative',
                border: '4px solid #0D0D0D',
                boxShadow: '8px 8px 0px 0px rgba(240,192,32,0.3)',
              }}
            >
              <Image
                src={lightbox.svc.projects[lightbox.index].imagePath}
                alt={lightbox.svc.projects[lightbox.index].name}
                fill
                sizes="80vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,0.08), rgba(18,18,18,0.68))' }} />
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: 20, right: 20,
                  background: '#C8102E', color: '#fff', border: '2px solid #0D0D0D',
                  width: 36, height: 36, cursor: 'pointer',
                  fontFamily: F, fontSize: 18, lineHeight: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '2px 2px 0px 0px #0D0D0D',
                }}
              >
                ×
              </button>
              <div style={{ fontFamily: F, fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
                {lightbox.svc.portfolioTitle}
              </div>
              <div style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(24px, 3vw, 44px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95 }}>
                {lightbox.svc.projects[lightbox.index].name}
              </div>
              <div style={{ fontFamily: F, fontSize: 12, fontWeight: 500, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.55)', marginTop: 10 }}>
                {lightbox.svc.projects[lightbox.index].location}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
