/**
 * Fiche 17 · À propos et équipe (`/a-propos/`). Transcription de 3b-charpente-kit/docs/pages/17-a-propos.md.
 */
import type { SeedPage } from '../../types'

const P = {
  assemblageBlanc: 'refection-d-une-charpente-a-l-argentiere-la-bessee/assamblage à blanc.JPG',
  levageFermes: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
  /** Pas de portrait de Jean : vraie photo de taille à l'atelier (décision « Portrait de Jean »). */
  tailleForge: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/1 Taille de la charpente.JPG',
  chaletNordOuest: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
  tailleTenon: "refection-d-une-charpente-a-l-argentiere-la-bessee/taille d'un tenon à double embrèvement à la besaïgue.JPG",
  tailleCharpentePrelles: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (1).JPG',
  soleilCouchant: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/charpente apparent et soleil couchant...jpg',
  gardeCorpsReemploi: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
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
    text: "Une entreprise de charpente installée à **L'Argentière-la-Bessée**, dans le nord des Hautes-Alpes. Notre mission est claire : **utiliser le bois local pour construire des maisons saines et durables.**",
    primaryCta: { label: 'Parler de mon projet', href: '/contact/' },
    secondaryCta: { label: 'Voir nos réalisations', href: '/realisations/' },
    proofs: [
      { label: 'Depuis 2007', icon: 'calendar' },
      { label: 'Qualifié RGE', icon: 'medal' },
    ],
    images: [P.assemblageBlanc],
  },

  tldr: "3B Charpente est l'entreprise de charpente de Jean-Michel Tardy, fondée en 2007 à L'Argentière-la-Bessée (Hautes-Alpes). Formé chez les Compagnons du Devoir, Jean-Michel a fait son Tour de France en France métropolitaine, en Martinique et en Autriche. L'entreprise est qualifiée RGE par Qualibat, travaille le mélèze et le sapin des Hautes-Alpes et réemploie le bois avec 3B Récup'.",

  layout: [
    // Section 3 : notre histoire (texte + frise)
    {
      type: 'list',
      style: 'definitions',
      kicker: 'Notre histoire',
      title: 'Une entreprise née de la **charpente**, grandie avec le **bois local**',
      text: "Jean-Michel Tardy a fondé 3B Charpente en 2007, après plus de dix ans de métier. Il a choisi de s'installer à L'Argentière-la-Bessée, là où il avait été formateur.\n\nNous avons commencé avec des projets de charpente, puis nous avons progressivement étendu nos services à la rénovation de chalets et de maisons de pays, et à la construction neuve en ossature bois.",
      items: [
        { title: '1995', text: 'Jean-Michel Tardy débute la charpente, apprenti à 16 ans dans une entreprise de Savoie.' },
        {
          title: 'Ensuite',
          text: 'CAP dans un CFA des Compagnons du Devoir, puis Tour de France, en France métropolitaine, en Martinique et en Autriche.',
        },
        { title: 'Puis', text: "Deux ans formateur à L'Argentière-la-Bessée." },
        { title: '2007', text: 'Création de 3B Charpente dans les Hautes-Alpes.' },
        { title: "Aujourd'hui", text: 'Une entreprise qualifiée RGE.' },
      ],
      image: P.levageFermes,
    },

    // Section 4 : le fondateur
    {
      type: 'textImage',
      kicker: 'Le fondateur',
      title: 'Jean-Michel Tardy, du **Tour de France** aux **Hautes-Alpes**',
      text: "Jean-Michel Tardy est originaire des montagnes grenobloises. Il débute la charpente en 1995 : à 16 ans, il entre en apprentissage dans une entreprise de Savoie.\n\nIl passe son CAP dans un CFA des Compagnons du Devoir, puis part sur le Tour de France. Ce parcours de formation fait passer le jeune charpentier d'entreprise en entreprise pour apprendre le métier auprès de différentes équipes. Pour Jean-Michel, ce sera en France métropolitaine, en Martinique et en Autriche.\n\nIl devient ensuite formateur pendant deux ans à L'Argentière-la-Bessée, puis crée 3B Charpente dans les Hautes-Alpes, en 2007.\n\n**Ce qui compte pour lui ?**",
      images: [P.tailleForge],
      imagePosition: 'left',
    },
    {
      type: 'quote',
      text: "Le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin.",
      author: 'Jean-Michel Tardy',
      role: 'fondateur de 3B Charpente',
      image: P.soleilCouchant,
    },

    // Section 5 : Bio, Bâti, Bois
    {
      type: 'cards',
      variant: 'letter',
      columns: 3,
      tone: 'light',
      kicker: 'Notre nom',
      title: '**Bio**, **Bâti**, **Bois** : ce que veut dire 3B',
      intro: "Trois lettres, trois mots, choisis pour leur sens d'origine.",
      items: [
        {
          letter: 'B',
          title: 'Bio',
          eyebrow: "du grec ancien βίος, qui exprime l'idée de vie.",
          text: "Pour nous, c'est la vie dans la maison : des matériaux sains et des [isolants biosourcés](/isolation-biosourcee/), comme la fibre de bois, la ouate de cellulose ou la laine de chanvre, lin et coton.",
          image: P.chaletNordOuest,
        },
        {
          letter: 'B',
          title: 'Bâti',
          eyebrow: "de l'ancien français bastir, idée d'entrelacer, d'assembler.",
          text: "C'est le cœur du métier : tracer, tailler, assembler. Tenons et mortaises chevillés, [traits de Jupiter](/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/) (un assemblage qui raboute deux pièces de bois), charpentes montées à blanc à l'atelier avant le levage.",
          image: P.tailleTenon,
        },
        {
          letter: 'B',
          title: 'Bois',
          eyebrow: 'un être vivant.',
          text: "Nous travaillons principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local. Et parce qu'un bois peut servir plusieurs fois, nous réemployons le bois issu de la déconstruction avec 3B Récup'.",
          image: P.tailleCharpentePrelles,
        },
      ],
    },

    // Section 6 : nos métiers
    {
      type: 'list',
      style: 'bullets',
      kicker: 'Nos métiers',
      title: 'Du **solivage** au **faîtage**, tout le travail du charpentier',
      intro: 'Neuf prestations, une seule entreprise, de la structure aux finitions.',
      items: [
        {
          title: 'Charpente bois traditionnelle',
          text: "Tracée, taillée et assemblée à l'atelier.",
          link: { label: 'Charpente bois traditionnelle', href: '/charpente-bois/' },
        },
        {
          title: 'Rénovation de charpente et combles',
          text: 'Renforcer, ouvrir une lucarne, aménager les combles.',
          link: { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
        },
        {
          title: 'Isolation biosourcée',
          text: 'Fibre de bois, ouate de cellulose, laine de chanvre, lin et coton.',
          link: { label: 'Isolation biosourcée', href: '/isolation-biosourcee/' },
        },
        {
          title: "Isolation de toiture par l'extérieur (sarking)",
          text: "L'isolant passe par-dessus les chevrons, côté extérieur.",
          link: { label: "Isolation de toiture par l'extérieur (sarking)", href: '/isolation-toiture-sarking/' },
        },
        {
          title: 'Isolation des murs',
          text: "ITE (isolation thermique par l'extérieur) ou isolation par l'intérieur en bâti ancien.",
          link: { label: 'Isolation des murs', href: '/isolation-murs-ite/' },
        },
        {
          title: 'Maison ossature bois',
          text: 'Une maison neuve, sur mesure.',
          link: { label: 'Maison ossature bois', href: '/maison-ossature-bois/' },
        },
        {
          title: 'Extension et surélévation bois',
          text: 'Gagner de la place sans tout reconstruire.',
          link: { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
        },
        {
          title: 'Escaliers bois sur mesure',
          text: 'Quart tournant, balancé, en bois debout.',
          link: { label: 'Escaliers bois sur mesure', href: '/escalier-bois-sur-mesure/' },
        },
        {
          title: 'Balcons, terrasses et abris bois',
          text: 'En mélèze, avec garde-corps sur mesure.',
          link: { label: 'Balcons, terrasses et abris bois', href: '/balcon-terrasse-abri-bois/' },
        },
      ],
    },

    // Section 7 : l'équipe (seul Jean-Michel Tardy est visible : intro de repli de la fiche)
    {
      type: 'team',
      kicker: "L'équipe",
      title: 'Les **mains** derrière vos **chantiers**',
      intro: "Autour de Jean-Michel, une équipe de charpentiers travaille à l'atelier et sur les chantiers.",
    },

    // Section 8 : nos valeurs (photo d'ambiance « forêt », la seule de la page)
    {
      type: 'manifesto',
      layout: 'columns',
      kicker: 'Nos valeurs',
      title: '**Innovation** et **durabilité** guident notre travail quotidien',
      text: "Notre mission : construire durablement, en réalisant des structures respectueuses de l'environnement. Innover, pour nous, c'est par exemple adapter notre système constructif aux matériaux de réemploi.",
      items: [
        {
          title: "L'écoute",
          text: 'Chaque projet est unique. Nous travaillons en étroite collaboration avec vous pour adapter nos constructions à vos besoins, en respectant vos préférences esthétiques et fonctionnelles.',
        },
        {
          title: 'La belle ouvrage',
          text: "Tracer, tailler, assembler à l'atelier, puis lever sur le chantier. Le savoir-faire appris sur le Tour de France, au service de votre maison.",
        },
        { title: "Le bois d'ici", text: 'Du mélèze et du sapin des Hautes-Alpes, et des isolants biosourcés.' },
        {
          title: 'Le réemploi',
          text: "Prolonger la vie des matériaux de construction, réduire les déchets et l'impact environnemental, tout en proposant des solutions esthétiques et économiques.",
        },
        { title: 'La transparence', text: 'Simple, transparent, et toujours à votre écoute : voilà notre promesse.' },
      ],
      image: P.foret,
    },

    // Section 9 : qualifications (cartes Scierie Savoldelli, PRECI et FEADER retirées : voir points à valider)
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Qualifications',
      title: 'Des **qualifications** vérifiables',
      items: [
        {
          title: 'Qualification RGE (Qualibat)',
          icon: 'medal',
          text: "RGE signifie « reconnu garant de l'environnement ». Notre qualification QUALIBAT-RGE, enregistrée au nom de Jean-Michel Tardy, couvre cinq domaines :\n\n- isolation des murs par l'extérieur ;\n- isolation des toitures par l'extérieur ;\n- isolation par l'intérieur des murs ou rampants de toitures ou plafonds ;\n- fenêtres de toit ;\n- fenêtres, volets, portes donnant sur l'extérieur.\n\nElle ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Vous pouvez la vérifier dans l'annuaire officiel des professionnels RGE.",
          link: { label: 'Vérifier notre qualification', href: RGE_DIRECTORY },
        },
        {
          title: 'Compagnons du Devoir',
          icon: 'ruler',
          text: 'CAP préparé dans un CFA des Compagnons du Devoir, puis Tour de France.',
        },
      ],
    },

    // Section 10 : 3B Récup' (teaser)
    {
      type: 'cta',
      variant: 'band',
      badge: "3B Récup'",
      title: '**Prolonger la vie** des matériaux de construction',
      text: "Avec 3B Récup', nous voulons prolonger la vie des matériaux de construction, réduisant ainsi les déchets et l'impact environnemental, tout en offrant des solutions esthétiques et économiques. Nous déposons les structures bois, les transformons dans nos ateliers et les réemployons sur nos chantiers.\n\n- Réduire l'impact environnemental\n- Maximiser l'utilisation des ressources",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      image: P.gardeCorpsReemploi,
    },

    // Section 11 : où nous trouver
    {
      type: 'serviceArea',
      tone: 'cream',
      kicker: 'Où nous trouver',
      title: "Installés à **L'Argentière-la-Bessée**",
      text: "3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée. Basés dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.",
      sectors: [
        { title: 'Briançon', link: { label: 'Charpentier à Briançon', href: '/charpentier-briancon/' } },
        { title: 'Serre Chevalier', link: { label: 'Charpentier à Serre Chevalier', href: '/charpentier-serre-chevalier/' } },
        {
          title: 'Vallouise et Pays des Écrins',
          link: { label: 'Charpentier en Vallouise et Pays des Écrins', href: '/charpentier-vallouise-pays-des-ecrins/' },
        },
      ],
      showMap: false,
    },

    // Section 12 : FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Mieux **nous connaître**',
      faqs: ['a-propos-q1', 'a-propos-q2', 'a-propos-q3', 'a-propos-q4', 'a-propos-q5'],
    },

    // Section 13 : appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Travaillons ensemble',
      title: 'Parlons de votre **projet**',
      text: 'Nous sommes là pour répondre à toutes vos questions et discuter de vos projets de construction et de rénovation.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
    },
  ],

  faqs: [
    {
      key: 'a-propos-q1',
      topic: 'general',
      question: 'Qui a fondé 3B Charpente ?',
      answer:
        "3B Charpente a été fondée en 2007 par Jean-Michel Tardy, charpentier originaire des montagnes grenobloises. Il a débuté en 1995, apprenti à 16 ans dans une entreprise de Savoie, puis s'est formé chez les Compagnons du Devoir et sur le Tour de France, en France métropolitaine, en Martinique et en Autriche. Après deux ans comme formateur à L'Argentière-la-Bessée, il a créé l'entreprise dans les Hautes-Alpes.",
    },
    {
      key: 'a-propos-q2',
      topic: 'general',
      question: 'Que signifie « 3B » dans 3B Charpente ?',
      answer:
        "3B veut dire Bio, Bâti, Bois. Bio vient du grec ancien βίος, qui exprime l'idée de vie. Bâti vient de l'ancien français bastir, qui porte l'idée d'entrelacer, d'assembler. Le bois, enfin, est un être vivant. Ces trois mots résument notre façon de travailler : des maisons saines, des assemblages de charpentier et du bois local ou de réemploi.",
    },
    {
      key: 'a-propos-q3',
      topic: 'general',
      question: 'Jean-Michel Tardy a-t-il été formé chez les Compagnons du Devoir ?',
      answer:
        "Oui. Jean-Michel Tardy a préparé son CAP dans un CFA des Compagnons du Devoir, puis il a effectué son Tour de France : il s'est formé dans des entreprises de France métropolitaine, de Martinique et d'Autriche. Ce parcours se retrouve dans nos chantiers : charpentes tracées et taillées à l'atelier, assemblages traditionnels, montage à blanc avant le levage.",
    },
    {
      key: 'a-propos-q4',
      topic: 'general',
      question: '3B Charpente est-elle qualifiée RGE ?',
      answer:
        "Oui. 3B Charpente détient la qualification QUALIBAT-RGE, enregistrée au nom de Jean-Michel Tardy dans l'annuaire officiel des professionnels RGE. Elle couvre l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, ainsi que les fenêtres, volets et portes donnant sur l'extérieur. Elle ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.",
    },
    {
      key: 'a-propos-q5',
      topic: 'charpente',
      question: "D'où vient le bois que vous utilisez ?",
      answer:
        "Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Selon les chantiers, d'autres essences entrent en jeu, comme le douglas, l'épicéa ou le frêne. Nous intégrons aussi du bois de réemploi : déposé sur des chantiers de déconstruction, il est trié, nettoyé et usiné dans nos ateliers avec 3B Récup'.",
    },
  ],

  photoAlts: [
    {
      photo: P.assemblageBlanc,
      alt: "Assemblage à blanc d'une charpente à l'atelier avant le levage, chantier de L'Argentière-la-Bessée",
    },
    { photo: P.levageFermes, alt: "Levage des fermes d'une charpente par l'équipe de 3B Charpente" },
    {
      photo: P.chaletNordOuest,
      alt: 'Chalet des années 1980 rénové et isolé en fibres végétales et fibre de bois à Vallouise',
    },
    { photo: P.tailleTenon, alt: "Taille à la besaiguë d'un tenon à double embrèvement" },
    { photo: P.tailleCharpentePrelles, alt: "Taille d'une charpente en mélèze du pays pour une maison à Prelles" },
    { photo: P.soleilCouchant, alt: "Charpente apparente d'une maison à ossature bois au soleil couchant" },
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
      decision: 'Créé non visible dans l\'administration, en attendant son accord.',
      priority: 'normal',
    },
    {
      question: 'Claire Patin, responsable organisation : nom, rôle et accord pour la publication ?',
      decision: 'Créée non visible dans l\'administration, en attendant son accord.',
      priority: 'normal',
    },
    {
      question: 'Mickael Oudot, charpentier : nom, rôle et accord pour la publication ?',
      decision: 'Créé non visible dans l\'administration, en attendant son accord.',
      priority: 'normal',
    },
    {
      question: 'Chloé Nicod, apprentie : nom, rôle et accord pour la publication ?',
      decision: 'Créée non visible dans l\'administration, en attendant son accord.',
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
      decision: "Organisme non cité. Texte conservé : « deux ans formateur à L'Argentière-la-Bessée ».",
      priority: 'low',
    },
    {
      question: "3B Récup' : année de lancement, pour la frise ?",
      decision: "Étape retirée de la frise : la date de création de 3B Récup' n'est pas mentionnée.",
      priority: 'normal',
    },
    {
      question: 'Date de création : 2007 correspond-il à la date d\'immatriculation au répertoire SIRENE (SIREN 494 482 714) ?',
      decision: '2007 conservé (« Depuis 2007 »).',
      priority: 'normal',
    },
    {
      question: 'Scierie Savoldelli : accord de la scierie pour la citer comme partenaire, avec logo et lien ?',
      decision:
        "Carte « Scierie Savoldelli » retirée. La scierie est nommée une seule fois sur la page, dans la FAQ (« notre partenaire local, la Scierie Savoldelli ») ; la carte « Bois » dit seulement « notre partenaire local ». Pas de logo, pas de lien, pas de photo.",
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
        "Titre raccourci en « Des qualifications vérifiables », surtitre « Qualifications » (cartes RGE et Compagnons du Devoir). À rétablir si un partenaire est validé.",
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
        'Photos : portrait de Jean-Michel Tardy (indispensable), portraits de l\'équipe, photo de groupe, atelier, photo du Tour de France, logos Scierie Savoldelli et RGE Qualibat ?',
      decision:
        "Aucun portrait : héros illustré par « assemblage à blanc » (repli de la fiche), section du fondateur par « Taille de la charpente » (ancienne forge de La Salle-les-Alpes). Aucune photo de banque d'images. Photo d'ambiance « forêt » utilisée une fois, en fond des valeurs.",
      priority: 'high',
    },
    {
      question: "Frise : « Aujourd'hui : une entreprise qualifiée RGE, 24 chantiers présentés sur ce site. »",
      decision:
        "Raccourci en « Une entreprise qualifiée RGE. » : 23 chantiers sont publiés (l'isolation d'une voûte, sans photo, n'a pas de page).",
      priority: 'low',
    },
  ],
}
