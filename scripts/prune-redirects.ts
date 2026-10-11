/**
 * Removes the redirects that can never be served because their old address is
 * the live address of a published document.
 *
 *   pnpm payload run scripts/prune-redirects.ts
 */
import { getPayload } from 'payload'

import { pruneShadowedRedirects } from '../src/seed/importer/run'
import config from '../src/payload.config'

const payload = await getPayload({ config })
try {
  const removed = await pruneShadowedRedirects(payload)
  console.log(removed ? `${removed} redirection(s) retirée(s).` : 'Aucune redirection masquée.')
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
