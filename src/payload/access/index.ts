import type { Access, FieldAccess, PayloadRequest, Where } from 'payload'

export type Role = 'admin' | 'editor'

const roleOf = (req: PayloadRequest): Role | null => {
  const user = req.user as { role?: Role } | null
  return user?.role ?? null
}

/** Administrateur (Grégoire) : everything, technical settings included. */
export const isAdmin: Access = ({ req }) => roleOf(req) === 'admin'
export const isAdminField: FieldAccess = ({ req }) => roleOf(req) === 'admin'

/** Any signed-in member of the team (Jean, Claire, Grégoire). */
export const isTeam: Access = ({ req }) => Boolean(req.user)

export const anyone: Access = () => true

/** Visitors see published documents only; the team also sees drafts. */
export const publishedOrTeam: Access = ({ req }) => {
  if (req.user) return true
  const where: Where = { _status: { equals: 'published' } }
  return where
}

/** Users can read and edit their own account; admins manage everyone. */
export const adminOrSelf: Access = ({ req }) => {
  if (roleOf(req) === 'admin') return true
  if (!req.user) return false
  const where: Where = { id: { equals: req.user.id } }
  return where
}
