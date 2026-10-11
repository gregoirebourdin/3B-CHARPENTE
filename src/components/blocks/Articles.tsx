import Link from 'next/link'

import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getArticles } from '@/lib/cms/queries'
import { resolveLink, starTitle } from '@/lib/links'
import type { Article, ArticlesBlock as Data } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import styles from './Articles.module.css'
import type { BlockProps } from './types'

export async function Articles({ block, context }: BlockProps<Data>) {
  const all = await getArticles()
  const articles =
    block.mode === 'manual'
      ? (block.articles ?? [])
          .map((item) => all.find((article) => article.id === (typeof item === 'object' ? item.id : item)))
          .filter((article): article is Article => Boolean(article))
      : all
  if (!articles.length) return null
  const cta = resolveLink(block.cta, context.company)

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <ul className={styles.grid}>
        {articles.map((article, index) => (
          <li key={article.id} className={styles.card} data-reveal="" style={{ ['--reveal-delay' as string]: `${(index % 2) * 90}ms` }}>
            <div className={styles.media}>
              <Media media={article.image} sizes="(min-width: 900px) 560px, 92vw" />
              {article.topic ? <span className={styles.topic}>{article.topic}</span> : null}
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>
                <Link href={pathFor('articles', article) ?? '/conseils/'} className={styles.stretched}>
                  {starTitle(article.title).title}
                </Link>
              </h3>
              <p className={styles.summary}>{article.cardSummary || article.excerpt}</p>
              <span className={styles.more} aria-hidden="true">
                {context.texts.general.articleCardLink}
                <Icon name="arrowRight" size={16} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {cta ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="outline" arrow />
        </div>
      ) : null}
    </Section>
  )
}
