import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import type { BlockContext } from '@/components/blocks/types'
import { serviceCrumbs } from '@/lib/cms/breadcrumbs'
import { getCommunes, getCompany, getSiteTexts } from '@/lib/cms/queries'
import { blocksJsonLd } from '@/lib/seo/blocks'
import { JsonLd } from '@/lib/seo/JsonLd'
import { breadcrumbList, graph, serviceSchema, webPage } from '@/lib/seo/jsonld'
import type { Service } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import { PageHero } from './PageHero'
import { ProofsBar } from './ProofsBar'
import { Tldr } from './Tldr'

/** The 9 service pages: hero, "En bref", proofs reminder, then the sections. */
export async function ServiceView({ service }: { service: Service }) {
  const [company, texts, communes] = await Promise.all([getCompany(), getSiteTexts(), getCommunes()])
  const path = pathFor('services', service) ?? '/'
  const crumbs = await serviceCrumbs(service)
  const context: BlockContext = { company, texts, path }

  return (
    <>
      <PageHero hero={service.hero} company={company} breadcrumbs={crumbs} />
      <Tldr text={service.tldr} label={texts.general.tldrLabel} />
      <ProofsBar variant="compact" />
      <RenderBlocks blocks={service.layout} context={context} />
      <JsonLd
        data={graph([
          webPage(path, service.hero.title, service.meta?.description),
          serviceSchema(service, communes),
          breadcrumbList(crumbs),
          ...blocksJsonLd(service.layout, path),
        ])}
      />
    </>
  )
}
