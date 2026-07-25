import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE } from '@/lib/seo'
import ServiceDetailClient from './ServiceDetailClient'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return {
      title: 'Service',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const path = `/services/${service.slug}`
  const title = `${service.title} | ${SITE_NAME}`

  return {
    title: service.title,
    description: service.intro,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: path,
      siteName: SITE_NAME,
      title,
      description: service.intro,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: service.intro,
      images: [SOCIAL_IMAGE.url],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${SITE_URL}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ServiceDetailClient svc={service} />
    </>
  )
}
