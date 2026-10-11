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
  title: "Quel **isolant biosourcé** choisir pour une maison de montagne dans les **Hautes-Alpes** ?",
  topic: 'Isolation',
  excerpt:
    "Ouate de cellulose, fibre de bois, laines de chanvre, lin et coton : les isolants biosourcés, fabriqués à partir de matières végétales, ne se valent pas partout. Voici comment les choisir pour une maison exposée au froid de l'hiver et au soleil d'altitude, expliqué par des charpentiers qui les posent.",
  cardSummary:
    "Ouate de cellulose, fibre de bois, chanvre, lin, coton : leurs usages, leurs points forts et la place de l'étanchéité à l'air.",
  image: HERO,
  tldr: "Il n'existe pas un meilleur isolant biosourcé, mais un isolant adapté à chaque paroi. En montagne, les panneaux de fibre de bois conviennent bien aux toitures et aux murs isolés par l'extérieur, car leur densité aide le confort d'été. La ouate de cellulose remplit combles et caissons sans vide. Les laines de chanvre, lin et coton garnissent les ossatures.",
  layout: [
    // 3.4 Ce qu'une maison de montagne demande à son isolant
    {
      type: 'richText',
      anchor: 'besoins',
      content: `## Ce qu'une maison de montagne **demande à son isolant**

Dans les Hautes-Alpes, une maison vit deux saisons exigeantes. L'hiver est long, froid, souvent venteux : l'isolant doit limiter les pertes de chaleur pendant de longs mois de chauffage. L'été, le soleil d'altitude frappe fort les toitures et les façades sud : sous un toit mal isolé, les combles deviennent vite une étuve.

S'y ajoutent l'humidité et la neige. L'air chaud et humide de la maison cherche à traverser les parois froides ; s'il y parvient, la vapeur d'eau peut condenser dans l'isolant. Enfin, beaucoup de maisons de la région sont anciennes : murs en pierre, charpentes de pays, chalets des années 1970 et 1980. Leurs parois doivent pouvoir sécher.

Un bon isolant de montagne doit donc :

- isoler du froid avec une épaisseur raisonnable ;
- ralentir la chaleur d'été (on parle de déphasage) ;
- supporter l'humidité sans perdre ses qualités ;
- s'adapter à la paroi : toit, mur neuf, mur ancien, plancher.`,
    },
    // 3.5 Biosourcé : de quoi parle-t-on ?
    {
      type: 'richText',
      anchor: 'definition',
      content: `## Biosourcé : **de quoi parle-t-on ?**

**Un isolant biosourcé est fabriqué à partir de matière issue du vivant, le plus souvent végétale** : bois, papier recyclé (lui-même issu du bois), chanvre, lin, coton, paille, laine de mouton… Ces matériaux contiennent du carbone capté par les plantes pendant leur croissance. La plupart sont aussi hygroscopiques : ils peuvent absorber une partie de l'humidité de l'air, puis la restituer, sans perdre leurs qualités tant que cette humidité reste modérée.

Biosourcé ne veut pas dire « sans additif ». Selon les produits, les fabricants ajoutent des traitements contre le feu, les moisissures ou les insectes, ou des fibres de liaison qui tiennent les panneaux. Pour un produit précis, sa fiche technique fait foi.

Chez 3B Charpente, nous posons surtout trois familles : la ouate de cellulose, la fibre de bois et les laines de chanvre, lin et coton. Dans la même logique, nous réemployons le bois issu de la déconstruction avec [3B Récup'](/3b-recup/).`,
    },
    // 3.6 La ouate de cellulose
    {
      type: 'richText',
      anchor: 'ouate-de-cellulose',
      content: `## La ouate de cellulose : **remplir sans laisser de vide**

La ouate de cellulose est fabriquée à partir de papier recyclé, défibré puis traité. Elle se présente en vrac et se pose à la machine, de deux façons :

- **soufflée** sur le plancher des combles perdus, en couche épaisse ;
- **insufflée** sous pression dans un caisson fermé : mur à ossature, rampant de toit, doublage d'un mur ancien.

**Ses points forts.** En vrac, elle épouse chaque recoin, autour des solives, des gaines et des irrégularités d'un vieux mur. Elle est assez dense pour participer au confort d'été, et elle gère bien l'humidité ambiante.

**Ses points d'attention.** Elle se pose avec une machine et demande un savoir-faire : insufflée trop peu dense dans un mur, elle peut se tasser et laisser un vide en haut du caisson. Comme tout isolant, elle doit rester à l'abri des fuites d'eau.`,
    },
    {
      type: 'gallery',
      images: [{ image: 'isolation-d-un-bati-ancien-par-l-interieur/poutre en I.JPG', caption: 'Poutre en I' }],
    },
    {
      type: 'richText',
      boxed: true,
      content: `**Sur nos chantiers :** pour isoler un bâti ancien par l'intérieur, nous avons monté une ossature en poutres en I, posé l'étanchéité à l'air (la couche qui empêche l'air de traverser la paroi, voir plus bas) et insufflé de la ouate de cellulose dans les caissons.

[Voir le chantier](/realisations/isolation-d-un-bati-ancien-par-l-interieur/)`,
    },
    // 3.7 La fibre de bois
    {
      type: 'richText',
      anchor: 'fibre-de-bois',
      content: `## La fibre de bois : l'isolant qui **travaille aussi l'été**

La fibre de bois est fabriquée à partir de bois défibré, souvent des chutes et des sous-produits de scierie. Elle existe sous deux formes :

- **en panneaux rigides**, denses, posés par l'extérieur : au-dessus des chevrons en sarking (l'isolation de toiture par l'extérieur), ou sur les murs en ITE (l'isolation thermique par l'extérieur), sous un bardage ou un enduit ;
- **en panneaux souples**, qu'on appelle aussi laine de bois, glissés entre les chevrons ou les montants d'une ossature.

**Ses points forts.** Les panneaux rigides font partie des isolants biosourcés les plus denses : ils ralentissent fortement la chaleur d'été. Ils forment une couche continue devant la charpente ou les murs. Certains sont conçus pour recevoir un enduit, d'autres pour servir de pare-pluie sous la couverture.

**Ses points d'attention.** Les panneaux denses sont lourds et se posent avec soin, joints serrés. Sauf indication contraire du fabricant, ils doivent être protégés de la pluie pendant le chantier, tant que la couverture ou le parement n'est pas posé.`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
          caption: "Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée",
        },
        {
          image: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
          caption: "Remplissage en laine de bois dans l'ossature d'une surélévation à Briançon",
        },
      ],
    },
    {
      type: 'richText',
      boxed: true,
      content: `**Sur nos chantiers :** panneaux de fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée et lors de la réfection d'une charpente dans la même commune ; remplissage en laine de bois sur une surélévation en ossature bois à Briançon ; enduit sur fibre de bois sur un chalet de Vallouise.

[Isolation de toiture et sarking](/isolation-toiture-sarking/) · [Isolation des murs par l'extérieur](/isolation-murs-ite/)`,
    },
    // 3.8 Les laines de chanvre, lin et coton
    {
      type: 'richText',
      anchor: 'chanvre-lin-coton',
      content: `## Les laines de **chanvre, lin et coton**

Ces laines végétales, souvent mélangées, se présentent en rouleaux ou en panneaux semi-rigides. On les glisse entre les montants d'une ossature, entre les chevrons ou dans les cloisons.

**Leurs points forts.** Elles sont légères, agréables à manipuler et faciles à découper. Elles comblent bien les ossatures et s'associent naturellement à des panneaux de fibre de bois posés côté extérieur.

**Leurs points d'attention.** Plus légères que la fibre de bois en panneaux, elles ralentissent moins la chaleur d'été à épaisseur égale. Sous une toiture exposée, on les associe volontiers à un isolant plus dense. Elles demandent, comme les autres, une étanchéité à l'air continue côté pièce.`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
          caption: 'Chalet des années 1980 isolé en laine de chanvre, lin et coton et en fibre de bois à Vallouise',
        },
      ],
    },
    {
      type: 'richText',
      boxed: true,
      content: `**Sur nos chantiers :** sur un chalet des années 1980 à Vallouise, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois, et la toiture 32 cm.

[Voir le chalet de Vallouise](/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/)`,
    },
    // 3.9 Le tableau comparatif
    {
      type: 'richText',
      anchor: 'comparatif',
      content: `## Le **tableau comparatif**

Le tableau compare les familles d'isolants de façon qualitative. La conductivité thermique, notée λ (lambda), indique la capacité d'un matériau à laisser passer la chaleur : plus elle est basse, plus l'isolant est performant à épaisseur égale.`,
    },
    {
      type: 'comparisonTable',
      columns: ['Critère', 'Ouate de cellulose', 'Fibre de bois rigide', 'Fibre de bois souple', 'Laines de chanvre, lin et coton'],
      rows: [
        ['Forme', 'Vrac, soufflé ou insufflé', 'Panneaux denses', 'Panneaux souples', 'Rouleaux, panneaux semi-rigides'],
        [
          "Où on l'utilise",
          'Combles perdus, caissons, ossatures, doublage de murs anciens',
          'Sarking, ITE sous bardage ou enduit',
          'Entre chevrons, ossatures',
          'Ossatures, rampants, cloisons',
        ],
        ["Confort d'été, à épaisseur égale", 'Bon', 'Très bon', 'Bon', 'Correct, meilleur associé à un panneau dense'],
        [
          'Humidité',
          'Hygroscopique, à protéger des fuites',
          'Hygroscopique, à protéger de la pluie en chantier',
          'Hygroscopique',
          'Hygroscopique',
        ],
        ['Pose', 'Machine, savoir-faire spécifique', 'Soignée, panneaux lourds', 'Simple', 'Simple'],
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
    // 3.10 Confort d'été : le déphasage (le schéma « à dessiner » n'existe pas : non repris)
    {
      type: 'richText',
      anchor: 'dephasage',
      content: `## Confort d'été : **le déphasage** expliqué simplement

L'été, la chaleur du soleil traverse la toiture ou le mur peu à peu. **Le déphasage est le temps que met le pic de chaleur pour passer de l'extérieur à l'intérieur.** Plus il est long, plus la chaleur de l'après-midi arrive tard et affaiblie : souvent en soirée ou la nuit, quand on peut ouvrir les fenêtres pour rafraîchir.

Le déphasage dépend de l'épaisseur de l'isolant, mais aussi de sa densité et de sa capacité à stocker la chaleur. C'est là que les isolants biosourcés denses, comme la fibre de bois en panneaux et, dans une moindre mesure, la ouate de cellulose, se distinguent des isolants très légers. À épaisseur égale, ils freinent davantage la chaleur.

En montagne, le sujet compte surtout sous les toitures : combles aménagés, chambres sous les rampants, pièces mansardées. L'isolant n'est pas seul en cause : des débords de toit qui font de l'ombre, des volets, des protections solaires sur les fenêtres de toit et une couverture bien ventilée jouent aussi.

Les fabricants indiquent parfois le déphasage de leurs compositions de toiture : demandez-le pour comparer deux solutions de même épaisseur.`,
    },
    // 3.11 L'étanchéité à l'air
    {
      type: 'richText',
      anchor: 'etancheite-air',
      content: `## L'étanchéité à l'air : **sans elle, aucun isolant** ne tient ses promesses

**L'étanchéité à l'air est une couche continue qui empêche l'air intérieur de traverser les parois.** On la réalise avec une membrane, ou avec des panneaux dont les joints sont collés à l'adhésif, et des manchettes autour des gaines, des tuyaux et des poutres qui traversent.

Elle compte pour trois raisons. Un isolant traversé par l'air isole moins bien. L'air chaud de la maison transporte de la vapeur d'eau, qui peut condenser dans la paroi froide et l'abîmer avec le temps. Et les courants d'air se sentent, surtout quand le vent souffle.

Avec les isolants biosourcés, on choisit souvent une membrane frein-vapeur dite hygrovariable : elle freine la vapeur en hiver et la laisse ressortir en été, pour que la paroi puisse sécher. C'est particulièrement utile dans le bâti ancien. Enfin, l'étanchéité à l'air ne remplace pas la ventilation : une maison bien étanche doit être bien ventilée.`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG",
          caption: "Pose de la membrane d'étanchéité à l'air sur l'ossature d'un bâti ancien isolé par l'intérieur",
        },
        {
          image:
            "surelevation-en-ossature-bois-d-une-maison-a-briancon/5.1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture.JPG",
          caption: "Panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture",
        },
      ],
    },
    {
      type: 'richText',
      boxed: true,
      content: `**Sur nos chantiers :** pose de l'étanchéité à l'air sur un bâti ancien isolé par l'intérieur ; étanchéité à l'air d'une toiture ancienne à L'Argentière-la-Bessée ; caissons d'isolation et étanchéité à l'air à Saint-Martin-de-Queyrières ; panneaux trois plis en épicéa pour le contreventement et l'étanchéité à l'air de la toiture d'une surélévation à Briançon.`,
    },
    // 3.12 Quel isolant pour quelle paroi ? (schéma « à dessiner » non repris)
    {
      type: 'richText',
      anchor: 'par-paroi',
      content: `## Quel isolant pour **quelle paroi** ?

Il n'y a pas de règle unique : chaque paroi se diagnostique. Voici les choix les plus courants, à confirmer lors d'une visite.`,
    },
    {
      type: 'list',
      style: 'bullets',
      items: [
        {
          text: "**Toiture isolée par l'extérieur (sarking)** : panneaux de fibre de bois rigides, continus au-dessus des chevrons.",
        },
        {
          text: "**Rampants isolés par l'intérieur** : laine de bois ou laine de chanvre, lin et coton entre et sous les chevrons, ou ouate insufflée dans des caissons ; étanchéité à l'air côté pièce.",
        },
        { text: '**Combles perdus** : ouate de cellulose soufflée sur le plancher.' },
        { text: "**Murs isolés par l'extérieur (ITE)** : panneaux de fibre de bois sous un bardage bois ou un enduit." },
        {
          text: "**Murs anciens isolés par l'intérieur** : ossature indépendante, en poutres en I par exemple, remplie de ouate insufflée ou de laine végétale, avec un frein-vapeur adapté pour que le mur puisse sécher.",
        },
        {
          text: "**Ossature bois neuve ou surélévation** : laines végétales ou laine de bois entre les montants, et panneaux de fibre de bois côté extérieur.",
        },
      ],
    },
    {
      type: 'richText',
      content: `[Isolation de toiture et sarking](/isolation-toiture-sarking/) · [Isolation des murs par l'extérieur](/isolation-murs-ite/) · [Maison ossature bois](/maison-ossature-bois/) · [Extension et surélévation bois](/extension-surelevation-bois/)`,
    },
    // 3.13 Sur nos chantiers (citation de Jean non fournie : non reprise)
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
          text: '28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, 32 cm en toiture, bardage en mélèze et enduit sur fibre de bois.',
        },
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Ossature en poutres en I, étanchéité à l'air, ouate de cellulose insufflée.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Panneaux de fibre de bois, étanchéité à l'air, étanchéité à l'eau et ventilation.",
        },
      ],
    },
    {
      type: 'richText',
      content: `**Voir aussi :** [Surélévation en ossature bois d'une maison à Briançon](/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/), avec remplissage en laine de bois.`,
    },
    // 3.14 Et les aides ?
    {
      type: 'richText',
      anchor: 'aides',
      boxed: true,
      content: `## Et **les aides** ?

L'isolation avec des matériaux biosourcés peut bénéficier d'aides publiques à la rénovation énergétique, sous conditions. Pour la plupart, l'entreprise doit être qualifiée RGE pour les travaux concernés : c'est le cas de 3B Charpente, qualifié QUALIBAT-RGE pour l'isolation des murs et des toitures. Les règles changent chaque année : renseignez-vous auprès d'un conseiller France Rénov' ([france-renov.gouv.fr](https://france-renov.gouv.fr/)) avant de signer un devis.

[Lire notre guide des aides avec un artisan RGE](/conseils/aides-renovation-artisan-rge/)`,
    },
    // 3.15 FAQ
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
    // 3.16 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Votre projet',
      title: "Besoin d'un avis **sur votre maison** ?",
      text: `Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir vos parois, nous vous expliquons quel isolant convient à chacune et nous vous proposons un devis détaillé.

*« Construire durablement, c'est construire pour l'avenir. »*`,
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Notre isolation biosourcée dans les Hautes-Alpes', href: '/isolation-biosourcee/' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'isolant-biosource-montagne-q1',
      topic: 'guides',
      question: 'La ouate de cellulose est-elle un bon isolant ?',
      answer:
        "Oui, c'est un isolant efficace et polyvalent. Fabriquée à partir de papier recyclé, elle se souffle en combles perdus ou s'insuffle dans des caissons fermés (murs, rampants), qu'elle remplit sans laisser de vide. Elle participe au confort d'été et gère bien l'humidité ambiante. Sa qualité dépend beaucoup de la pose : densité respectée, caissons bien fermés, étanchéité à l'air soignée.",
    },
    {
      key: 'isolant-biosource-montagne-q2',
      topic: 'guides',
      question: 'Fibre de bois ou ouate de cellulose : que choisir ?',
      answer:
        "Les deux se complètent plus qu'elles ne s'opposent. La fibre de bois en panneaux rigides convient aux poses par l'extérieur : sarking en toiture, isolation des murs sous bardage ou enduit. La ouate de cellulose remplit les combles perdus et les caissons fermés, utile dans le bâti ancien. Sur une même maison, on utilise souvent les deux, selon la paroi.",
    },
    {
      key: 'isolant-biosource-montagne-q3',
      topic: 'guides',
      question: "Quel isolant biosourcé pour le confort d'été sous un toit ?",
      answer:
        "Sous une toiture exposée au soleil, privilégiez un isolant dense : à épaisseur égale, les panneaux de fibre de bois ralentissent davantage la chaleur que les isolants légers. On parle de déphasage. La ouate de cellulose s'en sort bien aussi. Pensez également aux protections solaires des fenêtres de toit, aux débords de toit et à l'aération pendant la nuit.",
    },
    {
      key: 'isolant-biosource-montagne-q4',
      topic: 'guides',
      question: "Les isolants biosourcés craignent-ils l'humidité ?",
      answer:
        "Ils supportent l'humidité de l'air : ils peuvent en absorber une partie puis la restituer. En revanche, aucun isolant ne doit rester mouillé. Il faut une couverture ou un parement qui protège de la pluie, une étanchéité à l'air continue côté pièce pour éviter la condensation, et des parois qui peuvent sécher. C'est une question de conception autant que de matériau.",
    },
    {
      key: 'isolant-biosource-montagne-q5',
      topic: 'guides',
      question: "L'isolation en chanvre est-elle adaptée à la montagne ?",
      answer:
        "Oui. La laine de chanvre, souvent mélangée au lin et au coton, se pose facilement entre les montants d'une ossature ou entre les chevrons. Légère, elle ralentit moins la chaleur d'été qu'un panneau dense : sous une toiture exposée, on l'associe volontiers à de la fibre de bois. C'est l'association retenue sur un chalet de Vallouise, isolé par nos soins.",
    },
    {
      key: 'isolant-biosource-montagne-q6',
      topic: 'guides',
      question: "Quelle épaisseur d'isolant pour une maison en montagne ?",
      answer:
        "Il n'y a pas de chiffre unique : l'épaisseur dépend de l'isolant, de la paroi, de la technique et de la performance visée. À titre d'exemple, sur un chalet des années 1980 à Vallouise, nous avons posé 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, et 32 cm en toiture. L'épaisseur se définit lors de l'étude.",
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
      caption: "Insufflation de ouate de cellulose lors de l'isolation d'un bâti ancien par l'intérieur.",
    },
    {
      photo: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      alt: "Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée",
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
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
        "Signature du guide : Jean accepte-t-il de signer ce guide de son nom (« Par Jean-Michel Tardy, charpentier, fondateur de 3B Charpente ») ?",
      decision:
        "Guide signé « L'équipe de 3B Charpente » (décision par défaut), auteur Organization dans les données structurées. La ligne d'auteur de la fiche (« Par 3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée · Mis à jour en octobre 2026 ») est remplacée par la signature et la date générées par le site.",
      priority: 'normal',
    },
    {
      question: 'Citation de Jean (section « Sur nos chantiers ») : une ou deux phrases sur son choix d’isolants, par exemple pourquoi il associe la ouate et la fibre de bois.',
      decision: 'Aucune citation fournie : le bloc citation est retiré. La section garde son titre, les cartes de réalisations et la ligne « Voir aussi ».',
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
      decision: 'Cités seulement comme exemples dans la définition. Le guide dit que 3B pose surtout trois familles.',
      priority: 'low',
    },
    {
      question: 'Frein-vapeur hygrovariable : est-ce la solution que 3B utilise habituellement ?',
      decision: 'Présenté comme une pratique courante, pas comme celle de 3B.',
      priority: 'low',
    },
    {
      question: 'Page /conseils/ : à créer pour que le fil d’Ariane fonctionne, ou retirer ce niveau ?',
      decision: 'Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide.',
      priority: 'low',
    },
    {
      question:
        'Schémas « à dessiner » : courbe du déphasage (section 3.10) et coupe de maison « quel isolant pour quelle paroi » (section 3.12).',
      decision: 'Ces schémas n’existent pas : non repris. À ajouter dans l’administration quand ils seront dessinés.',
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
