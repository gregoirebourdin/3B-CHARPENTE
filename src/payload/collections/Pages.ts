import type { CollectionConfig } from 'payload'

import { isTeam, publishedOrTeam } from '../access'
import { heroField, tldrField } from '../fields/hero'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { publishGuard } from '../hooks/publishGuards'
import { revalidateHooks } from '../hooks/revalidate'
import { computePagePath, preventRootCollision, routingHooks } from '../hooks/routing'
import { draftVersions, layoutField, previewAdmin } from './shared'

const routing = routingHooks('pages')

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  // Fields loaded when another document links here (cards, menus, breadcrumbs), not the whole page.
  defaultPopulate: { title: true, breadcrumbLabel: true, slug: true, path: true, parent: true },
  admin: {
    group: 'Contenu du site',
    useAsTitle: 'title',
    defaultColumns: ['title', 'path', '_status', 'updatedAt'],
    listSearchableFields: ['title', 'slug', 'path'],
    description:
      'Accueil, 3B Récup’, pages secteur, À propos, Contact, mentions légales… Cliquez sur une page pour la modifier.',
    ...previewAdmin('pages'),
  },
  access: {
    read: publishedOrTeam,
    create: isTeam,
    update: isTeam,
    delete: isTeam,
  },
  versions: draftVersions,
  defaultSort: 'path',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Nom de la page',
          required: true,
          maxLength: 90,
          admin: { width: '60%', description: 'Nom court, utilisé dans le fil d’Ariane et l’administration.' },
        },
        {
          name: 'breadcrumbLabel',
          type: 'text',
          label: 'Nom dans le fil d’Ariane (facultatif)',
          maxLength: 60,
          admin: { width: '40%' },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Haut de page',
          fields: [heroField, tldrField],
        },
        {
          label: 'Sections',
          fields: [layoutField],
        },
        seoTab,
      ],
    },
    slugField(),
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Page parente',
      admin: {
        position: 'sidebar',
        description: 'Ex. : « Diagnostic PEMD » a pour parente « 3B Récup’ ».',
      },
      filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
    },
    {
      name: 'path',
      type: 'text',
      label: 'Adresse complète',
      index: true,
      unique: true,
      admin: { position: 'sidebar', readOnly: true, description: 'Calculée automatiquement.' },
    },
  ],
  hooks: {
    beforeChange: [computePagePath, preventRootCollision('pages'), ...routing.beforeChange, publishGuard],
    afterChange: [...routing.afterChange, ...revalidateHooks.afterChange],
    afterDelete: revalidateHooks.afterDelete,
  },
}
