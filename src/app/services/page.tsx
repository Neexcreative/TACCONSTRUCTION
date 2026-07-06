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

        {/* Breadcrumb */}
        <div style={{ background: '#0D0D0D', borderBottom: '4px solid #0D0D0D', padding: '16px 64px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8102E' }} />
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(240,240,240,0.3)' }}>
            T.A.C Construction
          </span>
          <div style={{ width: 8, height: 2, background: 'rgba(240,240,240,0.2)' }} />
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C8102E' }}>
            Services
          </span>
        </div>

        {/* Hero — two-column */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '4px solid #0D0D0D' }}>
          {/* Left: Black with headline */}
          <div style={{ background: '#0D0D0D', padding: '80px 64px', borderRight: '4px solid #0D0D0D', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 2px, transparent 2px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 24, height: 2, background: '#C8102E' }} />
                What We Offer
              </div>
              <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(52px, 5.5vw, 88px)', lineHeight: 0.88, textTransform: 'uppercase', color: '#F5F2EE', letterSpacing: '-0.02em' }}>
                Expert<br />Trades.<br /><span style={{ color: '#C8102E' }}>Real</span><br />Results.
              </h1>
            </div>
            {/* Yellow corner */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: 64, height: 64, background: '#C8102E', border: '4px solid #0D0D0D' }} />
          </div>

          {/* Right: Off-white with description + geometric */}
          <div style={{ background: '#F5F2EE', padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.9, color: 'rgba(18,18,18,0.55)', maxWidth: 420 }}>
              From ground up construction to specialist finishes, T.A.C Construction delivers a complete range of building and renovation services. Click any service to explore our portfolio.
            </p>
            {/* Service count display */}
            <div style={{ display: 'flex', gap: 32, marginTop: 48 }}>
              {[
                { num: `${services.length}`, label: 'Core Services' },
                { num: '500+', label: 'Projects Done' },
              ].map(s => (
                <div key={s.label} style={{ borderLeft: '4px solid #0D0D0D', paddingLeft: 20 }}>
                  <div style={{ fontFamily: F, fontWeight: 900, fontSize: 40, color: '#0D0D0D', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</div>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.4)', marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services accordion list */}
        <ServicesListClient services={services} />

        <Footer />
      </main>
    </>
  )
}
