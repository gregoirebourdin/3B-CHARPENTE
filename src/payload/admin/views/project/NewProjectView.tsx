import type { AdminViewServerProps } from 'payload'

import { AdminShell } from '../AdminShell'
import type { CommuneOption, ServiceOption } from './lib'
import { NewProjectWizard } from './NewProjectWizard'

/** « Ajouter un chantier » : loads the prestations and communes, then hands over to the wizard. */
export async function NewProjectView(props: AdminViewServerProps) {
  const { req } = props.initPageResult
  const { payload, user } = req
  let services: ServiceOption[] = []
  let communes: CommuneOption[] = []
  let order = 0
  if (user) {
    const scoped = { overrideAccess: false, user, depth: 0 } as const
    const [serviceDocs, communeDocs, first] = await Promise.all([
      payload.find({ collection: 'services', ...scoped, limit: 50, sort: 'order', draft: false, select: { title: true, shortLabel: true, icon: true } }),
      payload.find({ collection: 'communes', ...scoped, limit: 200, sort: 'name', select: { name: true, villages: true } }),
      payload.find({ collection: 'projects', ...scoped, limit: 1, sort: 'order', select: { order: true } }),
    ]).catch(() => [null, null, null] as const)
    services = (serviceDocs?.docs ?? []).map((doc) => ({ id: doc.id, title: doc.title, shortLabel: doc.shortLabel ?? '', icon: doc.icon ?? 'roof' }))
    communes = (communeDocs?.docs ?? []).map((doc) => ({ id: doc.id, name: doc.name, villages: doc.villages ?? '' }))
    // New chantiers come first on the Réalisations page.
    order = Math.min(first?.docs[0]?.order ?? 1, 1) - 1
  }
  return (
    <AdminShell {...props}>
      <NewProjectWizard services={services} communes={communes} order={order} />
    </AdminShell>
  )
}
