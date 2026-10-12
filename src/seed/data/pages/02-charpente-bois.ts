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
  cardText: "Taillée à l'atelier, assemblée bois sur bois, en mélèze et sapin du pays.",
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
    text: 'Nous traçons, taillons et assemblons votre charpente **dans notre atelier**, en **mélèze et sapin des Hautes-Alpes**, puis nous la levons chez vous.',
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: { label: 'Voir nos charpentes', href: '/charpente-bois/#realisations' },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Bois des Hautes-Alpes', text: 'mélèze et sapin', icon: 'tree' },
      { label: 'Compagnons du Devoir', text: 'notre formation', icon: 'ruler' },
    ],
    images: [HERO],
    caption: "Levage des fermes, réfection d'une charpente à L'Argentière-la-Bessée.",
    photoTag: "L'Argentière-la-Bessée",
    sheet: [
      { label: 'Essences', value: 'Mélèze et sapin des Hautes-Alpes' },
      { label: 'Assemblages', value: 'Bois sur bois : tenons, mortaises, chevilles' },
      { label: "À l'atelier", value: 'Traçage, taille, assemblage à blanc' },
    ],
  },

  // Savoldelli nommée une seule fois sur la page (section « Nos bois ») : voir validationPoints.
  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, réalise des charpentes bois traditionnelles dans les Hautes-Alpes : charpentes neuves, réfections, charpentes apparentes, abris et terrasses couvertes. Les pièces sont tracées et taillées dans notre atelier, en mélèze et sapin des Hautes-Alpes, puis levées sur place.",

  layout: [
    // Qu'est-ce qu'une charpente traditionnelle ?
    {
      type: 'list',
      style: 'definitions',
      tone: 'light',
      kicker: 'Le métier',
      title: "Une charpente **traditionnelle**, c'est quoi ?",
      text: 'Des pièces de **bois massif**, taillées sur mesure et assemblées bois sur bois. Elle porte la couverture, encaisse le poids de la neige et, apparente, donne son caractère à la maison.',
      items: [
        { title: 'Ferme', text: 'Le triangle qui porte le toit : arbalétriers inclinés, entrait en bas, poinçon au centre.' },
        { title: 'Pannes et chevrons', text: 'Les pannes, posées sur les fermes, portent les chevrons ; les chevrons portent la couverture.' },
        { title: 'Tenon-mortaise chevillé', text: "Le tenon entre dans la mortaise ; une cheville en bois traverse et serre l'assemblage." },
        { title: 'Assemblage à blanc', text: "La charpente est montée une première fois à l'atelier pour tout vérifier, puis démontée." },
      ],
      image: 'abris-voiture-a-l-argentiere-la-bessee/tenons mortaise chevillé.JPG',
      caption: "Tenons et mortaises chevillés sur un abri voiture à L'Argentière-la-Bessée.",
    },
    {
      type: 'callout',
      kind: 'tip',
      tone: 'light',
      text: "Contrairement aux fermettes industrielles (petites fermes en W reliées par des connecteurs métalliques), une charpente traditionnelle laisse de la place sous le toit : utile pour **aménager les combles** un jour.",
    },

    // Ce que nous réalisons
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
          text: 'Pour une maison neuve, une ossature bois ou une annexe. Apparente ou cachée, dessinée avec vous.',
          link: { label: 'Maison ossature bois', href: '/maison-ossature-bois/' },
        },
        {
          title: 'Réfection de charpente ancienne',
          icon: 'hammer',
          text: "Remplacer des pièces, reprendre des fermes ou tout refaire, comme à L'Argentière-la-Bessée et à Briançon.",
          link: { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
        },
        {
          title: 'Lucarnes et fenêtres de toit',
          icon: 'window',
          text: "L'ouverture se prépare dans la charpente : chevêtre (la pièce qui encadre l'ouverture), jouées, encadrements.",
          link: { label: 'Créer une lucarne', href: '/renovation-charpente-combles/#lucarnes' },
        },
        {
          title: 'Surélévation et extension',
          icon: 'arrowUp',
          text: 'Une structure bois légère posée sur la maison existante, comme à Pelvoux ou à Briançon.',
          link: { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
        },
        {
          title: 'Abris, carports et terrasses couvertes',
          icon: 'balcony',
          text: 'Des ouvrages plus petits, les mêmes assemblages : poinçon, entrait cintré, tenons chevillés.',
          link: { label: 'Balcons, terrasses et abris', href: '/balcon-terrasse-abri-bois/' },
        },
        {
          title: 'Un autre projet ?',
          icon: 'phone',
          text: 'Racontez-le-nous en quelques lignes : nous venons voir et nous en parlons.',
          link: { label: 'Demander mon devis', href: '/contact/' },
        },
      ],
    },

    // Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'light',
      kicker: 'Notre méthode',
      title: "De l'étude **au levage**, en six étapes",
      intro: "Une bonne partie du travail se fait à l'atelier : sur le chantier, tout s'assemble sans surprise.",
      steps: [
        {
          title: 'Rencontre et étude sur mesure',
          text: 'Nous venons voir la maison, prenons les cotes et écoutons votre projet.',
          image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/assamblage à blanc.JPG',
        },
        {
          title: 'Dessin et choix des bois',
          text: 'Apparente ou non, forme des fermes, décors de pannes : vous validez avant la première coupe.',
        },
        {
          title: 'Traçage',
          text: "Chaque pièce est tracée avant d'être coupée : « le trait », appris sur le Tour de France des Compagnons.",
        },
        {
          title: "Taille à l'atelier",
          text: "Tenons, mortaises, embrèvements : taillés à l'atelier, parfois encore à la besaiguë, l'outil à deux tranchants des charpentiers.",
          image:
            "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
        },
        {
          title: 'Assemblage à blanc',
          text: "Un premier montage à l'atelier : tout est vérifié avant le transport.",
        },
        {
          title: 'Levage et couverture',
          text: "Fermes, pannes et chevrons levés sur place ; puis l'isolation biosourcée et la couverture, si vous nous les confiez.",
          image: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/couverture terminée.jpg',
        },
      ],
    },

    // Nos bois
    {
      type: 'list',
      style: 'definitions',
      kicker: 'Nos bois',
      title: 'Du **mélèze et du sapin** des Hautes-Alpes',
      text: "Nous travaillons surtout du bois qui a poussé dans le département, scié par notre partenaire local, la Scierie Savoldelli : **moins de transport**, une filière locale qui vit.",
      items: [
        { title: 'Mélèze', text: 'Essence de montagne : tient bien en extérieur, teinte chaude, belle en apparent.' },
        { title: 'Sapin', text: 'Plus léger : le bois de structure courant.' },
        { title: 'Selon le projet', text: 'Douglas pour un bardage, épicéa en panneaux trois plis, frêne pour un escalier.' },
        {
          title: 'Vieux bois',
          text: "Les pièces saines d'une charpente déposée peuvent resservir, comme cette **ferme en vieux bois** reposée lors d'une réfection de toiture.",
          link: { label: "Le bois de réemploi avec 3B Récup'", href: '/3b-recup/' },
        },
      ],
      image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/plancher en mélèze.JPG',
      caption: "Plancher en mélèze posé lors de la réfection d'une charpente à L'Argentière-la-Bessée.",
    },

    // Le savoir-faire
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Le savoir-faire',
      title: 'Un charpentier formé chez les **Compagnons du Devoir**',
      quote: {
        text: '« Le travail en équipe, l’écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin. »',
        author: 'Jean-Michel Tardy, fondateur de 3B Charpente',
      },
      items: [
        { title: '1995', text: 'Apprenti à 16 ans dans une entreprise de Savoie.' },
        { title: 'CAP', text: 'Dans un CFA des Compagnons du Devoir, puis le Tour de France : métropole, Martinique, Autriche.' },
        { title: '2007', text: "Après deux ans comme formateur à L'Argentière-la-Bessée, il crée 3B Charpente." },
      ],
      text: "Ce savoir-faire se voit dans les détails : un **trait de Jupiter** (assemblage en forme d'éclair qui aboute deux pièces), un tenon à double embrèvement taillé à la main, un entrait cintré pour un simple abri voiture.",
      image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter assemblé.JPG',
      cta: { label: "Découvrir l'équipe", href: '/a-propos/' },
    },

    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'commune',
      kicker: 'Nos chantiers',
      title: 'Des charpentes **levées près de chez vous**',
      items: [
        {
          project: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
          title: "Réfection d'une charpente",
          text: 'Dépose, taille, levage des fermes et des lucarnes, bardage en mélèze.',
        },
        {
          project: 'abris-voiture-a-l-argentiere-la-bessee',
          title: 'Abri voiture',
          text: 'Une ferme à poinçon et entrait cintré, tenons et mortaises chevillés.',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
          title: "Rénovation d'une maison",
          text: 'Charpente en mélèze du pays, assemblée à blanc, levée avec le solivage.',
        },
        {
          project: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
          title: 'Ancienne forge',
          text: 'Charpente taillée, toiture levée et couverte à Serre Chevalier.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },

    // 3B Récup'
    {
      type: 'cta',
      variant: 'slim',
      icon: 'recycle',
      title: "Une vieille charpente **n'est pas un déchet**",
      text: "Avec 3B Récup', ses pièces saines sont triées, usinées à l'atelier, puis reposées : ferme, bardage ou garde-corps en vieux bois.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Vos **autres projets** bois',
      services: ['renovation-charpente-combles', 'maison-ossature-bois', 'extension-surelevation-bois'],
    },

    // FAQ
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

    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre charpente',
      title: 'Prêt à **transformer votre maison** ?',
      text: 'Chaque projet commence par une étude sur mesure. Parlez-nous de votre charpente : nous venons voir, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'charpente-bois-q1',
      question: 'Quel bois utiliser pour une charpente traditionnelle ?',
      answer:
        "Surtout du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local. Le mélèze, essence de montagne, tient bien en extérieur et se prête aux pièces apparentes ; le sapin, plus léger, est un bois de structure courant. Le choix dépend de la portée, de l'exposition et de l'aspect voulu : nous en parlons lors de l'étude.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q2',
      question: 'Combien coûte une charpente bois traditionnelle ?',
      answer:
        "Cela dépend de la surface et de la forme du toit, des sections de bois, des assemblages, de l'accès au chantier et des travaux associés (isolation, couverture). Un prix au mètre carré sans voir le projet serait trompeur : nous vous proposons un devis détaillé après une rencontre.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q3',
      question:
        'Quelle différence entre une charpente traditionnelle et une charpente en fermettes ?',
      answer:
        "La charpente traditionnelle est faite de pièces massives (fermes, pannes, chevrons) taillées sur mesure et assemblées bois sur bois. Les fermettes sont de petites fermes en W, rapprochées et reliées par des connecteurs métalliques : elles occupent le volume sous le toit, quand une charpente traditionnelle laisse les combles plus libres et peut rester apparente.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q4',
      question: 'Combien de temps faut-il pour faire une charpente ?',
      answer:
        "Cela dépend de la taille et de la complexité du projet : vous recevez un calendrier estimatif dès la première rencontre. Une bonne partie du travail se fait à l'atelier (traçage, taille, assemblage à blanc). Sur le chantier restent le levage, puis l'isolation et la couverture si vous nous les confiez.",
      topic: 'charpente',
    },
    {
      key: 'charpente-bois-q5',
      question: 'Intervenez-vous à Briançon et en dehors des Hautes-Alpes ?',
      answer:
        "Oui. Depuis L'Argentière-la-Bessée, nous intervenons dans tout le département : Briançon, la Vallouise, Serre Chevalier, le Pays des Écrins. Et aussi en région PACA et Rhône-Alpes, comme pour une maison à ossature bois dans les monts du Lyonnais ou un balcon terrasse à Gresse-en-Vercors.",
      topic: 'secteurs',
    },
    {
      key: 'charpente-bois-q6',
      question: 'Peut-on garder ou réutiliser une vieille charpente ?',
      answer:
        "Souvent, au moins en partie : on remplace des pièces, on reprend des fermes, on rallonge par un trait de Jupiter. Quand elle doit être déposée, 3B Récup', notre activité de réemploi, trie les pièces saines et les usine à l'atelier pour les remettre en œuvre, comme une ferme en vieux bois reposée lors d'une réfection de toiture.",
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
