import type { Metadata } from 'next'

import { RenderBlocks, type LayoutBlock } from '@/components/blocks/RenderBlocks'
import { CmsLink, ButtonGroup } from '@/components/ui/CmsLink'
import { getPayloadClient } from '@/lib/cms/client'
import { getCompany, getSiteTexts } from '@/lib/cms/queries'
import { pathFor } from '@/payload/utilities/routes'

import styles from './styleguide.module.css'

export const metadata: Metadata = {
  title: 'Planche des composants',
  robots: { index: false, follow: false },
}

export const revalidate = 3600

const COLORS: { token: string; role: string }[] = [
  { token: '--c-cream', role: 'Fond des pages' },
  { token: '--c-surface', role: 'Sections claires' },
  { token: '--c-card', role: 'Cartes' },
  { token: '--c-ink', role: 'Texte' },
  { token: '--c-stone-text', role: 'Texte secondaire (AA)' },
  { token: '--c-forest', role: 'Boutons, bandeaux' },
  { token: '--c-forest-deep', role: 'Survol forêt' },
  { token: '--c-accent', role: 'Mots en vert' },
  { token: '--c-sage', role: 'Pastilles, disques' },
  { token: '--c-sage-soft', role: 'Teinte sauge' },
  { token: '--c-night', role: 'Pied de page, panneaux sombres' },
  { token: '--c-error', role: 'Erreurs' },
]

const BLOCK_NAMES: Record<LayoutBlock['blockType'], string> = {
  textImage: 'Texte et photo',
  cards: 'Cartes',
  servicesGrid: 'Prestations',
  projects: 'Chantiers',
  projectsExplorer: 'Explorateur des réalisations',
  steps: 'Étapes',
  list: 'Liste',
  faq: 'Questions fréquentes',
  cta: 'Appel à l’action',
  manifesto: 'Manifeste',
  spotlight: 'Mise en avant',
  gallery: 'Galerie',
  comparisonTable: 'Tableau comparatif',
  quote: 'Citation',
  proofs: 'Preuves et labels',
  serviceArea: 'Zone d’intervention',
  team: 'Équipe',
  reviews: 'Avis clients',
  articles: 'Guides conseils',
  contactForm: 'Formulaire de contact',
  richText: 'Texte libre',
}

type Source = { label: string; path: string; layout?: LayoutBlock[] | null }

/** A block's look depends on its variant: one example of each, taken from the real pages. */
const variantOf = (block: LayoutBlock) => {
  const b = block as unknown as Record<string, unknown>
  return [b.variant, b.layout, b.style, b.display].filter((value) => typeof value === 'string').join(' · ')
}

async function examples() {
  const payload = await getPayloadClient()
  const query = { depth: 2, limit: 100, pagination: false, draft: false } as const
  const [pages, services, articles] = await Promise.all([
    payload.find({ collection: 'pages', ...query, sort: 'path' }),
    payload.find({ collection: 'services', ...query, sort: 'order' }),
    payload.find({ collection: 'articles', ...query }),
  ])
  const sources: Source[] = [
    ...pages.docs.map((doc) => ({ label: doc.title, path: pathFor('pages', doc) ?? '/', layout: doc.layout as LayoutBlock[] })),
    ...services.docs.map((doc) => ({ label: doc.title, path: pathFor('services', doc) ?? '/', layout: doc.layout as LayoutBlock[] })),
    ...articles.docs.map((doc) => ({ label: doc.title.replace(/\*\*/g, ''), path: pathFor('articles', doc) ?? '/', layout: doc.layout as LayoutBlock[] })),
  ]
  const seen = new Map<string, { block: LayoutBlock; source: Source; variant: string }>()
  for (const source of sources) {
    for (const block of source.layout ?? []) {
      const variant = variantOf(block)
      const key = `${block.blockType}|${variant}`
      if (!seen.has(key)) seen.set(key, { block, source, variant })
    }
  }
  const order = Object.keys(BLOCK_NAMES) as LayoutBlock['blockType'][]
  return order.map((type) => ({
    type,
    name: BLOCK_NAMES[type],
    items: [...seen.values()].filter((item) => item.block.blockType === type),
  }))
}

/**
 * Component board (kit, deliverable 2): tokens, type scale, buttons, then
 * every block in each of its variants, rendered from the real content.
 * Not indexed, not in the sitemap.
 */
export default async function StyleguidePage() {
  const [company, texts, groups] = await Promise.all([getCompany(), getSiteTexts(), examples()])
  const used = groups.filter((group) => group.items.length)
  const unused = groups.filter((group) => !group.items.length)

  return (
    <>
      <header className={`container ${styles.intro}`}>
        <p className="kicker">Planche des composants</p>
        <h1>Le design « Atelier alpin », pièce par pièce</h1>
        <p className={styles.lead}>
          Les jetons de couleur, la typographie, les boutons, puis chaque bloc du constructeur de pages dans chacune de ses variantes, avec le contenu réel du site. Page
          réservée à l’équipe : elle n’est pas indexée.
        </p>
        <nav aria-label="Blocs" className={styles.toc}>
          <a href="#couleurs">Couleurs</a>
          <a href="#typographie">Typographie</a>
          <a href="#boutons">Boutons</a>
          {used.map((group) => (
            <a key={group.type} href={`#bloc-${group.type}`}>
              {group.name}
            </a>
          ))}
        </nav>
      </header>

      <section id="couleurs" className={`container ${styles.block}`}>
        <h2 className={styles.label}>Couleurs</h2>
        <ul className={styles.swatches}>
          {COLORS.map((color) => (
            <li key={color.token}>
              <span className={styles.swatch} style={{ background: `var(${color.token})` }} />
              <code>{color.token}</code>
              <span>{color.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="typographie" className={`container ${styles.block}`}>
        <h2 className={styles.label}>Typographie : Nohemi (titres) et Inter (texte)</h2>
        <div className={styles.type}>
          <p className={styles.display}>
            Charpentiers dans les <span className="accent">Hautes-Alpes</span>
          </p>
          <p className={styles.h1}>Titre de page (H1)</p>
          <p className={styles.h2}>Titre de section (H2)</p>
          <p className={styles.h3}>Titre de carte (H3)</p>
          <p className="kicker" data-numbered="">
            Surtitre numéroté
          </p>
          <p className={styles.leadSample}>Chapeau : une phrase qui pose le sujet, en 20 px.</p>
          <p>Texte courant en 17 px, interligne confortable, 70 caractères par ligne au plus.</p>
          <p className={styles.small}>Texte secondaire, 15 px, couleur pierre (contraste AA).</p>
        </div>
      </section>

      <section id="boutons" className={`container ${styles.block}`}>
        <h2 className={styles.label}>Boutons</h2>
        <ButtonGroup>
          <CmsLink link={{ href: '/contact/', label: 'Demander mon devis', external: false, kind: 'internal' }} variant="primary" arrow />
          <CmsLink link={{ href: '/realisations/', label: 'Nos réalisations', external: false, kind: 'internal' }} variant="outline" arrow />
          <CmsLink link={{ href: '/3b-recup/', label: '3B Récup’', external: false, kind: 'internal' }} variant="sage" arrow />
        </ButtonGroup>
        <div className={styles.dark}>
          <ButtonGroup>
            <CmsLink link={{ href: '/contact/', label: 'Sur fond sombre', external: false, kind: 'internal' }} variant="light" arrow />
            <CmsLink link={{ href: '/contact/', label: 'Contour clair', external: false, kind: 'internal' }} variant="outlineLight" arrow />
          </ButtonGroup>
        </div>
      </section>

      {used.map((group) => (
        <div key={group.type} id={`bloc-${group.type}`} className={styles.group}>
          {group.items.map(({ block, source, variant }, index) => (
            <div key={`${group.type}-${index}`}>
              <p className={`container ${styles.caption}`}>
                <strong>{group.name}</strong>
                {variant ? <span> · variante {variant}</span> : null}
                <span>
                  {' '}
                  · tiré de <a href={source.path}>{source.label}</a>
                </span>
              </p>
              <RenderBlocks blocks={[block]} context={{ company, texts, path: source.path }} />
            </div>
          ))}
        </div>
      ))}

      {unused.length ? (
        <section className={`container ${styles.block}`}>
          <h2 className={styles.label}>Blocs disponibles, pas encore utilisés</h2>
          <p>{unused.map((group) => group.name).join(' · ')}</p>
        </section>
      ) : null}
    </>
  )
}
