/**
 * Fiche 27 · Conseils, liste des guides (`/conseils/`). Transcription de 3b-charpente-kit/docs/pages/27-conseils.md.
 */
import type { SeedPage } from '../../types'

export const page: SeedPage = {
  kind: 'page',
  slug: 'conseils',
  title: 'Conseils',

  seo: {
    title: 'Conseils rénovation et construction bois | 3B Charpente',
    description:
      "Isolants biosourcés, réemploi du bois, rénovation de chalet, aides RGE : les guides pratiques de 3B Charpente, charpentier à L'Argentière-la-Bessée.",
  },

  hero: {
    variant: 'simple',
    kicker: 'Conseils',
    title: 'Nos **conseils** pour construire et rénover en bois dans les Hautes-Alpes',
    text: "Les questions qu'on nous pose sur les chantiers, et nos réponses : **quel isolant**, **comment réemployer le bois**, **par où commencer**, **quelles aides**. Par l'équipe de 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007.",
  },

  layout: [
    // 3.2 Les guides (les cartes viennent des guides eux-mêmes, lien « Lire le guide »)
    { type: 'articles', mode: 'all' },

    // 3.3 Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      title: 'Une question sur **votre projet** ?',
      text: 'Chaque projet commence par une rencontre. Décrivez-nous votre maison ou votre bâtiment, nous vous rappelons.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
    },
  ],

  validationPoints: [
    {
      question:
        "Les guides sont-ils signés « l'équipe de 3B Charpente » ou par Jean-Michel Tardy ?",
      decision: "« L'équipe de 3B Charpente ».",
      priority: 'low',
    },
  ],
}
