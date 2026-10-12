'use client'

import { useField } from '@payloadcms/ui'
import type { EmailFieldClientProps, TextFieldClientProps } from 'payload'
import { useCallback } from 'react'

import { Input } from '../ui/input'
import { Counter, FieldShell, fieldId, useFieldText } from './FieldShell'

type Props = TextFieldClientProps | EmailFieldClientProps

/** One-line text (and e-mail), our field instead of Payload's. */
export function TextField(props: Props) {
  const { field, path: pathFromProps, readOnly, validate } = props
  const text = useFieldText()
  const { required } = field
  const maxLength = 'maxLength' in field ? field.maxLength : undefined
  const minLength = 'minLength' in field ? field.minLength : undefined
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
  const admin = field.admin as { placeholder?: string; autoComplete?: string } | undefined

  return (
    <FieldShell
      field={field}
      path={path}
      type={field.type ?? 'text'}
      required={required}
      customComponents={customComponents}
      showError={showError}
      errorMessage={errorMessage}
      counter={<Counter length={current.length} max={maxLength} />}
    >
      <Input
        id={id}
        name={path}
        type={field.type === 'email' ? 'email' : 'text'}
        value={current}
        onChange={(event) => setValue(event.target.value)}
        disabled={readOnly || disabled}
        readOnly={readOnly || disabled}
        placeholder={text(admin?.placeholder) || undefined}
        autoComplete={admin?.autoComplete || (field.type === 'email' ? 'email' : 'off')}
        aria-invalid={showError || undefined}
        aria-describedby={`${id}-help`}
        aria-required={required || undefined}
      />
    </FieldShell>
  )
}
