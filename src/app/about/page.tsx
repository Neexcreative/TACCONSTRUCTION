import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import GoogleReviews from './GoogleReviews'

export const metadata = { title: 'About | T.A.C Construction' }

const F = 'Outfit, sans-serif'

const values = [
  {
    title: 'Quality',
    desc: 'We focus on clean finishes, strong materials, and details that make the work feel complete.',
  },
  {
    title: 'Reliability',
    desc: 'Clients work with a team that communicates clearly, keeps momentum, and respects agreed timelines.',
  },
  {
    title: 'Experience',
    desc: 'Years of residential construction and renovation work inform every recommendation and execution decision.',
  },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72, background: '#F7F4F0' }}>
        <section
          style={{
            position: 'relative',
            minHeight: 520,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '72px 24px',
            background: "linear-gradient(rgba(10,10,10,0.56), rgba(10,10,10,0.62)), url('/images/about/team-hero.jpg') center/cover no-repeat, #171717",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.76)', marginBottom: 18 }}>
              Our Team
            </div>
            <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 0.98, letterSpacing: '-0.035em', color: '#FFFFFF', marginBottom: 16 }}>
              OUR TEAM
            </h1>
            <p style={{ fontFamily: F, fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,0.78)' }}>
              Building Dublin with experience, craftsmanship and trust.
            </p>
          </div>
        </section>

        <section className="section-shell" style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
          <div className="responsive-two-col" style={{ gap: 40, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 16 }}>
                Company Story
              </div>
              <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: '#111111', marginBottom: 22 }}>
                A construction company built around steady delivery and long-term trust.
              </h2>
              <p style={{ fontFamily: F, fontSize: 16, lineHeight: 1.85, color: 'rgba(17,17,17,0.66)', marginBottom: 18 }}>
                T.A.C Construction has spent years working across residential renovation, roofing, heating,
                plumbing, and general building projects throughout Dublin and surrounding areas.
              </p>
              <p style={{ fontFamily: F, fontSize: 16, lineHeight: 1.85, color: 'rgba(17,17,17,0.66)', marginBottom: 18 }}>
                Our approach combines practical site knowledge with a more considered design eye, so projects
                feel solid, well-finished, and easier to live with every day.
              </p>
              <p style={{ fontFamily: F, fontSize: 16, lineHeight: 1.85, color: 'rgba(17,17,17,0.66)' }}>
                We keep the process clear for clients, communicate honestly, and focus on workmanship that
                reflects the value of the investment being made.
              </p>
            </div>

            <ImagePlaceholder
              alt="About company placeholder"
              src="/images/about/about-company.jpg"
              label="About Company Placeholder"
              note="/public/images/about/about-company.jpg"
              ratio="4 / 3"
              minHeight={360}
            />
          </div>
        </section>

        <section className="section-shell" style={{ background: '#F7F4F0', borderBottom: '1px solid rgba(13,13,13,0.12)' }}>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C1022', marginBottom: 18 }}>
            Mission & Values
          </div>
          <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: '#111111', marginBottom: 32, maxWidth: 620 }}>
            The standards we bring into every renovation and building project.
          </h2>

          <div className="responsive-three-col" style={{ gap: 20 }}>
            {values.map((value) => (
              <div
                key={value.title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(17,17,17,0.08)',
                  borderRadius: 14,
                  padding: '28px 26px',
                  boxShadow: '0 10px 24px rgba(17,17,17,0.04)',
                }}
              >
                <div style={{ width: 32, height: 2, background: '#C8102E', marginBottom: 18 }} />
                <h3 style={{ fontFamily: F, fontWeight: 650, fontSize: 24, letterSpacing: '-0.025em', color: '#111111', marginBottom: 12 }}>
                  {value.title}
                </h3>
                <p style={{ fontFamily: F, fontSize: 15, lineHeight: 1.8, color: 'rgba(17,17,17,0.62)' }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <GoogleReviews />
        <Footer />
      </main>
    </>
  )
}
