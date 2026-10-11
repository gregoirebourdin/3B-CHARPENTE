import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight, LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { Slot } from 'radix-ui'
import type { ComponentProps, ReactNode } from 'react'

import { cn, focusRing } from './utils'

/**
 * Buttons of the administration: 44 px high, 16 px text, icon on the left.
 * `outline` is the secondary button of the designs; the page's single main
 * action is the `Cta` pill below.
 */
export const buttonVariants = cva(
  [
    'tw:inline-flex tw:shrink-0 tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-xs tw:border tw:border-transparent',
    'tw:font-sans tw:text-base tw:font-semibold tw:leading-[1.2] tw:no-underline tw:cursor-pointer',
    'tw:transition-[color,background-color,border-color] tw:duration-180 tw:ease-brand',
    'tw:disabled:cursor-not-allowed tw:disabled:opacity-45 tw:aria-disabled:cursor-not-allowed tw:aria-disabled:opacity-45',
    'tw:[&_svg]:pointer-events-none tw:[&_svg]:shrink-0 tw:[&_svg:not([class*=size-])]:size-[18px]',
    focusRing,
  ],
  {
    variants: {
      variant: {
        default: 'tw:border-forest tw:bg-forest tw:text-on-forest tw:hover:border-forest-deep tw:hover:bg-forest-deep',
        outline: 'tw:border-line-strong tw:bg-card tw:text-ink tw:hover:border-ink tw:hover:bg-surface',
        secondary: 'tw:bg-surface tw:text-ink tw:hover:bg-sage-soft',
        ghost: 'tw:bg-transparent tw:px-3 tw:text-ink tw:hover:bg-surface',
        destructive: 'tw:border-error tw:bg-error tw:text-on-forest tw:hover:brightness-92',
        destructiveGhost: 'tw:bg-transparent tw:px-3 tw:text-error tw:hover:bg-error/9',
        link: 'tw:h-auto tw:min-h-8 tw:border-0 tw:px-0 tw:text-leaf tw:font-[650] tw:underline-offset-3 tw:hover:underline',
      },
      size: {
        default: 'tw:h-11 tw:px-[18px]',
        sm: 'tw:h-9 tw:px-3 tw:text-[15px]',
        lg: 'tw:h-13 tw:px-[22px] tw:text-[17px]',
        icon: 'tw:size-11 tw:px-0',
      },
    },
    compoundVariants: [
      { variant: 'ghost', size: 'default', className: 'tw:px-3' },
      { variant: 'link', className: 'tw:h-auto tw:px-0' },
    ],
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

const ctaVariants = cva(
  [
    'tw:group tw:inline-flex tw:shrink-0 tw:items-center tw:justify-center tw:gap-3 tw:whitespace-nowrap tw:rounded-full tw:border-0 tw:bg-forest tw:text-on-forest',
    'tw:font-sans tw:font-semibold tw:leading-[1.2] tw:no-underline tw:cursor-pointer tw:transition-colors tw:duration-180 tw:ease-brand tw:hover:bg-forest-deep',
    'tw:disabled:cursor-not-allowed tw:disabled:opacity-45 tw:aria-disabled:cursor-not-allowed tw:aria-disabled:opacity-45',
    focusRing,
  ],
  {
    variants: {
      size: {
        default: 'tw:h-11 tw:pr-[7px] tw:pl-5 tw:text-base',
        lg: 'tw:h-13 tw:pr-2 tw:pl-6 tw:text-[17px]',
      },
      block: { true: 'tw:w-full tw:justify-between', false: '' },
    },
    defaultVariants: { size: 'default', block: false },
  },
)

type CtaOwnProps = VariantProps<typeof ctaVariants> & {
  /** Icon in the sage disc: an arrow unless told otherwise (check, plus, phone…). */
  icon?: ReactNode
  loading?: boolean
  children: ReactNode
  className?: string
}

type CtaProps = CtaOwnProps &
  (
    | ({ href: string; external?: boolean } & Omit<ComponentProps<'a'>, 'href' | 'children' | 'className'>)
    | ({ href?: undefined; external?: undefined } & Omit<ComponentProps<'button'>, 'children' | 'className'>)
  )

/**
 * The page's main action: the forest pill of the site, with the sage disc
 * and its arrow. One per screen.
 */
export function Cta({ size, block, icon, loading = false, children, className, ...rest }: CtaProps) {
  const classes = cn(ctaVariants({ size, block }), className)
  const disc = (
    <span
      aria-hidden="true"
      className={cn(
        'tw:grid tw:shrink-0 tw:place-items-center tw:rounded-full tw:bg-[var(--cta-disc-bg)] tw:text-[var(--cta-disc-fg)] tw:transition-transform tw:duration-320 tw:ease-brand tw:group-hover:translate-x-0.5',
        size === 'lg' ? 'tw:size-9' : 'tw:size-[30px]',
        'tw:[&_svg]:size-4 tw:[&_svg]:stroke-[2.2]',
      )}
    >
      {loading ? <LoaderCircle className="tw:animate-spin" /> : (icon ?? <ArrowRight />)}
    </span>
  )
  if (rest.href !== undefined) {
    const { href, external, ...anchor } = rest
    if (/^(tel|mailto):/.test(href)) {
      return (
        <a href={href} className={classes} {...anchor}>
          <span>{children}</span>
          {disc}
        </a>
      )
    }
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchor}>
          <span>{children}</span>
          {disc}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...anchor}>
        <span>{children}</span>
        {disc}
      </Link>
    )
  }
  const { external: _external, href: _href, type = 'button', disabled, ...button } = rest
  return (
    <button type={type} className={classes} disabled={disabled || loading} aria-busy={loading || undefined} {...button}>
      <span>{children}</span>
      {disc}
    </button>
  )
}
