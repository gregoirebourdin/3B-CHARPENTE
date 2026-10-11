/**
 * Fiche 02 : Charpente bois traditionnelle (/charpente-bois/).
 * Source : 3b-charpente-kit/docs/pages/02-charpente-bois.md
 */
import type { SeedService } from '../../types'

const HERO = 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG'

export const service: SeedService = {
  kind: 'service',
  slug: 'charpente-bois',
  title: 'Charpente bois traditionnelle',
  menuLabel: 'Charpente bois traditionnelle',
  shortLabel: 'Charpente bois',
  filterKey: 'charpente-bois',
  order: 1,
  icon: 'roof',
  cardText:
    "Des charpentes taillées à l'ancienne, tenons, mortaises et chevilles, en mélèze et sapin du pays.",
  cardLinkLabel: 'Voir la charpente bois',
  image: HERO,
  schema: {
    serviceType: 'Charpente bois',
    description:
      'Conception, taille en atelier et levage de charpentes bois traditionnelles en mélèze et sapin des Hautes-Alpes : charpentes neuves, réfections de charpentes anciennes, charpentes apparentes, abris et terrasses couvertes.',
  },

  seo: {
    title: 'Charpente bois traditionnelle, Hautes-Alpes | 3B Charpente',
    description:
      'Charpente bois traditionnelle en mélèze et sapin des Hautes-Alpes, taillée et assemblée dans notre atelier. Charpentiers depuis 2007. Demandez votre devis.',
    image: HERO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Charpentier dans les Hautes-Alpes depuis 2007',
    title: 'Charpente bois **traditionnelle** dans les **Hautes-Alpes**',
    text: 'Nous traçons, taillons et assemblons vos charpentes **dans notre atelier**, en **mélèze et sapin des Hautes-Alpes**, avant de les lever sur votre maison. Des assemblages bois sur bois, un métier appris chez les **Compagnons du Devoir**, et une étude sur mesure pour chaque projet.',
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: { label: 'Voir nos charpentes', href: '/charpente-bois/#realisations' },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Bois des Hautes-Alpes' }],
    images: [HERO],
    caption: "Levage des fermes, réfection d'une charpente à L'Argentière-la-Bessée.",
  },

  // Savoldelli nommée une seule fois sur la page (section « Nos bois ») : voir validationPoints.
  tldr: "3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, conçoit et réalise des charpentes bois traditionnelles dans les Hautes-Alpes : charpentes neuves, réfections, charpentes apparentes, abris et terrasses couvertes. Les pièces sont tracées et taillées dans notre atelier, surtout en mélèze et sapin des Hautes-Alpes, puis assemblées et levées sur place.",

  layout: [
    // 3.4 Qu'est-ce qu'une charpente traditionnelle ?
    {
      type: 'list',
      style: 'definitions',
      tone: 'light',
      kicker: 'Le métier',
      title: "Une charpente **traditionnelle**, c'est quoi ?",
      text: "Une charpente traditionnelle est faite de pièces de bois massif, taillées sur mesure et assemblées bois sur bois. Elle porte la couverture, encaisse le poids de la neige et, quand elle reste apparente, donne son caractère à la maison.\n\nÀ la différence des fermettes industrielles (petites fermes en W reliées par des connecteurs métalliques), elle laisse en général plus d'espace libre sous le toit : utile si vous voulez un jour aménager les combles.",
      items: [
        {
          title: 'Ferme',
          text: "le triangle qui porte le toit. Ses pièces principales sont les arbalétriers (inclinés), l'entrait (la pièce horizontale du bas) et le poinçon (la pièce verticale du centre).",
        },
        {
          title: 'Pannes et chevrons',
          text: 'les pannes sont des poutres horizontales posées sur les fermes ; elles portent les chevrons, sur lesquels repose la couverture.',
        },
        {
          title: 'Tenon-mortaise chevillé',
          text: "le tenon, taillé au bout d'une pièce, entre dans la mortaise creusée dans l'autre. Une cheville en bois traverse le tout et serre l'assemblage.",
        },
        {
          title: 'Assemblage à blanc',
          text: "la charpente est montée une première fois à l'atelier pour vérifier chaque pièce, puis démontée et transportée jusqu'au chantier.",
        },
      ],
      image: 'abris-voiture-a-l-argentiere-la-bessee/tenons mortaise chevillé.JPG',
      caption: "Tenons et mortaises chevillés sur un abri voiture à L'Argentière-la-Bessée.",
    },

    // 3.5 Ce que nous réalisons
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      kicker: 'Nos charpentes',
      title: "Du neuf à l'ancien, **une charpente pour chaque projet**",
      items: [
        {
          title: 'Charpente neuve',
          icon: 'roof',
          text: 'Pour une maison neuve, une maison ossature bois ou une annexe. Apparente ou cachée, nous la dessinons avec vous.',
          link: { label: 'Maison ossature bois', href: '/maison-ossature-bois/' },
        },
        {
          title: 'Réfection de charpente ancienne',
          icon: 'hammer',
          text: "Remplacer des pièces abîmées, reprendre des fermes, refaire une charpente entière : nous l'avons fait à L'Argentière-la-Bessée et à Briançon.",
          link: {
            label: 'Rénovation de charpente et combles',
            href: '/renovation-charpente-combles/',
          },
        },
        {
          title: 'Lucarnes et fenêtres de toit',
          icon: 'window',
          text: "Une ouverture dans le toit se prépare dans la charpente : chevêtre (la pièce qui encadre l'ouverture), jouées de lucarne, encadrements.",
          link: { label: 'Créer une lucarne', href: '/renovation-charpente-combles/#lucarnes' },
        },
        {
          title: 'Surélévation et extension',
          icon: 'arrowUp',
          text: 'Une structure bois légère posée sur une maison existante, comme à Pelvoux ou à Briançon.',
          link: { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
        },
        {
          title: 'Abris, carports et terrasses couvertes',
          icon: 'balcony',
          text: 'Des ouvrages plus petits, mais les mêmes assemblages : poinçon, entrait cintré, tenons chevillés.',
          link: { label: 'Balcons, terrasses et abris', href: '/balcon-terrasse-abri-bois/' },
        },
      ],
    },

    // 3.6 Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'light',
      kicker: 'Notre méthode',
      title: "De l'étude **au levage**, en six étapes",
      steps: [
        {
          title: 'Rencontre et étude sur mesure',
          text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir la maison, prenons les cotes et écoutons ce que vous voulez en faire.',
          image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/préparation de chantier.JPG',
        },
        {
          title: 'Dessin et choix des bois',
          text: 'Nous dessinons la charpente et vous proposons une esthétique : apparente ou non, forme des fermes, décors de pannes. Vous validez avant que la première pièce soit taillée.',
        },
        {
          title: 'Traçage',
          text: "Chaque pièce est tracée avant d'être coupée. Ce savoir, que les charpentiers appellent « le trait », s'apprend sur le Tour de France des Compagnons.",
        },
        {
          title: "Taille à l'atelier",
          text: "Tenons, mortaises, embrèvements (des entailles en biais qui transmettent l'effort d'une pièce à l'autre) : les assemblages sont taillés dans notre atelier, parfois encore à la besaiguë, l'outil à deux tranchants des charpentiers.",
          image:
            "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
        },
        {
          title: 'Assemblage à blanc',
          text: "La charpente est montée une première fois à l'atelier. Tout est vérifié avant le transport, pour limiter les ajustements sur le chantier.",
          image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/assamblage à blanc.JPG',
        },
        {
          title: 'Levage et couverture',
          text: "Sur place, nous levons les fermes, les pannes et les chevrons. Viennent ensuite, si vous nous les confiez, l'isolation biosourcée, la couverture et le bardage.",
          image: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/couverture terminée.jpg',
        },
      ],
    },

    // 3.7 Nos bois
    {
      type: 'textImage',
      tone: 'cream',
      kicker: 'Nos bois',
      title: 'Du **mélèze et du sapin** des Hautes-Alpes',
      text: "Nous travaillons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Un bois qui a poussé dans le département, c'est moins de transport et une filière locale qui vit.\n\nLe mélèze, essence de montagne, est apprécié pour sa tenue en extérieur et sa teinte chaude. Le sapin, plus léger, est un bois de structure courant. Selon le projet, d'autres essences entrent en jeu : douglas pour un bardage, épicéa pour des panneaux trois plis, frêne pour un escalier.\n\nEt quand une vieille charpente est déposée, ses pièces saines peuvent resservir : une **ferme en vieux bois** a ainsi retrouvé sa place lors d'une réfection de toiture.",
      images: [
        'refection-d-une-charpente-a-l-argentiere-la-bessee/plancher en mélèze.JPG',
        'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG',
      ],
      imagePosition: 'right',
      caption:
        "Plancher en mélèze posé lors de la réfection d'une charpente à L'Argentière-la-Bessée.",
      links: [{ label: "Le bois de réemploi avec 3B Récup'", href: '/3b-recup/' }],
    },

    // 3.8 Le savoir-faire
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Le savoir-faire',
      title: 'Un charpentier formé chez les **Compagnons du Devoir**',
      text: "Jean-Michel Tardy a commencé la charpente en 1995, apprenti à 16 ans dans une entreprise de Savoie. Il a passé son CAP dans un CFA des Compagnons du Devoir, puis fait son Tour de France, dans des entreprises de France métropolitaine, de Martinique et d'Autriche. Après deux ans comme formateur à L'Argentière-la-Bessée, il a créé 3B Charpente en 2007.\n\nCe savoir-faire se voit dans les détails : un trait de Jupiter, assemblage en forme d'éclair qui aboute deux pièces dans leur longueur ; un tenon à double embrèvement taillé à la main ; un entrait cintré pour un simple abri voiture.",
      quote: {
        text: "Ce qui compte pour lui : « le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin ».",
        author: 'Jean-Michel Tardy, fondateur de 3B Charpente',
      },
      image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter assemblé.JPG',
      cta: { label: "Découvrir l'équipe", href: '/a-propos/' },
    },

    // 3.9 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      kicker: 'Nos chantiers',
      title: 'Des charpentes **levées près de chez vous**',
      items: [
        {
          project: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
          title: "Réfection d'une charpente à L'Argentière-la-Bessée",
          text: "Dépose de l'ancienne charpente, taille, assemblage à blanc, levage des fermes et des lucarnes, plancher et bardage en mélèze.",
        },
        {
          project: 'abris-voiture-a-l-argentiere-la-bessee',
          title: "Abri voiture à L'Argentière-la-Bessée",
          text: 'Une ferme à poinçon et entrait cintré, assemblée par tenons et mortaises chevillés.',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
          title: "Rénovation d'une maison à Prelles",
          text: 'Charpente taillée en mélèze pays (du mélèze local), assemblée à blanc, puis levée avec le solivage.',
        },
        {
          project: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
          title: 'Ancienne forge à La Salle-les-Alpes',
          text: "Taille de la charpente, levage de la toiture et couverture d'un bâtiment réhabilité à Serre Chevalier.",
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },

    // 3.10 3B Récup'
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: "Une vieille charpente **n'est pas un déchet**",
      text: "Avec 3B Récup', notre activité de déconstruction sélective et de réemploi, nous déposons charpentes, solivages et murs à ossature bois. Les pièces saines sont triées, nettoyées et usinées dans notre atelier, puis reposées sur nos chantiers. Nous donnons ainsi une nouvelle vie au matériau bois : une ferme en vieux bois, un bardage vieux bois, un garde-corps en bois de réemploi.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // 3.11 Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Vos **autres projets** bois',
      services: [
        'renovation-charpente-combles',
        'maison-ossature-bois',
        'extension-surelevation-bois',
      ],
    },

    // 3.12 FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **la charpente bois**',
      faqs: [
        'charpente-bois-q1',
        'charpente-bois-q2',
        'charpente-bois-q3',
        'charpente-bois-q4',
        'charpente-bois-q5',
        'charpente-bois-q6',
      ],
    },

    // 3.13 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      title: 'Prêt à **transformer votre espace** ?',
      text: "Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlez-nous de votre charpente : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'charpente-bois-q1',
      question: 'Quel bois utiliser pour une charpente traditionnelle ?',
      answer:
        "Nous utilisons principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local. Le mélèze, essence de montagne, tient bien en extérieur et se prête aux pièces apparentes. Le sapin, plus léger, est un bois de structure courant. Le choix dépend de la portée, de l'exposition et de l'aspect recherché : nous en parlons ensemble lors de l'étude.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q2',
      question: 'Combien coûte une charpente bois traditionnelle ?',
      answer:
        "Le prix dépend de la surface et de la forme du toit, des sections de bois, du type d'assemblages, de l'accès au chantier et des travaux associés (isolation, couverture). Un prix au mètre carré donné sans voir le projet serait trompeur. Contactez-nous : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé adapté à votre projet.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q3',
      question:
        'Quelle différence entre une charpente traditionnelle et une charpente en fermettes ?',
      answer:
        'La charpente traditionnelle est faite de pièces massives (fermes, pannes, chevrons) taillées sur mesure et assemblées bois sur bois. La charpente industrielle utilise des fermettes : de petites fermes en W, rapprochées et reliées par des connecteurs métalliques. Les fermettes occupent le volume sous le toit ; une charpente traditionnelle laisse en général les combles plus libres et peut rester apparente.',
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q4',
      question: 'Combien de temps faut-il pour faire une charpente ?',
      answer:
        "Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. Une bonne partie du travail se fait à l'atelier : traçage, taille et assemblage à blanc. Sur le chantier, il reste le levage, puis l'isolation et la couverture si vous nous les confiez.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q5',
      question: 'Intervenez-vous à Briançon et en dehors des Hautes-Alpes ?',
      answer:
        "Oui. Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans tout le département : Briançon, la Vallouise, Serre Chevalier, le Pays des Écrins. Nous travaillons aussi en région PACA et Rhône-Alpes, par exemple pour une maison à ossature bois dans les monts du Lyonnais ou un balcon terrasse à Gresse-en-Vercors.",
      topic: 'secteurs',
    },
    {
      key: 'charpente-bois-q6',
      question: 'Peut-on garder ou réutiliser une vieille charpente ?',
      answer:
        "Souvent, au moins en partie. Une charpente ancienne se répare : remplacement de pièces, reprise des fermes, rallonge par un trait de Jupiter. Quand elle doit être déposée, 3B Récup', notre activité de réemploi, trie les pièces saines, les nettoie et les usine à l'atelier pour les remettre en œuvre, comme cette ferme en vieux bois reposée lors d'une réfection de toiture.",
      topic: 'recup',
    },
  ],

  photoAlts: [
    {
      photo: HERO,
      alt: "Levage des fermes d'une charpente traditionnelle refaite par 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes)",
    },
    {
      photo:
        "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
      alt: 'Charpentier de 3B Charpente taillant à la besaiguë un tenon à double embrèvement',
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter assemblé.JPG',
      alt: "Trait de Jupiter assemblé sur une pièce de charpente, réfection à L'Argentière-la-Bessée",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/3Assemblage à blanc  (1).JPG',
      alt: "Assemblage à blanc d'une charpente en mélèze pays avant levage, maison rénovée à Prelles (Hautes-Alpes)",
    },
    {
      photo: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
      alt: "Ferme d'un abri voiture avec poinçon et entrait cintré, assemblée par 3B Charpente à L'Argentière-la-Bessée",
    },
    {
      photo: 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG',
      alt: "Ferme de charpente en vieux bois de réemploi reposée par 3B Charpente lors d'une réfection de toiture",
    },
  ],

  validationPoints: [
    {
      question:
        "Traçage (étape 03 de la méthode) : sur épure au sol, en dessin numérique (logiciel ?), ou les deux ? La réponse fixe le texte de l'étape 03.",
      decision:
        "Mention « À VALIDER » retirée : l'étape 03 garde seulement « Chaque pièce est tracée avant d'être coupée. Ce savoir, que les charpentiers appellent « le trait », s'apprend sur le Tour de France des Compagnons. »",
      priority: 'normal',
    },
    {
      question:
        'Compagnons du Devoir : Jean a-t-il été reçu Compagnon ? Si oui, on peut écrire « Compagnon du Devoir ».',
      decision:
        'Formulation « formé chez les Compagnons du Devoir » (CAP en CFA des Compagnons, puis Tour de France). Jamais « Compagnon du Devoir » comme titre.',
      priority: 'normal',
    },
    {
      question:
        "Atelier : commune et adresse de l'atelier (même lieu que le 5 rue Saint-Michel ?), pour l'écrire et le montrer en photo.",
      decision:
        "« Notre atelier » gardé seulement pour le traçage, la taille, l'assemblage à blanc et l'usinage du bois de réemploi. Aucune adresse d'atelier, aucune photo d'atelier.",
      priority: 'low',
    },
    {
      question:
        "Calcul des charpentes : dimensionnement fait en interne ou par un bureau d'études ? Utile pour une future question « charge de neige ».",
      decision: "Rien n'est écrit sur le calcul ni sur la charge de neige.",
      priority: 'low',
    },
    {
      question:
        "Couverture : quels matériaux 3B pose-t-il (bardeau de mélèze comme au Casset, bac acier, tuiles, lauzes…) ? À ajouter à l'étape 06 si oui.",
      decision: "L'étape 06 reste générale (« la couverture »), sans liste de matériaux.",
      priority: 'low',
    },
    {
      question: 'Charpentes industrielles : 3B en pose-t-il aussi ?',
      decision: "La page ne l'affirme pas et ne le nie pas.",
      priority: 'low',
    },
    {
      question:
        'Commune « Ronatlon » (ferme en vieux bois) : libellé à corriger avant de citer le chantier par son nom.',
      decision:
        "La ferme en vieux bois est citée sans commune (« lors d'une réfection de toiture »). Titre affiché de la réalisation : « Réfection d'une toiture en vieux bois ».",
      priority: 'normal',
    },
    {
      question: 'Prix : Jean veut-il publier des fourchettes indicatives ?',
      decision: 'Aucun prix, aucune fourchette : la FAQ Q2 reste sans chiffre.',
      priority: 'normal',
    },
    {
      question:
        'Scierie Savoldelli : accord pour la citer et la photographier ; commune de la scierie, pour un éventuel lien.',
      decision:
        "Nommée une seule fois sur la page (section « Nos bois »), avec la formulation validée « notre partenaire local ». Le nom est retiré de l'En bref et remplacé par « notre partenaire local » dans la FAQ Q1. Pas de logo, pas de photo, pas de lien.",
      priority: 'normal',
    },
    {
      question: 'Bois certifiés (Bois des Alpes ou autre) : à confirmer avant toute mention.',
      decision: "Aucune certification n'est mentionnée.",
      priority: 'low',
    },
    {
      question:
        'Portrait de Jean au travail pour la section « Le savoir-faire » (fond sombre, portrait à droite dans la fiche).',
      decision:
        'Aucun portrait disponible : la section utilise la photo de chantier « trait de jupiter assemblé », assemblage cité dans le texte.',
      priority: 'low',
    },
    {
      question:
        "Photos à demander : atelier (traçage d'une épure, taille en cours, vue générale), grumes ou plateaux de mélèze à la Scierie Savoldelli (avec son accord), charpente apparente terminée vue de l'intérieur, gros plan d'une cheville et d'un décor de panne.",
      decision:
        "En attendant : « plancher en mélèze » et « ferme en vieux bois » pour la section « Nos bois ». Méthode : les numéros de photos de la fiche étant décalés d'une étape, les photos sont placées selon leur sujet (01 préparation de chantier, 04 taille du tenon, 05 assemblage à blanc, 06 couverture terminée) ; étapes 02 et 03 sans photo.",
      priority: 'low',
    },
    {
      question:
        'Liens de la FAQ Q5 vers les pages secteur (Briançon, la Vallouise, Serre Chevalier), prévus « à lier » dans la fiche.',
      decision:
        'Non posés : les réponses de FAQ sont en texte simple (elles alimentent aussi les données FAQPage).',
      priority: 'low',
    },
  ],
}
