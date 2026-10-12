import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { getCompany, getHeader } from '@/lib/cms/queries'
import { phoneToE164, resolveLink } from '@/lib/links'

import styles from './CallBar.module.css'

/**
 * Phones and tablets: « Appeler » and the quote button stay at the bottom of
 * the screen, under the thumb. Hidden on wide screens, where the header shows both.
 */
export async function CallBar() {
  const [header, company] = await Promise.all([getHeader(), getCompany()])
  const cta = resolveLink(header.cta, company)
  return (
    <div className={styles.bar}>
      <a href={`tel:${phoneToE164(company.phone)}`} className={styles.call} data-track="Clic téléphone" aria-label={`Appeler le ${company.phone}`}>
        <Icon name="phone" size={18} />
        Appeler
      </a>
      <CmsLink link={cta} variant="primary" className={styles.cta} />
    </div>
  )
}
