import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '3B Charpente',
    short_name: '3B Charpente',
    description: 'Charpentiers à L’Argentière-la-Bessée et dans les Hautes-Alpes depuis 2007.',
    start_url: '/',
    display: 'browser',
    background_color: '#f8f4ee',
    theme_color: '#2c4f2d',
    lang: 'fr',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  }
}
