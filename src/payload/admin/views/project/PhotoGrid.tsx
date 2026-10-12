'use client'

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type Announcements,
  type DragEndEvent,
} from '@dnd-kit/core'
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Ellipsis, GripVertical, ImagePlus, LoaderCircle, RefreshCw, Star, Trash2, TriangleAlert, Upload } from 'lucide-react'
import { useId, useRef, useState, type ChangeEvent, type DragEvent } from 'react'

import { Button } from '../../ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from '../../ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../../ui/dropdown-menu'
import { FieldError } from '../../ui/field'
import { Input } from '../../ui/input'
import { Disc } from '../../ui/page'
import { cn, focusRing } from '../../ui/utils'

export type Photo = {
  key: string
  preview: string
  status: 'preparing' | 'uploading' | 'done' | 'error'
  progress: number
  mediaId?: number
  caption: string
  error?: string
}

type Props = {
  photos: Photo[]
  onAdd: (files: File[]) => void
  onReorder: (photos: Photo[]) => void
  onCaption: (key: string, caption: string) => void
  onRemove: (key: string) => void
  onReplace: (key: string, file: File) => void
  onRetry: (key: string) => void
  error?: string | null
}

const ACCEPT = 'image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif'

const position = (photos: Photo[], id: string | number) => photos.findIndex((photo) => photo.key === id) + 1

/**
 * Photos of the chantier (designs § 13): a big drop zone, then the photos in
 * order. The first is the main photo. Drag a photo by its handle (or with
 * Space and the arrows) to change the order.
 */
export function PhotoGrid({ photos, onAdd, onReorder, onCaption, onRemove, onReplace, onRetry, error }: Props) {
  const inputId = useId()
  const [over, setOver] = useState(false)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 180, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const announcements: Announcements = {
    onDragStart: ({ active }) => `Photo ${position(photos, active.id)} saisie.`,
    onDragOver: ({ active, over: target }) => (target ? `Photo ${position(photos, active.id)} au-dessus de la place ${position(photos, target.id)}.` : undefined),
    onDragEnd: ({ active, over: target }) =>
      target ? `Photo ${position(photos, active.id)} posée à la place ${position(photos, target.id)}.` : `Photo ${position(photos, active.id)} posée.`,
    onDragCancel: ({ active }) => `Déplacement annulé. La photo ${position(photos, active.id)} reste à sa place.`,
  }

  const onDragEnd = ({ active, over: target }: DragEndEvent) => {
    if (!target || active.id === target.id) return
    const from = photos.findIndex((photo) => photo.key === active.id)
    const to = photos.findIndex((photo) => photo.key === target.id)
    onReorder(arrayMove(photos, from, to))
  }

  const pick = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    if (files.length) onAdd(files)
    event.target.value = ''
  }

  const drop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setOver(false)
    const files = Array.from(event.dataTransfer.files).filter((file) => file.type.startsWith('image/') || /\.(heic|heif)$/i.test(file.name))
    if (files.length) onAdd(files)
  }

  return (
    <div className="tw:grid tw:gap-5">
      <label
        htmlFor={inputId}
        onDragOver={(event) => {
          event.preventDefault()
          setOver(true)
        }}
        onDragLeave={() => setOver(false)}
        onDrop={drop}
        className={cn(
          'tw:grid tw:cursor-pointer tw:justify-items-center tw:gap-2.5 tw:rounded-md tw:border-2 tw:border-dashed tw:border-line-strong tw:bg-cream tw:px-6 tw:py-9 tw:text-center tw:transition-colors tw:duration-180',
          'tw:hover:border-forest tw:hover:bg-sage-soft tw:has-focus-visible:outline-solid tw:has-focus-visible:outline-2 tw:has-focus-visible:outline-offset-3 tw:has-focus-visible:outline-leaf',
          over && 'tw:border-forest tw:bg-sage-soft',
          error && 'tw:border-error',
          'tw:max-desk:px-4 tw:max-desk:py-7',
        )}
      >
        <Disc tone="sage" size="lg">
          <Upload />
        </Disc>
        <span className="tw:mt-1 tw:font-heading tw:text-xl tw:font-semibold tw:leading-[1.25]">
          <span className="tw:max-desk:hidden">Glissez vos photos ici ou cliquez pour choisir</span>
          <span className="tw:desk:hidden">Touchez ici pour choisir vos photos</span>
        </span>
        <span className="tw:text-sm tw:text-stone-text">JPG, PNG, HEIC ou WebP. Plusieurs photos à la fois. Elles sont allégées avant l’envoi.</span>
        <span className="tw:mt-1.5 tw:inline-flex tw:min-h-11 tw:items-center tw:gap-2 tw:rounded-xs tw:border tw:border-line-strong tw:bg-card tw:px-[18px] tw:text-base tw:font-semibold">
          <ImagePlus aria-hidden="true" className="tw:size-[18px]" />
          Choisir des photos
        </span>
        <input id={inputId} type="file" accept={ACCEPT} multiple onChange={pick} className="tw:sr-only" />
      </label>
      {error ? <FieldError role="alert">{error}</FieldError> : null}

      {photos.length ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
          accessibility={{
            announcements,
            screenReaderInstructions: {
              draggable: 'Pour déplacer une photo, appuyez sur Espace, utilisez les flèches, puis appuyez de nouveau sur Espace pour la poser. Échap annule.',
            },
          }}
        >
          <SortableContext items={photos.map((photo) => photo.key)} strategy={rectSortingStrategy}>
            <ol className="tw:m-0 tw:grid tw:list-none tw:grid-cols-3 tw:gap-4 tw:p-0 tw:max-desk:grid-cols-2 tw:max-desk:gap-3">
              {photos.map((photo, index) => (
                <SortablePhoto
                  key={photo.key}
                  photo={photo}
                  index={index}
                  onCaption={onCaption}
                  onMakeMain={() => onReorder(arrayMove(photos, index, 0))}
                  onRemove={onRemove}
                  onReplace={onReplace}
                  onRetry={onRetry}
                />
              ))}
            </ol>
          </SortableContext>
        </DndContext>
      ) : null}
    </div>
  )
}

function SortablePhoto({
  photo,
  index,
  onCaption,
  onMakeMain,
  onRemove,
  onReplace,
  onRetry,
}: {
  photo: Photo
  index: number
  onCaption: (key: string, caption: string) => void
  onMakeMain: () => void
  onRemove: (key: string) => void
  onReplace: (key: string, file: File) => void
  onRetry: (key: string) => void
}) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: photo.key })
  const replaceRef = useRef<HTMLInputElement>(null)
  const [confirm, setConfirm] = useState(false)
  const main = index === 0
  const n = index + 1

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        'tw:relative tw:grid tw:content-start tw:gap-2 tw:rounded-md tw:border tw:border-line tw:bg-card tw:p-2 tw:transition-shadow tw:hover:shadow-md',
        main && 'tw:border-forest tw:shadow-[0_0_0_1px_var(--c-forest)]',
        isDragging && 'tw:z-10 tw:-rotate-2 tw:shadow-lg',
      )}
    >
      <div className="tw:relative tw:aspect-[4/3] tw:overflow-hidden tw:rounded-sm tw:bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element -- local preview of the chosen file */}
        <img src={photo.preview} alt="" className="tw:block tw:size-full tw:object-cover" />
        {photo.status === 'preparing' || photo.status === 'uploading' ? (
          <span className="tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:bg-[rgb(15_31_16/0.35)] tw:text-white">
            <LoaderCircle aria-hidden="true" className="tw:size-7 tw:animate-spin" />
            <span className="tw:sr-only">{photo.status === 'preparing' ? 'Préparation de la photo' : 'Envoi de la photo'}</span>
          </span>
        ) : null}
        {photo.status === 'error' ? (
          <span className="tw:absolute tw:inset-0 tw:grid tw:content-center tw:justify-items-center tw:gap-2 tw:bg-[rgb(15_31_16/0.72)] tw:p-3 tw:text-center tw:text-sm tw:font-semibold tw:text-white">
            <TriangleAlert aria-hidden="true" className="tw:size-5" />
            {photo.error ?? 'L’envoi n’a pas abouti.'}
            <button
              type="button"
              onClick={() => onRetry(photo.key)}
              className={cn('tw:inline-flex tw:min-h-10 tw:cursor-pointer tw:items-center tw:gap-1.5 tw:rounded-xs tw:border-0 tw:bg-white tw:px-3 tw:font-sans tw:text-sm tw:font-semibold tw:text-ink', focusRing)}
            >
              <RefreshCw aria-hidden="true" className="tw:size-4" />
              Réessayer
            </button>
          </span>
        ) : null}
        {photo.status === 'uploading' ? (
          <span className="tw:absolute tw:right-0 tw:bottom-0 tw:left-0 tw:h-1 tw:bg-line">
            <span className="tw:block tw:h-full tw:bg-forest tw:transition-[width]" style={{ width: `${Math.round(photo.progress * 100)}%` }} />
          </span>
        ) : null}
        {main ? (
          <span className="tw:absolute tw:bottom-2 tw:left-2 tw:inline-flex tw:min-h-[26px] tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-sage tw:px-2.5 tw:text-sm tw:font-semibold tw:text-on-sage">
            <Star aria-hidden="true" className="tw:size-3.5 tw:fill-current" />
            <span className="tw:max-desk:hidden">Photo principale</span>
            <span className="tw:desk:hidden">Principale</span>
          </span>
        ) : null}

        <button
          type="button"
          ref={setActivatorNodeRef}
          {...attributes}
          {...listeners}
          aria-label={`Déplacer la photo ${n}`}
          title="Glissez pour déplacer"
          className={cn(
            'tw:absolute tw:top-1.5 tw:left-1.5 tw:inline-flex tw:h-11 tw:min-w-11 tw:cursor-grab tw:touch-none tw:items-center tw:justify-center tw:gap-0.5 tw:rounded-xs tw:border-0 tw:bg-[rgb(248_244_238/0.92)] tw:px-1.5 tw:font-sans tw:text-sm tw:font-bold tw:text-ink tw:active:cursor-grabbing',
            focusRing,
          )}
        >
          <GripVertical aria-hidden="true" className="tw:size-[18px]" />
          {n}
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label={`Options de la photo ${n}`}
            className={cn(
              'tw:absolute tw:top-1.5 tw:right-1.5 tw:grid tw:size-11 tw:cursor-pointer tw:place-items-center tw:rounded-xs tw:border-0 tw:bg-[rgb(248_244_238/0.92)] tw:text-ink',
              focusRing,
            )}
          >
            <Ellipsis aria-hidden="true" className="tw:size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {!main ? (
              <DropdownMenuItem onSelect={onMakeMain}>
                <Star aria-hidden="true" />
                Choisir comme photo principale
              </DropdownMenuItem>
            ) : null}
            <DropdownMenuItem onSelect={() => replaceRef.current?.click()}>
              <RefreshCw aria-hidden="true" />
              Remplacer la photo
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem data-variant="destructive" onSelect={() => setConfirm(true)}>
              <Trash2 aria-hidden="true" />
              Retirer la photo
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <input
          ref={replaceRef}
          type="file"
          accept={ACCEPT}
          tabIndex={-1}
          aria-hidden="true"
          className="tw:hidden"
          onChange={(event) => {
            const file = event.target.files?.[0]
            if (file) onReplace(photo.key, file)
            event.target.value = ''
          }}
        />
      </div>
      <label className="tw:sr-only" htmlFor={`caption-${photo.key}`}>
        Légende de la photo {n}
      </label>
      <Input
        id={`caption-${photo.key}`}
        value={photo.caption}
        maxLength={160}
        placeholder="Légende (facultatif)"
        onChange={(event) => onCaption(photo.key, event.target.value)}
        className="tw:px-3 tw:py-2 tw:text-[15px]"
      />

      <Dialog open={confirm} onOpenChange={setConfirm}>
        <DialogContent>
          <DialogTitle>Retirer la photo ?</DialogTitle>
          <DialogDescription>Elle ne sera pas sur la page du chantier. Vous pourrez la remettre en la choisissant de nouveau.</DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" autoFocus>
                Annuler
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                setConfirm(false)
                onRemove(photo.key)
              }}
            >
              <Trash2 aria-hidden="true" />
              Retirer la photo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </li>
  )
}
