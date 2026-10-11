import type { CollectionConfig } from 'payload'

import { anyone, isTeam } from '../access'
import { revalidateHooks } from '../hooks/revalidate'

export const Team: CollectionConfig = {
  slug: 'team',
  labels: { singular: 'Membre de l’équipe', plural: 'Équipe' },
  admin: {
    group: 'Contenus réutilisables',
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'visible', 'order'],
    description: 'La section « Équipe » n’affiche que les membres cochés « Visible sur le site ».',
  },
  access: { read: anyone, create: isTeam, update: isTeam, delete: isTeam },
  defaultSort: 'order',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nom', required: true, maxLength: 80, admin: { width: '50%' } },
        { name: 'role', type: 'text', label: 'Rôle', required: true, maxLength: 80, admin: { width: '50%' } },
      ],
    },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Photo (facultatif)' },
    { name: 'bio', type: 'textarea', label: 'Courte présentation', maxLength: 600, admin: { rows: 4 } },
    {
      type: 'row',
      fields: [
        { name: 'order', type: 'number', label: 'Ordre', defaultValue: 10, admin: { width: '50%' } },
        {
          name: 'visible',
          type: 'checkbox',
          label: 'Visible sur le site',
          defaultValue: false,
          admin: { width: '50%', description: 'À cocher seulement avec l’accord de la personne.' },
        },
      ],
    },
  ],
  hooks: revalidateHooks,
}
