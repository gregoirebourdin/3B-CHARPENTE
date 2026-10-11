export function ProofsNotice() {
  return (
    <p className="tb-notice">
      Les preuves affichées se modifient une seule fois pour tout le site, dans{' '}
      <a href="/admin/globals/proofs">Réglages › Bandeau de preuves</a>.
    </p>
  )
}

export function ReviewsNotice() {
  return (
    <p className="tb-notice">
      Cette section reste invisible tant qu’il n’y a pas au moins 3 avis publiés dans{' '}
      <a href="/admin/collections/reviews">Avis clients</a>. Uniquement de vrais avis, recopiés à l’identique.
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
