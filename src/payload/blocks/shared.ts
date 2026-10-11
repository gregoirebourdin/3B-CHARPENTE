import type { Field } from 'payload'

import { anchorField, sectionHeadingFields } from '../fields/heading'

/**
 * Fields every section block starts with (kicker, title, words in green,
 * intro) and ends with (anchor). Keeping them identical everywhere makes the
 * admin predictable for editors and lets the front-end share one component.
 */
export const headingFields = (options?: Parameters<typeof sectionHeadingFields>[0]): Field[] =>
  sectionHeadingFields(options)

export const tailFields: Field[] = [anchorField]

/** Background preset. A design-system variant, not a free colour. */
export const toneField: Field = {
  name: 'tone',
  type: 'select',
  label: 'Fond de la section',
  defaultValue: 'cream',
  options: [
    { label: 'Crème (par défaut)', value: 'cream' },
    { label: 'Clair (gris-vert très pâle)', value: 'light' },
  ],
  admin: { description: 'Alternez les fonds pour rythmer la page.' },
}
