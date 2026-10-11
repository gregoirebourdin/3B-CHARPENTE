import type { SeedPage } from '../../types'

/** Fiche 15 : Réalisations (/realisations/). */
export const page: SeedPage = {
  kind: 'page',
  slug: 'realisations',
  title: 'Réalisations',
  seo: {
    title: 'Réalisations charpente bois Hautes-Alpes | 3B Charpente',
    description:
      'Nos chantiers en photos : charpentes en mélèze du pays, isolation biosourcée, ossature bois et bois de réemploi, de Briançon à Vallouise. À découvrir.',
    image: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
  },
  hero: {
    variant: 'collage',
    kicker: 'Réalisations',
    title: 'Nos **réalisations** de charpente dans les **Hautes-Alpes**',
    text: "Des chantiers réels, photographiés de la **taille à l'atelier** jusqu'aux **finitions**. Charpentes, rénovations, isolation biosourcée, ossature bois, escaliers et balcons : voici le travail de 3B Charpente à L'Argentière-la-Bessée, à Briançon, en Vallouise, à Serre Chevalier, et parfois plus loin.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    images: [
      'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
      'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
      'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
    ],
  },
  tldr: "3B Charpente présente ici 23 chantiers, réalisés pour la plupart dans le nord des Hautes-Alpes : L'Argentière-la-Bessée, Briançon, Vallouise, Pelvoux, La Salle-les-Alpes, Saint-Martin-de-Queyrières. On y voit des charpentes taillées à l'atelier, des isolations biosourcées, des surélévations en ossature bois, des escaliers sur mesure, des balcons en mélèze et du bois de réemploi.",
  layout: [
    // Section 3 : bandeau de chiffres
    {
      type: 'list',
      style: 'pills',
      tone: 'light',
      items: [
        { title: '23 chantiers présentés' },
        { title: 'Depuis 2007' },
        { title: 'Mélèze, douglas, épicéa, frêne, pin' },
        { title: 'Du bois de réemploi' },
      ],
    },
    // Sections 4 à 10 : filtres et familles de chantiers
    {
      type: 'projectsExplorer',
      serviceFilterLabel: 'Par prestation',
      communeFilterLabel: 'Par commune',
      recupFilterLabel: 'Réemploi (3B Récup’)',
      emptyMessage:
        'Aucun chantier ne correspond encore à ce choix. Le vôtre sera peut-être le premier : parlons-en.',
      emptyCta: { label: 'Demander mon devis', href: '/contact/' },
      groups: [
        {
          kicker: 'Charpente',
          title: '**Charpentes** neuves et **rénovées**',
          intro:
            "Charpentes neuves tracées, taillées et assemblées à blanc à l'atelier ; charpentes anciennes reprises ou refaites ; lucarnes ouvertes et toitures rénovées.",
          links: [
            { label: 'Charpente bois traditionnelle', href: '/charpente-bois/' },
            { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
          ],
          projects: [
            'refection-d-une-charpente-a-l-argentiere-la-bessee',
            'renovation-d-une-copropriete-a-briancon',
            'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
            'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
            'renovation-d-un-toit-en-bardeau-meleze-au-casset',
            'refection-d-une-toiture-a-ronatlon',
            'creation-d-un-plancher-dans-un-bati-ancien',
          ],
        },
        {
          kicker: 'Isolation',
          title: '**Isoler** avec des matériaux **biosourcés**',
          intro:
            "Ouate de cellulose insufflée, panneaux de fibre de bois, laine de chanvre, lin et coton : des isolations posées avec une étanchéité à l'air soignée, en rénovation de chalet comme en bâti ancien.",
          links: [
            { label: 'Isolation biosourcée', href: '/isolation-biosourcee/' },
            { label: 'Isolation de toiture (sarking)', href: '/isolation-toiture-sarking/' },
            { label: 'Isolation des murs (ITE et bâti ancien)', href: '/isolation-murs-ite/' },
          ],
          projects: [
            'renovation-et-isolation-d-un-chalet-a-vallouise',
            'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
            'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
            'isolation-d-un-bati-ancien-par-l-interieur',
          ],
        },
        // Section 7 : bandeau « Réemploi » (3B Récup'), avec la grande carte de la fiche 19
        {
          kicker: "3B Récup'",
          title: 'Du bois qui a **déjà servi**, et qui **sert encore**',
          intro:
            "Sur cette maison de L'Argentière-la-Bessée, le bardage est en vieux bois et le garde-corps en bois de réemploi. Ailleurs, c'est une ferme de charpente en vieux bois, ou un support maçonné en pierres récupérées. Avec 3B Récup', nous déposons, trions, nettoyons et usinons le bois de déconstruction pour lui donner une seconde vie.",
          links: [
            {
              label: 'Voir la ferme en vieux bois',
              href: '/realisations/refection-d-une-toiture-a-ronatlon/',
            },
            {
              label: 'Voir le support en pierres récupérées',
              href: '/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/',
            },
            { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
            { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
          ],
          projects: ['renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee'],
        },
        {
          kicker: 'Ossature bois',
          title: '**Construire** et **surélever** en ossature bois',
          intro:
            "Une maison neuve en ossature bois, des étages ajoutés sur des maisons existantes : le bois permet de construire léger et de préparer une grande partie du travail à l'atelier.",
          links: [
            { label: 'Maison ossature bois', href: '/maison-ossature-bois/' },
            { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
          ],
          projects: [
            'surelevation-en-ossature-bois-d-une-maison-a-briancon',
            'surelevation-a-pelvoux',
            'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
          ],
        },
        {
          kicker: 'Escaliers',
          title: 'Des **escaliers** dessinés pour **votre maison**',
          intro:
            'Quart tournant en mélèze lamellé-collé, bois debout, frêne et aluminium : nos escaliers sont dessinés sur mesure. Celui en mélèze a été tracé, taillé et assemblé dans notre atelier, puis monté en deux jours, finitions comprises.',
          links: [{ label: 'Escaliers bois sur mesure', href: '/escalier-bois-sur-mesure/' }],
          projects: [
            'escalier-1-4-tournant-en-meleze-lamelle-colle',
            'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
            'fabrication-d-un-escalier',
          ],
        },
        {
          kicker: 'Extérieurs',
          title: '**Balcons**, **terrasses** et abris en bois',
          intro:
            'Balcons sur portiques, terrasses couvertes, abris de voiture et de jardin : des ouvrages extérieurs sur mesure, en mélèze, avec des assemblages traditionnels comme le tenon passant ou le tenon et mortaise chevillé.',
          links: [
            { label: 'Balcons, terrasses et abris bois', href: '/balcon-terrasse-abri-bois/' },
          ],
          projects: [
            'construction-d-une-terrasse-couverte-a-champcella',
            'creation-d-un-balcon-a-la-roche-de-rame',
            'creation-d-un-balcon-terrasse-a-gresse-en-vercors',
            'abris-voiture-a-l-argentiere-la-bessee',
            'creation-d-un-abris-de-jardin-a-pelvoux',
          ],
        },
      ],
    },
    // Section 11 : nos chantiers par secteur (nombre de chantiers en grand chiffre vert)
    {
      type: 'cards',
      variant: 'letter',
      columns: 3,
      kicker: 'Près de chez vous',
      title: 'Nos chantiers **par secteur**',
      intro:
        'Nous intervenons aussi plus loin : un balcon terrasse à Gresse-en-Vercors, une maison à ossature bois dans les monts du Lyonnais.',
      items: [
        {
          letter: '2',
          eyebrow: 'chantiers',
          title: 'Briançon',
          text: 'Une copropriété rénovée, une maison surélevée en ossature bois.',
          link: { label: 'Charpentier à Briançon', href: '/charpentier-briancon/' },
        },
        {
          letter: '2',
          eyebrow: 'chantiers',
          title: 'Serre Chevalier',
          text: 'Une ancienne forge réhabilitée à La Salle-les-Alpes, un toit en bardeaux de mélèze au Casset.',
          link: { label: 'Charpentier à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        },
        {
          letter: '11',
          eyebrow: 'chantiers',
          title: 'Vallouise et Pays des Écrins',
          text: "L'Argentière-la-Bessée, Vallouise, Pelvoux, Saint-Martin-de-Queyrières, Prelles, Champcella, La Roche-de-Rame.",
          link: {
            label: 'Charpentier en Vallouise et Pays des Écrins',
            href: '/charpentier-vallouise-pays-des-ecrins/',
          },
        },
      ],
    },
    // Section 12 : FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'À propos de nos **chantiers**',
      faqs: ['realisations-q1', 'realisations-q2', 'realisations-q3', 'realisations-q4'],
    },
    // Section 13 : appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Votre projet',
      title: 'Et si le prochain chantier était **le vôtre** ?',
      text: "Chaque projet chez 3B Charpente débute par une étude sur mesure. Racontez-nous le vôtre : nous en parlerons lors d'une rencontre, puis nous vous proposerons un devis détaillé.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
    },
  ],
  faqs: [
    {
      key: 'realisations-q1',
      topic: 'secteurs',
      question: 'Où se trouvent les chantiers de 3B Charpente ?',
      answer:
        "La plupart de nos chantiers sont dans le nord des Hautes-Alpes, autour de notre base de L'Argentière-la-Bessée : à L'Argentière même, à Vallouise, Pelvoux, Champcella, La Roche-de-Rame et Saint-Martin-de-Queyrières, mais aussi à Briançon, à La Salle-les-Alpes et au Casset, à Serre Chevalier. Nous avons aussi travaillé à Gresse-en-Vercors, en Isère, et dans les monts du Lyonnais.",
    },
    {
      key: 'realisations-q2',
      topic: 'charpente',
      question: 'Utilisez-vous du bois local sur vos chantiers ?',
      answer:
        'Oui. Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. On le voit par exemple sur la maison rénovée à Prelles, en mélèze du pays, ou sur le plancher de la terrasse couverte de Champcella. Plusieurs chantiers intègrent aussi du bois de réemploi : bardage en vieux bois, garde-corps, ferme de charpente.',
    },
    {
      key: 'realisations-q3',
      topic: 'general',
      question: 'Pouvez-vous réaliser un projet comme ceux-ci chez moi ?',
      answer:
        "Chaque projet est unique, et nous travaillons en étroite collaboration avec vous pour adapter nos constructions à vos besoins, en respectant vos préférences esthétiques et fonctionnelles. Ces réalisations montrent ce que nous savons faire ; votre chantier sera pensé pour votre maison. Contactez-nous : nous discuterons de vos besoins lors d'une rencontre, puis nous vous proposerons un devis détaillé.",
    },
    {
      key: 'realisations-q4',
      topic: 'general',
      question: 'Quels types de chantiers réalisez-vous ?',
      answer:
        "Nos réalisations couvrent la charpente neuve et la rénovation de charpente, l'ouverture de lucarnes, l'isolation biosourcée des toitures et des murs, la maison à ossature bois, la surélévation, les escaliers sur mesure, les balcons, terrasses et abris en bois. Avec 3B Récup', nous déconstruisons aussi des structures bois pour en réemployer les matériaux, du bâtiment industriel à la maison particulière.",
    },
  ],
  photoAlts: [
    {
      photo: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
      alt: "Poinçon et entrait cintré de la charpente d'un abri de voiture à L'Argentière-la-Bessée, réalisé par 3B Charpente",
    },
    {
      photo:
        'construction-d-une-terrasse-couverte-a-champcella/terrasse couverte et local technique.JPG',
      alt: 'Terrasse couverte et local technique en bois à Champcella, réalisés par 3B Charpente',
    },
    {
      photo: 'creation-d-un-abris-de-jardin-a-pelvoux/réalisation terminé.jpg',
      alt: 'Abri de jardin en bois terminé à Pelvoux, réalisé par 3B Charpente',
    },
    {
      photo: "creation-d-un-balcon-a-la-roche-de-rame/vue d'ensemble.JPG",
      alt: 'Balcon sur portiques avec balustrade en mélèze à La Roche-de-Rame, réalisé par 3B Charpente',
    },
    {
      photo: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/de face.JPG',
      alt: 'Balcon terrasse en bois vu de face à Gresse-en-Vercors, réalisé par 3B Charpente',
    },
    {
      photo: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/escalier terminé.jpg',
      alt: 'Escalier en bois debout terminé dans un bâti ancien, réalisé par 3B Charpente',
    },
    {
      photo: 'creation-d-un-plancher-dans-un-bati-ancien/en cours de levage.JPG',
      alt: "Levage d'un plancher en douglas et épicéa dans un bâti ancien par 3B Charpente",
    },
    {
      photo: 'escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG',
      alt: 'Escalier quart tournant en mélèze lamellé-collé menant aux combles, réalisé par 3B Charpente',
    },
    {
      photo: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
      alt: 'Escalier en frêne et aluminium fabriqué par 3B Charpente',
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
      alt: "Insufflation de ouate de cellulose pour isoler un bâti ancien par l'intérieur, par 3B Charpente",
    },
    {
      photo:
        'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      alt: "Panneaux en fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée par 3B Charpente",
    },
    {
      photo: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais/chantier terminé!.jpg',
      alt: 'Maison à ossature bois avec bardage en douglas dans les monts du Lyonnais, construite par 3B Charpente',
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
      alt: "Levage des fermes d'une charpente refaite à L'Argentière-la-Bessée par 3B Charpente",
    },
    {
      photo: 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG',
      alt: 'Ferme de charpente en vieux bois de réemploi, posée par 3B Charpente',
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/7Chantier fini.JPG',
      alt: 'Ancienne forge réhabilitée à La Salle-les-Alpes, charpente et couverture par 3B Charpente',
    },
    {
      photo: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
      alt: 'Toit en bardeaux de mélèze rénové au Casset, par 3B Charpente',
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      alt: "Reprise des fermes de charpente d'une copropriété à Briançon par 3B Charpente",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      alt: "Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée par 3B Charpente",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/8Batiment fini.JPG',
      alt: 'Maison rénovée en mélèze du pays avec terrasse et garde-corps bois-métal à Prelles, par 3B Charpente',
    },
    {
      photo:
        'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg',
      alt: 'Toiture rénovée avec lucarne à Saint-Martin-de-Queyrières, par 3B Charpente',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG',
      alt: 'Chalet rénové et isolé avec terrasse en mélèze à Vallouise, par 3B Charpente',
    },
    {
      photo: 'surelevation-a-pelvoux/chantier terminé.jpg',
      alt: 'Maison surélevée à Pelvoux par 3B Charpente',
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
      alt: "Façade sud d'une maison surélevée en ossature bois à Briançon, par 3B Charpente",
    },
  ],
  validationPoints: [
    {
      question:
        "Isolation et habillage d'une voûte à L'Argentière-la-Bessée (fiche 12) : des photos et quelques lignes de description (chantier, matériaux) ?",
      decision:
        "Aucune photo : la réalisation n'est pas créée et sa carte ne figure pas dans la page ; l'ancienne adresse est redirigée en 301 vers /isolation-biosourcee/. La page présente donc 23 chantiers : « 23 chantiers » dans « En bref » et le bandeau de chiffres (24 dans la fiche), 11 chantiers pour Vallouise et Pays des Écrins dans les cartes secteur (12 dans la fiche).",
      priority: 'normal',
    },
    {
      question:
        '« Ronatlon » (fiche 15) : où se trouve ce chantier ? Le nom ne correspond à aucune commune connue.',
      decision:
        "Titre affiché : « Réfection d'une toiture en vieux bois », sans commune ni page secteur. L'adresse actuelle (/realisations/refection-d-une-toiture-a-ronatlon/) est gardée.",
      priority: 'normal',
    },
    {
      question:
        "Communes manquantes : dans quelle commune ont été réalisés le plancher en douglas et épicéa (fiche 7), l'escalier en bois debout (6), l'escalier quart tournant en mélèze (8), l'escalier en frêne et aluminium (9) et l'isolation d'un bâti ancien par l'intérieur (10) ?",
      decision:
        "Aucune commune indiquée : ces chantiers sont classés par prestation, n'apparaissent que dans « Toutes les communes » et ne sont rattachés à aucune page secteur.",
      priority: 'normal',
    },
    {
      question:
        "Isolation d'une toiture ancienne à L'Argentière-la-Bessée (fiche 11) : l'isolation a-t-elle été faite par l'extérieur (sarking) ? Sinon, la ranger seulement sous « isolation biosourcée ».",
      decision:
        'Carte gardée dans la famille « Isolation » à sa place de la fiche ; le filtre « Isolation de toiture » dépend des prestations enregistrées sur la fiche de la réalisation.',
      priority: 'low',
    },
    {
      question:
        "Classement par prestation : le classement proposé (prestation principale + autres prestations) convient-il ? En particulier la maison de L'Argentière-la-Bessée (fiche 19) mise en avant pour le réemploi, et la maison de Prelles (fiche 20) rangée en charpente bois.",
      decision:
        "Classement de la fiche appliqué : la fiche 19 est la carte du bandeau 3B Récup', la fiche 20 est dans la famille « Charpente ».",
      priority: 'low',
    },
    {
      question:
        "Rattachement aux secteurs : Prelles et Saint-Martin-de-Queyrières rattachés au Pays des Écrins plutôt qu'au Briançonnais : d'accord ?",
      decision: 'Rattachés à « Charpentier en Vallouise et Pays des Écrins », comme dans la fiche.',
      priority: 'low',
    },
    {
      question:
        'Accord des clients : les propriétaires ont-ils donné leur accord pour la publication des photos de leur maison avec le nom de la commune ?',
      decision: 'Les communes sont déjà publiques sur le site actuel : elles sont gardées.',
      priority: 'normal',
    },
    {
      question:
        'Escalier en bois debout : la définition « bois posé fibres à la verticale » est-elle juste pour ce chantier ?',
      decision:
        "La page Réalisations n'affiche pas de texte propre pour cette carte : le texte de carte vient de la fiche de la réalisation.",
      priority: 'low',
    },
    {
      question:
        "Nouveaux chantiers : y a-t-il des chantiers récents (depuis la dernière mise à jour de la galerie) à ajouter, surtout à Briançon et à Serre Chevalier, où il n'y a que deux réalisations chacun ?",
      decision: 'Aucun chantier ajouté : la page montre les 23 réalisations publiées avec photos.',
      priority: 'low',
    },
    {
      question:
        "Chiffre « +100 projets » (maquette) : à confirmer avant de l'ajouter au bandeau de chiffres.",
      decision:
        'Non affiché. Le bandeau de chiffres garde : 23 chantiers présentés · Depuis 2007 · Mélèze, douglas, épicéa, frêne, pin · Du bois de réemploi.',
      priority: 'low',
    },
    {
      question:
        "Photos à demander : la voûte (fiche 12) n'en a aucune ; les fiches 3, 4, 9 et 17 n'ont que deux photos chacune ; une photo « avant » manque pour la plupart des chantiers ; chantiers récents non publiés, surtout en 3B Récup' (déconstruction en cours, bois trié à l'atelier) ?",
      decision: 'Page publiée avec les photos existantes de la galerie actuelle.',
      priority: 'low',
    },
  ],
}
