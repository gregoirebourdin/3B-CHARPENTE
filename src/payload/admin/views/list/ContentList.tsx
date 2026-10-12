'use client'

import { SetStepNav } from '@payloadcms/ui'
import { ChevronRight, FileText, MapPin, Pencil, Plus, Search } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import { relativeFr } from '../../lib/time'
import { Badge } from '../../ui/badge'
import { Button, Cta } from '../../ui/button'
import { Card } from '../../ui/card'
import { IconField, Input } from '../../ui/input'
import { Select } from '../../ui/select'
import { EmptyState, Page, PageHeader } from '../../ui/page'
import { Segmented, SegmentedItem } from '../../ui/tabs'
import { cn, focusRing } from '../../ui/utils'

export type ListRow = {
  id: number
  title: string
  href: string
  publicHref: string | null
  thumbnail: string | null
  place: string | null
  tags: string[]
  filterIds: string[]
  status: 'published' | 'draft'
  updatedAt: string
}

export type ListConfig = {
  title: string
  description: string
  noun: { one: string; many: string }
  createLabel: string
  createHref: string | null
  /** The create button is the screen's main action (pill) or a secondary one. */
  createIsMain: boolean
  searchPlaceholder: string
  filterLabel?: string
  columns: { main: string; tags?: string }
  emptyFilter?: string
}

type Status = 'all' | 'published' | 'draft'

const PAGE = 20
/** Radix Select keeps "" for « nothing chosen »: the « all » choice needs a value of its own. */
const ALL = '__all'

const fold = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

/** Table of a « Mon site » collection (designs § 11): search, filters, rows with photo and status. */
export function ContentList({ config, rows, filters, failed }: { config: ListConfig; rows: ListRow[]; filters: { id: string; label: string }[]; failed: boolean }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [status, setStatus] = useState<Status>('all')
  const [shown, setShown] = useState(PAGE)
  const { one, many } = config.noun

  const counts = useMemo(
    () => ({ all: rows.length, published: rows.filter((row) => row.status === 'published').length, draft: rows.filter((row) => row.status === 'draft').length }),
    [rows],
  )

  const visible = useMemo(() => {
    const q = fold(query.trim())
    return rows.filter(
      (row) =>
        (status === 'all' || row.status === status) &&
        (!filter || row.filterIds.includes(filter)) &&
        (!q || fold(`${row.title} ${row.place ?? ''} ${row.tags.join(' ')}`).includes(q)),
    )
  }, [rows, query, filter, status])

  const reset = () => {
    setQuery('')
    setFilter('')
    setStatus('all')
  }

  const create = config.createHref ? (
    config.createIsMain ? (
      <Cta href={config.createHref} icon={<Plus />}>
        {config.createLabel}
      </Cta>
    ) : (
      <Button variant="outline" asChild>
        <Link href={config.createHref}>
          <Plus aria-hidden="true" />
          {config.createLabel}
        </Link>
      </Button>
    )
  ) : null

  const rest = visible.length - shown

  return (
    <Page>
      <SetStepNav nav={[{ label: config.title }]} />
      <PageHeader
        crumbs={[{ label: 'Mon site' }, { label: config.title }]}
        title={config.title}
        description={
          <>
            {rows.length ? (
              <strong>
                {rows.length} {rows.length > 1 ? many : one}.
              </strong>
            ) : null}{' '}
            {config.description}
          </>
        }
        actions={create}
      />

      <Card>
        <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-5 tw:py-4 tw:max-desk:px-4">
          <IconField icon={<Search />} className="tw:min-w-[260px] tw:flex-1 tw:max-desk:min-w-full">
            <Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={config.searchPlaceholder} aria-label={`Chercher dans les ${many}`} />
          </IconField>
          {filters.length ? (
            <Select
              value={filter || ALL}
              onValueChange={(value) => setFilter(value === ALL ? '' : value)}
              aria-label="Filtrer"
              className="tw:w-[260px] tw:max-desk:w-full"
              options={[{ value: ALL, label: config.filterLabel ?? 'Tout' }, ...filters.map((option) => ({ value: option.id, label: option.label }))]}
            />
          ) : null}
          {counts.draft ? (
            <Segmented aria-label="Statut" className="tw:max-desk:w-full tw:max-desk:[&>*]:flex-1 tw:max-desk:[&>*]:justify-center">
              {(
                [
                  ['all', 'Tous', counts.all],
                  ['published', 'Publiés', counts.published],
                  ['draft', 'Brouillons', counts.draft],
                ] as const
              ).map(([value, label, count]) => (
                <SegmentedItem key={value} pressed={status === value} onClick={() => setStatus(value)}>
                  {label}
                  <span className="tw:text-sm tw:font-normal tw:tabular-nums tw:text-stone-text">{count}</span>
                </SegmentedItem>
              ))}
            </Segmented>
          ) : null}
        </div>

        {failed ? (
          <EmptyState icon={<FileText />} title="La liste n’a pas pu être chargée." text="Rechargez la page dans un instant." />
        ) : visible.length ? (
          <>
            {/* Computer: a table */}
            <div className="tw:overflow-x-auto tw:max-desk:hidden">
              <table className="tw:w-full tw:border-collapse tw:text-base">
                <thead>
                  <tr>
                    {[config.columns.main, config.columns.tags, 'Statut', 'Modifié le', ''].map((label, index) =>
                      label === undefined ? null : (
                        <th
                          key={`${label}-${index}`}
                          scope="col"
                          className={cn(
                            'tw:h-11 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:bg-surface tw:px-4 tw:text-left tw:text-sm tw:font-semibold tw:whitespace-nowrap tw:text-stone-text',
                            index === 0 && (config.columns.tags ? 'tw:w-[46%]' : 'tw:w-[60%]'),
                          )}
                        >
                          {label || <span className="tw:sr-only">Actions</span>}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {visible.slice(0, shown).map((row) => (
                    <tr key={row.id} className="tw:group tw:relative tw:transition-colors tw:duration-180 tw:hover:bg-[color-mix(in_srgb,var(--c-surface)_70%,var(--c-card))]">
                      <td className="tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-4 tw:py-3 tw:align-middle">
                        <div className="tw:flex tw:items-center tw:gap-4">
                          <Thumb src={row.thumbnail} />
                          <div className="tw:grid tw:min-w-0 tw:gap-0.5">
                            <Link
                              href={row.href}
                              className={cn(
                                "tw:font-semibold tw:text-ink tw:no-underline tw:after:absolute tw:after:inset-0 tw:after:content-[''] tw:hover:underline",
                                focusRing,
                              )}
                            >
                              {row.title || 'Sans titre'}
                            </Link>
                            <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:text-sm tw:text-stone-text tw:[&_svg]:size-3.5">
                              {config.noun.one === 'chantier' ? <MapPin aria-hidden="true" /> : null}
                              {row.place || 'Non précisée'}
                            </span>
                          </div>
                        </div>
                      </td>
                      {config.columns.tags ? (
                        <td className="tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-4 tw:py-3 tw:align-middle">
                          <Tags tags={row.tags} />
                        </td>
                      ) : null}
                      <td className="tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-4 tw:py-3 tw:align-middle">
                        {row.status === 'published' ? <Badge variant="live">Publié</Badge> : <Badge variant="draft">Brouillon</Badge>}
                      </td>
                      <td className="tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-4 tw:py-3 tw:align-middle tw:text-sm tw:whitespace-nowrap tw:text-stone-text">
                        {relativeFr(row.updatedAt)}
                      </td>
                      <td className="tw:relative tw:z-[1] tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-4 tw:py-3 tw:text-right tw:align-middle tw:whitespace-nowrap">
                        <Button variant="ghost" asChild className="tw:group-hover:border-line-strong tw:group-hover:bg-card">
                          <Link href={row.href} tabIndex={-1}>
                            <Pencil aria-hidden="true" />
                            Modifier
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Phone: cards */}
            <ul className="tw:m-0 tw:list-none tw:p-0 tw:desk:hidden">
              {visible.slice(0, shown).map((row) => (
                <li key={row.id} className="tw:border-0 tw:border-b tw:border-solid tw:border-line">
                  <Link href={row.href} className={cn('tw:flex tw:items-center tw:gap-3 tw:px-4 tw:py-3 tw:text-ink tw:no-underline', focusRing, 'tw:focus-visible:outline-offset-[-2px]')}>
                    <Thumb src={row.thumbnail} />
                    <span className="tw:grid tw:min-w-0 tw:flex-1 tw:gap-1">
                      <span className="tw:text-base tw:font-semibold tw:leading-snug">{row.title || 'Sans titre'}</span>
                      <span className="tw:truncate tw:text-sm tw:text-stone-text">{row.place || 'Non précisée'}</span>
                      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
                        {row.status === 'draft' ? <Badge variant="draft">Brouillon</Badge> : null}
                        <Tags tags={row.tags} max={1} />
                      </span>
                    </span>
                    <ChevronRight aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:text-stone-text" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:rounded-b-md tw:bg-surface tw:px-5 tw:py-3.5 tw:max-desk:px-4">
              <p className="tw:m-0 tw:text-sm tw:text-stone-text" aria-live="polite">
                {Math.min(shown, visible.length)} {visible.length > 1 ? many : one} affiché{Math.min(shown, visible.length) > 1 ? 's' : ''} sur {visible.length}
              </p>
              {rest > 0 ? (
                <Button variant="outline" onClick={() => setShown((value) => value + PAGE)}>
                  Afficher les {Math.min(rest, PAGE)} suivant{Math.min(rest, PAGE) > 1 ? 's' : ''}
                </Button>
              ) : null}
            </div>
          </>
        ) : (
          <EmptyState
            icon={<Search />}
            title={query.trim() ? `Rien ne correspond à « ${query.trim()} ».` : filter ? (config.emptyFilter ?? 'Rien ici.') : `Aucun ${one} pour l’instant.`}
            action={
              query || filter || status !== 'all' ? (
                <Button variant="outline" onClick={reset}>
                  {query.trim() ? 'Effacer la recherche' : `Afficher tous les ${many}`}
                </Button>
              ) : (
                create
              )
            }
          />
        )}
      </Card>
    </Page>
  )
}

function Thumb({ src }: { src: string | null }) {
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail (480 px version)
    <img src={src} alt="" loading="lazy" className="tw:block tw:h-[54px] tw:w-[72px] tw:shrink-0 tw:rounded-sm tw:bg-surface tw:object-cover" />
  ) : (
    <span aria-hidden="true" className="tw:grid tw:h-[54px] tw:w-[72px] tw:shrink-0 tw:place-items-center tw:rounded-sm tw:bg-surface tw:text-stone-text">
      <FileText className="tw:size-5" />
    </span>
  )
}

function Tags({ tags, max = 2 }: { tags: string[]; max?: number }) {
  if (!tags.length) return null
  return (
    <span className="tw:flex tw:min-w-0 tw:flex-wrap tw:gap-1.5">
      {tags.slice(0, max).map((tag) => (
        <Badge key={tag} variant="tag" className="tw:text-[13px]">
          {tag}
        </Badge>
      ))}
      {tags.length > max ? (
        <Badge variant="tag" className="tw:text-[13px]">
          +{tags.length - max}
        </Badge>
      ) : null}
    </span>
  )
}
