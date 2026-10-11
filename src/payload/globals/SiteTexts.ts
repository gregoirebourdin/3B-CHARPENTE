import type { Field, GlobalConfig, Tab } from 'payload'

import { isTeam } from '../access'
import { revalidateGlobal } from '../hooks/revalidate'
import { SITE_TEXT_DEFAULTS } from './siteTextDefaults'

const LABELS: Record<string, string> = {
  general: 'Général',
  project: 'Page d’une réalisation',
  article: 'Page d’un guide',
  explorer: 'Filtres des réalisations',
  form: 'Formulaire',
  notFound: 'Page introuvable (404)',
}

const pretty = (key: string) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim()

/** One tab per template, one text field per sentence, pre-filled with the defaults. */
const tabs: Tab[] = Object.entries(SITE_TEXT_DEFAULTS).map(([group, values]) => ({
  name: group,
  label: LABELS[group] ?? group,
  fields: Object.entries(values as Record<string, string>).map(
    ([key, value]): Field =>
      ({
        name: key,
        type: value.length > 90 ? 'textarea' : 'text',
        label: pretty(key),
        defaultValue: value,
        admin: { description: `Par défaut : ${value}` },
      }) as Field,
  ),
}))

export const SiteTextsGlobal: GlobalConfig = {
  slug: 'site-texts',
  label: 'Textes du site',
  admin: {
    group: 'Réglages',
    description:
      'Les petites phrases des gabarits (fiche chantier, guide, filtres, formulaire, page 404). Entre ** : mots en vert. Mots remplacés automatiquement : {commune}, {n}, {prestation}, {secteur}, {telephone}, {date}, {auteur}.',
  },
  access: { read: () => true, update: isTeam },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [{ type: 'tabs', tabs }],
}
