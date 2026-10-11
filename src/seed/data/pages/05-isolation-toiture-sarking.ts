import type { SeedService } from '../../types'

/** Fiche 05 : 3b-charpente-kit/docs/pages/05-isolation-toiture-sarking.md */

const p = (...paragraphs: string[]) => paragraphs.join('\n\n')
const list = (...items: string[]) => items.map((item) => `- ${item}`).join('\n')

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
  cardText:
    'Le sarking isole le toit par-dessus les chevrons, côté extérieur : la charpente reste visible.',
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
    text: "Dans une maison peu isolée, le toit est souvent la première source de pertes de chaleur, et la première à surchauffer l'été. 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, isole les toitures avec des **isolants biosourcés** (issus du bois ou de plantes) : par l'extérieur avec le **sarking**, par l'intérieur sous les rampants, ou sur le plancher des combles. Avant d'isoler, **nous vérifions la charpente**.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Sarking ou intérieur : comparer',
      href: '/isolation-toiture-sarking/#comparatif',
    },
    proofs: [{ label: 'Qualifié RGE toitures' }, { label: 'Charpentiers depuis 2007' }],
    images: [HERO],
    caption: "Panneaux de fibre de bois sur une toiture ancienne, à L'Argentière-la-Bessée.",
  },

  tldr: "3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée, isole les toitures des Hautes-Alpes en fibre de bois, ouate de cellulose et laines végétales. Le sarking pose l'isolant par l'extérieur, au-dessus des chevrons : c'est la bonne option quand la couverture est à refaire. Sinon, nous isolons les rampants par l'intérieur ou les combles. Nous posons aussi les fenêtres de toit.",

  layout: [
    // 3.3 Le sarking, c'est quoi ?
    {
      type: 'manifesto',
      layout: 'split',
      kicker: "Le sarking, c'est quoi ?",
      title: "Le sarking : l'isolant **au-dessus** de la charpente",
      text: p(
        "Le sarking est une technique d'isolation de toiture par l'extérieur. On dépose la couverture, puis on pose des panneaux isolants rigides au-dessus des chevrons, en continu sur tout le pan de toit. On referme ensuite avec un écran de sous-toiture, une lame d'air ventilée et une couverture neuve. Le mot vient d'Écosse, où il désigne les planches posées sur les chevrons, sous l'ardoise.",
        'Ce que ça change :',
        list(
          "**l'isolant ne s'arrête pas aux chevrons** : il passe d'un seul tenant au-dessus de la charpente, ce qui limite les ponts thermiques ;",
          "**vous gardez tout le volume** sous la toiture, et la charpente reste visible depuis l'intérieur ;",
          "**le confort d'été progresse** : avec des panneaux de fibre de bois, denses, la chaleur du soleil met plus de temps à traverser le toit ;",
          '**les travaux se font par le dessus**, sans démonter les pièces habitées.',
        ),
      ),
      image: PANNEAUX_REFECTION,
    },
    // 3.3 (suite) Schéma en coupe : légendes, en attendant le dessin
    {
      type: 'list',
      style: 'numbered',
      inCard: true,
      text: 'Principe du sarking. La composition exacte dépend de chaque toiture.',
      items: [
        { text: 'Chevrons de la charpente, laissés apparents.' },
        {
          text: "Support (lambris ou panneau) et couche d'étanchéité à l'air, qui empêche l'air de la maison de traverser la paroi.",
        },
        { text: 'Panneaux de fibre de bois, posés en continu.' },
        { text: "Écran de sous-toiture, qui protège de l'eau." },
        { text: "Contre-lattes, qui créent une lame d'air ventilée." },
        { text: 'Liteaux.' },
        { text: 'Couverture : tuiles, ardoises, bac, bardeaux de mélèze…' },
      ],
    },
    // 3.4 Sarking ou rampants par l'intérieur ?
    {
      type: 'comparisonTable',
      anchor: 'comparatif',
      tone: 'light',
      kicker: 'Comment choisir',
      title: "Sarking ou rampants **par l'intérieur** ?",
      intro:
        "Les deux techniques font partie de notre qualification RGE : « isolation des toitures par l'extérieur » et « isolation par l'intérieur des murs ou rampants de toitures ou plafonds ». Le bon choix dépend surtout de l'état de votre couverture.",
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
        ['Hauteur du toit', 'Rehaussée : rives, faîtage et cheminées à raccorder', 'Inchangée'],
        ['Chantier', 'Toit ouvert, à caler sur la météo', "À l'abri, depuis l'intérieur"],
        [
          'Mairie',
          'Déclaration préalable le plus souvent',
          "En général rien, si l'aspect extérieur ne change pas",
        ],
      ],
    },
    // 3.4 (suite) Texte sous le tableau
    {
      type: 'textImage',
      tone: 'light',
      text: p(
        "**Par l'intérieur**, l'isolant se loge entre les chevrons, puis sous les chevrons pour couper les ponts thermiques. Il faut souvent gagner de l'épaisseur : on peut doubler la charpente, ce qui la renforce en même temps. Une couche d'étanchéité à l'air, côté pièce, empêche l'air chaud et humide de la maison de traverser l'isolant. On finit par un lambris ou un parement.",
        "**Dans les combles perdus**, quand le grenier n'est pas habité, on isole le plancher plutôt que le toit. La ouate de cellulose soufflée en vrac s'y prête bien : elle se glisse partout, autour des solives et des gaines.",
        "**Notre conseil :** si la couverture est en fin de vie, profitez-en pour isoler par l'extérieur. Si elle est saine, l'isolation par l'intérieur évite de la refaire.",
      ),
      images: [DOUBLAGE, ETANCHEITE_AIR],
      imagePosition: 'right',
      caption:
        "Doublage pour le renfort et l'isolation d'une toiture ancienne, à L'Argentière-la-Bessée.",
    },
    // 3.5 Couverture à refaire : le bon moment pour isoler
    {
      type: 'textImage',
      tone: 'cream',
      kicker: 'Rénovation de toiture',
      title: 'Couverture à refaire ? **Le bon moment** pour isoler',
      text: p(
        "Refaire une couverture demande un échafaudage, la dépose des tuiles, des ardoises ou des bardeaux, puis une repose. Le toit est ouvert, la charpente est accessible : c'est le moment d'isoler par l'extérieur, et de régler ce qui ne va pas dans la structure.",
        "En charpentiers, nous regardons d'abord la charpente : pièces abîmées, fermes à reprendre, sections trop faibles, débords de toit à refaire. En montagne, une toiture porte la neige tout l'hiver. Un isolant neuf ne doit pas cacher une structure fatiguée.",
        "À Briançon, sur une copropriété, nous avons repris la charpente et les fermes, isolé la toiture par soufflage après découverture, recréé une dépassée de toiture et refait la couverture. À Saint-Martin-de-Queyrières, la rénovation énergétique d'une toiture s'est accompagnée de l'ouverture d'une lucarne, avec des caissons d'isolation et une étanchéité à l'air.",
        "Les bois sains que l'on dépose ne partent pas forcément à la benne : avec [3B Récup'](/3b-recup/), nous les trions et les réemployons quand c'est possible.",
      ),
      images: [SOUFFLAGE, FERMES],
      imagePosition: 'right',
      caption: "Soufflage de l'isolant après découverture, sur une copropriété à Briançon.",
      cta: { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
    },
    // 3.6 Fenêtres de toit
    {
      type: 'textImage',
      anchor: 'fenetres-de-toit',
      tone: 'light',
      kicker: 'Fenêtres de toit',
      title: 'Des fenêtres de toit **bien raccordées**',
      text: p(
        "Les fenêtres de toit font partie de nos domaines RGE. Elles apportent la lumière sous les combles. Mais une fenêtre mal raccordée crée une fuite d'air et un pont thermique au milieu d'un toit bien isolé.",
        "La pose se joue dans la charpente et dans les raccords. Il faut un chevêtre autour de l'ouverture (un cadre en bois qui reprend les chevrons coupés), un encadrement, puis le raccord de l'isolant, de l'étanchéité à l'air et de l'écran de sous-toiture tout autour de la fenêtre.",
        "Sur la toiture ancienne isolée à L'Argentière-la-Bessée, une fenêtre de toit de 78 × 98 cm a été intégrée au rampant isolé. Lors de la réfection d'une charpente dans la même commune, nous avons posé les encadrements des fenêtres de toit et des panneaux de fibre de bois.",
      ),
      images: [VELUX, ENCADREMENTS_VELUX],
      imagePosition: 'left',
      caption:
        "Fenêtre de toit de 78 × 98 cm vue de dessous, dans un rampant isolé à L'Argentière-la-Bessée.",
      links: [
        {
          label: "Voir la réfection de charpente à L'Argentière-la-Bessée",
          href: '/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/',
        },
      ],
    },
    // 3.7 Les étapes d'un sarking (la note sous les étapes est placée dans l'introduction)
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'cream',
      kicker: "Déroulé d'un chantier",
      title: "Les étapes d'un **sarking**",
      intro:
        "Chaque toiture est différente. Voici, en général, comment se déroule une isolation de toiture par l'extérieur. Un toit ouvert doit être protégé à chaque étape. Un chantier de sarking se prépare donc avec la météo.",
      steps: [
        {
          title: 'Visite et relevé',
          text: 'État de la couverture, de la charpente et des points délicats : cheminées, noues, fenêtres de toit, débords.',
        },
        {
          title: 'Étude et devis',
          text: "Choix des panneaux et de leur épaisseur, détails des rives et des dépassées, démarches en mairie si l'aspect du toit change. Vous recevez un devis détaillé et un calendrier estimatif.",
        },
        {
          title: 'Dépose',
          text: 'Dépose de la couverture et tri des matériaux : ce qui peut resservir est mis de côté.',
        },
        {
          title: "Charpente et étanchéité à l'air",
          text: "Renfort ou reprise des pièces si besoin, puis pose du support et de la couche d'étanchéité à l'air.",
        },
        {
          title: 'Isolation',
          text: "Pose des panneaux de fibre de bois en continu, puis de l'écran de sous-toiture et des contre-lattes qui ventilent la couverture.",
          image: ETANCHEITE_EAU,
        },
        {
          title: 'Couverture et finitions',
          text: 'Liteaux, couverture neuve, raccords, rives et dépassées : le toit est refermé.',
          image: COUVERTURE,
        },
      ],
    },
    // 3.8 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      tone: 'light',
      kicker: 'Nos chantiers de toiture',
      title: 'Des toitures isolées **en photos**',
      items: [
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Doublage pour le renfort et l'isolation, panneaux de fibre de bois, étanchéité à l'air, étanchéité à l'eau et ventilation, fenêtre de toit de 78 × 98 cm.",
        },
        {
          project: 'renovation-d-une-copropriete-a-briancon',
          title: "Rénovation d'une copropriété à Briançon",
          text: "Reprise de la charpente et des fermes, soufflage de l'isolant après découverture, dépassée de toiture recréée, couverture neuve. Avec, en prime, une belle vue.",
        },
        {
          project: 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
          title: "Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières",
          text: "Caissons d'isolation et étanchéité à l'air, ouverture d'une lucarne, toiture terminée.",
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    // 3.8 Ligne « Voir aussi »
    {
      type: 'richText',
      tone: 'light',
      content:
        "Voir aussi : [Rénovation et isolation d'un chalet à Vallouise](/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/), avec 32 cm de laine de chanvre/lin/coton et de fibre de bois en toiture.",
    },
    // 3.9 Aides et RGE
    {
      type: 'cta',
      variant: 'slim',
      icon: 'euro',
      kicker: 'Aides et RGE',
      title: 'Isolation de toiture : **les aides**',
      text: "3B Charpente est qualifié RGE (Qualibat) pour l'isolation des toitures par l'extérieur, l'isolation par l'intérieur des rampants et des plafonds, et les fenêtres de toit. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles changent chaque année : faites le point avec un conseiller France Rénov' ([france-renov.gouv.fr](https://france-renov.gouv.fr/)) avant de signer un devis.",
      primary: {
        label: 'Notre guide des aides avec un artisan RGE',
        href: '/conseils/aides-renovation-artisan-rge/',
      },
    },
    // 3.10 FAQ
    {
      type: 'faq',
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
    // Liens internes : bloc « Prestations proches » (pied de contenu)
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Prestations proches',
      services: ['renovation-charpente-combles', 'isolation-murs-ite'],
    },
    // Liens internes : bloc « Pour aller plus loin » (pied de contenu)
    {
      type: 'list',
      style: 'bullets',
      title: 'Pour aller plus loin',
      items: [
        {
          text: '[Quel isolant biosourcé choisir en montagne ?](/conseils/isolant-biosource-montagne/)',
        },
      ],
    },
    // 3.11 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Votre toiture',
      title: 'Un toit à isoler **ou à refaire** ?',
      text: p(
        'Chaque projet chez 3B Charpente débute par une étude sur mesure. Contactez-nous par le site ou par téléphone : nous venons voir votre toiture et sa charpente, puis nous vous proposons un devis détaillé.',
        "[Toutes nos solutions d'isolation biosourcée](/isolation-biosourcee/)",
      ),
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'isolation-toiture-sarking-q1',
      topic: 'isolation',
      question: "Qu'est-ce que le sarking en toiture ?",
      answer:
        "Le sarking est une isolation de toiture par l'extérieur. Après dépose de la couverture, on pose des panneaux isolants rigides, souvent en fibre de bois, au-dessus des chevrons et sans interruption. On referme avec un écran de sous-toiture, une lame d'air ventilée et une couverture neuve. La charpente reste visible et le volume intérieur est conservé.",
    },
    {
      key: 'isolation-toiture-sarking-q2',
      topic: 'isolation',
      question: "Sarking ou isolation par l'intérieur : que choisir ?",
      answer:
        "Tout dépend de votre couverture. Si elle est à refaire, le sarking est logique : on isole pendant que le toit est ouvert, sans perdre de volume. Si elle est saine, l'isolation des rampants par l'intérieur évite de la déposer, mais réduit un peu la hauteur sous plafond et cache en général la charpente. Nous vous conseillons après une visite.",
    },
    {
      key: 'isolation-toiture-sarking-q3',
      topic: 'isolation',
      question: 'Faut-il refaire la couverture pour faire un sarking ?',
      answer:
        "Oui. Le sarking se pose au-dessus des chevrons, donc sous la couverture : il faut la déposer, puis la reposer ou la remplacer. C'est pourquoi il est surtout intéressant quand la toiture arrive en fin de vie. Certains matériaux de couverture ou bois en bon état peuvent parfois être réemployés : nous en parlons lors de la visite.",
    },
    {
      key: 'isolation-toiture-sarking-q4',
      topic: 'isolation',
      question: "Quelle épaisseur d'isolant pour une toiture en montagne ?",
      answer:
        "Il n'y a pas de chiffre unique : l'épaisseur dépend de l'isolant, de la charpente, de la technique choisie et de la performance visée. À titre d'exemple, sur un chalet des années 1980 à Vallouise, nous avons isolé la toiture avec 32 cm de laine de chanvre/lin/coton et de fibre de bois. Nous définissons l'épaisseur lors de l'étude de votre projet.",
    },
    {
      key: 'isolation-toiture-sarking-q5',
      topic: 'isolation',
      question: "Faut-il une autorisation pour isoler sa toiture par l'extérieur ?",
      answer:
        "Le plus souvent, oui. Un sarking rehausse la toiture de l'épaisseur de l'isolant et peut changer son aspect : une déclaration préalable de travaux est en général demandée en mairie, et les règles du plan local d'urbanisme s'appliquent. Dans certains secteurs protégés, l'avis de l'architecte des Bâtiments de France peut être requis. Renseignez-vous en mairie avant de lancer les travaux.",
    },
    {
      key: 'isolation-toiture-sarking-q6',
      topic: 'isolation',
      question: 'Le sarking donne-t-il droit à des aides ?',
      answer:
        "L'isolation des toitures par l'extérieur peut ouvrir droit à des aides publiques, sous conditions, quand elle est réalisée par une entreprise qualifiée RGE dans ce domaine. 3B Charpente l'est, avec la qualification RGE (Qualibat). Les montants et les conditions changent chaque année : renseignez-vous auprès d'un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis.",
    },
  ],

  validationPoints: [
    {
      question:
        "Sarking réalisé en rénovation : quels chantiers de la galerie sont de vrais sarkings ? En particulier la « toiture ancienne » de L'Argentière-la-Bessée, la lucarne de Saint-Martin-de-Queyrières (« caissons d'isolation ») et la réfection de charpente de L'Argentière-la-Bessée.",
      decision:
        "Aucun chantier n'est présenté comme un sarking : la page explique la technique en général et montre des chantiers de toiture réels, sans les requalifier.",
      priority: 'high',
    },
    {
      question:
        "Toiture ancienne de L'Argentière-la-Bessée : que désigne le « doublage pour le renfort et l'isolation » (doublage des chevrons ?) ? Quel isolant, quelle épaisseur ?",
      decision:
        "La page reprend seulement la légende de la photo, sans nommer l'isolant ni l'épaisseur.",
      priority: 'normal',
    },
    {
      question:
        'Copropriété de Briançon : quel isolant a été soufflé après découverture, et où (plancher des combles, rampants) ?',
      decision:
        "Texte limité à « isolé la toiture par soufflage après découverture », sans nommer l'isolant ni l'endroit.",
      priority: 'normal',
    },
    {
      question:
        "Saint-Martin-de-Queyrières : les caissons d'isolation sont-ils posés par l'extérieur ? Avec quel isolant ?",
      decision:
        "Présentés comme « caissons d'isolation et étanchéité à l'air », sans préciser le côté ni l'isolant.",
      priority: 'normal',
    },
    {
      question:
        'Panneaux de sarking : quels panneaux de fibre de bois 3B utilise-t-il (épaisseurs habituelles, fabricant) ?',
      decision: 'Aucune marque ni épaisseur citée. À ajouter plus tard pour enrichir la page.',
      priority: 'low',
    },
    {
      question:
        'Démarches en mairie : 3B prépare-t-il les plans ou les pièces de la déclaration préalable pour ses clients ?',
      decision:
        "L'étape 02 cite seulement les « démarches en mairie si l'aspect du toit change », sans dire qui les fait. Si 3B les prépare, l'ajouter à l'étape 02.",
      priority: 'normal',
    },
    {
      question:
        'Combles perdus : 3B fait-il des soufflages de ouate de cellulose en combles perdus ?',
      decision:
        "Présenté comme une option (isolation du plancher des combles perdus), sans chantier à l'appui.",
      priority: 'normal',
    },
    {
      question:
        'Fenêtres de toit : marque habituellement posée (la galerie mentionne « velux ») et accessoires proposés (volets, stores contre la chaleur) ?',
      decision: 'Terme générique « fenêtre de toit » ; aucune marque ni aucun accessoire cité.',
      priority: 'low',
    },
    {
      question:
        'Réfection de toiture « Ronatlon » : la commune est à vérifier. La « ferme en vieux bois » de ce chantier serait une belle preuve de réemploi pour la section « Couverture à refaire ».',
      decision:
        "Chantier non cité sur cette page (il s'affiche « Réfection d'une toiture en vieux bois », sans commune, selon les décisions Réalisations).",
      priority: 'low',
    },
    {
      question:
        "Qualification RGE : quel SIRET est rattaché (00024 dans l'annuaire ADEME, 00016 dans les mentions légales) ? Numéro et date de fin de validité du certificat Qualibat ?",
      decision:
        "Mention « qualifié RGE (Qualibat) » sans logo ni numéro de certificat : « QUALIBAT-RGE » des textes de la fiche est écrit « RGE (Qualibat) ». Aides toujours « sous conditions », avec renvoi vers France Rénov'.",
      priority: 'normal',
    },
    {
      question:
        "Schéma en coupe du sarking (section « Le sarking, c'est quoi ? ») à faire dessiner dans la charte, et photo d'un sarking en cours vu de l'extérieur à fournir.",
      decision:
        "En attendant, les sept couches du schéma sont affichées en liste numérotée, avec la photo de pose de panneaux de fibre de bois de la réfection de charpente de L'Argentière-la-Bessée.",
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
