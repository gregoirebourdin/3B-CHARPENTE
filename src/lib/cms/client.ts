import 'server-only'

import config from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'

/** One Payload instance per request (the Local API: no HTTP round-trip). */
export const getPayloadClient = cache(async () => getPayload({ config }))

/** True when an editor is previewing drafts (live preview in the admin). */
export const isDraftMode = cache(async () => {
  try {
    return (await draftMode()).isEnabled
  } catch {
    // Outside a request (sitemap at build time…): published content only.
    return false
  }
})
