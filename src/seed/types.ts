/**
 * Format of the initial content, transcribed from 3b-charpente-kit/docs/pages/*.md.
 *
 * Conventions (read before writing a data file):
 * - `Title`: a heading where the words to show in green are wrapped in **…**,
 *   exactly like in the fiches: 'Charpente bois **traditionnelle** dans les **Hautes-Alpes**'.
 * - `Md`: short Markdown. **bold**, *italic*, [link text](/path/) and "- " lists.
 *   Internal links always use the final path with a trailing slash: [3B Récup'](/3b-recup/).
 *   In `richText` blocks only, "## " (H2) and "### " (H3) headings are allowed.
 * - `Photo`: a file of 3b-charpente-kit/photos-chantiers, as "<folder>/<file name>"
 *   with the exact original file name (accents and spaces included), e.g.
 *   'escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG'.
 *   The two mood photos are 'ambiance/foret.png' and 'ambiance/rondins.png'.
 * - `Href`: '/charpente-bois/', '/renovation-charpente-combles/#lucarnes', '/contact/',
 *   'tel' (company phone), 'email' (company e-mail) or an absolute 'https://…' URL.
 * - Labels may contain {telephone} or {email}: replaced by the company details at render
 *   time ("Appeler le {telephone}").
 * - French typography: keep the non-breaking spaces of the fiches before : ; ? ! and inside « ».
 * - Never output "[À VALIDER …]" or "[À COMPLÉTER …]": apply decisions-par-defaut.md and
 *   record the question in `validationPoints`.
 */

import type { IconName } from '../payload/utilities/icons'

export type Md = string
export type Photo = string
export type Href = string
export type Title = string

export type SeedLink = { label: string; href: Href }

export type Tone = 'cream' | 'light'

/** Kicker / title / intro shared by most sections. */
export type SeedHeading = {
  kicker?: string
  title?: Title
  intro?: string
  /** HTML id to link to this section (#realisations). Lowercase and dashes. */
  anchor?: string
  tone?: Tone
}

export type SeedCard = {
  title: string
  icon?: IconName
  letter?: string
  eyebrow?: string
  text?: Md
  image?: Photo
  muted?: boolean
  link?: SeedLink
}

export type SeedBlock =
  | ({
      type: 'textImage'
      text: Md
      images?: Photo[]
      imagePosition?: 'left' | 'right'
      badge?: string
      caption?: string
      twoColumns?: boolean
      links?: SeedLink[]
      cta?: SeedLink
    } & SeedHeading)
  | ({
      type: 'cards'
      variant?: 'icon' | 'letter' | 'photo' | 'numbered' | 'plain'
      columns?: 2 | 3 | 4
      items: SeedCard[]
      asideImage?: Photo
      cta?: SeedLink
    } & SeedHeading)
  | ({
      type: 'servicesGrid'
      mode?: 'all' | 'manual'
      /** Service slugs, in display order (manual mode). */
      services?: string[]
      variant?: 'full' | 'compact'
      cta?: SeedLink
    } & SeedHeading)
  | ({
      type: 'projects'
      mode: 'manual' | 'service' | 'commune' | 'sector' | 'featured'
      /** Manual mode: project slugs with optional card overrides from the fiche. */
      items?: { project: string; title?: string; text?: string; tag?: string }[]
      service?: string
      communes?: string[]
      /** Sector page path, e.g. 'charpentier-briancon'. */
      sector?: string
      limit?: number
      label?: 'commune' | 'brand'
      cta?: SeedLink
    } & SeedHeading)
  | ({
      type: 'projectsExplorer'
      serviceFilterLabel?: string
      communeFilterLabel?: string
      recupFilterLabel?: string
      emptyMessage?: string
      emptyCta?: SeedLink
      groups: (SeedHeading & { links?: SeedLink[]; projects: string[] })[]
    } & Pick<SeedHeading, 'anchor'>)
  | ({
      type: 'steps'
      variant?: 'tabs' | 'timeline'
      isHowTo?: boolean
      steps: { title: string; text: Md; image?: Photo }[]
      cta?: SeedLink
    } & SeedHeading)
  | ({
      type: 'list'
      style?: 'checks' | 'bullets' | 'numbered' | 'pills' | 'definitions'
      inCard?: boolean
      text?: Md
      items: { title?: string; text?: Md; link?: SeedLink }[]
      image?: Photo
      caption?: string
      cta?: SeedLink
    } & SeedHeading)
  | ({
      type: 'faq'
      /** Keys of FAQs declared in `faqs` of this document (or of another document). */
      faqs: string[]
    } & SeedHeading)
  | ({
      type: 'cta'
      variant?: 'band' | 'card' | 'slim'
      badge?: string
      text?: Md
      primary?: SeedLink
      secondary?: SeedLink
      icon?: IconName
      showAddress?: boolean
      image?: Photo
    } & Omit<SeedHeading, 'intro' | 'tone'>)
  | ({
      type: 'manifesto'
      layout?: 'centered' | 'split' | 'columns'
      text?: Md
      items?: { title?: string; text: string }[]
      quote?: { text: string; author?: string }
      emphasis?: string
      image?: Photo
      cta?: SeedLink
    } & Omit<SeedHeading, 'intro' | 'tone'>)
  | ({
      type: 'spotlight'
      badge?: string
      text?: Md
      steps?: { title: string; text: string }[]
      primary?: SeedLink
      links?: SeedLink[]
      images?: Photo[]
    } & Omit<SeedHeading, 'intro' | 'tone'>)
  | ({ type: 'gallery'; images: { image: Photo; caption?: string }[] } & SeedHeading)
  | ({ type: 'comparisonTable'; columns: string[]; rows: string[][]; note?: string } & SeedHeading)
  | { type: 'quote'; text: string; author?: string; role?: string; image?: Photo; tone?: Tone; anchor?: string }
  | { type: 'proofs'; variant?: 'band' | 'compact'; anchor?: string }
  | ({
      type: 'serviceArea'
      text?: Md
      sectors?: { title: string; text?: string; link: SeedLink }[]
      showMap?: boolean
    } & Omit<SeedHeading, 'intro'>)
  | ({ type: 'team' } & SeedHeading)
  | ({ type: 'reviews' } & SeedHeading)
  | ({ type: 'articles'; mode?: 'all' | 'manual'; articles?: string[]; cta?: SeedLink } & SeedHeading)
  | ({ type: 'contactForm'; form: 'contact'; showCompanyInfo?: boolean; privacyNotice?: Md } & SeedHeading)
  | { type: 'richText'; content: Md; showToc?: boolean; boxed?: boolean; tone?: Tone; anchor?: string }

export type SeedHero = {
  variant?: 'collage' | 'photo' | 'simple'
  kicker?: string
  /** The H1. */
  title: Title
  text?: Md
  primaryCta?: SeedLink
  secondaryCta?: SeedLink
  proofs?: { label: string; text?: string; icon?: IconName }[]
  images?: Photo[]
  caption?: string
}

export type FaqTopic =
  | 'general'
  | 'charpente'
  | 'isolation'
  | 'ossature'
  | 'escaliers'
  | 'exterieur'
  | 'recup'
  | 'secteurs'
  | 'contact'
  | 'guides'

/** A FAQ entry. `key` is unique across the whole site, e.g. 'charpente-bois-q1'. */
export type SeedFaq = { key: string; question: string; answer: string; topic?: FaqTopic }

export type SeedValidationPoint = { question: string; decision: string; priority?: 'high' | 'normal' | 'low' }

export type SeedSeo = { title: string; description: string; image?: Photo }

/** Alt text / caption proposed by a fiche for a photo (applied to the media library). */
export type SeedPhotoAlt = { photo: Photo; alt: string; caption?: string }

type SeedDocBase = {
  slug: string
  seo: SeedSeo
  hero: SeedHero
  /** "En bref" (40–60 words). */
  tldr?: string
  layout: SeedBlock[]
  faqs?: SeedFaq[]
  validationPoints?: SeedValidationPoint[]
  photoAlts?: SeedPhotoAlt[]
}

export type SeedPage = SeedDocBase & {
  kind: 'page'
  /** Admin / breadcrumb name, e.g. 'Charpentier à Briançon'. */
  title: string
  breadcrumbLabel?: string
  /** Path of the parent page, e.g. '3b-recup'. */
  parent?: string
  /** Home page only. */
  isHome?: boolean
}

export type SeedService = SeedDocBase & {
  kind: 'service'
  title: string
  menuLabel: string
  shortLabel: string
  filterKey: string
  order: number
  icon: IconName
  cardTitle?: string
  cardText: string
  cardLinkLabel: string
  image?: Photo
  schema?: { serviceType?: string; description?: string }
}

export type SeedArticle = {
  kind: 'article'
  slug: string
  title: Title
  /** Short title for the footer and menus. */
  menuLabel?: string
  topic: string
  excerpt: string
  cardSummary?: string
  image?: Photo
  tldr?: string
  layout: SeedBlock[]
  faqs?: SeedFaq[]
  seo: SeedSeo
  validationPoints?: SeedValidationPoint[]
  photoAlts?: SeedPhotoAlt[]
}

export type SeedProject = {
  slug: string
  /** H1 with the commune in **…** when known. */
  title: Title
  shortTitle: string
  /** Commune slug (see communes.ts). Omit when unknown. */
  commune?: string
  /** Village shown instead of the commune name ('Le Casset', 'Prelles', 'Vallouise'). */
  locality?: string
  /** Service slugs, main one first. */
  services: string[]
  /** Path of the page for "Voir la prestation" when it is not the first service (e.g. '3b-recup/bois-de-reemploi'). */
  mainPage?: string
  tags: string[]
  heroImage: Photo
  summary: string
  description: Md
  facts?: { year?: string; duration?: string; surface?: string; architect?: string; context?: string }
  steps: { title: string; text?: string }[]
  materials: string[]
  showRecupLink?: boolean
  /** Photos in site order, with the caption and alt text of the fiche. */
  gallery: { photo: Photo; caption: string; alt: string }[]
  /** Slugs of 3 similar projects. */
  related: string[]
  featured?: boolean
  order: number
  seo: SeedSeo
  validationPoints?: SeedValidationPoint[]
}
