const DAY = 24 * 60 * 60 * 1000

/** « à l’instant », « il y a 3 heures », « hier à 14 h 05 », « le 3 octobre ». Plain words for the team. */
export function relativeFr(value: string | Date | null | undefined, now = new Date()): string {
  if (!value) return ''
  const date = typeof value === 'string' ? new Date(value) : value
  const diff = now.getTime() - date.getTime()
  const minutes = Math.round(diff / 60000)
  if (minutes < 1) return 'à l’instant'
  if (minutes < 60) return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`
  const hours = Math.round(minutes / 60)
  const time = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' }).replace(':', ' h ')
  const startOfToday = new Date(now.toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' })).getTime()
  if (date.getTime() >= startOfToday && hours < 24) return `il y a ${hours} heure${hours > 1 ? 's' : ''}`
  if (date.getTime() >= startOfToday - DAY) return `hier à ${time}`
  const sameYear = date.getFullYear() === now.getFullYear()
  return `le ${date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: sameYear ? undefined : 'numeric', timeZone: 'Europe/Paris' })}`
}

/** « Dimanche 11 octobre 2026 » */
export function todayFr(now = new Date()) {
  const text = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' })
  return text.charAt(0).toUpperCase() + text.slice(1)
}
