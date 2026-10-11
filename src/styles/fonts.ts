import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

/** Nohemi (titles), self-hosted as provided, files unmodified (licence: src/fonts/LICENCE.md). */
export const nohemi = localFont({
  src: [
    { path: '../fonts/Nohemi-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/Nohemi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-nohemi',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
})

/** Inter (text), latin subset, swap. */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
