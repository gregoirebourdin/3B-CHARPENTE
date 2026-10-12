'use client'

import { useDocumentDrawer, useField, useListDrawer } from '@payloadcms/ui'
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  ImagePlus,
  ImageUp,
  PenLine,
  Replace,
  Trash2,
} from 'lucide-react'
import type { CollectionSlug, UploadFieldClientComponent, Where } from 'payload'
import { useCallback, useMemo, useState } from 'react'

import { PhotoLightbox } from '../components/PhotoLightbox'
import { PhotoPickerContext } from '../components/PhotoPickerContext'
import { fullOf, invalidateMedia, thumbOf, useMedia, type MediaDoc } from '../components/useMedia'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { cn } from '../ui/utils'
import { FieldShell, fieldId } from './FieldShell'

type Id = number
const toId = (value: unknown): Id | null => {
  if (value && typeof value === 'object' && 'id' in value)
    return Number((value as { id: unknown }).id)
  if (typeof value === 'number') return value
  if (typeof value === 'string' && value) return Number(value)
  return null
}

/**
 * Photo field built with shadcn/ui: the photo is shown large enough to be
 * seen, opens full size on a click, and has plain buttons around it
 * (« Changer », « Modifier la description », « Retirer »). Payload's own
 * photo library and upload screen open behind « Choisir » and « Envoyer ».
 */
export const UploadField: UploadFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const { required, hasMany } = field as { required?: boolean; hasMany?: boolean }
  const maxRows = (field as { maxRows?: number }).maxRows
  const relationTo = (field as { relationTo: string | string[] }).relationTo
  const collection = (Array.isArray(relationTo) ? relationTo[0] : relationTo) ?? 'media'

  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function'
        ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, {
            ...options,
            required,
          })
        : true,
    [validate, required],
  )
  const {
    customComponents,
    disabled,
    filterOptions,
    path,
    setValue,
    showError,
    errorMessage,
    value,
  } = useField<unknown>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const locked = Boolean(readOnly || disabled)

  const ids = useMemo(() => {
    const list = hasMany ? (Array.isArray(value) ? value : []) : [value]
    return list.map(toId).filter((item): item is Id => item !== null && !Number.isNaN(item))
  }, [value, hasMany])
  const docs = useMedia(collection, ids)

  const [viewer, setViewer] = useState<number | null>(null)
  const photos = ids.map((item) => docs[item])
  const canAdd = !locked && (hasMany ? !maxRows || ids.length < maxRows : ids.length === 0)

  const commit = (next: Id[]) => setValue(hasMany ? next : (next[0] ?? null))
  const add = (docId: Id) =>
    commit(hasMany ? (ids.includes(docId) ? ids : [...ids, docId]) : [docId])
  const replace = (index: number, docId: Id) =>
    commit(ids.map((item, i) => (i === index ? docId : item)))
  const remove = (index: number) => commit(ids.filter((_, i) => i !== index))
  const move = (index: number, step: number) => {
    const next = [...ids]
    const [item] = next.splice(index, 1)
    if (item === undefined) return
    next.splice(index + step, 0, item)
    commit(next)
  }

  const [ListDrawer, , { openDrawer: openList, closeDrawer: closeList }] = useListDrawer({
    collectionSlugs: [collection as CollectionSlug],
    uploads: true,
    filterOptions: filterOptions as never,
  })
  const [CreateDrawer, , { openDrawer: openCreate, closeDrawer: closeCreate }] = useDocumentDrawer({
    collectionSlug: collection as CollectionSlug,
  })
  const [replacing, setReplacing] = useState<number | null>(null)
  const picker = useMemo(() => {
    const filter = (filterOptions as Record<string, unknown> | undefined)?.[collection]
    const where =
      filter === false
        ? { id: { exists: false } }
        : filter && typeof filter === 'object'
          ? filter
          : null
    return { where: where as Where | null, selected: ids }
  }, [filterOptions, collection, ids])

  return (
    <FieldShell
      field={field}
      path={path}
      type="upload"
      required={required}
      customComponents={customComponents}
      showError={showError}
      errorMessage={errorMessage}
      labelAs="span"
      labelId={`${id}-label`}
    >
      <TooltipProvider delayDuration={300}>
        <div
          id={id}
          data-slot="upload-field"
          role="group"
          aria-labelledby={`${id}-label`}
          aria-describedby={`${id}-help`}
          className="tw:grid tw:gap-3"
        >
          {ids.length ? (
            <ul
              className={cn(
                'tw:m-0 tw:grid tw:list-none tw:gap-3 tw:p-0',
                hasMany ? 'tw:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]' : 'tw:max-w-[440px]',
              )}
            >
              {ids.map((docId, index) => (
                <PhotoCard
                  key={`${docId}-${index}`}
                  collection={collection}
                  doc={docs[docId]}
                  docId={docId}
                  position={hasMany ? { index, count: ids.length } : null}
                  locked={locked}
                  onView={() => setViewer(index)}
                  onReplace={() => {
                    setReplacing(index)
                    openList()
                  }}
                  onRemove={() => remove(index)}
                  onMove={(step) => move(index, step)}
                />
              ))}
            </ul>
          ) : null}

          {canAdd ? (
            <div
              className={cn(
                'tw:grid tw:justify-items-start tw:gap-3 tw:rounded-sm tw:border tw:border-dashed tw:border-line-strong tw:bg-card tw:p-4',
                !ids.length && 'tw:max-w-[440px] tw:justify-items-center tw:py-7 tw:text-center',
              )}
            >
              {!ids.length ? (
                <span
                  className="tw:grid tw:size-12 tw:place-items-center tw:rounded-[12px] tw:bg-sage-soft tw:text-forest"
                  aria-hidden="true"
                >
                  <ImagePlus className="tw:size-6" />
                </span>
              ) : null}
              <div
                className={cn('tw:flex tw:flex-wrap tw:gap-2', !ids.length && 'tw:justify-center')}
              >
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setReplacing(null)
                    openList()
                  }}
                >
                  <ImagePlus aria-hidden="true" />
                  {hasMany && ids.length ? 'Ajouter une photo' : 'Choisir dans les photos'}
                </Button>
                <Button type="button" variant="ghost" onClick={openCreate}>
                  <ImageUp aria-hidden="true" />
                  Envoyer une nouvelle photo
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </TooltipProvider>

      <PhotoPickerContext value={picker}>
        <ListDrawer
          allowCreate
          onSelect={({ doc }) => {
            const docId = toId(doc)
            if (docId !== null) {
              if (replacing !== null) replace(replacing, docId)
              else add(docId)
            }
            setReplacing(null)
            closeList()
          }}
        />
      </PhotoPickerContext>
      <CreateDrawer
        onSave={({ doc }) => {
          const docId = toId(doc)
          if (docId !== null) add(docId)
          closeCreate()
        }}
      />
      <PhotoLightbox
        photos={photos.map((doc) => ({
          src: fullOf(doc),
          alt: doc?.alt,
          caption: doc?.caption,
          width: doc?.width,
          height: doc?.height,
        }))}
        index={viewer ?? 0}
        onIndexChange={setViewer}
        open={viewer !== null}
        onOpenChange={(open) => (open ? null : setViewer(null))}
      />
    </FieldShell>
  )
}

/** One photo: the image (click = full size), its description, and its buttons. */
function PhotoCard({
  collection,
  doc,
  docId,
  position,
  locked,
  onView,
  onReplace,
  onRemove,
  onMove,
}: {
  collection: string
  doc: MediaDoc | undefined
  docId: Id
  position: { index: number; count: number } | null
  locked: boolean
  onView: () => void
  onReplace: () => void
  onRemove: () => void
  onMove: (step: number) => void
}) {
  const [EditDrawer, , { openDrawer: openEdit, closeDrawer: closeEdit }] = useDocumentDrawer({
    collectionSlug: collection as CollectionSlug,
    id: docId,
  })
  const src = thumbOf(doc)

  return (
    <li className="tw:grid tw:min-w-0 tw:content-start tw:overflow-hidden tw:rounded-sm tw:border tw:border-solid tw:border-line tw:bg-card">
      <button
        type="button"
        onClick={onView}
        className="tw:group/photo tw:relative tw:block tw:w-full tw:cursor-zoom-in tw:border-0 tw:bg-surface tw:p-0 tw:outline-none tw:focus-visible:outline-2 tw:focus-visible:outline-offset-[-3px] tw:focus-visible:outline-leaf"
        aria-label={`Voir en grand : ${doc?.alt || doc?.filename || 'photo'}`}
      >
        <AspectRatio ratio={4 / 3}>
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt=""
              className="tw:size-full tw:object-cover tw:transition-transform tw:duration-320 tw:ease-brand tw:group-hover/photo:scale-[1.02]"
            />
          ) : (
            <span className="tw:block tw:size-full tw:animate-pulse tw:bg-surface" />
          )}
        </AspectRatio>
        <span className="tw:absolute tw:right-2.5 tw:bottom-2.5 tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-[rgb(15_31_16/0.72)] tw:px-3 tw:py-1.5 tw:text-sm tw:font-semibold tw:text-white">
          <Expand aria-hidden="true" className="tw:size-4" />
          Voir en grand
        </span>
        {position && position.index === 0 && position.count > 1 ? (
          <span className="tw:absolute tw:top-2.5 tw:left-2.5 tw:rounded-full tw:bg-forest tw:px-2.5 tw:py-1 tw:text-[13px] tw:font-semibold tw:text-on-forest">
            Photo principale
          </span>
        ) : null}
      </button>

      <div className="tw:grid tw:gap-2 tw:p-3">
        <p
          className="tw:m-0 tw:line-clamp-2 tw:text-[15px] tw:leading-snug tw:text-ink"
          title={doc?.alt ?? undefined}
        >
          {doc ? doc.alt || doc.filename : 'Chargement…'}
        </p>
        {!locked ? (
          <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-1">
            <Button type="button" variant="ghost" size="sm" onClick={onReplace}>
              <Replace aria-hidden="true" />
              Changer
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={openEdit}
                  aria-label="Modifier la description de la photo"
                >
                  <PenLine aria-hidden="true" />
                  Description
                </Button>
              </TooltipTrigger>
              <TooltipContent>Texte alternatif, légende, recadrage</TooltipContent>
            </Tooltip>
            {position && position.count > 1 ? (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={position.index === 0}
                  onClick={() => onMove(-1)}
                  aria-label="Déplacer avant"
                >
                  <ArrowLeft aria-hidden="true" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={position.index === position.count - 1}
                  onClick={() => onMove(1)}
                  aria-label="Déplacer après"
                >
                  <ArrowRight aria-hidden="true" />
                </Button>
              </>
            ) : null}
            <Button
              type="button"
              variant="destructiveGhost"
              size="sm"
              onClick={onRemove}
              className="tw:ml-auto"
            >
              <Trash2 aria-hidden="true" />
              Retirer
            </Button>
          </div>
        ) : null}
      </div>

      <EditDrawer
        onSave={() => {
          invalidateMedia(collection, docId)
          closeEdit()
        }}
      />
    </li>
  )
}
