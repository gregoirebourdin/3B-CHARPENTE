/**
 * The administration's navigation, in plain words (designs: « Administration »,
 * § 3). Five things on screen; everything else waits, folded, in « Plus
 * d'options ». Each link names the collection or global it needs, so it is
 * hidden from accounts that cannot open it.
 */
export type NavIcon = 'home' | 'inbox' | 'site' | 'image' | 'settings' | 'more'

type Needs = { collection?: string; global?: string }

export type NavSubLink = {
  label: string
  href: string
  /** Second line under the label (« Titres Google, redirections »). */
  hint?: string
  needs?: Needs
  /** Deeper paths that also make this link current (lists, documents, wizards). */
  match?: string[]
}

export type NavLink = NavSubLink & { kind: 'link'; icon: NavIcon; badge?: 'requests' }

export type NavGroup = { kind: 'group'; id: string; label: string; icon: NavIcon; defaultOpen: boolean; links: NavSubLink[] }

export type NavEntry = NavLink | NavGroup

export const NAV: NavEntry[] = [
  { kind: 'link', label: 'Accueil', href: '/admin', icon: 'home' },
  {
    kind: 'link',
    label: 'Demandes',
    href: '/admin/demandes',
    icon: 'inbox',
    badge: 'requests',
    needs: { collection: 'form-submissions' },
    match: ['/admin/collections/form-submissions'],
  },
  {
    kind: 'group',
    id: 'site',
    label: 'Mon site',
    icon: 'site',
    defaultOpen: true,
    links: [
      { label: 'Pages', href: '/admin/collections/pages', needs: { collection: 'pages' } },
      { label: 'Prestations', href: '/admin/collections/services', needs: { collection: 'services' } },
      {
        label: 'Chantiers',
        href: '/admin/collections/projects',
        needs: { collection: 'projects' },
        match: ['/admin/nouveau-chantier'],
      },
      { label: 'Conseils', href: '/admin/collections/articles', needs: { collection: 'articles' } },
    ],
  },
  { kind: 'link', label: 'Photos', href: '/admin/collections/media', icon: 'image', needs: { collection: 'media' } },
  {
    kind: 'group',
    id: 'settings',
    label: 'Réglages',
    icon: 'settings',
    defaultOpen: true,
    links: [
      {
        label: 'Coordonnées et horaires',
        href: '/admin/horaires',
        needs: { global: 'company' },
      },
      { label: 'Menu du site', href: '/admin/globals/header', needs: { global: 'header' } },
      { label: 'Pied de page', href: '/admin/globals/footer', needs: { global: 'footer' } },
      { label: 'Textes du site', href: '/admin/globals/site-texts', needs: { global: 'site-texts' } },
      {
        label: 'Référencement',
        hint: 'Titres Google, redirections',
        href: '/admin/globals/seo-settings',
        needs: { global: 'seo-settings' },
        match: ['/admin/collections/redirects'],
      },
    ],
  },
  {
    kind: 'group',
    id: 'more',
    label: 'Plus d’options',
    icon: 'more',
    defaultOpen: false,
    links: [
      { label: 'Questions fréquentes', href: '/admin/collections/faqs', needs: { collection: 'faqs' } },
      { label: 'Communes', href: '/admin/collections/communes', needs: { collection: 'communes' } },
      { label: 'Équipe', href: '/admin/collections/team', needs: { collection: 'team' } },
      { label: 'Avis clients', href: '/admin/collections/reviews', needs: { collection: 'reviews' } },
      { label: 'Preuves et labels', href: '/admin/globals/proofs', needs: { global: 'proofs' } },
      {
        label: 'Points à valider',
        href: '/admin/collections/validation-points',
        needs: { collection: 'validation-points' },
      },
      { label: 'Formulaire de contact', href: '/admin/collections/forms', needs: { collection: 'forms' } },
      { label: 'Mesure d’audience', href: '/admin/globals/analytics', needs: { global: 'analytics' } },
      { label: 'Entreprise (tous les détails)', href: '/admin/globals/company', needs: { global: 'company' } },
      { label: 'Comptes', href: '/admin/collections/users', needs: { collection: 'users' } },
    ],
  },
]

/** Is this link the current page (or its parent)? */
export function isCurrent(pathname: string, link: NavSubLink) {
  if (link.href === '/admin') return pathname === '/admin' || pathname === '/admin/'
  return [link.href, ...(link.match ?? [])].some((href) => pathname === href || pathname.startsWith(`${href}/`))
}
