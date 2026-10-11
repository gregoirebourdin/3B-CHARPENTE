import type { AdminViewServerProps } from 'payload'

import { AdminShell } from '../AdminShell'
import { RequestsInbox, type InboxRequest } from './RequestsInbox'

type FormDoc = { id: number; fields?: { name?: string; label?: string; blockType?: string }[] | null }

/** « Demandes » : the requests sent from the site, as an inbox. */
export async function RequestsView(props: AdminViewServerProps) {
  const { req } = props.initPageResult
  const { payload, user } = req
  let requests: InboxRequest[] = []
  let failed = false
  if (user) {
    try {
      const [{ docs }, forms] = await Promise.all([
        payload.find({
          collection: 'form-submissions',
          sort: '-createdAt',
          limit: 300,
          depth: 0,
          overrideAccess: false,
          user,
        }),
        payload.find({ collection: 'forms', limit: 20, depth: 0, overrideAccess: false, user }),
      ])
      const labels = new Map<string, string>()
      for (const form of forms.docs as unknown as FormDoc[]) {
        for (const field of form.fields ?? []) if (field.name && field.label) labels.set(field.name, field.label)
      }
      requests = (docs as unknown as Record<string, unknown>[]).map((doc) => {
        const data = ((doc.submissionData as { field: string; value: string }[] | null) ?? [])
          .filter(({ value }) => String(value ?? '').trim())
          .map(({ field, value }) => {
            const label = labels.get(field) ?? field
            return { label, value, long: /message/i.test(`${field} ${label}`) || String(value).length > 80 }
          })
        return {
          id: doc.id as number,
          status: (doc.status as InboxRequest['status']) ?? 'new',
          summary: (doc.summary as string) ?? '',
          name: (doc.contactName as string) ?? '',
          email: (doc.contactEmail as string) ?? '',
          phone: (doc.contactPhone as string) ?? '',
          commune: (doc.commune as string) ?? '',
          notes: (doc.notes as string) ?? '',
          sourcePage: (doc.sourcePage as string) ?? '',
          createdAt: doc.createdAt as string,
          attachments: ((doc.attachments as { url: string; name?: string | null }[] | null) ?? []).map((file) => ({
            url: file.url,
            name: file.name || file.url.split('/').pop() || 'Fichier',
          })),
          data,
        }
      })
    } catch (error) {
      payload.logger.error({ err: error, msg: '[admin] demandes non chargées' })
      failed = true
    }
  }
  const selected = typeof props.searchParams?.id === 'string' ? Number(props.searchParams.id) : null

  return (
    <AdminShell {...props}>
      <RequestsInbox requests={requests} initialId={selected} failed={failed} />
    </AdminShell>
  )
}
