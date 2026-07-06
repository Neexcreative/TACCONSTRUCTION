import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesListClient from './ServicesListClient'
import { services } from '@/lib/services'

export const metadata = { title: 'Services | T.A.C Construction' }

const F = 'Outfit, sans-serif'

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <div className="breadcrumb-bar">
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8102E' }} />
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,240,240,0.3)' }}>
            T.A.C Construction
          </span>
          <div style={{ width: 8, height: 2, background: 'rgba(240,240,240,0.2)' }} />
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E' }}>
            Services
          </span>
        </div>

        <section className="service-page-hero" style={{ borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
          <div style={{ background: '#0D0D0D', padding: 'clamp(44px, 7vw, 80px) clamp(20px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 2px, transparent 2px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 20 }}>
                What We Offer
              </div>
              <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(38px, 6vw, 76px)', lineHeight: 0.98, color: '#F5F2EE', letterSpacing: '-0.03em', maxWidth: 560 }}>
                Expert trades and refined construction results.
              </h1>
            </div>
          </div>

          <div style={{ background: '#F5F2EE', padding: 'clamp(44px, 7vw, 80px) clamp(20px, 5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.85, color: 'rgba(18,18,18,0.6)', maxWidth: 480 }}>
              From complete residential renovation to specialist trade packages, T.A.C Construction
              delivers a focused range of services with clearer planning, practical guidance, and
              dependable site execution.
            </p>
            <div className="responsive-two-col" style={{ gap: 18, maxWidth: 420 }}>
              {[
                { num: `${services.length}`, label: 'Core Services' },
                { num: '500+', label: 'Projects Delivered' },
              ].map((item) => (
                <div key={item.label} style={{ borderLeft: '2px solid #0D0D0D', paddingLeft: 16 }}>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 34, color: '#0D0D0D', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    {item.num}
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 600, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.46)', marginTop: 6 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesListClient services={services} />
        <Footer />
      </main>
    </>
  )
}
