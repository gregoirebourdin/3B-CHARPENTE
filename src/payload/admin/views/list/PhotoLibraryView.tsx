import type { ListViewServerProps } from 'payload'

import { PhotoLibrary, type Photo } from './PhotoLibrary'

type MediaDoc = {
  id: number
  alt?: string | null
  caption?: string | null
  kind?: Photo['kind'] | null
  filename?: string | null
  url?: string | null
  width?: number | null
  height?: number | null
  sizes?: { thumbnail?: { url?: string | null } | null } | null
  updatedAt: string
}

/**
 * « Photos » (designs § 11): the photo library as a grid of pictures with
 * their description, instead of a table of file names.
 */
export async function PhotoLibraryView({ payload, user, hasCreatePermission, newDocumentURL }: ListViewServerProps) {
  let photos: Photo[] = []
  let failed = false
  try {
    const { docs } = await payload.find({
      collection: 'media',
      overrideAccess: false,
      user,
      depth: 0,
      limit: 2000,
      pagination: false,
      sort: '-createdAt',
      select: { alt: true, caption: true, kind: true, filename: true, url: true, width: true, height: true, sizes: { thumbnail: true }, updatedAt: true },
    })
    photos = (docs as unknown as MediaDoc[]).map((doc) => ({
      id: doc.id,
      alt: doc.alt ?? '',
      caption: doc.caption ?? '',
      kind: doc.kind ?? 'chantier',
      filename: doc.filename ?? '',
      thumbnail: doc.sizes?.thumbnail?.url || doc.url || null,
      full: doc.url || doc.sizes?.thumbnail?.url || null,
      width: doc.width ?? null,
      height: doc.height ?? null,
      updatedAt: doc.updatedAt,
    }))
  } catch (error) {
    payload.logger.error({ err: error, msg: '[admin] photothèque non chargée' })
    failed = true
  }
  return <PhotoLibrary photos={photos} failed={failed} createHref={hasCreatePermission ? newDocumentURL : null} />
}
