import type { CollectionConfig } from 'payload'

import { isTeam } from '../access'
import { revalidateHooks } from '../hooks/revalidate'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: { singular: 'Avis client', plural: 'Avis clients' },
  admin: {
    group: 'Contenus réutilisables',
    useAsTitle: 'author',
    defaultColumns: ['author', 'commune', 'rating', 'source', 'published'],
    description:
      'Uniquement de vrais avis (Google, Facebook…), recopiés à l’identique. La section « Avis » n’apparaît qu’à partir de 3 avis publiés.',
  },
  access: {
    read: ({ req }) => (req.user ? true : { published: { equals: true } }),
    create: isTeam,
    update: isTeam,
    delete: isTeam,
  },
  defaultSort: '-date',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'author', type: 'text', label: 'Nom ou initiales', required: true, maxLength: 60, admin: { width: '50%' } },
        { name: 'commune', type: 'text', label: 'Commune', maxLength: 60, admin: { width: '50%' } },
      ],
    },
    { name: 'text', type: 'textarea', label: 'Avis', required: true, maxLength: 1500, admin: { rows: 5 } },
    {
      type: 'row',
      fields: [
        { name: 'rating', type: 'number', label: 'Note (sur 5)', min: 1, max: 5, required: true, admin: { width: '25%' } },
        {
          name: 'source',
          type: 'select',
          label: 'Source',
          defaultValue: 'google',
          options: [
            { label: 'Google', value: 'google' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'PagesJaunes', value: 'pagesjaunes' },
            { label: 'Autre', value: 'other' },
          ],
          admin: { width: '25%' },
        },
        { name: 'date', type: 'date', label: 'Date de l’avis', required: true, admin: { width: '25%' } },
        { name: 'published', type: 'checkbox', label: 'Publié', defaultValue: false, admin: { width: '25%' } },
      ],
    },
  ],
  hooks: revalidateHooks,
}
