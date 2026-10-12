import type { SeedService } from '../../types'

/** Fiche 05 : 3b-charpente-kit/docs/pages/05-isolation-toiture-sarking.md */

const HERO =
  'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG'
const DOUBLAGE =
  "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/doublage pour le renfort et l'isolation.JPG"
const ETANCHEITE_AIR =
  "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/étanchéité à l'air.JPG"
const ETANCHEITE_EAU =
  "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/étanchéité à l'eau et ventilation .JPG"
const VELUX =
  "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG"
const COUVERTURE =
  'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/couverture terminée.JPG'
const PANNEAUX_REFECTION =
  'refection-d-une-charpente-a-l-argentiere-la-bessee/paose des panneaux en fibre de bois.JPG'
const ENCADREMENTS_VELUX =
  'refection-d-une-charpente-a-l-argentiere-la-bessee/pose des encadrements de Velux.JPG'
const SOUFFLAGE = 'renovation-d-une-copropriete-a-briancon/1 Soufflage après découverture.JPG'
const FERMES = 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg'

export const service: SeedService = {
  kind: 'service',
  slug: 'isolation-toiture-sarking',
  title: 'Isolation de toiture et sarking',
  menuLabel: 'Isolation de toiture (sarking)',
  shortLabel: 'Isolation de toiture',
  filterKey: 'isolation-toiture',
  order: 4,
  icon: 'layers',
  cardTitle: "Isolation de toiture par l'extérieur (sarking)",
  cardText: 'Isolant posé au-dessus des chevrons : la charpente reste visible.',
  cardLinkLabel: 'Découvrir le sarking',
  image: HERO,
  schema: {
    serviceType: "Isolation de toiture par l'extérieur (sarking) et par l'intérieur",
    description:
      "Isolation des toitures par l'extérieur (sarking, isolant continu au-dessus des chevrons) ou par l'intérieur des rampants et des combles, avec des isolants biosourcés, et pose de fenêtres de toit, par un charpentier qualifié RGE (Qualibat) à L'Argentière-la-Bessée.",
  },

  seo: {
    title: 'Isolation toiture et sarking Hautes-Alpes | 3B Charpente',
    description:
      "Isolation de toiture par l'extérieur (sarking) ou par l'intérieur, en fibre de bois et ouate. Charpentier RGE à L'Argentière-la-Bessée. Devis sur mesure.",
    image: HERO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Isolation de toiture · Qualifié RGE',
    title: 'Isolation de toiture et **sarking** dans les **Hautes-Alpes**',
    text: "Le toit perd le plus de chaleur l'hiver, et surchauffe le premier l'été. Nous l'isolons en **isolants biosourcés** : par l'extérieur avec le **sarking**, par l'intérieur ou par les combles. Toujours après avoir **vérifié la charpente**.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Sarking ou intérieur : comparer',
      href: '/isolation-toiture-sarking/#comparatif',
    },
    proofs: [
      { label: 'Qualifié RGE', text: 'toitures et fenêtres de toit', icon: 'medal' },
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Charpente vérifiée', text: "avant d'isoler", icon: 'roof' },
    ],
    images: [HERO],
    caption: "Panneaux de fibre de bois sur une toiture ancienne, à L'Argentière-la-Bessée.",
    photoTag: "L'Argentière-la-Bessée",
    sheet: [
      { label: 'Techniques', value: 'Sarking, rampants, combles perdus' },
      { label: 'Isolants', value: 'Fibre de bois, ouate, laines végétales' },
      { label: 'Ouvertures', value: 'Fenêtres de toit raccordées' },
    ],
  },

  tldr: "3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée, isole les toitures des Hautes-Alpes en fibre de bois, ouate de cellulose et laines végétales. Couverture à refaire : le sarking pose l'isolant au-dessus des chevrons. Couverture saine : on isole les rampants par l'intérieur, ou les combles. Fenêtres de toit comprises.",

  layout: [
    // Le sarking, c'est quoi ?
    {
      type: 'manifesto',
      layout: 'split',
      kicker: "Le sarking, c'est quoi ?",
      title: "Le sarking : l'isolant **au-dessus** de la charpente",
      text: "Une isolation de toiture **par l'extérieur**. On dépose la couverture, on pose des panneaux isolants rigides **au-dessus des chevrons**, en continu sur tout le pan, puis on referme.",
      items: [
        {
          title: 'Moins de ponts thermiques',
          text: "L'isolant passe d'un seul tenant au-dessus de la charpente, sans s'arrêter aux chevrons.",
        },
        {
          title: 'Tout le volume gardé',
          text: "Rien n'est ajouté sous le toit : la charpente reste visible depuis l'intérieur.",
        },
        {
          title: "Plus de confort l'été",
          text: 'La fibre de bois, dense, freine la chaleur du soleil à travers le toit.',
        },
        {
          title: 'Un chantier par le dessus',
          text: 'Les pièces habitées ne sont pas démontées.',
        },
      ],
      emphasis:
        "Le mot vient d'Écosse : il y désigne les planches posées sur les chevrons, sous l'ardoise.",
      image: PANNEAUX_REFECTION,
    },
    // Les couches d'un sarking (en attendant le schéma en coupe)
    {
      type: 'list',
      style: 'numbered',
      kicker: 'En coupe',
      title: "Les **sept couches** d'un sarking",
      text: "De l'intérieur vers l'extérieur. La composition exacte dépend de chaque toiture.",
      items: [
        { title: 'Chevrons', text: 'La charpente, laissée apparente.' },
        {
          title: "Support et étanchéité à l'air",
          text: "Un lambris ou un panneau, puis une couche qui empêche l'air de la maison de traverser la paroi.",
        },
        { title: 'Panneaux de fibre de bois', text: 'Posés en continu sur tout le pan.' },
        { title: 'Écran de sous-toiture', text: "Il protège l'isolant de l'eau." },
        { title: 'Contre-lattes', text: "Elles créent une lame d'air ventilée." },
        { title: 'Liteaux', text: 'Ils reçoivent la couverture.' },
        { title: 'Couverture', text: 'Tuiles, ardoises, bac, bardeaux de mélèze…' },
      ],
    },
    // Sarking ou rampants par l'intérieur ?
    {
      type: 'comparisonTable',
      anchor: 'comparatif',
      tone: 'light',
      kicker: 'Comment choisir',
      title: "Sarking ou rampants **par l'intérieur** ?",
      intro:
        "Les deux techniques font partie de notre qualification RGE. Le bon choix dépend surtout de l'état de votre couverture.",
      columns: ['Critère', "Sarking (par l'extérieur)", "Rampants (par l'intérieur)"],
      rows: [
        ['Couverture', 'Déposée, puis refaite', 'Conservée si elle est saine'],
        ['Volume sous toiture', 'Conservé', "Réduit de l'épaisseur ajoutée sous les chevrons"],
        ['Charpente', 'Reste apparente', 'Le plus souvent habillée'],
        [
          "Continuité de l'isolant",
          'Continue au-dessus des chevrons',
          'À soigner entre et sous les chevrons',
        ],
        ['Hauteur du toit', 'Rehaussée : rives, faîtage et cheminées à raccorder', 'Inchangée'],
        ['Chantier', 'Toit ouvert, à caler sur la météo', "À l'abri, depuis l'intérieur"],
        [
          'Mairie',
          'Déclaration préalable le plus souvent',
          "En général rien, si l'aspect extérieur ne change pas",
        ],
      ],
    },
    {
      type: 'callout',
      kind: 'tip',
      tone: 'light',
      title: 'Notre conseil',
      text: "Couverture en fin de vie : profitez-en pour **isoler par l'extérieur**. Couverture saine : l'isolation par l'intérieur évite de la refaire.",
    },
    // Par l'intérieur : rampants et combles
    {
      type: 'textImage',
      kicker: "Par l'intérieur",
      title: "Rampants et combles : **isoler par l'intérieur**",
      text: "L'isolant se loge **entre les chevrons, puis dessous**, pour couper les ponts thermiques. Pour gagner de l'épaisseur, on double la charpente : elle est renforcée au passage.",
      points: [
        "Une étanchéité à l'air côté pièce : l'air chaud et humide ne traverse pas l'isolant",
        'Un lambris ou un parement en finition',
        'Grenier non habité : on isole le plancher, en ouate de cellulose soufflée qui se glisse autour des solives',
      ],
      images: [DOUBLAGE, ETANCHEITE_AIR],
      imagePosition: 'right',
      caption:
        "Doublage pour le renfort et l'isolation d'une toiture ancienne, à L'Argentière-la-Bessée.",
    },
    // Couverture à refaire : le bon moment pour isoler
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Rénovation de toiture',
      title: 'Couverture à refaire ? **Le bon moment** pour isoler',
      text: "Échafaudage, dépose, toit ouvert : la charpente est accessible. C'est le moment d'isoler par l'extérieur, **et de soigner la structure**.\n\nLes bois sains déposés ne partent pas forcément à la benne : avec [3B Récup'](/3b-recup/), nous les trions pour les réemployer.",
      points: [
        'Pièces abîmées remplacées, fermes reprises',
        "Sections trop faibles renforcées : en montagne, le toit porte la neige tout l'hiver",
        'Débords de toit refaits',
      ],
      images: [SOUFFLAGE, FERMES],
      imagePosition: 'left',
      caption: "Soufflage de l'isolant après découverture, sur une copropriété à Briançon.",
      cta: { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
    },
    {
      type: 'callout',
      kind: 'site',
      tone: 'light',
      text: "**À Briançon**, sur une copropriété : fermes reprises, isolant soufflé après découverture, dépassée de toiture recréée, couverture neuve. **À Saint-Martin-de-Queyrières** : une lucarne ouverte, avec des caissons d'isolation et une étanchéité à l'air.",
    },
    // Fenêtres de toit
    {
      type: 'textImage',
      anchor: 'fenetres-de-toit',
      kicker: 'Fenêtres de toit',
      title: 'Des fenêtres de toit **bien raccordées**',
      text: "Elles apportent la lumière sous les combles. Mais mal raccordée, une fenêtre crée **une fuite d'air et un pont thermique** au milieu d'un toit bien isolé.",
      points: [
        'Un chevêtre : le cadre en bois qui reprend les chevrons coupés',
        'Un encadrement autour de la fenêtre',
        "L'isolant, l'étanchéité à l'air et l'écran de sous-toiture raccordés tout autour",
      ],
      badge: 'Domaine RGE',
      images: [VELUX, ENCADREMENTS_VELUX],
      imagePosition: 'right',
      caption:
        "Fenêtre de toit de 78 × 98 cm vue de dessous, dans un rampant isolé à L'Argentière-la-Bessée.",
      links: [
        {
          label: "Voir la réfection de charpente à L'Argentière-la-Bessée",
          href: '/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/',
        },
      ],
    },
    // Les étapes d'un sarking
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'light',
      kicker: "Déroulé d'un chantier",
      title: "Les étapes d'un **sarking**",
      intro:
        'Chaque toiture est différente. Un toit ouvert se protège à chaque étape : le chantier se cale sur la météo.',
      steps: [
        {
          title: 'Visite et relevé',
          text: 'Couverture, charpente et points délicats : cheminées, noues, fenêtres de toit, débords.',
        },
        {
          title: 'Étude et devis',
          text: "Panneaux et épaisseur, rives, démarches en mairie si l'aspect change. Devis détaillé et calendrier estimatif.",
        },
        {
          title: 'Dépose',
          text: 'Couverture déposée, matériaux triés : ce qui peut resservir est mis de côté.',
        },
        {
          title: "Charpente et étanchéité à l'air",
          text: "Pièces renforcées ou reprises si besoin, puis support et couche d'étanchéité à l'air.",
        },
        {
          title: 'Isolation',
          text: 'Panneaux de fibre de bois en continu, écran de sous-toiture, contre-lattes qui ventilent la couverture.',
          image: ETANCHEITE_EAU,
        },
        {
          title: 'Couverture et finitions',
          text: 'Liteaux, couverture neuve, raccords, rives et dépassées : le toit est refermé.',
          image: COUVERTURE,
        },
      ],
    },
    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      kicker: 'Nos chantiers de toiture',
      title: 'Des toitures isolées **en photos**',
      items: [
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Charpente doublée, fibre de bois, étanchéités à l'air et à l'eau, fenêtre de toit.",
        },
        {
          project: 'renovation-d-une-copropriete-a-briancon',
          title: "Rénovation d'une copropriété à Briançon",
          text: 'Fermes reprises, soufflage après découverture, couverture neuve. Et une belle vue.',
        },
        {
          project: 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
          title: "Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières",
          text: "Caissons d'isolation, étanchéité à l'air et lucarne ouverte.",
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    {
      type: 'list',
      style: 'pills',
      kicker: 'Voir aussi',
      items: [
        {
          title: 'Chalet à Vallouise : 32 cm de laines végétales et fibre de bois en toiture',
          link: {
            label: "Rénovation et isolation d'un chalet à Vallouise",
            href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/',
          },
        },
      ],
    },
    // Aides et RGE
    {
      type: 'callout',
      kind: 'aid',
      tone: 'light',
      title: 'Isolation de toiture : les aides',
      text: "Qualifiés RGE (Qualibat) pour les toitures par l'extérieur, les rampants et plafonds par l'intérieur et les fenêtres de toit : vos travaux peuvent ouvrir droit à des aides, sous conditions. Les règles changent chaque année : voyez un conseiller [France Rénov'](https://france-renov.gouv.fr/) avant de signer.",
      link: {
        label: 'Notre guide des aides avec un artisan RGE',
        href: '/conseils/aides-renovation-artisan-rge/',
      },
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: "Vos questions sur **l'isolation de toiture**",
      faqs: [
        'isolation-toiture-sarking-q1',
        'isolation-toiture-sarking-q2',
        'isolation-toiture-sarking-q3',
        'isolation-toiture-sarking-q4',
        'isolation-toiture-sarking-q5',
        'isolation-toiture-sarking-q6',
      ],
    },
    // Prestations proches
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Prestations proches',
      services: ['renovation-charpente-combles', 'isolation-murs-ite', 'isolation-biosourcee'],
    },
    // Pour aller plus loin
    {
      type: 'list',
      style: 'pills',
      kicker: 'Pour aller plus loin',
      items: [
        {
          title: 'Quel isolant biosourcé choisir en montagne ?',
          link: {
            label: 'Quel isolant biosourcé choisir en montagne ?',
            href: '/conseils/isolant-biosource-montagne/',
          },
        },
      ],
    },
    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre toiture',
      title: 'Un toit à isoler **ou à refaire** ?',
      text: 'Nous venons voir votre toiture et sa charpente, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'isolation-toiture-sarking-q1',
      topic: 'isolation',
      question: "Qu'est-ce que le sarking en toiture ?",
      answer:
        "Une isolation de toiture par l'extérieur. On dépose la couverture, on pose des panneaux isolants rigides, souvent en fibre de bois, en continu au-dessus des chevrons, puis on referme avec un écran de sous-toiture, une lame d'air ventilée et une couverture neuve. La charpente reste visible et le volume intérieur est conservé.",
    },
    {
      key: 'isolation-toiture-sarking-q2',
      topic: 'isolation',
      question: "Sarking ou isolation par l'intérieur : que choisir ?",
      answer:
        "Tout dépend de votre couverture. À refaire : le sarking est logique, on isole pendant que le toit est ouvert, sans perdre de volume. Saine : l'isolation des rampants par l'intérieur évite de la déposer, mais réduit un peu la hauteur et cache en général la charpente. Nous vous conseillons après une visite.",
    },
    {
      key: 'isolation-toiture-sarking-q3',
      topic: 'isolation',
      question: 'Faut-il refaire la couverture pour faire un sarking ?',
      answer:
        'Oui. Le sarking se pose sous la couverture, au-dessus des chevrons : il faut la déposer, puis la reposer ou la remplacer. Il est donc surtout intéressant quand la toiture arrive en fin de vie. Certains matériaux en bon état peuvent parfois être réemployés : nous en parlons à la visite.',
    },
    {
      key: 'isolation-toiture-sarking-q4',
      topic: 'isolation',
      question: "Quelle épaisseur d'isolant pour une toiture en montagne ?",
      answer:
        "Il n'y a pas de chiffre unique : tout dépend de l'isolant, de la charpente, de la technique et de la performance visée. Exemple : sur un chalet des années 1980 à Vallouise, la toiture a reçu 32 cm de laine de chanvre/lin/coton et de fibre de bois. Nous fixons l'épaisseur à l'étude.",
    },
    {
      key: 'isolation-toiture-sarking-q5',
      topic: 'isolation',
      question: "Faut-il une autorisation pour isoler sa toiture par l'extérieur ?",
      answer:
        "Le plus souvent, oui. Le sarking rehausse le toit et peut changer son aspect : une déclaration préalable est en général demandée en mairie, selon le plan local d'urbanisme. En secteur protégé, l'avis de l'architecte des Bâtiments de France peut être requis. Renseignez-vous en mairie avant les travaux.",
    },
    {
      key: 'isolation-toiture-sarking-q6',
      topic: 'isolation',
      question: 'Le sarking donne-t-il droit à des aides ?',
      answer:
        "Il peut, sous conditions, s'il est réalisé par une entreprise qualifiée RGE dans ce domaine : c'est le cas de 3B Charpente (Qualibat). Montants et conditions changent chaque année : renseignez-vous auprès d'un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis.",
    },
  ],

  validationPoints: [
    {
      question:
        "Sarking réalisé en rénovation : quels chantiers de la galerie sont de vrais sarkings ? En particulier la « toiture ancienne » de L'Argentière-la-Bessée, la lucarne de Saint-Martin-de-Queyrières (« caissons d'isolation ») et la réfection de charpente de L'Argentière-la-Bessée.",
      decision:
        "Aucun chantier n'est présenté comme un sarking : la page explique la technique en général et montre des chantiers de toiture réels, sans les requalifier.",
      priority: 'high',
    },
    {
      question:
        "Toiture ancienne de L'Argentière-la-Bessée : que désigne le « doublage pour le renfort et l'isolation » (doublage des chevrons ?) ? Quel isolant, quelle épaisseur ?",
      decision:
        "La page reprend seulement la légende de la photo, sans nommer l'isolant ni l'épaisseur.",
      priority: 'normal',
    },
    {
      question:
        'Copropriété de Briançon : quel isolant a été soufflé après découverture, et où (plancher des combles, rampants) ?',
      decision:
        "Texte limité à « isolant soufflé après découverture », sans nommer l'isolant ni l'endroit.",
      priority: 'normal',
    },
    {
      question:
        "Saint-Martin-de-Queyrières : les caissons d'isolation sont-ils posés par l'extérieur ? Avec quel isolant ?",
      decision:
        "Présentés comme « caissons d'isolation et étanchéité à l'air », sans préciser le côté ni l'isolant.",
      priority: 'normal',
    },
    {
      question:
        'Panneaux de sarking : quels panneaux de fibre de bois 3B utilise-t-il (épaisseurs habituelles, fabricant) ?',
      decision: 'Aucune marque ni épaisseur citée. À ajouter plus tard pour enrichir la page.',
      priority: 'low',
    },
    {
      question:
        'Démarches en mairie : 3B prépare-t-il les plans ou les pièces de la déclaration préalable pour ses clients ?',
      decision:
        "L'étape « Étude et devis » cite seulement les « démarches en mairie si l'aspect change », sans dire qui les fait. Si 3B les prépare, l'ajouter à cette étape.",
      priority: 'normal',
    },
    {
      question:
        'Combles perdus : 3B fait-il des soufflages de ouate de cellulose en combles perdus ?',
      decision:
        "Présenté comme une option (isolation du plancher des combles perdus), sans chantier à l'appui.",
      priority: 'normal',
    },
    {
      question:
        'Fenêtres de toit : marque habituellement posée (la galerie mentionne « velux ») et accessoires proposés (volets, stores contre la chaleur) ?',
      decision: 'Terme générique « fenêtre de toit » ; aucune marque ni aucun accessoire cité.',
      priority: 'low',
    },
    {
      question:
        'Réfection de toiture « Ronatlon » : la commune est à vérifier. La « ferme en vieux bois » de ce chantier serait une belle preuve de réemploi pour la section « Couverture à refaire ».',
      decision:
        "Chantier non cité sur cette page (il s'affiche « Réfection d'une toiture en vieux bois », sans commune, selon les décisions Réalisations).",
      priority: 'low',
    },
    {
      question:
        "Qualification RGE : quel SIRET est rattaché (00024 dans l'annuaire ADEME, 00016 dans les mentions légales) ? Numéro et date de fin de validité du certificat Qualibat ?",
      decision:
        "Mention « qualifié RGE (Qualibat) » sans logo ni numéro de certificat : « QUALIBAT-RGE » des textes de la fiche est écrit « RGE (Qualibat) ». Aides toujours « sous conditions », avec renvoi vers France Rénov'.",
      priority: 'normal',
    },
    {
      question:
        "Schéma en coupe du sarking (section « Le sarking, c'est quoi ? ») à faire dessiner dans la charte, et photo d'un sarking en cours vu de l'extérieur à fournir.",
      decision:
        "En attendant, les sept couches du schéma sont affichées en liste numérotée, sans photo (la photo de l'écran d'étanchéité à l'eau illustre déjà les étapes).",
      priority: 'low',
    },
  ],

  photoAlts: [
    {
      photo: HERO,
      alt: "Panneaux de fibre de bois posés lors de l'isolation d'une toiture ancienne à L'Argentière-la-Bessée",
      caption: "Panneaux de fibre de bois sur une toiture ancienne, à L'Argentière-la-Bessée.",
    },
    {
      photo: DOUBLAGE,
      alt: "Doublage de charpente pour le renfort et l'isolation d'une toiture ancienne à L'Argentière-la-Bessée",
      caption:
        "Doublage pour le renfort et l'isolation d'une toiture ancienne, à L'Argentière-la-Bessée.",
    },
    {
      photo: SOUFFLAGE,
      alt: "Soufflage de l'isolant après dépose de la couverture, rénovation d'une copropriété à Briançon",
      caption: "Soufflage de l'isolant après découverture, sur une copropriété à Briançon.",
    },
    {
      photo: VELUX,
      alt: "Fenêtre de toit de 78 × 98 cm vue de dessous, dans un rampant isolé à L'Argentière-la-Bessée",
      caption:
        "Fenêtre de toit de 78 × 98 cm vue de dessous, dans un rampant isolé à L'Argentière-la-Bessée.",
    },
    {
      photo: ETANCHEITE_EAU,
      alt: "Écran d'étanchéité à l'eau et lame de ventilation sous la couverture d'une toiture isolée à L'Argentière-la-Bessée",
    },
  ],
}
