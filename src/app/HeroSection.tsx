'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const F = 'Outfit, sans-serif'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
}

const stats = [
  { num: '15+', label: 'Years Experience' },
  { num: '500+', label: 'Projects Delivered' },
  { num: '98%', label: 'Client Satisfaction' },
]

export default function HeroSection() {
  return (
    <section
      className="responsive-two-col"
      style={{
        minHeight: 'calc(100vh - 72px)',
        borderBottom: '1px solid rgba(13,13,13,0.12)',
        background: '#F5F2EE',
      }}
    >
      <div
        style={{
          padding: 'clamp(44px, 7vw, 88px) clamp(20px, 5vw, 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #F7F4F0 0%, #EFEAE4 100%)',
        }}
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            style={{
              fontFamily: F,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#8C1022',
              marginBottom: 24,
            }}
          >
            Dublin Renovation & Building Specialists
          </motion.div>

          <motion.h1
            variants={item}
            style={{
              fontFamily: F,
              fontWeight: 700,
              fontSize: 'clamp(46px, 6vw, 82px)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
              color: '#111111',
              maxWidth: 620,
              marginBottom: 26,
            }}
          >
            Refined construction work for homes that need lasting quality.
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              fontFamily: F,
              fontWeight: 400,
              fontSize: 17,
              lineHeight: 1.75,
              color: 'rgba(17,17,17,0.7)',
              maxWidth: 520,
              marginBottom: 38,
            }}
          >
            T.A.C Construction delivers residential renovation, roofing, plumbing,
            heating, and general building services with careful project management
            and a premium finish.
          </motion.p>

          <motion.div
            variants={item}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}
          >
            <Link
              href="/contact"
              style={{
                background: '#C8102E',
                color: '#FFFFFF',
                fontFamily: F,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '15px 28px',
                border: '1px solid #A80C24',
              }}
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              style={{
                background: 'transparent',
                color: '#111111',
                fontFamily: F,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '15px 28px',
                border: '1px solid rgba(17,17,17,0.18)',
              }}
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="responsive-three-col"
            style={{
              gap: 20,
              paddingTop: 28,
              borderTop: '1px solid rgba(17,17,17,0.1)',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: F,
                    fontSize: 28,
                    fontWeight: 700,
                    color: '#111111',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: F,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,17,0.46)',
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          position: 'relative',
          background: '#121212',
          padding: 'clamp(16px, 3vw, 32px)',
          display: 'flex',
          alignItems: 'stretch',
          minHeight: 420,
        }}
      >
        <ImagePlaceholder
          alt="Construction hero placeholder"
          src="/images/hero/hero-placeholder.jpg"
          label="Hero Photography Placeholder"
          note="/public/images/hero/hero-placeholder.jpg"
          dark
          priority
          ratio="4 / 5"
          minHeight={420}
        />

        <div
          style={{
            position: 'absolute',
            left: 'clamp(28px, 4vw, 56px)',
            right: 'clamp(28px, 4vw, 56px)',
            bottom: 'clamp(28px, 4vw, 56px)',
            color: '#F5F2EE',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: 44,
              height: 2,
              background: '#C8102E',
              marginBottom: 18,
            }}
          />
          <div
            style={{
              fontFamily: F,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(245,242,238,0.72)',
              marginBottom: 10,
            }}
          >
            Residential Projects Across Dublin
          </div>
          <div
            style={{
              fontFamily: F,
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: 420,
            }}
          >
            Calm detailing, strong materials, and workmanship built for everyday use.
          </div>
        </div>
      </motion.div>
    </section>
  )
}
