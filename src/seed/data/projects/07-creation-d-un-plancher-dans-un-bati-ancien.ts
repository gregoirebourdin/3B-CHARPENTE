// Réalisation n° 07 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'creation-d-un-plancher-dans-un-bati-ancien',
  title: "Création d'un plancher en **douglas et épicéa** dans un bâti ancien",
  shortTitle: 'Plancher en douglas et épicéa dans un bâti ancien',
  services: ['renovation-charpente-combles'],
  tags: ['Bâti ancien', 'Plancher', 'Douglas et épicéa'],
  heroImage: 'creation-d-un-plancher-dans-un-bati-ancien/en cours de levage.JPG',
  summary: 'Un nouveau plancher en douglas et épicéa, levé dans un bâti ancien.',
  description:
    "Dans un bâti ancien, nous avons créé un plancher en douglas et en épicéa, deux résineux courants en charpente. Créer un plancher dans un bâtiment ancien permet par exemple de gagner une pièce à l'étage ou de remplacer un plancher fatigué. Les murs n'y sont pas toujours d'équerre : chaque pièce se règle sur place.",
  steps: [
    {
      title: 'Douglas et épicéa',
      text: 'Les deux essences du plancher, que montre la première photo.',
    },
    {
      title: 'Levage',
      text: "Le levage, c'est le moment où les pièces préparées sont montées et posées dans le bâtiment existant. Les solives sont les poutres qui portent le plancher.",
    },
  ],
  materials: ['Douglas et épicéa : les bois du plancher.'],
  gallery: [
    {
      photo: 'creation-d-un-plancher-dans-un-bati-ancien/douglas et épicéa.JPG',
      caption: 'Douglas et épicéa',
      alt: "Pièces de douglas et d'épicéa préparées pour un plancher dans un bâti ancien",
    },
    {
      photo: 'creation-d-un-plancher-dans-un-bati-ancien/en cours de levage.JPG',
      caption: 'En cours de levage',
      alt: "Levage d'un plancher en douglas et épicéa dans un bâti ancien",
    },
  ],
  related: [
    'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
    'isolation-d-un-bati-ancien-par-l-interieur',
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
  ],
  order: 7,
  seo: {
    title: 'Plancher douglas et épicéa en bâti ancien | 3B Charpente',
    description:
      "Création d'un plancher en douglas et épicéa dans un bâti ancien, du choix des bois au levage. Un chantier de 3B Charpente, charpentier depuis 2007.",
    image: 'creation-d-un-plancher-dans-un-bati-ancien/en cours de levage.JPG',
  },
  validationPoints: [
    {
      question: 'Dans quelle commune ce chantier a-t-il été réalisé ?',
      decision:
        "Aucune commune indiquée (décisions par défaut) : le chantier est classé par prestation, n'apparaît dans aucune page secteur, la carte secteur est masquée et la balise title reste sans commune.",
    },
    {
      question: 'Raison du nouveau plancher (nouveau niveau, remplacement) et contexte du client ?',
      decision:
        "Non précisée : le texte reste général (« permet par exemple de… ») et la ligne « Contexte » n'est pas affichée.",
    },
    {
      question: 'Rôle de chaque essence (solives en douglas, plancher en épicéa ?) ?',
      decision: 'Non précisé : « Douglas et épicéa : les bois du plancher ».',
    },
    {
      question: "D'autres photos (plancher terminé), car la page est très courte ?",
      decision:
        "Galerie publiée avec les deux photos existantes ; d'autres photos pourront être ajoutées dans l'administration.",
    },
    {
      question: 'Fiche technique : année du chantier ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : durée du chantier ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : surface du plancher ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : architecte éventuel ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
  ],
}
