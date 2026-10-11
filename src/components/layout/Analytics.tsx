'use client'

import { track as vercelTrack } from '@vercel/analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { useEffect } from 'react'

type Props = {
  provider?: 'vercel' | 'plausible' | 'umami' | 'none' | null
  plausibleDomain?: string | null
  umamiWebsiteId?: string | null
  umamiScriptUrl?: string | null
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void
    umami?: { track: (event: string, data?: Record<string, string>) => void }
  }
}

/** Sends one event to whichever cookie-less tool is selected in the admin. */
export function trackEvent(provider: Props['provider'], name: string) {
  try {
    if (provider === 'vercel') vercelTrack(name)
    else if (provider === 'plausible') window.plausible?.(name)
    else if (provider === 'umami') window.umami?.track(name)
  } catch {
    // Measuring must never break the page.
  }
}

/**
 * Cookie-less audience measurement (no consent banner needed) and the four
 * tracked events: phone click, e-mail click, quote button, form sent.
 * Clicks are caught by delegation on [data-track], so links stay plain HTML.
 */
export function Analytics({ provider, plausibleDomain, umamiWebsiteId, umamiScriptUrl }: Props) {
  useEffect(() => {
    if (!provider || provider === 'none') return
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]')
      if (target?.dataset.track) trackEvent(provider, target.dataset.track)
    }
    const onCustom = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail
      if (detail) trackEvent(provider, detail)
    }
    document.addEventListener('click', onClick)
    window.addEventListener('tb:track', onCustom)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('tb:track', onCustom)
    }
  }, [provider])

  if (provider === 'vercel') return <VercelAnalytics />
  if (provider === 'plausible' && plausibleDomain) {
    return <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
  }
  if (provider === 'umami' && umamiWebsiteId) {
    return (
      <Script
        defer
        data-website-id={umamiWebsiteId}
        src={umamiScriptUrl || 'https://cloud.umami.is/script.js'}
        strategy="afterInteractive"
      />
    )
  }
  return null
}
