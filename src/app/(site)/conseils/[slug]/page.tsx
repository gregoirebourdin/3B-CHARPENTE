import type { Metadata } from 'next'

import { ArticleView } from '@/components/templates/ArticleView'
import { getArticleBySlug, listPublished } from '@/lib/cms/queries'

import { articleMetadata, redirectOrNotFound } from '../../metadata-helpers'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const articles = await listPublished('articles').catch(() => [])
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug((await params).slug)
  return article ? articleMetadata(article) : { robots: { index: false } }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return redirectOrNotFound(`/conseils/${slug}/`)
  return <ArticleView article={article} />
}
