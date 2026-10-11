import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/seo/site'

/** Crawlers (search engines and AI assistants) are welcome on the public site, never on the admin. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/', '/site-api/', '/*?*projet='] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  }
}
