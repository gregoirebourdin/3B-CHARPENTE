'use client'

import { useField } from '@payloadcms/ui'
import { Plus, X } from 'lucide-react'
import type { TextFieldClientProps } from 'payload'
import { useCallback, useState } from 'react'

import { Badge } from '../ui/badge'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '../ui/input-group'
import { FieldShell, fieldId } from './FieldShell'

/**
 * A short list of words (labels of a chantier, know-how declared to Google):
 * shadcn Badges with a cross, and an Input Group to add one (Entrée or
 * « Ajouter »). Replaces Payload's tag dropdown.
 */
export function TagsField(props: TextFieldClientProps) {
  const { field, path: pathFromProps, readOnly, validate } = props
  const { required } = field
  const maxRows = (field as { maxRows?: number }).maxRows
  const maxLength = field.maxLength
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, required, maxLength }) : true,
    [validate, required, maxLength],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<string[]>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const locked = Boolean(readOnly || disabled)
  const tags = Array.isArray(value) ? value.filter((tag): tag is string => typeof tag === 'string') : []
  const [draft, setDraft] = useState('')
  const full = Boolean(maxRows && tags.length >= maxRows)

  const add = () => {
    const tag = draft.replace(/,+$/, '').trim()
    if (!tag || full) return
    if (!tags.some((existing) => existing.toLowerCase() === tag.toLowerCase())) setValue([...tags, tag])
    setDraft('')
  }
  const remove = (index: number) => setValue(tags.filter((_, i) => i !== index))

  return (
    <FieldShell field={field} path={path} type="tags" required={required} customComponents={customComponents} showError={showError} errorMessage={errorMessage}>
      <div className="tw:grid tw:gap-2.5" data-slot="tags-field">
        {tags.length ? (
          <ul className="tw:m-0 tw:flex tw:list-none tw:flex-wrap tw:gap-2 tw:p-0">
            {tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>
                <Badge variant="tag" className="tw:min-h-9 tw:gap-1 tw:py-0 tw:pr-1 tw:pl-3 tw:text-[15px]">
                  {tag}
                  {!locked ? (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      aria-label={`Retirer « ${tag} »`}
                      className="tw:grid tw:size-7 tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border-0 tw:bg-transparent tw:p-0 tw:text-stone-text tw:hover:bg-sage-soft tw:hover:text-error"
                    >
                      <X aria-hidden="true" className="tw:size-4" />
                    </button>
                  ) : null}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}
        {!locked && !full ? (
          <InputGroup>
            <InputGroupInput
              id={id}
              value={draft}
              maxLength={maxLength ?? undefined}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ',') {
                  event.preventDefault()
                  add()
                } else if (event.key === 'Backspace' && !draft && tags.length) {
                  remove(tags.length - 1)
                }
              }}
              onBlur={add}
              placeholder="Tapez un mot, puis Entrée"
              aria-invalid={showError || undefined}
              aria-describedby={`${id}-help`}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="sm" variant="ghost" onClick={add} disabled={!draft.trim()}>
                <Plus aria-hidden="true" />
                Ajouter
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        ) : null}
        {full && !locked ? <p className="tw:m-0 tw:text-sm tw:text-stone-text">{maxRows} au maximum : retirez-en un pour en ajouter un autre.</p> : null}
      </div>
    </FieldShell>
  )
}
