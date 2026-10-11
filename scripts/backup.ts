/**
 * Local backup: writes the whole content as plain JSON in backups/ (ignored by git).
 *
 *   pnpm backup                     (database from .env.local)
 */
import fs from 'node:fs'
import path from 'node:path'

import { getPayload } from 'payload'

import { exportContent } from '../src/lib/backup'
import config from '../src/payload.config'

const payload = await getPayload({ config })
try {
  const backup = await exportContent(payload)
  const dir = path.join(process.cwd(), 'backups')
  fs.mkdirSync(dir, { recursive: true, mode: 0o700 })
  const file = path.join(dir, `contenu-${backup.createdAt.replace(/[:.]/g, '-')}.json`)
  fs.writeFileSync(file, JSON.stringify(backup, null, 2), { mode: 0o600 })
  const total = Object.values(backup.collections).reduce((sum, docs) => sum + docs.length, 0)
  console.log(`✓ ${total} documents et ${Object.keys(backup.globals).length} réglages → ${path.relative(process.cwd(), file)}`)
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
