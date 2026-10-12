/**
 * Fiche 23 · Guide « Quel isolant biosourcé choisir pour une maison de montagne ? »
 * Source : 3b-charpente-kit/docs/pages/23-guide-isolant-biosource-montagne.md
 * Le héros (titre, chapô, signature, date, photo) et le sommaire sont générés à partir des
 * champs de l'article et des titres ## des blocs de texte : ils ne figurent pas dans `layout`.
 */
import type { SeedArticle } from '../../types'

const HERO = 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG'

export const article: SeedArticle = {
  kind: 'article',
  slug: 'isolant-biosource-montagne',
  title:
    'Quel **isolant biosourcé** choisir pour une maison de montagne dans les **Hautes-Alpes** ?',
  topic: 'Isolation',
  menuLabel: 'Choisir un isolant biosourcé',
  excerpt:
    "Ouate de cellulose, fibre de bois, laines de chanvre, lin et coton : comment les choisir pour une maison exposée au froid de l'hiver et au soleil d'altitude. Par des charpentiers qui les posent.",
  cardSummary:
    "Ouate de cellulose, fibre de bois, chanvre, lin, coton : leurs usages, leurs points forts et la place de l'étanchéité à l'air.",
  image: HERO,
  tldr: "Il n'existe pas un meilleur isolant biosourcé, mais un isolant par paroi. En montagne, les panneaux de fibre de bois conviennent aux toits et aux murs isolés par l'extérieur : leur densité aide le confort d'été. La ouate de cellulose remplit combles et caissons sans vide. Les laines de chanvre, lin et coton garnissent les ossatures.",
  layout: [
    // Ce qu'une maison de montagne demande à son isolant
    {
      type: 'richText',
      anchor: 'besoins',
      content: `## Ce qu'une maison de montagne **demande à son isolant**

Dans les Hautes-Alpes, une maison vit **deux saisons exigeantes**. L'hiver est long, froid, souvent venteux. L'été, le soleil d'altitude frappe fort les toits et les façades sud : sous un toit mal isolé, les combles deviennent vite une étuve.

S'y ajoute l'humidité : l'air chaud de la maison cherche à traverser les parois froides, où sa vapeur peut condenser. Et beaucoup de maisons sont anciennes (murs en pierre, charpentes de pays, chalets des années 1970 et 1980) : leurs parois doivent pouvoir sécher.

Un bon isolant de montagne doit donc :

- isoler du froid avec une épaisseur raisonnable ;
- ralentir la chaleur d'été (on parle de déphasage) ;
- supporter l'humidité sans perdre ses qualités ;
- s'adapter à la paroi : toit, mur neuf, mur ancien, plancher.`,
    },
    // Biosourcé : de quoi parle-t-on ?
    {
      type: 'richText',
      anchor: 'definition',
      content: `## Biosourcé : **de quoi parle-t-on ?**

**Un isolant biosourcé est fabriqué à partir de matière issue du vivant**, le plus souvent végétale : bois, papier recyclé, chanvre, lin, coton, paille, laine de mouton…

Ces matériaux contiennent du carbone capté par les plantes pendant leur croissance. La plupart sont **hygroscopiques** : ils absorbent une partie de l'humidité de l'air, puis la restituent, sans perdre leurs qualités tant qu'elle reste modérée.

Chez 3B Charpente, nous posons surtout trois familles : la ouate de cellulose, la fibre de bois et les laines de chanvre, lin et coton. Dans la même logique, nous réemployons le bois issu de la déconstruction avec [3B Récup'](/3b-recup/).`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: 'Biosourcé ne veut pas dire « sans additif »',
      text: 'Selon les produits, les fabricants ajoutent des traitements contre le feu, les moisissures ou les insectes, ou des fibres de liaison qui tiennent les panneaux. Pour un produit précis, sa fiche technique fait foi.',
    },
    // La ouate de cellulose
    {
      type: 'richText',
      anchor: 'ouate-de-cellulose',
      content: `## La ouate de cellulose : **remplir sans laisser de vide**

Du papier recyclé, défibré puis traité. Elle se présente en vrac et se pose à la machine, de deux façons :

- **soufflée** sur le plancher des combles perdus, en couche épaisse ;
- **insufflée** sous pression dans un caisson fermé : mur à ossature, rampant de toit, doublage d'un mur ancien.`,
    },
    {
      type: 'prosCons',
      prosLabel: 'Ses points forts',
      consLabel: "Ses points d'attention",
      pros: [
        "Elle épouse chaque recoin : autour des solives, des gaines, des irrégularités d'un vieux mur",
        "Assez dense pour participer au confort d'été",
        "Elle gère bien l'humidité ambiante",
      ],
      cons: [
        'Elle se pose à la machine et demande un savoir-faire',
        'Insufflée trop peu dense dans un mur, elle peut se tasser et laisser un vide en haut du caisson',
        "Comme tout isolant, elle doit rester à l'abri des fuites d'eau",
      ],
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'isolation-d-un-bati-ancien-par-l-interieur/poutre en I.JPG',
          caption: 'Poutre en I',
        },
      ],
    },
    {
      type: 'callout',
      kind: 'site',
      text: "Pour isoler un bâti ancien par l'intérieur, nous avons monté une ossature en poutres en I, posé l'étanchéité à l'air, puis insufflé de la ouate de cellulose dans les caissons.",
      link: {
        label: 'Voir le chantier',
        href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
      },
    },
    // La fibre de bois
    {
      type: 'richText',
      anchor: 'fibre-de-bois',
      content: `## La fibre de bois : l'isolant qui **travaille aussi l'été**

Du bois défibré, souvent issu des chutes et des sous-produits de scierie. Elle existe sous deux formes :

- **en panneaux rigides**, denses, posés par l'extérieur : au-dessus des chevrons en sarking, ou sur les murs en ITE (isolation thermique par l'extérieur), sous un bardage ou un enduit ;
- **en panneaux souples**, qu'on appelle aussi laine de bois, glissés entre les chevrons ou les montants d'une ossature.`,
    },
    {
      type: 'prosCons',
      prosLabel: 'Ses points forts',
      consLabel: "Ses points d'attention",
      pros: [
        "Parmi les isolants biosourcés les plus denses : elle ralentit fortement la chaleur d'été",
        'Une couche continue devant la charpente ou les murs',
        "Certains panneaux reçoivent un enduit, d'autres servent de pare-pluie sous la couverture",
      ],
      cons: [
        'Les panneaux denses sont lourds et se posent avec soin, joints serrés',
        'À protéger de la pluie pendant le chantier, sauf indication contraire du fabricant',
      ],
    },
    {
      type: 'gallery',
      images: [
        {
          image:
            'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
          caption:
            "Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée",
        },
        {
          image:
            'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
          caption: "Remplissage en laine de bois dans l'ossature d'une surélévation à Briançon",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'site',
      text: "Fibre de bois sur une toiture ancienne et lors d'une réfection de charpente à L'Argentière-la-Bessée, laine de bois sur une surélévation à Briançon, enduit sur fibre de bois à Vallouise.\n\n[Isolation de toiture et sarking](/isolation-toiture-sarking/) · [Isolation des murs par l'extérieur](/isolation-murs-ite/)",
    },
    // Les laines de chanvre, lin et coton
    {
      type: 'richText',
      anchor: 'chanvre-lin-coton',
      content: `## Les laines de **chanvre, lin et coton**

Souvent mélangées, ces laines végétales se présentent en rouleaux ou en panneaux semi-rigides. On les glisse entre les montants d'une ossature, entre les chevrons ou dans les cloisons.`,
    },
    {
      type: 'prosCons',
      prosLabel: 'Leurs points forts',
      consLabel: "Leurs points d'attention",
      pros: [
        'Légères, agréables à manipuler, faciles à découper',
        'Elles comblent bien les ossatures',
        "Elles s'associent naturellement à la fibre de bois côté extérieur",
      ],
      cons: [
        "À épaisseur égale, elles ralentissent moins la chaleur d'été : sous un toit exposé, on les associe à un isolant plus dense",
        "Comme les autres, elles demandent une étanchéité à l'air continue côté pièce",
      ],
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
          caption:
            'Chalet des années 1980 isolé en laine de chanvre, lin et coton et en fibre de bois à Vallouise',
        },
      ],
    },
    {
      type: 'callout',
      kind: 'site',
      text: 'Sur un chalet des années 1980 à Vallouise : **28 cm** de laine de chanvre/lin/coton et de fibre de bois dans les murs, **32 cm** en toiture.',
      link: {
        label: 'Voir le chalet de Vallouise',
        href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/',
      },
    },
    // Le tableau comparatif
    {
      type: 'richText',
      anchor: 'comparatif',
      content: `## Le **tableau comparatif**

Une comparaison qualitative des familles d'isolants. La conductivité thermique, notée λ (lambda), dit combien un matériau laisse passer la chaleur : **plus elle est basse, plus l'isolant est performant** à épaisseur égale.`,
    },
    {
      type: 'comparisonTable',
      columns: [
        'Critère',
        'Ouate de cellulose',
        'Fibre de bois rigide',
        'Fibre de bois souple',
        'Laines de chanvre, lin et coton',
      ],
      rows: [
        [
          'Forme',
          'Vrac, soufflé ou insufflé',
          'Panneaux denses',
          'Panneaux souples',
          'Rouleaux, panneaux semi-rigides',
        ],
        [
          "Où on l'utilise",
          'Combles perdus, caissons, ossatures, doublage de murs anciens',
          'Sarking, ITE sous bardage ou enduit',
          'Entre chevrons, ossatures',
          'Ossatures, rampants, cloisons',
        ],
        [
          "Confort d'été, à épaisseur égale",
          'Bon',
          'Très bon',
          'Bon',
          'Correct, meilleur associé à un panneau dense',
        ],
        [
          'Humidité',
          'Hygroscopique, à protéger des fuites',
          'Hygroscopique, à protéger de la pluie en chantier',
          'Hygroscopique',
          'Hygroscopique',
        ],
        [
          'Pose',
          'Machine, savoir-faire spécifique',
          'Soignée, panneaux lourds',
          'Simple',
          'Simple',
        ],
        [
          'λ indicatif en W/(m·K)',
          'environ 0,038 à 0,042',
          'environ 0,038 à 0,050',
          'environ 0,036 à 0,040',
          'environ 0,038 à 0,042',
        ],
      ],
      note: 'Valeurs indicatives, selon fabricant. Pour un produit précis, seule sa fiche technique fait foi.',
    },
    // Confort d'été : le déphasage
    {
      type: 'richText',
      anchor: 'dephasage',
      content: `## Confort d'été : **le déphasage** expliqué simplement

**Le déphasage est le temps que met le pic de chaleur pour passer de l'extérieur à l'intérieur.** Plus il est long, plus la chaleur de l'après-midi arrive tard et affaiblie : le soir ou la nuit, quand on peut ouvrir pour rafraîchir.

Il dépend de l'épaisseur de l'isolant, mais aussi de sa **densité**. À épaisseur égale, la fibre de bois en panneaux et, dans une moindre mesure, la ouate de cellulose freinent davantage la chaleur que les isolants très légers.

En montagne, le sujet compte surtout sous les toits : combles aménagés, chambres sous les rampants. L'isolant n'est pas seul en cause :

- des débords de toit qui font de l'ombre ;
- des volets et des protections solaires sur les fenêtres de toit ;
- une couverture bien ventilée.`,
    },
    {
      type: 'callout',
      kind: 'tip',
      text: 'Les fabricants indiquent parfois le déphasage de leurs compositions de toiture : demandez-le pour comparer deux solutions de même épaisseur.',
    },
    // L'étanchéité à l'air
    {
      type: 'richText',
      anchor: 'etancheite-air',
      content: `## L'étanchéité à l'air : **sans elle, aucun isolant** ne tient ses promesses

**Une couche continue qui empêche l'air intérieur de traverser les parois.** On la réalise avec une membrane, ou avec des panneaux aux joints collés, et des manchettes autour des gaines, des tuyaux et des poutres qui traversent.

Elle compte pour trois raisons :

- un isolant traversé par l'air isole moins bien ;
- l'air chaud porte de la vapeur d'eau, qui peut condenser dans la paroi froide et l'abîmer ;
- les courants d'air se sentent, surtout quand le vent souffle.

Avec les biosourcés, on choisit souvent un frein-vapeur **hygrovariable** : il freine la vapeur l'hiver et la laisse ressortir l'été, pour que la paroi sèche. Précieux dans le bâti ancien. Enfin, une maison bien étanche doit être bien ventilée.`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG",
          caption:
            "Pose de la membrane d'étanchéité à l'air sur l'ossature d'un bâti ancien isolé par l'intérieur",
        },
        {
          image:
            "surelevation-en-ossature-bois-d-une-maison-a-briancon/5.1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture.JPG",
          caption:
            "Panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'site',
      text: "Étanchéité à l'air posée sur un bâti ancien isolé par l'intérieur, sur une toiture ancienne à L'Argentière-la-Bessée, avec des caissons d'isolation à Saint-Martin-de-Queyrières, et en panneaux trois plis d'épicéa sur une surélévation à Briançon.",
    },
    // Quel isolant pour quelle paroi ?
    {
      type: 'richText',
      anchor: 'par-paroi',
      content: `## Quel isolant pour **quelle paroi** ?

Il n'y a pas de règle unique : chaque paroi se diagnostique. Voici les choix les plus courants, à confirmer lors d'une visite.`,
    },
    {
      type: 'list',
      style: 'definitions',
      items: [
        {
          title: "Toiture par l'extérieur (sarking)",
          text: 'Panneaux de fibre de bois rigides, continus au-dessus des chevrons.',
        },
        {
          title: "Rampants par l'intérieur",
          text: "Laine de bois ou de chanvre, lin et coton entre et sous les chevrons, ou ouate insufflée en caissons ; étanchéité à l'air côté pièce.",
        },
        { title: 'Combles perdus', text: 'Ouate de cellulose soufflée sur le plancher.' },
        {
          title: "Murs par l'extérieur (ITE)",
          text: 'Panneaux de fibre de bois sous un bardage bois ou un enduit.',
        },
        {
          title: "Murs anciens par l'intérieur",
          text: 'Ossature indépendante, en poutres en I par exemple, remplie de ouate ou de laine végétale, avec un frein-vapeur adapté.',
        },
        {
          title: 'Ossature neuve ou surélévation',
          text: 'Laines végétales ou laine de bois entre les montants, fibre de bois côté extérieur.',
        },
      ],
    },
    {
      type: 'richText',
      content: `[Isolation de toiture et sarking](/isolation-toiture-sarking/) · [Isolation des murs par l'extérieur](/isolation-murs-ite/) · [Maison ossature bois](/maison-ossature-bois/) · [Extension et surélévation bois](/extension-surelevation-bois/)`,
    },
    // Sur nos chantiers
    {
      type: 'richText',
      anchor: 'chantiers',
      content: `## Ce que nous avons **posé**`,
    },
    {
      type: 'projects',
      mode: 'manual',
      label: 'brand',
      items: [
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: "Rénovation et isolation d'un chalet à Vallouise",
          text: '28 cm de laines végétales et fibre de bois dans les murs, 32 cm en toiture.',
        },
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Poutres en I, étanchéité à l'air, ouate de cellulose insufflée.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Fibre de bois, étanchéités à l'air et à l'eau, ventilation.",
        },
      ],
    },
    {
      type: 'richText',
      content: `**Voir aussi :** [Surélévation en ossature bois d'une maison à Briançon](/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/), avec remplissage en laine de bois.`,
    },
    // Et les aides ?
    {
      type: 'richText',
      anchor: 'aides',
      boxed: true,
      content: `## Et **les aides** ?

L'isolation biosourcée peut bénéficier d'aides publiques, sous conditions. Pour la plupart, l'entreprise doit être **qualifiée RGE** pour les travaux concernés : c'est le cas de 3B Charpente (QUALIBAT-RGE) pour l'isolation des murs et des toitures.

Les règles changent chaque année : voyez un conseiller France Rénov' ([france-renov.gouv.fr](https://france-renov.gouv.fr/)) avant de signer un devis.

[Lire notre guide des aides avec un artisan RGE](/conseils/aides-renovation-artisan-rge/)`,
    },
    // FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **les isolants biosourcés**',
      faqs: [
        'isolant-biosource-montagne-q1',
        'isolant-biosource-montagne-q2',
        'isolant-biosource-montagne-q3',
        'isolant-biosource-montagne-q4',
        'isolant-biosource-montagne-q5',
        'isolant-biosource-montagne-q6',
      ],
    },
    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: "Besoin d'un avis **sur votre maison** ?",
      text: 'Nous venons voir vos parois, nous vous expliquons quel isolant convient à chacune, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: {
        label: 'Notre isolation biosourcée dans les Hautes-Alpes',
        href: '/isolation-biosourcee/',
      },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'isolant-biosource-montagne-q1',
      topic: 'guides',
      question: 'La ouate de cellulose est-elle un bon isolant ?',
      answer:
        "Oui, efficace et polyvalent. Faite de papier recyclé, elle se souffle en combles perdus ou s'insuffle dans des caissons fermés, qu'elle remplit sans vide. Elle participe au confort d'été et gère bien l'humidité. Sa qualité dépend surtout de la pose : densité respectée, caissons bien fermés, étanchéité à l'air soignée.",
    },
    {
      key: 'isolant-biosource-montagne-q2',
      topic: 'guides',
      question: 'Fibre de bois ou ouate de cellulose : que choisir ?',
      answer:
        "Les deux, souvent, selon la paroi. La fibre de bois en panneaux rigides convient aux poses par l'extérieur : sarking, murs sous bardage ou enduit. La ouate de cellulose remplit les combles perdus et les caissons fermés, utile dans le bâti ancien.",
    },
    {
      key: 'isolant-biosource-montagne-q3',
      topic: 'guides',
      question: "Quel isolant biosourcé pour le confort d'été sous un toit ?",
      answer:
        "Un isolant dense : à épaisseur égale, la fibre de bois en panneaux ralentit davantage la chaleur que les isolants légers (on parle de déphasage). La ouate de cellulose s'en sort bien aussi. Pensez aux protections solaires des fenêtres de toit, aux débords de toit et à l'aération la nuit.",
    },
    {
      key: 'isolant-biosource-montagne-q4',
      topic: 'guides',
      question: "Les isolants biosourcés craignent-ils l'humidité ?",
      answer:
        "Ils supportent l'humidité de l'air : ils en absorbent une partie puis la restituent. Mais aucun isolant ne doit rester mouillé. Il faut une couverture ou un parement contre la pluie, une étanchéité à l'air continue contre la condensation, et des parois qui sèchent. C'est une question de conception autant que de matériau.",
    },
    {
      key: 'isolant-biosource-montagne-q5',
      topic: 'guides',
      question: "L'isolation en chanvre est-elle adaptée à la montagne ?",
      answer:
        "Oui. La laine de chanvre, souvent mélangée au lin et au coton, se pose facilement entre montants ou chevrons. Plus légère, elle ralentit moins la chaleur d'été qu'un panneau dense : sous un toit exposé, on l'associe à la fibre de bois, comme sur un chalet de Vallouise que nous avons isolé.",
    },
    {
      key: 'isolant-biosource-montagne-q6',
      topic: 'guides',
      question: "Quelle épaisseur d'isolant pour une maison en montagne ?",
      answer:
        "Pas de chiffre unique : elle dépend de l'isolant, de la paroi, de la technique et de la performance visée. Exemple : sur un chalet des années 1980 à Vallouise, 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, 32 cm en toiture. L'épaisseur se fixe à l'étude.",
    },
  ],
  seo: {
    title: 'Quel isolant biosourcé choisir en montagne ? | 3B Charpente',
    description:
      "Ouate de cellulose, fibre de bois ou chanvre : quel isolant biosourcé choisir pour sa maison en montagne ? Conseils d'un charpentier RGE des Hautes-Alpes.",
    image: HERO,
  },
  photoAlts: [
    {
      photo: HERO,
      alt: "Insufflation de ouate de cellulose dans une ossature, lors de l'isolation d'un bâti ancien par l'intérieur",
      caption:
        "Insufflation de ouate de cellulose lors de l'isolation d'un bâti ancien par l'intérieur.",
    },
    {
      photo:
        'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      alt: "Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée",
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
      alt: "Remplissage en laine de bois dans l'ossature d'une surélévation à Briançon",
    },
    {
      photo: "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG",
      alt: "Pose de la membrane d'étanchéité à l'air sur l'ossature d'un bâti ancien isolé par l'intérieur",
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
      alt: 'Chalet des années 1980 isolé en laine de chanvre, lin et coton et en fibre de bois à Vallouise',
    },
  ],
  validationPoints: [
    {
      question:
        'Signature du guide : Jean accepte-t-il de signer ce guide de son nom (« Par Jean-Michel Tardy, charpentier, fondateur de 3B Charpente ») ?',
      decision:
        "Guide signé « L'équipe de 3B Charpente » (décision par défaut), auteur Organization dans les données structurées. La ligne d'auteur de la fiche (« Par 3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée · Mis à jour en octobre 2026 ») est remplacée par la signature et la date générées par le site.",
      priority: 'normal',
    },
    {
      question:
        'Citation de Jean (section « Sur nos chantiers ») : une ou deux phrases sur son choix d’isolants, par exemple pourquoi il associe la ouate et la fibre de bois.',
      decision:
        'Aucune citation fournie : le bloc citation est retiré. La section garde son titre, les cartes de réalisations et la ligne « Voir aussi ».',
      priority: 'normal',
    },
    {
      question:
        "Comparaison qualitative : Jean est-il d'accord avec les appréciations du tableau (confort d'été, pose) et avec le sens général des conseils paroi par paroi ?",
      decision:
        'Tableau et conseils publiés tels que rédigés, avec la note « Valeurs indicatives, selon fabricant ». En-tête de la première colonne ajouté pour l’affichage : « Critère ».',
      priority: 'normal',
    },
    {
      question:
        'Ouate de cellulose : 3B souffle-t-il et insuffle-t-il lui-même (machine en propre) ? Fait-il aussi des soufflages en combles perdus ?',
      decision:
        'Le guide ne dit pas que 3B possède la machine ni qu’il souffle en combles perdus. Seul le chantier d’isolation d’un bâti ancien par l’intérieur (ouate insufflée) est cité.',
      priority: 'normal',
    },
    {
      question: 'Marques et produits : Jean veut-il citer les fabricants de ses isolants ?',
      decision: 'Aucune marque citée.',
      priority: 'low',
    },
    {
      question: 'Autres isolants biosourcés (paille, liège, laine de mouton) : 3B en pose-t-il ?',
      decision:
        'Cités seulement comme exemples dans la définition. Le guide dit que 3B pose surtout trois familles.',
      priority: 'low',
    },
    {
      question: 'Frein-vapeur hygrovariable : est-ce la solution que 3B utilise habituellement ?',
      decision: 'Présenté comme une pratique courante, pas comme celle de 3B.',
      priority: 'low',
    },
    {
      question:
        'Page /conseils/ : à créer pour que le fil d’Ariane fonctionne, ou retirer ce niveau ?',
      decision: 'Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide.',
      priority: 'low',
    },
    {
      question:
        'Schémas « à dessiner » : courbe du déphasage (section 3.10) et coupe de maison « quel isolant pour quelle paroi » (section 3.12).',
      decision:
        'Ces schémas n’existent pas : non repris. À ajouter dans l’administration quand ils seront dessinés.',
      priority: 'low',
    },
    {
      question:
        'Photos à demander : les trois familles d’isolants en gros plan à l’atelier, une pose de laine de chanvre/lin/coton entre montants, un soufflage de ouate en combles perdus.',
      decision:
        'Photos existantes utilisées à la place ; la section « laines de chanvre, lin et coton » montre la façade nord et ouest du chalet de Vallouise en attendant une photo de pose.',
      priority: 'low',
    },
  ],
}
