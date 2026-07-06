'use client'

import { motion, type Variants } from 'framer-motion'

const F = 'Outfit, sans-serif'

const reviews = [
  {
    name: 'Sean Murphy',
    role: 'Home Renovation Client',
    text: 'The team managed our renovation with real professionalism. Communication was clear, the finish was excellent, and the project stayed organised from start to handover.',
  },
  {
    name: "Claire O'Brien",
    role: 'Heating Upgrade Client',
    text: 'Everything felt well planned and easy to trust. The crew were respectful, efficient, and the result made an immediate difference to the comfort of the house.',
  },
  {
    name: 'James Brennan',
    role: 'Extension Project Client',
    text: 'What stood out most was the consistency. The build quality, weekly updates, and overall management gave us confidence throughout the entire project.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0, 0, 0.2, 1], delay: i * 0.08 },
  }),
}

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8102E">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <section style={{ background: '#F7F4F0', borderTop: '1px solid rgba(13,13,13,0.12)', borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
      <div style={{ padding: '80px 64px 28px', textAlign: 'center' }}>
        <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 16 }}>
          Testimonials
        </div>
        <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(32px, 4vw, 50px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#111111', marginBottom: 14 }}>
          Trusted by homeowners across Dublin
        </h2>
        <p style={{ fontFamily: F, fontSize: 16, lineHeight: 1.8, color: 'rgba(17,17,17,0.62)', maxWidth: 620, margin: '0 auto' }}>
          A more refined look at the kind of experience clients value most when they work with us.
        </p>
      </div>

      <div className="responsive-three-col" style={{ gap: 22, padding: '24px 64px 80px' }}>
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              background: '#FFFFFF',
              borderRadius: 14,
              padding: '28px 26px',
              boxShadow: '0 14px 30px rgba(17,17,17,0.06)',
              border: '1px solid rgba(17,17,17,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: 'linear-gradient(180deg, #E7EAEC, #DDE2E5)',
                  border: '1px solid rgba(17,17,17,0.08)',
                }}
              />
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: 'rgba(200,16,46,0.22)', lineHeight: 1 }}>
                &ldquo;
              </div>
            </div>

            <Stars />

            <p style={{ fontFamily: F, fontSize: 15, lineHeight: 1.8, color: 'rgba(17,17,17,0.68)', margin: '18px 0 22px' }}>
              {review.text}
            </p>

            <div>
              <div style={{ fontFamily: F, fontWeight: 650, fontSize: 16, color: '#111111', marginBottom: 4 }}>
                {review.name}
              </div>
              <div style={{ fontFamily: F, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.46)' }}>
                {review.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
