import type { SeedPage } from '../../types'

/** Fiche 20 — Charpentier en Vallouise et Pays des Écrins (/charpentier-vallouise-pays-des-ecrins/). */
export const page: SeedPage = {
  kind: 'page',
  slug: 'charpentier-vallouise-pays-des-ecrins',
  title: 'Charpentier en Vallouise et Pays des Écrins',
  seo: {
    title: "Charpentier L'Argentière-la-Bessée, Vallouise | 3B Charpente",
    description:
      "Charpentier à L'Argentière-la-Bessée depuis 2007 : charpente, isolation biosourcée, chalets, balcons et réemploi en Vallouise et Pays des Écrins. Devis.",
    image: 'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
  },
  hero: {
    variant: 'map',
    kicker: 'Charpente · Isolation · Réemploi · Balcons',
    title: "Charpentier à **L'Argentière-la-Bessée**, en Vallouise et dans le Pays des Écrins",
    text: 'Nous sommes installés ici, au 5 rue Saint-Michel, là où la Gyronde rejoint la Durance. **La moitié de nos chantiers publiés** sont dans le Pays des Écrins : charpentes, toitures, chalets, balcons, abris.',
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos chantiers du secteur',
      href: '/charpentier-vallouise-pays-des-ecrins/#chantiers',
    },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Entreprise RGE', text: 'Qualibat', icon: 'medal' },
      { label: '11 chantiers', text: 'dans le Pays des Écrins', icon: 'mapPin' },
    ],
    images: [
      'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
      'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (1).JPG',
      'renovation-et-isolation-d-un-chalet-a-vallouise/10. Terrasse en mélèze et ses assemblages traditionnels.JPG',
    ],
  },
  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, au cœur du Pays des Écrins. Onze de nos chantiers publiés sont dans le secteur : réfection de charpente, isolation de toiture, chalet rénové à Vallouise, surélévation à Pelvoux, balcons, terrasse et abris. Bois des Hautes-Alpes, isolants biosourcés, bois de réemploi.",
  layout: [
    // Nos chantiers à L'Argentière-la-Bessée
    {
      type: 'projects',
      anchor: 'chantiers',
      kicker: 'Nos chantiers',
      title: "À **L'Argentière-la-Bessée**, notre commune",
      mode: 'manual',
      label: 'brand',
      items: [
        {
          project: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
          title: "Réfection d'une charpente avec lucarne",
          text: 'Tenon taillé à la besaiguë, trait de Jupiter, assemblage à blanc, lucarne, plancher en mélèze.',
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne",
          text: "Charpente renforcée, étanchéité à l'air, fibre de bois, fenêtre de toit.",
        },
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          title: "Rénovation d'une maison d'habitation",
          text: 'Pignon vitré, bardage en vieux bois, garde-corps de réemploi, escalier balancé.',
        },
        {
          project: 'abris-voiture-a-l-argentiere-la-bessee',
          title: 'Abri voiture en charpente traditionnelle',
          text: 'Poinçon, entrait cintré, tenons et mortaises chevillés.',
        },
      ],
    },
    // Nos chantiers en Vallouise et dans le Pays des Écrins
    {
      type: 'projects',
      tone: 'light',
      kicker: 'Dans le Pays des Écrins',
      title: 'De **Vallouise** à La Roche-de-Rame',
      mode: 'manual',
      label: 'commune',
      items: [
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: 'Chalet rénové et isolé',
          text: "28 cm d'isolant biosourcé dans les murs, 32 cm en toiture, terrasse agrandie.",
        },
        {
          project: 'surelevation-a-pelvoux',
          title: 'Surélévation',
          text: 'Une dépassée de toit portée par des consoles.',
        },
        {
          project: 'creation-d-un-abris-de-jardin-a-pelvoux',
          title: 'Abri de jardin',
          text: "Du levage de la structure à l'abri terminé.",
        },
        {
          project: 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
          title: 'Rénovation énergétique et lucarne',
          text: "Lucarne ouverte, étanchéité à l'air, caissons d'isolation.",
        },
        {
          project: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
          title: 'Maison en mélèze de pays',
          text: 'Charpente taillée, terrasse en mélèze, garde-corps bois-métal.',
        },
        {
          project: 'construction-d-une-terrasse-couverte-a-champcella',
          title: 'Terrasse couverte',
          text: 'Local technique et abri voiture sous le même toit.',
        },
        {
          project: 'creation-d-un-balcon-a-la-roche-de-rame',
          title: 'Balcon en mélèze',
          text: 'Porté par des portiques, avec sa balustrade.',
        },
      ],
    },
    // Le bâti du pays
    {
      type: 'textImage',
      kicker: 'Le bâti du pays',
      title: 'Maisons de pays, chalets et **vieux bois**',
      text: "Maisons de pays en pierre et en bois, granges, chalets des années 1980, maisons récentes : **le bâti raconte plusieurs époques**. L'hiver est long, et l'altitude monte vite des bords de la Durance aux hameaux de Pelvoux.",
      points: [
        'Une charpente qui peut être gardée, nous la reprenons et la renforçons ; sinon, nous la refaisons',
        "Les toitures portent la neige : une bonne isolation change le confort d'hiver comme d'été",
        "Les vieux bois de déconstruction retrouvent une place, comme le bardage de L'Argentière-la-Bessée",
      ],
      images: [
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      ],
      imagePosition: 'right',
    },
    {
      type: 'callout',
      kind: 'tip',
      text: "Aux portes du Parc national des Écrins comme ailleurs, renseignez-vous en mairie sur les règles d'urbanisme avant de modifier un toit ou une façade.",
    },
    // Nos prestations
    {
      type: 'cards',
      variant: 'index',
      columns: 3,
      tone: 'light',
      kicker: 'Ce que nous faisons',
      title: 'Nos **prestations** en Vallouise et autour',
      items: [
        {
          title: 'Rénovation de charpente et combles',
          icon: 'roof',
          text: 'Reprendre, renforcer ou refaire une charpente, ouvrir une lucarne.',
          link: {
            label: 'Rénovation de charpente et combles',
            href: '/renovation-charpente-combles/',
          },
        },
        {
          title: 'Charpente traditionnelle',
          icon: 'hammer',
          text: 'Taille, assemblage à blanc et levage, avec des assemblages chevillés.',
          link: { label: 'Charpente traditionnelle', href: '/charpente-bois/' },
        },
        {
          title: 'Isolation biosourcée',
          icon: 'leaf',
          text: 'Chanvre, lin, coton, fibre de bois ou ouate, posés par une entreprise RGE.',
          link: { label: 'Isolation biosourcée', href: '/isolation-biosourcee/' },
        },
        {
          title: 'Isolation de toiture',
          icon: 'layers',
          text: 'Isoler un toit ancien, y compris par sarking, au-dessus des chevrons.',
          link: { label: 'Isolation de toiture', href: '/isolation-toiture-sarking/' },
        },
        {
          title: 'Isolation des murs',
          icon: 'wall',
          text: "Par l'extérieur (ITE), ou par l'intérieur pour le bâti ancien.",
          link: { label: 'Isolation des murs', href: '/isolation-murs-ite/' },
        },
        {
          title: 'Extension et surélévation bois',
          icon: 'arrowUp',
          text: 'Gagner un niveau, comme à Pelvoux.',
          link: { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
        },
        {
          title: 'Maison ossature bois',
          icon: 'house',
          text: 'Construire neuf en bois, avec des isolants biosourcés.',
          link: { label: 'Maison ossature bois', href: '/maison-ossature-bois/' },
        },
        {
          title: 'Escaliers sur mesure',
          icon: 'stairs',
          text: 'Quart tournant, balancé ou en bois debout.',
          link: { label: 'Escaliers sur mesure', href: '/escalier-bois-sur-mesure/' },
        },
        {
          title: 'Balcons, terrasses et abris',
          icon: 'balcony',
          text: 'Balcons, terrasses couvertes, abris voiture et de jardin.',
          link: { label: 'Balcons, terrasses et abris', href: '/balcon-terrasse-abri-bois/' },
        },
      ],
    },
    // Bois local et réemploi
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Bois local et réemploi',
      title: 'Du bois **local**, et du bois qui **reprend vie**',
      text: "Surtout du **mélèze et du sapin des Hautes-Alpes**, sciés par notre partenaire local, la Scierie Savoldelli. Et c'est d'ici, de L'Argentière-la-Bessée, que part 3B Récup', notre filière de déconstruction et de réemploi.",
      items: [
        { title: 'Déposer', text: 'La structure bois, sur le chantier de déconstruction.' },
        { title: 'Préparer', text: 'Le bois est trié, nettoyé et usiné dans nos ateliers.' },
        { title: 'Reposer', text: 'Sur nos chantiers : bardage, garde-corps, charpente.' },
      ],
      emphasis:
        "Notre qualification RGE ouvre l'accès aux aides publiques à la rénovation, sous conditions.",
      image:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
      cta: { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
    },
    // Communes desservies
    {
      type: 'serviceArea',
      tone: 'cream',
      kicker: 'Où nous intervenons',
      title: 'Tout le **Pays des Écrins**',
      text: "L'Argentière-la-Bessée, Vallouise-Pelvoux, Saint-Martin-de-Queyrières (dont Prelles), Champcella, La Roche-de-Rame et les communes voisines. Plus largement, les Hautes-Alpes, la région PACA et Rhône-Alpes.",
      sectors: [
        {
          title: 'Charpentier à Briançon',
          text: 'Plus au nord, Briançon et les communes autour.',
          link: { label: 'Nos chantiers à Briançon', href: '/charpentier-briancon/' },
        },
        {
          title: 'Charpentier à Serre Chevalier',
          text: 'Saint-Chaffrey, La Salle-les-Alpes, Le Monêtier-les-Bains.',
          link: { label: 'Nos chantiers à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        },
      ],
      showMap: false,
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur un chantier en **Vallouise** et autour',
      faqs: [
        'charpentier-vallouise-pays-des-ecrins-q1',
        'charpentier-vallouise-pays-des-ecrins-q2',
        'charpentier-vallouise-pays-des-ecrins-q3',
        'charpentier-vallouise-pays-des-ecrins-q4',
        'charpentier-vallouise-pays-des-ecrins-q5',
      ],
    },
    // Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Un projet près de **chez nous** ?',
      text: "Nous sommes à L'Argentière-la-Bessée. Chaque projet débute par une étude sur mesure : parlons du vôtre.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'charpentier-vallouise-pays-des-ecrins-q1',
      topic: 'secteurs',
      question: 'Où se trouve 3B Charpente ?',
      answer:
        "Au 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, dans les Hautes-Alpes. C'est l'entreprise individuelle de Jean-Michel Tardy, charpentier formé chez les Compagnons du Devoir, créée en 2007. Joignez-nous au 06 34 67 31 49 ou à tardy@3bcharpente.fr.",
    },
    {
      key: 'charpentier-vallouise-pays-des-ecrins-q2',
      topic: 'secteurs',
      question: 'Intervenez-vous à Vallouise et à Pelvoux ?',
      answer:
        "Oui. À Vallouise, nous avons rénové et isolé un chalet des années 1980 et agrandi son balcon en terrasse. À Pelvoux, une surélévation et un abri de jardin. Et dans tout le Pays des Écrins, de L'Argentière-la-Bessée à Saint-Martin-de-Queyrières, Champcella et La Roche-de-Rame.",
    },
    {
      key: 'charpentier-vallouise-pays-des-ecrins-q3',
      topic: 'secteurs',
      question: 'Pouvez-vous rénover et isoler un chalet ?',
      answer:
        "Oui. À Vallouise, un chalet des années 1980 entièrement rénové et isolé : 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture. Bardage en mélèze d'un côté, enduit sur fibre de bois de l'autre, ouvertures créées ou modifiées, terrasse agrandie.",
    },
    {
      key: 'charpentier-vallouise-pays-des-ecrins-q4',
      topic: 'secteurs',
      question: 'Utilisez-vous du bois de réemploi dans vos rénovations ?',
      answer:
        "Oui. À L'Argentière-la-Bessée, une maison rénovée a reçu un bardage en vieux bois et un garde-corps en bois de réemploi. Avec 3B Récup', le bois de déconstruction est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers.",
    },
    {
      key: 'charpentier-vallouise-pays-des-ecrins-q5',
      topic: 'secteurs',
      question: 'Réalisez-vous aussi les petits ouvrages : abri, balcon, terrasse ?',
      answer:
        "Oui : un abri de jardin à Pelvoux, un abri voiture en charpente traditionnelle à L'Argentière-la-Bessée, un balcon en mélèze à La Roche-de-Rame, une terrasse couverte à Champcella. Petit ou grand, chaque projet commence par une étude sur mesure, puis un devis détaillé.",
    },
  ],
  photoAlts: [
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
      alt: "Lucarne en cours de levage sur la toiture refaite à L'Argentière-la-Bessée",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (1).JPG',
      alt: 'Taille de la charpente en mélèze de pays pour une maison à Prelles (Hautes-Alpes)',
    },
    {
      photo:
        'renovation-et-isolation-d-un-chalet-a-vallouise/10. Terrasse en mélèze et ses assemblages traditionnels.JPG',
      alt: 'Assemblages traditionnels de la terrasse en mélèze du chalet de Vallouise',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      alt: "Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
      alt: "Garde-corps en bois de réemploi, maison rénovée à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
      alt: 'Façade sud du chalet rénové à Vallouise et sa terrasse agrandie en mélèze',
    },
  ],
  validationPoints: [
    {
      question:
        'Communes : Puy-Saint-Vincent, Les Vigneaux et Freissinières sont proposés comme communes voisines, sans chantier publié. Jean y intervient-il ? Faut-il citer des hameaux (Ailefroide, hameaux de Vallouise et de Pelvoux…) ?',
      decision:
        "Pastilles limitées aux communes où un chantier est publié (L'Argentière-la-Bessée, Vallouise-Pelvoux, Saint-Martin-de-Queyrières, Champcella, La Roche-de-Rame), suivies de « et les communes voisines ». Puy-Saint-Vincent, Les Vigneaux et Freissinières retirés (ni pastilles ni areaServed) ; aucun hameau cité.",
      priority: 'high',
    },
    {
      question:
        'Vallouise-Pelvoux : depuis 2017, Vallouise et Pelvoux forment une seule commune. Garder les deux noms, avec la commune nouvelle entre parenthèses ?',
      decision:
        'Pastille « Vallouise-Pelvoux (Vallouise, Pelvoux) » ; les cartes de chantiers affichent Vallouise ou Pelvoux.',
      priority: 'low',
    },
    {
      question: 'Prelles : village de Saint-Martin-de-Queyrières. Confirmer cette mention.',
      decision:
        'Pastille « Saint-Martin-de-Queyrières (dont Prelles) » ; la carte du chantier affiche Prelles.',
      priority: 'low',
    },
    {
      question:
        'Atelier : est-il au 5 rue Saint-Michel ou ailleurs dans la commune ? La page dit « 3B Charpente est installée au 5 rue Saint-Michel » et « nos ateliers ».',
      decision:
        "« Nos ateliers » gardé, sans adresse d'atelier ; une seule adresse publique (5 rue Saint-Michel).",
      priority: 'normal',
    },
    {
      question:
        "Voûte de L'Argentière-la-Bessée (fiche n° 12) : photos disponibles ? Sinon, la carte de la section « Nos chantiers » est retirée.",
      decision:
        'Aucune photo : réalisation non créée et carte retirée. Le secteur compte donc 11 chantiers publiés sur 23 : « En bref » dit « Onze de nos chantiers publiés » (la fiche disait « Douze »), le héros garde « la moitié de nos chantiers publiés ».',
      priority: 'normal',
    },
    {
      question:
        "Années des chantiers du secteur (pour écrire par exemple « depuis 2007, plus de dix chantiers autour de l'atelier »). Le chiffre « +100 projets » de la maquette n'est pas repris.",
      decision: 'Aucune année affichée ; « +100 projets » non affiché.',
      priority: 'low',
    },
    {
      question:
        'Horaires (maquette « lundi au vendredi, 7 h 30 – 17 h » ou PagesJaunes « vendredi 7 h 30 – 12 h »), coordonnées GPS, fiche Google à revendiquer et petite carte centrée sur le 5 rue Saint-Michel.',
      decision:
        "Horaires du réglage « Entreprise » (lundi au jeudi 7 h 30 – 17 h, vendredi 7 h 30 – 12 h) ; GPS par géocodage de l'adresse ; lien Google absent (seule Facebook dans sameAs) ; pas de carte d'accès sous le bandeau de contact.",
      priority: 'normal',
    },
    {
      question:
        "Pastille « Entreprise RGE » : vérifier le SIRET actif (00016 dans les mentions légales, 00024 dans l'annuaire RGE).",
      decision: 'Pastille gardée ; les mentions légales affichent le SIRET 494 482 714 00016.',
      priority: 'normal',
    },
    {
      question:
        "Plateforme de réemploi de L'Argentière-la-Bessée (La Miraille) : la citer comme acteur local du réemploi ?",
      decision: 'Non citée sur cette page ; jamais présentée comme partenaire.',
      priority: 'low',
    },
    {
      question:
        "Bardage en vieux bois et garde-corps de réemploi de la maison de L'Argentière-la-Bessée : d'où vient ce bois ?",
      decision:
        "Présentés comme « bardage en vieux bois » et « garde-corps en bois de réemploi », sans dire que ce bois vient d'une déconstruction faite par 3B.",
      priority: 'low',
    },
    {
      question:
        "Photos à demander : l'atelier de L'Argentière-la-Bessée (machines, stock de vieux bois, taille d'une pièce), la voûte (fiche n° 12), un chantier à Puy-Saint-Vincent, aux Vigneaux ou à Freissinières.",
      decision: 'Page publiée avec les photos existantes des chantiers du secteur.',
      priority: 'low',
    },
  ],
}
