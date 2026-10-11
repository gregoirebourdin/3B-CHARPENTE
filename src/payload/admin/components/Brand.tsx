/* eslint-disable @next/next/no-img-element -- small static files of the admin, served as is. */
/** Login screen logo: the company's own, in its light or dark version to match the admin theme. */
export function Logo() {
  return (
    <span className="tb-brand-logo">
      <img src="/brand/logo-3b-charpente.png" alt="3B Charpente" width={240} height={140} className="tb-brand-logo__light" />
      <img src="/brand/logo-3b-charpente-sombre.png" alt="" width={240} height={140} className="tb-brand-logo__dark" />
    </span>
  )
}

/** Small mark at the top of the sidebar: the « 3BC » roundel. */
export function Icon() {
  return <img src="/favicon.png" alt="3B Charpente" width={32} height={32} style={{ borderRadius: '50%' }} />
}
