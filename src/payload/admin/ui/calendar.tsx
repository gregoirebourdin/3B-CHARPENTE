'use client'

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useEffect, useRef, type ComponentProps } from 'react'
import { DayPicker, getDefaultClassNames, type DayButton } from 'react-day-picker'

import { Button, buttonVariants } from './button'
import { cn } from './utils'

/*
 * shadcn/ui Calendar (react-day-picker 9), unchanged in structure and API.
 * 3B Charpente classes: 40 px days (easy to hit), the chosen day in forest,
 * today in pale sage, month and year as plain lists to jump far back.
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: ComponentProps<typeof DayPicker> & { buttonVariant?: ComponentProps<typeof Button>['variant'] }) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('tw:group/calendar tw:bg-card tw:p-1 tw:font-sans tw:text-ink tw:[--cell-size:40px] tw:[[data-slot=popover-content]_&]:bg-transparent', className)}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('fr-FR', { month: 'long' }).replace(/^./, (letter) => letter.toUpperCase()),
        ...formatters,
      }}
      classNames={{
        root: cn('tw:w-fit', defaultClassNames.root),
        months: cn('tw:relative tw:flex tw:flex-col tw:gap-4 tw:md:flex-row', defaultClassNames.months),
        month: cn('tw:flex tw:w-full tw:flex-col tw:gap-3', defaultClassNames.month),
        nav: cn('tw:absolute tw:inset-x-0 tw:top-0 tw:flex tw:w-full tw:items-center tw:justify-between tw:gap-1', defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: buttonVariant }), 'tw:size-(--cell-size) tw:select-none tw:p-0 tw:aria-disabled:opacity-40', defaultClassNames.button_previous),
        button_next: cn(buttonVariants({ variant: buttonVariant }), 'tw:size-(--cell-size) tw:select-none tw:p-0 tw:aria-disabled:opacity-40', defaultClassNames.button_next),
        month_caption: cn('tw:flex tw:h-(--cell-size) tw:w-full tw:items-center tw:justify-center tw:px-(--cell-size)', defaultClassNames.month_caption),
        dropdowns: cn('tw:flex tw:h-(--cell-size) tw:w-full tw:items-center tw:justify-center tw:gap-1.5 tw:text-base tw:font-semibold', defaultClassNames.dropdowns),
        dropdown_root: cn(
          'tw:relative tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:transition-[border-color,box-shadow] tw:duration-180 tw:hover:border-ink',
          'tw:has-focus-visible:border-forest tw:has-focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn('tw:absolute tw:inset-0 tw:cursor-pointer tw:bg-card tw:opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'tw:select-none tw:font-semibold',
          captionLayout === 'label'
            ? 'tw:text-base'
            : 'tw:flex tw:h-9 tw:items-center tw:gap-1 tw:rounded-xs tw:pr-1.5 tw:pl-2.5 tw:text-base tw:[&>svg]:size-4 tw:[&>svg]:text-stone-text',
          defaultClassNames.caption_label,
        ),
        month_grid: 'tw:w-full tw:border-collapse',
        weekdays: cn('tw:flex', defaultClassNames.weekdays),
        weekday: cn('tw:flex-1 tw:select-none tw:rounded-xs tw:text-[13px] tw:font-medium tw:text-stone-text', defaultClassNames.weekday),
        week: cn('tw:mt-1 tw:flex tw:w-full', defaultClassNames.week),
        week_number_header: cn('tw:w-(--cell-size) tw:select-none', defaultClassNames.week_number_header),
        week_number: cn('tw:select-none tw:text-[13px] tw:text-stone-text', defaultClassNames.week_number),
        day: cn(
          'tw:group/day tw:relative tw:aspect-square tw:h-full tw:w-full tw:select-none tw:p-0 tw:text-center',
          'tw:[&:first-child[data-selected=true]_button]:rounded-l-xs tw:[&:last-child[data-selected=true]_button]:rounded-r-xs',
          defaultClassNames.day,
        ),
        range_start: cn('tw:rounded-l-xs tw:bg-sage-soft', defaultClassNames.range_start),
        range_middle: cn('tw:rounded-none', defaultClassNames.range_middle),
        range_end: cn('tw:rounded-r-xs tw:bg-sage-soft', defaultClassNames.range_end),
        today: cn('tw:rounded-xs tw:bg-sage-soft tw:font-bold tw:data-[selected=true]:rounded-none', defaultClassNames.today),
        outside: cn('tw:text-stone-text tw:opacity-60 tw:aria-selected:text-stone-text', defaultClassNames.outside),
        disabled: cn('tw:text-stone-text tw:opacity-40', defaultClassNames.disabled),
        hidden: cn('tw:invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />,
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') return <ChevronLeftIcon className={cn('tw:size-5', className)} {...props} />
          if (orientation === 'right') return <ChevronRightIcon className={cn('tw:size-5', className)} {...props} />
          return <ChevronDownIcon className={cn('tw:size-4', className)} {...props} />
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className="tw:flex tw:size-(--cell-size) tw:items-center tw:justify-center tw:text-center">{children}</div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({ className, day, modifiers, ...props }: ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString('fr-FR')}
      data-selected-single={modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'tw:flex tw:aspect-square tw:size-auto tw:w-full tw:min-w-(--cell-size) tw:flex-col tw:gap-1 tw:px-0 tw:text-[15px] tw:font-normal tw:leading-none',
        'tw:hover:bg-surface',
        'tw:data-[selected-single=true]:bg-forest tw:data-[selected-single=true]:font-semibold tw:data-[selected-single=true]:text-on-forest tw:data-[selected-single=true]:hover:bg-forest-deep',
        'tw:data-[range-middle=true]:rounded-none tw:data-[range-middle=true]:bg-sage-soft',
        'tw:data-[range-start=true]:rounded-l-xs tw:data-[range-start=true]:bg-forest tw:data-[range-start=true]:text-on-forest',
        'tw:data-[range-end=true]:rounded-r-xs tw:data-[range-end=true]:bg-forest tw:data-[range-end=true]:text-on-forest',
        'tw:group-data-[focused=true]/day:relative tw:group-data-[focused=true]/day:z-10',
        'tw:[&>span]:text-xs tw:[&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
