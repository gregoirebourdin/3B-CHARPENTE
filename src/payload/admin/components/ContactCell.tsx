'use client'

import { useFormFields } from '@payloadcms/ui'
import type { DefaultCellComponentProps } from 'payload'

export function EmailCell({ cellData }: DefaultCellComponentProps) {
  if (typeof cellData !== 'string' || !cellData) return null
  return <a href={`mailto:${cellData}`}>{cellData}</a>
}

/** "Répondre par e-mail" / "Appeler" buttons at the top of a request. */
export function ReplyActions() {
  const email = useFormFields(([fields]) => fields.contactEmail?.value as string | undefined)
  const phone = useFormFields(([fields]) => fields.contactPhone?.value as string | undefined)
  const summary = useFormFields(([fields]) => fields.summary?.value as string | undefined)
  if (!email && !phone) return null
  const subject = encodeURIComponent(`Votre demande à 3B Charpente${summary ? ` : ${summary}` : ''}`)
  return (
    <div className="tb-reply">
      {email ? (
        <a className="btn btn--style-primary btn--size-medium" href={`mailto:${email}?subject=${subject}`}>
          Répondre par e-mail
        </a>
      ) : null}
      {phone ? (
        <a className="btn btn--style-secondary btn--size-medium" href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
          Appeler le {phone}
        </a>
      ) : null}
    </div>
  )
}
