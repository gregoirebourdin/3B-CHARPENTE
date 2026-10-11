import type { SeedPage } from '../../types'

/** Fiche 11 · 3B Récup' (accueil de la filière) · /3b-recup/ */

const FERME = 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG'
const GARDE_CORPS =
  'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG'
const BARDAGE = 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG'
const PIERRES = 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/support maçonné en pierre récupérées.jpg'

export const page: SeedPage = {
  kind: 'page',
  slug: '3b-recup',
  title: '3B Récup’',
  seo: {
    title: "3B Récup' : réemploi du bois Hautes-Alpes | 3B Charpente",
    description:
      "Déconstruction et réemploi du bois dans les Hautes-Alpes : 3B Récup', la filière de 3B Charpente, dépose, transforme et repose votre bois. Parlons-en.",
    image: FERME,
  },
  hero: {
    variant: 'collage',
    kicker: "3B Récup' · la filière réemploi de 3B Charpente",
    title: "3B Récup' : **déconstruction et réemploi du bois** dans les Hautes-Alpes",
    text: "Chez 3B Récup', nous sommes spécialisés dans **la récupération et la transformation du bois issu de la déconstruction** en solutions de construction durables. **De la dépose à la repose**, nos charpentiers accompagnent les entreprises de construction et de démolition, les architectes, les collectivités et les particuliers.",
    primaryCta: { label: 'Parlons de votre bâtiment', href: '/contact/' },
    secondaryCta: { label: 'Voir la méthode', href: '/3b-recup/#methode' },
    proofs: [
      { label: 'Depuis 2007', text: '3B Charpente', icon: 'calendar' },
      { label: 'De la dépose à la repose', icon: 'recycle' },
    ],
    images: [FERME, GARDE_CORPS, BARDAGE],
    caption: "Ferme de charpente en vieux bois, réfection d'une toiture.",
  },
  tldr: "3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Nos charpentiers évaluent le bois réemployable d'un bâtiment, le déposent avec soin, le trient, le nettoient et l'usinent dans nos ateliers, puis le reposent sur nos chantiers de construction et de rénovation.",
  layout: [
    // 3.3 Ce qu'est 3B Récup'
    {
      type: 'textImage',
      kicker: 'Notre filière',
      title: "Le bois d'un bâtiment mérite **une deuxième vie**",
      text: [
        "3B Récup' est une initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective. La **déconstruction sélective** consiste à démonter un bâtiment élément par élément, au lieu de le démolir, pour garder les matériaux intacts et les trier. Le **réemploi**, c'est remettre en œuvre dans un nouvel ouvrage un matériau qui a déjà servi.",
        "Concrètement, 3B Récup' :",
        [
          '- **intervient sur site** pour déconstruire la structure porteuse en bois ;',
          '- **gère la logistique** du bois récupéré ;',
          '- **le transforme dans nos ateliers**, où il est trié, nettoyé et usiné ;',
          '- **le réemploie sur nos chantiers** de construction et de rénovation.',
        ].join('\n'),
        "Nous intervenons du bâtiment industriel à la maison particulière. Pour nous, charpentiers, c'est aussi une manière d'apporter du sens supplémentaire à notre métier.",
      ].join('\n\n'),
      images: [GARDE_CORPS],
      imagePosition: 'right',
      caption: "Garde-corps en bois de réemploi, maison rénovée à L'Argentière-la-Bessée.",
      tone: 'cream',
    },
    // 3.4 Pourquoi réemployer le bois (fond forêt, seule photo d'ambiance de la page)
    {
      type: 'manifesto',
      layout: 'columns',
      kicker: 'Les défis du secteur',
      title: 'Construire avec **ce qui existe déjà**',
      text: "La RE2020, la réglementation environnementale 2020, pousse le secteur du bâtiment à réduire son impact carbone sur tout le cycle de vie des bâtiments. En réponse, 3B Charpente, via 3B Récup', s'intègre pleinement dans la structuration et la promotion de la filière du réemploi.",
      items: [
        {
          title: "Réduire l'impact environnemental",
          text: "Prolonger la vie des matériaux de construction, c'est réduire les déchets et l'impact environnemental d'un chantier.",
        },
        {
          title: "Maximiser l'utilisation des ressources",
          text: 'Le troisième B de notre nom, c\'est le Bois, « un être vivant ». Une pièce qui a porté une toiture peut encore servir, si l\'on sait la déposer et la préparer.',
        },
        {
          title: 'Compléter le bois local',
          text: 'Pour le bois neuf, nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Le bois de réemploi complète cette ressource.',
        },
      ],
      image: 'ambiance/foret.png',
    },
    // 3.5 Pour qui
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Un projet ?',
      title: 'Professionnels ou particuliers, **des solutions sur mesure**',
      items: [
        {
          title: 'Professionnels du bâtiment',
          icon: 'ruler',
          eyebrow:
            "Architectes, maîtres d'ouvrage, collectivités, entreprises de construction et de démolition",
          text: "Vous préparez une démolition, une réhabilitation ou un projet avec des matériaux de réemploi ? Associez-nous dès l'étude de faisabilité. Nous évaluons le **gisement bois** (les pièces réemployables, leur état, leurs usages possibles) en amont ou en appui du **diagnostic PEMD** (produits, équipements, matériaux et déchets). Puis nos charpentiers déposent, transforment et reposent : un seul interlocuteur, de la dépose à la repose.",
          link: { label: 'Diagnostic et gisement bois', href: '/3b-recup/diagnostic-pemd/' },
        },
        {
          title: 'Particuliers',
          icon: 'house',
          eyebrow: 'Vous rénovez une grange, un chalet ou une maison de pays',
          text: 'Vos poutres, vos planchers ou votre vieux bardage ont une histoire ? Nous regardons avec vous ce qui peut rester en place, être déposé ou retravaillé dans nos ateliers pour votre projet. Comme tous nos projets, le vôtre débute par une étude sur mesure.',
          link: { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
        },
      ],
      tone: 'light',
    },
    // 3.6 La méthode (HowTo), ordre décidé : Diagnostic → Stratégie → Intervention → Transformation → Repose
    {
      type: 'steps',
      variant: 'tabs',
      isHowTo: true,
      anchor: 'methode',
      kicker: "L'approche 3B Récup'",
      title: 'Du diagnostic à la repose, **une prestation globale**',
      intro:
        "Nous proposons une prestation globale allant du diagnostic à la repose des matériaux. Cinq étapes, dans l'ordre du chantier.",
      steps: [
        {
          title: 'Diagnostic',
          text: [
            "Notre équipe réalise une expertise du bâtiment pour identifier les matériaux présents et évaluer leur potentiel de réemploi, en amont ou en appui du diagnostic PEMD. Cette évaluation permet de mettre en place une stratégie d'intervention précise, adaptée aux spécificités de chaque projet.",
            '[Le diagnostic et le gisement bois](/3b-recup/diagnostic-pemd/)',
          ].join('\n\n'),
        },
        {
          title: 'Stratégie',
          text: "Une fois le diagnostic complet, nous élaborons une feuille de route détaillée. Cette stratégie d'intervention est conçue pour maximiser l'efficacité du projet tout en préservant l'intégrité et la valeur des matériaux réutilisables.",
        },
        {
          title: 'Intervention',
          text: [
            "Nos charpentiers qualifiés interviennent sur le site pour déposer les matériaux récupérés. Nous gérons ensuite la logistique du bois récupéré jusqu'à nos ateliers.",
            '[La déconstruction sélective](/3b-recup/deconstruction-selective/)',
          ].join('\n\n'),
        },
        {
          title: 'Transformation',
          text: [
            "Dans nos ateliers, les matériaux récupérés sont soigneusement triés, nettoyés et usinés. Ce processus de transformation et de reconditionnement est essentiel pour préparer les matériaux à leur remise en œuvre, pour qu'ils répondent aux exigences de qualité et de sécurité de leur nouvel usage.",
            '[Le bois de réemploi](/3b-recup/bois-de-reemploi/)',
          ].join('\n\n'),
        },
        {
          title: 'Repose',
          text: "La phase de repose des matériaux sur le chantier implique l'adaptation de notre système constructif en fonction des matériaux de réemploi : c'est le projet qui s'adapte au matériau.",
        },
      ],
      tone: 'cream',
    },
    // 3.7 Ce que nous pouvons déposer (le « texte après les cartes » rejoint l'introduction)
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      kicker: 'Matériaux',
      title: 'Ce que nos charpentiers **peuvent déposer**',
      intro:
        "Charpentiers de métier, nous pouvons déposer les éléments de structure bois, la couverture, l'isolation et les parements. Qui sait comment une charpente a été assemblée sait la démonter en préservant les pièces : c'est l'intérêt de confier la déconstruction à des charpentiers.",
      items: [
        {
          title: 'Structure bois',
          icon: 'house',
          text: 'Charpente, solivage et murs à ossature bois. Le solivage est l\'ensemble des solives, les poutres qui portent un plancher.',
        },
        {
          title: 'Couverture et isolation',
          icon: 'roof',
          text: "La couverture et l'isolation en place, séparées du bois.",
        },
        {
          title: 'Parements',
          icon: 'saw',
          text: 'Planchers, bardages et panneaux d\'habillage. Le bardage est le revêtement en planches qui habille et protège une façade.',
        },
      ],
      cta: { label: 'Découvrir la déconstruction sélective', href: '/3b-recup/deconstruction-selective/' },
      tone: 'light',
    },
    // 3.8 Preuves : le réemploi dans nos réalisations
    {
      type: 'projects',
      mode: 'manual',
      label: 'brand',
      kicker: 'Réalisations',
      title: 'Le réemploi, **déjà dans nos chantiers**',
      items: [
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          title: "Rénovation d'une maison d'habitation à L'Argentière-la-Bessée",
          text: 'Bardage vieux bois en façade et garde-corps en bois de réemploi.',
        },
        {
          project: 'refection-d-une-toiture-a-ronatlon',
          title: "Réfection d'une toiture en vieux bois",
          text: "Une ferme de charpente en vieux bois. La ferme est l'assemblage triangulé qui porte la toiture.",
        },
        {
          project: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
          title: 'Maison à ossature bois dans les monts du Lyonnais',
          text: 'Le même réflexe au-delà du bois : un support maçonné en pierres récupérées.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
      tone: 'cream',
    },
    // 3.9 Les trois prestations de 3B Récup'
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      kicker: 'Aller plus loin',
      title: 'Le réemploi du bois, **étape par étape**',
      items: [
        {
          title: 'Diagnostic et gisement (PEMD)',
          icon: 'search',
          text: 'Expertise du bois réemployable, en amont ou en appui du diagnostic PEMD, et diagnostic ressources sous 1 000 m².',
          link: { label: 'En savoir plus', href: '/3b-recup/diagnostic-pemd/' },
        },
        {
          title: 'Déconstruction sélective',
          icon: 'hammer',
          text: 'Démonter plutôt que démolir : structure, couverture, isolation et parements déposés par des charpentiers.',
          link: { label: 'En savoir plus', href: '/3b-recup/deconstruction-selective/' },
        },
        {
          title: 'Bois de réemploi',
          icon: 'recycle',
          text: 'Vieux bois, poutres anciennes, bardage : tri, nettoyage et usinage avant la repose.',
          link: { label: 'En savoir plus', href: '/3b-recup/bois-de-reemploi/' },
        },
      ],
      cta: { label: 'Lire notre guide du réemploi du bois', href: '/conseils/reemploi-bois-construction/' },
      tone: 'light',
    },
    // 3.10 FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **le réemploi du bois**',
      faqs: ['3b-recup-q1', '3b-recup-q2', '3b-recup-q3', '3b-recup-q4', '3b-recup-q5', '3b-recup-q6'],
      tone: 'cream',
    },
    // Liens internes « à ajouter dans le texte ou en bas de page »
    {
      type: 'list',
      style: 'pills',
      kicker: 'Voir aussi',
      items: [
        {
          title: 'Rénover la charpente existante',
          link: { label: 'rénover la charpente existante', href: '/renovation-charpente-combles/' },
        },
        {
          title: 'Charpente bois traditionnelle',
          link: { label: 'charpente bois traditionnelle', href: '/charpente-bois/' },
        },
        {
          title: 'Garde-corps et balcons bois',
          link: { label: 'garde-corps et balcons bois', href: '/balcon-terrasse-abri-bois/' },
        },
        {
          title: 'Jean-Michel Tardy, formé chez les Compagnons du Devoir',
          link: { label: 'Jean-Michel Tardy, formé chez les Compagnons du Devoir', href: '/a-propos/' },
        },
        {
          title: 'Charpentier en Vallouise et Pays des Écrins',
          link: {
            label: 'charpentier en Vallouise et Pays des Écrins',
            href: '/charpentier-vallouise-pays-des-ecrins/',
          },
        },
      ],
      tone: 'light',
    },
    // 3.11 Appel à l'action
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: 'Transformez votre projet avec le réemploi',
      title: 'Parlons de **votre bâtiment**',
      text: "Architecte, entreprise du bâtiment, collectivité ou particulier, 3B Récup' saura vous apporter des solutions personnalisées. Le réemploi peut réduire l'impact environnemental d'un chantier, et parfois ses coûts. Chaque projet débute par une étude sur mesure.",
      primary: { label: 'Parlons de votre bâtiment', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: '3b-recup-q1',
      topic: 'recup',
      question: "Qu'est-ce que 3B Récup' ?",
      answer:
        "3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Nos charpentiers évaluent le bois réemployable d'un bâtiment, le déposent, le trient, le nettoient et l'usinent dans nos ateliers, puis le remettent en œuvre sur nos chantiers de construction et de rénovation.",
    },
    {
      key: '3b-recup-q2',
      topic: 'recup',
      question: "Où intervient 3B Récup' ?",
      answer:
        "Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes. Les réalisations publiées de 3B Charpente vont de Briançon, Vallouise et Pelvoux jusqu'à Gresse-en-Vercors et aux monts du Lyonnais. Pour un chantier de déconstruction, appelez-nous : nous étudions chaque demande.",
    },
    {
      key: '3b-recup-q3',
      topic: 'recup',
      question: 'Quels matériaux pouvez-vous déposer ?',
      answer:
        "Charpentiers de métier, nous pouvons déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons sur tous types de chantiers, du bâtiment industriel à la maison particulière. Le bois réemployable est ensuite trié, nettoyé et usiné dans nos ateliers.",
    },
    {
      key: '3b-recup-q4',
      topic: 'recup',
      question: "Un particulier peut-il faire appel à 3B Récup' ?",
      answer:
        "Oui. Si vous rénovez une grange, un chalet ou une maison de pays, nous regardons avec vous ce qui peut être conservé, déposé et retravaillé. 3B Récup' s'adresse aussi aux architectes, aux collectivités et aux entreprises de construction et de démolition. Chaque projet débute par une étude sur mesure, lors d'une première rencontre.",
    },
    {
      key: '3b-recup-q5',
      topic: 'recup',
      question: 'Faut-il un diagnostic PEMD avant de déconstruire ?',
      answer:
        'Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. En dessous, un diagnostic ressources, volontaire, permet de repérer les matériaux réemployables.',
    },
    {
      key: '3b-recup-q6',
      topic: 'recup',
      question: 'Utilisez-vous du bois de réemploi dans vos chantiers ?',
      answer:
        "Oui. Nous utilisons du bois issu des chantiers de déconstruction, transformé et usiné dans notre atelier, puis intégré à nos chantiers de construction et de rénovation. On le retrouve par exemple en bardage vieux bois et en garde-corps dans une maison rénovée à L'Argentière-la-Bessée, ou dans une ferme de charpente en vieux bois.",
    },
  ],
  validationPoints: [
    {
      question:
        "Diagnostic PEMD : 3B réalise-t-il lui-même le diagnostic PEMD réglementaire (compétences, assurance) ?",
      decision:
        "Variante A publiée (onglet 01 de la méthode, carte « Professionnels », carte « Diagnostic et gisement ») : expertise du gisement bois « en amont ou en appui du diagnostic PEMD », diagnostic ressources sous 1 000 m². La variante B (« Notre équipe effectue une expertise et un diagnostic PEMD… ») est rédigée dans la fiche 11 et reste disponible si Jean fournit attestation et assurance.",
      priority: 'high',
    },
    {
      question:
        'Ordre de la méthode : valider Diagnostic → Stratégie → Intervention → Transformation → Repose (la maquette mettait Intervention en dernier).',
      decision: "Ordre chronologique appliqué (onglets 01 à 05 et données HowTo).",
      priority: 'normal',
    },
    {
      question:
        "« Normes de qualité et de sécurité » (onglet 04 Transformation) : lesquelles ? Comment la capacité d'une pièce porteuse de réemploi est-elle vérifiée (classement, avis d'un bureau d'études) ? L'assurance décennale couvre-t-elle les ouvrages en bois de réemploi ?",
      decision:
        "Fin de phrase remplacée par « pour qu'ils répondent aux exigences de qualité et de sécurité de leur nouvel usage ». Aucune norme citée.",
      priority: 'high',
    },
    {
      question:
        'Particuliers : le bois déposé chez un particulier peut-il être transformé à l\'atelier puis reposé sur son propre chantier ?',
      decision:
        "Carte « Particuliers » publiée sans la phrase de confirmation ; seul le texte « nous regardons avec vous ce qui peut rester en place, être déposé ou retravaillé » est conservé.",
      priority: 'normal',
    },
    {
      question:
        "Chantiers de déconstruction réalisés : communes, années, types de bâtiment (un bâtiment industriel a-t-il déjà été déconstruit ?), éléments déposés, ce qu'ils sont devenus.",
      decision:
        "Aucune carte « chantier de déconstruction » ajoutée aux réalisations ; aucun volume ni tonnage publié. La formule « du bâtiment industriel à la maison particulière » (maquette validée) est conservée. Ajouter une carte dès qu'un chantier 3B Récup' est documenté.",
      priority: 'high',
    },
    {
      question: "Année de lancement de 3B Récup' (à ajouter dans l'« En bref » si connue).",
      decision:
        "Non mentionnée. La pastille « Depuis 2007 » du héros est précisée « 3B Charpente » pour ne pas laisser croire que 3B Récup' existe depuis 2007.",
      priority: 'normal',
    },
    {
      question: "Commune « Ronatlon » de la réalisation « Réfection d'une toiture » : nom exact ?",
      decision:
        "Carte affichée « Réfection d'une toiture en vieux bois », sans commune ; texte alternatif de la photo sans commune. L'adresse actuelle de la fiche est conservée.",
      priority: 'normal',
    },
    {
      question:
        "Zone d'intervention de 3B Récup' : la FAQ validée parle de PACA et Rhône-Alpes ; faut-il une limite pour les chantiers de déconstruction (distance, taille) ?",
      decision: 'FAQ validée publiée telle quelle, sans limite précisée.',
      priority: 'low',
    },
    {
      question: 'Vente de bois de réemploi (voir fiche 14, deux variantes rédigées).',
      decision:
        "Variante A : le bois est réemployé sur les chantiers de 3B, pas de vente ni de catalogue. La variante B reste disponible dans la fiche 14.",
      priority: 'normal',
    },
    {
      question:
        "Badges de la maquette : confirmer le retrait du badge « Expert du Réemploi » et des étoiles Google.",
      decision: 'Badges supprimés (aucun justificatif, un seul avis Google).',
      priority: 'low',
    },
    {
      question:
        "Photos à demander : chantier de déconstruction (avant, dépose, après), équipe en train de déposer, stock de bois de réemploi à l'atelier, une même pièce avant et après usinage, portrait de Jean avec une pièce de réemploi, vue large du bardage vieux bois de L'Argentière-la-Bessée.",
      decision:
        "Page illustrée avec les photos existantes (ferme en vieux bois, garde-corps et bardage vieux bois) et une photo d'ambiance forêt pour la section sombre.",
      priority: 'low',
    },
    {
      question:
        "Idées d'actions : contact avec la ressourcerie La Miraille et Raediviva, mise à jour de la fiche PRECI de 3B Récup', fiche Google avec un service « Déconstruction et réemploi du bois », publication de chaque nouveau chantier de déconstruction.",
      decision:
        "Rien n'est publié : aucun de ces acteurs n'est présenté comme partenaire sans accord écrit.",
      priority: 'low',
    },
  ],
  photoAlts: [
    {
      photo: FERME,
      alt: "Ferme de charpente en vieux bois posée par 3B Charpente lors de la réfection d'une toiture",
      caption: "Ferme de charpente en vieux bois, réfection d'une toiture.",
    },
    {
      photo: GARDE_CORPS,
      alt: "Garde-corps en bois de réemploi dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
      caption: "Garde-corps en bois de réemploi, L'Argentière-la-Bessée.",
    },
    {
      photo: BARDAGE,
      alt: "Bardage en vieux bois sur la façade d'une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
      caption: "Bardage vieux bois, L'Argentière-la-Bessée.",
    },
    {
      photo: PIERRES,
      alt: 'Support maçonné en pierres récupérées sous une maison à ossature bois de 3B Charpente, monts du Lyonnais',
    },
  ],
}
