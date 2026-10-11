import type { Payload, ServerProps, TypedUser, VisibleEntities } from 'payload'

import { NAV, type NavGroup } from './items'
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
  const collections = new Set(visibleEntities?.collections ?? [])
  const globals = new Set(visibleEntities?.globals ?? [])
  const groups: NavGroup[] = NAV.map((group) => ({
    ...group,
    links: group.links.filter(
      (link) =>
        !link.needs ||
        (link.needs.collection ? collections.has(link.needs.collection as never) : true) &&
          (link.needs.global ? globals.has(link.needs.global as never) : true),
    ),
  })).filter((group) => group.links.length)
  const requests = await countNew(payload, user)
  const account = user as { name?: string | null; username?: string | null; email?: string | null; role?: string } | null
  const name = account?.name || account?.username || account?.email || 'Mon compte'

  return <NavShell groups={groups} requests={requests} userName={name} userRole={account?.role === 'admin' ? 'Administrateur' : 'Éditeur'} />
}
