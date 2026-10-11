import type { CollectionConfig } from 'payload'

import { isTeam } from '../access'

export const ValidationPoints: CollectionConfig = {
  slug: 'validation-points',
  labels: { singular: 'Point à valider', plural: 'Points à valider' },
  admin: {
    group: 'Suivi',
    useAsTitle: 'question',
    defaultColumns: ['question', 'page', 'status', 'updatedAt'],
    listSearchableFields: ['question', 'page', 'decision'],
    description:
      'Les questions restées ouvertes pendant la création du site, avec la décision prudente appliquée. Quand vous avez la réponse, corrigez le contenu puis passez le statut à « Réglé ».',
  },
  access: { read: isTeam, create: isTeam, update: isTeam, delete: isTeam },
  defaultSort: 'status',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'page', type: 'text', label: 'Page concernée', required: true, maxLength: 120, admin: { width: '50%' } },
        {
          name: 'status',
          type: 'select',
          label: 'Statut',
          required: true,
          defaultValue: 'open',
          options: [
            { label: 'À valider', value: 'open' },
            { label: 'Réglé', value: 'done' },
            { label: 'Sans objet', value: 'dropped' },
          ],
          admin: { width: '25%' },
        },
        {
          name: 'priority',
          type: 'select',
          label: 'Importance',
          defaultValue: 'normal',
          options: [
            { label: 'Haute', value: 'high' },
            { label: 'Normale', value: 'normal' },
            { label: 'Basse', value: 'low' },
          ],
          admin: { width: '25%' },
        },
      ],
    },
    { name: 'question', type: 'textarea', label: 'Question', required: true, maxLength: 1000, admin: { rows: 2 } },
    {
      name: 'decision',
      type: 'textarea',
      label: 'Décision appliquée en attendant',
      required: true,
      maxLength: 1000,
      admin: { rows: 2 },
    },
    { name: 'answer', type: 'textarea', label: 'Réponse de Jean / notes', maxLength: 2000, admin: { rows: 3 } },
  ],
}
