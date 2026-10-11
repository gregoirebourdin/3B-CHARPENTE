import { ChevronRight, Info } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

import { cn } from './utils'

/** Work area of every custom screen: cream background, centred, 1 120 px at most. */
export function Page({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'tb-ui tw:mx-auto tw:grid tw:w-full tw:max-w-[1216px] tw:gap-7 tw:px-12 tw:pt-9 tw:pb-18 tw:font-sans tw:text-base tw:text-ink tw:[&>*]:min-w-0',
        'tw:max-desk:gap-6 tw:max-desk:px-4 tw:max-desk:pt-6 tw:max-desk:pb-12',
        className,
      )}
      {...props}
    />
  )
}

export type Crumb = { label: string; href?: string }

/** Breadcrumb above the title: 14 px, current page in bold. */
export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="tw:mb-0.5">
      <ol className="tw:m-0 tw:flex tw:list-none tw:flex-wrap tw:items-center tw:gap-1.5 tw:p-0 tw:text-sm tw:text-stone-text">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="tw:flex tw:items-center tw:gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="tw:inline-flex tw:min-h-6 tw:items-center tw:text-inherit tw:no-underline tw:hover:text-ink tw:hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={cn(last && 'tw:font-semibold tw:text-ink')}>
                  {item.label}
                </span>
              )}
              {!last ? <ChevronRight aria-hidden="true" className="tw:size-3.5" /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Title of the screen (Nohemi 32 px), one sentence under it, the actions on the right (main pill last). */
export function PageHeader({
  title,
  description,
  actions,
  eyebrow,
  crumbs,
  status,
}: {
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  eyebrow?: ReactNode
  crumbs?: Crumb[]
  status?: ReactNode
}) {
  return (
    <header className="tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-x-6 tw:gap-y-4 tw:max-desk:items-stretch">
      <div className="tw:grid tw:min-w-0 tw:max-w-[760px] tw:gap-2">
        {crumbs?.length ? <Crumbs items={crumbs} /> : null}
        {eyebrow ? <p className="tw:m-0 tw:inline-flex tw:items-center tw:gap-2 tw:text-sm tw:font-medium tw:text-stone-text tw:[&_svg]:size-4">{eyebrow}</p> : null}
        <h1 className="tw:m-0 tw:font-heading tw:text-[32px] tw:font-bold tw:leading-[1.1] tw:tracking-[-0.022em] tw:text-balance tw:text-ink tw:max-desk:text-[28px]">{title}</h1>
        {description ? <p className="tw:m-0 tw:text-base tw:text-stone-text tw:[&_strong]:text-ink">{description}</p> : null}
        {status ? <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-2">{status}</div> : null}
      </div>
      {actions ? <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3 tw:max-desk:w-full tw:max-desk:[&>*]:flex-auto">{actions}</div> : null}
    </header>
  )
}

/** A titled group of content on a screen. */
export function Section({
  title,
  description,
  action,
  children,
  className,
  headingId,
}: {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
  headingId?: string
}) {
  return (
    <section aria-labelledby={headingId} className={cn('tw:grid tw:gap-4', className)}>
      <div className="tw:flex tw:flex-wrap tw:items-baseline tw:justify-between tw:gap-x-4 tw:gap-y-2">
        <div className="tw:grid tw:gap-1">
          <h2 id={headingId} className="tw:m-0 tw:font-heading tw:text-[22px] tw:font-semibold tw:leading-[1.2] tw:tracking-[-0.012em]">
            {title}
          </h2>
          {description ? <p className="tw:m-0 tw:text-[15px] tw:text-stone-text">{description}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

/** Round icon pastille: sage-soft (default) or sage, 44 or 56 px. */
export function Disc({ children, tone = 'soft', size = 'md', className }: { children: ReactNode; tone?: 'soft' | 'sage'; size?: 'md' | 'lg'; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'tw:grid tw:shrink-0 tw:place-items-center tw:rounded-full',
        tone === 'sage' ? 'tw:bg-sage tw:text-on-sage' : 'tw:bg-sage-soft tw:text-leaf',
        size === 'lg' ? 'tw:size-14 tw:[&_svg]:size-[26px]' : 'tw:size-11 tw:[&_svg]:size-5',
        'tw:[&_svg]:stroke-[1.8]',
        className,
      )}
    >
      {children}
    </span>
  )
}

/**
 * Friendly empty state: a round of contour lines with the subject's icon,
 * one sentence, one action.
 */
export function EmptyState({ icon, title, text, meta, action }: { icon?: ReactNode; title: ReactNode; text?: ReactNode; meta?: ReactNode; action?: ReactNode }) {
  return (
    <div className="tw:grid tw:justify-items-center tw:gap-2.5 tw:px-6 tw:py-10 tw:text-center">
      {icon ? (
        <span className="tw:relative tw:mb-1.5 tw:grid tw:size-[132px] tw:place-items-center">
          <span aria-hidden="true" className="tb-topo-disc tw:absolute tw:inset-0 tw:rounded-full" />
          <span aria-hidden="true" className="tw:absolute tw:inset-0 tw:rounded-full tw:border tw:border-line" />
          <Disc tone="sage" size="lg" className="tw:relative">
            {icon}
          </Disc>
        </span>
      ) : null}
      <p className="tw:m-0 tw:font-heading tw:text-[22px] tw:font-semibold tw:leading-[1.25]">{title}</p>
      {text ? <p className="tw:m-0 tw:max-w-md tw:text-base">{text}</p> : null}
      {meta ? <p className="tw:m-0 tw:max-w-md tw:text-sm tw:text-stone-text">{meta}</p> : null}
      {action ? <div className="tw:mt-2">{action}</div> : null}
    </div>
  )
}

/** Information box: sage-soft background, info icon, the start in bold. */
export function Alert({ children, icon, className }: { children: ReactNode; icon?: ReactNode; className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        'tw:flex tw:items-start tw:gap-3.5 tw:rounded-md tw:border tw:border-[color-mix(in_srgb,var(--c-accent)_26%,transparent)] tw:bg-sage-soft tw:px-5 tw:py-4 tw:text-base tw:text-ink',
        className,
      )}
    >
      <span aria-hidden="true" className="tw:mt-0.5 tw:text-leaf tw:[&_svg]:size-5">
        {icon ?? <Info />}
      </span>
      <div className="tw:min-w-0 tw:[&_p]:m-0">{children}</div>
    </div>
  )
}

/** Text link in the accent green (« Voir tout », « Modifier »). */
export function TextLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'tw:inline-flex tw:min-h-8 tw:items-center tw:gap-1.5 tw:font-[650] tw:text-leaf tw:no-underline tw:underline-offset-3 tw:hover:underline tw:[&_svg]:size-4',
        className,
      )}
      {...props}
    />
  )
}
