import type { Article, Commune, Company, Faq, Media, Project, SeoSetting, Service } from '@/payload-types'
import { openingHoursSpecification } from '@/lib/hours'
import { phoneToE164 } from '@/lib/links'
import { richTextToPlain } from '@/lib/richtext'
import { isMedia } from '@/components/ui/Media'
import { pathFor } from '@/payload/utilities/routes'

import { absoluteUrl, BUSINESS_ID, FOUNDER_ID, SITE_URL, WEBSITE_ID } from './site'

type Thing = Record<string, unknown>

const imageUrl = (media: number | Media | null | undefined) => (isMedia(media) ? (media.url as string) : undefined)
const clean = (value: string) => value.replace(/\*\*/g, '').trim()

/**
 * The company, declared once for the whole site (same @id everywhere), built
 * from the "Entreprise" settings: details are identical on every page.
 */
export function businessGraph(company: Company, settings: SeoSetting, communes: Commune[]): Thing[] {
  const sameAs = [company.facebook, company.googleBusinessProfile, ...(company.otherProfiles ?? []).map((p) => p.url)].filter(
    Boolean,
  )
  const areaServed = [
    ...(settings.areaServed ?? []).slice(0, 1).map((area) => ({ '@type': 'AdministrativeArea', name: area.name })),
    ...communes.filter((c) => c.inAreaServed).map((c) => ({ '@type': 'City', name: c.name })),
    ...(settings.areaServed ?? []).slice(1).map((area) => ({ '@type': 'AdministrativeArea', name: area.name })),
  ]

  const business: Thing = {
    '@type': ['GeneralContractor', 'RoofingContractor'],
    '@id': BUSINESS_ID,
    name: company.name,
    legalName: company.legalName ? `${company.legalName}${company.legalForm ? ` (${company.legalForm.toLowerCase()})` : ''}` : undefined,
    url: `${SITE_URL}/`,
    logo: absoluteUrl('/brand/logo-3b-charpente-fond-blanc.png'),
    image: imageUrl(settings.defaultImage) ?? absoluteUrl('/brand/logo-3b-charpente-fond-blanc.png'),
    description: company.description ?? undefined,
    telephone: phoneToE164(company.phone),
    email: company.email,
    foundingDate: company.foundingYear ? String(company.foundingYear) : undefined,
    founder: company.founder ? { '@id': FOUNDER_ID } : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressRegion: company.address.region ?? undefined,
      addressCountry: 'FR',
    },
    geo:
      company.geo?.latitude && company.geo?.longitude
        ? { '@type': 'GeoCoordinates', latitude: company.geo.latitude, longitude: company.geo.longitude }
        : undefined,
    openingHoursSpecification: openingHoursSpecification(company.hours),
    areaServed,
    knowsAbout: settings.knowsAbout?.length ? settings.knowsAbout : undefined,
    hasCredential: company.rge?.label
      ? {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: company.rge.label,
          recognizedBy: { '@type': 'Organization', name: 'Qualibat' },
          about: (company.rge.domains ?? []).map((d) => d.label),
        }
      : undefined,
    department: {
      '@type': 'Organization',
      name: '3B Récup’',
      url: absoluteUrl('/3b-recup/'),
      description: 'Initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective.',
    },
    identifier: company.siren ? { '@type': 'PropertyValue', propertyID: 'SIREN', value: company.siren.replace(/\s/g, '') } : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
    priceRange: undefined,
  }

  const founder: Thing | null = company.founder
    ? {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: company.founder,
        jobTitle: company.founderRole ?? undefined,
        worksFor: { '@id': BUSINESS_ID },
        url: absoluteUrl('/a-propos/'),
      }
    : null

  const website: Thing = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: company.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': BUSINESS_ID },
  }

  return [business, website, ...(founder ? [founder] : [])]
}

export function breadcrumbList(items: { name: string; path: string }[]): Thing {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: clean(item.name),
      item: absoluteUrl(item.path),
    })),
  }
}

/** FAQPage from the questions actually displayed (identical text). */
export function faqPage(faqs: Faq[], path: string): Thing | null {
  if (!faqs.length) return null
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function webPage(path: string, name: string, description?: string | null, type = 'WebPage'): Thing {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#page`,
    url: absoluteUrl(path),
    name: clean(name),
    description: description ?? undefined,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
  }
}

export function serviceSchema(service: Service, communes: Commune[]): Thing {
  const path = pathFor('services', service) ?? '/'
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name: service.title,
    serviceType: service.schema?.serviceType ?? service.title,
    description: service.schema?.description ?? service.tldr ?? service.cardText,
    url: absoluteUrl(path),
    image: imageUrl(service.image),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hautes-Alpes' },
      ...communes.filter((c) => c.inAreaServed).map((c) => ({ '@type': 'City', name: c.name })),
    ],
  }
}

export function howTo(name: string, path: string, steps: { title: string; text: unknown }[], description?: string | null): Thing {
  return {
    '@type': 'HowTo',
    '@id': `${absoluteUrl(path)}#methode`,
    name: clean(name),
    description: description ?? undefined,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: richTextToPlain(step.text as never) || step.title,
    })),
  }
}

export function articleSchema(article: Article, path: string, description?: string | null): Thing {
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline: clean(article.title),
    description: description ?? article.excerpt,
    image: imageUrl(article.image) ? [imageUrl(article.image)] : undefined,
    datePublished: article.publishedAt ?? article.createdAt,
    dateModified: article.updatedAt,
    inLanguage: 'fr-FR',
    mainEntityOfPage: absoluteUrl(path),
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
  }
}

export function projectSchema(project: Project, path: string, description?: string | null): Thing {
  const commune = typeof project.commune === 'object' ? project.commune : null
  const mainService = (project.services ?? []).find((s): s is Service => typeof s === 'object')
  return {
    '@type': 'CreativeWork',
    '@id': `${absoluteUrl(path)}#realisation`,
    name: clean(project.title),
    headline: clean(project.title),
    description: description ?? project.summary,
    image: [imageUrl(project.heroImage), ...(project.gallery ?? []).map((item) => imageUrl(item.image))].filter(Boolean).slice(0, 8),
    datePublished: project.publishedAt ?? project.createdAt,
    dateModified: project.updatedAt,
    inLanguage: 'fr-FR',
    url: absoluteUrl(path),
    creator: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
    about: mainService
      ? { '@type': 'Service', name: mainService.title, url: absoluteUrl(pathFor('services', mainService) ?? '/') }
      : undefined,
    contentLocation: commune
      ? {
          '@type': 'Place',
          name: project.locality || commune.name,
          address:
            commune.slug === 'monts-du-lyonnais'
              ? undefined
              : {
                  '@type': 'PostalAddress',
                  addressLocality: commune.name,
                  addressRegion: commune.department ?? 'Hautes-Alpes',
                  addressCountry: 'FR',
                },
        }
      : undefined,
  }
}

export function itemList(name: string, path: string, items: { name: string; path: string }[]): Thing {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl(path)}#liste`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: clean(item.name),
      url: absoluteUrl(item.path),
    })),
  }
}

/** Removes undefined keys (JSON.stringify does it) and wraps in a @graph. */
export function graph(nodes: (Thing | null | undefined | false)[]): Thing {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) }
}
