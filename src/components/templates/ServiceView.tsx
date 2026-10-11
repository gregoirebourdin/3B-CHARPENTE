import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import type { BlockContext } from '@/components/blocks/types'
import { serviceCrumbs } from '@/lib/cms/breadcrumbs'
import { getCommunes, getCompany, getProofs, getSiteTexts } from '@/lib/cms/queries'
import { template } from '@/lib/links'
import { blocksJsonLd } from '@/lib/seo/blocks'
import { JsonLd } from '@/lib/seo/JsonLd'
import { breadcrumbList, graph, serviceSchema, webPage } from '@/lib/seo/jsonld'
import type { Service } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import { PageHero } from './PageHero'
import { Tldr } from './Tldr'

/**
 * The 9 service pages: hero (the site-wide proofs join the page's own as
 * pills, the « fiche d'atelier » is pinned on the photo), "En bref", then the
 * sections.
 */
export async function ServiceView({ service }: { service: Service }) {
  const [company, texts, communes, proofs] = await Promise.all([getCompany(), getSiteTexts(), getCommunes(), getProofs()])
  const path = pathFor('services', service) ?? '/'
  const crumbs = await serviceCrumbs(service)
  const context: BlockContext = { company, texts, path }
  const extraProofs = (proofs.items ?? []).map((item) => ({ label: item.label, icon: item.icon ?? 'check' }))

  return (
    <>
      <PageHero
        hero={service.hero}
        company={company}
        breadcrumbs={crumbs}
        extraProofs={extraProofs}
        sheet={{
          label: texts.general.heroSheetLabel,
          number: typeof service.order === 'number' ? template(texts.general.heroSheetNumber, { n: String(service.order).padStart(2, '0') }) : undefined,
          title: service.title,
        }}
      />
      <Tldr text={service.tldr} label={texts.general.tldrLabel} />
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
