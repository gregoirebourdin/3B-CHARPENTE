import Link from 'next/link'

import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { getCompany, getHeader, getServices, getSiteTexts } from '@/lib/cms/queries'
import { phoneToE164, resolveLink } from '@/lib/links'
import { pathFor } from '@/payload/utilities/routes'

import { Logo } from './Logo'
import { MobileMenu, type MobileNavItem } from './MobileMenu'
import { NavLink } from './NavLink'
import { ServicesMenu } from './ServicesMenu'
import styles from './SiteHeader.module.css'

export async function SiteHeader() {
  const [header, company, services, texts] = await Promise.all([getHeader(), getCompany(), getServices(), getSiteTexts()])

  const serviceLinks = services
    .map((service) => ({
      href: pathFor('services', service) ?? '/',
      label: service.menuLabel || service.title,
      icon: service.icon,
      text: service.cardText,
    }))
    .filter((service) => service.href !== '/')

  const items: MobileNavItem[] = (header.nav ?? []).flatMap((item): MobileNavItem[] => {
    if (item.kind === 'services') return [{ kind: 'services', label: item.label, children: serviceLinks }]
    const link = resolveLink({ ...item.link, label: item.label }, company)
    return link ? [{ kind: 'link', label: item.label, href: link.href, highlight: Boolean(item.highlight) }] : []
  })

  const cta = resolveLink(header.cta, company)
  const tel = `tel:${phoneToE164(company.phone)}`

  return (
    <header role="banner" className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${company.name}, retour à l’accueil`}>
          <Logo height={60} priority />
        </Link>

        <nav aria-label="Navigation principale" className={styles.nav}>
          <ul className={styles.list}>
            {items.map((item) =>
              item.kind === 'services' ? (
                <li key={item.label} className={styles.item}>
                  <ServicesMenu label={item.label} services={item.children} />
                </li>
              ) : (
                <li key={item.href} className={styles.item}>
                  <NavLink href={item.href} className={item.highlight ? `${styles.link} ${styles.highlight}` : styles.link}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={tel} className={styles.phone} data-track="Clic téléphone">
            <small>{texts.general.headerPhoneLabel}</small>
            {company.phone}
          </a>
          <CmsLink link={cta} variant="primary" size="small" arrow className={styles.cta} />
          <a href={tel} className={styles.call} data-track="Clic téléphone" aria-label={`Appeler le ${company.phone}`}>
            <Icon name="phone" size={20} />
            <span className={styles.callLabel}>Appeler</span>
          </a>
          <MobileMenu items={items} cta={cta ? { href: cta.href, label: cta.label } : null} phone={company.phone} tel={tel} />
        </div>
      </div>
    </header>
  )
}
