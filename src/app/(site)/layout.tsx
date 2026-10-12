import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import { Analytics } from '@/components/layout/Analytics'
import { LivePreviewListener } from '@/components/layout/LivePreviewListener'
import { RevealObserver } from '@/components/layout/RevealObserver'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { isDraftMode } from '@/lib/cms/client'
import { getAnalyticsSettings, getCommunes, getCompany, getSeoSettings } from '@/lib/cms/queries'
import { JsonLd } from '@/lib/seo/JsonLd'
import { businessGraph, graph } from '@/lib/seo/jsonld'
import { SITE_URL } from '@/lib/seo/site'
import { inter, nohemi } from '@/styles/fonts'

export async function generateMetadata(): Promise<Metadata> {
  const [settings, company] = await Promise.all([getSeoSettings(), getCompany()])
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: company.name,
    title: { default: company.name, template: settings.titleTemplate || '%s | 3B Charpente' },
    description: settings.defaultDescription ?? undefined,
    formatDetection: { telephone: false, email: false, address: false },
    icons: {
      icon: [
        { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
    verification: {
      google: settings.googleVerification || undefined,
      other: settings.bingVerification ? { 'msvalidate.01': settings.bingVerification } : undefined,
    },
    openGraph: { locale: 'fr_FR', siteName: company.name, type: 'website' },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1a10' },
  ],
}

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const [company, settings, communes, analytics, draft] = await Promise.all([
    getCompany(),
    getSeoSettings(),
    getCommunes(),
    getAnalyticsSettings(),
    isDraftMode(),
  ])

  return (
    <html lang="fr" className={`${nohemi.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <RevealObserver />
        <Analytics
          // Vercel Web Analytics only exists on Vercel: elsewhere (local build) its script would be a 404.
          provider={analytics.provider === 'vercel' && !process.env.VERCEL ? 'none' : analytics.provider}
          plausibleDomain={analytics.plausibleDomain}
          umamiWebsiteId={analytics.umamiWebsiteId}
          umamiScriptUrl={analytics.umamiScriptUrl}
        />
        {draft ? <LivePreviewListener /> : null}
        <JsonLd data={graph(businessGraph(company, settings, communes))} />
      </body>
    </html>
  )
}
