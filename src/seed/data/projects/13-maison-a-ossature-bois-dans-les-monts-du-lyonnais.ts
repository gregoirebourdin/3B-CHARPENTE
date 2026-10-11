// Réalisation n° 13 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
  title: 'Maison à ossature bois dans les **monts du Lyonnais**',
  shortTitle: 'Maison à ossature bois dans les monts du Lyonnais',
  commune: 'monts-du-lyonnais',
  services: ['maison-ossature-bois', 'charpente-bois'],
  tags: ['Maison ossature bois', 'Charpente apparente', 'Douglas'],
  heroImage: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/chantier terminé!.jpg',
  summary:
    'Murs à ossature bois et fibre de bois, charpente et solivage apparents, bardage en douglas, support maçonné en pierres récupérées.',
  description:
    "Hors des Hautes-Alpes, dans les monts du Lyonnais, nous avons construit une maison à ossature bois, avec une charpente et un solivage apparents. L'ossature bois est un système constructif où les murs sont faits d'une structure en bois remplie d'isolant. Les éléments ont voyagé en camion jusqu'au chantier.",
  steps: [
    {
      title: 'Chargement et départ',
      text: 'du camion.',
    },
    {
      title: 'Déchargement',
      text: 'sur le chantier.',
    },
    {
      title: 'Support maçonné en pierres récupérées',
      text: 'un premier geste de réemploi.',
    },
    {
      title: 'Levage du solivage sur poteaux',
      text: "jusqu'au solivage terminé.",
    },
    {
      title: 'Levage des murs à ossature bois',
      text: 'et de la charpente apparente.',
    },
    {
      title: 'Fibre de bois',
      text: "posée sur l'ossature.",
    },
    {
      title: 'Bardage en douglas.',
    },
    {
      title: 'Couverture terminée.',
    },
  ],
  materials: [
    'Ossature bois, avec charpente et solivage apparents.',
    "Fibre de bois : isolant biosourcé sur l'ossature.",
    'Douglas : bardage.',
    'Pierres récupérées : support maçonné.',
  ],
  showRecupLink: true,
  gallery: [
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/chargement .JPG',
      caption: 'Chargement',
      alt: 'Chargement du camion avec les éléments de la maison à ossature bois',
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/départ imminent!.JPG',
      caption: 'Prêt pour le départ',
      alt: 'Camion chargé, prêt à partir vers le chantier des monts du Lyonnais',
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/déchargement du camion.jpg',
      caption: 'Déchargement du camion',
      alt: 'Déchargement du camion sur le chantier de la maison ossature bois, monts du Lyonnais',
    },
    {
      photo:
        'maison-a-ossature-bois-dans-les-monts-du-lyonnais/support maçonné en pierre récupérées.jpg',
      caption: 'Support maçonné en pierres récupérées',
      alt: 'Support maçonné en pierres récupérées sous la maison à ossature bois, monts du Lyonnais',
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/Levage du solivage sur poteaux.jpg',
      caption: 'Levage du solivage sur poteaux',
      alt: 'Levage du solivage sur poteaux, maison à ossature bois dans les monts du Lyonnais',
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/solivage terminé.jpg',
      caption: 'Solivage terminé',
      alt: 'Solivage terminé de la maison à ossature bois, monts du Lyonnais',
    },
    {
      photo:
        'maison-a-ossature-bois-dans-les-monts-du-lyonnais/Levage des murs à ossature bois et de la charpente apparente.jpg',
      caption: 'Levage des murs à ossature bois et de la charpente apparente',
      alt: 'Levage des murs à ossature bois et de la charpente apparente, monts du Lyonnais',
    },
    {
      photo:
        "maison-a-ossature-bois-dans-les-monts-du-lyonnais/Fibre de bois sur l'ossature bois.jpg",
      caption: "Fibre de bois sur l'ossature bois",
      alt: "Fibre de bois posée sur l'ossature bois de la maison, monts du Lyonnais",
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/Bardage en douglas.jpg',
      caption: 'Bardage en douglas',
      alt: 'Bardage en douglas sur la maison à ossature bois des monts du Lyonnais',
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/couverture terminée.jpg',
      caption: 'Couverture terminée',
      alt: 'Couverture terminée sur la maison à ossature bois, monts du Lyonnais',
    },
    {
      photo:
        'maison-a-ossature-bois-dans-les-monts-du-lyonnais/charpente et solivage apparents.jpg',
      caption: 'Charpente et solivage apparents',
      alt: "Charpente et solivage apparents à l'intérieur de la maison à ossature bois",
    },
    {
      photo:
        'maison-a-ossature-bois-dans-les-monts-du-lyonnais/charpente apparent et soleil couchant...jpg',
      caption: 'Charpente apparente au soleil couchant',
      alt: 'Charpente apparente de la maison à ossature bois au soleil couchant, monts du Lyonnais',
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/chantier terminé!.jpg',
      caption: 'Chantier terminé',
      alt: 'Maison à ossature bois terminée dans les monts du Lyonnais',
    },
  ],
  related: [
    'surelevation-en-ossature-bois-d-une-maison-a-briancon',
    'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
    'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
  ],
  order: 15,
  seo: {
    title: 'Maison ossature bois, monts du Lyonnais | 3B Charpente',
    description:
      'Maison à ossature bois dans les monts du Lyonnais : solivage sur poteaux, charpente apparente, fibre de bois, bardage douglas, socle en pierres récupérées.',
    image: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/chantier terminé!.jpg',
  },
  validationPoints: [
    {
      question: 'Commune exacte du chantier dans les monts du Lyonnais (Rhône ou Loire) ?',
      decision:
        'Affiché « monts du Lyonnais », sans commune précise (décisions par défaut, Réalisations) : commune « Monts du Lyonnais », hors secteur, sans page secteur.',
      priority: 'high',
    },
    {
      question: 'Fiche technique : année du chantier ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : durée du chantier ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : surface habitable ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : contexte du client, pourquoi un charpentier des Hautes-Alpes ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'normal',
    },
    {
      question: 'Fiche technique : architecte éventuel ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question:
        "Les éléments ont-ils été préparés à l'atelier de L'Argentière-la-Bessée ? Si oui, c'est une preuve forte de préfabrication à écrire.",
      decision:
        "Non écrit : le texte dit seulement que les éléments ont voyagé en camion jusqu'au chantier.",
      priority: 'normal',
    },
    {
      question: 'Le support maçonné en pierres récupérées : réalisé par 3B ou par un maçon ?',
      decision:
        "On ne précise pas qui a fait quoi (décisions par défaut, travaux confiés à des partenaires) : l'étape reprend seulement la légende de la photo.",
      priority: 'normal',
    },
    {
      question: "L'isolant des murs et son épaisseur ?",
      decision:
        "Non précisés : seule la fibre de bois posée sur l'ossature, montrée par les photos, est citée.",
      priority: 'normal',
    },
    {
      question: "L'origine du douglas ?",
      decision: 'Non précisée : « Douglas : bardage » seulement.',
      priority: 'low',
    },
  ],
}
