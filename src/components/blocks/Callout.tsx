import { CmsLink } from '@/components/ui/CmsLink'
import { Icon, type AnyIconName } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { CalloutBlock as Data } from '@/payload-types'

import styles from './Callout.module.css'
import type { BlockProps } from './types'

const KINDS: Record<NonNullable<Data['kind']>, { icon: AnyIconName; title: string }> = {
  tip: { icon: 'bulb', title: 'Bon à savoir' },
  site: { icon: 'house', title: 'Sur nos chantiers' },
  definition: { icon: 'document', title: 'Définition' },
  aid: { icon: 'medal', title: 'Aides et qualification' },
}

/** A short aside (two sentences): a tip, a chantier, a definition, the aids. */
export function Callout({ block, context }: BlockProps<Data>) {
  const kind = KINDS[block.kind ?? 'tip']
  const link = resolveLink(block.link, context.company)
  return (
    <Section tone={block.tone} anchor={block.anchor} spacing="tight">
      <aside className={styles.note} data-kind={block.kind ?? 'tip'} data-reveal="">
        <span className={styles.icon}>
          <Icon name={kind.icon} size={22} />
        </span>
        <div className={styles.body}>
          <p className={styles.title}>{block.title || kind.title}</p>
          <RichText data={block.text} className={styles.text} />
          {link ? (
            <CmsLink link={link} className={styles.link} arrow>
              {link.label}
            </CmsLink>
          ) : null}
        </div>
      </aside>
    </Section>
  )
}
