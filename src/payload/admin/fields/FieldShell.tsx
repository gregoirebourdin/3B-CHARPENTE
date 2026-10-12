'use client'

import { getTranslation } from '@payloadcms/translations'
import { RenderCustomComponent, useTranslation } from '@payloadcms/ui'
import { mergeFieldStyles } from '@payloadcms/ui/shared'
import type { CSSProperties, ReactNode } from 'react'

import { Optional } from '../components/Optional'
import { Field, FieldDescription, FieldError, FieldLabel, FieldTitle } from '../ui/field'
import { cn } from '../ui/utils'

type CustomComponents = { Label?: ReactNode; Description?: ReactNode; Error?: ReactNode; BeforeInput?: ReactNode; AfterInput?: ReactNode }

/** Same id as Payload's own fields (`field-hero__title`), so links, tests and labels keep working. */
export const fieldId = (path: string) => `field-${path.replace(/\./g, '__')}`

type Translatable = string | Record<string, string> | false | undefined | null

export function useFieldText() {
  const { i18n } = useTranslation()
  return (value: unknown) => (value && (typeof value === 'string' || typeof value === 'object') ? getTranslation(value as Exclude<Translatable, false | null | undefined>, i18n) : '')
}

/**
 * Frame of every field of the administration, built with shadcn/ui's Field:
 * FieldLabel (« facultatif » when it is), the shadcn control, a
 * FieldDescription, and the FieldError in place of the description.
 * Payload's layout classes (field-type, width in rows) are kept around it.
 */
export function FieldShell({
  field,
  path,
  type,
  required,
  customComponents = {},
  showError,
  errorMessage,
  counter,
  labelAs = 'label',
  labelId,
  hasDefault,
  children,
}: {
  field: { label?: unknown; admin?: unknown }
  path: string
  type: string
  required?: boolean
  customComponents?: CustomComponents
  showError?: boolean
  errorMessage?: string
  counter?: ReactNode
  /** A group of controls (radio cards) is named by a span, not a <label>. */
  labelAs?: 'label' | 'span' | 'none'
  labelId?: string
  /** A field that always has a value (default value) is not « facultatif ». */
  hasDefault?: boolean
  children: ReactNode
}) {
  const text = useFieldText()
  const id = fieldId(path)
  const admin = (field as { admin?: { description?: Translatable; className?: string } }).admin ?? {}
  const rawLabel = text((field as { label?: Translatable }).label)
  // « Titre (facultatif) » written in the config: the mark is ours now.
  const label = rawLabel.replace(/\s*\((facultatif|optionnel)\)\s*$/i, '')
  const description = text(admin.description)
  const readOnly = Boolean((admin as { readOnly?: boolean }).readOnly)
  const optional = !required && !readOnly && !hasDefault
  const style = mergeFieldStyles(field as never) as CSSProperties
  const helpId = `${id}-help`

  return (
    <div className={cn('field-type', type, 'tb-field', admin.className, showError && 'error')} style={style}>
      <Field data-invalid={showError || undefined}>
        {labelAs === 'none' ? null : (
          <div className="tw:flex tw:min-w-0 tw:items-baseline tw:justify-between tw:gap-3">
            <RenderCustomComponent
              CustomComponent={customComponents.Label}
              Fallback={
                label ? (
                  labelAs === 'label' ? (
                    <FieldLabel htmlFor={id} className="tb-field__label tw:min-w-0">
                      {label}
                      {optional ? <span className="tb-optional"><Optional /></span> : null}
                    </FieldLabel>
                  ) : (
                    <FieldTitle id={labelId} className="tb-field__label tw:min-w-0 tw:flex-wrap tw:items-baseline tw:gap-x-1.5">
                      {label}
                      {optional ? <span className="tb-optional"><Optional /></span> : null}
                    </FieldTitle>
                  )
                ) : null
              }
            />
            {counter}
          </div>
        )}
        {customComponents.BeforeInput}
        {children}
        {customComponents.AfterInput}
        {showError && errorMessage ? (
          <RenderCustomComponent CustomComponent={customComponents.Error} Fallback={<FieldError id={helpId}>{errorMessage}</FieldError>} />
        ) : (
          <RenderCustomComponent
            CustomComponent={customComponents.Description}
            Fallback={
              description || optional ? (
                <FieldDescription id={helpId} className={cn(!description && 'tb-optional-hint-only')}>
                  {optional ? <span className="tb-optional-hint">Facultatif. </span> : null}
                  {description}
                </FieldDescription>
              ) : null
            }
          />
        )}
      </Field>
    </div>
  )
}

/** « 42 / 140 »: shown while typing, red past the limit. */
export function Counter({ length, max }: { length: number; max?: number }) {
  if (!max) return null
  return (
    <span aria-hidden="true" className={cn('tw:shrink-0 tw:text-sm tw:font-normal tw:tabular-nums tw:text-stone-text tw:opacity-0 tw:transition-opacity tw:duration-180 tw:group-focus-within/field:opacity-100', length > max && 'tw:text-error tw:opacity-100')}>
      {length} / {max}
    </span>
  )
}
