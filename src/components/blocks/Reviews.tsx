import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getPublishedReviews } from '@/lib/cms/queries'
import type { ReviewsBlock as Data } from '@/payload-types'

import styles from './Reviews.module.css'
import type { BlockProps } from './types'

const SOURCES: Record<string, string> = { google: 'Google', facebook: 'Facebook', pagesjaunes: 'PagesJaunes', other: '' }

/** Real reviews only. The section does not exist until 3 reviews are published. */
export async function Reviews({ block }: BlockProps<Data>) {
  const reviews = await getPublishedReviews()
  if (reviews.length < 3) return null
  const format = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' })
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <ul className={styles.grid}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.card} data-reveal="">
            <p className={styles.stars} aria-label={`${review.rating} sur 5`}>
              {'★'.repeat(review.rating)}
              <span aria-hidden="true">{'★'.repeat(5 - review.rating)}</span>
            </p>
            <blockquote className={styles.text}>
              <p>{review.text}</p>
            </blockquote>
            <p className={styles.author}>
              <strong>{review.author}</strong>
              {review.commune ? `, ${review.commune}` : ''}
              <span>
                {[SOURCES[review.source ?? 'other'], format.format(new Date(review.date))].filter(Boolean).join(' · ')}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
