import type { Company } from '@/payload-types'

type Day = NonNullable<Company['hours']>[number]

const DAY_ORDER = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
const DAY_LABEL: Record<(typeof DAY_ORDER)[number], string> = {
  monday: 'Lundi',
  tuesday: 'Mardi',
  wednesday: 'Mercredi',
  thursday: 'Jeudi',
  friday: 'Vendredi',
  saturday: 'Samedi',
  sunday: 'Dimanche',
}
const SCHEMA_DAY: Record<(typeof DAY_ORDER)[number], string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

/** "07:30" → "7 h 30", "17:00" → "17 h" (French typography). */
export function frenchTime(value?: string | null): string {
  if (!value) return ''
  const [h = '0', m = '00'] = value.split(':')
  return m === '00' ? `${Number(h)} h` : `${Number(h)} h ${m}`
}

function sorted(hours: Company['hours']): Day[] {
  return [...(hours ?? [])].sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day))
}

function slotText(day: Day): string {
  if (day.closed || !day.opens || !day.closes) return 'fermé'
  const first = `${frenchTime(day.opens)} – ${frenchTime(day.closes)}`
  return day.opens2 && day.closes2 ? `${first}, ${frenchTime(day.opens2)} – ${frenchTime(day.closes2)}` : first
}

/** Groups consecutive days with the same hours: "Lundi – jeudi : 7 h 30 – 17 h". */
export function groupedHours(hours: Company['hours']): { days: string; hours: string; closed: boolean }[] {
  const days = sorted(hours)
  const groups: { from: Day; to: Day; text: string }[] = []
  for (const day of days) {
    const text = slotText(day)
    const last = groups.at(-1)
    if (last && last.text === text && DAY_ORDER.indexOf(day.day) === DAY_ORDER.indexOf(last.to.day) + 1) {
      last.to = day
    } else {
      groups.push({ from: day, to: day, text })
    }
  }
  return groups.map(({ from, to, text }) => {
    const span = DAY_ORDER.indexOf(to.day) - DAY_ORDER.indexOf(from.day)
    const fromLabel = DAY_LABEL[from.day]
    const toLabel = DAY_LABEL[to.day].toLowerCase()
    const label = span === 0 ? fromLabel : span === 1 ? `${fromLabel} et ${toLabel}` : `${fromLabel} au ${toLabel}`
    return { days: label, hours: text, closed: text === 'fermé' }
  })
}

/** schema.org OpeningHoursSpecification, from the same structured hours. */
export function openingHoursSpecification(hours: Company['hours']) {
  return sorted(hours)
    .filter((day) => !day.closed && day.opens && day.closes)
    .flatMap((day) => {
      const slots = [{ opens: day.opens!, closes: day.closes! }]
      if (day.opens2 && day.closes2) slots.push({ opens: day.opens2, closes: day.closes2 })
      return slots.map((slot) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${SCHEMA_DAY[day.day]}`,
        opens: slot.opens,
        closes: slot.closes,
      }))
    })
}

/** Exceptional closures that are current or upcoming (next 60 days). */
export function upcomingClosures(closures: Company['closures'], now = new Date()) {
  const horizon = new Date(now.getTime() + 60 * 24 * 3600 * 1000)
  const format = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long' })
  return (closures ?? [])
    .filter((closure) => new Date(closure.to) >= now && new Date(closure.from) <= horizon)
    .map((closure) => ({
      label: closure.label ?? 'Fermeture exceptionnelle',
      text: `du ${format.format(new Date(closure.from))} au ${format.format(new Date(closure.to))}`,
    }))
}
