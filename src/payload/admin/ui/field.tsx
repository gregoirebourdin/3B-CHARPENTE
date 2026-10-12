'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { TriangleAlert } from 'lucide-react'
import { useMemo, type ComponentProps } from 'react'

import { Label } from './label'
import { cn } from './utils'

/*
 * shadcn/ui Field (label, control, description, error), unchanged in
 * structure and API. Only the classes carry the 3B Charpente look; the one
 * addition is the warning icon in front of an error.
 *
 * Choice cards are shadcn's own pattern: a FieldLabel wrapping a horizontal
 * Field (checkbox or radio item + FieldContent) turns into a bordered card,
 * outlined in forest when its control is checked.
 */

function FieldSet({ className, ...props }: ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'tw:m-0 tw:flex tw:min-w-0 tw:flex-col tw:gap-6 tw:border-0 tw:p-0',
        'tw:has-[>[data-slot=checkbox-group]]:gap-3 tw:has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({ className, variant = 'legend', ...props }: ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'tw:mb-3 tw:p-0 tw:font-semibold tw:text-ink',
        'tw:data-[variant=legend]:text-[19px] tw:data-[variant=label]:mb-2 tw:data-[variant=label]:text-base tw:data-[variant=label]:leading-[1.35]',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'tw:group/field-group tw:@container/field-group tw:flex tw:w-full tw:flex-col tw:gap-6',
        'tw:data-[slot=checkbox-group]:gap-2 tw:[&>[data-slot=field-group]]:gap-4',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva('tw:group/field tw:flex tw:w-full tw:min-w-0 tw:gap-2 tw:data-[invalid=true]:text-error', {
  variants: {
    orientation: {
      vertical: ['tw:flex-col tw:[&>*]:w-full'],
      horizontal: [
        'tw:flex-row tw:items-center tw:gap-3',
        'tw:[&>[data-slot=field-label]]:flex-auto',
        'tw:has-[>[data-slot=field-content]]:items-start tw:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      ],
      responsive: [
        'tw:flex-col tw:[&>*]:w-full tw:@md/field-group:flex-row tw:@md/field-group:items-center tw:@md/field-group:[&>*]:w-auto',
        'tw:@md/field-group:[&>[data-slot=field-label]]:flex-auto',
      ],
    },
  },
  defaultVariants: { orientation: 'vertical' },
})

function Field({ className, orientation = 'vertical', ...props }: ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return <div role="group" data-slot="field" data-orientation={orientation} className={cn(fieldVariants({ orientation }), className)} {...props} />
}

function FieldContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="field-content" className={cn('tw:group/field-content tw:flex tw:min-w-0 tw:flex-1 tw:flex-col tw:gap-0.5 tw:leading-snug', className)} {...props} />
}

function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'tw:group/field-label tw:peer/field-label tw:flex tw:w-fit tw:gap-2 tw:leading-snug tw:group-data-[disabled=true]/field:opacity-50',
        // Choice card: a FieldLabel holding a Field.
        'tw:has-[>[data-slot=field]]:w-full tw:has-[>[data-slot=field]]:cursor-pointer tw:has-[>[data-slot=field]]:flex-col tw:has-[>[data-slot=field]]:rounded-xs tw:has-[>[data-slot=field]]:border tw:has-[>[data-slot=field]]:border-solid tw:has-[>[data-slot=field]]:border-line-strong tw:has-[>[data-slot=field]]:bg-card',
        'tw:has-[>[data-slot=field]]:font-normal tw:has-[>[data-slot=field]]:transition-[border-color,box-shadow,background-color] tw:has-[>[data-slot=field]]:duration-180 tw:has-[>[data-slot=field]]:hover:border-forest',
        'tw:[&>*]:data-[slot=field]:px-3.5 tw:[&>*]:data-[slot=field]:py-[11px]',
        'tw:has-data-[state=checked]:border-forest tw:has-data-[state=checked]:bg-[color-mix(in_srgb,var(--c-sage-soft)_45%,var(--c-card))] tw:has-data-[state=checked]:shadow-[inset_0_0_0_1px_var(--c-forest)]',
        'tw:has-[:focus-visible]:outline-solid tw:has-[:focus-visible]:outline-2 tw:has-[:focus-visible]:outline-offset-3 tw:has-[:focus-visible]:outline-leaf',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn('tw:flex tw:w-fit tw:items-center tw:gap-2 tw:text-base tw:font-semibold tw:leading-[1.35] tw:text-ink tw:group-data-[disabled=true]/field:opacity-50', className)}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        'tw:m-0 tw:text-sm tw:font-normal tw:leading-[1.45] tw:text-stone-text',
        'tw:[&>a]:underline tw:[&>a]:underline-offset-4 tw:[&>a:hover]:text-forest',
        className,
      )}
      {...props}
    />
  )
}

function FieldError({ className, children, errors, ...props }: ComponentProps<'div'> & { errors?: Array<{ message?: string } | undefined> }) {
  const content = useMemo(() => {
    if (children) return children
    if (!errors?.length) return null
    const unique = [...new Map(errors.map((error) => [error?.message, error])).values()]
    if (unique.length === 1) return unique[0]?.message
    return (
      <ul className="tw:ml-4 tw:flex tw:list-disc tw:flex-col tw:gap-1">
        {unique.map((error, index) => (error?.message ? <li key={index}>{error.message}</li> : null))}
      </ul>
    )
  }, [children, errors])

  if (!content) return null

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('tw:flex tw:items-center tw:gap-1.5 tw:text-sm tw:font-semibold tw:text-error tw:[&>svg]:size-4 tw:[&>svg]:shrink-0', className)}
      {...props}
    >
      <TriangleAlert aria-hidden="true" />
      {content}
    </div>
  )
}

export { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle }
