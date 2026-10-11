import type { CollectionConfig, Field } from 'payload'

import { PAGE_BLOCKS } from '../blocks'
import { pathFor, type LinkableCollection } from '../utilities/routes'

/** Drafts, autosave (for the live preview) and 30 versions to roll back to. */
export const draftVersions: CollectionConfig['versions'] = {
  drafts: { autosave: { interval: 1500 } },
  maxPerDoc: 30,
}

/** Live preview + "Aperçu" button, both served by /site-api/preview (signed-in users only). */
export const previewAdmin = (collection: LinkableCollection): Partial<NonNullable<CollectionConfig['admin']>> => {
  const previewUrl = (data: Record<string, unknown> | null | undefined) => {
    const path = pathFor(collection, data as never) ?? '/'
    return `/site-api/preview?path=${encodeURIComponent(path)}`
  }
  return {
    livePreview: { url: ({ data }) => previewUrl(data) },
    preview: (doc) => previewUrl(doc),
  }
}

export const layoutField: Field = {
  name: 'layout',
  type: 'blocks',
  label: 'Sections de la page',
  labels: { singular: 'Section', plural: 'Sections' },
  blocks: PAGE_BLOCKS,
  admin: {
    initCollapsed: true,
    description:
      'Ajoutez, déplacez ou supprimez des sections. Chaque section a déjà son design : vous ne remplissez que les textes et les photos.',
  },
}

export const publishedAtField: Field = {
  name: 'publishedAt',
  type: 'date',
  label: 'Date de publication',
  admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
  hooks: {
    beforeChange: [
      ({ siblingData, value }) => {
        if (siblingData._status === 'published' && !value) return new Date().toISOString()
        return value
      },
    ],
  },
}
