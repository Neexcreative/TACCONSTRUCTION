'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import StatsCounter from './StatsCounter'

const WHATSAPP_URL = 'https://wa.me/353851976302'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
}

export default function HeroSection() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/images/hero/hero-placeholder.jpg"
          alt="T.A.C Construction residential building project"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />

        <div className="home-hero-overlay" aria-hidden="true" />

        <motion.div
          className="home-hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >


          <motion.h1 className="home-hero-title" variants={item}>
            Refined construction work for homes that need lasting quality.
          </motion.h1>

          <motion.p className="home-hero-description" variants={item}>
            T.A.C Construction delivers residential renovation, roofing, plumbing,
            heating, and general building services with careful project management
            and a premium finish.
          </motion.p>

          <motion.div className="home-hero-actions" variants={item}>
            <Link href="/contact" className="home-hero-primary-cta">
              Request a Quote
            </Link>
            <a
              href={WHATSAPP_URL}
              className="home-hero-secondary-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us (opens in a new tab)"
            >
              <svg
                className="home-hero-whatsapp-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2.05 22l5.25-1.5A9.96 9.96 0 1 0 12.04 2Zm0 17.8a7.8 7.8 0 0 1-3.98-1.09l-.28-.17-3.12.89.91-3.04-.18-.29a7.77 7.77 0 1 1 6.65 3.7Zm4.27-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.61.76-.75.92-.13.15-.27.17-.5.05a6.4 6.4 0 0 1-1.88-1.16 7.07 7.07 0 0 1-1.3-1.62c-.14-.23-.02-.36.1-.48.1-.1.23-.27.35-.41.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.26-.72-1.72-.19-.46-.38-.4-.52-.41h-.45c-.16 0-.41.06-.63.29-.21.23-.82.8-.82 1.96 0 1.15.84 2.27.96 2.42.12.16 1.65 2.52 4 3.54.56.24 1 .39 1.34.5.56.18 1.07.15 1.47.09.45-.07 1.38-.57 1.58-1.11.19-.55.19-1.02.13-1.11-.06-.1-.21-.16-.45-.28Z"
                />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      <StatsCounter />
    </>
  )
}
