import Link from 'next/link'
import type { Payload, TypedUser } from 'payload'

type Props = { payload: Payload; user?: TypedUser | null }

type Tile = {
  href: string
  title: string
  text: string
  count?: number
  tone?: 'alert' | 'default'
}

async function safeCount(run: () => Promise<{ totalDocs: number }>) {
  try {
    return (await run()).totalDocs
  } catch {
    return undefined
  }
}

/**
 * Home of the admin: what needs attention today and the five things Jean
 * does most often, one click away.
 */
export async function Dashboard({ payload, user }: Props) {
  const [newRequests, openPoints, projects] = await Promise.all([
    safeCount(() => payload.count({ collection: 'form-submissions', where: { status: { equals: 'new' } } })),
    safeCount(() => payload.count({ collection: 'validation-points', where: { status: { equals: 'open' } } })),
    safeCount(() => payload.count({ collection: 'projects' })),
  ])

  const name = (user as { name?: string } | null | undefined)?.name?.split(' ')[0]

  const attention: Tile[] = [
    {
      href: '/admin/collections/form-submissions?where[status][equals]=new',
      title: 'Demandes à traiter',
      text: newRequests ? 'Des visiteurs attendent votre réponse.' : 'Aucune nouvelle demande.',
      count: newRequests,
      tone: newRequests ? 'alert' : 'default',
    },
    {
      href: '/admin/collections/validation-points?where[status][equals]=open',
      title: 'Points à valider',
      text: 'Les informations à confirmer pour compléter le site.',
      count: openPoints,
    },
  ]

  const actions: Tile[] = [
    { href: '/admin/collections/projects/create', title: 'Ajouter un chantier', text: `Photos, commune, prestation. ${projects ?? 0} chantiers en ligne.` },
    { href: '/admin/globals/company', title: 'Horaires et coordonnées', text: 'Changez-les ici : tout le site suit.' },
    { href: '/admin/collections/pages', title: 'Modifier une page', text: 'Textes, photos et sections de chaque page.' },
    { href: '/admin/collections/services', title: 'Modifier une prestation', text: 'Les 9 pages de prestation et leurs cartes.' },
    { href: '/admin/collections/media', title: 'Remplacer une photo', text: 'Toutes les photos du site au même endroit.' },
    { href: '/admin/collections/redirects', title: 'Redirections', text: 'Anciennes adresses vers les nouvelles.' },
  ]

  return (
    <section className="tb-dash" aria-labelledby="tb-dash-title">
      <header className="tb-dash__head">
        <h1 id="tb-dash-title">Bonjour{name ? ` ${name}` : ''} 👋</h1>
        <p>Bienvenue dans l’administration du site 3B Charpente. Tout ce qui s’affiche sur le site se modifie ici.</p>
      </header>

      <div className="tb-dash__grid tb-dash__grid--two">
        {attention.map((tile) => (
          <Link key={tile.href} href={tile.href} className={`tb-tile tb-tile--${tile.tone ?? 'default'}`}>
            {tile.count !== undefined ? <span className="tb-tile__count">{tile.count}</span> : null}
            <span className="tb-tile__title">{tile.title}</span>
            <span className="tb-tile__text">{tile.text}</span>
          </Link>
        ))}
      </div>

      <h2 className="tb-dash__subtitle">Raccourcis</h2>
      <div className="tb-dash__grid">
        {actions.map((tile) => (
          <Link key={tile.href} href={tile.href} className="tb-tile">
            <span className="tb-tile__title">{tile.title}</span>
            <span className="tb-tile__text">{tile.text}</span>
          </Link>
        ))}
      </div>

      <details className="tb-dash__help">
        <summary>Comment ça marche ? (30 secondes)</summary>
        <ol>
          <li>
            <strong>Modifier</strong> : ouvrez une page, changez le texte, puis cliquez sur <em>Publier les modifications</em>. Le
            site est à jour en quelques secondes.
          </li>
          <li>
            <strong>Prévisualiser</strong> : le bouton <em>Aperçu en direct</em> montre la page pendant que vous écrivez,
            en version téléphone ou ordinateur.
          </li>
          <li>
            <strong>Revenir en arrière</strong> : onglet <em>Versions</em> d’une page, choisissez une date, puis
            <em> Restaurer cette version</em>.
          </li>
          <li>
            <strong>Pas d’inquiétude</strong> : le design est verrouillé. Vous ne pouvez rien casser, seulement changer
            les textes et les photos.
          </li>
        </ol>
      </details>
    </section>
  )
}
