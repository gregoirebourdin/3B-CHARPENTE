import Link from 'next/link'

export function ViewSiteLink() {
  return (
    <div className="tb-nav-extras">
      <Link href="/" target="_blank" className="tb-nav-extras__site">
        Voir le site ↗
      </Link>
      <Link href="/admin" className="tb-nav-extras__home">
        Accueil de l’administration
      </Link>
    </div>
  )
}
