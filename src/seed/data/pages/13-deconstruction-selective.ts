import type { SeedPage } from '../../types'

/** Fiche 13 · Déconstruction sélective · /3b-recup/deconstruction-selective/ */

const DEPOSE = "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG"
const TENON =
  "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG"
const JUPITER = 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter assemblé.JPG'
const GARDE_CORPS =
  'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG'

export const page: SeedPage = {
  kind: 'page',
  slug: 'deconstruction-selective',
  parent: '3b-recup',
  title: 'Déconstruction sélective',
  seo: {
    title: 'Déconstruction sélective bois, Hautes-Alpes | 3B Charpente',
    description:
      "Déconstruction sélective dans les Hautes-Alpes : charpente, solivage, ossature et bardage déposés par les charpentiers de 3B Récup' pour être réemployés.",
    image: DEPOSE,
  },
  hero: {
    variant: 'collage',
    kicker: "3B Récup' · Déconstruction sélective",
    title: '**Déconstruction sélective** et dépose du bois dans les Hautes-Alpes',
    text: "Démonter plutôt que démolir. Nos charpentiers **déposent pièce par pièce** la charpente, le solivage, les murs à ossature bois, la couverture, l'isolation et les parements, pour que le bois **retrouve un chantier** au lieu de partir en déchet.",
    primaryCta: { label: 'Parlons de votre bâtiment', href: '/contact/' },
    secondaryCta: { label: 'Ce que nous déposons', href: '/3b-recup/deconstruction-selective/#materiaux' },
    proofs: [
      { label: 'Charpentiers de métier', icon: 'hammer' },
      { label: 'Du bâtiment industriel', text: 'à la maison particulière', icon: 'house' },
    ],
    images: [DEPOSE, TENON, JUPITER],
    caption: "Dépose de l'ancienne charpente, L'Argentière-la-Bessée.",
  },
  tldr: "La déconstruction sélective consiste à démonter un bâtiment élément par élément pour trier et réemployer ses matériaux, au lieu de le démolir. Dans les Hautes-Alpes, 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée, confie cette dépose à des charpentiers : structure bois, couverture, isolation et parements, puis tri et transformation en atelier.",
  layout: [
    // 3.3 Déconstruction ou démolition ? (texte, tableau, texte après le tableau)
    {
      type: 'comparisonTable',
      kicker: 'Définition',
      title: "Déconstruire, ce n'est pas **démolir**",
      intro:
        "La démolition abat un ouvrage : les matériaux finissent mélangés, et le bois est difficile à récupérer intact. La déconstruction sélective démonte l'ouvrage élément par élément, en commençant par ce qui a été posé en dernier, et sépare les matériaux au fur et à mesure. Elle demande plus de soin sur place ; en échange, elle préserve ce qui peut resservir.",
      columns: ['', 'Démolition', 'Déconstruction sélective'],
      rows: [
        ['Objectif', 'Libérer le terrain ou le volume', 'Récupérer ce qui peut resservir'],
        ['Méthode', "Abattre l'ouvrage", 'Démonter élément par élément'],
        ['Matériaux', 'Mélangés', 'Séparés au fur et à mesure'],
        ['Le bois', 'Difficile à récupérer intact', "Déposé en pièces entières, quand c'est possible"],
        ['Ensuite', 'Évacuation', 'Tri, transformation en atelier, réemploi'],
      ],
      note: 'Les deux approches peuvent se compléter : sur une opération de démolition, nous pouvons intervenir en amont pour déposer le bois réemployable.',
      tone: 'cream',
    },
    // 3.4 Ce que nous déposons
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      anchor: 'materiaux',
      kicker: 'Matériaux',
      title: 'Ce que nos charpentiers **déposent**',
      intro:
        "Charpentiers de métier, nous pouvons déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage).",
      items: [
        {
          title: 'Charpente',
          icon: 'house',
          text: "La structure qui porte la toiture : fermes, pannes, chevrons. La ferme est l'assemblage triangulé qui reprend le poids du toit ; pannes et chevrons portent la couverture.",
        },
        {
          title: 'Solivage',
          icon: 'ruler',
          text: 'Les solives sont les poutres qui portent un plancher. Déposées entières, elles gardent toute leur longueur.',
        },
        {
          title: 'Murs à ossature bois',
          icon: 'wall',
          text: "Une ossature bois est une structure de montants et de traverses, garnie d'isolant et habillée de panneaux. Nous la démontons en séparant ses couches.",
        },
        {
          title: 'Couverture',
          icon: 'roof',
          text: "Le revêtement du toit, déposé avant la charpente qu'il recouvre.",
        },
        {
          title: 'Isolation',
          icon: 'layers',
          text: 'Les isolants en place, retirés et séparés du bois.',
        },
        {
          title: 'Parements',
          icon: 'saw',
          text: "Planchers, bardages et panneaux d'habillage. Le bardage est le revêtement en planches qui habille et protège une façade.",
        },
      ],
      tone: 'light',
    },
    // 3.5 Pourquoi des charpentiers
    {
      type: 'textImage',
      kicker: 'Notre savoir-faire',
      title: 'Qui sait assembler **sait démonter**',
      text: [
        'Une charpente traditionnelle tient par ses assemblages : **tenons et mortaises** (une partie mâle qui s\'emboîte dans une entaille), **traits de Jupiter** (un assemblage qui prolonge une pièce bout à bout), chevilles. Pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée.',
        "Jean-Michel Tardy, fondateur de 3B Charpente, a commencé la charpente en 1995, comme apprenti. Il a passé son CAP dans un CFA des Compagnons du Devoir, puis fait son Tour de France, en France métropolitaine, en Martinique et en Autriche. Ces assemblages, notre équipe les taille encore : on les voit dans nos réalisations, comme la réfection d'une charpente à L'Argentière-la-Bessée.",
        "C'est ce regard qui compte lors d'une déconstruction : savoir quelles pièces portent quoi, et dans quel ordre les libérer.",
      ].join('\n\n'),
      images: [DEPOSE],
      imagePosition: 'left',
      caption: "Dépose de l'ancienne charpente, première étape de sa réfection, à L'Argentière-la-Bessée.",
      links: [
        { label: "Découvrir l'équipe", href: '/a-propos/' },
        { label: 'Assemblages traditionnels', href: '/charpente-bois/' },
      ],
      tone: 'cream',
    },
    // 3.5 suite : citation en exergue
    {
      type: 'quote',
      text: "Le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin.",
      author: 'Jean-Michel Tardy',
      role: 'Fondateur de 3B Charpente',
      tone: 'cream',
    },
    // 3.6 Le déroulé d'une déconstruction
    {
      type: 'steps',
      variant: 'timeline',
      kicker: 'Sur le chantier',
      title: 'Une déconstruction, **étape par étape**',
      steps: [
        {
          title: 'Préparer',
          text: 'À partir du diagnostic, nous élaborons la feuille de route : ce qui sera déposé, dans quel ordre, avec quels moyens. Le chantier est préparé et mis en sécurité avant toute dépose.',
        },
        {
          title: 'Déposer',
          text: "Nos charpentiers démontent l'ouvrage dans l'ordre inverse de sa construction : ce qui a été posé en dernier part en premier. Les pièces sont déposées entières chaque fois que c'est possible.",
        },
        {
          title: 'Séparer',
          text: "Les matériaux sont séparés au fur et à mesure : bois réemployable, bois non réemployable, couverture, isolants. C'est ce qui rend la déconstruction « sélective ».",
        },
        {
          title: 'Évacuer',
          text: "Nous gérons la logistique du bois récupéré : chargement, transport et stockage jusqu'à nos ateliers.",
        },
        {
          title: 'Transformer',
          text: [
            "À l'atelier, le bois est trié, nettoyé et usiné.",
            '[Le bois de réemploi](/3b-recup/bois-de-reemploi/)',
          ].join('\n\n'),
        },
      ],
      tone: 'light',
    },
    // 3.7 Que deviennent les matériaux ? (le texte sous les cartes passe en introduction)
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Tri',
      title: 'Chaque matériau **à sa place**',
      intro:
        'Sur une opération soumise au diagnostic PEMD, ce tri aide aussi à renseigner le formulaire de récolement, qui rend compte de ce que sont devenus les matériaux.',
      items: [
        {
          title: 'Ce qui est réemployable',
          icon: 'recycle',
          text: 'Le bois réemployable part dans nos ateliers. Il y est trié, nettoyé et usiné, puis remis en œuvre sur nos chantiers : en bardage, en garde-corps, en pièces de charpente.',
        },
        {
          title: "Ce qui ne l'est pas",
          icon: 'info',
          muted: true,
          text: 'Les matériaux qui ne peuvent pas être réemployés sont triés pour être orientés vers les filières adaptées.',
        },
      ],
      cta: { label: 'Le diagnostic PEMD', href: '/3b-recup/diagnostic-pemd/' },
      tone: 'cream',
    },
    // 3.8 Pour qui
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Pour qui',
      title: 'Pour les professionnels **comme pour les particuliers**',
      items: [
        {
          title: 'Professionnels',
          icon: 'hammer',
          eyebrow:
            "Entreprises de démolition et de construction, architectes, maîtres d'ouvrage, collectivités",
          text: "Nous prenons en charge la dépose de la structure porteuse en bois et des parements, comme une étape à part entière de votre opération. Idéalement, nous sommes associés dès l'étude de faisabilité, pour que le réemploi soit prévu dans le projet et dans le planning.",
          link: { label: 'Commencer par le diagnostic', href: '/3b-recup/diagnostic-pemd/' },
        },
        {
          title: 'Particuliers',
          icon: 'house',
          eyebrow: 'Vous rénovez une grange, un chalet ou une maison de pays',
          text: "Une partie de la structure doit partir ? Nous déposons avec soin ce qui peut resservir, vieilles poutres, planchers ou bardage, pour le retravailler à l'atelier. Le reste, nous pouvons le rénover : charpente, isolation, aménagement des combles.",
          link: { label: 'Rénover une charpente', href: '/renovation-charpente-combles/' },
        },
      ],
      tone: 'light',
    },
    // 3.9 Sur le terrain
    {
      type: 'projects',
      mode: 'manual',
      label: 'brand',
      kicker: 'Réalisations',
      title: 'La dépose et le réemploi **sur nos chantiers**',
      items: [
        {
          project: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
          title: "Réfection d'une charpente à L'Argentière-la-Bessée",
          text: "La dépose de l'ancienne charpente, puis la taille et le levage de la nouvelle.",
        },
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          title: "Rénovation d'une maison d'habitation à L'Argentière-la-Bessée",
          text: 'Bardage vieux bois et garde-corps en bois de réemploi.',
        },
        {
          project: 'refection-d-une-toiture-a-ronatlon',
          title: "Réfection d'une toiture en vieux bois",
          text: 'Une ferme de charpente en vieux bois.',
        },
      ],
      tone: 'cream',
    },
    // 3.10 FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'La déconstruction **en questions**',
      faqs: [
        'deconstruction-selective-q1',
        'deconstruction-selective-q2',
        'deconstruction-selective-q3',
        'deconstruction-selective-q4',
        'deconstruction-selective-q5',
        'deconstruction-selective-q6',
      ],
      tone: 'light',
    },
    // Liens internes « à ajouter si la mise en page le permet »
    {
      type: 'list',
      style: 'pills',
      kicker: 'Voir aussi',
      items: [
        { title: "3B Récup'", link: { label: "3B Récup'", href: '/3b-recup/' } },
        {
          title: 'Murs à ossature bois',
          link: { label: 'murs à ossature bois', href: '/maison-ossature-bois/' },
        },
        {
          title: 'Notre guide du réemploi du bois',
          link: { label: 'notre guide du réemploi du bois', href: '/conseils/reemploi-bois-construction/' },
        },
      ],
      tone: 'cream',
    },
    // 3.11 Appel à l'action
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: 'Un bâtiment à déconstruire ?',
      title: 'Démontons-le **pièce par pièce**',
      text: 'Dites-nous où se trouve le bâtiment, ce qu\'il faut déposer et ce que vous en attendez. Nous en parlons lors d\'une première rencontre : chaque projet débute par une étude sur mesure.',
      primary: { label: 'Parlons de votre bâtiment', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'deconstruction-selective-q1',
      topic: 'recup',
      question: 'Quelle est la différence entre démolition et déconstruction ?',
      answer:
        "La démolition abat un ouvrage : les matériaux finissent mélangés et le bois est difficile à récupérer intact. La déconstruction sélective démonte le bâtiment élément par élément, dans l'ordre inverse de sa construction, et sépare les matériaux au fur et à mesure. Elle demande plus de soin, mais elle préserve ce qui peut être réemployé.",
    },
    {
      key: 'deconstruction-selective-q2',
      topic: 'recup',
      question: "Que peut-on déposer lors d'une déconstruction sélective ?",
      answer:
        "Chez 3B Récup', nos charpentiers peuvent déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons du bâtiment industriel à la maison particulière, dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes.",
    },
    {
      key: 'deconstruction-selective-q3',
      topic: 'recup',
      question: 'Pourquoi confier la déconstruction à un charpentier ?',
      answer:
        "Parce qu'une charpente tient par ses assemblages : tenons, mortaises, traits de Jupiter, chevilles. Pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée. Chez 3B Charpente, le fondateur s'est formé chez les Compagnons du Devoir et l'équipe taille encore ces assemblages traditionnels sur ses chantiers.",
    },
    {
      key: 'deconstruction-selective-q4',
      topic: 'recup',
      question: 'Que devient le bois déposé ?',
      answer:
        'Le bois réemployable part dans nos ateliers, où il est trié, nettoyé et usiné, puis remis en œuvre sur nos chantiers de construction et de rénovation : en bardage, en garde-corps ou en pièces de charpente, par exemple. Les matériaux qui ne peuvent pas être réemployés sont triés pour être orientés vers les filières adaptées.',
    },
    {
      key: 'deconstruction-selective-q5',
      topic: 'recup',
      question: 'Faut-il un diagnostic avant de déconstruire ?',
      answer:
        "Pour les bâtiments de plus de 1 000 m² de surface de plancher, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative. Pour les autres, un diagnostic ressources volontaire permet de savoir ce qui mérite d'être déposé avec soin.",
    },
    {
      key: 'deconstruction-selective-q6',
      topic: 'recup',
      question: 'Intervenez-vous pour les entreprises de démolition ?',
      answer:
        "Oui. 3B Récup' s'adresse aux entreprises de construction et de démolition, aux architectes, aux collectivités et aux particuliers. Sur une opération de démolition, nos charpentiers peuvent intervenir en amont pour déposer la structure bois et les parements réemployables. Le mieux est de nous associer dès l'étude de faisabilité, pour prévoir cette étape dans le planning.",
    },
  ],
  validationPoints: [
    {
      question:
        "Chantiers de déconstruction réalisés : au moins un exemple documenté (commune, année, type de bâtiment, éléments déposés, devenir), pour remplacer ou compléter la carte « Réfection d'une charpente ». Un bâtiment industriel a-t-il déjà été déconstruit (pastille « Du bâtiment industriel à la maison particulière ») ?",
      decision:
        "Les trois cartes de réalisations existantes sont publiées ; aucun volume ni tonnage. La formule « du bâtiment industriel à la maison particulière » (maquette validée) est conservée.",
      priority: 'high',
    },
    {
      question:
        "Devenir des matériaux non réemployables (bois, couverture, isolants) : filières réellement utilisées et répartition des responsabilités avec l'entreprise de démolition.",
      decision:
        "Phrase neutre publiée (carte « Ce qui ne l'est pas » et FAQ « Que devient le bois déposé ? ») : « Les matériaux qui ne peuvent pas être réemployés sont triés pour être orientés vers les filières adaptées. »",
      priority: 'high',
    },
    {
      question:
        "Moyens et sécurité : levage, manutention, étaiement, protections (étape « Préparer ») ; moyens de transport et capacité de stockage (étape « Évacuer »).",
      decision: 'Aucun moyen détaillé : seules les phrases générales des étapes sont publiées.',
      priority: 'normal',
    },
    {
      question:
        'Repérages réglementaires préalables (par exemple amiante et plomb dans les bâtiments anciens) : qui s\'en charge quand 3B intervient ?',
      decision: "Rien n'est écrit sur la page à ce sujet.",
      priority: 'normal',
    },
    {
      question:
        "Sous-traitance pour les entreprises de démolition : 3B intervient-il bien comme « étape à part entière » d'une opération pilotée par un autre (lot, sous-traitance, contrat direct avec le maître d'ouvrage) ?",
      decision: 'Texte de la carte « Professionnels » publié tel que rédigé, sans forme de contrat précisée.',
      priority: 'normal',
    },
    {
      question:
        'Particuliers : le bois déposé peut-il être retravaillé et reposé sur leur propre chantier ?',
      decision:
        "Carte « Particuliers » publiée sans cette promesse : « Nous déposons avec soin ce qui peut resservir… pour le retravailler à l'atelier. »",
      priority: 'normal',
    },
    {
      question: "Commune « Ronatlon » de la réalisation « Réfection d'une toiture » : nom exact ?",
      decision: "Carte affichée « Réfection d'une toiture en vieux bois », sans commune.",
      priority: 'normal',
    },
    {
      question:
        "Photos : les bois de la « dépose de l'ancienne charpente » (L'Argentière-la-Bessée) ont-ils été réemployés ? Photos à demander : chantier de déconstruction complet, pièces déposées et repérées, équipe en sécurité en hauteur, camion chargé de bois récupéré.",
      decision:
        "Les légendes n'attribuent aucun réemploi à cette photo. La photo « chargement » (monts du Lyonnais, éléments neufs) n'est pas utilisée pour l'étape « Évacuer », faute de légende neutre possible à cet endroit.",
      priority: 'low',
    },
  ],
  photoAlts: [
    {
      photo: DEPOSE,
      alt: "Dépose de l'ancienne charpente d'une maison par les charpentiers de 3B Charpente à L'Argentière-la-Bessée",
      caption: "Dépose de l'ancienne charpente, L'Argentière-la-Bessée.",
    },
    {
      photo: TENON,
      alt: "Taille d'un tenon à double embrèvement à la besaiguë, réfection d'une charpente à L'Argentière-la-Bessée",
      caption: 'Tenon à double embrèvement taillé à la besaiguë.',
    },
    {
      photo: JUPITER,
      alt: "Trait de Jupiter assemblé sur une pièce de charpente, 3B Charpente, L'Argentière-la-Bessée",
      caption: 'Trait de Jupiter assemblé.',
    },
    {
      photo: GARDE_CORPS,
      alt: "Garde-corps en bois de réemploi dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
    },
  ],
}
