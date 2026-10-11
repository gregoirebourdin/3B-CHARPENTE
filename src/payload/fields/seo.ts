import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import type { Tab } from 'payload'

/**
 * "Référencement" tab shown on every public document. Uses the official SEO
 * plugin fields (character counters, Google preview) with the lengths of the
 * brief: title 50–60, meta description 140–155.
 */
export const seoTab: Tab = {
  label: 'Référencement',
  description:
    'Ce que Google affiche dans ses résultats. Les compteurs passent au vert quand la longueur est idéale.',
  fields: [
    {
      name: 'meta',
      type: 'group',
      label: false,
      fields: [
        OverviewField({
          titlePath: 'meta.title',
          descriptionPath: 'meta.description',
          imagePath: 'meta.image',
          titleOverrides: { minLength: 50, maxLength: 60 },
          descriptionOverrides: { minLength: 140, maxLength: 155 },
        }),
        MetaTitleField({
          hasGenerateFn: false,
          overrides: { minLength: 50, maxLength: 60, label: 'Titre pour Google (balise title)' },
        }),
        MetaDescriptionField({
          hasGenerateFn: false,
          overrides: { minLength: 140, maxLength: 155, label: 'Description pour Google (meta description)' },
        }),
        MetaImageField({
          hasGenerateFn: false,
          relationTo: 'media',
          overrides: {
            label: 'Image de partage (réseaux sociaux)',
            admin: { description: 'Facultatif : sinon, la photo principale de la page est utilisée.' },
          },
        }),
        PreviewField({
          hasGenerateFn: false,
          titlePath: 'meta.title',
          descriptionPath: 'meta.description',
        }),
        {
          name: 'noindex',
          type: 'checkbox',
          label: 'Ne pas indexer cette page (Google ne l’affichera pas)',
          defaultValue: false,
        },
      ],
    },
  ],
}
