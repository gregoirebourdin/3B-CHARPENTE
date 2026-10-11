import type { CollectionConfig } from 'payload'

import { isTeam, publishedOrTeam } from '../access'
import { accentField } from '../fields/heading'
import { tldrField } from '../fields/hero'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { publishGuard } from '../hooks/publishGuards'
import { revalidateHooks } from '../hooks/revalidate'
import { routingHooks } from '../hooks/routing'
import { draftVersions, layoutField, previewAdmin, publishedAtField } from './shared'

const routing = routingHooks('articles')

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: { singular: 'Guide conseil', plural: 'Conseils (guides)' },
  admin: {
    group: 'Contenu du site',
    useAsTitle: 'title',
    defaultColumns: ['title', 'topic', 'publishedAt', '_status'],
    description: 'Les guides pratiques, listés sur la page /conseils/.',
    ...previewAdmin('articles'),
  },
  access: {
    read: publishedOrTeam,
    create: isTeam,
    update: isTeam,
    delete: isTeam,
  },
  versions: draftVersions,
  defaultSort: '-publishedAt',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titre du guide (H1)',
      required: true,
      maxLength: 120,
    },
    {
      type: 'row',
      fields: [
        accentField({ width: '60%' }),
        {
          name: 'topic',
          type: 'text',
          label: 'Thème (étiquette)',
          maxLength: 30,
          admin: { width: '40%', description: 'Ex. : Isolation, Réemploi.' },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Introduction',
          fields: [
            {
              name: 'excerpt',
              type: 'textarea',
              label: 'Chapô',
              required: true,
              maxLength: 500,
              admin: { rows: 3, description: 'Les 2 ou 3 phrases sous le titre. Aussi utilisées sur la carte du guide.' },
            },
            {
              name: 'cardSummary',
              type: 'textarea',
              label: 'Résumé court pour la carte (facultatif)',
              maxLength: 220,
              admin: { rows: 2 },
            },
            { name: 'image', type: 'upload', relationTo: 'media', label: 'Photo principale' },
            tldrField,
            {
              name: 'author',
              type: 'text',
              label: 'Signature',
              defaultValue: 'L’équipe de 3B Charpente',
              maxLength: 80,
            },
          ],
        },
        { label: 'Contenu', fields: [layoutField] },
        seoTab,
      ],
    },
    slugField(),
    publishedAtField,
  ],
  hooks: {
    beforeChange: [...routing.beforeChange, publishGuard],
    afterChange: [...routing.afterChange, ...revalidateHooks.afterChange],
    afterDelete: revalidateHooks.afterDelete,
  },
}
