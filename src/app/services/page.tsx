import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesListClient from './ServicesListClient'
import { services } from '@/lib/services'
import { SITE_NAME, SOCIAL_IMAGE } from '@/lib/seo'

const description =
  'Explore T.A.C Construction services for full renovation, heating systems, roofing, plumbing and general construction.'

export const metadata: Metadata = {
  title: 'Construction & Renovation Services',
  description,
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/services',
    siteName: SITE_NAME,
    title: `Construction & Renovation Services | ${SITE_NAME}`,
    description,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Construction & Renovation Services | ${SITE_NAME}`,
    description,
    images: [SOCIAL_IMAGE.url],
  },
}

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <section className="page-hero" aria-labelledby="services-heading">
          <Image className="page-hero-image" src="/images/hero/hero-placeholder.jpg" alt="" fill preload sizes="100vw" />
          <div className="page-hero-overlay" aria-hidden="true" />
          <div className="page-hero-content">
            <h1 id="services-heading" className="page-hero-title">Expert trades and refined construction results.</h1>
            <p className="page-hero-description">
              From complete residential renovation to specialist trade packages, T.A.C Construction delivers a focused
              range of services with clearer planning, practical guidance, and dependable site execution.
            </p>
          </div>
        </section>

        <ServicesListClient services={services} />
        <Footer />
      </main>
    </>
  )
}
