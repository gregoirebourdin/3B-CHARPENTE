import Image from 'next/image'
import Link from 'next/link'

import ecoArtisan from '@/assets/brand/badge-rge-eco-artisan.png'
import qualibat from '@/assets/brand/badge-qualibat-rge.png'

import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { getArticles, getCompany, getFooter, getServices } from '@/lib/cms/queries'
import { groupedHours, upcomingClosures } from '@/lib/hours'
import { phoneToE164, resolveLink, type ResolvedLink } from '@/lib/links'
import { pathFor } from '@/payload/utilities/routes'

import { Logo } from './Logo'
import styles from './SiteFooter.module.css'

export async function SiteFooter() {
  const [footer, company, services, articles] = await Promise.all([getFooter(), getCompany(), getServices(), getArticles()])

  const columns = (footer.columns ?? []).map((column) => {
    let links: ResolvedLink[] = []
    if (column.source === 'services') {
      links = services.map((service) => ({
        href: pathFor('services', service) ?? '/',
        label: service.menuLabel || service.title,
        external: false,
        kind: 'internal' as const,
      }))
    } else if (column.source === 'articles') {
      links = articles.map((article) => ({
        href: pathFor('articles', article) ?? '/',
        label: article.menuLabel || article.title.replace(/\*\*/g, ''),
        external: false,
        kind: 'internal' as const,
      }))
    } else {
      links = (column.links ?? []).map((item) => resolveLink(item.link, company)).filter((link): link is ResolvedLink => Boolean(link))
    }
    return { title: column.title, links }
  })

  const legal = (footer.legalLinks ?? []).map((item) => resolveLink(item.link, company)).filter(Boolean) as ResolvedLink[]
  const hours = groupedHours(company.hours)
  const closures = upcomingClosures(company.closures)
  const year = new Date().getFullYear()
  const { address } = company

  return (
    <footer role="contentinfo" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" aria-label={`${company.name}, accueil`} className={styles.logo}>
              <Logo height={96} />
            </Link>
            {footer.tagline ? <p className={styles.tagline}>{footer.tagline}</p> : null}
            {company.rge?.label ? (
              <a
                href={company.rge.directoryUrl || undefined}
                target={company.rge.directoryUrl ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.badges}
                aria-label={`${company.rge.label} : vérifier dans l’annuaire officiel (nouvel onglet)`}
              >
                <Image src={qualibat} alt="Qualibat RGE" height={64} sizes="54px" />
                <Image src={ecoArtisan} alt="RGE Eco Artisan" height={52} sizes="82px" />
              </a>
            ) : null}
          </div>

          <div className={styles.columns}>
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className={styles.column}>
                <h2 className={styles.columnTitle}>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <CmsLink link={link} className="link-underline" />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.contact} itemScope itemType="https://schema.org/PostalAddress">
          <div className={styles.contactItem}>
            <Icon name="mapPin" size={22} />
            <p>
              <strong>{company.name}</strong>
              <br />
              <span itemProp="streetAddress">{address.street}</span>,{' '}
              <span itemProp="postalCode">{address.postalCode}</span> <span itemProp="addressLocality">{address.city}</span>
            </p>
          </div>
          <div className={styles.contactItem}>
            <Icon name="phone" size={22} />
            <p>
              <a href={`tel:${phoneToE164(company.phone)}`} data-track="Clic téléphone" className={styles.strongLink}>
                {company.phone}
              </a>
              <br />
              <a href={`mailto:${company.email}`} data-track="Clic e-mail" className="link-underline">
                {company.email}
              </a>
            </p>
          </div>
          <div className={styles.contactItem}>
            <Icon name="clock" size={22} />
            <div>
              <dl className={styles.hours}>
                {hours.map((group) => (
                  <div key={group.days}>
                    <dt>{group.days}</dt>
                    <dd>{group.hours}</dd>
                  </div>
                ))}
              </dl>
              {closures.map((closure) => (
                <p key={closure.text} className={styles.closure}>
                  {closure.label} {closure.text}
                </p>
              ))}
              {company.hoursNote ? <p className={styles.closure}>{company.hoursNote}</p> : null}
            </div>
          </div>
        </div>

        {company.googleReviewUrl ? (
          <p className={styles.review}>
            Vous avez travaillé avec nous ?{' '}
            <a href={company.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
              Laissez un avis sur Google
            </a>
          </p>
        ) : null}

        <div className={styles.bottom}>
          <p>
            © {year} {company.name}
            {company.rge?.label ? <> · {company.rge.label}</> : null}
          </p>
          <ul className={styles.legal}>
            {legal.map((link) => (
              <li key={link.href}>
                <CmsLink link={link} className="link-underline" />
              </li>
            ))}
            {company.facebook ? (
              <li>
                <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="link-underline">
                  Facebook<span className="visually-hidden"> (nouvel onglet)</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </footer>
  )
}
