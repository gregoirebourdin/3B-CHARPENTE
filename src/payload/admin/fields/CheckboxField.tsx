'use client'

import { useField } from '@payloadcms/ui'
import type { CheckboxFieldClientComponent } from 'payload'
import { useCallback } from 'react'

import { Checkbox } from '../ui/checkbox'
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '../ui/field'
import { cn } from '../ui/utils'
import { fieldId, useFieldText } from './FieldShell'

/** Yes / no: shadcn Checkbox and its FieldLabel on one line, help underneath. */
export const CheckboxField: CheckboxFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const text = useFieldText()
  const { required } = field
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, required }) : true,
    [validate, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<boolean>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const label = text(field.label as never)
  const description = text((field.admin as { description?: string } | undefined)?.description)

  return (
    <div className={cn('field-type checkbox tb-field', showError && 'error')} style={{ flex: '1 1 auto' }}>
      <Field orientation="horizontal" data-invalid={showError || undefined} className="tw:min-h-11 tw:py-[11px]">
        <Checkbox
          id={id}
          checked={Boolean(value)}
          onCheckedChange={(checked) => setValue(checked === true)}
          disabled={readOnly || disabled}
          aria-invalid={showError || undefined}
          aria-describedby={`${id}-help`}
        />
        <FieldContent>
          <FieldLabel htmlFor={id} className="tw:cursor-pointer">
            {customComponents?.Label ?? label}
          </FieldLabel>
          {showError && errorMessage ? (
            <FieldError id={`${id}-help`}>{errorMessage}</FieldError>
          ) : customComponents?.Description ? (
            customComponents.Description
          ) : description ? (
            <FieldDescription id={`${id}-help`}>{description}</FieldDescription>
          ) : null}
        </FieldContent>
      </Field>
    </div>
  )
}
