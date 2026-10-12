'use client'

import { useField } from '@payloadcms/ui'
import type { CheckboxFieldClientComponent } from 'payload'
import { useCallback } from 'react'

import { CheckboxBox } from '../ui/checkbox'
import { FieldError, FieldHint } from '../ui/input'
import { cn } from '../ui/utils'
import { fieldId, useFieldText } from './FieldShell'

/** Yes / no: the box and its sentence on one line, help underneath. */
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
      <div className="tw:flex tw:min-h-11 tw:items-start tw:gap-3 tw:py-[11px]">
        <CheckboxBox
          id={id}
          checked={Boolean(value)}
          onCheckedChange={(checked) => setValue(checked === true)}
          disabled={readOnly || disabled}
          aria-invalid={showError || undefined}
          aria-describedby={`${id}-help`}
        />
        <label htmlFor={id} className="tw:grid tw:cursor-pointer tw:gap-1 tw:text-base tw:leading-[1.35] tw:text-ink">
          <span className="tw:font-semibold">{customComponents?.Label ?? label}</span>
          {showError && errorMessage ? (
            <FieldError id={`${id}-help`}>{errorMessage}</FieldError>
          ) : customComponents?.Description ? (
            customComponents.Description
          ) : description ? (
            <FieldHint id={`${id}-help`}>{description}</FieldHint>
          ) : null}
        </label>
      </div>
    </div>
  )
}
