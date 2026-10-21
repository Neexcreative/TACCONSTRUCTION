import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found',
  alternates: { canonical: null },
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <section className="home-final-cta" aria-labelledby="not-found-heading">
          <div className="home-final-cta-inner">
            <div className="home-final-cta-copy">
              <p className="home-final-cta-eyebrow">Error 404</p>
              <h1 id="not-found-heading" className="home-final-cta-title">
                This page could not be found.
              </h1>
              <p className="home-final-cta-description">
                The link may be out of date or the page may have moved. Explore our services or get in touch about
                your project.
              </p>
            </div>
            <div className="home-final-cta-actions">
              <Link href="/" className="home-final-cta-primary">
                Back to Home
              </Link>
              <Link href="/services" className="home-final-cta-secondary">
                View Our Services
              </Link>
              <Link href="/contact" className="home-final-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
