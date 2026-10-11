// Réalisation n° 14 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
  title: "Réfection d'une charpente avec lucarne à **L'Argentière-la-Bessée**",
  shortTitle: "Réfection d'une charpente à L'Argentière-la-Bessée",
  commune: 'argentiere-la-bessee',
  services: ['renovation-charpente-combles', 'charpente-bois', 'isolation-biosourcee'],
  tags: ['Réfection de charpente', 'Lucarne', 'Mélèze'],
  heroImage: 'refection-d-une-charpente-a-l-argentiere-la-bessee/bardage posé.JPG',
  summary:
    "Dépose de l'ancienne charpente, taille traditionnelle à l'atelier, lucarne, panneaux en fibre de bois, plancher et bardage en mélèze.",
  description:
    "À L'Argentière-la-Bessée, la commune où notre entreprise est installée, nous avons déposé une ancienne charpente pour en lever une nouvelle. Le chantier comprend une lucarne, des fenêtres de toit, des panneaux en fibre de bois, un bardage et un plancher en mélèze. Un tenon y a été taillé à la main, à la besaiguë.",
  steps: [
    {
      title: 'Préparation du chantier',
      text: "et dépose de l'ancienne charpente.",
    },
    {
      title: 'Taille.',
      text: "Un tenon à double embrèvement taillé à la besaiguë, l'outil traditionnel du charpentier à deux tranchants. Un trait de Jupiter, assemblage en zigzag qui raboute deux pièces bout à bout.",
    },
    {
      title: 'Assemblage à blanc',
      text: 'au sol, pour vérifier chaque pièce avant le levage.',
    },
    {
      title: 'Levage',
      text: 'des porteuses, des fermes et du solivage, avec un chevêtre : le cadre qui laisse passer la cheminée.',
    },
    {
      title: 'Lucarne.',
      text: "Levage des jouées, c'est-à-dire ses côtés, puis de la lucarne.",
    },
    {
      title: 'Encadrements des fenêtres de toit',
      text: 'et panneaux en fibre de bois.',
    },
    {
      title: 'Bardage et plancher en mélèze.',
    },
  ],
  materials: ['Mélèze : bardage et plancher.', 'Fibre de bois : panneaux isolants biosourcés.'],
  gallery: [
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/préparation de chantier.JPG',
      caption: 'Préparation du chantier',
      alt: "Préparation du chantier de réfection d'une charpente à L'Argentière-la-Bessée",
    },
    {
      photo:
        "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG",
      caption: "Dépose de l'ancienne charpente",
      alt: "Dépose de l'ancienne charpente avant sa réfection, L'Argentière-la-Bessée",
    },
    {
      photo:
        "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
      caption: "Taille d'un tenon à double embrèvement à la besaiguë",
      alt: "Taille à la besaiguë d'un tenon à double embrèvement pour la charpente de L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter .JPG',
      caption: 'Trait de Jupiter',
      alt: "Trait de Jupiter taillé pour abouter deux pièces de la charpente, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter assemblé.JPG',
      caption: 'Trait de Jupiter assemblé',
      alt: "Trait de Jupiter assemblé : deux pièces de charpente raboutées, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/assamblage à blanc.JPG',
      caption: 'Assemblage à blanc',
      alt: "Assemblage à blanc de la nouvelle charpente avant le levage, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des porteuses.JPG',
      caption: 'Levage des porteuses',
      alt: "Levage des pièces porteuses de la charpente à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
      caption: 'Levage des fermes',
      alt: "Levage des fermes de la nouvelle charpente à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/ferme posée.JPG',
      caption: 'Ferme posée',
      alt: "Ferme de charpente posée sur le bâtiment, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/solivage en cours de levage.JPG',
      caption: 'Solivage en cours de levage',
      alt: "Levage du solivage pendant la réfection de la charpente, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/chevêtre de cheminée.JPG',
      caption: 'Chevêtre de cheminée',
      alt: "Chevêtre laissant passer le conduit de cheminée dans la charpente, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des jouées de lucarne.JPG',
      caption: 'Levage des jouées de lucarne',
      alt: "Levage des jouées de la lucarne sur la charpente de L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
      caption: 'Lucarne en cours de levage',
      alt: "Lucarne en cours de levage sur la toiture refaite à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/détail de lucarne.JPG',
      caption: 'Détail de la lucarne',
      alt: "Détail de la charpente de la lucarne, L'Argentière-la-Bessée",
    },
    {
      photo:
        'refection-d-une-charpente-a-l-argentiere-la-bessee/pose des encadrements de Velux.JPG',
      caption: 'Pose des encadrements de fenêtres de toit',
      alt: "Pose des encadrements de fenêtres de toit dans la charpente, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/encadrements posés.JPG',
      caption: 'Encadrements posés',
      alt: "Encadrements posés dans la nouvelle charpente, L'Argentière-la-Bessée",
    },
    {
      photo:
        'refection-d-une-charpente-a-l-argentiere-la-bessee/paose des panneaux en fibre de bois.JPG',
      caption: 'Pose des panneaux en fibre de bois',
      alt: "Pose de panneaux isolants en fibre de bois, réfection de charpente à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/stockage des murs intérieurs.JPG',
      caption: 'Stockage des murs intérieurs',
      alt: "Murs intérieurs stockés sur le chantier avant leur pose, L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/chantier en cours.JPG',
      caption: 'Chantier en cours',
      alt: "Vue du chantier de réfection de charpente en cours à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/pose du bardage mélèze.JPG',
      caption: 'Pose du bardage en mélèze',
      alt: "Pose d'un bardage en mélèze, réfection d'une charpente à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/bardage posé.JPG',
      caption: 'Bardage posé',
      alt: "Bardage posé après la réfection de la charpente, L'Argentière-la-Bessée (Hautes-Alpes)",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/plancher en mélèze.JPG',
      caption: 'Plancher en mélèze',
      alt: "Plancher en mélèze posé lors de la réfection, L'Argentière-la-Bessée",
    },
  ],
  related: [
    'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
    'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
    'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
  ],
  featured: true,
  order: 1,
  seo: {
    title: "Charpente refaite à L'Argentière-la-Bessée | 3B Charpente",
    description:
      "Réfection d'une charpente à L'Argentière-la-Bessée : dépose, taille à la besaiguë, trait de Jupiter, levage des fermes, lucarne, bardage mélèze. 22 photos.",
    image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/bardage posé.JPG',
  },
  validationPoints: [
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
      question: 'Fiche technique : architecte éventuel ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Le type de bâtiment (maison, grange…) et la raison de la réfection ?',
      decision: 'Non précisés dans le texte ; ligne « Contexte » de la fiche technique masquée.',
      priority: 'normal',
    },
    {
      question: "L'essence de la charpente ?",
      decision: 'Non précisée : seuls le bardage et le plancher sont dits en mélèze.',
      priority: 'normal',
    },
    {
      question: "La lucarne : créée, ou refaite à l'identique ?",
      decision: 'Non précisé : le texte dit seulement que le chantier comprend une lucarne.',
      priority: 'normal',
    },
    {
      question: "« Porteuses » : s'agit-il de pannes ou de poutres porteuses ?",
      decision: 'Terme de la légende gardé tel quel (« Levage des porteuses »).',
      priority: 'low',
    },
    {
      question:
        'Les « murs intérieurs » stockés sont-ils des murs à ossature bois préparés par 3B ?',
      decision:
        'Légende « Stockage des murs intérieurs » gardée telle quelle, sans autre précision.',
      priority: 'low',
    },
    {
      question: 'Les panneaux en fibre de bois sont-ils posés en toiture ou en murs ?',
      decision: 'Non précisé : « panneaux en fibre de bois », sans dire où ils sont posés.',
      priority: 'normal',
    },
    {
      question: 'Le bardage posé (photo 21) est-il le bardage en mélèze ?',
      decision: 'Légende « Bardage posé » gardée sans essence.',
      priority: 'low',
    },
    {
      question:
        "L'atelier est-il au 5 rue Saint-Michel ? Si oui, on peut écrire « où se trouve notre atelier ».",
      decision:
        'Non écrit : le texte dit « la commune où notre entreprise est installée » (décisions par défaut, Atelier).',
      priority: 'normal',
    },
  ],
}
