import type { CollectionBeforeChangeHook, CollectionBeforeOperationHook, CollectionConfig } from 'payload'

import { anyone, isTeam } from '../access'
import { revalidateHooks } from '../hooks/revalidate'
import { slugify } from '../utilities/routes'

/** "Escalier terminé.JPG" → "escalier-termine.jpg": clean, French, readable file names. */
const cleanFileName: CollectionBeforeOperationHook = ({ args, operation, req }) => {
  if ((operation === 'create' || operation === 'update') && req.file?.name) {
    const dot = req.file.name.lastIndexOf('.')
    const base = dot > 0 ? req.file.name.slice(0, dot) : req.file.name
    const ext = dot > 0 ? req.file.name.slice(dot + 1).toLowerCase() : 'jpg'
    req.file.name = `${slugify(base) || 'photo'}.${ext}`
  }
  return args
}

/** Tiny blurred preview (≈200 bytes) shown while the real photo loads. */
const generateBlurPlaceholder: CollectionBeforeChangeHook = async ({ data, req }) => {
  if (!req.file?.data) return data
  try {
    const sharp = (await import('sharp')).default
    const buffer = await sharp(req.file.data).resize(16, 16, { fit: 'inside' }).webp({ quality: 40 }).toBuffer()
    data.blurDataURL = `data:image/webp;base64,${buffer.toString('base64')}`
  } catch {
    // Not an image sharp can read: no placeholder, nothing else changes.
  }
  return data
}

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Photo', plural: 'Photos et médias' },
  admin: {
    group: 'Contenus réutilisables',
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'caption', 'kind', 'updatedAt'],
    listSearchableFields: ['alt', 'caption', 'filename'],
    description:
      'Toutes les photos du site. Pour remplacer une photo partout, ouvrez-la et déposez la nouvelle version : les pages qui l’utilisent suivent.',
  },
  access: { read: anyone, create: isTeam, update: isTeam, delete: isTeam },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/heic', 'image/svg+xml'],
    focalPoint: true,
    crop: true,
    // Keep a reasonable master: big enough for 1920 px screens, light in storage.
    resizeOptions: { width: 2400, withoutEnlargement: true },
    formatOptions: { format: 'webp', options: { quality: 82 } },
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        formatOptions: { format: 'webp', options: { quality: 72 } },
      },
      {
        // Open Graph / social sharing: always 1200 × 630, cropped around the focal point.
        name: 'og',
        width: 1200,
        height: 630,
        withoutEnlargement: false,
        formatOptions: { format: 'jpeg', options: { quality: 82, mozjpeg: true } },
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texte alternatif (obligatoire)',
      required: true,
      maxLength: 160,
      admin: {
        description:
          'Décrivez ce que montre la photo, comme à quelqu’un qui ne la voit pas : ouvrage, essence, commune. Ex. : « Escalier quart tournant en mélèze menant aux combles ».',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Légende',
      maxLength: 160,
      admin: { description: 'Affichée sous la photo dans les galeries.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'kind',
          type: 'select',
          label: 'Type de photo',
          defaultValue: 'chantier',
          options: [
            { label: 'Photo de chantier', value: 'chantier' },
            { label: 'Photo d’ambiance (pas un chantier de 3B)', value: 'ambiance' },
            { label: 'Portrait', value: 'portrait' },
            { label: 'Logo ou visuel', value: 'visuel' },
          ],
          admin: { width: '50%' },
        },
        { name: 'credit', type: 'text', label: 'Crédit photo', maxLength: 80, admin: { width: '50%' } },
      ],
    },
    {
      name: 'blurDataURL',
      type: 'text',
      admin: { hidden: true },
    },
  ],
  hooks: {
    beforeOperation: [cleanFileName],
    beforeChange: [generateBlurPlaceholder],
    ...revalidateHooks,
  },
}
