'use client'

import { useField } from '@payloadcms/ui'
import type { SelectFieldClientComponent } from 'payload'
import { useCallback } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { FieldShell, fieldId, useFieldText } from './FieldShell'

const NONE = '__none'

/** Choice in a list: shadcn Select instead of Payload's own. */
export const SelectField: SelectFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const text = useFieldText()
  const { required, options = [] } = field
  const memoizedValidate = useCallback(
    (value: unknown, validationOptions: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...validationOptions, hasMany: false, options, required }) : true,
    [validate, options, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<string>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const hasDefault = (field as { defaultValue?: unknown }).defaultValue !== undefined
  const choices = [
    // An optional list without default value can be emptied again.
    ...(!required && !hasDefault ? [{ value: NONE, label: <span className="tw:text-stone-text">Aucun</span> }] : []),
    ...options.map((option) =>
      typeof option === 'string' ? { value: option, label: option } : { value: String(option.value), label: text(option.label as never) || String(option.value) },
    ),
  ]

  return (
    <FieldShell field={field} path={path} type="select" required={required} hasDefault={hasDefault} customComponents={customComponents} showError={showError} errorMessage={errorMessage}>
      <Select name={path} value={typeof value === 'string' && value ? value : undefined} onValueChange={(next) => setValue(next === NONE ? null : next)} disabled={readOnly || disabled}>
        <SelectTrigger id={id} aria-invalid={showError || undefined} aria-describedby={`${id}-help`}>
          <SelectValue placeholder={text((field.admin as { placeholder?: string } | undefined)?.placeholder) || 'Choisir…'} />
        </SelectTrigger>
        <SelectContent>
          {choices.map((choice) => (
            <SelectItem key={choice.value} value={choice.value}>
              {choice.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldShell>
  )
}
