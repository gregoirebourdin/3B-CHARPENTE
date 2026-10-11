import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

import { SITE_URL, absoluteUrl } from '@/lib/seo/site'

/**
 * Crawlers (search engines and AI assistants) are welcome on the public site,
 * never on the admin. Any other address (Vercel previews, the vercel.app
 * alias before the domain is switched) is closed to them entirely.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host') ?? ''
  if (host !== new URL(SITE_URL).host) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/', '/site-api/', '/*?*projet='] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  }
}
