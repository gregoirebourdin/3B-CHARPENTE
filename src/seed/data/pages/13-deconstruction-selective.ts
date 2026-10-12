import type { SeedPage } from '../../types'

/** Fiche 13 · Déconstruction sélective · /3b-recup/deconstruction-selective/ */

const DEPOSE =
  "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG"
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
    text: 'Démonter plutôt que démolir. Nos charpentiers **déposent pièce par pièce** charpente, solivage, ossature, couverture, isolation et parements : le bois **retrouve un chantier** au lieu de partir en déchet.',
    primaryCta: { label: 'Parlons de votre bâtiment', href: '/contact/' },
    secondaryCta: {
      label: 'Ce que nous déposons',
      href: '/3b-recup/deconstruction-selective/#materiaux',
    },
    proofs: [
      { label: 'Charpentiers de métier', text: 'formés aux assemblages', icon: 'hammer' },
      { label: 'Du bâtiment industriel', text: 'à la maison particulière', icon: 'house' },
      { label: 'Tri au fur et à mesure', text: 'bois, couverture, isolants', icon: 'recycle' },
    ],
    images: [DEPOSE, TENON, JUPITER],
    caption: "Dépose de l'ancienne charpente, L'Argentière-la-Bessée.",
    sheet: [
      { label: 'Structure', value: 'Charpente, solivage, ossature bois' },
      { label: 'Enveloppe', value: 'Couverture, isolation, parements' },
      { label: 'Destination', value: 'Notre atelier, puis nos chantiers' },
    ],
  },
  tldr: "La déconstruction sélective démonte un bâtiment élément par élément pour trier et réemployer ses matériaux, au lieu de le démolir. Dans les Hautes-Alpes, 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée, la confie à des charpentiers : structure bois, couverture, isolation, parements, puis transformation à l'atelier.",
  layout: [
    // Déconstruction ou démolition ?
    {
      type: 'comparisonTable',
      kicker: 'Définition',
      title: "Déconstruire, ce n'est pas **démolir**",
      intro:
        "La déconstruction sélective démonte l'ouvrage élément par élément, en commençant par ce qui a été posé en dernier. Plus de soin sur place ; en échange, ce qui peut resservir est préservé.",
      columns: ['', 'Démolition', 'Déconstruction sélective'],
      rows: [
        ['Objectif', 'Libérer le terrain ou le volume', 'Récupérer ce qui peut resservir'],
        ['Méthode', "Abattre l'ouvrage", 'Démonter élément par élément'],
        ['Matériaux', 'Mélangés', 'Séparés au fur et à mesure'],
        [
          'Le bois',
          'Difficile à récupérer intact',
          "Déposé en pièces entières, quand c'est possible",
        ],
        ['Ensuite', 'Évacuation', 'Tri, transformation en atelier, réemploi'],
      ],
      note: 'Les deux approches peuvent se compléter : sur une opération de démolition, nous pouvons intervenir en amont pour déposer le bois réemployable.',
    },
    // Ce que nous déposons
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      anchor: 'materiaux',
      tone: 'light',
      kicker: 'Matériaux',
      title: 'Ce que nos charpentiers **déposent**',
      intro:
        "Structure bois, couverture, isolation, parements : tout ce qu'un charpentier sait démonter.",
      items: [
        {
          title: 'Charpente',
          icon: 'house',
          text: "Fermes, pannes, chevrons : la structure qui porte le toit. La ferme est l'assemblage triangulé qui reprend son poids.",
        },
        {
          title: 'Solivage',
          icon: 'ruler',
          text: 'Les poutres qui portent un plancher. Déposées entières, elles gardent toute leur longueur.',
        },
        {
          title: 'Murs à ossature bois',
          icon: 'wall',
          text: "Montants, traverses, isolant, panneaux : nous démontons l'ossature en séparant ses couches.",
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
          text: "Planchers, bardages (les planches qui habillent une façade) et panneaux d'habillage.",
        },
      ],
    },
    // Pourquoi des charpentiers
    {
      type: 'textImage',
      kicker: 'Notre savoir-faire',
      title: 'Qui sait assembler **sait démonter**',
      text: "Une charpente tient par ses assemblages : **tenons et mortaises** (une partie qui s'emboîte dans une entaille), **traits de Jupiter** (qui prolongent une pièce bout à bout), chevilles.\n\nPour la démonter sans abîmer les pièces, il faut savoir comment elle a été taillée : quelles pièces portent quoi, et dans quel ordre les libérer.",
      points: [
        '1995 : Jean-Michel Tardy commence la charpente, comme apprenti',
        'Un CAP chez les Compagnons du Devoir, puis le Tour de France : métropole, Martinique, Autriche',
        "Ces assemblages, l'équipe les taille encore, comme sur la réfection d'une charpente à L'Argentière-la-Bessée",
      ],
      images: ['refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter .JPG'],
      imagePosition: 'left',
      caption:
        "Trait de Jupiter taillé pour la réfection d'une charpente, à L'Argentière-la-Bessée.",
      links: [
        { label: "Découvrir l'équipe", href: '/a-propos/' },
        { label: 'Assemblages traditionnels', href: '/charpente-bois/' },
      ],
    },
    {
      type: 'quote',
      text: "Le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin.",
      author: 'Jean-Michel Tardy',
      role: 'Fondateur de 3B Charpente',
    },
    // Le déroulé d'une déconstruction
    {
      type: 'steps',
      variant: 'timeline',
      tone: 'light',
      kicker: 'Sur le chantier',
      title: 'Une déconstruction, **étape par étape**',
      steps: [
        {
          title: 'Préparer',
          text: 'À partir du diagnostic, une feuille de route : quoi déposer, dans quel ordre, avec quels moyens. Le chantier est mis en sécurité.',
        },
        {
          title: 'Déposer',
          text: "L'ouvrage est démonté dans l'ordre inverse de sa construction, en pièces entières chaque fois que c'est possible.",
        },
        {
          title: 'Séparer',
          text: 'Bois réemployable ou non, couverture, isolants : tout est séparé au fur et à mesure. D’où le mot « sélective ».',
        },
        {
          title: 'Évacuer',
          text: "Chargement, transport et stockage du bois récupéré jusqu'à nos ateliers.",
        },
        {
          title: 'Transformer',
          text: "Le bois est trié, nettoyé et usiné à l'atelier.\n\n[Le bois de réemploi](/3b-recup/bois-de-reemploi/)",
        },
      ],
    },
    // Que deviennent les matériaux ?
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Tri',
      title: 'Chaque matériau **à sa place**',
      intro:
        'Sur une opération soumise au diagnostic PEMD, ce tri aide aussi à remplir le formulaire de récolement : ce que sont devenus les matériaux.',
      items: [
        {
          title: 'Ce qui est réemployable',
          icon: 'recycle',
          text: "Il part à l'atelier : trié, nettoyé, usiné, puis remis en œuvre en bardage, en garde-corps ou en charpente.",
        },
        {
          title: "Ce qui ne l'est pas",
          icon: 'info',
          muted: true,
          text: 'Trié pour être orienté vers les filières adaptées.',
        },
      ],
      cta: { label: 'Le diagnostic PEMD', href: '/3b-recup/diagnostic-pemd/' },
    },
    // Pour qui
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      tone: 'light',
      kicker: 'Pour qui',
      title: 'Pour les professionnels **comme pour les particuliers**',
      items: [
        {
          title: 'Professionnels',
          icon: 'hammer',
          eyebrow:
            "Entreprises de démolition et de construction, architectes, maîtres d'ouvrage, collectivités",
          text: 'La dépose du bois et des parements, comme une étape à part entière de votre opération. Associez-nous dès la faisabilité, pour la prévoir au planning.',
          link: { label: 'Commencer par le diagnostic', href: '/3b-recup/diagnostic-pemd/' },
        },
        {
          title: 'Particuliers',
          icon: 'house',
          eyebrow: 'Vous rénovez une grange, un chalet ou une maison de pays',
          text: 'Une partie de la structure doit partir ? Nous déposons avec soin poutres, planchers ou bardage, et pouvons rénover le reste : charpente, isolation, combles.',
          link: { label: 'Rénover une charpente', href: '/renovation-charpente-combles/' },
        },
      ],
    },
    // Sur le terrain
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
          text: "L'ancienne charpente déposée, puis la nouvelle taillée et levée.",
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
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
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
    },
    // Voir aussi
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
          link: {
            label: 'notre guide du réemploi du bois',
            href: '/conseils/reemploi-bois-construction/',
          },
        },
      ],
    },
    // Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      kicker: 'Un bâtiment à déconstruire ?',
      title: 'Démontons-le **pièce par pièce**',
      text: "Dites-nous où se trouve le bâtiment, ce qu'il faut déposer et ce que vous en attendez : nous en parlons lors d'une première rencontre.",
      primary: { label: 'Parlons de votre bâtiment', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'deconstruction-selective-q1',
      topic: 'recup',
      question: 'Quelle est la différence entre démolition et déconstruction ?',
      answer:
        "La démolition abat l'ouvrage : les matériaux finissent mélangés, le bois est difficile à récupérer intact. La déconstruction sélective démonte le bâtiment élément par élément, dans l'ordre inverse de sa construction, et sépare les matériaux au fur et à mesure. Plus de soin, mais ce qui peut resservir est préservé.",
    },
    {
      key: 'deconstruction-selective-q2',
      topic: 'recup',
      question: "Que peut-on déposer lors d'une déconstruction sélective ?",
      answer:
        "La structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons du bâtiment industriel à la maison particulière, dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes.",
    },
    {
      key: 'deconstruction-selective-q3',
      topic: 'recup',
      question: 'Pourquoi confier la déconstruction à un charpentier ?',
      answer:
        "Parce qu'une charpente tient par ses assemblages : tenons, mortaises, traits de Jupiter, chevilles. Pour la démonter sans abîmer les pièces, il faut savoir comment elle a été taillée. Notre fondateur s'est formé chez les Compagnons du Devoir, et l'équipe taille encore ces assemblages.",
    },
    {
      key: 'deconstruction-selective-q4',
      topic: 'recup',
      question: 'Que devient le bois déposé ?',
      answer:
        'Le bois réemployable part dans nos ateliers : trié, nettoyé, usiné, puis remis en œuvre sur nos chantiers, en bardage, en garde-corps ou en charpente. Les matériaux qui ne peuvent pas être réemployés sont triés pour être orientés vers les filières adaptées.',
    },
    {
      key: 'deconstruction-selective-q5',
      topic: 'recup',
      question: 'Faut-il un diagnostic avant de déconstruire ?',
      answer:
        "Oui, un diagnostic PEMD, pour les bâtiments de plus de 1 000 m² de surface de plancher ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Pour les autres, un diagnostic ressources volontaire dit ce qui mérite d'être déposé avec soin.",
    },
    {
      key: 'deconstruction-selective-q6',
      topic: 'recup',
      question: 'Intervenez-vous pour les entreprises de démolition ?',
      answer:
        "Oui. Sur une opération de démolition, nos charpentiers peuvent intervenir en amont pour déposer la structure bois et les parements réemployables. 3B Récup' travaille aussi pour les entreprises de construction, les architectes, les collectivités et les particuliers. Associez-nous dès la faisabilité, pour prévoir cette étape au planning.",
    },
  ],
  validationPoints: [
    {
      question:
        "Chantiers de déconstruction réalisés : au moins un exemple documenté (commune, année, type de bâtiment, éléments déposés, devenir), pour remplacer ou compléter la carte « Réfection d'une charpente ». Un bâtiment industriel a-t-il déjà été déconstruit (pastille « Du bâtiment industriel à la maison particulière ») ?",
      decision:
        'Les trois cartes de réalisations existantes sont publiées ; aucun volume ni tonnage. La formule « du bâtiment industriel à la maison particulière » (maquette validée) est conservée.',
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
        'Moyens et sécurité : levage, manutention, étaiement, protections (étape « Préparer ») ; moyens de transport et capacité de stockage (étape « Évacuer »).',
      decision: 'Aucun moyen détaillé : seules les phrases générales des étapes sont publiées.',
      priority: 'normal',
    },
    {
      question:
        "Repérages réglementaires préalables (par exemple amiante et plomb dans les bâtiments anciens) : qui s'en charge quand 3B intervient ?",
      decision: "Rien n'est écrit sur la page à ce sujet.",
      priority: 'normal',
    },
    {
      question:
        "Sous-traitance pour les entreprises de démolition : 3B intervient-il bien comme « étape à part entière » d'une opération pilotée par un autre (lot, sous-traitance, contrat direct avec le maître d'ouvrage) ?",
      decision:
        'Texte de la carte « Professionnels » publié tel que rédigé, sans forme de contrat précisée.',
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
