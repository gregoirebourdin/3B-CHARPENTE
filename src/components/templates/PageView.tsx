import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import type { BlockContext } from '@/components/blocks/types'
import { JsonLd } from '@/lib/seo/JsonLd'
import { pageCrumbs } from '@/lib/cms/breadcrumbs'
import { getArticles, getCompany, getProjects, getSiteTexts } from '@/lib/cms/queries'
import { blocksJsonLd } from '@/lib/seo/blocks'
import { breadcrumbList, graph, itemList, webPage } from '@/lib/seo/jsonld'
import type { Page } from '@/payload-types'
import { HOME_SLUG, pathFor } from '@/payload/utilities/routes'

import { PageHero } from './PageHero'
import { Tldr } from './Tldr'

/** Home, 3B Récup', sector pages, about, contact, legal notice, listings. */
export async function PageView({ page }: { page: Page }) {
  const [company, texts] = await Promise.all([getCompany(), getSiteTexts()])
  const path = pathFor('pages', page) ?? '/'
  const isHome = page.path === HOME_SLUG
  const crumbs = isHome ? [] : await pageCrumbs(page)
  const context: BlockContext = { company, texts, path }

  // Listing pages expose their items to search engines.
  let list = null
  if (page.path === 'realisations') {
    const projects = await getProjects()
    list = itemList(page.title, path, projects.map((p) => ({ name: p.title, path: pathFor('projects', p) ?? '/' })))
  } else if (page.path === 'conseils') {
    const articles = await getArticles()
    list = itemList(page.title, path, articles.map((a) => ({ name: a.title, path: pathFor('articles', a) ?? '/' })))
  }

  const isRecup = page.path === '3b-recup' || page.path?.startsWith('3b-recup/')

  return (
    <div data-section={isRecup ? 'recup' : undefined}>
      <PageHero hero={page.hero} company={company} breadcrumbs={isHome ? undefined : crumbs} />
      <Tldr text={page.tldr} variant={isHome ? 'card' : 'band'} label={texts.general.tldrLabel} />
      <RenderBlocks blocks={page.layout} context={context} />
      <JsonLd
        data={graph([
          webPage(path, page.hero.title, page.meta?.description, list ? 'CollectionPage' : isHome ? 'WebPage' : 'WebPage'),
          isHome ? null : breadcrumbList(crumbs),
          list,
          ...blocksJsonLd(page.layout, path),
        ])}
      />
    </div>
  )
}
