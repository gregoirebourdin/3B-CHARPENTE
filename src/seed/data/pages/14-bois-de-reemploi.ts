import type { SeedPage } from '../../types'

/** Fiche 14 · Bois de réemploi et vieux bois · /3b-recup/bois-de-reemploi/ (variante A : pas de vente) */

const BARDAGE =
  'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG'
const GARDE_CORPS =
  'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG'
const FERME = 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG'
const PIED_ARBALETRIER = "refection-d-une-toiture-a-ronatlon/pied d'arbalétrier.JPG"
const PIERRES =
  'maison-a-ossature-bois-dans-les-monts-du-lyonnais/support maçonné en pierre récupérées.jpg'

export const page: SeedPage = {
  kind: 'page',
  slug: 'bois-de-reemploi',
  parent: '3b-recup',
  title: 'Bois de réemploi et vieux bois',
  breadcrumbLabel: 'Bois de réemploi',
  seo: {
    title: 'Vieux bois et bois de réemploi, Hautes-Alpes | 3B Charpente',
    description:
      "Bardage vieux bois, garde-corps, fermes : 3B Récup' trie, nettoie et usine le bois de réemploi dans ses ateliers, puis le pose. Charpentier depuis 2007.",
    image: BARDAGE,
  },
  hero: {
    variant: 'collage',
    kicker: "3B Récup' · Bois de réemploi",
    title: '**Vieux bois et bois de réemploi** dans les Hautes-Alpes',
    text: 'Du bois **issu de la déconstruction**, trié, nettoyé et usiné dans nos ateliers. Il retrouve sa place **en bardage, en garde-corps ou en charpente**, sur nos chantiers.',
    primaryCta: { label: 'Parlons de votre projet', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos réalisations',
      href: '/3b-recup/bois-de-reemploi/#realisations',
    },
    proofs: [
      { label: 'Bois issu de la déconstruction', text: 'déposé avec soin', icon: 'recycle' },
      { label: 'Transformé dans nos ateliers', text: 'trié, nettoyé, usiné', icon: 'saw' },
      { label: 'Posé par nos charpentiers', text: 'de la dépose à la repose', icon: 'hammer' },
    ],
    images: [BARDAGE, GARDE_CORPS, FERME],
    caption: "Bardage vieux bois, maison rénovée à L'Argentière-la-Bessée.",
    sheet: [
      { label: 'Origine', value: 'Chantiers de déconstruction' },
      { label: 'Préparation', value: "Tri, nettoyage, usinage à l'atelier" },
      { label: 'Usages', value: 'Bardage, garde-corps, charpente' },
    ],
  },
  tldr: "Le bois de réemploi est un bois déjà mis en œuvre dans un bâtiment, déposé avec soin puis remis en œuvre ailleurs. 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes), trie, nettoie et usine ce vieux bois dans ses ateliers, puis l'intègre à ses chantiers : bardage, garde-corps, fermes de charpente.",
  layout: [
    // Vocabulaire
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      kicker: 'Vocabulaire',
      title: 'Vieux bois, bois de récupération, **bois de réemploi**',
      intro:
        "Les trois désignent souvent les mêmes pièces : la différence tient à ce qu'on en fait.",
      items: [
        {
          title: 'Vieux bois',
          icon: 'clock',
          text: 'Un bois ancien, patiné par le temps : poutres anciennes, planches, bardages grisés.',
        },
        {
          title: 'Bois de récupération',
          icon: 'search',
          text: 'Un bois récupéré sur un bâtiment ou un chantier, quel que soit son usage futur.',
        },
        {
          title: 'Bois de réemploi',
          icon: 'recycle',
          text: "Récupéré, préparé, puis remis en œuvre dans un nouvel ouvrage. C'est le métier de 3B Récup'.",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'definition',
      title: 'En une phrase',
      text: 'Un vieux bois qui dort dans une grange est un **gisement** ; posé en bardage sur une maison, il devient du **bois de réemploi**.',
    },
    // Le vieux bois dans nos chantiers
    {
      type: 'cards',
      variant: 'photo',
      columns: 3,
      anchor: 'realisations',
      tone: 'light',
      kicker: 'Nos réalisations',
      title: 'Le vieux bois **dans nos chantiers**',
      intro:
        'Du bois de déconstruction, intégré à nos chantiers de construction et de rénovation : on le retrouve dans plusieurs réalisations publiées.',
      items: [
        {
          title: 'Bardage vieux bois',
          image: BARDAGE,
          text: "En façade d'une maison rénovée à L'Argentière-la-Bessée.",
          link: {
            label: 'Voir les travaux',
            href: '/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/',
          },
        },
        {
          title: 'Garde-corps en bois de réemploi',
          image: GARDE_CORPS,
          text: "Dans la même rénovation, à L'Argentière-la-Bessée.",
          link: {
            label: 'Voir les travaux',
            href: '/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/',
          },
        },
        {
          title: 'Ferme en vieux bois',
          image: FERME,
          text: "Lors de la réfection d'une toiture : l'assemblage triangulé qui porte le toit.",
          link: {
            label: 'Voir les travaux',
            href: '/realisations/refection-d-une-toiture-a-ronatlon/',
          },
        },
      ],
    },
    // Ce que le bois de réemploi peut devenir
    {
      type: 'list',
      style: 'checks',
      tone: 'light',
      kicker: 'Usages',
      title: 'Ce que le bois de réemploi **peut devenir**',
      text: "Selon l'état, la section et la longueur des pièces.\n\nLe réflexe vaut aussi au-delà du bois : dans les monts du Lyonnais, une de nos maisons repose sur un [support maçonné en pierres récupérées](/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/).",
      image: PIERRES,
      caption: 'Support maçonné en pierres récupérées, monts du Lyonnais.',
      items: [
        { text: 'Un bardage de façade' },
        { text: "Un garde-corps d'escalier, de mezzanine ou de balcon" },
        {
          text: 'Des fermes et pièces de charpente, apparentes ou non',
          link: { label: 'Notre charpente traditionnelle', href: '/charpente-bois/' },
        },
        { text: 'Un plancher ou un habillage intérieur en planches de vieux bois' },
      ],
    },
    // De la pièce déposée à la pièce posée
    {
      type: 'steps',
      variant: 'tabs',
      kicker: "À l'atelier",
      title: 'De la pièce déposée **à la pièce posée**',
      intro: 'Triés, nettoyés, usinés : la préparation qui rend les matériaux prêts à resservir.',
      steps: [
        {
          title: 'Trier',
          text: 'Chaque pièce est examinée et orientée : une pièce saine et longue redevient charpente, une planche abîmée en bout devient habillage.',
        },
        {
          title: 'Nettoyer',
          text: 'Les pièces sont débarrassées de ce qui gêne leur nouvel usage.',
        },
        {
          title: 'Usiner',
          text: 'Remise à dimension et taille des assemblages nécessaires, comme pour du bois neuf.',
        },
        {
          title: 'Reposer',
          text: "Le dessin tient compte des longueurs, des sections et de l'aspect des pièces : c'est le projet qui s'adapte au matériau.",
          image: PIED_ARBALETRIER,
        },
      ],
    },
    // Qualité et sécurité
    {
      type: 'cta',
      variant: 'slim',
      icon: 'shield',
      kicker: 'Qualité',
      title: 'Un vieux bois **prêt pour sa nouvelle vie**',
      text: "Un vieux bois n'est ni bon ni mauvais par principe : tout dépend de la pièce. Chacune passe par l'atelier, pour répondre aux exigences de qualité et de sécurité de son nouvel usage.",
    },
    // Acheter du vieux bois ?
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Disponibilité',
      title: 'Et si je cherche **du vieux bois** ?',
      text: "Le bois que nous récupérons est **réservé à nos propres chantiers** : nous ne le vendons pas au détail.\n\nVous aimez le vieux bois ? Intégrez-le à votre projet : nous le préparons à l'atelier, nos charpentiers le posent en bardage, en garde-corps ou en charpente.",
      cta: { label: 'Parlons de votre projet', href: '/contact/' },
    },
    // Pour qui
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Pour qui',
      title: 'Votre projet, **votre vieux bois**',
      items: [
        {
          title: 'Particuliers',
          icon: 'house',
          eyebrow: 'Vous rénovez une grange, un chalet ou une maison de pays',
          text: "Vieilles poutres, planchers, bardage de caractère ? Avant de les jeter, parlons-en : ce qui peut être déposé, préparé à l'atelier et reposé chez vous.",
          link: { label: 'Garde-corps, balcons et terrasses', href: '/balcon-terrasse-abri-bois/' },
        },
        {
          title: 'Professionnels',
          icon: 'ruler',
          eyebrow: "Architectes, maîtres d'ouvrage, collectivités, entreprises de construction",
          text: "Du réemploi dans votre projet ? Associez-nous dès la faisabilité : nous dessinons l'ouvrage à partir des pièces disponibles, parfois celles du bâtiment déconstruit.",
          link: { label: 'Évaluer le gisement bois', href: '/3b-recup/diagnostic-pemd/' },
        },
      ],
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Le vieux bois **en questions**',
      faqs: [
        'bois-de-reemploi-q1',
        'bois-de-reemploi-q2',
        'bois-de-reemploi-q3',
        'bois-de-reemploi-q4',
        'bois-de-reemploi-q5',
        'bois-de-reemploi-q6',
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
          title: 'Chantiers de déconstruction',
          link: {
            label: 'chantiers de déconstruction',
            href: '/3b-recup/deconstruction-selective/',
          },
        },
        {
          title: 'Rénover la charpente existante',
          link: { label: 'rénover la charpente existante', href: '/renovation-charpente-combles/' },
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
      kicker: 'Transformez votre projet avec le réemploi',
      title: 'Donnons une **nouvelle vie** à votre bois',
      text: 'Un bardage, un garde-corps, une charpente en vieux bois, ou des poutres anciennes à sauver ? Racontez-nous votre projet.',
      primary: { label: 'Parlons de votre projet', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'bois-de-reemploi-q1',
      topic: 'recup',
      question: "Qu'est-ce que le bois de réemploi ?",
      answer:
        "Un bois déjà mis en œuvre dans un bâtiment, déposé avec soin puis remis en œuvre dans un nouvel ouvrage. Chez 3B Récup', il vient des chantiers de déconstruction : trié, nettoyé et usiné dans nos ateliers, puis posé par nos charpentiers.",
    },
    {
      key: 'bois-de-reemploi-q2',
      topic: 'recup',
      question: 'Quelle différence entre vieux bois et bois de réemploi ?',
      answer:
        "« Vieux bois » décrit un bois ancien, patiné par le temps. « Bois de réemploi » dit ce qu'on en fait : le remettre en œuvre dans un nouvel ouvrage, après préparation. Un vieux bois qui dort dans une grange est un gisement ; posé en bardage, il devient du bois de réemploi.",
    },
    {
      key: 'bois-de-reemploi-q3',
      topic: 'recup',
      question: "Comment le vieux bois est-il préparé avant d'être reposé ?",
      answer:
        "Il est trié, nettoyé et usiné dans nos ateliers. Le tri oriente chaque pièce vers l'usage qui lui convient, le nettoyage la débarrasse de ce qui gêne, l'usinage la remet à dimension. À la repose, nous adaptons notre système constructif aux pièces disponibles.",
    },
    {
      key: 'bois-de-reemploi-q4',
      topic: 'recup',
      question: 'Peut-on faire un bardage en vieux bois ?',
      answer:
        "Oui. Nous avons posé un bardage vieux bois sur une maison rénovée à L'Argentière-la-Bessée, avec un garde-corps en bois de réemploi. La faisabilité dépend de l'état et de la quantité de planches disponibles : nous l'étudions pour chaque projet.",
    },
    {
      key: 'bois-de-reemploi-q5',
      topic: 'recup',
      question: 'Vendez-vous du bois de réemploi ?',
      answer:
        'Non, il est réservé à nos propres chantiers. Nous le préparons dans nos ateliers, puis nos charpentiers le posent en bardage, en garde-corps ou en charpente, dans les projets que nous réalisons. Vous aimez le vieux bois ? Parlons de votre projet.',
    },
    {
      key: 'bois-de-reemploi-q6',
      topic: 'recup',
      question: 'Le bois de réemploi convient-il pour une charpente ?',
      answer:
        "Tout dépend de la pièce et de l'usage. Chaque pièce est triée, nettoyée et usinée pour répondre aux exigences de qualité et de sécurité de son nouvel usage, et nous adaptons notre système constructif aux pièces disponibles. Nous avons par exemple réalisé une ferme de charpente en vieux bois.",
    },
  ],
  validationPoints: [
    {
      question:
        'Vente de bois de réemploi (point bloquant) : 3B vend-il du bois de réemploi, à qui (particuliers, professionnels), quels produits, sur stock ou sur demande, avec retrait ou livraison ?',
      decision:
        'Variante A publiée (section « Et si je cherche du vieux bois ? » et FAQ « Vendez-vous du bois de réemploi ? ») : le bois est réservé aux chantiers de 3B, pas de vente ni de catalogue. La variante B (vente, bouton « Demander les disponibilités ») est rédigée dans la fiche 14 et reste disponible.',
      priority: 'high',
    },
    {
      question:
        "« Normes de qualité et de sécurité » (section « Qualité ») : lesquelles ? Comment la capacité d'une pièce porteuse de réemploi est-elle vérifiée (classement, avis d'un bureau d'études) ? L'assurance décennale couvre-t-elle les ouvrages en bois de réemploi ?",
      decision:
        "Fin de phrase remplacée par « pour qu'ils répondent aux exigences de qualité et de sécurité de leur nouvel usage ». Aucune norme citée.",
      priority: 'high',
    },
    {
      question:
        "Préparation en atelier : critères de tri, opérations de nettoyage (retrait des pointes et ferrures, brossage, traitement éventuel ?) et d'usinage (opérations et machines courantes) réellement pratiqués.",
      decision:
        'Textes généraux des onglets Trier, Nettoyer et Usiner publiés tels que rédigés ; aucune opération ni machine précisée.',
      priority: 'normal',
    },
    {
      question:
        'Usages du bois de réemploi : confirmer la liste (bardage, garde-corps, fermes et pièces de charpente, plancher, habillage intérieur) ; ajouter escaliers, poutres apparentes ou mobilier si 3B en a déjà réalisé.',
      decision: 'Liste publiée telle que rédigée (usages possibles, pas des réalisations).',
      priority: 'normal',
    },
    {
      question:
        "Réalisation de L'Argentière-la-Bessée : essence du bardage vieux bois, provenance du bois (bâtiment déconstruit par 3B ?), emplacement du garde-corps (escalier, mezzanine, balcon ?).",
      decision:
        'Ni essence, ni provenance, ni emplacement : « un garde-corps réalisé en bois de réemploi, dans la même rénovation ». Texte alternatif du bardage sans essence.',
      priority: 'normal',
    },
    {
      question:
        "Commune « Ronatlon » de la réalisation « Réfection d'une toiture » : nom exact ; provenance de la ferme en vieux bois.",
      decision:
        "Carte « Ferme en vieux bois » publiée avec « Réfection d'une toiture », sans commune ni provenance.",
      priority: 'normal',
    },
    {
      question:
        "Particuliers : le bois d'un particulier peut-il être reposé sur son propre chantier ?",
      decision:
        "Carte « Particuliers » publiée sans confirmation supplémentaire (« nous regardons ce qui peut être déposé, préparé à l'atelier et reposé dans votre projet »).",
      priority: 'normal',
    },
    {
      question:
        "Professionnels : le bois peut-il venir aussi d'un stock de 3B, et pas seulement du bâtiment déconstruit lui-même ?",
      decision:
        'Publié : « Le bois peut venir du bâtiment déconstruit lui-même. » Aucun stock mentionné.',
      priority: 'normal',
    },
    {
      question:
        "Origine du bois de réemploi : vient-il uniquement des déconstructions de 3B, ou aussi d'autres sources ?",
      decision:
        'On écrit « bois issu des chantiers de déconstruction » sans dire que 3B a fait ces déconstructions ; rien sur une origine locale.',
      priority: 'normal',
    },
    {
      question:
        "Photos à demander : une même pièce avant et après nettoyage et usinage, le stock de bois de réemploi à l'atelier, gros plans de patine, de traces d'outils anciens et d'assemblages d'origine.",
      decision:
        "Page illustrée avec les photos existantes (bardage, garde-corps, ferme et pied d'arbalétrier).",
      priority: 'low',
    },
    {
      question:
        "Idées d'actions : créer une fiche de réalisation dédiée au bardage vieux bois de L'Argentière-la-Bessée ; en variante A, indiquer ou non aux particuliers la plateforme de réemploi des matériaux du bâtiment de L'Argentière-la-Bessée.",
      decision: "Rien n'est publié ; aucune plateforme n'est citée sur cette page.",
      priority: 'low',
    },
  ],
  photoAlts: [
    {
      photo: BARDAGE,
      alt: "Bardage en vieux bois sur la façade d'une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
      caption: "Bardage vieux bois, maison rénovée à L'Argentière-la-Bessée.",
    },
    {
      photo: GARDE_CORPS,
      alt: "Garde-corps en bois de réemploi dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
      caption: 'Garde-corps en bois de réemploi.',
    },
    {
      photo: FERME,
      alt: "Ferme de charpente en vieux bois posée par 3B Charpente lors de la réfection d'une toiture",
      caption: 'Ferme de charpente en vieux bois.',
    },
    {
      photo: PIED_ARBALETRIER,
      alt: "Pied d'arbalétrier d'une ferme en vieux bois, réfection d'une toiture par 3B Charpente",
    },
  ],
}
