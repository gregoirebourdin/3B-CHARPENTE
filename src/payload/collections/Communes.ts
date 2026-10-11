import type { CollectionConfig } from 'payload'

import { anyone, isTeam } from '../access'
import { slugField } from '../fields/slug'
import { revalidateHooks } from '../hooks/revalidate'

export const Communes: CollectionConfig = {
  slug: 'communes',
  labels: { singular: 'Commune', plural: 'Communes' },
  admin: {
    group: 'Prestations et chantiers',
    useAsTitle: 'name',
    defaultColumns: ['name', 'sector', 'department', 'inAreaServed', 'showOnMap'],
    description:
      'Les communes de vos chantiers. Elles servent aux filtres de la page Réalisations, à la carte et à la zone desservie pour Google.',
  },
  access: { read: anyone, create: isTeam, update: isTeam, delete: isTeam },
  defaultSort: 'name',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nom', required: true, maxLength: 80, admin: { width: '50%' } },
        {
          name: 'department',
          type: 'text',
          label: 'Département',
          defaultValue: 'Hautes-Alpes',
          maxLength: 60,
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'area',
          type: 'select',
          label: 'Secteur (regroupement des filtres)',
          defaultValue: 'vallouise-ecrins',
          options: [
            { label: 'Briançon et Briançonnais', value: 'brianconnais' },
            { label: 'Serre Chevalier', value: 'serre-chevalier' },
            { label: 'Vallouise et Pays des Écrins', value: 'vallouise-ecrins' },
            { label: 'Hors Hautes-Alpes', value: 'hors-05' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'villages',
          type: 'text',
          label: 'Villages ou hameaux (facultatif)',
          maxLength: 120,
          admin: { width: '50%', description: 'Ex. : « Vallouise, Pelvoux ». Affichés entre parenthèses dans le filtre.' },
        },
      ],
    },
    {
      name: 'sector',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Page secteur',
      admin: { description: 'Ex. : « Charpentier à Briançon ». Laissez vide hors des Hautes-Alpes.' },
    },
    {
      type: 'row',
      fields: [
        { name: 'latitude', type: 'number', label: 'Latitude', admin: { width: '33%', step: 0.0001 } },
        { name: 'longitude', type: 'number', label: 'Longitude', admin: { width: '33%', step: 0.0001 } },
        {
          name: 'showOnMap',
          type: 'checkbox',
          label: 'Afficher sur la carte',
          defaultValue: true,
          admin: { width: '34%' },
        },
      ],
    },
    {
      name: 'inAreaServed',
      type: 'checkbox',
      label: 'Déclarer à Google comme zone desservie',
      defaultValue: true,
      admin: { description: 'Données structurées « areaServed ».' },
    },
    slugField('name'),
  ],
  hooks: revalidateHooks,
}
