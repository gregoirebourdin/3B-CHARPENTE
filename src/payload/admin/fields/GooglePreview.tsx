'use client'

import { useDocumentInfo, useFormFields } from '@payloadcms/ui'

const SITE = '3bcharpente.fr'
const PREFIX: Record<string, string> = { services: '', projects: 'realisations', articles: 'conseils' }

const cut = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text)

/**
 * What Google will show, updated while typing: the address, the title in
 * blue, the description. Long texts are cut where Google usually cuts them.
 */
export function GooglePreview() {
  const { collectionSlug } = useDocumentInfo()
  const title = useFormFields(([fields]) => fields['meta.title']?.value as string | undefined) ?? ''
  const description = useFormFields(([fields]) => fields['meta.description']?.value as string | undefined) ?? ''
  const path = useFormFields(([fields]) => fields.path?.value as string | undefined)
  const slug = useFormFields(([fields]) => fields.slug?.value as string | undefined)
  const segments =
    collectionSlug === 'pages'
      ? (path ?? slug ?? '').split('/').filter((part) => part && part !== 'accueil')
      : [PREFIX[collectionSlug ?? ''] ?? '', slug ?? ''].filter(Boolean)

  return (
    <div className="field-type ui tb-field">
      <div className="tw:grid tw:gap-2">
        <span className="tw:text-base tw:font-semibold tw:text-ink">Aperçu dans Google</span>
        <div className="tw:grid tw:gap-1 tw:rounded-sm tw:border tw:border-solid tw:border-line tw:bg-card tw:px-5 tw:py-4 tw:font-[Arial,sans-serif] tw:shadow-sm">
          <span className="tw:flex tw:items-center tw:gap-2.5">
            <span aria-hidden="true" className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element -- 48 px favicon, nothing to optimise */}
              <img src="/favicon-48.png" alt="" width={18} height={18} />
            </span>
            <span className="tw:grid tw:leading-tight">
              <span className="tw:text-[14px] tw:text-[#202124]">3B Charpente</span>
              <span className="tw:text-[12px] tw:text-[#4d5156]">
                https://{SITE}
                {segments.map((segment) => ` › ${segment}`).join('')}
              </span>
            </span>
          </span>
          <span className="tw:mt-1 tw:text-[20px] tw:leading-[1.3] tw:text-[#1a0dab]">{title ? cut(title, 62) : <em className="tw:text-stone-text">Écrivez le titre ci-dessous</em>}</span>
          <span className="tw:text-[14px] tw:leading-[1.58] tw:text-[#4d5156]">{description ? cut(description, 158) : <em className="tw:text-stone-text">Écrivez la description ci-dessous</em>}</span>
        </div>
      </div>
    </div>
  )
}
