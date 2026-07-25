import type { Metadata } from 'next'
import { SITE_NAME, SOCIAL_IMAGE } from '@/lib/seo'

const description =
  'Contact T.A.C Construction to discuss a residential renovation, roofing, heating, plumbing or construction project.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/contact',
    siteName: SITE_NAME,
    title: `Contact | ${SITE_NAME}`,
    description,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_NAME}`,
    description,
    images: [SOCIAL_IMAGE.url],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
