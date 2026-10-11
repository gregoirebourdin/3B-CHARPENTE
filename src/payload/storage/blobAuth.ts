/**
 * Vercel Blob credentials. New stores authenticate with OIDC (VERCEL_OIDC_TOKEN
 * on Vercel + BLOB_STORE_ID, no secret to keep); older ones with
 * BLOB_READ_WRITE_TOKEN. The SDK picks whichever is present.
 */
export const blobStoreId = (): string | null => {
  const id = process.env.BLOB_STORE_ID?.trim()
  if (id) return id.replace(/^store_/, '').toLowerCase()
  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim()
  return token?.match(/^vercel_blob_rw_([a-z\d]+)_[a-z\d]+$/i)?.[1]?.toLowerCase() ?? null
}

/** True when photos and attachments can go to Vercel Blob. */
export const blobEnabled = (): boolean => Boolean(blobStoreId())

/** Public address of a stored file. */
export const blobBaseUrl = (): string =>
  process.env.STORAGE_VERCEL_BLOB_BASE_URL || `https://${blobStoreId()}.public.blob.vercel-storage.com`
