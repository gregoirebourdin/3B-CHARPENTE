import { RenderBlocks, type LayoutBlock } from '@/components/blocks/RenderBlocks'
import { SectorMap } from '@/components/blocks/SectorMap'
import { projectCommune } from '@/components/blocks/ProjectCard'
import type { BlockContext } from '@/components/blocks/types'
import { JsonLd } from '@/lib/seo/JsonLd'
import { pageCrumbs } from '@/lib/cms/breadcrumbs'
import { getArticles, getCommunes, getCompany, getProjects, getSiteTexts } from '@/lib/cms/queries'
import { template } from '@/lib/links'
import type { LexicalNode, RichTextValue } from '@/lib/richtext'
import { blocksJsonLd } from '@/lib/seo/blocks'
import { breadcrumbList, graph, itemList, webPage } from '@/lib/seo/jsonld'
import type { Page } from '@/payload-types'
import { HOME_SLUG, pathFor } from '@/payload/utilities/routes'

import { DocLayout, type TocEntry } from './DocLayout'
import { PageHero } from './PageHero'
import { Tldr } from './Tldr'

const idOf = (value: unknown) => (value && typeof value === 'object' ? (value as { id: number }).id : (value as number | null))

/** A rich text that is only a list of links to the sections of the page: the editor's table of contents. */
function tocLinks(block: LayoutBlock): TocEntry[] | null {
  if (block.blockType !== 'richText') return null
  const root = (block.content as RichTextValue)?.root
  const links: TocEntry[] = []
  let heading = false
  const walk = (node: LexicalNode) => {
    if (node.type === 'heading') heading = true
    if (node.type === 'link' || node.type === 'autolink') {
      const url = String((node.fields as { url?: string } | undefined)?.url ?? '')
      const label = (node.children ?? []).map((child) => child.text ?? '').join('')
      links.push({ href: url, label })
    }
    node.children?.forEach(walk)
  }
  if (root) walk(root)
  return !heading && links.length >= 3 && links.every((link) => link.href.includes('#')) ? links : null
}

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

  // Sector pages: the map of the sector's communes, and two of its chantiers.
  let map = null
  if (page.hero.variant === 'map') {
    const communes = await getCommunes()
    const focus = communes.filter((commune) => idOf(commune.sector) === page.id).map((commune) => commune.id)
    const projects = focus.length ? await getProjects(JSON.stringify({ commune: { in: focus } }), 2) : []
    map = (
      <SectorMap
        communes={communes}
        focus={focus}
        company={company}
        label={page.hero.title}
        legend={{ here: texts.general.mapHere, other: texts.general.mapOther, scale: texts.general.mapScale }}
        cards={projects.map((project) => ({
          href: pathFor('projects', project) ?? '/realisations/',
          title: project.shortTitle || project.title.replace(/\*\*/g, ''),
          place: project.locality || projectCommune(project)?.name,
          image: project.heroImage,
          communeId: projectCommune(project)?.id,
        }))}
      />
    )
  }

  // A legal notice (or any long text) whose first section is its table of contents: a document to read.
  const blocks = (page.layout ?? []) as LayoutBlock[]
  const tocIndex = blocks.slice(0, 2).findIndex((block) => tocLinks(block))
  const toc = tocIndex >= 0 ? tocLinks(blocks[tocIndex]!) : null
  let docEnd = tocIndex + 1
  while (toc && docEnd < blocks.length && blocks[docEnd]!.blockType === 'richText') docEnd += 1

  return (
    <div data-section={isRecup ? 'recup' : undefined}>
      <PageHero
        hero={page.hero}
        company={company}
        breadcrumbs={isHome ? undefined : crumbs}
        display={isHome}
        highlightLabel={texts.general.heroHighlightLabel}
        highlightLink={texts.general.projectCardLink}
        map={map}
      />
      <Tldr text={page.tldr} variant={isHome ? 'card' : 'band'} label={texts.general.tldrLabel} />
      {toc ? (
        <>
          <RenderBlocks blocks={blocks.slice(0, tocIndex)} context={context} />
          <DocLayout
            id="page"
            tocTitle={texts.article.tocTitle}
            tocCount={template(texts.general.tocCount, { n: toc.length })}
            entries={toc}
          >
            <RenderBlocks blocks={blocks.slice(tocIndex + 1, docEnd)} context={context} />
          </DocLayout>
          <RenderBlocks blocks={blocks.slice(docEnd)} context={context} />
        </>
      ) : (
        <RenderBlocks blocks={page.layout} context={context} />
      )}
      <JsonLd
        data={graph([
          webPage(path, page.hero.title, page.meta?.description, list ? 'CollectionPage' : 'WebPage'),
          isHome ? null : breadcrumbList(crumbs),
          list,
          ...blocksJsonLd(page.layout, path),
        ])}
      />
    </div>
  )
}
