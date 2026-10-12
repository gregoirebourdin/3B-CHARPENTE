'use client'

import { useField } from '@payloadcms/ui'
import type { DateFieldClientProps } from 'payload'
import { useCallback } from 'react'

import { DatePicker, dayToIso, toDay } from '../components/DatePicker'
import { FieldShell, fieldId } from './FieldShell'

/** A day (closure, review, publication date): the shadcn Date Picker instead of Payload's. */
export function DateField(props: DateFieldClientProps) {
  const { field, path: pathFromProps, readOnly, validate } = props
  const { required } = field
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, required }) : true,
    [validate, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<string>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const placeholder = (field.admin as { placeholder?: string } | undefined)?.placeholder

  return (
    <FieldShell field={field} path={path} type="date" required={required} customComponents={customComponents} showError={showError} errorMessage={errorMessage}>
      <DatePicker
        id={id}
        value={toDay(value)}
        onChange={(day) => setValue(day ? dayToIso(day) : null)}
        required={required}
        disabled={readOnly || disabled}
        invalid={showError}
        placeholder={typeof placeholder === 'string' ? placeholder : undefined}
        aria-describedby={`${id}-help`}
        aria-required={required || undefined}
      />
    </FieldShell>
  )
}
