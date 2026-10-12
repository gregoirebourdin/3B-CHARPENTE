import { NextResponse, type NextRequest } from 'next/server'

import { SITE_URL } from './lib/seo/site'

/**
 * Runs before every page of the public site (never on the admin, the API or
 * static files). Three cheap, database-free jobs:
 *   1. canonical form of the URL: lower case + trailing slash (single 301);
 *   2. preview deployments (*.vercel.app…) are never indexed;
 *   3. nothing else: content redirects live in the admin (see app/(site)).
 */
const CANONICAL_HOST = new URL(SITE_URL).host

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  let target = pathname
  if (/[A-Z]/.test(target) && !target.includes('%')) target = target.toLowerCase()
  if (!target.endsWith('/')) target = `${target}/`

  if (target !== pathname) {
    // A plain URL, not a clone of nextUrl: Next.js would strip the trailing
    // slash again when printing it (trailingSlash is off for the admin's sake),
    // and the page would redirect to itself.
    return NextResponse.redirect(new URL(`${target}${search}`, request.nextUrl.origin), 301)
  }

  const response = NextResponse.next()
  const host = request.headers.get('host') ?? ''
  if (host !== CANONICAL_HOST) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return response
}

export const config = {
  matcher: [
    // Everything except: admin, API, Next internals, site API, and files with an extension.
    '/((?!admin|api|site-api|_next|_vercel|.*\\..*).*)',
  ],
}
