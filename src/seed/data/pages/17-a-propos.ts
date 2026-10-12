/**
 * Fiche 17 · À propos et équipe (`/a-propos/`). Transcription de 3b-charpente-kit/docs/pages/17-a-propos.md.
 */
import type { SeedPage } from '../../types'

const P = {
  assemblageBlanc: 'refection-d-une-charpente-a-l-argentiere-la-bessee/assamblage à blanc.JPG',
  levageFermes: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
  /** Pas de portrait de Jean : vraie photo de taille à l'atelier (décision « Portrait de Jean »). */
  tailleForge:
    'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/1 Taille de la charpente.JPG',
  chaletNordOuest: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
  tailleTenon:
    "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
  tailleCharpentePrelles:
    'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (1).JPG',
  soleilCouchant:
    'maison-a-ossature-bois-dans-les-monts-du-lyonnais/charpente apparent et soleil couchant...jpg',
  gardeCorpsReemploi:
    'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
  foret: 'ambiance/foret.png',
} as const

const RGE_DIRECTORY = 'https://france-renov.gouv.fr/annuaire-rge'

export const page: SeedPage = {
  kind: 'page',
  slug: 'a-propos',
  title: 'À propos',

  seo: {
    title: 'Jean-Michel Tardy, charpentier depuis 2007 | 3B Charpente',
    description:
      'Fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, 3B Charpente construit avec le bois des Hautes-Alpes. Notre histoire.',
    image: P.assemblageBlanc,
  },

  hero: {
    variant: 'photo',
    kicker: 'À propos de 3B Charpente',
    title: '**3B Charpente**, charpentiers dans les **Hautes-Alpes** depuis 2007',
    text: "Une entreprise de charpente installée à **L'Argentière-la-Bessée**, dans le nord des Hautes-Alpes. Notre mission : **utiliser le bois local pour construire des maisons saines et durables.**",
    primaryCta: { label: 'Parler de mon projet', href: '/contact/' },
    secondaryCta: { label: 'Voir nos réalisations', href: '/realisations/' },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Qualifié RGE', text: 'Qualibat, cinq domaines', icon: 'medal' },
      { label: 'Compagnons du Devoir', text: 'CAP et Tour de France', icon: 'hammer' },
    ],
    images: [P.assemblageBlanc],
    backdrop: P.foret,
  },

  tldr: "3B Charpente est l'entreprise de Jean-Michel Tardy, fondée en 2007 à L'Argentière-la-Bessée (Hautes-Alpes). Formé chez les Compagnons du Devoir, il a fait son Tour de France en métropole, en Martinique et en Autriche. Qualifiée RGE (Qualibat), l'entreprise travaille le bois des Hautes-Alpes et le réemploie avec 3B Récup'.",

  layout: [
    // Notre histoire
    {
      type: 'list',
      style: 'definitions',
      kicker: 'Notre histoire',
      title: 'Une entreprise née de la **charpente**, grandie avec le **bois local**',
      text: "Fondée en 2007 après plus de dix ans de métier, à L'Argentière-la-Bessée, là où Jean-Michel Tardy avait été formateur. D'abord la charpente, puis la rénovation de chalets et de maisons de pays, et la construction neuve en ossature bois.",
      items: [
        {
          title: '1995',
          text: 'Jean-Michel Tardy débute la charpente, apprenti à 16 ans dans une entreprise de Savoie.',
        },
        {
          title: 'Ensuite',
          text: 'CAP dans un CFA des Compagnons du Devoir, puis Tour de France : métropole, Martinique, Autriche.',
        },
        { title: 'Puis', text: "Deux ans formateur à L'Argentière-la-Bessée." },
        { title: '2007', text: 'Création de 3B Charpente dans les Hautes-Alpes.' },
        { title: "Aujourd'hui", text: 'Une entreprise qualifiée RGE.' },
      ],
    },

    // Le fondateur
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Le fondateur',
      title: 'Jean-Michel Tardy, du **Tour de France** aux **Hautes-Alpes**',
      text: "Originaire des montagnes grenobloises, Jean-Michel Tardy entre en apprentissage à 16 ans.\n\nLe **Tour de France** des Compagnons le fait ensuite passer d'entreprise en entreprise, pour apprendre le métier auprès de différentes équipes : en France métropolitaine, en Martinique, en Autriche.",
      points: [
        "Deux ans formateur à L'Argentière-la-Bessée",
        'En 2007, il crée 3B Charpente dans les Hautes-Alpes',
      ],
      images: [P.tailleForge],
      imagePosition: 'left',
    },
    {
      type: 'quote',
      tone: 'light',
      lead: 'Ce qui compte pour lui ?',
      text: "Le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin.",
      author: 'Jean-Michel Tardy',
      role: 'fondateur de 3B Charpente',
      image: P.soleilCouchant,
    },

    // Bio, Bâti, Bois
    {
      type: 'cards',
      variant: 'letter',
      columns: 3,
      kicker: 'Notre nom',
      title: '**Bio**, **Bâti**, **Bois** : ce que veut dire 3B',
      intro: "Trois lettres, trois mots, choisis pour leur sens d'origine.",
      items: [
        {
          letter: 'B',
          title: 'Bio',
          eyebrow: "du grec ancien βίος, qui exprime l'idée de vie.",
          text: 'La vie dans la maison : des matériaux sains et des [isolants biosourcés](/isolation-biosourcee/), fibre de bois, ouate, chanvre.',
          image: P.chaletNordOuest,
        },
        {
          letter: 'B',
          title: 'Bâti',
          eyebrow: "de l'ancien français bastir, idée d'entrelacer, d'assembler.",
          text: "Le cœur du métier : tracer, tailler, assembler. Tenons, mortaises, [traits de Jupiter](/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/), montage à blanc à l'atelier.",
          image: P.tailleTenon,
        },
        {
          letter: 'B',
          title: 'Bois',
          eyebrow: 'un être vivant.',
          text: "Mélèze et sapin des Hautes-Alpes, sciés par notre partenaire local. Et du bois de réemploi, avec 3B Récup'.",
          image: P.tailleCharpentePrelles,
        },
      ],
    },

    // Nos métiers
    {
      type: 'servicesGrid',
      mode: 'all',
      tone: 'light',
      kicker: 'Nos métiers',
      title: 'Du **solivage** au **faîtage**, tout le travail du charpentier',
      intro: 'Neuf prestations, une seule entreprise, de la structure aux finitions.',
    },

    // L'équipe
    {
      type: 'team',
      kicker: "L'équipe",
      title: 'Les **mains** derrière vos **chantiers**',
      intro:
        "Autour de Jean-Michel, une équipe de charpentiers travaille à l'atelier et sur les chantiers.",
    },

    // Nos valeurs
    {
      type: 'manifesto',
      layout: 'columns',
      kicker: 'Nos valeurs',
      title: '**Innovation** et **durabilité** guident notre travail quotidien',
      text: "Construire durablement, avec des structures respectueuses de l'environnement. Innover, c'est par exemple adapter notre système constructif aux matériaux de réemploi.",
      items: [
        {
          title: "L'écoute",
          text: 'Chaque projet est unique : nous l’adaptons à vos besoins et à vos goûts.',
        },
        {
          title: 'La belle ouvrage',
          text: "Tracer, tailler, assembler à l'atelier, puis lever sur le chantier.",
        },
        {
          title: "Le bois d'ici",
          text: 'Mélèze et sapin des Hautes-Alpes, et des isolants biosourcés.',
        },
        { title: 'Le réemploi', text: 'Prolonger la vie des matériaux, réduire les déchets.' },
        {
          title: 'La transparence',
          text: 'Simple, transparent, et toujours à votre écoute : voilà notre promesse.',
        },
      ],
    },

    // Qualifications
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      tone: 'light',
      kicker: 'Qualifications',
      title: 'Des **qualifications** vérifiables',
      items: [
        {
          title: 'Qualification RGE (Qualibat)',
          icon: 'medal',
          text: "« Reconnu garant de l'environnement », au nom de Jean-Michel Tardy : isolation des murs et des toitures, par l'extérieur ou par l'intérieur, fenêtres de toit, menuiseries extérieures. Elle ouvre l'accès aux aides, sous conditions.",
          link: { label: 'Vérifier notre qualification', href: RGE_DIRECTORY },
        },
        {
          title: 'Compagnons du Devoir',
          icon: 'ruler',
          text: 'CAP préparé dans un CFA des Compagnons du Devoir, puis Tour de France.',
        },
      ],
    },

    // 3B Récup'
    {
      type: 'textImage',
      kicker: "3B Récup'",
      title: '**Prolonger la vie** des matériaux de construction',
      text: "Avec 3B Récup', nous déposons les structures bois, les transformons dans nos ateliers et les réemployons sur nos chantiers.",
      points: [
        "Réduire l'impact environnemental",
        "Maximiser l'utilisation des ressources",
        'Des solutions esthétiques et économiques',
      ],
      badge: "3B Récup'",
      images: [P.gardeCorpsReemploi],
      imagePosition: 'right',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // Où nous trouver
    {
      type: 'serviceArea',
      tone: 'light',
      kicker: 'Où nous trouver',
      title: "Installés à **L'Argentière-la-Bessée**",
      text: "5 rue Saint-Michel, 05120 L'Argentière-la-Bessée. Nous intervenons dans tout le département, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.",
      sectors: [
        {
          title: 'Briançon',
          link: { label: 'Charpentier à Briançon', href: '/charpentier-briancon/' },
        },
        {
          title: 'Serre Chevalier',
          link: { label: 'Charpentier à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        },
        {
          title: 'Vallouise et Pays des Écrins',
          link: {
            label: 'Charpentier en Vallouise et Pays des Écrins',
            href: '/charpentier-vallouise-pays-des-ecrins/',
          },
        },
      ],
      showMap: false,
    },

    // FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Mieux **nous connaître**',
      faqs: ['a-propos-q1', 'a-propos-q2', 'a-propos-q3', 'a-propos-q4', 'a-propos-q5'],
    },

    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Travaillons ensemble',
      title: 'Parlons de votre **projet**',
      text: 'Une question, un projet de construction ou de rénovation ? Nous sommes là pour en parler.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
    },
  ],

  faqs: [
    {
      key: 'a-propos-q1',
      topic: 'general',
      question: 'Qui a fondé 3B Charpente ?',
      answer:
        "Jean-Michel Tardy, en 2007. Charpentier originaire des montagnes grenobloises, il débute en 1995, apprenti à 16 ans en Savoie, puis se forme chez les Compagnons du Devoir et sur le Tour de France : métropole, Martinique, Autriche. Après deux ans comme formateur à L'Argentière-la-Bessée, il y crée l'entreprise.",
    },
    {
      key: 'a-propos-q2',
      topic: 'general',
      question: 'Que signifie « 3B » dans 3B Charpente ?',
      answer:
        "Bio, Bâti, Bois. Bio vient du grec βίος, l'idée de vie. Bâti vient de l'ancien français bastir, entrelacer, assembler. Le bois, enfin, est un être vivant. Trois mots pour notre façon de travailler : des maisons saines, des assemblages de charpentier, du bois local ou de réemploi.",
    },
    {
      key: 'a-propos-q3',
      topic: 'general',
      question: 'Jean-Michel Tardy a-t-il été formé chez les Compagnons du Devoir ?',
      answer:
        "Oui. Il a préparé son CAP dans un CFA des Compagnons du Devoir, puis fait son Tour de France dans des entreprises de métropole, de Martinique et d'Autriche. On le retrouve sur nos chantiers : charpentes taillées à l'atelier, assemblages traditionnels, montage à blanc avant le levage.",
    },
    {
      key: 'a-propos-q4',
      topic: 'general',
      question: '3B Charpente est-elle qualifiée RGE ?',
      answer:
        "Oui, QUALIBAT-RGE, au nom de Jean-Michel Tardy dans l'annuaire officiel. Elle couvre l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit et les menuiseries extérieures. Elle ouvre l'accès aux aides publiques, sous conditions.",
    },
    {
      key: 'a-propos-q5',
      topic: 'charpente',
      question: "D'où vient le bois que vous utilisez ?",
      answer:
        "Surtout du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Selon les chantiers : douglas, épicéa ou frêne. Et du bois de réemploi, déposé sur des chantiers de déconstruction, puis trié, nettoyé et usiné dans nos ateliers avec 3B Récup'.",
    },
  ],

  photoAlts: [
    {
      photo: P.assemblageBlanc,
      alt: "Assemblage à blanc d'une charpente à l'atelier avant le levage, chantier de L'Argentière-la-Bessée",
    },
    {
      photo: P.levageFermes,
      alt: "Levage des fermes d'une charpente par l'équipe de 3B Charpente",
    },
    {
      photo: P.chaletNordOuest,
      alt: 'Chalet des années 1980 rénové et isolé en fibres végétales et fibre de bois à Vallouise',
    },
    { photo: P.tailleTenon, alt: "Taille à la besaiguë d'un tenon à double embrèvement" },
    {
      photo: P.tailleCharpentePrelles,
      alt: "Taille d'une charpente en mélèze du pays pour une maison à Prelles",
    },
    {
      photo: P.soleilCouchant,
      alt: "Charpente apparente d'une maison à ossature bois au soleil couchant",
    },
    {
      photo: P.gardeCorpsReemploi,
      alt: "Garde-corps en bois de réemploi posé par 3B Charpente à L'Argentière-la-Bessée",
    },
  ],

  validationPoints: [
    {
      question:
        'Équipe : liste actuelle des personnes, rôles exacts, accord écrit de chacun pour le nom et la photo ? (La liste de la maquette Framer diffère de la page équipe de new.3bcharpente.fr.)',
      decision:
        "Seul Jean-Michel Tardy est affiché, avec l'intro de repli de la fiche (« Autour de Jean-Michel, une équipe de charpentiers… »). Les autres membres sont créés non visibles ; aucun employé dans les données structurées.",
      priority: 'high',
    },
    {
      question: "Abel Hamadene, chef d'équipe : nom, rôle et accord pour la publication ?",
      decision: "Créé non visible dans l'administration, en attendant son accord.",
      priority: 'normal',
    },
    {
      question:
        'Claire Patin, responsable organisation : nom, rôle et accord pour la publication ?',
      decision: "Créée non visible dans l'administration, en attendant son accord.",
      priority: 'normal',
    },
    {
      question: 'Mickael Oudot, charpentier : nom, rôle et accord pour la publication ?',
      decision: "Créé non visible dans l'administration, en attendant son accord.",
      priority: 'normal',
    },
    {
      question: 'Chloé Nicod, apprentie : nom, rôle et accord pour la publication ?',
      decision: "Créée non visible dans l'administration, en attendant son accord.",
      priority: 'normal',
    },
    {
      question:
        'Compagnons du Devoir : Jean a-t-il été reçu compagnon (et dans quelle société) ? Si oui, « compagnon charpentier du Devoir » dans le H2, la FAQ et les données structurées.',
      decision:
        'Formulation « formé chez les Compagnons du Devoir » (CAP dans un CFA des Compagnons du Devoir, puis Tour de France). Jamais « Compagnon du Devoir » comme titre.',
      priority: 'high',
    },
    {
      question: 'Spécialité du CAP : CAP charpentier bois ?',
      decision: '« CAP » écrit sans spécialité.',
      priority: 'low',
    },
    {
      question:
        'Citation : Jean la valide-t-il telle quelle, ou préfère-t-il un texte plus long à la première personne (celui de new.3bcharpente.fr, nettoyé) ?',
      decision: 'Citation de la fiche publiée telle quelle.',
      priority: 'normal',
    },
    {
      question:
        "Formateur : dans quel organisme Jean a-t-il été formateur à L'Argentière-la-Bessée ? Peut-on le citer ? (« là où il avait été formateur » est à relire par Jean.)",
      decision:
        "Organisme non cité. Texte conservé : « deux ans formateur à L'Argentière-la-Bessée ».",
      priority: 'low',
    },
    {
      question: "3B Récup' : année de lancement, pour la frise ?",
      decision:
        "Étape retirée de la frise : la date de création de 3B Récup' n'est pas mentionnée.",
      priority: 'normal',
    },
    {
      question:
        "Date de création : 2007 correspond-il à la date d'immatriculation au répertoire SIRENE (SIREN 494 482 714) ?",
      decision: '2007 conservé (« Depuis 2007 »).',
      priority: 'normal',
    },
    {
      question:
        'Scierie Savoldelli : accord de la scierie pour la citer comme partenaire, avec logo et lien ?',
      decision:
        'Carte « Scierie Savoldelli » retirée. La scierie est nommée une seule fois sur la page, dans la FAQ (« notre partenaire local, la Scierie Savoldelli ») ; la carte « Bois » dit seulement « notre partenaire local ». Pas de logo, pas de lien, pas de photo.',
      priority: 'high',
    },
    {
      question:
        "RGE : lien vers la fiche de l'annuaire officiel ? Attention, l'annuaire indique le SIRET 494 482 714 00024 alors que les mentions légales actuelles indiquent 00016.",
      decision:
        "Lien « Vérifier notre qualification » vers l'annuaire officiel France Rénov' (https://france-renov.gouv.fr/annuaire-rge, page de recherche) : à remplacer par l'adresse de la fiche de 3B. Pas de logo Qualibat. SIRET affiché dans les mentions légales : 494 482 714 00016.",
      priority: 'high',
    },
    {
      question: "PRECI : lien exact vers la fiche 3B Récup' ?",
      decision:
        "Carte PRECI retirée : PRECI n'est jamais présenté comme partenaire (il est cité de façon neutre dans le guide sur le réemploi).",
      priority: 'normal',
    },
    {
      question:
        'FEADER / LEADER : objet exact du financement, et faut-il afficher le logo sur cette page (carte optionnelle « financement européen ») ?',
      decision: 'Non affiché : carte optionnelle retirée.',
      priority: 'normal',
    },
    {
      question:
        "Section « Qualifications et partenaires » : titre « Des qualifications vérifiables, des partenaires d'ici » alors qu'aucune carte partenaire n'est publiée ?",
      decision:
        'Titre raccourci en « Des qualifications vérifiables », surtitre « Qualifications » (cartes RGE et Compagnons du Devoir). À rétablir si un partenaire est validé.',
      priority: 'low',
    },
    {
      question:
        "Atelier : les charpentes sont-elles taillées et montées à blanc à l'atelier (cartes « Bâti » et « La belle ouvrage », FAQ 3) ?",
      decision:
        "Texte conservé : « l'atelier » n'est cité que pour le traçage, la taille, l'assemblage à blanc et la transformation du bois de réemploi. Aucune adresse d'atelier.",
      priority: 'normal',
    },
    {
      question:
        "Photos : portrait de Jean-Michel Tardy (indispensable), portraits de l'équipe, photo de groupe, atelier, photo du Tour de France, logos Scierie Savoldelli et RGE Qualibat ?",
      decision:
        "Aucun portrait : héros illustré par « assemblage à blanc » (repli de la fiche), section du fondateur par « Taille de la charpente » (ancienne forge de La Salle-les-Alpes). Aucune photo de banque d'images. Photo d'ambiance « forêt » utilisée une fois, en fond des valeurs.",
      priority: 'high',
    },
    {
      question:
        "Frise : « Aujourd'hui : une entreprise qualifiée RGE, 24 chantiers présentés sur ce site. »",
      decision:
        "Raccourci en « Une entreprise qualifiée RGE. » : 23 chantiers sont publiés (l'isolation d'une voûte, sans photo, n'a pas de page).",
      priority: 'low',
    },
  ],
}
