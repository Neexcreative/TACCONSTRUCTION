'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const F = 'var(--font-outfit), sans-serif'

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: F,
  fontSize: 14,
  fontWeight: 500,
  padding: '16px 18px',
  background: '#FFFFFF',
  color: '#111111',
  outline: 'none',
  border: '1px solid rgba(17,17,17,0.12)',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontFamily: F,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'rgba(17,17,17,0.48)',
  display: 'block',
  marginBottom: 10,
}

const fieldWrap: React.CSSProperties = { marginBottom: 24 }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#C8102E'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(200,16,46,0.08)'
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72, background: '#F7F4F0', minHeight: '100vh' }}>
        <section
          style={{
            position: 'relative',
            minHeight: 380,
            display: 'flex',
            alignItems: 'center',
            background: "linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.68)), url('/images/hero/hero-placeholder.jpg') center/cover no-repeat, #171717",
            borderBottom: '1px solid rgba(13,13,13,0.12)',
          }}
        >
          <div style={{ padding: 'clamp(56px, 9vw, 72px) clamp(20px, 5vw, 64px)', maxWidth: 760, minWidth: 0 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.74)', marginBottom: 18 }}>
                Contact
              </div>
              <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(34px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.035em', color: '#FFFFFF', marginBottom: 18, overflowWrap: 'break-word' }}>
                Let&apos;s build something exceptional.
              </h1>
              <p style={{ fontFamily: F, fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.78)', maxWidth: 600 }}>
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-shell" style={{ background: '#F7F4F0', borderBottom: '1px solid rgba(13,13,13,0.08)' }}>
          <div className="responsive-two-col" style={{ gap: 32, alignItems: 'start' }}>
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(17,17,17,0.08)',
                padding: 'clamp(22px, 5vw, 32px) clamp(18px, 5vw, 30px)',
              }}
            >
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 22 }}>
                Direct Contact
              </div>

              <div style={{ display: 'grid', gap: 14 }}>
                {[
                  { label: 'Phone', val: '+353 1 234 5678' },
                  { label: 'WhatsApp', val: 'Chat With Us' },
                  { label: 'Email', val: 'info@tacconstruction.ie' },
                  { label: 'Location', val: 'Dublin, Ireland' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      border: '1px solid rgba(17,17,17,0.08)',
                      background: '#FCFCFC',
                      padding: '16px 18px',
                    }}
                  >
                    <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.44)', marginBottom: 6 }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: F, fontSize: 15, fontWeight: 500, color: item.label === 'WhatsApp' ? '#1D7A47' : '#111111' }}>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, paddingTop: 22, borderTop: '1px solid rgba(17,17,17,0.08)' }}>
                <p style={{ fontFamily: F, fontSize: 14, lineHeight: 1.7, color: 'rgba(17,17,17,0.62)', marginBottom: 12 }}>
                  Response within <strong style={{ color: '#111111' }}>24 hours</strong> for new enquiries.
                </p>
                <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8C1022' }}>
                  100% Irish Owned
                </div>
              </div>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(17,17,17,0.08)',
                padding: 'clamp(24px, 5vw, 34px) clamp(18px, 5vw, 34px) clamp(22px, 5vw, 30px)',
              }}
            >
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 28 }}>
                Project Enquiry
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="responsive-two-col" style={{ gap: 20 }}>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-first-name" style={labelStyle}>First Name <span aria-hidden="true">*</span></label>
                    <input style={inputStyle} id="contact-first-name" autoComplete="given-name" required name="firstName" value={formData.firstName} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="John" />
                  </div>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-last-name" style={labelStyle}>Last Name <span aria-hidden="true">*</span></label>
                    <input style={inputStyle} id="contact-last-name" autoComplete="family-name" required name="lastName" value={formData.lastName} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="Murphy" />
                  </div>
                </div>

                <div className="responsive-two-col" style={{ gap: 20 }}>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-email" style={labelStyle}>Email <span aria-hidden="true">*</span></label>
                    <input style={inputStyle} type="email" id="contact-email" autoComplete="email" required name="email" value={formData.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="john@example.com" />
                  </div>
                  <div style={fieldWrap}>
                    <label htmlFor="contact-phone" style={labelStyle}>Phone</label>
                    <input style={inputStyle} type="tel" id="contact-phone" autoComplete="tel" name="phone" value={formData.phone} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="+353..." />
                  </div>
                </div>

                <div style={fieldWrap}>
                  <label htmlFor="contact-service" style={labelStyle}>Service Required</label>
                  <select
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  >
                    <option value="">Select a service...</option>
                    {['Full Renovation', 'Heating Systems', 'Roofing', 'Plumbing', 'General Construction', 'Other / Not Sure'].map((service) => (
                      <option key={service} value={service.toLowerCase().replace(/\s/g, '-')}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label htmlFor="contact-message" style={labelStyle}>Message <span aria-hidden="true">*</span></label>
                  <textarea
                    style={{ ...inputStyle, minHeight: 144, resize: 'vertical' }}
                    id="contact-message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="Tell us about your project scope, timeline, and what kind of help you need."
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    style={{
                      background: '#C8102E',
                      color: '#FFFFFF',
                      fontFamily: F,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      padding: '15px 28px',
                      border: '1px solid #A80C24',
                      cursor: 'pointer',
                    }}
                  >
                    Send Enquiry
                  </motion.button>
                  <div style={{ fontFamily: F, fontSize: 12, color: 'rgba(17,17,17,0.48)' }}>
                    Your details stay private and are used only for this enquiry.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section-shell" style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(13,13,13,0.08)' }}>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 16 }}>
            Location
          </div>
          <div
            style={{
              minHeight: 320,
              border: '1px solid rgba(17,17,17,0.12)',
              background: 'linear-gradient(180deg, #EEF1F3, #E4E8EA)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(17,17,17,0.1)',
                  padding: '16px 22px',
                }}
              >
                <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#111111' }}>
                  Google Map Placeholder — Dublin, Ireland
                </div>
                <div style={{ fontFamily: F, fontSize: 13, color: 'rgba(17,17,17,0.58)', marginTop: 8 }}>
                  Replace with an embedded map or static map image when ready.
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
