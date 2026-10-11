import type { ComponentProps, ReactNode } from 'react'

import { cn } from './utils'

/** The frame of every custom screen: same margins as Payload's views, readable width. */
export function Page({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('tb-ui tw:mx-auto tw:flex tw:w-full tw:max-w-[1180px] tw:flex-col tw:gap-8 tw:px-[var(--gutter-h)] tw:pt-4 tw:pb-16 tw:font-sans tw:text-foreground', className)}
      {...props}
    />
  )
}

/** Title of the screen (Nohemi), one sentence under it, and the main action on the right. */
export function PageHeader({
  title,
  description,
  actions,
  eyebrow,
}: {
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  eyebrow?: ReactNode
}) {
  return (
    <header className="tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-x-6 tw:gap-y-4">
      <div className="tw:flex tw:min-w-0 tw:max-w-2xl tw:flex-col tw:gap-2">
        {eyebrow ? <p className="tw:m-0 tw:text-sm tw:font-semibold tw:text-muted-foreground tw:first-letter:uppercase">{eyebrow}</p> : null}
        <h1 className="tw:m-0 tw:font-heading tw:text-[clamp(1.75rem,1.4rem+1.2vw,2.25rem)] tw:font-bold tw:leading-[1.1] tw:tracking-[-0.02em]">{title}</h1>
        {description ? <p className="tw:m-0 tw:text-base tw:leading-relaxed tw:text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3">{actions}</div> : null}
    </header>
  )
}

/** A titled group of content on a screen. */
export function Section({ title, description, action, children, className }: { title: ReactNode; description?: ReactNode; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={cn('tw:flex tw:flex-col tw:gap-4', className)}>
      <div className="tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-3">
        <div className="tw:flex tw:flex-col tw:gap-1">
          <h2 className="tw:m-0 tw:font-heading tw:text-xl tw:font-semibold tw:tracking-[-0.01em]">{title}</h2>
          {description ? <p className="tw:m-0 tw:text-[15px] tw:text-muted-foreground">{description}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

/** Friendly empty state: an icon, one sentence, an optional action. */
export function EmptyState({ icon, title, text, action }: { icon?: ReactNode; title: ReactNode; text?: ReactNode; action?: ReactNode }) {
  return (
    <div className="tw:flex tw:flex-col tw:items-center tw:gap-3 tw:rounded-xl tw:border tw:border-dashed tw:border-input tw:bg-card/60 tw:px-6 tw:py-10 tw:text-center">
      {icon ? <span className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-accent tw:text-foreground tw:[&_svg]:size-6">{icon}</span> : null}
      <p className="tw:m-0 tw:font-heading tw:text-lg tw:font-semibold">{title}</p>
      {text ? <p className="tw:m-0 tw:max-w-md tw:text-[15px] tw:text-muted-foreground">{text}</p> : null}
      {action}
    </div>
  )
}
