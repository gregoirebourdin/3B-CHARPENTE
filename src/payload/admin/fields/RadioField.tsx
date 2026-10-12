'use client'

import { useField } from '@payloadcms/ui'
import type { RadioFieldClientComponent } from 'payload'
import { useCallback } from 'react'

import { RadioCards } from '../ui/radio-group'
import { FieldShell, fieldId, useFieldText } from './FieldShell'

/** A few exclusive answers, shown as cards. */
export const RadioField: RadioFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const text = useFieldText()
  const { required, options = [] } = field
  const memoizedValidate = useCallback(
    (value: unknown, validationOptions: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...validationOptions, options, required }) : true,
    [validate, options, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<string>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const labelId = `${id}-label`
  const layout = (field.admin as { layout?: 'horizontal' | 'vertical' } | undefined)?.layout ?? 'horizontal'

  return (
    <FieldShell
      field={field}
      path={path}
      type="radio"
      required={required}
      customComponents={customComponents}
      showError={showError}
      errorMessage={errorMessage}
      labelAs="span"
      labelId={labelId}
      hasDefault={(field as { defaultValue?: unknown }).defaultValue !== undefined}
    >
      <RadioCards
        value={typeof value === 'string' ? value : undefined}
        onValueChange={(next) => setValue(next)}
        options={options.map((option) =>
          typeof option === 'string' ? { value: option, label: option } : { value: String(option.value), label: text(option.label as never) || String(option.value) },
        )}
        layout={layout}
        disabled={readOnly || disabled}
        invalid={showError}
        aria-labelledby={labelId}
        aria-describedby={`${id}-help`}
      />
    </FieldShell>
  )
}
