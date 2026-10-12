'use client'

import { useField } from '@payloadcms/ui'
import type { TextareaFieldClientProps, TextFieldClientProps } from 'payload'
import { useCallback, useEffect, useRef } from 'react'

import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { cn } from '../ui/utils'
import { FieldShell, fieldId } from './FieldShell'

type Props = (TextFieldClientProps | TextareaFieldClientProps) & { ideal?: [number, number] }

/**
 * Title or description for Google, with a gauge: too short, ideal, too long.
 * The ideal lengths come from the brief (title 50–60, description 140–155).
 */
export function SeoLengthField(props: Props) {
  const { field, path: pathFromProps, readOnly, validate, ideal = [50, 60] } = props
  const { required } = field
  const maxLength = 'maxLength' in field ? field.maxLength : undefined
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, maxLength, required }) : true,
    [validate, maxLength, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<string>({ potentiallyStalePath: pathFromProps, validate: memoizedValidate as never })
  const id = fieldId(path)
  const current = typeof value === 'string' ? value : ''
  const [min, max] = ideal
  const length = current.trim().length
  const state = length === 0 ? 'empty' : length < min ? 'short' : length > max ? 'long' : 'ideal'
  const words = { empty: 'À écrire', short: `Trop court : encore ${min - length} caractère${min - length > 1 ? 's' : ''}`, ideal: 'Longueur idéale', long: `Trop long : ${length - max} caractère${length - max > 1 ? 's' : ''} de trop` }[state]
  const multiline = field.type === 'textarea'
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !element.offsetWidth) return
    element.style.height = 'auto'
    element.style.height = `${element.scrollHeight + 2}px`
  }, [current])

  const common = {
    id,
    name: path,
    value: current,
    disabled: readOnly || disabled,
    readOnly: readOnly || disabled,
    'aria-invalid': showError || undefined,
    'aria-describedby': `${id}-help ${id}-gauge`,
  }

  return (
    <FieldShell field={field} path={path} type={field.type ?? 'text'} required customComponents={customComponents} showError={showError} errorMessage={errorMessage}>
      {multiline ? (
        <Textarea ref={ref} rows={3} {...common} onChange={(event) => setValue(event.target.value)} className="tw:min-h-0 tw:resize-none tw:overflow-hidden" />
      ) : (
        <Input {...common} onChange={(event) => setValue(event.target.value)} />
      )}
      <div id={`${id}-gauge`} className="tw:flex tw:items-center tw:gap-3" aria-live="polite">
        <span className="tw:relative tw:block tw:h-1.5 tw:flex-1 tw:overflow-hidden tw:rounded-full tw:bg-line">
          {/* The ideal zone, then the current length. */}
          <span aria-hidden="true" className="tw:absolute tw:inset-y-0 tw:bg-sage-soft" style={{ left: `${(min / (max * 1.25)) * 100}%`, width: `${((max - min) / (max * 1.25)) * 100}%` }} />
          <span
            aria-hidden="true"
            className={cn(
              'tw:absolute tw:inset-y-0 tw:left-0 tw:rounded-full tw:transition-[width,background-color] tw:duration-180',
              state === 'ideal' ? 'tw:bg-forest' : state === 'long' ? 'tw:bg-error' : 'tw:bg-[#b7791f]',
            )}
            style={{ width: `${Math.min(100, (length / (max * 1.25)) * 100)}%` }}
          />
        </span>
        <span className={cn('tw:shrink-0 tw:text-sm tw:tabular-nums', state === 'ideal' ? 'tw:font-semibold tw:text-forest' : state === 'long' ? 'tw:font-semibold tw:text-error' : 'tw:text-stone-text')}>
          {length} · {words}
        </span>
      </div>
    </FieldShell>
  )
}
