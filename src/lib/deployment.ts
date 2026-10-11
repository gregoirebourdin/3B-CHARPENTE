import { SITE_URL } from './seo/site'

const https = (host?: string) => (host ? `https://${host}` : undefined)

/**
 * Addresses this deployment answers on. On Vercel they come from the system
 * variables (production alias, branch alias, unique deployment URL), so the
 * admin works on every one of them without configuration.
 */
export const DEPLOYMENT_ORIGINS = Array.from(
  new Set(
    [
      process.env.NEXT_PUBLIC_SERVER_URL,
      SITE_URL,
      SITE_URL.replace('://', '://www.'),
      https(process.env.VERCEL_PROJECT_PRODUCTION_URL),
      https(process.env.VERCEL_BRANCH_URL),
      https(process.env.VERCEL_URL),
      process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000',
    ].filter((origin): origin is string => Boolean(origin)),
  ),
)

/** Base of the links to the admin in notification e-mails. */
export const ADMIN_BASE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || https(process.env.VERCEL_PROJECT_PRODUCTION_URL) || SITE_URL
