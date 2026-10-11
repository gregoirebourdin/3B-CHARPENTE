/**
 * Writes the control files from the database (kit, deliverable 4):
 *   docs/a-valider.md      the open points, page by page, with the decision applied
 *   docs/redirections.csv  the redirect table (old address, new address, code)
 *
 *   pnpm export:docs
 */
import fs from 'node:fs'
import path from 'node:path'

import { getPayload } from 'payload'

import config from '../src/payload.config'
import { pathFor } from '../src/payload/utilities/routes'

type Point = { page: string; question: string; decision: string; priority?: string | null; status: string }
type Ref = { relationTo: 'pages' | 'services' | 'projects' | 'articles'; value: Record<string, unknown> }
type Redirect = { from: string; type?: string | null; to: { type: string; url?: string | null; reference?: Ref | null } }

const payload = await getPayload({ config })
try {
  const docs = path.join(process.cwd(), 'docs')
  fs.mkdirSync(docs, { recursive: true })

  // ---------- Points à valider ----------
  const points = (await payload.find({ collection: 'validation-points', limit: 5000, pagination: false, depth: 0, sort: 'page' })).docs as unknown as Point[]
  const open = points.filter((point) => point.status === 'open')
  const byPage = new Map<string, Point[]>()
  for (const point of open) byPage.set(point.page, [...(byPage.get(point.page) ?? []), point])
  const order: Record<string, number> = { high: 0, normal: 1, low: 2 }
  const high = open.filter((point) => point.priority === 'high')
  const lines = [
    '# Points à valider avec Jean-Michel',
    '',
    `Export du ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} : **${open.length} points ouverts**, dont **${high.length} importants**, sur ${byPage.size} pages.`,
    '',
    'Chaque point est une information que le kit n’a pas pu confirmer. Le site est en ligne avec la **décision prudente** indiquée (rien n’est inventé : en cas de doute, l’information est omise ou formulée prudemment). Une fois la réponse connue, corrigez le contenu dans l’administration puis passez le point à « Réglé » (menu « Plus d’options » › « Points à valider »).',
    '',
    '## Les points importants',
    '',
    ...high.map((point) => `- **${point.page}** : ${point.question}\n  _Décision appliquée :_ ${point.decision}`),
    '',
    '## Tous les points, page par page',
    '',
  ]
  for (const [page, list] of [...byPage.entries()].sort(([a], [b]) => a.localeCompare(b, 'fr'))) {
    lines.push(`### ${page}`, '')
    for (const point of list.sort((a, b) => (order[a.priority ?? 'normal'] ?? 1) - (order[b.priority ?? 'normal'] ?? 1))) {
      lines.push(`- ${point.priority === 'high' ? '**[important]** ' : ''}${point.question}\n  _Décision appliquée :_ ${point.decision}`)
    }
    lines.push('')
  }
  fs.writeFileSync(path.join(docs, 'a-valider.md'), `${lines.join('\n')}\n`)

  // ---------- Redirections ----------
  const redirects = (await payload.find({ collection: 'redirects', limit: 2000, pagination: false, depth: 1, sort: 'from' })).docs as unknown as Redirect[]
  const csv = ['ancienne_adresse;nouvelle_adresse;code']
  for (const redirect of redirects) {
    const ref = redirect.to.reference
    const target = redirect.to.type === 'reference' && ref ? pathFor(ref.relationTo, ref.value as never) : redirect.to.url
    csv.push(`${redirect.from};${target ?? ''};${redirect.type ?? '301'}`)
  }
  fs.writeFileSync(path.join(docs, 'redirections.csv'), `${csv.join('\n')}\n`)

  console.log(`✓ docs/a-valider.md : ${open.length} points ouverts (${high.length} importants)`)
  console.log(`✓ docs/redirections.csv : ${redirects.length} redirections`)
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
