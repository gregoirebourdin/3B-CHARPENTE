import type { Field } from 'payload'

import { pathFor } from '../utilities/routes'

type Reference = { relationTo: string; value: unknown }

/**
 * « Nouvelle adresse » of a redirect, as read in the list: the custom address,
 * or the current address of the chosen page. Computed on read (virtual, no
 * column in the database), so it follows the page if its address changes.
 */
export const redirectDestinationField: Field = {
  name: 'destination',
  type: 'text',
  label: 'Nouvelle adresse',
  virtual: true,
  admin: {
    readOnly: true,
    position: 'sidebar',
    description: 'Calculée à partir du choix « Rediriger vers ».',
  },
  hooks: {
    afterRead: [
      async ({ siblingData, req }) => {
        const to = siblingData?.to as { type?: string; url?: string | null; reference?: Reference | null } | undefined
        if (!to) return null
        if (to.type !== 'reference') return to.url ?? null
        const reference = to.reference
        if (!reference) return null
        if (reference.value && typeof reference.value === 'object') return pathFor(reference.relationTo, reference.value as never)
        // Only the admin needs the address of an unpopulated reference: the site reads redirects with depth 1.
        if (!req.user || reference.value == null) return null
        try {
          const doc = await req.payload.findByID({
            collection: reference.relationTo as never,
            id: reference.value as number,
            depth: 0,
            select: { slug: true, path: true } as never,
            req,
          })
          return pathFor(reference.relationTo, doc as never)
        } catch {
          return null
        }
      },
    ],
  },
}
