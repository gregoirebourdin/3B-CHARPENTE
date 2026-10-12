import type { SeedPage } from '../../types'

/** Fiche 21 : Contact et devis (/contact/). Les champs du formulaire sont dans ../forms.ts. */
export const page: SeedPage = {
  kind: 'page',
  slug: 'contact',
  title: 'Contact',
  seo: {
    title: 'Devis charpente Hautes-Alpes : contact | 3B Charpente',
    description:
      "Charpente, isolation biosourcée ou réemploi : contactez 3B Charpente à L'Argentière-la-Bessée au 06 34 67 31 49. Rencontre, puis devis détaillé.",
    image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
  },
  hero: {
    variant: 'photo',
    kicker: 'Contact et devis',
    title: 'Demandez votre **devis** de charpente dans les **Hautes-Alpes**',
    text: 'Une question, un projet de construction ou de rénovation ? Chaque projet commence par une **étude sur mesure** : décrivez-nous le vôtre.',
    secondaryCta: { label: 'Appeler le {telephone}', href: 'tel' },
    proofs: [
      { label: 'Une rencontre', text: 'pour parler de votre projet', icon: 'users' },
      { label: 'Un devis détaillé', text: 'adapté à votre projet', icon: 'document' },
      { label: 'Un calendrier estimatif', text: 'dès la première rencontre', icon: 'calendar' },
    ],
    images: ['refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG'],
  },
  tldr: "Pour un devis, appelez 3B Charpente au 06 34 67 31 49, écrivez à tardy@3bcharpente.fr ou remplissez le formulaire ci-dessous. Nous parlons de votre projet lors d'une rencontre, puis nous vous proposons un devis détaillé. Adresse : 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée (Hautes-Alpes).",
  layout: [
    // Formulaire de demande + coordonnées
    {
      type: 'contactForm',
      form: 'contact',
      title: 'Parlez-nous de votre **projet**',
      intro:
        "Quelques informations suffisent : plus votre description est précise, plus notre premier échange sera utile. Les champs marqués d'un astérisque sont obligatoires.",
      showCompanyInfo: true,
      privacyNotice:
        "Les informations de ce formulaire sont utilisées par 3B Charpente (Jean-Michel Tardy, EI) uniquement pour répondre à votre demande et préparer votre devis. Elles ne sont ni vendues ni cédées. Si aucun devis n'est signé, elles sont supprimées 3 ans après notre dernier échange. Vous pouvez y accéder, les corriger ou les faire effacer en écrivant à tardy@3bcharpente.fr. En savoir plus : [politique de confidentialité](/mentions-legales/#confidentialite)",
    },
    // Plan d'accès
    {
      type: 'cta',
      variant: 'slim',
      icon: 'mapPin',
      text: "À L'Argentière-la-Bessée, dans la vallée de la Durance, entre Briançon et Embrun.",
      primary: {
        label: 'Itinéraire',
        href: 'https://www.google.com/maps/search/?api=1&query=3B%20Charpente%2C%205%20rue%20Saint-Michel%2C%2005120%20L%27Argenti%C3%A8re-la-Bess%C3%A9e',
      },
      showAddress: true,
    },
    // Après votre message
    {
      type: 'steps',
      variant: 'timeline',
      tone: 'light',
      kicker: 'Et ensuite ?',
      title: 'Après votre message, **comment ça se passe** ?',
      steps: [
        {
          title: 'Nous lisons votre demande',
          text: 'Votre projet, vos plans, vos photos : nous en prenons connaissance, puis nous vous recontactons.',
        },
        {
          title: 'Nous nous rencontrons',
          text: 'Nous parlons de vos besoins, et vous donnons un calendrier estimatif dès cette première rencontre.',
        },
        {
          title: 'Vous recevez un devis détaillé',
          text: 'Adapté à votre projet. Prenez le temps de le lire et de nous poser vos questions.',
        },
        {
          title: 'Le chantier se prépare',
          text: "Devis accepté : nous préparons les pièces à l'atelier, puis nous intervenons chez vous.",
        },
      ],
    },
    // Encart professionnels et 3B Récup'
    {
      type: 'textImage',
      kicker: "3B Récup'",
      title: 'Vous préparez une **déconstruction** ?',
      text: "Architecte, entreprise du bâtiment, collectivité ou particulier : 3B Récup' vous apporte des solutions sur mesure, du bâtiment industriel à la maison particulière.",
      points: [
        "Nous déposons la structure bois, la couverture, l'isolation et les parements",
        'Nous transformons le bois dans nos ateliers',
        "Associez-nous dès l'étude de faisabilité : c'est là que le réemploi se prévoit le plus simplement",
      ],
      images: [
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      ],
      imagePosition: 'left',
      badge: '3B Récup’',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // Zone d'intervention
    {
      type: 'list',
      style: 'pills',
      tone: 'light',
      kicker: "Zone d'intervention",
      title: 'Où **nous intervenons**',
      text: "Basés dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.",
      items: [
        {
          title: 'Charpentier à Briançon',
          link: { label: 'Charpentier à Briançon', href: '/charpentier-briancon/' },
        },
        {
          title: 'Charpentier à Serre Chevalier',
          link: { label: 'Charpentier à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        },
        {
          title: 'Charpentier en Vallouise et Pays des Écrins',
          link: {
            label: 'Charpentier en Vallouise et Pays des Écrins',
            href: '/charpentier-vallouise-pays-des-ecrins/',
          },
        },
      ],
    },
    // FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Avant de nous **écrire**',
      faqs: ['contact-q1', 'contact-q2', 'contact-q3', 'contact-q4', 'contact-q5'],
    },
  ],
  faqs: [
    {
      key: 'contact-q1',
      topic: 'contact',
      question: 'Comment obtenir un devis pour ma charpente ?',
      answer:
        "Contactez-nous, par téléphone au 06 34 67 31 49 ou avec le formulaire de cette page. Nous parlons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet et à vos goûts.",
    },
    {
      key: 'contact-q2',
      topic: 'contact',
      question: 'Que faut-il préparer avant de vous contacter ?',
      answer:
        "Une description suffit pour commencer : ce que vous voulez faire, la commune, le type de bâtiment et, si possible, quand démarrer. Des photos de l'existant et des plans nous aident : vous pouvez les joindre au formulaire. Nous ferons le point ensemble à la rencontre.",
    },
    {
      key: 'contact-q3',
      topic: 'contact',
      question: 'Combien de temps faut-il pour réaliser mes travaux ?',
      answer:
        'Le délai varie selon la taille et la complexité du projet : une réfection de charpente, une isolation complète ou une surélévation ne demandent pas la même préparation. Nous vous donnons un calendrier estimatif dès la première rencontre, en tenant compte de votre échéance.',
    },
    {
      key: 'contact-q4',
      topic: 'secteurs',
      question: 'Intervenez-vous dans ma commune ?',
      answer:
        "Probablement : depuis L'Argentière-la-Bessée, nous intervenons dans les Hautes-Alpes, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes. Surtout à Briançon, à Serre Chevalier, en Vallouise et dans le Pays des Écrins ; parfois plus loin. Indiquez votre commune dans le formulaire.",
    },
    {
      key: 'contact-q5',
      topic: 'isolation',
      question: "Pouvez-vous m'aider à obtenir des aides à la rénovation ?",
      answer:
        "Nous sommes qualifiés RGE (Qualibat) pour l'isolation des murs et des toitures, les fenêtres de toit et les menuiseries extérieures : faire appel à un artisan RGE ouvre l'accès aux aides publiques, sous conditions. Signalez-le dans votre message : nous en parlerons à la rencontre.",
    },
  ],
  photoAlts: [
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
      alt: "Charpente en cours de levage par 3B Charpente, charpentier à L'Argentière-la-Bessée",
    },
  ],
  validationPoints: [
    {
      question:
        'Horaires : maquette (lundi au vendredi, 7 h 30 – 17 h) ou PagesJaunes (vendredi, 7 h 30 – 12 h) ? Les mêmes horaires devront figurer sur le site, la fiche Google et PagesJaunes.',
      decision:
        'Horaires du réglage « Entreprise », affichés à côté du formulaire et repris dans les données structurées : lundi au jeudi 7 h 30 – 17 h, vendredi 7 h 30 – 12 h, samedi et dimanche fermé (version PagesJaunes et 118712).',
      priority: 'high',
    },
    {
      question:
        'Délai de réponse : quel délai pouvez-vous tenir pour rappeler après une demande ? (message après envoi, accusé de réception, étape 01 « Nous lisons votre demande »)',
      decision:
        "Aucun délai promis : la mention est retirée du message de confirmation, de l'accusé de réception et de l'étape 01.",
      priority: 'high',
    },
    {
      question:
        "Devis gratuit : oui ou non ? Si oui, on l'ajoute dans le titre du formulaire et la FAQ 1.",
      decision:
        "Le mot « gratuit » n'est pas écrit. Formulation gardée : rencontre, puis devis détaillé.",
      priority: 'normal',
    },
    {
      question:
        "Rencontre : se fait-elle toujours sur le chantier ? Y a-t-il des frais de déplacement au-delà d'une certaine distance ?",
      decision:
        "Étape 02 sans lieu : « Nous discutons de vos besoins lors d'une rencontre. » Rien sur les frais de déplacement.",
      priority: 'normal',
    },
    {
      question:
        'Accueil au 5 rue Saint-Michel : bureau, atelier ou domicile ? Accueil sans rendez-vous possible ?',
      decision:
        "Ligne « Accueil » retirée des coordonnées. Aucune mention d'atelier à cette adresse.",
      priority: 'normal',
    },
    {
      question:
        "Message « Nous sommes souvent sur les chantiers : si nous ne décrochons pas, laissez-nous un message. » sous les horaires : d'accord pour l'afficher ?",
      decision:
        'Non affiché (il pourra être saisi dans la note des horaires du réglage « Entreprise »).',
      priority: 'low',
    },
    {
      question:
        'Téléphone et e-mail obligatoires dans le formulaire : préférez-vous rendre le téléphone facultatif ?',
      decision: 'Les deux restent obligatoires, comme dans la fiche.',
      priority: 'low',
    },
    {
      question:
        'Taille des fichiers : 10 Mo par fichier et 5 fichiers, ça vous convient ? (Plans PDF lourds possibles.)',
      decision: '10 Mo par fichier, 5 fichiers au plus (modifiable dans « Formulaires »).',
      priority: 'low',
    },
    {
      question:
        'Liste des communes suggérées : à compléter avec les communes où vous travaillez souvent.',
      decision:
        'Suggestions tirées de la liste officielle des communes, avec en tête les communes des chantiers publiés ; la saisie libre reste possible.',
      priority: 'low',
    },
    {
      question:
        'Outil du formulaire et boîte de réception : les demandes arrivent-elles bien sur tardy@3bcharpente.fr ? Faut-il une copie à Claire Patin (organisation), si son rôle est confirmé ?',
      decision:
        "Envoi des e-mails par Resend (variable d'environnement) vers l'e-mail du réglage « Entreprise » (tardy@3bcharpente.fr), sans copie. Sans Resend, les demandes sont seulement enregistrées dans « Demandes reçues ».",
      priority: 'normal',
    },
    {
      question: "Durée de conservation de 3 ans pour les demandes sans suite : d'accord ?",
      decision:
        'Gardée : 3 ans après le dernier échange (mention sous le bouton et politique de confidentialité).',
      priority: 'normal',
    },
    {
      question:
        "Plan d'accès : carte statique OpenStreetMap à générer (ou carte interactive chargée au clic) ?",
      decision:
        "Pas de carte intégrée pour l'instant : bandeau avec l'adresse et un lien « Itinéraire » vers Google Maps (nouvel onglet), sans cookie.",
      priority: 'low',
    },
    {
      question:
        "FAQ « aides à la rénovation » : ajouter un renvoi vers France Rénov' (règle générale des aides) ?",
      decision:
        "Réponse de la fiche gardée telle quelle (« sous conditions ») ; le renvoi vers France Rénov' figure sur les pages d'isolation et dans le guide des aides.",
      priority: 'low',
    },
    {
      question:
        'Photos à demander : façade ou entrée du 5 rue Saint-Michel (si le lieu reçoit du public, utile aussi pour la fiche Google) ; portrait de Jean au téléphone ou devant un plan (facultatif).',
      decision:
        "Page publiée avec une photo de chantier (« lucarne en cours de levage ») et la photo « Bardage vieux bois » pour l'encart 3B Récup'.",
      priority: 'low',
    },
  ],
}
