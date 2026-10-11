// Réalisation n° 22 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'renovation-et-isolation-d-un-chalet-a-vallouise',
  title: "Rénovation et isolation d'un chalet à **Vallouise**, et agrandissement de sa terrasse",
  shortTitle: "Rénovation et isolation d'un chalet à Vallouise",
  commune: 'vallouise-pelvoux',
  locality: 'Vallouise',
  services: ['isolation-biosourcee', 'isolation-murs-ite', 'balcon-terrasse-abri-bois'],
  tags: ['Rénovation énergétique', 'Isolation biosourcée', 'Terrasse en mélèze'],
  heroImage: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
  summary:
    "Chalet des années 1980 : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture, bardage mélèze, enduit sur fibre de bois, terrasse agrandie.",
  description:
    "À Vallouise, ce chalet des années 1980 a été entièrement rénové et isolé avec des isolants biosourcés, c'est-à-dire issus de matières végétales. Des ouvertures ont été créées ou modifiées, et le balcon a été agrandi en terrasse.",
  facts: {
    context: 'Chalet des années 1980',
  },
  steps: [
    {
      title: 'Murs.',
      text: '28 cm de laine de chanvre, lin et coton, et de fibre de bois.',
    },
    {
      title: 'Toiture.',
      text: '32 cm des mêmes isolants.',
    },
    {
      title: 'Façades.',
      text: "Une partie est habillée d'un bardage en mélèze, l'autre est enduite sur de la fibre de bois.",
    },
    {
      title: 'Ouvertures',
      text: 'créées ou modifiées.',
    },
    {
      title: 'Dépassée nord agrandie.',
      text: 'Le débord du toit côté nord a été allongé.',
    },
    {
      title: 'Terrasse agrandie et étanchée',
      text: "en mélèze avec des assemblages traditionnels, et son escalier d'accès.",
    },
  ],
  materials: [
    'Laine de chanvre, lin et coton : isolant biosourcé des murs et de la toiture.',
    "Fibre de bois : isolant biosourcé des murs et de la toiture, et support de l'enduit sur une partie des façades.",
    'Mélèze : bardage et terrasse.',
  ],
  gallery: [
    {
      photo:
        'renovation-et-isolation-d-un-chalet-a-vallouise/01. Façade Ouest avant les travaux.jpg',
      caption: 'Façade ouest avant les travaux',
      alt: "Façade ouest d'un chalet des années 1980 à Vallouise avant sa rénovation",
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/02. Façade sud avant les travaux.JPG',
      caption: 'Façade sud avant les travaux',
      alt: "Façade sud du chalet de Vallouise avant la rénovation et l'isolation",
    },
    {
      photo:
        'renovation-et-isolation-d-un-chalet-a-vallouise/03. Face Nord et Est avant les travaux.JPG',
      caption: 'Façades nord et est avant les travaux',
      alt: 'Façades nord et est du chalet de Vallouise avant les travaux',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
      caption: 'Façades nord et ouest',
      alt: 'Façades nord et ouest du chalet de Vallouise',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/05. Dépassée Nord agrandie.JPG',
      caption: 'Dépassée nord agrandie',
      alt: 'Dépassée de toit agrandie côté nord sur le chalet rénové à Vallouise',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/06. Dépassée Nord en détail.JPG',
      caption: 'Détail de la dépassée nord',
      alt: 'Détail de la dépassée nord agrandie du chalet de Vallouise',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
      caption: 'Façade sud et sa terrasse',
      alt: 'Façade sud du chalet rénové à Vallouise et sa terrasse agrandie en mélèze',
    },
    {
      photo:
        "renovation-et-isolation-d-un-chalet-a-vallouise/08. Facade Sud et Est. Escalier d'accès à la terrasse.JPG",
      caption: "Façades sud et est, escalier d'accès à la terrasse",
      alt: "Façades sud et est du chalet de Vallouise et escalier d'accès à la terrasse",
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/09. Vue de la terrasse.JPG',
      caption: 'Vue de la terrasse (1/2)',
      alt: 'Terrasse en mélèze agrandie et étanchée, chalet de Vallouise',
    },
    {
      photo:
        'renovation-et-isolation-d-un-chalet-a-vallouise/10. Terrasse en mélèze et ses assemblages traditionnels.JPG',
      caption: 'Terrasse en mélèze et ses assemblages traditionnels',
      alt: 'Assemblages traditionnels de la terrasse en mélèze du chalet de Vallouise',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/11. vue de la terrasse.JPG',
      caption: 'Vue de la terrasse (2/2)',
      alt: 'Autre vue de la terrasse en mélèze du chalet rénové à Vallouise',
    },
  ],
  related: [
    'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
    'isolation-d-un-bati-ancien-par-l-interieur',
    'construction-d-une-terrasse-couverte-a-champcella',
  ],
  featured: true,
  order: 8,
  seo: {
    title: 'Chalet rénové et isolé à Vallouise (05) | 3B Charpente',
    description:
      "Chalet des années 1980 à Vallouise : 28 cm d'isolants biosourcés dans les murs, 32 cm en toiture, bardage mélèze et terrasse agrandie. Voir le chantier.",
    image: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
  },
  validationPoints: [
    {
      question:
        "Les murs sont-ils isolés par l'extérieur (ITE), par l'intérieur, ou des deux côtés ? Si c'est par l'extérieur, la fiche peut aussi servir de preuve principale à la page Isolation des murs.",
      decision:
        'Non précisé dans le texte ; le chantier est aussi classé en « isolation des murs » (fiche 15).',
      priority: 'normal',
    },
    {
      question: 'La marque ou la composition exacte de la « laine de chanvre/lin/coton » ?',
      decision: 'Écrit « laine de chanvre, lin et coton », sans marque.',
      priority: 'low',
    },
    {
      question:
        "Le chantier a-t-il bénéficié d'aides à la rénovation ? À mentionner seulement sans montant.",
      decision: 'Non mentionné.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : contexte du client ?',
      decision: 'Ligne « Contexte » limitée au fait publié : « Chalet des années 1980 ».',
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
      question: 'Fiche technique : architecte éventuel ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
  ],
}
