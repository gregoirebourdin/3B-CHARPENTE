import type { Payload, ServerProps, TypedUser, VisibleEntities } from 'payload'

import { NAV, type NavEntry, type NavSubLink } from './items'
import { NavShell } from './NavShell'

type Props = ServerProps & { visibleEntities?: VisibleEntities }

async function countNew(payload: Payload, user: TypedUser | null | undefined) {
  try {
    const { totalDocs } = await payload.count({
      collection: 'form-submissions',
      where: { status: { equals: 'new' } },
      overrideAccess: false,
      user,
    })
    return totalDocs
  } catch {
    return 0
  }
}

/**
 * The sidebar of the administration (replaces Payload's): the five things
 * Jean-Michel does, in his words, with the number of requests waiting.
 */
export async function AdminNav({ payload, user, visibleEntities }: Props) {
  const collections = new Set<string>(visibleEntities?.collections ?? [])
  const globals = new Set<string>(visibleEntities?.globals ?? [])
  const visible = (link: NavSubLink) =>
    !link.needs ||
    ((link.needs.collection ? collections.has(link.needs.collection) : true) && (link.needs.global ? globals.has(link.needs.global) : true))
  const entries = NAV.flatMap<NavEntry>((entry) => {
    if (entry.kind === 'link') return visible(entry) ? [entry] : []
    const links = entry.links.filter(visible)
    return links.length ? [{ ...entry, links }] : []
  })
  const requests = await countNew(payload, user)
  const account = user as { name?: string | null; username?: string | null; email?: string | null } | null
  const name = account?.name || account?.username || account?.email || 'Mon compte'

  return <NavShell entries={entries} requests={requests} userName={name} />
}
