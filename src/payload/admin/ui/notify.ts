'use client'

import { toast } from '@payloadcms/ui'

const openSite = () => window.open('/', '_blank', 'noopener')

/**
 * Confirmation messages of the administration (designs § 14): dark, with the
 * sage disc, one short sentence and « Voir le site ». Errors stay until closed.
 */
export const notify = {
  saved(description?: string) {
    toast.success('Enregistré. Le site est à jour.', { description, duration: 6000, action: { label: 'Voir le site', onClick: openSite } })
  },
  draft(description = 'Il n’est pas encore sur le site.') {
    toast.success('Brouillon enregistré.', { description, duration: 6000 })
  },
  done(message: string, description?: string) {
    toast.success(message, { description, duration: 6000 })
  },
  error(retry?: () => void, description = 'Vérifiez la connexion à Internet.') {
    toast.error('Ce n’est pas enregistré. Réessayez.', {
      description,
      duration: Infinity,
      action: retry ? { label: 'Réessayer', onClick: retry } : undefined,
    })
  },
}
