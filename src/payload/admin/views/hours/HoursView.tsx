import type { AdminViewServerProps } from 'payload'

import type { Company } from '@/payload-types'

import { AdminShell } from '../AdminShell'
import { HoursEditor } from './HoursEditor'

/** « Coordonnées et horaires » : the few company details Jean-Michel changes, on one simple screen. */
export async function HoursView(props: AdminViewServerProps) {
  const { req } = props.initPageResult
  let company: Company | null = null
  if (req.user) {
    company = (await req.payload
      .findGlobal({ slug: 'company', depth: 0, overrideAccess: false, user: req.user })
      .catch(() => null)) as Company | null
  }
  return (
    <AdminShell {...props}>
      <HoursEditor
        initial={
          company
            ? {
                phone: company.phone ?? '',
                email: company.email ?? '',
                address: {
                  street: company.address?.street ?? '',
                  postalCode: company.address?.postalCode ?? '',
                  city: company.address?.city ?? '',
                  region: company.address?.region ?? '',
                },
                hours: company.hours ?? [],
                closures: company.closures ?? [],
                hoursNote: company.hoursNote ?? '',
              }
            : null
        }
      />
    </AdminShell>
  )
}
