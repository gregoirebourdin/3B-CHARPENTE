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
    kicker: "Charpentier depuis 2007 à L'Argentière-la-Bessée",
    title: "**Charpentiers** à Briançon, L'Argentière-la-Bessée et dans les **Hautes-Alpes**",
    text: 'Charpente, ossature bois, isolation biosourcée et réemploi : nous travaillons le **bois des Hautes-Alpes** pour des maisons saines, faites pour durer.',
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

  tldr: "3B Charpente est une entreprise de charpente bois fondée en 2007 à L'Argentière-la-Bessée (Hautes-Alpes) par Jean-Michel Tardy, formé chez les Compagnons du Devoir. Charpentes, rénovations, isolation biosourcée RGE, ossature bois, escaliers et balcons : en bois local, et en bois de réemploi avec 3B Récup'.",

  layout: [
    // Les prestations (les textes des cartes viennent des prestations)
    {
      type: 'servicesGrid',
      mode: 'all',
      tone: 'light',
      kicker: 'Nos prestations',
      title: "Tous nos **métiers du bois**, de la charpente à l'**isolation**",
      cta: { label: 'Parler de mon projet', href: '/contact/' },
    },

    // Chiffres et engagements
    {
      type: 'figures',
      kicker: "L'atelier en quelques chiffres",
      title: "Un **savoir-faire** de compagnon, des **matériaux** d'ici",
      items: [
        { value: '2007', label: "Création de 3B Charpente à L'Argentière-la-Bessée." },
        { value: '16', unit: 'ans', label: "L'âge de Jean-Michel Tardy à son premier jour d'apprenti, en 1995." },
        { value: '28', unit: 'cm', label: "D'isolant biosourcé dans les murs du chalet de Vallouise." },
        { value: '2', unit: 'jours', label: "Pour monter l'escalier quart tournant, finitions comprises." },
      ],
    },
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      items: [
        {
          title: 'Qualifié RGE (Qualibat)',
          icon: 'medal',
          text: "Pour l'isolation des murs et des toitures : la porte d'accès aux aides publiques, sous conditions.",
          link: { label: 'Vérifier notre qualification', href: RGE_DIRECTORY },
        },
        {
          title: 'Du bois des Hautes-Alpes',
          icon: 'tree',
          text: 'Surtout du mélèze et du sapin, sciés par notre partenaire local.',
        },
        {
          title: 'Des isolants biosourcés',
          icon: 'leaf',
          text: 'Ouate de cellulose, fibre de bois, laine de chanvre, lin et coton.',
        },
      ],
      cta: { label: 'Qui sommes-nous ?', href: '/a-propos/' },
    },

    // Manifeste
    {
      type: 'manifesto',
      layout: 'centered',
      kicker: 'Notre façon de travailler',
      title: 'Construire **simplement**, penser **durablement**.',
      text: "Bois local, matériaux sains, réemploi : chaque charpente ou rénovation de chalet est pensée avec vous, pour votre maison, vos usages et vos goûts.",
      items: [
        { title: "Du bois d'ici", text: 'Mélèze et sapin des Hautes-Alpes : moins de transport, une filière locale qui vit.' },
        { title: 'Des matériaux sains', text: 'Isolants biosourcés et bois de réemploi, pour limiter notre impact.' },
        { title: 'Un travail sur mesure', text: 'Une étude pour chaque projet, adaptée à votre maison et à vos envies.' },
      ],
      emphasis: 'Simple, transparent, et toujours à votre écoute : voilà notre promesse.',
      image: 'ambiance/foret.png',
      cta: { label: 'Découvrir notre histoire', href: '/a-propos/' },
    },

    // Réalisations (6 cartes)
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
          text: "Chalet des années 1980 : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture.",
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
          text: 'Reprise des fermes, isolation soufflée, nouvelle couverture.',
        },
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          tag: 'Briançon',
          title: 'Surélévation en ossature bois',
          text: 'Pignons en ossature bois, panneaux trois plis en épicéa apparents.',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          tag: "L'Argentière-la-Bessée",
          title: 'Une maison rénovée en bois de réemploi',
          text: 'Pignon vitré, escalier balancé, bardage en vieux bois, garde-corps de réemploi.',
        },
        {
          project: 'escalier-1-4-tournant-en-meleze-lamelle-colle',
          tag: 'Escalier',
          title: 'Escalier quart tournant en mélèze',
          text: "Tracé et taillé à l'atelier, monté en deux jours, finitions comprises.",
        },
      ],
      cta: { label: 'Voir toutes nos réalisations', href: '/realisations/' },
    },

    // Votre projet, étape par étape
    {
      type: 'steps',
      variant: 'timeline',
      tone: 'light',
      kicker: 'Votre projet, étape par étape',
      title: 'Chaque projet commence par une **étude sur mesure**',
      steps: [
        { title: 'Vous nous contactez', text: 'Par téléphone ou avec le formulaire, même en quelques lignes.' },
        { title: 'Nous nous rencontrons', text: 'Vos besoins, vos envies, et un calendrier estimatif.' },
        { title: 'Vous recevez le devis', text: 'Un devis détaillé, adapté à votre projet.' },
        {
          title: "Nous préparons à l'atelier",
          text: "Traçage, taille et assemblage à blanc : un premier montage pour tout vérifier.",
          image: P.assemblageBlancPrelles,
        },
        { title: 'Nous levons et posons', text: 'Levage, pose et finitions sur votre chantier.' },
      ],
      cta: { label: 'Demander mon devis', href: '/contact/' },
    },

    // 3B Récup'
    {
      type: 'spotlight',
      badge: "3B Récup'",
      kicker: 'Déconstruction et réemploi',
      title: 'Donner une **seconde vie** au bois des **bâtiments déconstruits**',
      text: "Nous démontons les bâtiments élément par élément, de la maison au bâtiment industriel. Le bois sain est trié, nettoyé et usiné à l'atelier, puis réemployé sur nos chantiers.\n\nPour les architectes, entreprises, collectivités et particuliers.",
      steps: [
        { title: 'Diagnostic', text: 'repérer ce qui peut resservir, en lien avec le diagnostic PEMD.' },
        { title: 'Stratégie', text: 'une feuille de route pour déposer sans abîmer.' },
        { title: 'Intervention', text: 'nos charpentiers déposent les éléments sur site.' },
        { title: 'Transformation', text: "tri, nettoyage et usinage à l'atelier." },
        { title: 'Repose', text: "notre système constructif s'adapte au bois de réemploi." },
      ],
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      links: [
        { label: 'Diagnostic et gisement (PEMD)', href: '/3b-recup/diagnostic-pemd/' },
        { label: 'Déconstruction sélective', href: '/3b-recup/deconstruction-selective/' },
        { label: 'Bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
      ],
      images: [P.bardageVieuxBois, P.gardeCorpsReemploi, P.fermeVieuxBois],
    },

    // 3B = Bio, Bâti, Bois
    {
      type: 'cards',
      variant: 'letter',
      columns: 3,
      tone: 'light',
      kicker: 'Pourquoi « 3B » ?',
      title: '**Bio**, **Bâti**, **Bois** : trois mots pour une façon de construire',
      items: [
        {
          letter: 'B',
          title: 'Bio',
          eyebrow: 'du grec ancien βίος, la vie',
          text: 'Des maisons saines, isolées avec des matériaux biosourcés.',
          image: P.insufflation,
        },
        {
          letter: 'B',
          title: 'Bâti',
          eyebrow: "de l'ancien français bastir, assembler",
          text: "L'art d'assembler : tenons et mortaises chevillés, traits de Jupiter, fermes montées à blanc.",
          image: P.traitDeJupiter,
        },
        {
          letter: 'B',
          title: 'Bois',
          eyebrow: 'un être vivant',
          text: 'Du mélèze et du sapin des Hautes-Alpes, et du bois de réemploi.',
          image: P.plancherMeleze,
        },
      ],
    },

    // Zone d'intervention
    {
      type: 'serviceArea',
      tone: 'cream',
      kicker: 'Où nous intervenons',
      title: 'Charpentiers dans le **nord des Hautes-Alpes**, et au-delà',
      text: "Basés à L'Argentière-la-Bessée, nous intervenons dans tout le département, en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.",
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
          text: "L'Argentière-la-Bessée, Vallouise, Pelvoux, Champcella, La Roche-de-Rame : notre secteur d'origine.",
          link: { label: 'Nos chantiers en Vallouise', href: '/charpentier-vallouise-pays-des-ecrins/' },
        },
      ],
      showMap: true,
    },

    // Questions fréquentes
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos **questions**, nos **réponses**',
      faqs: ['accueil-q1', 'accueil-q2', 'accueil-q3', 'accueil-q4', 'accueil-q5', 'accueil-q6'],
    },

    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Prêt à **transformer** votre **maison** ?',
      text: 'Racontez-nous votre chantier en quelques lignes. Nous venons voir, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
    },
  ],

  faqs: [
    {
      key: 'accueil-q1',
      topic: 'secteurs',
      question: 'Dans quelles communes intervenez-vous ?',
      answer:
        "Dans tout le département, depuis L'Argentière-la-Bessée : Briançon, Serre Chevalier, Vallouise et le Pays des Écrins. Nous intervenons aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes, comme pour un balcon terrasse à Gresse-en-Vercors ou une maison à ossature bois dans les monts du Lyonnais.",
    },
    {
      key: 'accueil-q2',
      topic: 'general',
      question: 'Quels bois et quels isolants utilisez-vous ?',
      answer:
        "Surtout du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Côté isolation, des matériaux biosourcés : ouate de cellulose, fibre de bois, laine de chanvre, lin et coton. Et du bois de réemploi, issu de la déconstruction et retravaillé dans notre atelier.",
    },
    {
      key: 'accueil-q3',
      topic: 'general',
      question: 'Êtes-vous un artisan RGE pour les aides à la rénovation ?',
      answer:
        "Oui. 3B Charpente est qualifiée RGE (reconnu garant de l'environnement) par Qualibat pour l'isolation des murs et des toitures, par l'extérieur comme par l'intérieur, les fenêtres de toit et les menuiseries extérieures. Cette qualification ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions : parlons-en lors de notre rencontre.",
    },
    {
      key: 'accueil-q4',
      topic: 'recup',
      question: "Qu'est-ce que 3B Récup' ?",
      answer:
        "L'activité de 3B Charpente dédiée à la déconstruction sélective et au réemploi. Nous déposons la charpente, le solivage, les murs à ossature bois, la couverture, l'isolation et les parements. Le bois est trié, nettoyé et usiné à l'atelier, puis réemployé sur nos chantiers. Pour les architectes, entreprises, collectivités et particuliers.",
    },
    {
      key: 'accueil-q5',
      topic: 'general',
      question: 'Combien de temps durent les travaux ?',
      answer:
        "Cela dépend de la taille et de la complexité du projet : nous vous donnons un calendrier estimatif dès la première rencontre. À titre d'exemple, l'escalier quart tournant de nos réalisations a été monté en deux jours, finitions comprises, après sa préparation à l'atelier.",
    },
    {
      key: 'accueil-q6',
      topic: 'contact',
      question: 'Comment obtenir un devis de charpente ?',
      answer:
        "Appelez-nous au 06 34 67 31 49 ou écrivez-nous avec le formulaire de contact. Nous parlons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet.",
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
