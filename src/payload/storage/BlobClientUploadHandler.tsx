'use client'

import { createClientUploadHandler } from '@payloadcms/plugin-cloud-storage/client'
import { uploadPresigned } from '@vercel/blob/client'
import { formatAdminURL } from 'payload/shared'

/** Admin side of clientUploadRoute: the photo goes from the browser straight to Vercel Blob. */
export const BlobClientUploadHandler = createClientUploadHandler({
  handler: async ({ apiRoute, collectionSlug, docPrefix, file, serverHandlerPath, serverURL, updateFilename }) => {
    const endpoint = formatAdminURL({ apiRoute, path: serverHandlerPath, serverURL })
    const issued = await fetch(`${endpoint}?issue-client-upload=1`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ collectionSlug, docPrefix, filename: file.name, mimeType: file.type }),
    })
    if (!issued.ok) throw new Error('Impossible de préparer l’envoi de la photo.')
    const { clientUploadContext, filename, pathname } = (await issued.json()) as {
      clientUploadContext: { prefix?: string; signedReceipt: string }
      filename: string
      pathname: string
    }
    updateFilename(filename)
    await uploadPresigned(pathname, file, {
      access: 'public',
      contentType: file.type,
      handleUploadUrl: endpoint,
      clientPayload: JSON.stringify({ collectionSlug, mimeType: file.type, signedReceipt: clientUploadContext.signedReceipt }),
    })
    return { prefix: clientUploadContext.prefix, signedReceipt: clientUploadContext.signedReceipt }
  },
})
