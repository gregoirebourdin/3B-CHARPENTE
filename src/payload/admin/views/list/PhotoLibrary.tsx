'use client'

import { SetStepNav, useConfig, useListDrawerContext, useModal } from '@payloadcms/ui'
import { Check, Expand, ImageIcon, ImageUp, PenLine, Plus, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import { PhotoLightbox } from '../../components/PhotoLightbox'
import { usePhotoPicker } from '../../components/PhotoPickerContext'
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
  full: string | null
  width: number | null
  height: number | null
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

/** `where` → `where[kind][equals]=ambiance&…`, the bracket syntax Payload's REST API reads. */
const toQueryString = (value: unknown, prefix: string): string[] =>
  value && typeof value === 'object'
    ? Object.entries(value).flatMap(([key, item]) => toQueryString(item, `${prefix}[${key}]`))
    : [`${encodeURIComponent(prefix)}=${encodeURIComponent(String(value))}`]

/**
 * In the « Choisir dans les photos » drawer, a photo field can restrict the
 * choice (e.g. only « Ambiance » photos for a background); this asks the API
 * which photos match the field's filter.
 */
function useAllowedIds(where: unknown, enabled: boolean) {
  const { config } = useConfig()
  const key = enabled && where && typeof where === 'object' && Object.keys(where).length ? JSON.stringify(where) : null
  const [allowed, setAllowed] = useState<{ key: string; ids: Set<number> } | null>(null)

  useEffect(() => {
    if (!key) return
    const controller = new AbortController()
    const params = [...toQueryString(JSON.parse(key), 'where'), 'depth=0', 'limit=0', 'pagination=false', 'select[id]=true'].join('&')
    fetch(`${config.serverURL}${config.routes.api}/media?${params}`, { credentials: 'include', signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error(String(response.status)))))
      .then((result: { docs: { id: number }[] }) => setAllowed({ key, ids: new Set(result.docs.map((doc) => doc.id)) }))
      .catch(() => null)
    return () => controller.abort()
  }, [key, config.serverURL, config.routes.api])

  if (!key) return { ids: null, loading: false }
  return allowed?.key === key ? { ids: allowed.ids, loading: false } : { ids: null, loading: true }
}

/**
 * Grid of every photo: find one by what it shows, see it full size with a
 * click on the picture, open it to change its description or replace the file.
 *
 * Payload also shows this screen in the drawer of a photo field
 * (« Choisir dans les photos »): there a click on a photo chooses it.
 */
export function PhotoLibrary({ photos: allPhotos, failed, createHref }: { photos: Photo[]; failed: boolean; createHref: string | null }) {
  const { isInDrawer, onSelect, drawerSlug, allowCreate, createNewDrawerSlug } = useListDrawerContext()
  const picker = usePhotoPicker()
  const { closeModal, openModal } = useModal()
  const picking = Boolean(isInDrawer && onSelect)
  const allowed = useAllowedIds(picker?.where, picking)
  const isSelected = (photo: Photo) => picking && Boolean(picker?.selected.includes(photo.id))
  const photos = useMemo(
    () => (allowed.loading ? [] : allowed.ids ? allPhotos.filter((photo) => allowed.ids?.has(photo.id)) : allPhotos),
    [allPhotos, allowed.ids, allowed.loading],
  )

  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<Photo['kind'] | 'all'>('all')
  const [shown, setShown] = useState(PAGE)
  const [viewer, setViewer] = useState<number | null>(null)

  const choose = (photo: Photo) =>
    onSelect?.({
      collectionSlug: 'media',
      doc: { id: photo.id, alt: photo.alt, caption: photo.caption, filename: photo.filename, url: photo.full, sizes: { thumbnail: { url: photo.thumbnail } } },
      docID: String(photo.id),
    })

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
      {picking ? (
        <PageHeader
          title="Choisir une photo"
          description="Cliquez sur la photo à utiliser. La loupe l’affiche en grand."
          actions={
            <>
              {allowCreate !== false && createHref && createNewDrawerSlug ? (
                <Button variant="outline" onClick={() => openModal(createNewDrawerSlug)}>
                  <ImageUp aria-hidden="true" />
                  Envoyer une nouvelle photo
                </Button>
              ) : null}
              <Button variant="ghost" onClick={() => drawerSlug && closeModal(drawerSlug)}>
                <X aria-hidden="true" />
                Fermer
              </Button>
            </>
          }
        />
      ) : (
        <>
          <SetStepNav nav={[{ label: 'Photos' }]} />
          <PageHeader
            crumbs={[{ label: 'Mon site' }, { label: 'Photos' }]}
            title="Photos"
            description={
              <>
                {photos.length ? <strong>{photos.length} photos. </strong> : null}
                Cliquez sur une photo pour la voir en grand, sur sa description pour la corriger ou la remplacer partout sur le site. Les photos d’un nouveau chantier s’ajoutent avec « Ajouter un chantier ».
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
        </>
      )}
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
              {visible.slice(0, shown).map((photo, index) => (
                <li key={photo.id} className="tw:relative tw:grid tw:min-w-0 tw:content-start tw:gap-2.5">
                  <button
                    type="button"
                    onClick={() => (picking ? choose(photo) : setViewer(index))}
                    disabled={isSelected(photo)}
                    aria-label={picking ? `Choisir : ${photo.alt || photo.filename}` : `Voir en grand : ${photo.alt || photo.filename}`}
                    className={cn(
                      'tw:group tw:relative tw:block tw:overflow-hidden tw:rounded-sm tw:border-0 tw:bg-surface tw:p-0',
                      picking ? 'tw:cursor-pointer tw:hover:shadow-[0_0_0_3px_var(--c-forest)]' : 'tw:cursor-zoom-in',
                      'tw:disabled:cursor-default tw:disabled:opacity-60 tw:disabled:shadow-none',
                      focusRing,
                    )}
                  >
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
                    {isSelected(photo) ? (
                      <Badge className="tw:absolute tw:top-2 tw:left-2 tw:text-[13px]">Déjà choisie</Badge>
                    ) : photo.kind !== 'chantier' ? (
                      <Badge variant="tag" className="tw:absolute tw:top-2 tw:left-2 tw:text-[13px]">
                        {KINDS.find((option) => option.value === photo.kind)?.badge}
                      </Badge>
                    ) : null}
                    <span className="tw:absolute tw:bottom-2 tw:left-2 tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-[rgb(15_31_16/0.72)] tw:px-2.5 tw:py-1 tw:text-[13px] tw:font-semibold tw:text-white tw:opacity-0 tw:transition-opacity tw:duration-180 tw:group-hover:opacity-100 tw:group-focus-visible:opacity-100">
                      {picking ? <Check aria-hidden="true" className="tw:size-3.5" /> : <Expand aria-hidden="true" className="tw:size-3.5" />}
                      {picking ? 'Choisir' : 'Voir en grand'}
                    </span>
                  </button>
                  {picking ? (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setViewer(index)}
                      aria-label={`Voir en grand : ${photo.alt || photo.filename}`}
                      className="tw:absolute tw:top-2 tw:right-2 tw:size-9 tw:rounded-full tw:shadow-md"
                    >
                      <Expand aria-hidden="true" />
                    </Button>
                  ) : null}
                  {picking ? (
                    <span className="tw:grid tw:gap-0.5">
                      <span className="tw:line-clamp-2 tw:text-[15px] tw:font-semibold tw:leading-snug">{photo.alt || 'Photo sans description'}</span>
                      {photo.caption ? <span className="tw:truncate tw:text-sm tw:text-stone-text">{photo.caption}</span> : null}
                    </span>
                  ) : (
                    <Link href={`/admin/collections/media/${photo.id}`} className={cn('tw:group tw:grid tw:gap-0.5 tw:rounded-xs tw:text-ink tw:no-underline', focusRing)}>
                      <span className="tw:line-clamp-2 tw:text-[15px] tw:font-semibold tw:leading-snug tw:group-hover:underline">{photo.alt || 'Photo sans description'}</span>
                      <span className="tw:truncate tw:text-sm tw:text-stone-text">
                        {photo.caption ? `${photo.caption} · ` : ''}
                        {relativeFr(photo.updatedAt)}
                      </span>
                    </Link>
                  )}
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
            title={allowed.loading ? 'Chargement des photos…' : query.trim() ? `Aucune photo ne correspond à « ${query.trim()} ».` : 'Aucune photo pour l’instant.'}
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

      <PhotoLightbox
        photos={visible.map((photo) => ({ src: photo.full || photo.thumbnail || '', alt: photo.alt, caption: photo.caption, width: photo.width, height: photo.height }))}
        index={viewer ?? 0}
        onIndexChange={setViewer}
        open={viewer !== null}
        onOpenChange={(open) => (open ? null : setViewer(null))}
        action={(index) => {
          const photo = visible[index]
          if (!photo) return null
          return picking ? (
            <Button
              disabled={isSelected(photo)}
              onClick={() => {
                setViewer(null)
                choose(photo)
              }}
            >
              <Check aria-hidden="true" />
              {isSelected(photo) ? 'Déjà choisie' : 'Choisir cette photo'}
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link href={`/admin/collections/media/${photo.id}`}>
                <PenLine aria-hidden="true" />
                Modifier la description
              </Link>
            </Button>
          )
        }}
      />
    </Page>
  )
}
