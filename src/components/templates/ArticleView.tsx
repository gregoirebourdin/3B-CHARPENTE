import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import type { BlockContext } from '@/components/blocks/types'
import { Media, isMedia } from '@/components/ui/Media'
import { homeCrumb, listingCrumb } from '@/lib/cms/breadcrumbs'
import { getCompany, getSiteTexts } from '@/lib/cms/queries'
import { starTitle, template } from '@/lib/links'
import { countWords, extractHeadings, richTextToPlain } from '@/lib/richtext'
import { blocksJsonLd } from '@/lib/seo/blocks'
import { JsonLd } from '@/lib/seo/JsonLd'
import { articleSchema, breadcrumbList, graph, webPage } from '@/lib/seo/jsonld'
import type { Article } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import styles from './ArticleView.module.css'
import { PageHero } from './PageHero'
import { Tldr } from './Tldr'

const dateFormat = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

/** A guide: title, chapô, byline, table of contents (from the H2), sections, FAQ, call to action. */
export async function ArticleView({ article }: { article: Article }) {
  const [company, texts] = await Promise.all([getCompany(), getSiteTexts()])
  const t = texts.article
  const path = pathFor('articles', article) ?? '/conseils/'
  const title = { title: article.title.replace(/\*\*/g, ''), accent: article.titleAccent ?? starTitle(article.title).accent }
  const crumbs = [await homeCrumb(), await listingCrumb('conseils'), { name: title.title, path }]
  const context: BlockContext = { company, texts, path }

  const richBlocks = (article.layout ?? []).filter((block) => block.blockType === 'richText')
  const headings = richBlocks.flatMap((block) => extractHeadings(block.content as never))
  const words = countWords(richBlocks.map((block) => richTextToPlain(block.content as never)).join(' '))
  const minutes = Math.max(1, Math.round(words / 200))
  const published = article.publishedAt ? new Date(article.publishedAt) : null
  const updated = new Date(article.updatedAt)
  const showUpdated = published && updated.getTime() - published.getTime() > 24 * 3600 * 1000

  return (
    <article>
      <PageHero
        hero={{ variant: 'simple', title: title.title, titleAccent: title.accent, kicker: article.topic }}
        company={company}
        breadcrumbs={crumbs}
        lead={<p>{article.excerpt}</p>}
        meta={
          <p className={styles.byline}>
            {template(t.byline, { auteur: article.author ?? company.name })}
            {published ? (
              <>
                {' · '}
                <time dateTime={published.toISOString()}>{template(t.published, { date: dateFormat.format(published) })}</time>
              </>
            ) : null}
            {showUpdated ? (
              <>
                {' · '}
                <time dateTime={updated.toISOString()}>{template(t.updated, { date: dateFormat.format(updated) })}</time>
              </>
            ) : null}
            {' · '}
            {template(t.readingTime, { n: minutes })}
          </p>
        }
      />
      {isMedia(article.image) ? (
        <div className={`container ${styles.cover}`}>
          <Media media={article.image} priority sizes="(min-width: 1000px) 960px, 92vw" quality={82} />
          {article.image.caption ? <p className={styles.caption}>{article.image.caption}</p> : null}
        </div>
      ) : null}
      <Tldr text={article.tldr} label={texts.general.tldrLabel} />
      <div className={`container ${styles.layout}`}>
        {headings.length > 1 ? (
          <nav aria-label={t.tocTitle} className={styles.toc}>
            <p className={styles.tocTitle}>{t.tocTitle}</p>
            <ol>
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`}>{heading.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className={`${styles.body} article-body`}>
          <RenderBlocks blocks={article.layout} context={context} />
        </div>
      </div>
      <JsonLd
        data={graph([
          webPage(path, title.title, article.meta?.description),
          articleSchema(article, path, article.meta?.description),
          breadcrumbList(crumbs),
          ...blocksJsonLd(article.layout, path),
        ])}
      />
    </article>
  )
}
