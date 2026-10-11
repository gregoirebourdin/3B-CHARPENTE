/**
 * Imports the whole initial content (pages, services, 23 projects, guides,
 * 168 photos, FAQ, settings, redirects, team, points to validate).
 * Idempotent: running it again updates instead of duplicating.
 *
 *   pnpm seed                       (uses .env.local)
 *   SEED_REFRESH_MEDIA=true pnpm seed   (re-uploads every photo)
 *
 * Accounts are created only if their password is given:
 *   SEED_ADMIN_PASSWORD (+ SEED_ADMIN_USERNAME, SEED_ADMIN_EMAIL), SEED_EDITOR_PASSWORD.
 *
 * SEED_IF_EMPTY=true (used by the Vercel build): imports only into an empty
 * database, so the first deployment arrives with its content and the next
 * ones never touch what the team has edited since.
 */
import { getPayload } from 'payload'

import config from '../src/payload.config'
import { runSeed } from '../src/seed/importer/run'

const payload = await getPayload({ config })
const started = Date.now()
try {
  if (process.env.SEED_IF_EMPTY === 'true') {
    const { totalDocs } = await payload.count({ collection: 'pages' })
    if (totalDocs > 0) {
      console.log(`Contenu déjà présent (${totalDocs} pages) : import ignoré.`)
      process.exit(0)
    }
    console.log('Base vide : import du contenu initial.')
  }
  await runSeed(payload, process.cwd(), {
    refreshMedia: process.env.SEED_REFRESH_MEDIA === 'true',
    adminUsername: process.env.SEED_ADMIN_USERNAME,
    adminPassword: process.env.SEED_ADMIN_PASSWORD,
    adminEmail: process.env.SEED_ADMIN_EMAIL,
    editorPassword: process.env.SEED_EDITOR_PASSWORD,
  })
  console.log(`Durée : ${Math.round((Date.now() - started) / 1000)} s`)
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
