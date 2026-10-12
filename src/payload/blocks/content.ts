import type { Block } from 'payload'

import { richTextField } from '../editor'
import { linkField, optionalLink } from '../fields/link'
import { ICON_OPTIONS } from '../utilities/icons'
import { headingFields, tailFields, toneField } from './shared'

export const ManifestoBlock: Block = {
  slug: 'manifesto',
  interfaceName: 'ManifestoBlock',
  labels: { singular: 'Bandeau manifeste (fond sombre)', plural: 'Bandeaux manifeste' },
  imageAltText: 'Section plein cadre sur fond photo sombre, titre blanc et mots en vert sauge',
  fields: [
    ...headingFields({ intro: false }),
    {
      name: 'layout',
      type: 'select',
      label: 'Disposition',
      defaultValue: 'centered',
      options: [
        { label: 'Texte centré', value: 'centered' },
        { label: 'Texte à gauche, photo à droite', value: 'split' },
        { label: 'Trois colonnes de texte', value: 'columns' },
      ],
    },
    richTextField({ name: 'text', label: 'Texte' }),
    {
      name: 'items',
      type: 'array',
      label: 'Points ou colonnes (facultatif)',
      labels: { singular: 'Point', plural: 'Points' },
      maxRows: 6,
      fields: [
        { name: 'title', type: 'text', label: 'Titre (facultatif)', maxLength: 80 },
        { name: 'text', type: 'textarea', label: 'Texte', required: true, maxLength: 500 },
      ],
    },
    {
      name: 'quote',
      type: 'group',
      label: 'Citation (facultatif)',
      fields: [
        { name: 'text', type: 'textarea', label: 'Citation', maxLength: 400 },
        { name: 'author', type: 'text', label: 'Auteur', maxLength: 120 },
      ],
    },
    {
      name: 'emphasis',
      type: 'textarea',
      label: 'Phrase forte (en grand, facultatif)',
      maxLength: 200,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo de fond ou d’illustration',
      admin: { description: 'Assombrie automatiquement pour que le texte reste lisible.' },
    },
    optionalLink({ name: 'cta', label: 'Bouton (facultatif)' }),
    ...tailFields,
  ],
}

export const CardsBlock: Block = {
  slug: 'cards',
  interfaceName: 'CardsBlock',
  labels: { singular: 'Cartes', plural: 'Cartes' },
  fields: [
    ...headingFields(),
    {
      type: 'row',
      fields: [
        {
          name: 'variant',
          type: 'select',
          label: 'Style des cartes',
          defaultValue: 'icon',
          options: [
            { label: 'Icône dans une pastille', value: 'icon' },
            { label: 'Grande lettre (Bio, Bâti, Bois)', value: 'letter' },
            { label: 'Photo en haut', value: 'photo' },
            { label: 'Numérotées (01, 02…)', value: 'numbered' },
            { label: 'Index éditorial (lignes numérotées entre deux filets)', value: 'index' },
            { label: 'Texte seul', value: 'plain' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'columns',
          type: 'select',
          label: 'Cartes par ligne (ordinateur)',
          defaultValue: '3',
          options: [
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Cartes',
      labels: { singular: 'Carte', plural: 'Cartes' },
      minRows: 1,
      maxRows: 12,
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'title', type: 'text', label: 'Titre', required: true, maxLength: 100, admin: { width: '60%' } },
            {
              name: 'icon',
              type: 'select',
              label: 'Icône',
              options: ICON_OPTIONS,
              admin: { width: '20%' },
            },
            { name: 'letter', type: 'text', label: 'Lettre', maxLength: 3, admin: { width: '20%' } },
          ],
        },
        { name: 'eyebrow', type: 'text', label: 'Petite ligne (étymologie, étiquette…)', maxLength: 140 },
        richTextField({ name: 'text', label: 'Texte' }),
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Photo (facultatif)',
        },
        {
          name: 'muted',
          type: 'checkbox',
          label: 'Pastille grise (ex. : « Non réemployable »)',
          defaultValue: false,
        },
        optionalLink({ name: 'link', label: 'Lien (facultatif)' }),
      ],
    },
    {
      name: 'asideImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo à côté des cartes (facultatif)',
      admin: { description: 'Si renseignée : photo à gauche, cartes en liste à droite.' },
    },
    optionalLink({ name: 'cta', label: 'Bouton sous les cartes (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const TextImageBlock: Block = {
  slug: 'textImage',
  interfaceName: 'TextImageBlock',
  labels: { singular: 'Texte et image', plural: 'Textes et images' },
  fields: [
    ...headingFields({ intro: false }),
    richTextField({
      name: 'text',
      label: 'Texte',
      required: true,
      description: 'Deux ou trois phrases. Ce qui s’énumère va plutôt dans « Points clés », juste en dessous.',
    }),
    {
      name: 'points',
      type: 'array',
      label: 'Points clés (facultatif)',
      labels: { singular: 'Point', plural: 'Points' },
      maxRows: 6,
      admin: { description: 'Une ligne chacun, affichée avec une coche verte. Ex. : « Reprise des fermes ».' },
      fields: [{ name: 'text', type: 'text', label: 'Texte', required: true, maxLength: 140 }],
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      maxRows: 2,
      label: 'Photos (1 ou 2)',
      admin: { description: 'Deux photos : elles se placent côte à côte.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Position de la photo',
          defaultValue: 'right',
          options: [
            { label: 'À droite', value: 'right' },
            { label: 'À gauche', value: 'left' },
          ],
          admin: { width: '33%' },
        },
        { name: 'badge', type: 'text', label: 'Pastille sur la photo', maxLength: 30, admin: { width: '33%' } },
        { name: 'caption', type: 'text', label: 'Légende', maxLength: 160, admin: { width: '34%' } },
      ],
    },
    {
      name: 'twoColumns',
      type: 'checkbox',
      label: 'Sans photo : afficher le texte sur deux colonnes',
      defaultValue: false,
    },
    {
      name: 'links',
      type: 'array',
      label: 'Liens sous le texte',
      labels: { singular: 'Lien', plural: 'Liens' },
      maxRows: 4,
      fields: [linkField({ name: 'link', label: 'Lien', required: true })],
    },
    optionalLink({ name: 'cta', label: 'Bouton (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const ListBlock: Block = {
  slug: 'list',
  interfaceName: 'ListBlock',
  labels: { singular: 'Liste à puces ou à cocher', plural: 'Listes' },
  fields: [
    ...headingFields(),
    richTextField({ name: 'text', label: 'Texte avant la liste (facultatif)' }),
    {
      type: 'row',
      fields: [
        {
          name: 'style',
          type: 'select',
          label: 'Style de liste',
          defaultValue: 'checks',
          options: [
            { label: 'Coches vertes', value: 'checks' },
            { label: 'Puces', value: 'bullets' },
            { label: 'Numérotée', value: 'numbered' },
            { label: 'Pastilles', value: 'pills' },
            { label: 'Définitions (terme + explication)', value: 'definitions' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'inCard',
          type: 'checkbox',
          label: 'Dans une grande carte blanche',
          defaultValue: false,
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Éléments',
      labels: { singular: 'Élément', plural: 'Éléments' },
      minRows: 1,
      maxRows: 20,
      fields: [
        { name: 'title', type: 'text', label: 'Titre ou terme', maxLength: 140 },
        richTextField({ name: 'text', label: 'Texte' }),
        optionalLink({ name: 'link', label: 'Lien (facultatif)' }),
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo à côté (facultatif)',
    },
    { name: 'caption', type: 'text', label: 'Légende de la photo', maxLength: 160 },
    optionalLink({ name: 'cta', label: 'Bouton (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const StepsBlock: Block = {
  slug: 'steps',
  interfaceName: 'StepsBlock',
  labels: { singular: 'Étapes et méthode', plural: 'Étapes' },
  fields: [
    ...headingFields(),
    {
      type: 'row',
      fields: [
        {
          name: 'variant',
          type: 'select',
          label: 'Affichage',
          defaultValue: 'tabs',
          options: [
            { label: 'Étapes détaillées (texte et photos, toutes visibles)', value: 'tabs' },
            { label: 'Frise horizontale (étapes courtes)', value: 'timeline' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'isHowTo',
          type: 'checkbox',
          label: 'C’est une méthode (données « HowTo » pour Google)',
          defaultValue: false,
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Étapes',
      labels: { singular: 'Étape', plural: 'Étapes' },
      minRows: 2,
      maxRows: 10,
      admin: { initCollapsed: true },
      fields: [
        { name: 'title', type: 'text', label: 'Titre de l’étape', required: true, maxLength: 90 },
        richTextField({ name: 'text', label: 'Texte', required: true }),
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Photo (facultatif)' },
      ],
    },
    optionalLink({ name: 'cta', label: 'Bouton (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const ComparisonTableBlock: Block = {
  slug: 'comparisonTable',
  interfaceName: 'ComparisonTableBlock',
  labels: { singular: 'Tableau comparatif', plural: 'Tableaux comparatifs' },
  fields: [
    ...headingFields(),
    {
      name: 'columns',
      type: 'array',
      label: 'Colonnes (en-têtes)',
      labels: { singular: 'Colonne', plural: 'Colonnes' },
      minRows: 2,
      maxRows: 6,
      fields: [{ name: 'label', type: 'text', label: 'En-tête (peut rester vide)', maxLength: 60 }],
    },
    {
      name: 'rows',
      type: 'array',
      label: 'Lignes',
      labels: { singular: 'Ligne', plural: 'Lignes' },
      minRows: 1,
      maxRows: 20,
      admin: { description: 'Une cellule par colonne, dans le même ordre que les en-têtes.' },
      fields: [
        {
          name: 'cells',
          type: 'array',
          label: 'Cellules',
          labels: { singular: 'Cellule', plural: 'Cellules' },
          minRows: 1,
          maxRows: 6,
          fields: [{ name: 'text', type: 'text', label: 'Contenu', maxLength: 240 }],
        },
      ],
    },
    { name: 'note', type: 'textarea', label: 'Note sous le tableau (facultatif)', maxLength: 400 },
    toneField,
    ...tailFields,
  ],
}

export const QuoteBlock: Block = {
  slug: 'quote',
  interfaceName: 'QuoteBlock',
  labels: { singular: 'Citation', plural: 'Citations' },
  fields: [
    {
      name: 'lead',
      type: 'text',
      label: 'Phrase d’introduction (facultatif)',
      maxLength: 120,
      admin: { description: 'Petite ligne au-dessus de la citation. Ex. : « Ce qui compte pour lui ? »' },
    },
    { name: 'text', type: 'textarea', label: 'Citation', required: true, maxLength: 500 },
    {
      type: 'row',
      fields: [
        { name: 'author', type: 'text', label: 'Auteur', maxLength: 80, admin: { width: '50%' } },
        { name: 'role', type: 'text', label: 'Rôle', maxLength: 80, admin: { width: '50%' } },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Photo (facultatif)' },
    toneField,
    ...tailFields,
  ],
}

export const RichTextBlock: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  labels: { singular: 'Texte riche', plural: 'Textes riches' },
  fields: [
    richTextField({ name: 'content', label: 'Contenu', required: true, editor: 'article' }),
    {
      type: 'row',
      fields: [
        {
          name: 'showToc',
          type: 'checkbox',
          label: 'Afficher un sommaire (titres H2)',
          defaultValue: false,
          admin: { width: '50%' },
        },
        {
          name: 'boxed',
          type: 'checkbox',
          label: 'Encadré (fond clair, filet vert)',
          defaultValue: false,
          admin: { width: '50%' },
        },
      ],
    },
    toneField,
    ...tailFields,
  ],
}

export const CtaBlock: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  labels: { singular: 'Bandeau d’appel à l’action', plural: 'Bandeaux d’appel à l’action' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Style',
      defaultValue: 'band',
      options: [
        { label: 'Bandeau vert forêt (pleine largeur)', value: 'band' },
        { label: 'Carte vert forêt arrondie', value: 'card' },
        { label: 'Bandeau étroit sur fond clair', value: 'slim' },
      ],
    },
    { name: 'badge', type: 'text', label: 'Pastille (facultatif)', maxLength: 30 },
    ...headingFields({ intro: false }),
    richTextField({ name: 'text', label: 'Texte' }),
    optionalLink({ name: 'primary', label: 'Bouton principal' }),
    optionalLink({ name: 'secondary', label: 'Bouton secondaire' }),
    {
      type: 'row',
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icône (bandeau étroit)',
          options: ICON_OPTIONS,
          admin: { width: '50%' },
        },
        {
          name: 'showAddress',
          type: 'checkbox',
          label: 'Afficher l’adresse de l’entreprise sous les boutons',
          defaultValue: false,
          admin: { width: '50%' },
        },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Photo à droite (facultatif)' },
    ...tailFields,
  ],
}

export const SpotlightBlock: Block = {
  slug: 'spotlight',
  interfaceName: 'SpotlightBlock',
  labels: { singular: 'Bandeau mis en avant (3B Récup’)', plural: 'Bandeaux mis en avant' },
  fields: [
    { name: 'badge', type: 'text', label: 'Pastille', maxLength: 30, defaultValue: '3B Récup’' },
    ...headingFields({ intro: false }),
    richTextField({ name: 'text', label: 'Texte' }),
    {
      name: 'steps',
      type: 'array',
      label: 'Étapes courtes (01 à 05)',
      labels: { singular: 'Étape', plural: 'Étapes' },
      maxRows: 6,
      fields: [
        { name: 'title', type: 'text', label: 'Titre', required: true, maxLength: 60 },
        { name: 'text', type: 'textarea', label: 'Texte', required: true, maxLength: 300 },
      ],
    },
    optionalLink({ name: 'primary', label: 'Bouton' }),
    {
      name: 'links',
      type: 'array',
      label: 'Liens texte',
      labels: { singular: 'Lien', plural: 'Liens' },
      maxRows: 4,
      fields: [linkField({ name: 'link', label: 'Lien', required: true })],
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      maxRows: 3,
      label: 'Photos (1 grande + 2 vignettes)',
    },
    ...tailFields,
  ],
}

export const FiguresBlock: Block = {
  slug: 'figures',
  interfaceName: 'FiguresBlock',
  labels: { singular: 'Chiffres clés', plural: 'Chiffres clés' },
  imageAltText: 'Deux à quatre grands chiffres verts, chacun avec une ligne d’explication',
  fields: [
    ...headingFields(),
    {
      name: 'items',
      type: 'array',
      label: 'Chiffres',
      labels: { singular: 'Chiffre', plural: 'Chiffres' },
      minRows: 2,
      maxRows: 4,
      admin: { description: 'Uniquement des chiffres vérifiés : une année, une épaisseur, une durée.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'value', type: 'text', label: 'Chiffre', required: true, maxLength: 10, admin: { width: '50%', placeholder: '28' } },
            { name: 'unit', type: 'text', label: 'Unité (facultatif)', maxLength: 12, admin: { width: '50%', placeholder: 'cm' } },
          ],
        },
        { name: 'label', type: 'textarea', label: 'Ce que veut dire le chiffre', required: true, maxLength: 120 },
      ],
    },
    toneField,
    ...tailFields,
  ],
}

export const CalloutBlock: Block = {
  slug: 'callout',
  interfaceName: 'CalloutBlock',
  labels: { singular: 'Encadré (bon à savoir)', plural: 'Encadrés' },
  imageAltText: 'Un encadré vert pâle avec une icône, un titre court et deux phrases',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'kind',
          type: 'select',
          label: 'Type d’encadré',
          defaultValue: 'tip',
          options: [
            { label: 'Bon à savoir', value: 'tip' },
            { label: 'Sur nos chantiers', value: 'site' },
            { label: 'Définition', value: 'definition' },
            { label: 'Aides et qualification', value: 'aid' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titre (facultatif)',
          maxLength: 80,
          admin: { width: '50%', description: 'Vide : le nom du type (« Bon à savoir »…).' },
        },
      ],
    },
    richTextField({ name: 'text', label: 'Texte', required: true, description: 'Deux phrases au plus.' }),
    optionalLink({ name: 'link', label: 'Lien (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const ProsConsBlock: Block = {
  slug: 'prosCons',
  interfaceName: 'ProsConsBlock',
  labels: { singular: 'Points forts et points d’attention', plural: 'Points forts et points d’attention' },
  imageAltText: 'Deux colonnes : les points forts avec des coches vertes, les points d’attention avec des tirets',
  fields: [
    ...headingFields(),
    {
      type: 'row',
      fields: [
        { name: 'prosLabel', type: 'text', label: 'Titre de la 1re colonne', defaultValue: 'Points forts', maxLength: 40, admin: { width: '50%' } },
        { name: 'consLabel', type: 'text', label: 'Titre de la 2e colonne', defaultValue: 'Points d’attention', maxLength: 40, admin: { width: '50%' } },
      ],
    },
    {
      name: 'pros',
      type: 'array',
      label: 'Points forts',
      labels: { singular: 'Point', plural: 'Points' },
      minRows: 1,
      maxRows: 6,
      fields: [{ name: 'text', type: 'text', label: 'Texte', required: true, maxLength: 160 }],
    },
    {
      name: 'cons',
      type: 'array',
      label: 'Points d’attention',
      labels: { singular: 'Point', plural: 'Points' },
      maxRows: 6,
      fields: [{ name: 'text', type: 'text', label: 'Texte', required: true, maxLength: 160 }],
    },
    toneField,
    ...tailFields,
  ],
}
