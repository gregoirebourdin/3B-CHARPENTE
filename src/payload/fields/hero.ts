import type { Field } from 'payload'

import { richTextField } from '../editor'
import { ICON_OPTIONS } from '../utilities/icons'
import { accentField } from './heading'
import { optionalLink } from './link'

/**
 * Top of every page and service. It carries the only H1 of the page, which
 * is why it is a fixed group and not a free block: a page can never be
 * published without its main title.
 */
export const heroField: Field = {
  name: 'hero',
  type: 'group',
  label: 'Haut de page (héros)',
  admin: { hideGutter: true },
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Mise en page',
      defaultValue: 'collage',
      options: [
        { label: 'Texte + collage de photos', value: 'collage' },
        { label: 'Texte + une photo', value: 'photo' },
        { label: 'Texte + carte du secteur (pages secteur)', value: 'map' },
        { label: 'Texte seul', value: 'simple' },
      ],
      admin: {
        description:
          'Changer de disposition ne fait rien perdre : textes et photos restent. « Carte du secteur » montre les communes rattachées à cette page et deux de leurs chantiers.',
      },
    },
    {
      name: 'tone',
      type: 'select',
      label: 'Fond du haut de page',
      defaultValue: 'cream',
      options: [
        { label: 'Crème, courbes de niveau (par défaut)', value: 'cream' },
        { label: 'Panneau vert forêt, cernes du bois (3B Récup’)', value: 'forest' },
      ],
    },
    {
      name: 'kicker',
      type: 'text',
      label: 'Surtitre',
      maxLength: 90,
      admin: { description: 'Petite ligne au-dessus du titre principal.' },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titre principal (H1)',
      required: true,
      maxLength: 110,
      admin: { description: 'Le titre le plus important de la page pour Google. Un seul par page.' },
    },
    accentField(),
    richTextField({
      name: 'text',
      label: 'Texte d’accroche',
      description: 'Deux ou trois phrases. Mettez en gras les mots importants.',
    }),
    optionalLink({ name: 'primaryCta', label: 'Bouton principal (plein)' }),
    optionalLink({ name: 'secondaryCta', label: 'Bouton secondaire (contour)' }),
    {
      name: 'proofs',
      type: 'array',
      label: 'Preuves (pastilles)',
      maxRows: 3,
      labels: { singular: 'Preuve', plural: 'Preuves' },
      admin: { description: 'Deux preuves courtes et vérifiables : « Depuis 2007 », « Qualifié RGE »…' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Preuve', required: true, maxLength: 40, admin: { width: '40%' } },
            { name: 'text', type: 'text', label: 'Précision (facultatif)', maxLength: 70, admin: { width: '35%' } },
            {
              name: 'icon',
              type: 'select',
              label: 'Icône',
              defaultValue: 'check',
              options: ICON_OPTIONS,
              admin: { width: '25%' },
            },
          ],
        },
      ],
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      maxRows: 3,
      label: 'Photos',
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'simple',
        description: 'Collage : 1 grande photo puis 2 vignettes. Utilisez de vraies photos de chantier.',
      },
    },
    {
      name: 'highlight',
      type: 'relationship',
      relationTo: 'projects',
      label: 'Chantier mis en avant (petite carte sur la photo)',
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'collage',
        description: 'Facultatif : une carte « Chantier · commune » posée sur la photo, qui mène au chantier.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Légende de la photo principale',
      maxLength: 160,
      admin: { condition: (_, siblingData) => siblingData?.variant !== 'simple' },
    },
    {
      name: 'photoTag',
      type: 'text',
      label: 'Étiquette sur la photo (facultatif)',
      maxLength: 40,
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'photo' || siblingData?.variant === 'collage',
        description: 'Courte : la commune ou l’ouvrage. Ex. : « L’Argentière-la-Bessée ».',
      },
    },
    {
      name: 'sheet',
      type: 'array',
      label: 'Fiche d’atelier posée sur la photo (facultatif)',
      labels: { singular: 'Ligne', plural: 'Lignes' },
      maxRows: 4,
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'photo',
        description: 'Trois lignes courtes et vérifiables, reprises du texte de la page. Ex. : « Essences » → « Mélèze et sapin des Hautes-Alpes ».',
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Intitulé', required: true, maxLength: 24, admin: { width: '35%' } },
            { name: 'value', type: 'text', label: 'Valeur', required: true, maxLength: 70, admin: { width: '65%' } },
          ],
        },
      ],
    },
    {
      name: 'backdrop',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo d’ambiance en fond (facultatif)',
      filterOptions: { kind: { equals: 'ambiance' } },
      admin: {
        description:
          'Uniquement une photo d’ambiance (la forêt), assombrie sous le texte : une ou deux fois sur tout le site. Les photos de chantier restent en cadre.',
      },
    },
  ],
}

/** "En bref": the 40–60 word self-contained answer that search engines and AI quote. */
export const tldrField: Field = {
  name: 'tldr',
  type: 'textarea',
  label: 'En bref',
  maxLength: 600,
  admin: {
    rows: 4,
    description:
      'Paragraphe de 40 à 60 mots, qui se suffit à lui-même : qui, quoi, où. C’est le texte que Google et les assistants IA reprennent.',
  },
}
