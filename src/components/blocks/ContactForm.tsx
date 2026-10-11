import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RichText } from '@/components/rich-text/RichText'
import { HAUTES_ALPES_COMMUNES } from '@/data/communes-hautes-alpes'
import { getCommunes } from '@/lib/cms/queries'
import { toFieldDefs } from '@/lib/forms/schema'
import { blobEnabled } from '@/payload/storage/blobAuth'
import { groupedHours } from '@/lib/hours'
import { phoneToE164, template } from '@/lib/links'
import type { ContactFormBlock as Data, Form } from '@/payload-types'

import { ContactFormClient } from './ContactFormClient'
import styles from './ContactForm.module.css'
import type { BlockProps } from './types'

export async function ContactForm({ block, context }: BlockProps<Data>) {
  const form = typeof block.form === 'object' ? (block.form as Form & Record<string, unknown>) : null
  if (!form) return null
  const { company, texts } = context
  const communes = await getCommunes()
  // Our chantier communes first, then every commune of the Hautes-Alpes.
  const suggestions = Array.from(
    new Set([...communes.filter((c) => c.inAreaServed).map((c) => c.name.replace('’', "'")), ...HAUTES_ALPES_COMMUNES]),
  )

  return (
    <Section anchor={block.anchor || 'formulaire'} tone="cream">
      <div className={block.showCompanyInfo ? styles.grid : undefined}>
        <div className={styles.card}>
          <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} className={styles.heading} />
          <ContactFormClient
            formId={form.id}
            fields={toFieldDefs(form)}
            submitLabel={form.submitButtonLabel || 'Envoyer'}
            successTitle={(form.successTitle as string | null) ?? ''}
            success={<RichText data={form.confirmationMessage} />}
            failure={<RichText data={form.errorMessage} />}
            privacy={block.privacyNotice ? <RichText data={block.privacyNotice} /> : null}
            communes={suggestions}
            uploadsEnabled={blobEnabled()}
            texts={{
              ...texts.form,
              // Not repeated when the introduction above the form already says it.
              requiredNote: /astérisque/i.test(block.intro ?? '') ? '' : texts.form.requiredNote,
              tooMany: template(texts.form.tooMany, { telephone: company.phone }),
            }}
          />
        </div>
        {block.showCompanyInfo ? (
          <aside className={styles.aside} aria-label={texts.form.contactTitle}>
            <h2 className={styles.asideTitle}>{texts.form.contactTitle}</h2>
            <ul className={styles.contactList}>
              <li>
                <Icon name="phone" size={22} />
                <a href={`tel:${phoneToE164(company.phone)}`} data-track="Clic téléphone" className={styles.phone}>
                  {company.phone}
                </a>
              </li>
              <li>
                <Icon name="mail" size={22} />
                <a href={`mailto:${company.email}`} data-track="Clic e-mail">
                  {company.email}
                </a>
              </li>
              <li>
                <Icon name="mapPin" size={22} />
                <span>
                  {company.name}
                  <br />
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </span>
              </li>
            </ul>
            <h3 className={styles.hoursTitle}>{texts.form.hoursTitle}</h3>
            <dl className={styles.hours}>
              {groupedHours(company.hours).map((group) => (
                <div key={group.days}>
                  <dt>{group.days}</dt>
                  <dd>{group.hours}</dd>
                </div>
              ))}
            </dl>
            {company.hoursNote ? <p className={styles.note}>{company.hoursNote}</p> : null}
            {company.facebook ? (
              <a href={company.facebook} target="_blank" rel="noopener noreferrer" className={`${styles.facebook} link-underline`}>
                Facebook<span className="visually-hidden"> (nouvel onglet)</span>
              </a>
            ) : null}
          </aside>
        ) : null}
      </div>
    </Section>
  )
}
