import type { CollectionConfig } from 'payload'

import { isTeam, publishedOrTeam } from '../access'
import { richTextField } from '../editor'
import { accentField } from '../fields/heading'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { publishGuard } from '../hooks/publishGuards'
import { revalidateHooks } from '../hooks/revalidate'
import { routingHooks } from '../hooks/routing'
import { contentListComponents, draftVersions, previewAdmin, publishedAtField } from './shared'

const routing = routingHooks('projects')

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Réalisation', plural: 'Réalisations' },
  // Fields loaded when another document links here (cards, menus, breadcrumbs), not the whole page.
  defaultPopulate: {
    title: true,
    titleAccent: true,
    shortTitle: true,
    slug: true,
    commune: true,
    services: true,
    locality: true,
    tags: true,
    heroImage: true,
    summary: true,
    gallery: true,
    featured: true,
    order: true,
    publishedAt: true,
  },
  admin: {
    group: 'Prestations et chantiers',
    useAsTitle: 'title',
    defaultColumns: ['title', 'commune', 'services', 'featured', '_status'],
    listSearchableFields: ['title', 'slug', 'shortTitle'],
    description:
      'Vos chantiers. Pour en ajouter un : bouton « Ajouter un chantier » (assistant en trois étapes).',
    ...previewAdmin('projects'),
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
      name: 'title',
      type: 'text',
      label: 'Titre du chantier (H1)',
      required: true,
      maxLength: 110,
      admin: { description: 'Sur le modèle « Ouvrage à Commune ». Ex. : « Surélévation en ossature bois à Briançon ».' },
      hooks: { beforeDuplicate: [({ value }) => (value ? `${value} (copie)` : value)] },
    },
    {
      type: 'row',
      fields: [
        accentField({ width: '50%', description: 'En général : la commune.' }),
        {
          name: 'shortTitle',
          type: 'text',
          label: 'Titre court',
          maxLength: 70,
          admin: { width: '50%', description: 'Pour le fil d’Ariane et les cartes. Ex. : « Ancienne forge réhabilitée ».' },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Le chantier',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'commune',
                  type: 'relationship',
                  relationTo: 'communes',
                  label: 'Commune',
                  admin: { width: '50%', description: 'Laissez vide si la commune ne doit pas être publiée.' },
                },
                {
                  name: 'services',
                  type: 'relationship',
                  relationTo: 'services',
                  hasMany: true,
                  required: true,
                  label: 'Prestations',
                  admin: { width: '50%', description: 'La première est la prestation principale.' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'locality',
                  type: 'text',
                  label: 'Lieu affiché (facultatif)',
                  maxLength: 60,
                  admin: {
                    width: '50%',
                    description: 'Village ou hameau, s’il diffère de la commune. Ex. : « Le Casset », « Prelles ».',
                  },
                },
                {
                  name: 'mainLink',
                  type: 'relationship',
                  relationTo: ['services', 'pages'],
                  label: 'Page « Voir la prestation » (facultatif)',
                  admin: { width: '50%', description: 'Sinon : la première prestation.' },
                },
              ],
            },
            {
              name: 'tags',
              type: 'text',
              hasMany: true,
              label: 'Étiquettes du haut de page',
              maxRows: 5,
              admin: { description: 'Ex. : Charpente, Escaliers, Mélèze. La commune est ajoutée automatiquement.' },
            },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Photo principale',
            },
            {
              name: 'summary',
              type: 'textarea',
              label: 'Résumé pour les cartes',
              required: true,
              maxLength: 220,
              admin: { rows: 2, description: 'Une phrase qui donne envie de voir le chantier.' },
            },
            richTextField({
              name: 'description',
              label: 'Le projet',
              required: true,
              description: '40 à 70 mots : ce qui a été fait, où, avec quels matériaux. Des phrases simples.',
            }),
            {
              name: 'facts',
              type: 'group',
              label: 'Fiche technique',
              admin: {
                description: 'Ne remplissez que ce qui est sûr : les lignes vides ne s’affichent pas.',
                hideGutter: true,
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'year', type: 'text', label: 'Année', maxLength: 20, admin: { width: '25%' } },
                    { name: 'duration', type: 'text', label: 'Durée', maxLength: 40, admin: { width: '25%' } },
                    { name: 'surface', type: 'text', label: 'Surface', maxLength: 40, admin: { width: '25%' } },
                    { name: 'architect', type: 'text', label: 'Architecte', maxLength: 80, admin: { width: '25%' } },
                  ],
                },
                { name: 'context', type: 'textarea', label: 'Contexte', maxLength: 300, admin: { rows: 2 } },
              ],
            },
          ],
        },
        {
          label: 'Étapes et matériaux',
          fields: [
            {
              name: 'steps',
              type: 'array',
              label: 'Ce que nous avons fait',
              labels: { singular: 'Étape', plural: 'Étapes' },
              maxRows: 15,
              admin: { description: 'Dans l’ordre du chantier.' },
              fields: [
                { name: 'title', type: 'text', label: 'Étape', required: true, maxLength: 90 },
                { name: 'text', type: 'textarea', label: 'Explication (facultatif)', maxLength: 300, admin: { rows: 2 } },
              ],
            },
            {
              name: 'materials',
              type: 'array',
              label: 'Matériaux',
              labels: { singular: 'Matériau', plural: 'Matériaux' },
              maxRows: 12,
              admin: { description: 'Seulement ce que montrent les photos ou le texte.' },
              fields: [{ name: 'text', type: 'text', label: 'Matériau', required: true, maxLength: 160 }],
            },
            {
              name: 'showRecupLink',
              type: 'checkbox',
              label: 'Chantier avec du bois de réemploi : afficher le lien vers 3B Récup’',
              defaultValue: false,
            },
          ],
        },
        {
          label: 'Photos',
          fields: [
            {
              name: 'gallery',
              type: 'array',
              label: 'Galerie',
              labels: { singular: 'Photo', plural: 'Photos' },
              maxRows: 40,
              admin: {
                description: 'Glissez-déposez pour changer l’ordre (ordre du chantier : avant, taille, levage, terminé).',
              },
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Photo' },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Légende (facultatif)',
                  maxLength: 160,
                  admin: { description: 'Laissez vide pour reprendre la légende de la photo.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Liens',
          fields: [
            {
              name: 'related',
              type: 'relationship',
              relationTo: 'projects',
              hasMany: true,
              maxRows: 3,
              label: 'Réalisations similaires',
              admin: { description: 'Facultatif : sinon, trois chantiers de la même prestation sont choisis automatiquement.' },
              filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
            },
          ],
        },
        seoTab,
      ],
    },
    slugField(),
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Mettre en avant',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Affichée en priorité sur l’accueil et les pages.' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre sur la page Réalisations',
      defaultValue: 100,
      admin: { position: 'sidebar', description: 'Plus petit = plus haut.' },
    },
    publishedAtField,
  ],
  hooks: {
    beforeChange: [...routing.beforeChange, publishGuard],
    afterChange: [...routing.afterChange, ...revalidateHooks.afterChange],
    afterDelete: revalidateHooks.afterDelete,
  },
}
