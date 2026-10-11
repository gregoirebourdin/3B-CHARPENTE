import Link from 'next/link'

export function ProofsNotice() {
  return (
    <p className="tb-notice">
      Les preuves affichées se modifient une seule fois pour tout le site, dans{' '}
      <Link href="/admin/globals/proofs">Réglages › Bandeau de preuves</Link>.
    </p>
  )
}

export function ReviewsNotice() {
  return (
    <p className="tb-notice">
      Cette section reste invisible tant qu’il n’y a pas au moins 3 avis publiés dans{' '}
      <Link href="/admin/collections/reviews">Avis clients</Link>. Uniquement de vrais avis, recopiés à l’identique.
    </p>
  )
}

export function ExplorerNotice() {
  return (
    <p className="tb-notice">
      Toutes les réalisations publiées s’affichent ici, avec les filtres par prestation et par commune. Les filtres se
      construisent seuls à partir des prestations et des communes de chaque chantier.
    </p>
  )
}
