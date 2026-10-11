import { resolveSignedURLKey, verifyClientUploadReceiptForFileKey } from '@payloadcms/plugin-cloud-storage/utilities'
import { handleUploadPresigned, type HandleUploadPresignedBody } from '@vercel/blob/client'
import { issueSignedToken } from '@vercel/blob'
import { APIError, Forbidden, type CollectionSlug, type PayloadHandler } from 'payload'
import { assertClientUploadAccess, assertClientUploadAllowed } from 'payload/internal'

type Options = { collections: Record<string, { prefix?: string }>; cacheControlMaxAge: number }

/**
 * Lets the admin send a photo straight from the browser to Vercel Blob
 * (no 4.5 MB request limit, no server bandwidth): the server only checks the
 * editor's rights and issues a short-lived, single-file signed address.
 */
export const clientUploadRoute =
  ({ collections, cacheControlMaxAge }: Options): PayloadHandler =>
  async (req) => {
    if (!req.user) throw new Forbidden()
    const prefixOf = (slug: string) => collections[slug]?.prefix ?? ''

    // Step 1: reserve a file name and get a signed receipt for it.
    if (req.searchParams.get('issue-client-upload') === '1') {
      const { collectionSlug, docPrefix, filename, mimeType } = (await req.json!()) as Record<string, unknown>
      if (
        typeof collectionSlug !== 'string' ||
        typeof filename !== 'string' ||
        typeof mimeType !== 'string' ||
        (docPrefix !== undefined && typeof docPrefix !== 'string') ||
        !Object.hasOwn(collections, collectionSlug)
      ) {
        throw new APIError('Envoi refusé.', 400)
      }
      await assertClientUploadAccess({ collectionSlug, req })
      assertClientUploadAllowed({ collection: req.payload.collections[collectionSlug as CollectionSlug]?.config, filename, mimeType })
      const resolved = await resolveSignedURLKey({
        collectionPrefix: prefixOf(collectionSlug),
        collectionSlug,
        docPrefix: docPrefix as string | undefined,
        filename,
        req,
      })
      return Response.json({
        clientUploadContext: resolved.clientUploadContext,
        filename: resolved.sanitizedFilename,
        pathname: resolved.storageFilePath,
      })
    }

    // Step 2: the Blob SDK asks for a signed upload address for that name.
    const body = (await req.json!()) as HandleUploadPresignedBody
    const result = await handleUploadPresigned({
      body,
      request: req as unknown as Request,
      getSignedToken: async (pathname, clientPayload) => {
        const parsed = JSON.parse(clientPayload ?? '{}') as { collectionSlug?: string; mimeType?: string; signedReceipt?: string }
        const { collectionSlug, mimeType, signedReceipt } = parsed
        if (!collectionSlug || !Object.hasOwn(collections, collectionSlug) || typeof signedReceipt !== 'string') {
          throw new APIError('Envoi refusé.', 400)
        }
        await assertClientUploadAccess({ collectionSlug, req })
        verifyClientUploadReceiptForFileKey({
          collectionPrefix: prefixOf(collectionSlug),
          collectionSlug,
          expectedFileKey: pathname,
          req,
          signedReceipt,
        })
        assertClientUploadAllowed({
          collection: req.payload.collections[collectionSlug as CollectionSlug]?.config,
          filename: pathname,
          mimeType,
        })
        const token = await issueSignedToken({
          pathname,
          operations: ['put'],
          validUntil: Date.now() + 10 * 60 * 1000,
          ...(mimeType ? { allowedContentTypes: [mimeType] } : {}),
        })
        return { token, urlOptions: { addRandomSuffix: false, cacheControlMaxAge } }
      },
    })
    return Response.json(result)
  }

