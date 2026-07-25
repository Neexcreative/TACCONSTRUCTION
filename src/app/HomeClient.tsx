'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ServiceData } from '@/lib/services'

type Props =
  | { variant: 'services'; services: ServiceData[] }
  | { variant: 'cta' }

export default function HomeClient(props: Props) {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!selectedService) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null)
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [selectedService])

  if (props.variant === 'services') {
    return (
      <>
        <section className="home-services">
          <div className="home-services-header">
            <div className="home-services-heading">
              <div className="home-services-eyebrow">What We Do</div>
              <h2 className="home-services-title">
                Construction &amp; Renovation Services
              </h2>
            </div>

            <Link href="/services" className="home-services-view-all">
              View All
            </Link>
          </div>

          <div
            className="home-services-track"
            role="list"
            aria-label="T.A.C Construction services"
          >
            {props.services.map((service) => (
              <div className="home-service-card-item" role="listitem" key={service.slug}>
                <button
                  type="button"
                  className="home-service-card"
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelectedService(service)
                  }}
                >
                  <Image
                    src={service.projects[0].imagePath}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1200px) 44vw, 400px"
                    className="home-service-card-image"
                  />
                  <div className="home-service-card-overlay" aria-hidden="true" />

                  <div className="home-service-card-spacer" aria-hidden="true" />

                  <div className="home-service-card-content">
                    <h3 className="home-service-card-title">{service.title}</h3>
                    <p className="home-service-card-intro">{service.intro}</p>
                    <span className="home-service-card-open" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {selectedService ? (
            <motion.div
              className="home-service-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setSelectedService(null)
              }}
            >
              <motion.div
                ref={dialogRef}
                className="home-service-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby={`home-service-modal-title-${selectedService.slug}`}
                aria-describedby={`home-service-modal-description-${selectedService.slug}`}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.2, 0.7, 0, 1] }}
              >
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="home-service-modal-close"
                  aria-label={`Close ${selectedService.title} details`}
                  onClick={() => setSelectedService(null)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                </button>

                <div className="home-service-modal-image">
                  <Image
                    src={selectedService.projects[0].imagePath}
                    alt={selectedService.projects[0].name}
                    fill
                    sizes="(max-width: 900px) 92vw, 46vw"
                    className="home-service-modal-image-asset"
                  />
                  <div className="home-service-modal-image-overlay" aria-hidden="true" />
                  <span className="home-service-modal-number">{selectedService.num}</span>
                </div>

                <div className="home-service-modal-content">
                  <div className="home-service-modal-eyebrow">{selectedService.tag}</div>
                  <h2
                    className="home-service-modal-title"
                    id={`home-service-modal-title-${selectedService.slug}`}
                  >
                    {selectedService.title}
                  </h2>
                  <p
                    className="home-service-modal-description"
                    id={`home-service-modal-description-${selectedService.slug}`}
                  >
                    {selectedService.intro}
                  </p>
                  <p className="home-service-modal-detail">{selectedService.featuresText}</p>

                  <ul className="home-service-modal-features">
                    {selectedService.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${selectedService.slug}`}
                    className="home-service-modal-cta"
                  >
                    View {selectedService.title}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>
    )
  }

  if (props.variant === 'cta') {
    return (
      <section className="home-final-cta">
        <div className="home-final-cta-inner">
          <div className="home-final-cta-copy">
            <div className="home-final-cta-eyebrow">READY TO START?</div>
            <h2 className="home-final-cta-title">
              Planning a Renovation or Construction Project?
            </h2>
            <p className="home-final-cta-description">
              Tell us about your project and take the first step towards a clear, professionally managed build.
            </p>
          </div>

          <div className="home-final-cta-actions">
            <Link href="/contact" className="home-final-cta-primary">
              Request a Quote
            </Link>
            <Link href="/services" className="home-final-cta-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return null
}
