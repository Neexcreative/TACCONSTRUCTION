import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeClient from './HomeClient'
import HeroSection from './HeroSection'
import { services } from '@/lib/services'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SOCIAL_IMAGE,
} from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [SOCIAL_IMAGE.url],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <HeroSection />
        <HomeClient variant="services" services={services} />
        <HomeClient variant="cta" />
        <Footer />
      </main>
    </>
  )
}
