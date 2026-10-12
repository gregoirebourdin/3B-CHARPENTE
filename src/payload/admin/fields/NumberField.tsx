'use client'

import { useField } from '@payloadcms/ui'
import type { NumberFieldClientComponent } from 'payload'
import { useCallback, useState } from 'react'

import { Input } from '../ui/input'
import { FieldShell, fieldId, useFieldText } from './FieldShell'

/**
 * A number typed as text (no system arrows): « 3,5 » and « 3.5 » both work,
 * the keyboard on a phone is the numeric one.
 */
export const NumberField: NumberFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const text = useFieldText()
  const { required, min, max } = field
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, min, max, required }) : true,
    [validate, min, max, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<number | null>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const format = (number: number | null | undefined) => (number == null ? '' : String(number).replace('.', ','))
  const parse = (text: string) => (text.trim() === '' ? null : Number(text.replace(/\s/g, '').replace(',', '.')))
  const [draft, setDraft] = useState(format(value))
  // Keep the box in step when the value changes elsewhere (reset, live preview), without
  // rewriting what is being typed (« 3, » on its way to « 3,5 »).
  const [synced, setSynced] = useState(value)
  if (value !== synced) {
    setSynced(value)
    if (parse(draft) !== (value ?? null)) setDraft(format(value))
  }

  return (
    <FieldShell field={field} path={path} type="number" required={required} customComponents={customComponents} showError={showError} errorMessage={errorMessage}>
      <Input
        id={id}
        name={path}
        type="text"
        inputMode="decimal"
        value={draft}
        onChange={(event) => {
          const next = event.target.value.replace(/[^\d,.\-\s]/g, '')
          setDraft(next)
          const parsed = parse(next)
          setValue(parsed === null || Number.isFinite(parsed) ? parsed : value)
        }}
        disabled={readOnly || disabled}
        readOnly={readOnly || disabled}
        placeholder={text((field.admin as { placeholder?: string } | undefined)?.placeholder) || undefined}
        aria-invalid={showError || undefined}
        aria-describedby={`${id}-help`}
        aria-required={required || undefined}
        className="tw:max-w-[220px] tw:tabular-nums"
      />
    </FieldShell>
  )
}
