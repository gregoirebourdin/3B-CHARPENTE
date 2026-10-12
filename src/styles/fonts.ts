import localFont from 'next/font/local'

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

/**
 * Inter (text): only the latin file (licence: src/fonts/LICENCE.md). From
 * Google Fonts every other alphabet came with it, and the four Greek letters
 * of « βίος » on the home page cost a 20 kB download.
 */
export const inter = localFont({
  src: [{ path: '../fonts/Inter-latin.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
})
