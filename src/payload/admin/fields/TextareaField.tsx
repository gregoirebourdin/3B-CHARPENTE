'use client'

import { useField } from '@payloadcms/ui'
import type { TextareaFieldClientComponent } from 'payload'
import { useCallback, useEffect, useRef } from 'react'

import { Textarea } from '../ui/textarea'
import { Counter, FieldShell, fieldId, useFieldText } from './FieldShell'

/** Several lines of plain text; the box grows with what is written. */
export const TextareaField: TextareaFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const text = useFieldText()
  const { required, maxLength, minLength } = field
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, maxLength, minLength, required }) : true,
    [validate, maxLength, minLength, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<string>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const current = typeof value === 'string' ? value : ''
  const ref = useRef<HTMLTextAreaElement>(null)
  const rows = (field.admin as { rows?: number } | undefined)?.rows ?? 3

  // Grow with the text, so a long answer never hides behind a scroll bar; again
  // when the width changes (menu opening, window resized, tab shown).
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const fit = () => {
      if (!element.offsetWidth) return
      element.style.height = 'auto'
      element.style.height = `${element.scrollHeight + 2}px`
    }
    fit()
    let width = element.offsetWidth
    const observer = new ResizeObserver(() => {
      if (element.offsetWidth === width) return
      width = element.offsetWidth
      fit()
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [current])

  return (
    <FieldShell
      field={field}
      path={path}
      type="textarea"
      required={required}
      customComponents={customComponents}
      showError={showError}
      errorMessage={errorMessage}
      counter={<Counter length={current.length} max={maxLength} />}
    >
      <Textarea
        ref={ref}
        id={id}
        name={path}
        rows={rows}
        value={current}
        onChange={(event) => setValue(event.target.value)}
        disabled={readOnly || disabled}
        readOnly={readOnly || disabled}
        placeholder={text((field.admin as { placeholder?: string } | undefined)?.placeholder) || undefined}
        aria-invalid={showError || undefined}
        aria-describedby={`${id}-help`}
        aria-required={required || undefined}
        className="tw:min-h-0 tw:resize-none tw:overflow-hidden"
      />
    </FieldShell>
  )
}
