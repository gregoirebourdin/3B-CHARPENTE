import type { Tab } from 'payload'

const FIELDS = '@/payload/admin/fields'

/**
 * "Référencement" tab shown on every public document: what Google shows,
 * with a live preview and a gauge on each length (title 50–60, meta
 * description 140–155, from the brief). Our own fields, same data as the
 * SEO plugin's (meta.title, meta.description, meta.image).
 */
export const seoTab: Tab = {
  label: 'Référencement',
  description: 'Ce que Google affiche dans ses résultats. La jauge passe au vert quand la longueur est idéale.',
  fields: [
    {
      name: 'meta',
      type: 'group',
      label: false,
      fields: [
        { name: 'preview', type: 'ui', admin: { components: { Field: `${FIELDS}/GooglePreview#GooglePreview` } } },
        {
          name: 'title',
          type: 'text',
          label: 'Titre pour Google',
          maxLength: 70,
          admin: {
            description: 'La ligne bleue dans les résultats. Le métier et le lieu d’abord, « | 3B Charpente » à la fin.',
            components: { Field: { path: `${FIELDS}/SeoLengthField#SeoLengthField`, clientProps: { ideal: [50, 60] } } },
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description pour Google',
          maxLength: 170,
          admin: {
            description: 'Les deux lignes sous le titre : ce que vous faites, où, et une invitation (« Devis gratuit », « Parlons-en »).',
            components: { Field: { path: `${FIELDS}/SeoLengthField#SeoLengthField`, clientProps: { ideal: [140, 155] } } },
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image de partage (réseaux sociaux)',
          admin: { description: 'Facultatif : sinon, la photo principale de la page est utilisée.' },
        },
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
