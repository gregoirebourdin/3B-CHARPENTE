import { NextResponse, type NextRequest } from 'next/server'

/**
 * Runs before every page of the public site (never on the admin, the API or
 * static files). Three cheap, database-free jobs:
 *   1. canonical form of the URL: lower case + trailing slash (single 301);
 *   2. preview deployments (*.vercel.app…) are never indexed;
 *   3. nothing else: content redirects live in the admin (see app/(site)).
 */
const CANONICAL_HOST = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '').host
  } catch {
    return ''
  }
})()

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  let target = pathname
  if (/[A-Z]/.test(target) && !target.includes('%')) target = target.toLowerCase()
  if (!target.endsWith('/')) target = `${target}/`

  if (target !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = target
    url.search = search
    return NextResponse.redirect(url, 301)
  }

  const response = NextResponse.next()
  const host = request.headers.get('host') ?? ''
  if (CANONICAL_HOST && host !== CANONICAL_HOST) {
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
