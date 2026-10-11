import type { Field, GroupField } from 'payload'

import { LINKABLE_COLLECTIONS } from '../utilities/routes'

type LinkOptions = {
  name?: string
  label?: string
  required?: boolean
  /** Hide the label input (e.g. cards that already have a title). */
  withLabel?: boolean
  description?: string
}

export const LINK_TYPES = [
  { label: 'Une page du site', value: 'internal' },
  { label: 'Le téléphone de l’entreprise', value: 'phone' },
  { label: 'L’e-mail de l’entreprise', value: 'email' },
  { label: 'Une adresse web externe', value: 'external' },
] as const

/**
 * A link that can never break: internal links point to a document (its URL
 * follows the document if the slug changes), phone and e-mail come from the
 * "Entreprise" settings so they are identical everywhere.
 */
export const linkField = ({
  name = 'link',
  label = 'Lien',
  required = false,
  withLabel = true,
  description,
}: LinkOptions = {}): GroupField => ({
  name,
  type: 'group',
  label,
  admin: { description, hideGutter: true },
  fields: [
    {
      type: 'row',
      fields: [
        ...(withLabel
          ? ([
              {
                name: 'label',
                type: 'text',
                label: 'Texte du bouton ou du lien',
                required,
                maxLength: 80,
                admin: {
                  width: '50%',
                  description: 'Astuce : écrivez {telephone} pour afficher le numéro de l’entreprise.',
                },
              },
            ] satisfies Field[])
          : []),
        {
          name: 'type',
          type: 'select',
          label: 'Le lien mène vers',
          defaultValue: 'internal',
          options: [...LINK_TYPES],
          admin: { width: withLabel ? '50%' : '100%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'reference',
          type: 'relationship',
          label: 'Page',
          relationTo: [...LINKABLE_COLLECTIONS],
          required,
          admin: {
            width: '70%',
            condition: (_, siblingData) => siblingData?.type === 'internal',
          },
          validate: (value: unknown, { siblingData }: { siblingData: Record<string, unknown> }) =>
            !required || siblingData?.type !== 'internal' || Boolean(value) || 'Choisissez une page.',
        },
        {
          name: 'anchor',
          type: 'text',
          label: 'Section (facultatif)',
          maxLength: 40,
          admin: {
            width: '30%',
            placeholder: 'ex. : realisations',
            condition: (_, siblingData) => siblingData?.type === 'internal',
          },
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
      label: 'Adresse web',
      admin: {
        placeholder: 'https://…',
        condition: (_, siblingData) => siblingData?.type === 'external',
      },
      validate: (value: unknown, { siblingData }: { siblingData: Record<string, unknown> }) => {
        if (siblingData?.type !== 'external') return true
        if (!value) return required ? 'Indiquez une adresse.' : true
        return /^https?:\/\/\S+$/.test(String(value)) || 'L’adresse doit commencer par https://'
      },
    },
  ],
})

/** Optional link: same as linkField but never required. */
export const optionalLink = (options: Omit<LinkOptions, 'required'> = {}) =>
  linkField({ ...options, required: false })
