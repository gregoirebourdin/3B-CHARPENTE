// Réalisation n° 06 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
  title: "Création d'un escalier en **bois debout** dans un bâti ancien",
  shortTitle: 'Escalier en bois debout dans un bâti ancien',
  services: ['escalier-bois-sur-mesure'],
  tags: ['Bâti ancien', 'Escalier', 'Bois debout', 'Trois plis'],
  heroImage: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/escalier terminé.jpg',
  summary:
    "L'ancien escalier démoli, un nouveau en bois debout (posé fibres à la verticale) sur caissons en panneaux trois plis.",
  description:
    'Dans un bâti ancien, nous avons remplacé un vieil escalier par un escalier neuf en bois debout. Le bois debout est du bois coupé en travers des fibres : on voit en surface les cernes de croissance, comme sur une tranche de rondin. Il est associé ici à des caissons en panneau trois plis.',
  steps: [
    {
      title: "Démolition de l'ancien escalier",
    },
    {
      title: 'Caissons en panneau trois plis',
      text: 'Le trois plis est un panneau de bois massif fait de trois couches croisées.',
    },
    {
      title: 'Caissons terminés',
    },
    {
      title: 'Contremarches',
      text: 'les parties verticales entre deux marches.',
    },
    {
      title: 'Pose du bois debout',
    },
    {
      title: 'Escalier terminé',
    },
  ],
  materials: [
    'Bois debout : bois coupé en travers des fibres.',
    'Panneau trois plis : les caissons.',
  ],
  gallery: [
    {
      photo: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/ancien escalier démoli.JPG',
      caption: 'Ancien escalier démoli',
      alt: 'Ancien escalier démoli dans un bâti ancien, avant le nouvel escalier en bois debout',
    },
    {
      photo:
        'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/caisson en panneau 3plis.JPG',
      caption: 'Caisson en panneau trois plis',
      alt: "Caisson en panneau trois plis pour l'escalier en bois debout d'un bâti ancien",
    },
    {
      photo: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/caissons terminés.JPG',
      caption: 'Caissons terminés',
      alt: 'Caissons en trois plis terminés pour le nouvel escalier du bâti ancien',
    },
    {
      photo: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/contre marches.JPG',
      caption: 'Contremarches',
      alt: "Contremarches de l'escalier en bois debout dans un bâti ancien",
    },
    {
      photo:
        'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/bois debout en cours de pose.JPG',
      caption: 'Pose du bois debout',
      alt: "Pose du bois debout sur l'escalier neuf d'un bâti ancien",
    },
    {
      photo: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/escalier terminé.jpg',
      caption: 'Escalier terminé',
      alt: 'Escalier en bois debout terminé dans un bâti ancien',
    },
  ],
  related: [
    'escalier-1-4-tournant-en-meleze-lamelle-colle',
    'fabrication-d-un-escalier',
    'creation-d-un-plancher-dans-un-bati-ancien',
  ],
  order: 17,
  seo: {
    title: 'Escalier en bois debout dans un bâti ancien | 3B Charpente',
    description:
      "Escalier en bois debout dans un bâti ancien : dépose de l'ancien escalier, caissons en panneau trois plis, contremarches, pose du bois debout. Photos.",
    image: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/escalier terminé.jpg',
  },
  validationPoints: [
    {
      question: 'Dans quelle commune ce chantier a-t-il été réalisé ?',
      decision:
        "Aucune commune indiquée (décisions par défaut) : le chantier est classé par prestation, n'apparaît dans aucune page secteur, la carte secteur est masquée et la balise title reste sans commune.",
    },
    {
      question: 'Essence du bois debout et son rôle (dessus des marches ?) ?',
      decision:
        'Non précisés : « Bois debout : bois coupé en travers des fibres » et « Panneau trois plis : les caissons ».',
    },
    {
      question: 'Ordre des étapes 4 et 5 : contremarches avant ou après le bois debout ?',
      decision:
        'Ordre de la fiche gardé : contremarches, puis pose du bois debout (étapes et galerie).',
    },
    {
      question: "Forme de l'escalier (droit, tournant) ?",
      decision: 'Non précisée sur la page.',
    },
    {
      question:
        'La définition « bois posé fibres à la verticale » (texte de carte) est-elle juste pour ce chantier ?',
      decision:
        'Texte de carte de la fiche 15 gardé tel quel ; à corriger si la définition ne convient pas.',
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
      question: 'Fiche technique : contexte du client ?',
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
