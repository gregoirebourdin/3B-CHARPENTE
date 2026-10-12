'use client'

import { SetStepNav } from '@payloadcms/ui'
import { ImageIcon, Plus, Search } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import { relativeFr } from '../../lib/time'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../ui/input-group'
import { EmptyState, Page, PageHeader } from '../../ui/page'
import { Segmented, SegmentedItem } from '../../ui/tabs'
import { cn, focusRing } from '../../ui/utils'

export type Photo = {
  id: number
  alt: string
  caption: string
  kind: 'chantier' | 'ambiance' | 'portrait' | 'visuel'
  filename: string
  thumbnail: string | null
  updatedAt: string
}

const KINDS: { value: Photo['kind']; label: string; badge: string }[] = [
  { value: 'chantier', label: 'Chantiers', badge: 'Chantier' },
  { value: 'ambiance', label: 'Ambiance', badge: 'Ambiance' },
  { value: 'portrait', label: 'Portraits', badge: 'Portrait' },
  { value: 'visuel', label: 'Logos et visuels', badge: 'Visuel' },
]

const PAGE = 48

const fold = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

/** Grid of every photo: find one by what it shows, open it to change its description or replace the file. */
export function PhotoLibrary({ photos, failed, createHref }: { photos: Photo[]; failed: boolean; createHref: string | null }) {
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<Photo['kind'] | 'all'>('all')
  const [shown, setShown] = useState(PAGE)

  const kinds = useMemo(
    () => KINDS.map((option) => ({ ...option, count: photos.filter((photo) => photo.kind === option.value).length })).filter((option) => option.count),
    [photos],
  )

  const visible = useMemo(() => {
    const q = fold(query.trim())
    return photos.filter(
      (photo) => (kind === 'all' || photo.kind === kind) && (!q || fold(`${photo.alt} ${photo.caption} ${photo.filename}`).includes(q)),
    )
  }, [photos, query, kind])

  const rest = visible.length - shown

  return (
    <Page>
      <SetStepNav nav={[{ label: 'Photos' }]} />
      <PageHeader
        crumbs={[{ label: 'Mon site' }, { label: 'Photos' }]}
        title="Photos"
        description={
          <>
            {photos.length ? <strong>{photos.length} photos. </strong> : null}
            Ouvrez une photo pour corriger sa description ou la remplacer partout sur le site. Les photos d’un nouveau chantier s’ajoutent avec « Ajouter un chantier ».
          </>
        }
        actions={
          createHref ? (
            <Button variant="outline" asChild>
              <Link href={createHref}>
                <Plus aria-hidden="true" />
                Ajouter une photo
              </Link>
            </Button>
          ) : null
        }
      />

      <Card>
        <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-5 tw:py-4 tw:max-desk:px-4">
          <InputGroup className="tw:min-w-[260px] tw:flex-1 tw:max-desk:min-w-full">
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setShown(PAGE)
              }}
              placeholder="Ce que montre la photo, une commune…"
              aria-label="Chercher une photo"
            />
          </InputGroup>
          {kinds.length > 1 ? (
            <Segmented aria-label="Type de photo" className="tw:max-desk:w-full tw:max-desk:overflow-x-auto">
              {[{ value: 'all' as const, label: 'Toutes', count: photos.length }, ...kinds].map((option) => (
                <SegmentedItem
                  key={option.value}
                  pressed={kind === option.value}
                  onClick={() => {
                    setKind(option.value)
                    setShown(PAGE)
                  }}
                >
                  {option.label}
                  <span className="tw:text-sm tw:font-normal tw:tabular-nums tw:text-stone-text">{option.count}</span>
                </SegmentedItem>
              ))}
            </Segmented>
          ) : null}
        </div>

        {failed ? (
          <EmptyState icon={<ImageIcon />} title="Les photos n’ont pas pu être chargées." text="Rechargez la page dans un instant." />
        ) : visible.length ? (
          <>
            <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-2 tw:gap-x-4 tw:gap-y-6 tw:p-5 tw:desk:grid-cols-3 tw:wide:grid-cols-4 tw:max-desk:gap-x-3 tw:max-desk:p-4">
              {visible.slice(0, shown).map((photo) => (
                <li key={photo.id} className="tw:min-w-0">
                  <Link
                    href={`/admin/collections/media/${photo.id}`}
                    className={cn('tw:group tw:grid tw:gap-2.5 tw:rounded-sm tw:text-ink tw:no-underline', focusRing)}
                  >
                    <span className="tw:relative tw:block tw:overflow-hidden tw:rounded-sm tw:bg-surface">
                      {photo.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail (480 px version)
                        <img
                          src={photo.thumbnail}
                          alt=""
                          loading="lazy"
                          className="tw:block tw:aspect-[4/3] tw:w-full tw:object-cover tw:transition-transform tw:duration-300 tw:group-hover:scale-[1.03]"
                        />
                      ) : (
                        <span className="tw:grid tw:aspect-[4/3] tw:place-items-center tw:text-stone-text">
                          <ImageIcon aria-hidden="true" className="tw:size-6" />
                        </span>
                      )}
                      {photo.kind !== 'chantier' ? (
                        <Badge variant="tag" className="tw:absolute tw:top-2 tw:left-2 tw:text-[13px]">
                          {KINDS.find((option) => option.value === photo.kind)?.badge}
                        </Badge>
                      ) : null}
                    </span>
                    <span className="tw:grid tw:gap-0.5">
                      <span className="tw:line-clamp-2 tw:text-[15px] tw:font-semibold tw:leading-snug tw:group-hover:underline">{photo.alt || 'Photo sans description'}</span>
                      <span className="tw:truncate tw:text-sm tw:text-stone-text">
                        {photo.caption ? `${photo.caption} · ` : ''}
                        {relativeFr(photo.updatedAt)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:rounded-b-md tw:bg-surface tw:px-5 tw:py-3.5 tw:max-desk:px-4">
              <p className="tw:m-0 tw:text-sm tw:text-stone-text" aria-live="polite">
                {Math.min(shown, visible.length)} photo{Math.min(shown, visible.length) > 1 ? 's' : ''} affichée{Math.min(shown, visible.length) > 1 ? 's' : ''} sur {visible.length}
              </p>
              {rest > 0 ? (
                <Button variant="outline" onClick={() => setShown((value) => value + PAGE)}>
                  Afficher les {Math.min(rest, PAGE)} suivante{Math.min(rest, PAGE) > 1 ? 's' : ''}
                </Button>
              ) : null}
            </div>
          </>
        ) : (
          <EmptyState
            icon={<Search />}
            title={query.trim() ? `Aucune photo ne correspond à « ${query.trim()} ».` : 'Aucune photo pour l’instant.'}
            action={
              query || kind !== 'all' ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    setQuery('')
                    setKind('all')
                  }}
                >
                  Afficher toutes les photos
                </Button>
              ) : null
            }
          />
        )}
      </Card>
    </Page>
  )
}
