import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

/**
 * Content-Security-Policy. Next.js injects small inline scripts for
 * hydration, hence 'unsafe-inline' (a nonce would force every page to be
 * rendered on demand and lose static generation).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://plausible.io https://cloud.umami.is https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.public.blob.vercel-storage.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.vercel-storage.com https://vercel.com https://plausible.io https://cloud.umami.is https://api-gateway.umami.dev https://vitals.vercel-insights.com",
  "frame-src 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  ...(isProd
    ? [
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'Content-Security-Policy', value: csp },
      ]
    : []),
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Public URLs end with "/" (/charpente-bois/). The slash is added by src/proxy.ts
  // for site pages only, so the admin and the API keep their usual URLs.
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [480, 640, 960, 1200, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    qualities: [70, 75, 82],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [{ protocol: 'https', hostname: '*.public.blob.vercel-storage.com' }],
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/(admin|api)/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/brand/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
