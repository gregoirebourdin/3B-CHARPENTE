/**
 * The administration's navigation, in plain words. Five things on screen;
 * everything else waits in « Plus d'options ». Each link names the collection
 * or global it needs, so it is hidden from accounts that cannot open it.
 */
export type NavIcon =
  | 'home'
  | 'inbox'
  | 'file'
  | 'hammer'
  | 'camera'
  | 'image'
  | 'book'
  | 'clock'
  | 'menu'
  | 'type'
  | 'search'
  | 'redirect'
  | 'help'
  | 'faq'
  | 'map'
  | 'users'
  | 'star'
  | 'check'
  | 'form'
  | 'account'
  | 'chart'
  | 'medal'
  | 'building'

export type NavLink = {
  label: string
  href: string
  icon: NavIcon
  /** Collection or global that must be visible to the account. */
  needs?: { collection?: string; global?: string }
  /** Badge with the number of new requests. */
  badge?: 'requests'
  /** Matches deeper paths (lists and documents). */
  match?: string[]
}

export type NavGroup = { label?: string; links: NavLink[]; collapsible?: boolean }

export const NAV: NavGroup[] = [
  {
    links: [
      { label: 'Accueil', href: '/admin', icon: 'home' },
      {
        label: 'Demandes',
        href: '/admin/demandes',
        icon: 'inbox',
        badge: 'requests',
        needs: { collection: 'form-submissions' },
        match: ['/admin/collections/form-submissions'],
      },
    ],
  },
  {
    label: 'Mon site',
    links: [
      { label: 'Pages', href: '/admin/collections/pages', icon: 'file', needs: { collection: 'pages' } },
      { label: 'Prestations', href: '/admin/collections/services', icon: 'hammer', needs: { collection: 'services' } },
      {
        label: 'Chantiers',
        href: '/admin/collections/projects',
        icon: 'camera',
        needs: { collection: 'projects' },
        match: ['/admin/nouveau-chantier'],
      },
      { label: 'Conseils', href: '/admin/collections/articles', icon: 'book', needs: { collection: 'articles' } },
      { label: 'Photos', href: '/admin/collections/media', icon: 'image', needs: { collection: 'media' } },
    ],
  },
  {
    label: 'Réglages',
    links: [
      {
        label: 'Coordonnées et horaires',
        href: '/admin/horaires',
        icon: 'clock',
        needs: { global: 'company' },
        match: ['/admin/globals/company'],
      },
      { label: 'Menu du site', href: '/admin/globals/header', icon: 'menu', needs: { global: 'header' } },
      { label: 'Textes du site', href: '/admin/globals/site-texts', icon: 'type', needs: { global: 'site-texts' } },
      {
        label: 'Google et référencement',
        href: '/admin/globals/seo-settings',
        icon: 'search',
        needs: { global: 'seo-settings' },
      },
    ],
  },
  {
    label: 'Plus d’options',
    collapsible: true,
    links: [
      { label: 'Pied de page', href: '/admin/globals/footer', icon: 'menu', needs: { global: 'footer' } },
      { label: 'Questions fréquentes', href: '/admin/collections/faqs', icon: 'faq', needs: { collection: 'faqs' } },
      { label: 'Communes', href: '/admin/collections/communes', icon: 'map', needs: { collection: 'communes' } },
      { label: 'Équipe', href: '/admin/collections/team', icon: 'users', needs: { collection: 'team' } },
      { label: 'Avis clients', href: '/admin/collections/reviews', icon: 'star', needs: { collection: 'reviews' } },
      { label: 'Preuves et labels', href: '/admin/globals/proofs', icon: 'medal', needs: { global: 'proofs' } },
      { label: 'Redirections', href: '/admin/collections/redirects', icon: 'redirect', needs: { collection: 'redirects' } },
      { label: 'Formulaire de contact', href: '/admin/collections/forms', icon: 'form', needs: { collection: 'forms' } },
      {
        label: 'Points à valider',
        href: '/admin/collections/validation-points',
        icon: 'check',
        needs: { collection: 'validation-points' },
      },
      { label: 'Mesure d’audience', href: '/admin/globals/analytics', icon: 'chart', needs: { global: 'analytics' } },
      { label: 'Entreprise (tout)', href: '/admin/globals/company', icon: 'building', needs: { global: 'company' } },
      { label: 'Comptes', href: '/admin/collections/users', icon: 'account', needs: { collection: 'users' } },
    ],
  },
]
