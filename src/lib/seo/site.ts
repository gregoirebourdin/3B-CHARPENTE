/** Canonical domain of the site (without www, https). Every canonical/OG URL is built from it. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://3bcharpente.fr').replace(/\/$/, '')

export const absoluteUrl = (path = '/') => (path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`)

export const BUSINESS_ID = `${SITE_URL}/#entreprise`
export const WEBSITE_ID = `${SITE_URL}/#site`
export const FOUNDER_ID = `${SITE_URL}/a-propos/#jean-michel-tardy`
