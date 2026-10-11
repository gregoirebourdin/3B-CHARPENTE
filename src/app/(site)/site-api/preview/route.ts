import config from '@payload-config'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

/** Live preview / "Aperçu" from the admin: signed-in team members only. */
export async function GET(request: Request) {
  const url = new URL(request.url)
  const path = url.searchParams.get('path') ?? '/'
  if (!path.startsWith('/') || path.startsWith('//')) return new Response('Adresse invalide.', { status: 400 })
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })
  if (!user) return new Response('Aperçu réservé aux personnes connectées à l’administration.', { status: 403 })
  ;(await draftMode()).enable()
  redirect(path)
}
