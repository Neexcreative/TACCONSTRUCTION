import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/contact']

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
    })),
  ]
}
