import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import GoogleReviews from './GoogleReviews'
import { SITE_NAME, SOCIAL_IMAGE } from '@/lib/seo'

const description =
  'Learn about T.A.C Construction and its considered approach to residential construction, renovation, and workmanship.'

export const metadata: Metadata = {
  title: { absolute: 'About T.A.C Construction | Construction & Renovation Company' },
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website', locale: 'en_IE', url: '/about', siteName: SITE_NAME,
    title: `About T.A.C Construction | ${SITE_NAME}`, description, images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image', title: `About T.A.C Construction | ${SITE_NAME}`,
    description, images: [SOCIAL_IMAGE.url],
  },
}

const principles = [
  { number: '01', title: 'Quality', description: 'A considered approach to materials, finishes, and the details that bring a project together.' },
  { number: '02', title: 'Reliability', description: 'Clear communication and a steady, organised approach throughout the work.' },
  { number: '03', title: 'Experience', description: 'Practical construction knowledge applied thoughtfully to each project and its requirements.' },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero" aria-labelledby="about-heading">
          <Image className="about-hero-image" src="/images/about/team-hero.jpg" alt="" fill preload sizes="100vw" />
          <div className="about-hero-overlay" aria-hidden="true" />
          <div className="about-hero-content">
            <p className="about-eyebrow about-hero-eyebrow">About T.A.C Construction</p>
            <h1 id="about-heading" className="about-hero-title">Built with purpose. Finished with care.</h1>
            <p className="about-hero-description">
              A considered approach to residential construction, renovation, and the workmanship behind every detail.
            </p>
          </div>
        </section>

        <section className="about-story" aria-labelledby="story-heading">
          <div className="about-story-inner">
            <div className="about-story-copy">
              <p className="about-eyebrow">Company Story</p>
              <h2 id="story-heading" className="about-section-title">Construction shaped by practical thinking and careful execution.</h2>
              <div className="about-story-body">
                <p>T.A.C Construction works across residential renovation, roofing, heating, plumbing, and general building projects.</p>
                <p>The approach brings practical site knowledge together with a considered eye for how spaces should look, function, and feel.</p>
                <p>From the first conversation to the finishing details, the focus remains on a clear process and work that feels carefully resolved.</p>
              </div>
            </div>
            <div className="about-story-media">
              <ImagePlaceholder
                alt="Provisional photograph of a roofing crew working on a residential property"
                src="/images/about/about-company.jpg"
                label="About Company Placeholder"
                note="/public/images/about/about-company.jpg"
                ratio="4 / 3"
                minHeight={360}
              />
            </div>
          </div>
        </section>

        <section className="about-editorial-break" aria-labelledby="editorial-heading">
          <div className="about-editorial-break-inner">
            <p className="about-editorial-index" aria-hidden="true">TAC / 01</p>
            <h2 id="editorial-heading">Thoughtful planning.<br />Confident execution.<br />A considered finish.</h2>
            <p className="about-editorial-note">Construction and renovation approached as one continuous, carefully managed process.</p>
          </div>
        </section>

        <section className="about-principles" aria-labelledby="principles-heading">
          <div className="about-principles-header">
            <p className="about-eyebrow">Mission &amp; Values</p>
            <h2 id="principles-heading" className="about-section-title">Principles that guide the work.</h2>
          </div>
          <div className="about-principles-grid">
            {principles.map((principle) => (
              <article className="about-principle" key={principle.number}>
                <p className="about-principle-number">{principle.number}</p>
                <h3 className="about-principle-title">{principle.title}</h3>
                <p className="about-principle-description">{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <GoogleReviews />

        <section className="about-final-cta" aria-labelledby="about-cta-heading">
          <div className="about-final-cta-inner">
            <div className="about-final-cta-copy">
              <p className="about-eyebrow about-final-cta-eyebrow">Start a Conversation</p>
              <h2 id="about-cta-heading">Planning work for your home?</h2>
              <p>Tell us what you have in mind, or explore the construction and renovation services available.</p>
            </div>
            <div className="about-final-cta-actions">
              <Link className="about-final-cta-primary" href="/contact">Discuss Your Project</Link>
              <Link className="about-final-cta-secondary" href="/services">Explore Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
