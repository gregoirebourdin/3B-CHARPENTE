import type { GlobalConfig } from 'payload'

import { isAdmin, isTeam } from '../access'
import { linkField } from '../fields/link'
import { revalidateGlobal } from '../hooks/revalidate'
import { ICON_OPTIONS } from '../utilities/icons'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'En-tête et menu',
  admin: {
    group: 'Réglages',
    description: 'Les liens du menu principal et le bouton « Demander mon devis ».',
  },
  access: { read: () => true, update: isTeam },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'nav',
      type: 'array',
      label: 'Liens du menu',
      labels: { singular: 'Lien', plural: 'Liens' },
      maxRows: 8,
      admin: { description: 'Glissez pour changer l’ordre.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Texte', required: true, maxLength: 30, admin: { width: '35%' } },
            {
              name: 'kind',
              type: 'select',
              label: 'Type',
              defaultValue: 'link',
              options: [
                { label: 'Lien simple', value: 'link' },
                { label: 'Menu déroulant des prestations', value: 'services' },
              ],
              admin: { width: '35%' },
            },
            {
              name: 'highlight',
              type: 'checkbox',
              label: 'Mettre en avant (pastille verte)',
              defaultValue: false,
              admin: { width: '30%' },
            },
          ],
        },
        {
          ...linkField({ name: 'link', label: 'Destination', withLabel: false }),
          admin: { condition: (_: unknown, siblingData: Record<string, unknown>) => siblingData?.kind === 'link' },
        },
      ],
    },
    linkField({ name: 'cta', label: 'Bouton à droite', required: true }),
  ],
}

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Pied de page',
  admin: { group: 'Réglages', description: 'Signature et colonnes de liens. Les coordonnées viennent du réglage « Entreprise ».' },
  access: { read: () => true, update: isTeam },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'tagline',
      type: 'textarea',
      label: 'Signature',
      maxLength: 200,
      admin: { rows: 2 },
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Colonnes de liens',
      labels: { singular: 'Colonne', plural: 'Colonnes' },
      maxRows: 5,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'title', type: 'text', label: 'Titre', required: true, maxLength: 40, admin: { width: '50%' } },
            {
              name: 'source',
              type: 'select',
              label: 'Contenu',
              defaultValue: 'manual',
              options: [
                { label: 'Je choisis les liens', value: 'manual' },
                { label: 'Toutes les prestations (automatique)', value: 'services' },
                { label: 'Tous les guides (automatique)', value: 'articles' },
              ],
              admin: { width: '50%' },
            },
          ],
        },
        {
          name: 'links',
          type: 'array',
          label: 'Liens',
          labels: { singular: 'Lien', plural: 'Liens' },
          maxRows: 12,
          admin: { condition: (_, siblingData) => siblingData?.source === 'manual' },
          fields: [linkField({ name: 'link', label: 'Lien', required: true })],
        },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      label: 'Liens du bas de page',
      labels: { singular: 'Lien', plural: 'Liens' },
      maxRows: 5,
      fields: [linkField({ name: 'link', label: 'Lien', required: true })],
    },
  ],
}

export const Proofs: GlobalConfig = {
  slug: 'proofs',
  label: 'Bandeau de preuves',
  admin: {
    group: 'Réglages',
    description:
      'Les preuves rappelées sur chaque page de prestation : « Depuis 2007 · Formé chez les Compagnons du Devoir · … ». Uniquement des faits vérifiables.',
  },
  access: { read: () => true, update: isTeam },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Preuves',
      labels: { singular: 'Preuve', plural: 'Preuves' },
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Texte', required: true, maxLength: 50, admin: { width: '70%' } },
            { name: 'icon', type: 'select', label: 'Icône', options: ICON_OPTIONS, admin: { width: '30%' } },
          ],
        },
      ],
    },
  ],
}

export const SeoSettings: GlobalConfig = {
  slug: 'seo-settings',
  label: 'Référencement (réglages)',
  admin: { group: 'Réglages', description: 'Réglages par défaut. Le titre et la description de chaque page se règlent sur la page elle-même.' },
  access: { read: () => true, update: isTeam },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'titleTemplate',
      type: 'text',
      label: 'Modèle de titre',
      defaultValue: '%s | 3B Charpente',
      admin: { description: '%s est remplacé par le titre de la page (sauf s’il contient déjà « 3B Charpente »).' },
    },
    { name: 'defaultDescription', type: 'textarea', label: 'Description par défaut', maxLength: 160 },
    { name: 'defaultImage', type: 'upload', relationTo: 'media', label: 'Image de partage par défaut' },
    {
      name: 'areaServed',
      type: 'array',
      label: 'Zones desservies (en plus des communes)',
      labels: { singular: 'Zone', plural: 'Zones' },
      admin: { description: 'Départements et régions déclarés à Google.' },
      fields: [{ name: 'name', type: 'text', label: 'Nom', required: true }],
    },
    {
      name: 'knowsAbout',
      type: 'text',
      hasMany: true,
      label: 'Savoir-faire déclarés à Google (knowsAbout)',
    },
    {
      name: 'llmsIntro',
      type: 'textarea',
      label: 'Présentation pour les assistants IA (llms.txt)',
      maxLength: 1200,
      admin: { rows: 5, description: 'Quelques phrases factuelles. Le reste du fichier est généré automatiquement.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'googleVerification',
          type: 'text',
          label: 'Code de vérification Google Search Console',
          access: { update: ({ req }) => (req.user as { role?: string } | null)?.role === 'admin' },
          admin: { width: '50%' },
        },
        {
          name: 'bingVerification',
          type: 'text',
          label: 'Code de vérification Bing',
          access: { update: ({ req }) => (req.user as { role?: string } | null)?.role === 'admin' },
          admin: { width: '50%' },
        },
      ],
    },
  ],
}

export const Analytics: GlobalConfig = {
  slug: 'analytics',
  label: 'Mesure d’audience',
  admin: {
    group: 'Administration',
    description:
      'Outil de mesure sans cookie : aucun bandeau de consentement n’est nécessaire. Réservé aux administrateurs.',
  },
  access: { read: () => true, update: isAdmin },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'provider',
      type: 'select',
      label: 'Outil',
      defaultValue: 'vercel',
      options: [
        { label: 'Vercel Analytics (sans cookie)', value: 'vercel' },
        { label: 'Plausible (sans cookie)', value: 'plausible' },
        { label: 'Umami (sans cookie)', value: 'umami' },
        { label: 'Aucun', value: 'none' },
      ],
    },
    {
      name: 'plausibleDomain',
      type: 'text',
      label: 'Domaine déclaré dans Plausible',
      admin: { condition: (data) => data?.provider === 'plausible' },
    },
    {
      type: 'row',
      admin: { condition: (data) => data?.provider === 'umami' },
      fields: [
        { name: 'umamiWebsiteId', type: 'text', label: 'Identifiant du site Umami', admin: { width: '50%' } },
        {
          name: 'umamiScriptUrl',
          type: 'text',
          label: 'Adresse du script Umami',
          defaultValue: 'https://cloud.umami.is/script.js',
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
