import { DefaultTemplate } from '@payloadcms/next/templates'
import type { AdminViewServerProps } from 'payload'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

/**
 * Custom screens of the administration live in Payload's own frame (sidebar,
 * header, breadcrumbs). Only signed-in team members get in.
 */
export function AdminShell({ initPageResult, params, searchParams, children }: AdminViewServerProps & { children: ReactNode }) {
  const { req, permissions, visibleEntities, locale } = initPageResult
  if (!req.user) redirect('/admin/login')
  return (
    <DefaultTemplate
      i18n={req.i18n}
      locale={locale}
      params={params}
      payload={req.payload}
      permissions={permissions}
      req={req}
      searchParams={searchParams}
      user={req.user}
      visibleEntities={visibleEntities}
    >
      {children}
    </DefaultTemplate>
  )
}
