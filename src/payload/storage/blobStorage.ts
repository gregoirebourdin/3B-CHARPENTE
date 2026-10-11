import path from 'node:path'

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { buildStoragePathData, getFilePrefix, initClientUploads } from '@payloadcms/plugin-cloud-storage/utilities'
import { del, put } from '@vercel/blob'
import type { Config, Plugin } from 'payload'

import { blobBaseUrl, blobEnabled } from './blobAuth'
import { clientUploadRoute } from './clientUploadRoute'

type Options = {
  collections: Record<string, { prefix?: string }>
  cacheControlMaxAge?: number
}

/** "medias/charpente 1.webp" → https://<store>.public.blob.vercel-storage.com/medias/charpente%201.webp */
const blobUrl = (storageFilePath: string) => {
  const dir = path.posix.dirname(storageFilePath)
  const file = encodeURIComponent(path.posix.basename(storageFilePath))
  return `${blobBaseUrl()}/${dir === '.' ? file : path.posix.join(dir, file)}`
}

const adapter =
  (cacheControlMaxAge: number): Adapter =>
  ({ collection, prefix = '' }) => ({
    name: 'vercel-blob-oidc',
    clientUploads: true,
    requiresClientUploadReceipt: true,
    generateURL: ({ filename, prefix: docPrefix = '' }) =>
      blobUrl(buildStoragePathData({ collectionPrefix: prefix, docPrefix, filename }).storageFilePath),
    handleUpload: async ({ data, file, storageFilePath }) => {
      await put(storageFilePath, file.buffer, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        cacheControlMaxAge,
        contentType: file.mimeType,
      })
      return data
    },
    handleDelete: async ({ storageFilePath }) => {
      await del(blobUrl(storageFilePath))
    },
    // Files are public on the Blob CDN: the API address simply points there.
    staticHandler: async (req, { doc, params: { clientUploadContext, filename } }) => {
      const docPrefix = await getFilePrefix({ clientUploadContext, collection, collectionPrefix: prefix, doc, filename, req })
      const target = blobUrl(buildStoragePathData({ collectionPrefix: prefix, docPrefix, filename }).storageFilePath)
      return Response.redirect(target, 307)
    },
  })

/**
 * Photos of the media library in Vercel Blob. Without Blob credentials (local
 * development), Payload keeps them on disk as usual.
 */
export const blobStorage =
  ({ collections, cacheControlMaxAge = 60 * 60 * 24 * 365 }: Options): Plugin =>
  (incoming: Config): Config => {
    const enabled = blobEnabled()
    initClientUploads({
      clientHandler: '@/payload/storage/BlobClientUploadHandler#BlobClientUploadHandler',
      collections,
      config: incoming,
      enabled,
      serverHandler: clientUploadRoute({ collections, cacheControlMaxAge }),
      serverHandlerPath: '/blob-client-upload',
    })
    if (!enabled) return incoming

    const withAdapter = Object.fromEntries(
      Object.entries(collections).map(([slug, options]) => [slug, { ...options, adapter: adapter(cacheControlMaxAge) }]),
    )
    const config: Config = {
      ...incoming,
      collections: (incoming.collections ?? []).map((collection) =>
        withAdapter[collection.slug]
          ? {
              ...collection,
              upload: { ...(typeof collection.upload === 'object' ? collection.upload : {}), disableLocalStorage: true },
            }
          : collection,
      ),
    }
    return cloudStoragePlugin({
      collections: Object.fromEntries(
        Object.entries(withAdapter).map(([slug, options]) => [slug, { ...options, disablePayloadAccessControl: true as const }]),
      ),
    })(config)
  }
