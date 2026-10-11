// Réalisation n° 19 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
  title:
    "Rénovation d'une maison d'habitation à **L'Argentière-la-Bessée** : vieux bois et réemploi",
  shortTitle: "Maison rénovée avec du bois de réemploi à L'Argentière-la-Bessée",
  commune: 'argentiere-la-bessee',
  services: [
    'renovation-charpente-combles',
    'escalier-bois-sur-mesure',
    'balcon-terrasse-abri-bois',
  ],
  mainPage: '3b-recup/bois-de-reemploi',
  tags: ['Rénovation', 'Bardage vieux bois', 'Réemploi'],
  heroImage: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/05Façade sud.JPG',
  summary:
    'Pignon vitré, escalier balancé, bardage en vieux bois, garde-corps en bois de réemploi et balcon.',
  description:
    "À L'Argentière-la-Bessée, nous avons rénové une maison d'habitation en donnant une seconde vie au bois. La maison reçoit un bardage en vieux bois, et le garde-corps est fait en bois de réemploi. Le bois de réemploi vient de chantiers de déconstruction ; il est trié, nettoyé et usiné pour un nouvel usage.",
  steps: [
    {
      title: 'État existant',
      text: 'de la maison.',
    },
    {
      title: 'Pignon vitré.',
      text: 'Le pignon, mur en triangle sous la pente du toit, reçoit des vitrages.',
    },
    {
      title: 'Bardage en vieux bois',
      text: 'et façade sud.',
    },
    {
      title: 'Balcon',
      text: 'et garde-corps en bois de réemploi.',
    },
    {
      title: 'Escalier balancé.',
      text: 'Ses marches tournantes changent de largeur pour garder un pas régulier.',
    },
    {
      title: 'Pièce de vie',
      text: 'et bas de pente.',
    },
  ],
  materials: ['Vieux bois : bardage.', 'Bois de réemploi : garde-corps.', 'Vitrages : pignon.'],
  showRecupLink: true,
  gallery: [
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/01Existant.JPG',
      caption: 'La maison avant les travaux (1/2)',
      alt: "Maison d'habitation à L'Argentière-la-Bessée avant sa rénovation",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/02Existant.JPG',
      caption: 'La maison avant les travaux (2/2)',
      alt: "Autre vue de la maison de L'Argentière-la-Bessée avant les travaux",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/03Pignon vitré.JPG',
      caption: 'Pignon vitré (1/2)',
      alt: "Pignon vitré de la maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/04Pignon vitré.JPG',
      caption: 'Pignon vitré (2/2)',
      alt: "Autre vue du pignon vitré de la maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/11Vitrages posés.JPG',
      caption: 'Vitrages posés',
      alt: "Vitrages posés sur la maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/05Façade sud.JPG',
      caption: 'Façade sud',
      alt: "Façade sud de la maison rénovée à L'Argentière-la-Bessée (Hautes-Alpes)",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      caption: 'Bardage en vieux bois',
      alt: "Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/12Balcon.JPG',
      caption: 'Balcon',
      alt: "Balcon de la maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
      caption: 'Garde-corps en bois de réemploi',
      alt: "Garde-corps en bois de réemploi, maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/07Escalier balancé.JPG',
      caption: 'Escalier balancé',
      alt: "Escalier balancé dans la maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/09Pièce de vie.JPG',
      caption: 'Pièce de vie',
      alt: "Pièce de vie de la maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/10bas de pente.JPG',
      caption: 'Bas de pente',
      alt: "Bas de pente sous la toiture de la maison rénovée à L'Argentière-la-Bessée",
    },
  ],
  related: [
    'refection-d-une-toiture-a-ronatlon',
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
    'renovation-et-isolation-d-un-chalet-a-vallouise',
  ],
  featured: true,
  order: 12,
  seo: {
    title: "Bardage vieux bois à L'Argentière-la-Bessée | 3B Charpente",
    description:
      "Rénovation d'une maison à L'Argentière-la-Bessée : pignon vitré, bardage en vieux bois, garde-corps en bois de réemploi, escalier balancé. Voir les photos.",
    image: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/05Façade sud.JPG',
  },
  validationPoints: [
    {
      question:
        "L'origine du vieux bois et du bois de réemploi : viennent-ils d'une déconstruction faite par 3B Récup' ? Si oui, c'est la preuve la plus forte du site pour la page Bois de réemploi.",
      decision:
        "Présentés comme « bardage en vieux bois » et « garde-corps en bois de réemploi », sans dire que ce bois vient d'une déconstruction faite par 3B (décisions par défaut, 3B Récup').",
      priority: 'high',
    },
    {
      question: "L'essence du vieux bois ?",
      decision: 'Non précisée.',
      priority: 'normal',
    },
    {
      question: 'Le garde-corps de réemploi est-il celui du balcon ?',
      decision:
        "Étape « Balcon et garde-corps en bois de réemploi » gardée telle quelle ; photos « Balcon » et « Garde-corps » placées l'une après l'autre.",
      priority: 'low',
    },
    {
      question: "Ce qui a été fait d'autre (charpente, isolation, ouvertures du pignon) ?",
      decision: 'Non décrit : seuls les éléments des légendes des photos sont cités.',
      priority: 'normal',
    },
    {
      question: '« Bas de pente » : vue intérieure sous le toit, ou vue extérieure ?',
      decision:
        'Légende « Bas de pente » gardée ; texte alternatif de la fiche (« sous la toiture »).',
      priority: 'low',
    },
    {
      question:
        'Classement : cette maison est mise en avant pour le réemploi (fiche 15). Ce classement vous convient-il ?',
      decision:
        "Page « Voir la prestation » : Bois de réemploi (3B Récup') ; filtres : rénovation de charpente, escaliers, balcons ; lien vers 3B Récup' affiché.",
      priority: 'normal',
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
      question: 'Fiche technique : surface ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : contexte du client ?',
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
  ],
}
