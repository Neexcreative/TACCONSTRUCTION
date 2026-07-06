import { services } from '@/lib/services'
import { notFound } from 'next/navigation'
import ServiceDetailClient from './ServiceDetailClient'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const svc = services.find(s => s.slug === params.slug)
  return { title: svc ? `${svc.title} | T.A.C Construction` : 'Service | T.A.C Construction' }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = services.find(s => s.slug === params.slug)
  if (!svc) notFound()
  return <ServiceDetailClient svc={svc} />
}
