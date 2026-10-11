/** Words above the login form (designs § 17.1): who this is for, in one friendly sentence. */
export function LoginIntro() {
  return (
    <div className="tb-login-intro">
      <p className="tb-login-intro__eyebrow">Administration du site</p>
      <h1 className="tb-login-intro__title">
        Bonjour, <span>connectez-vous</span>
      </h1>
      <p className="tb-login-intro__text">Avec votre identifiant et votre mot de passe.</p>
    </div>
  )
}

/** Photo of a real chantier next to the form, on a computer. */
export function LoginAside() {
  return (
    <figure className="tb-login-aside" aria-hidden="true">
      <span className="tb-login-aside__frame">
        {/* eslint-disable-next-line @next/next/no-img-element -- static file of the admin */}
        <img src="/admin/connexion-levage-fermes.webp" alt="" width={800} height={600} />
        <span className="tb-login-aside__tag">L’Argentière-la-Bessée</span>
      </span>
      <figcaption>Levage des fermes d’une charpente refaite à L’Argentière-la-Bessée.</figcaption>
    </figure>
  )
}
