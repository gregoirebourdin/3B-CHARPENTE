'use client'

import { useField } from '@payloadcms/ui'
import type { RadioFieldClientComponent } from 'payload'
import { useCallback } from 'react'

import { Field, FieldContent, FieldLabel, FieldTitle } from '../ui/field'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { cn } from '../ui/utils'
import { FieldShell, fieldId, useFieldText } from './FieldShell'

/** A few exclusive answers: shadcn RadioGroup as choice cards (FieldLabel + Field, shadcn's own pattern). */
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
  const choices = options.map((option) =>
    typeof option === 'string' ? { value: option, label: option } : { value: String(option.value), label: text(option.label as never) || String(option.value) },
  )

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
      <RadioGroup
        value={typeof value === 'string' ? value : ''}
        onValueChange={(next) => setValue(next)}
        disabled={readOnly || disabled}
        aria-invalid={showError || undefined}
        aria-labelledby={labelId}
        aria-describedby={`${id}-help`}
        className={cn(layout === 'horizontal' ? 'tw:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]' : 'tw:grid-cols-1')}
      >
        {choices.map((choice) => (
          <FieldLabel key={choice.value} htmlFor={`${id}-${choice.value}`}>
            <Field orientation="horizontal">
              <RadioGroupItem value={choice.value} id={`${id}-${choice.value}`} />
              <FieldContent>
                <FieldTitle>{choice.label}</FieldTitle>
              </FieldContent>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldShell>
  )
}
