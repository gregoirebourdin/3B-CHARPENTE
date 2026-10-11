import type { Metadata } from 'next'

import { ServiceSearch } from '@/components/layout/ServiceSearch'
import { CmsLink, ButtonGroup } from '@/components/ui/CmsLink'
import { getCompany, getServices, getSiteTexts } from '@/lib/cms/queries'
import { phoneToE164, template } from '@/lib/links'
import { pathFor } from '@/payload/utilities/routes'

import styles from './not-found.module.css'

export const metadata: Metadata = { title: 'Page introuvable', robots: { index: false, follow: true } }

/** Useful 404: search the services, call, or go back home. */
export default async function NotFound() {
  const [company, texts, services] = await Promise.all([getCompany(), getSiteTexts(), getServices()])
  const t = texts.notFound
  return (
    <section className={styles.wrap}>
      <div className="container container--narrow">
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.text}>
          {template(t.text, { telephone: '' }).replace(/\s*$/, ' ')}
          <a href={`tel:${phoneToE164(company.phone)}`} data-track="Clic téléphone" className={styles.phone}>
            {company.phone}
          </a>
          .
        </p>
        <ServiceSearch
          label={t.searchLabel}
          placeholder={t.searchPlaceholder}
          services={services.map((service) => ({
            href: pathFor('services', service) ?? '/',
            label: service.title,
            text: service.cardText,
            icon: service.icon,
          }))}
        />
        <ButtonGroup className={styles.actions}>
          <CmsLink link={{ href: '/', label: t.homeLink, external: false, kind: 'internal' }} variant="primary" />
          <CmsLink link={{ href: '/contact/', label: t.contactLink, external: false, kind: 'internal' }} variant="outline" />
        </ButtonGroup>
      </div>
    </section>
  )
}
