'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import StatsCounter from './StatsCounter'

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
            <Link href="/services" className="home-hero-secondary-cta">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <StatsCounter />
    </>
  )
}
