/**
 * Fiche 01 · Accueil (`/`). Transcription de 3b-charpente-kit/docs/pages/01-accueil.md.
 */
import type { SeedPage } from '../../types'

const P = {
  levageFermes: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
  tailleTenon: "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
  terrasseVallouise: 'renovation-et-isolation-d-un-chalet-a-vallouise/10. Terrasse en mélèze et ses assemblages traditionnels.JPG',
  soleilCouchant: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/charpente apparent et soleil couchant...jpg',
  bardageVieuxBois: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
  gardeCorpsReemploi: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
  fermeVieuxBois: 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG',
  insufflation: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
  traitDeJupiter: 'refection-d-une-charpente-a-l-argentiere-la-bessee/trait de jupiter assemblé.JPG',
  plancherMeleze: 'construction-d-une-terrasse-couverte-a-champcella/plancher en mélèze pays.JPG',
  assemblageBlancPrelles: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/3Assemblage à blanc  (1).JPG',
  tailleCharpentePrelles: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (1).JPG',
  chaletFacadeSud: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
  lucarneLevage: 'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
  repriseFermes: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
  surelevationFacadeSud: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
  pignonVitre: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/03Pignon vitré.JPG',
  escalierMontageTermine: 'escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG',
} as const

const RGE_DIRECTORY = 'https://france-renov.gouv.fr/annuaire-rge'

export const page: SeedPage = {
  kind: 'page',
  slug: 'accueil',
  isHome: true,
  title: 'Accueil',

  seo: {
    title: 'Charpentier Hautes-Alpes (05), Briançon | 3B Charpente',
    description:
      "Charpentiers à L'Argentière-la-Bessée depuis 2007 : charpente, isolation biosourcée RGE, ossature bois, réemploi du bois local. Parlons de votre projet.",
    image: P.levageFermes,
  },

  hero: {
    variant: 'collage',
    kicker: 'Charpente · Isolation biosourcée · Ossature bois · Réemploi',
    title: "**Charpentiers** à Briançon, L'Argentière-la-Bessée et dans les **Hautes-Alpes**",
    text: "3B Charpente transforme le **bois des Hautes-Alpes** en charpentes, maisons et rénovations faites pour durer. Nous travaillons le mélèze et le sapin du pays, des **isolants biosourcés** et du **bois de réemploi**, pour des constructions écoresponsables à Briançon et dans ses environs.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: { label: 'Voir nos réalisations', href: '/realisations/' },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Qualifié RGE', text: 'Qualibat', icon: 'medal' },
      { label: 'Compagnons du Devoir', text: 'notre formation', icon: 'ruler' },
    ],
    images: [P.levageFermes, P.tailleTenon, P.terrasseVallouise],
    highlight: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
  },

  tldr: "3B Charpente est une entreprise de charpente bois fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, et installée à L'Argentière-la-Bessée (Hautes-Alpes). Elle réalise charpentes, rénovations, isolation biosourcée avec la qualification RGE, maisons ossature bois, escaliers et balcons, en bois local. Avec 3B Récup', elle déconstruit et réemploie le bois.",

  layout: [
    // Section 4 : prestations (les textes des cartes viennent des prestations)
    {
      type: 'servicesGrid',
      mode: 'all',
      kicker: 'Nos prestations',
      title: "Tous nos **métiers du bois**, de la charpente à l'**isolation**",
      cta: { label: 'Parler de mon projet', href: '/contact/' },
    },

    // Section 3 : manifeste
    {
      type: 'manifesto',
      layout: 'centered',
      kicker: 'Notre façon de travailler',
      title: 'Construire **simplement**, penser **durablement**.',
      text: 'Chez 3B Charpente, nous faisons les choses différemment. Notre engagement pour le bois local et les techniques écoresponsables nous distingue dans les Hautes-Alpes, à Briançon comme dans les communes voisines.\n\nNous privilégions les matériaux sains et le réemploi pour limiter notre impact sur l\'environnement. Chaque charpente ou rénovation de chalet est le fruit d\'un travail étroit avec vous : nous l\'adaptons à votre maison, à vos usages et à vos goûts.',
      emphasis: 'Simple, transparent, et toujours à votre écoute : voilà notre promesse.',
      image: 'ambiance/foret.png',
      cta: { label: 'Découvrir notre histoire', href: '/a-propos/' },
    },

    // Section 5 : 3B Récup'
    {
      type: 'spotlight',
      badge: "3B Récup'",
      kicker: 'Déconstruction et réemploi du bois',
      title: 'Donner une **seconde vie** au bois des **bâtiments déconstruits**',
      text: "3B Récup' est l'initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective : démonter un bâtiment élément par élément pour récupérer ce qui peut resservir.\n\nCharpentiers de métier, nous déposons les structures bois, du bâtiment industriel à la maison particulière. Le bois est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers.\n\n**Architectes, entreprises, collectivités, particuliers : 3B Récup' vous apporte des solutions personnalisées.**",
      steps: [
        {
          title: 'Diagnostic',
          text: 'Repérer les matériaux réemployables, en lien avec le diagnostic PEMD (produits, équipements, matériaux et déchets), exigé avant certaines démolitions.',
        },
        { title: 'Stratégie', text: 'Une feuille de route pour déposer sans abîmer.' },
        { title: 'Intervention', text: 'Nos charpentiers déposent les éléments sur site.' },
        { title: 'Transformation', text: "Tri, nettoyage et usinage à l'atelier." },
        { title: 'Repose', text: "Notre système constructif s'adapte au bois de réemploi." },
      ],
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      links: [
        { label: 'Diagnostic et gisement (PEMD)', href: '/3b-recup/diagnostic-pemd/' },
        { label: 'Déconstruction sélective', href: '/3b-recup/deconstruction-selective/' },
        { label: 'Bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
      ],
      images: [P.bardageVieuxBois, P.gardeCorpsReemploi, P.fermeVieuxBois],
    },

    // Section 6 : 3B = Bio, Bâti, Bois
    {
      type: 'cards',
      variant: 'letter',
      columns: 3,
      tone: 'light',
      kicker: 'Pourquoi « 3B » ?',
      title: '**Bio**, **Bâti**, **Bois** : trois mots pour une façon de construire',
      items: [
        {
          letter: 'B',
          title: 'Bio',
          eyebrow: "du grec ancien βίος, qui exprime l'idée de vie.",
          text: 'Des maisons saines, isolées avec des matériaux biosourcés.',
          image: P.insufflation,
        },
        {
          letter: 'B',
          title: 'Bâti',
          eyebrow: "de l'ancien français bastir, idée d'entrelacer, d'assembler.",
          text: "L'art d'assembler : tenons et mortaises chevillés, traits de Jupiter, fermes montées à blanc avant le levage.",
          image: P.traitDeJupiter,
        },
        {
          letter: 'B',
          title: 'Bois',
          eyebrow: 'un être vivant.',
          text: 'Du mélèze et du sapin des Hautes-Alpes, et du bois de réemploi, à qui nous donnons une seconde vie.',
          image: P.plancherMeleze,
        },
      ],
    },

    // Section 7 : nos preuves (pas de portrait : vraie photo de chantier, à l'atelier)
    {
      type: 'cards',
      variant: 'icon',
      kicker: 'Ce sur quoi vous pouvez compter',
      title: "Un **savoir-faire** de compagnon, des **matériaux** d'ici",
      asideImage: P.tailleCharpentePrelles,
      items: [
        {
          title: 'Depuis 2007',
          icon: 'calendar',
          text: "Installés à L'Argentière-la-Bessée depuis 2007 : la charpente d'abord, puis la rénovation de chalets et l'ossature bois.",
        },
        {
          title: 'Formé chez les Compagnons du Devoir',
          icon: 'ruler',
          text: 'Jean-Michel Tardy, notre fondateur, a débuté à 16 ans, en 1995. CAP chez les Compagnons du Devoir, puis Tour de France : France métropolitaine, Martinique, Autriche.',
        },
        {
          title: 'Qualifié RGE',
          icon: 'medal',
          text: "RGE veut dire « reconnu garant de l'environnement ». Notre qualification Qualibat couvre l'isolation des murs et des toitures et les menuiseries extérieures. Elle ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.",
          link: { label: 'Vérifier notre qualification', href: RGE_DIRECTORY },
        },
        {
          title: 'Du bois des Hautes-Alpes',
          icon: 'tree',
          text: 'Principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local.',
        },
        {
          title: 'Des isolants biosourcés',
          icon: 'leaf',
          text: 'Ouate de cellulose, fibre de bois, laine de chanvre, lin et coton : 28 cm dans les murs du chalet de Vallouise, 32 cm en toiture.',
        },
      ],
      cta: { label: 'Qui sommes-nous ?', href: '/a-propos/' },
    },

    // Section 8 : votre projet, étape par étape
    {
      type: 'steps',
      variant: 'timeline',
      tone: 'light',
      kicker: 'Votre projet, étape par étape',
      title: 'Chaque projet commence par une **étude sur mesure**',
      steps: [
        { title: 'Vous nous contactez', text: 'Par téléphone ou avec le formulaire, même en quelques lignes.' },
        { title: 'Nous nous rencontrons', text: 'Nous parlons de vos besoins et vous donnons un calendrier estimatif.' },
        { title: 'Vous recevez votre devis', text: 'Un devis détaillé, adapté à votre projet.' },
        {
          title: "Nous préparons à l'atelier",
          text: "Traçage, taille et assemblage à blanc, c'est-à-dire un premier montage pour tout vérifier.",
          image: P.assemblageBlancPrelles,
        },
        { title: 'Nous levons et posons', text: 'Levage, pose et finitions sur votre chantier.' },
      ],
      cta: { label: 'Demander mon devis', href: '/contact/' },
    },

    // Section 9 : réalisations (6 cartes)
    {
      type: 'projects',
      mode: 'manual',
      label: 'commune',
      kicker: 'Nos réalisations',
      title: 'Des chantiers **réels**, de Briançon à **Vallouise**',
      items: [
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          tag: 'Vallouise',
          title: "Rénovation et isolation d'un chalet",
          text: "Chalet des années 1980 : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture.",
        },
        {
          project: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
          tag: "L'Argentière-la-Bessée",
          title: "Réfection d'une charpente avec lucarne",
          text: 'Taille traditionnelle, fermes et lucarne levées, bardage en mélèze.',
        },
        {
          project: 'renovation-d-une-copropriete-a-briancon',
          tag: 'Briançon',
          title: "Rénovation d'une copropriété",
          text: 'Reprise des fermes, isolation soufflée, nouvelle couverture. Avec en prime, une belle vue.',
        },
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          tag: 'Briançon',
          title: 'Surélévation en ossature bois',
          text: 'Pignons en ossature bois et panneaux trois plis en épicéa apparents.',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          tag: "L'Argentière-la-Bessée",
          title: "Rénovation d'une maison avec du bois de réemploi",
          text: 'Pignon vitré, escalier balancé, bardage en vieux bois et garde-corps de réemploi.',
        },
        {
          project: 'escalier-1-4-tournant-en-meleze-lamelle-colle',
          tag: 'Escalier',
          title: 'Escalier quart tournant en mélèze lamellé-collé',
          text: "Tracé et taillé à l'atelier, monté en deux jours, finitions comprises.",
        },
      ],
      cta: { label: 'Voir toutes nos réalisations', href: '/realisations/' },
    },

    // Section 10 : zone d'intervention
    {
      type: 'serviceArea',
      tone: 'cream',
      kicker: 'Où nous intervenons',
      title: 'Charpentiers dans le **nord des Hautes-Alpes**, et au-delà',
      text: "Basés à L'Argentière-la-Bessée, nous intervenons dans les Hautes-Alpes, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.",
      sectors: [
        {
          title: 'Charpentier à Briançon',
          text: 'Une copropriété rénovée, une maison surélevée en ossature bois.',
          link: { label: 'Nos chantiers à Briançon', href: '/charpentier-briancon/' },
        },
        {
          title: 'Charpentier à Serre Chevalier',
          text: 'Une ancienne forge à La Salle-les-Alpes, un toit en bardeaux de mélèze au Casset.',
          link: { label: 'Nos chantiers à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        },
        {
          title: 'Charpentier en Vallouise et Pays des Écrins',
          text: "L'Argentière-la-Bessée, Vallouise, Pelvoux, Champcella, La Roche-de-Rame : notre secteur d'origine.",
          link: { label: 'Nos chantiers en Vallouise', href: '/charpentier-vallouise-pays-des-ecrins/' },
        },
      ],
      showMap: true,
    },

    // Section 11 : FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Vos **questions**, nos **réponses**',
      faqs: ['accueil-q1', 'accueil-q2', 'accueil-q3', 'accueil-q4', 'accueil-q5', 'accueil-q6'],
    },

    // Section 12 : appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Votre projet',
      title: 'Prêt à **transformer** votre **espace** ?',
      text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Racontez-nous votre chantier : nous en parlerons ensemble.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
    },
  ],

  faqs: [
    {
      key: 'accueil-q1',
      topic: 'secteurs',
      question: 'Dans quelles communes intervenez-vous ?',
      answer:
        "3B Charpente est basée à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes. Nous intervenons dans tout le département, notamment à Briançon, à Serre Chevalier, en Vallouise et dans le Pays des Écrins, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes. Nous avons par exemple construit un balcon terrasse à Gresse-en-Vercors et une maison à ossature bois dans les monts du Lyonnais.",
    },
    {
      key: 'accueil-q2',
      topic: 'general',
      question: 'Quels bois et quels isolants utilisez-vous ?',
      answer:
        "Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Pour l'isolation, nous posons des matériaux biosourcés : ouate de cellulose, panneaux de fibre de bois, laine de chanvre, lin et coton. Nous intégrons aussi dans nos chantiers du bois de réemploi, issu de la déconstruction et retravaillé dans notre atelier.",
    },
    {
      key: 'accueil-q3',
      topic: 'general',
      question: 'Êtes-vous un artisan RGE pour les aides à la rénovation ?',
      answer:
        "Oui. 3B Charpente est qualifiée RGE (reconnu garant de l'environnement) par Qualibat pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, ainsi que les fenêtres, volets et portes donnant sur l'extérieur. Cette qualification ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Parlons de votre situation lors de notre rencontre.",
    },
    {
      key: 'accueil-q4',
      topic: 'recup',
      question: "Qu'est-ce que 3B Récup' ?",
      answer:
        "3B Récup' est l'initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective. Nous déposons sur site les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements. Le bois est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers. Nous travaillons avec des architectes, des entreprises, des collectivités et des particuliers.",
    },
    {
      key: 'accueil-q5',
      topic: 'general',
      question: 'Combien de temps durent les travaux ?',
      answer:
        "Le délai varie selon la complexité et la taille du projet : une charpente neuve, une surélévation ou une isolation complète ne demandent pas la même préparation. Nous vous fournissons un calendrier estimatif dès notre première rencontre. À titre d'exemple, l'escalier quart tournant présenté dans nos réalisations a été monté en deux jours, finitions comprises, après sa préparation à l'atelier.",
    },
    {
      key: 'accueil-q6',
      topic: 'contact',
      question: 'Comment obtenir un devis de charpente ?',
      answer:
        'Contactez-nous par téléphone au 06 34 67 31 49 ou avec le formulaire de contact. Nous discutons de vos besoins lors d\'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet. Chaque projet est unique : nous adaptons nos constructions à vos besoins, à vos préférences esthétiques et fonctionnelles.',
    },
  ],

  photoAlts: [
    { photo: P.levageFermes, alt: "Levage des fermes d'une charpente neuve par l'équipe de 3B Charpente à L'Argentière-la-Bessée" },
    { photo: P.tailleTenon, alt: "Taille à la besaiguë d'un tenon à double embrèvement, assemblage traditionnel de charpente" },
    { photo: P.terrasseVallouise, alt: 'Terrasse en mélèze et ses assemblages traditionnels, chalet rénové à Vallouise' },
    { photo: P.soleilCouchant, alt: "Charpente apparente d'une maison à ossature bois au soleil couchant" },
    { photo: P.bardageVieuxBois, alt: "Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée" },
    { photo: P.gardeCorpsReemploi, alt: 'Garde-corps en bois de réemploi posé par 3B Charpente' },
    { photo: P.fermeVieuxBois, alt: 'Ferme de charpente en vieux bois de réemploi' },
    { photo: P.insufflation, alt: "Insufflation de ouate de cellulose dans les murs d'un bâti ancien" },
    { photo: P.traitDeJupiter, alt: 'Trait de Jupiter assemblé, raboutage traditionnel de deux pièces de charpente' },
    { photo: P.plancherMeleze, alt: 'Plancher en mélèze du pays sous une terrasse couverte à Champcella' },
    { photo: P.assemblageBlancPrelles, alt: "Assemblage à blanc d'une charpente en mélèze avant le levage, chantier de Prelles" },
    { photo: P.chaletFacadeSud, alt: "Façade sud d'un chalet rénové et isolé à Vallouise, avec sa terrasse en mélèze" },
    { photo: P.lucarneLevage, alt: "Lucarne en cours de levage sur une charpente refaite à L'Argentière-la-Bessée" },
    { photo: P.repriseFermes, alt: "Reprise des fermes de charpente d'une copropriété à Briançon" },
    { photo: P.surelevationFacadeSud, alt: "Façade sud d'une maison surélevée en ossature bois à Briançon" },
    { photo: P.pignonVitre, alt: "Pignon vitré d'une maison rénovée à L'Argentière-la-Bessée" },
    { photo: P.escalierMontageTermine, alt: 'Escalier quart tournant en mélèze lamellé-collé menant aux combles' },
  ],

  validationPoints: [
    {
      question: "H1 : ajout de « L'Argentière-la-Bessée » au titre validé (« Charpentiers à Briançon et dans les Hautes-Alpes ») ?",
      decision:
        "H1 optimisé de la fiche appliqué. Repli possible : « Charpentiers à Briançon et dans les Hautes-Alpes », avec L'Argentière-la-Bessée dans le surtitre.",
      priority: 'low',
    },
    {
      question: "« +100 projets » (option de la preuve 2 du héros) : chiffre de la maquette sans source, à confirmer ?",
      decision: 'Non affiché. Preuves du héros : « Depuis 2007 » et « Qualifié RGE ».',
      priority: 'normal',
    },
    {
      question: "Compagnons du Devoir : Jean a-t-il été reçu compagnon ? Si oui, on pourrait écrire « compagnon charpentier du Devoir ».",
      decision:
        'Formulation « formé chez les Compagnons du Devoir » (CAP, puis Tour de France). Jamais « Compagnon du Devoir » comme titre.',
      priority: 'high',
    },
    {
      question:
        'Horaires à afficher partout (maquette : lundi au vendredi 7 h 30 – 17 h ; PagesJaunes : vendredi 7 h 30 – 12 h) ? Ils figurent aussi dans les données structurées et le pied de page.',
      decision:
        'Lundi au jeudi 7 h 30 – 17 h, vendredi 7 h 30 – 12 h, samedi et dimanche fermé (réglage « Entreprise »).',
      priority: 'normal',
    },
    {
      question: 'Latitude et longitude du 5 rue Saint-Michel pour les données structurées ?',
      decision: "Coordonnées obtenues par géocodage de l'adresse (Base Adresse Nationale), dans le réglage « Entreprise ».",
      priority: 'low',
    },
    {
      question:
        "Fiche Google : à revendiquer ; URL à mettre dans les données structurées (sameAs) ; vrais avis à collecter avant de réintroduire un bloc d'avis ?",
      decision: "Lien absent tant qu'il n'est pas fourni : seul Facebook figure dans sameAs. Aucun bloc d'avis sur l'accueil.",
      priority: 'normal',
    },
    {
      question: 'Devis : est-il gratuit ? Si oui, on l\'écrit sur les boutons et dans la FAQ.',
      decision:
        "« Gratuit » n'est pas écrit. Boutons « Demander mon devis » ; FAQ : rencontre, puis devis détaillé. Aucun délai de réponse promis.",
      priority: 'normal',
    },
    {
      question: "3B Récup', ordre des étapes : l'intervention (dépose) passe avant la transformation ?",
      decision: 'Ordre appliqué : Diagnostic → Stratégie → Intervention → Transformation → Repose.',
      priority: 'low',
    },
    {
      question:
        "Diagnostic PEMD : Jean réalise-t-il lui-même le diagnostic PEMD réglementaire (compétences, assurance) ou intervient-il en appui du diagnostiqueur ?",
      decision:
        "Formulation prudente « en lien avec le diagnostic PEMD » (variante A : expertise du gisement de bois, en amont ou en appui du diagnostic PEMD).",
      priority: 'high',
    },
    {
      question:
        'Escalier quart tournant en mélèze lamellé-collé : dans quelle commune ? (Même question pour les fiches 06, 07, 09, 10 et « Ronatlon ».)',
      decision: 'Aucune commune indiquée : étiquette de la carte « Escalier ».',
      priority: 'normal',
    },
    {
      question: 'Scierie Savoldelli : accord pour la citer comme partenaire, avec logo et lien ?',
      decision:
        "Nommée une seule fois sur la page, dans la FAQ (« notre partenaire local, la Scierie Savoldelli »). La carte « Du bois des Hautes-Alpes » dit seulement « notre partenaire local ». Pas de logo, pas de lien, pas de photo.",
      priority: 'high',
    },
    {
      question: "Fiche PRECI : lien exact à afficher (page À propos et page 3B Récup') ?",
      decision:
        "Rien sur l'accueil. PRECI n'est jamais présenté comme partenaire : il est cité de façon neutre dans le guide sur le réemploi.",
      priority: 'low',
    },
    {
      question: 'Qualibat : logo officiel et certificat RGE en cours de validité (pied de page) ?',
      decision:
        "Pas de logo. Texte « Qualifié RGE (Qualibat) ». La carte « Qualifié RGE » renvoie vers l'annuaire officiel France Rénov' (https://france-renov.gouv.fr/annuaire-rge, page de recherche) : à remplacer par l'adresse de la fiche de 3B.",
      priority: 'normal',
    },
    {
      question: 'Logo FEADER PACA LEADER : faut-il l\'afficher sur le site, et pour quel projet financé ?',
      decision: 'Non affiché.',
      priority: 'low',
    },
    {
      question:
        "Atelier : les charpentes sont-elles bien tracées, taillées et montées à blanc à l'atelier avant le levage (étape 04, carte « Bâti ») ?",
      decision:
        "Texte conservé : « l'atelier » n'est cité que pour le traçage, la taille, l'assemblage à blanc et la transformation du bois de réemploi. Aucune adresse d'atelier.",
      priority: 'normal',
    },
    {
      question:
        "Photos manquantes : portrait de Jean-Michel Tardy (section « preuves »), équipe, atelier, chantier 3B Récup' en cours, Scierie Savoldelli, logo RGE Qualibat ?",
      decision:
        "Section « preuves » illustrée par une vraie photo de chantier (« Taille de la charpente », Prelles). Aucune photo de banque d'images ; photo d'ambiance « rondins » (option de la section 6) non utilisée.",
      priority: 'high',
    },
    {
      question: "Intro des réalisations : « 24 chantiers présentés sur ce site. En voici six. »",
      decision:
        "Intro retirée : 23 chantiers sont publiés (l'isolation d'une voûte, sans photo, n'a pas de page). On pourra écrire « 23 chantiers » si le chiffre est tenu à jour.",
      priority: 'low',
    },
  ],
}
