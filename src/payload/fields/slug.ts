import type { Field, FieldHook } from 'payload'

import { slugify } from '../utilities/routes'

const formatSlug =
  (fallbackField: string): FieldHook =>
  ({ value, data, operation }) => {
    if (typeof value === 'string' && value.trim()) return slugify(value)
    if (operation === 'create' && typeof data?.[fallbackField] === 'string') {
      return slugify(data[fallbackField] as string)
    }
    return value
  }

/**
 * URL identifier. Generated from the title on creation, editable afterwards.
 * Changing it on a published page automatically creates a 301 redirect
 * (see hooks/autoRedirect.ts).
 */
export const slugField = (fallbackField = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  label: 'Adresse (slug)',
  required: true,
  index: true,
  unique: true,
  maxLength: 100,
  hooks: {
    beforeValidate: [formatSlug(fallbackField)],
    // "Dupliquer" in the admin: keep the copy unique until the editor renames it.
    beforeDuplicate: [({ value }) => (value ? `${value}-copie-${Date.now().toString(36)}` : value)],
  },
  validate: (value: unknown) =>
    (typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) ||
    'Minuscules, chiffres et tirets uniquement (ex. : charpente-bois).',
  admin: {
    position: 'sidebar',
    description:
      'Fin de l’adresse de la page. Si vous la changez, l’ancienne adresse redirige automatiquement vers la nouvelle.',
  },
})
