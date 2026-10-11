import type { SeedPage } from '../../types'

/** Fiche 12 · Diagnostic PEMD et gisement bois · /3b-recup/diagnostic-pemd/ (variante A) */

const DEPOSE = "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG"
const PIED_ARBALETRIER = "refection-d-une-toiture-a-ronatlon/pied d'arbalétrier.JPG"
const EXISTANT = 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/01Existant.JPG'

export const page: SeedPage = {
  kind: 'page',
  slug: 'diagnostic-pemd',
  parent: '3b-recup',
  title: 'Diagnostic PEMD et gisement bois',
  seo: {
    title: 'Diagnostic PEMD et ressources, Hautes-Alpes | 3B Charpente',
    description:
      "Diagnostic PEMD : qui est concerné, diagnostic ressources sous 1 000 m², expertise du bois réemployable par 3B Récup', charpentier depuis 2007. Parlons-en.",
    image: DEPOSE,
  },
  hero: {
    variant: 'photo',
    kicker: "3B Récup' · Diagnostic et gisement",
    title: 'Diagnostic PEMD et **gisement de bois réemployable** dans les Hautes-Alpes',
    text: 'Avant de démolir ou de rénover, mieux vaut savoir **ce que contient un bâtiment**. Le diagnostic PEMD le recense quand la réglementation l\'impose ; le diagnostic ressources le fait, de façon volontaire, pour les autres bâtiments. Nos charpentiers y apportent un regard précis sur **le bois réemployable** : charpente, solivage, ossature, planchers, bardages.',
    primaryCta: { label: 'Faire évaluer mon bâtiment', href: '/contact/' },
    secondaryCta: { label: 'Suis-je concerné ?', href: '/3b-recup/diagnostic-pemd/#qui-est-concerne' },
    proofs: [
      { label: 'Charpentiers depuis 2007', icon: 'calendar' },
      { label: 'Expertise du gisement bois', icon: 'search' },
    ],
    images: [DEPOSE],
    caption: "Dépose de l'ancienne charpente avant sa réfection, à L'Argentière-la-Bessée.",
  },
  tldr: "Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m², ou ayant accueilli certaines activités avec des substances dangereuses. En dessous, on parle de diagnostic ressources. 3B Récup', à L'Argentière-la-Bessée, évalue le bois réemployable en amont ou en appui de ces diagnostics.",
  layout: [
    // 3.3 Qu'est-ce que le diagnostic PEMD ?
    {
      type: 'textImage',
      kicker: 'Définition',
      title: 'Le diagnostic PEMD, **en clair**',
      text: [
        'PEMD signifie « produits, équipements, matériaux et déchets ». Le **diagnostic PEMD** est un repérage réalisé avant certains travaux de démolition ou de rénovation significative : il recense ce que contient le bâtiment, pour savoir avant le chantier ce qui pourra être réemployé, valorisé ou devra être éliminé.',
        "Il est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021, et par les articles L. 126-34 et R. 126-12 du Code de la construction et de l'habitation.",
        "Le diagnostic a un prolongement : pour les demandes d'autorisation déposées après le 1er juillet 2023, un **formulaire de récolement** est exigé. Le récolement, c'est le bilan après travaux : il rend compte de ce que sont réellement devenus les produits, équipements, matériaux et déchets.",
      ].join('\n\n'),
      tone: 'cream',
    },
    // 3.3 suite : trois cartes « chiffres clés »
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      items: [
        {
          title: '1 000 m²',
          icon: 'ruler',
          text: 'Le seuil de surface de plancher cumulée au-delà duquel le diagnostic est obligatoire avant démolition ou rénovation significative.',
        },
        {
          title: '25 juin 2021',
          icon: 'calendar',
          text: 'La date des deux décrets qui encadrent le diagnostic PEMD (n° 2021-821 et n° 2021-822).',
        },
        {
          title: '1er juillet 2023',
          icon: 'document',
          text: "Le formulaire de récolement est exigé pour les demandes d'autorisation déposées après cette date.",
        },
      ],
      tone: 'cream',
    },
    // 3.4 Qui est concerné ?
    {
      type: 'textImage',
      anchor: 'qui-est-concerne',
      kicker: 'Obligations',
      title: 'Qui doit faire **un diagnostic PEMD** ?',
      text: [
        'Le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative :',
        [
          '- des bâtiments dont la surface de plancher cumulée dépasse 1 000 m² ;',
          '- des bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, même en dessous de 1 000 m².',
        ].join('\n'),
        "Le diagnostic réglementaire est réalisé par un diagnostiqueur qui doit pouvoir justifier de ses compétences et de son assurance pour cette mission. La notion de « rénovation significative » est précisée par les textes : en cas de doute sur votre projet, posez la question à votre architecte ou à votre mairie avant de déposer votre demande d'autorisation.",
      ].join('\n\n'),
      tone: 'light',
    },
    // 3.4 suite : encadré « Propriétaire d'une grange ? »
    {
      type: 'richText',
      boxed: true,
      content: [
        "### Propriétaire d'une grange ?",
        "Une grange de moins de 1 000 m² n'atteint pas le seuil de surface. Mais si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer. Dans tous les cas, un diagnostic ressources vous aide à savoir ce qui mérite d'être gardé.",
        '[Rénover une charpente existante](/renovation-charpente-combles/)',
      ].join('\n\n'),
      tone: 'light',
    },
    // 3.5 Moins de 1 000 m² : le diagnostic ressources
    {
      type: 'list',
      style: 'numbered',
      kicker: 'Petits bâtiments',
      title: 'Le diagnostic ressources, **pour les bâtiments plus modestes**',
      text: [
        "En dessous de 1 000 m², on parle souvent de **diagnostic ressources** : un repérage volontaire des matériaux réemployables. Ce n'est pas une obligation, c'est un outil. Pour une maison, une grange, un chalet ou un petit bâtiment communal, c'est souvent la démarche la plus réaliste.",
        'Un diagnostic ressources répond à trois questions simples. Pour le bois, ces réponses relèvent de notre métier.',
      ].join('\n\n'),
      items: [
        { title: "Qu'y a-t-il dans ce bâtiment qui puisse resservir ?" },
        { title: 'Dans quel état, et en quelle quantité ?' },
        { title: "Comment le déposer sans l'abîmer, et pour en faire quoi ?" },
      ],
      tone: 'cream',
    },
    // 3.6 Ce que 3B Récup' apporte (variante A)
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Notre rôle',
      title: "L'œil du charpentier **sur votre gisement bois**",
      text: [
        "Le **gisement**, c'est l'ensemble des matériaux réemployables d'un bâtiment, comme on parle du gisement d'une carrière. Pour un charpentier, c'est d'abord le bois : charpente, solivage, ossature, planchers, bardages.",
        "3B Récup' réalise l'expertise du gisement bois, en amont ou en appui du diagnostic PEMD. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources centré sur le bois et sur les éléments que nos charpentiers savent déposer. Charpentiers de métier, nous savons lire une structure : comment elle a été taillée, assemblée, chargée.",
        'Concrètement, nous :',
        [
          "- **repérons les éléments en bois** : charpente, solivage, murs à ossature bois, planchers, bardages, panneaux d'habillage ;",
          '- **évaluons leur état et leur potentiel de réemploi** ;',
          '- **indiquons comment les déposer** en préservant les pièces ;',
          '- **proposons ce qu\'ils peuvent devenir** dans un nouveau projet.',
        ].join('\n'),
        'Ces informations peuvent nourrir le diagnostic PEMD réalisé par le diagnostiqueur, ou servir de base à la stratégie de déconstruction.',
      ].join('\n\n'),
      image: PIED_ARBALETRIER,
    },
    // 3.7 Le livrable
    {
      type: 'textImage',
      kicker: 'Ce que vous obtenez',
      title: 'Un état des lieux **utile pour la suite**',
      text: [
        "À l'issue de l'expertise, vous disposez d'un document qui décrit le gisement bois de votre bâtiment : les éléments repérés, leur état, leur potentiel de réemploi et les conditions de leur dépose.",
        'Ce document sert de base à la feuille de route de la déconstruction : ce qui sera déposé, dans quel ordre, et ce que chaque pièce pourra devenir.',
      ].join('\n\n'),
      tone: 'cream',
    },
    // 3.8 Pour qui
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Pour qui',
      title: "Maîtres d'ouvrage, architectes **ou particuliers**",
      items: [
        {
          title: 'Professionnels',
          icon: 'ruler',
          text: "Vous avez un diagnostic PEMD à prévoir ou un projet de réemploi à monter ? Associez-nous dès l'étude de faisabilité : le gisement bois se repère avant de caler la démolition, pas après. Nous travaillons pour les architectes, les maîtres d'ouvrage, les collectivités et les entreprises de construction et de démolition, du bâtiment industriel à la maison particulière.",
        },
        {
          title: 'Particuliers',
          icon: 'house',
          text: "Vous achetez une grange, vous rénovez un chalet ? Avant les travaux, un diagnostic ressources vous dit ce qui mérite d'être gardé : poutres, planchers, bardage. Vous décidez ensuite, en connaissance de cause, de ce qui reste en place, de ce qui est déposé et de ce qui est réemployé.",
        },
      ],
      asideImage: EXISTANT,
      tone: 'light',
    },
    // 3.9 Et après le diagnostic ? (méthode compacte, même ordre que la page 3B Récup')
    {
      type: 'steps',
      variant: 'tabs',
      isHowTo: true,
      kicker: 'La suite',
      title: 'Du diagnostic **à la repose**',
      intro: "Le diagnostic est la première des cinq étapes de la méthode 3B Récup'.",
      steps: [
        { title: 'Diagnostic', text: 'Connaître le gisement (vous êtes ici).' },
        {
          title: 'Stratégie',
          text: "Une feuille de route détaillée, qui préserve l'intégrité et la valeur des matériaux réutilisables.",
        },
        {
          title: 'Intervention',
          text: [
            'Nos charpentiers déposent les matériaux sur site.',
            '[La déconstruction sélective](/3b-recup/deconstruction-selective/)',
          ].join('\n\n'),
        },
        {
          title: 'Transformation',
          text: [
            'Tri, nettoyage et usinage dans nos ateliers.',
            '[Le bois de réemploi](/3b-recup/bois-de-reemploi/)',
          ].join('\n\n'),
        },
        { title: 'Repose', text: "Notre système constructif s'adapte aux matériaux de réemploi." },
      ],
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      tone: 'cream',
    },
    // 3.10 FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Diagnostic PEMD : **vos questions**',
      faqs: [
        'diagnostic-pemd-q1',
        'diagnostic-pemd-q2',
        'diagnostic-pemd-q3',
        'diagnostic-pemd-q4',
        'diagnostic-pemd-q5',
        'diagnostic-pemd-q6',
      ],
      tone: 'light',
    },
    // Liens internes « à ajouter si la mise en page le permet »
    {
      type: 'list',
      style: 'pills',
      kicker: 'Voir aussi',
      items: [
        {
          title: 'Notre guide du réemploi du bois',
          link: { label: 'notre guide du réemploi du bois', href: '/conseils/reemploi-bois-construction/' },
        },
        {
          title: "La dépose d'une ancienne charpente à L'Argentière-la-Bessée",
          link: {
            label: "la dépose d'une ancienne charpente à L'Argentière-la-Bessée",
            href: '/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/',
          },
        },
      ],
      tone: 'cream',
    },
    // 3.11 Appel à l'action
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: 'Un bâtiment à évaluer ?',
      title: 'Faites le point sur **votre gisement bois**',
      text: 'Démolition, réhabilitation, grange à rénover : dites-nous où se trouve le bâtiment, sa surface approximative et ce que vous projetez. Nous vous proposons une première rencontre sur place pour en parler.',
      primary: { label: 'Faire évaluer mon bâtiment', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'diagnostic-pemd-q1',
      topic: 'recup',
      question: "Qu'est-ce que le diagnostic PEMD ?",
      answer:
        "Le diagnostic PEMD (produits, équipements, matériaux et déchets) est un repérage réalisé avant certains travaux de démolition ou de rénovation significative. Il recense ce que contient le bâtiment pour savoir ce qui pourra être réemployé, valorisé ou éliminé. Il est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021 et par le Code de la construction et de l'habitation.",
    },
    {
      key: 'diagnostic-pemd-q2',
      topic: 'recup',
      question: 'Quand le diagnostic PEMD est-il obligatoire ?',
      answer:
        "Il est obligatoire avant la démolition ou la rénovation significative de bâtiments dont la surface de plancher cumulée dépasse 1 000 m². Il l'est aussi pour les bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Pour les demandes d'autorisation déposées après le 1er juillet 2023, un formulaire de récolement est en plus exigé.",
    },
    {
      key: 'diagnostic-pemd-q3',
      topic: 'recup',
      question: "Qu'est-ce qu'un diagnostic ressources ?",
      answer:
        "En dessous de 1 000 m², on parle souvent de diagnostic ressources : un repérage volontaire des matériaux réemployables d'un bâtiment. Il n'est pas imposé, mais c'est la démarche la plus réaliste pour une maison, une grange, un chalet ou un petit bâtiment. Chez 3B Récup', il porte sur le bois : ce qui peut resservir, dans quel état et pour quel usage.",
    },
    {
      key: 'diagnostic-pemd-q4',
      topic: 'recup',
      question: 'Ma grange est-elle concernée par le diagnostic PEMD ?',
      answer:
        "Une grange de moins de 1 000 m² de surface de plancher n'atteint pas le seuil de surface. En revanche, si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer avant sa démolition ou sa rénovation significative. En cas de doute, renseignez-vous avant de déposer votre demande d'autorisation.",
    },
    {
      key: 'diagnostic-pemd-q5',
      topic: 'recup',
      question: "3B Récup' réalise-t-il le diagnostic PEMD ?",
      answer:
        "Nous intervenons en amont ou en appui du diagnostic PEMD. Notre rôle est l'expertise du gisement bois : repérer les éléments en bois, évaluer leur état et leur potentiel de réemploi, et préparer leur dépose. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources centré sur le bois. Nos charpentiers peuvent ensuite déposer, transformer et reposer ce bois.",
    },
    {
      key: 'diagnostic-pemd-q6',
      topic: 'recup',
      question: "Qu'est-ce que le formulaire de récolement ?",
      answer:
        "Le récolement est le bilan après travaux : il rend compte de ce que sont réellement devenus les produits, équipements, matériaux et déchets repérés par le diagnostic PEMD. Le formulaire de récolement est exigé pour les demandes d'autorisation déposées après le 1er juillet 2023. Une déconstruction sélective, qui trie les matériaux au fur et à mesure, aide à le renseigner.",
    },
  ],
  validationPoints: [
    {
      question:
        "Rôle de 3B dans le diagnostic PEMD (point bloquant) : 3B réalise-t-il lui-même le diagnostic PEMD réglementaire ? Si oui, avec quelle attestation de compétences et quelle assurance ?",
      decision:
        "Variante A publiée partout (En bref, section « Notre rôle », FAQ « 3B Récup' réalise-t-il le diagnostic PEMD ? ») : expertise du gisement bois en amont ou en appui du diagnostic PEMD, diagnostic ressources sous 1 000 m². La variante B (3B diagnostiqueur PEMD, avec justificatifs affichés) est rédigée dans la fiche 12 et reste disponible.",
      priority: 'high',
    },
    {
      question:
        "Phrase « Il concerne donc d'abord celui qui commande les travaux, le maître d'ouvrage : collectivité, bailleur, entreprise, propriétaire d'un grand bâtiment » (section « Qui est concerné ? ») : à faire confirmer par un diagnostiqueur ou sur le texte officiel.",
      decision: 'Phrase retirée en attendant la confirmation.',
      priority: 'high',
    },
    {
      question:
        "Relecture réglementaire : faire relire les sections « Définition » et « Qui est concerné ? » et les FAQ 1, 2, 4 et 6 par un diagnostiqueur PEMD ou au regard du Cerfa de récolement et de la note de la SPREC (notamment la phrase sur les compétences et l'assurance du diagnostiqueur et la formule « réemployé, valorisé ou éliminé »).",
      decision: 'Textes publiés tels que rédigés dans la fiche, en attendant la relecture.',
      priority: 'high',
    },
    {
      question:
        "Diagnostic ressources : 3B le propose-t-il déjà ? Sous quel nom ? Se limite-t-il au bois ou couvre-t-il aussi la couverture et l'isolation que nos charpentiers savent déposer ?",
      decision:
        'Publié comme dans la fiche (variante A) : « diagnostic ressources centré sur le bois et sur les éléments que nos charpentiers savent déposer ».',
      priority: 'normal',
    },
    {
      question:
        "Livrable : forme exacte (rapport écrit, tableau d'inventaire, photos, plans annotés, estimation des quantités ?), ce qui est remis au maître d'ouvrage ou au diagnostiqueur ; un exemple anonymisé peut-il être montré ?",
      decision:
        "Seule la description générale est publiée (« un document qui décrit le gisement bois de votre bâtiment… »), sans format ni contenu détaillé.",
      priority: 'normal',
    },
    {
      question:
        "Ambition PRECI : confirmer le message « associez-nous dès l'étude de faisabilité » (repris de la fiche PRECI).",
      decision: 'Message conservé (carte « Professionnels »).',
      priority: 'low',
    },
    {
      question:
        "Photos : prévoir une séance photo de repérage sur un vrai bâtiment (charpentier relevant une charpente ancienne, extrait anonymisé de livrable, grange avant déconstruction).",
      decision:
        "Héros illustré provisoirement par « dépose de l'ancienne charpente » (L'Argentière-la-Bessée) ; la photo « releve-gisement-bois-charpente » n'existe pas encore.",
      priority: 'low',
    },
    {
      question:
        "Lien « des charpentiers formés chez les Compagnons du Devoir » vers /a-propos/ (section « Notre rôle ») : la formulation au pluriel est-elle exacte ?",
      decision:
        "Lien non ajouté : seul le fondateur est présenté comme formé chez les Compagnons du Devoir.",
      priority: 'low',
    },
    {
      question:
        "Idées d'actions : identifier un ou deux diagnostiqueurs PEMD du secteur avec qui travailler ; publier en phase 2 un exemple réel et anonymisé de gisement bois relevé.",
      decision: "Rien n'est publié ; aucun diagnostiqueur n'est cité sans accord écrit.",
      priority: 'low',
    },
  ],
  photoAlts: [
    {
      photo: DEPOSE,
      alt: "Dépose de l'ancienne charpente d'une maison avant sa réfection par 3B Charpente à L'Argentière-la-Bessée",
      caption: "Dépose de l'ancienne charpente avant sa réfection, à L'Argentière-la-Bessée.",
    },
    {
      photo: PIED_ARBALETRIER,
      alt: "Pied d'arbalétrier d'une charpente en vieux bois, réfection d'une toiture par 3B Charpente",
    },
  ],
}
