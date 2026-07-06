'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ServiceData } from '@/lib/services'

const F = 'Outfit, sans-serif'
const accentColors = ['#C8102E', '#0D0D0D', '#C8102E', '#C8102E', '#0D0D0D']

export default function ServicesListClient({ services }: { services: ServiceData[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<{ svc: ServiceData; index: number } | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (lightbox) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = previousOverflow || ''

    return () => {
      document.body.style.overflow = previousOverflow || ''
    }
  }, [lightbox])

  return (
    <>
      <div style={{ borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
        {services.map((service, serviceIndex) => {
          const isOpen = openSlug === service.slug
          const accent = accentColors[serviceIndex % accentColors.length]

          return (
            <div key={service.slug} style={{ borderBottom: isOpen ? 'none' : '1px solid rgba(13,13,13,0.12)' }}>
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                aria-expanded={isOpen}
                className="service-accordion-row page-gutter"
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  background: isOpen ? '#0D0D0D' : '#F5F2EE',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <div style={{ fontFamily: F, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: isOpen ? 'rgba(240,240,240,0.3)' : 'rgba(18,18,18,0.3)', padding: '30px 0', transition: 'color 0.2s' }}>
                  {service.num}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '30px 0', minWidth: 0 }}>
                  <div style={{ width: 4, height: 32, background: isOpen ? accent : 'rgba(18,18,18,0.1)', flexShrink: 0, transition: 'background 0.2s' }} />
                  <span
                    style={{
                      fontFamily: F,
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 2.5vw, 34px)',
                      letterSpacing: '-0.02em',
                      color: isOpen ? '#F5F2EE' : '#0D0D0D',
                      transition: 'color 0.2s',
                    }}
                  >
                    {service.title}
                  </span>
                </div>

                <div
                  className="service-row-tag"
                  style={{
                    fontFamily: F,
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: accent,
                    background: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(18,18,18,0.05)',
                    border: `1px solid ${accent}`,
                    padding: '6px 10px',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s',
                  }}
                >
                  {service.tag}
                </div>

                {!isOpen ? (
                  <div className="service-row-intro" style={{ fontFamily: F, fontSize: 12, color: 'rgba(18,18,18,0.44)', lineHeight: 1.5, textAlign: 'left' }}>
                    {service.intro.split('.')[0]}.
                  </div>
                ) : (
                  <div className="service-row-intro" />
                )}

                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  style={{ fontFamily: F, fontSize: 20, color: isOpen ? '#F5F2EE' : 'rgba(18,18,18,0.35)', textAlign: 'right', transition: 'color 0.2s' }}
                  aria-hidden="true"
                >
                  →
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen ? (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
                    style={{ overflow: 'hidden', borderBottom: '1px solid rgba(13,13,13,0.12)' }}
                  >
                    <div className="service-expanded-grid page-gutter" style={{ paddingTop: 40, paddingBottom: 44, background: '#fff' }}>
                      <div>
                        <div style={{ width: 40, height: 3, background: accent, marginBottom: 24 }} />
                        <p style={{ fontFamily: F, fontSize: 15, fontWeight: 400, color: 'rgba(18,18,18,0.65)', lineHeight: 1.8, marginBottom: 28 }}>
                          {service.intro}
                        </p>
                        <p style={{ fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.35)', marginBottom: 14 }}>
                          {service.featuresText}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              style={{
                                fontFamily: F,
                                fontSize: 14,
                                fontWeight: 500,
                                color: '#0D0D0D',
                                padding: '12px 0',
                                borderBottom: '1px solid #F0ECE7',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 12,
                              }}
                            >
                              <div style={{ width: 8, height: 8, background: accent, flexShrink: 0, borderRadius: 999, marginTop: 6 }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p style={{ fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.35)', marginBottom: 18 }}>
                          {service.portfolioTitle}
                        </p>
                        <div className="service-detail-portfolio-grid">
                          {service.projects.map((project, projectIndex) => (
                            <motion.button
                              key={projectIndex}
                              type="button"
                              whileHover={{ y: -4 }}
                              transition={{ duration: 0.15 }}
                              onClick={() => setLightbox({ svc: service, index: projectIndex })}
                              style={{
                                aspectRatio: '4/3',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: 20,
                                border: '1px solid rgba(13,13,13,0.12)',
                                position: 'relative',
                                overflow: 'hidden',
                                background: '#DDD',
                                textAlign: 'left',
                              }}
                            >
                              <Image src={project.imagePath} alt={project.name} fill sizes="(max-width: 1024px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
                              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,0.08), rgba(18,18,18,0.62))' }} />
                              <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.16em', color: accent, background: 'rgba(0,0,0,0.4)', padding: '4px 8px', border: `1px solid ${accent}` }}>
                                0{projectIndex + 1}
                              </div>
                              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', position: 'relative', zIndex: 1 }}>
                                {project.name}
                              </div>
                              <div style={{ fontFamily: F, fontSize: 10, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.64)', marginTop: 4, position: 'relative', zIndex: 1 }}>
                                {project.location}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(18,18,18,0.88)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 'min(100%, 960px)',
                aspectRatio: '16/10',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 24,
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.16)',
                overflow: 'hidden',
              }}
            >
              <Image src={lightbox.svc.projects[lightbox.index].imagePath} alt={lightbox.svc.projects[lightbox.index].name} fill sizes="90vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,18,18,0.1), rgba(18,18,18,0.72))' }} />
              <button
                type="button"
                aria-label="Close project preview"
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: '#C8102E',
                  color: '#fff',
                  border: '1px solid rgba(13,13,13,0.24)',
                  width: 40,
                  height: 40,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: F, fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.56)', marginBottom: 10 }}>
                  {lightbox.svc.portfolioTitle}
                </div>
                <div style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(24px, 4vw, 42px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {lightbox.svc.projects[lightbox.index].name}
                </div>
                <div style={{ fontFamily: F, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.62)', marginTop: 10 }}>
                  {lightbox.svc.projects[lightbox.index].location}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
