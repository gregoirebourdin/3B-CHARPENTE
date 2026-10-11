import type { CollectionConfig } from 'payload'

import { isTeam, publishedOrTeam } from '../access'
import { heroField, tldrField } from '../fields/hero'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { publishGuard } from '../hooks/publishGuards'
import { revalidateHooks } from '../hooks/revalidate'
import { preventRootCollision, routingHooks } from '../hooks/routing'
import { ICON_OPTIONS } from '../utilities/icons'
import { contentListComponents, draftVersions, layoutField, previewAdmin } from './shared'

const routing = routingHooks('services')

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Prestation', plural: 'Prestations' },
  // Fields loaded when another document links here (cards, menus, breadcrumbs), not the whole page.
  defaultPopulate: {
    title: true,
    menuLabel: true,
    order: true,
    slug: true,
    icon: true,
    cardTitle: true,
    shortLabel: true,
    filterKey: true,
    cardText: true,
    cardLinkLabel: true,
    image: true,
  },
  admin: {
    group: 'Prestations et chantiers',
    useAsTitle: 'title',
    defaultColumns: ['title', 'menuLabel', 'order', '_status', 'updatedAt'],
    description:
      'Les 9 prestations. Le menu « Prestations » et les cartes de l’accueil se construisent tout seuls à partir d’ici (dans l’ordre du champ « Ordre »).',
    ...previewAdmin('services'),
    components: contentListComponents,
  },
  access: {
    read: publishedOrTeam,
    create: isTeam,
    update: isTeam,
    delete: isTeam,
  },
  versions: draftVersions,
  defaultSort: 'order',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Nom de la prestation',
          required: true,
          maxLength: 80,
          admin: { width: '50%', description: 'Ex. : « Charpente bois traditionnelle ».' },
        },
        {
          name: 'menuLabel',
          type: 'text',
          label: 'Nom dans le menu',
          maxLength: 50,
          admin: { width: '30%', description: 'Facultatif.' },
        },
        {
          name: 'order',
          type: 'number',
          label: 'Ordre',
          defaultValue: 10,
          admin: { width: '20%', description: '1 = en premier.' },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Carte et menu',
          description: 'Comment la prestation apparaît sur l’accueil, dans le menu et dans les cartes « prestations liées ».',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  label: 'Icône',
                  required: true,
                  defaultValue: 'roof',
                  options: ICON_OPTIONS,
                  admin: { width: '30%' },
                },
                {
                  name: 'cardTitle',
                  type: 'text',
                  label: 'Titre de la carte (facultatif)',
                  maxLength: 90,
                  admin: { width: '70%', description: 'Laissez vide pour reprendre le nom de la prestation.' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'shortLabel',
                  type: 'text',
                  label: 'Nom court',
                  maxLength: 40,
                  admin: {
                    width: '50%',
                    description: 'Fil d’Ariane et filtres de la page Réalisations. Ex. : « Escaliers ».',
                  },
                },
                {
                  name: 'filterKey',
                  type: 'text',
                  label: 'Code du filtre',
                  maxLength: 40,
                  admin: {
                    width: '50%',
                    description: 'Adresse partageable du filtre : /realisations/#escaliers. Minuscules et tirets.',
                  },
                  validate: (value: unknown) =>
                    !value || /^[a-z0-9-]+$/.test(String(value)) || 'Minuscules, chiffres et tirets uniquement.',
                },
              ],
            },
            {
              name: 'cardText',
              type: 'textarea',
              label: 'Phrase courte pour les cartes',
              required: true,
              maxLength: 200,
              admin: { rows: 2, description: 'Une phrase, 25 mots maximum.' },
            },
            {
              name: 'cardLinkLabel',
              type: 'text',
              label: 'Texte du lien de la carte',
              maxLength: 50,
              defaultValue: 'En savoir plus',
              admin: { description: 'Ex. : « Voir la charpente bois ».' },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Photo principale',
              admin: { description: 'Sert d’image de partage et d’illustration de la prestation.' },
            },
            {
              name: 'schema',
              type: 'group',
              label: 'Pour Google (données structurées « Service »)',
              admin: { hideGutter: true },
              fields: [
                {
                  name: 'serviceType',
                  type: 'text',
                  label: 'Type de service',
                  maxLength: 80,
                  admin: { description: 'Ex. : « Charpente bois ». Facultatif.' },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description du service',
                  maxLength: 400,
                  admin: { rows: 3, description: 'Facultatif : sinon, le texte « En bref » est utilisé.' },
                },
              ],
            },
          ],
        },
        { label: 'Haut de page', fields: [heroField, tldrField] },
        { label: 'Sections', fields: [layoutField] },
        seoTab,
      ],
    },
    slugField(),
  ],
  hooks: {
    beforeChange: [preventRootCollision('services'), ...routing.beforeChange, publishGuard],
    afterChange: [...routing.afterChange, ...revalidateHooks.afterChange],
    afterDelete: revalidateHooks.afterDelete,
  },
}
