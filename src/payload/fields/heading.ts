import type { Field, TextField } from 'payload'

type HeadingOptions = {
  /** Show the short intro paragraph under the title. */
  intro?: boolean
  /** Make the title mandatory (sections that make no sense without it). */
  requireTitle?: boolean
}

/**
 * Kicker + title + "words in green" + intro, shared by every section block.
 * The title is a plain string: the design decides its size and level (H2),
 * the editor only decides which words are highlighted.
 */
export const sectionHeadingFields = ({ intro = true, requireTitle = false }: HeadingOptions = {}): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'kicker',
        type: 'text',
        label: 'Surtitre',
        maxLength: 80,
        admin: {
          width: '35%',
          description: 'Petite ligne au-dessus du titre (facultatif). Ex. : « Nos prestations ».',
        },
      },
      {
        name: 'title',
        type: 'text',
        label: 'Titre de la section',
        required: requireTitle,
        maxLength: 140,
        admin: { width: '65%' },
      },
    ],
  },
  accentField(),
  ...(intro
    ? ([
        {
          name: 'intro',
          type: 'textarea',
          label: "Texte d'introduction",
          maxLength: 400,
          admin: { rows: 2, description: 'Une ou deux phrases sous le titre (facultatif).' },
        },
      ] satisfies Field[])
    : []),
]

export const accentField = (options: { name?: string; width?: string; description?: string } = {}): TextField => ({
  name: options.name ?? 'titleAccent',
  type: 'text',
  label: 'Mots en vert',
  maxLength: 140,
  admin: {
    width: options.width,
    description:
      options.description ??
      'Recopiez les mots du titre à afficher en vert. Plusieurs groupes : séparez-les par une virgule. Ex. : « simplement, durablement ».',
  },
})

/** Optional HTML anchor so a section can be targeted by a link (#realisations). */
export const anchorField: Field = {
  name: 'anchor',
  type: 'text',
  label: 'Ancre (facultatif)',
  maxLength: 40,
  validate: (value: unknown) =>
    !value || /^[a-z0-9-]+$/.test(String(value)) || 'Minuscules, chiffres et tirets uniquement (ex. : realisations).',
  admin: {
    description: 'Permet de faire un lien direct vers cette section : /page/#ancre.',
  },
}
