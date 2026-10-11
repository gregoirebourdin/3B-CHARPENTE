import type { CollectionConfig } from 'payload'

import { anyone, isTeam } from '../access'
import { revalidateHooks } from '../hooks/revalidate'

export const FAQ_TOPICS = [
  { label: 'Général', value: 'general' },
  { label: 'Charpente et combles', value: 'charpente' },
  { label: 'Isolation', value: 'isolation' },
  { label: 'Ossature, extension', value: 'ossature' },
  { label: 'Escaliers', value: 'escaliers' },
  { label: 'Balcons, terrasses, abris', value: 'exterieur' },
  { label: '3B Récup’', value: 'recup' },
  { label: 'Secteurs', value: 'secteurs' },
  { label: 'Contact et devis', value: 'contact' },
  { label: 'Guides', value: 'guides' },
]

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  labels: { singular: 'Question fréquente', plural: 'Questions fréquentes' },
  admin: {
    group: 'Contenus réutilisables',
    useAsTitle: 'question',
    defaultColumns: ['question', 'topic', 'updatedAt'],
    listSearchableFields: ['question', 'answer'],
    description:
      'Une question peut s’afficher sur plusieurs pages : ajoutez-la dans une section « Questions fréquentes ». Les données pour Google suivent automatiquement.',
  },
  access: { read: anyone, create: isTeam, update: isTeam, delete: isTeam },
  fields: [
    {
      name: 'question',
      type: 'text',
      label: 'Question',
      required: true,
      maxLength: 200,
      admin: { description: 'Formulée comme les gens la tapent dans Google.' },
    },
    {
      name: 'answer',
      type: 'textarea',
      label: 'Réponse',
      required: true,
      maxLength: 900,
      admin: { rows: 5, description: '40 à 80 mots, une réponse directe dès la première phrase.' },
    },
    {
      name: 'topic',
      type: 'select',
      label: 'Thème',
      defaultValue: 'general',
      options: FAQ_TOPICS,
      admin: { position: 'sidebar', description: 'Pour retrouver la question facilement.' },
    },
  ],
  hooks: revalidateHooks,
}
