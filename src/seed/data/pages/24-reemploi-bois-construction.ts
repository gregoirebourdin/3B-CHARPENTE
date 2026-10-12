/**
 * Fiche 24 · Guide « Réemployer le bois en construction »
 * Source : 3b-charpente-kit/docs/pages/24-guide-reemploi-bois-construction.md
 * Le héros (titre, chapô, signature, date, photo) et le sommaire sont générés à partir des
 * champs de l'article et des titres ## des blocs de texte : ils ne figurent pas dans `layout`.
 */
import type { SeedArticle } from '../../types'

const HERO = 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG'

export const article: SeedArticle = {
  kind: 'article',
  slug: 'reemploi-bois-construction',
  title:
    "Réemployer le bois en construction : **ce qu'on peut réutiliser**, comment, et à quelles conditions",
  topic: 'Réemploi',
  menuLabel: 'Réemployer le bois',
  excerpt:
    "Une vieille charpente, un plancher de grange, un bardage grisé : une partie du bois peut resservir. Lequel, comment le récupérer, à quelles conditions le reposer ? Nos réponses de charpentiers, règles officielles à l'appui.",
  cardSummary:
    'Les mots du réemploi, les bois concernés, les cinq étapes et les conditions à réunir.',
  image: HERO,
  tldr: "Réemployer le bois, c'est remettre en œuvre une pièce qui a déjà servi : charpente, solives, planchers, bardages. Il faut connaître le bâtiment avant travaux (diagnostic PEMD obligatoire au-delà de 1 000 m², diagnostic ressources sinon), déposer avec soin, trier et préparer les pièces, puis adapter le projet au matériau.",
  layout: [
    // Les mots du réemploi
    {
      type: 'richText',
      anchor: 'vocabulaire',
      content: `## Réemploi, recyclage, gisement : **les mots à connaître**`,
    },
    {
      type: 'list',
      style: 'definitions',
      items: [
        {
          title: 'Réemploi',
          text: 'Remettre en œuvre un élément qui a déjà servi, sans le transformer. Une poutre redevient charpente, ou devient garde-corps.',
        },
        {
          title: 'Recyclage',
          text: 'Transformer le matériau en matière première : le bois est broyé ou refaçonné, la pièce disparaît.',
        },
        {
          title: 'Déconstruction sélective',
          text: 'Démonter un bâtiment élément par élément, en séparant les matériaux, au lieu de le démolir.',
        },
        { title: 'Gisement', text: "L'ensemble des matériaux réemployables d'un bâtiment." },
        {
          title: 'Diagnostic PEMD',
          text: 'Le repérage réglementaire des produits, équipements, matériaux et déchets avant certains travaux (détails plus bas).',
        },
        {
          title: 'Matériauthèque',
          text: 'Un lieu qui collecte des matériaux de construction pour les remettre en circulation : plateforme de réemploi, ressourcerie.',
        },
      ],
    },
    {
      type: 'callout',
      kind: 'definition',
      title: 'Réemploi ou recyclage ?',
      text: "Le réemploi **garde la pièce telle qu'elle est** : c'est toute sa différence avec le recyclage, qui la transforme.",
    },
    // Quels bois peut-on réemployer ?
    {
      type: 'richText',
      anchor: 'quels-bois',
      content: `## Quels bois **peut-on réemployer** ?

Tout le bois d'un bâtiment n'est pas réemployable, mais beaucoup d'éléments peuvent l'être, **s'ils sont en bon état et déposés avec soin**. Voici les familles que des charpentiers savent déposer.`,
    },
    {
      type: 'comparisonTable',
      columns: ['Famille', 'Exemples', "Ce qu'on regarde avant de réemployer"],
      rows: [
        [
          'Structure',
          'Charpente (fermes, pannes, chevrons), solivage, murs à ossature bois',
          "L'état du bois, les sections et les longueurs utiles, les entailles et assemblages existants",
        ],
        [
          'Couverture et isolation',
          'Couverture de la toiture, isolants en place',
          'Leur état, et la possibilité de les séparer proprement du bois',
        ],
        [
          'Parements',
          "Planchers, bardages, panneaux d'habillage",
          "L'épaisseur restante, les fixations, les finitions (peinture, vernis, traitement)",
        ],
      ],
    },
    {
      type: 'richText',
      content: `Quelques repères pour lire ce tableau :

- la **ferme** est l'assemblage triangulé qui porte la toiture ; les **pannes** et les **chevrons** portent la couverture ; les **solives** portent un plancher ;
- une pièce longue et saine offre le plus de possibilités : on peut la recouper, l'inverse est impossible ;
- un bois peint ou traité demande un examen particulier, surtout pour un usage intérieur.`,
    },
    {
      type: 'callout',
      kind: 'site',
      title: 'Ce que le bois de réemploi devient',
      text: "Un **bardage vieux bois** et un **garde-corps** dans une [maison rénovée à L'Argentière-la-Bessée](/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/), une **ferme de charpente en vieux bois** lors de la [réfection d'une toiture](/realisations/refection-d-une-toiture-a-ronatlon/).",
      link: { label: 'Voir ces réalisations', href: '/3b-recup/bois-de-reemploi/#realisations' },
    },
    {
      type: 'gallery',
      images: [
        {
          image:
            'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
          caption:
            "Bardage en vieux bois sur une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
        },
        {
          image:
            'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
          caption: 'Garde-corps en bois de réemploi',
        },
      ],
    },
    // Les cinq étapes
    {
      type: 'richText',
      anchor: 'etapes',
      content: `## Du bâtiment existant au nouvel ouvrage : **cinq étapes**`,
    },
    {
      type: 'steps',
      variant: 'timeline',
      steps: [
        {
          title: 'Diagnostic',
          text: 'Connaître le gisement avant les travaux : quoi, dans quel état, en quelle quantité. Diagnostic PEMD quand il est obligatoire, diagnostic ressources sinon.',
        },
        {
          title: 'Stratégie',
          text: 'Une feuille de route : ce qui sera déposé, dans quel ordre, pour devenir quoi.',
        },
        {
          title: 'Dépose',
          text: "Démonter élément par élément, dans l'ordre inverse de la construction, en préservant les pièces.",
        },
        {
          title: 'Transformation',
          text: 'Trier, nettoyer et usiner les pièces pour leur nouvel usage.',
        },
        {
          title: 'Repose',
          text: 'Remettre les pièces en œuvre, en adaptant le système constructif au matériau.',
        },
      ],
    },
    {
      type: 'richText',
      content: `C'est la méthode de 3B Récup' : diagnostic, stratégie, intervention sur site, transformation dans nos ateliers, repose sur le chantier. [La méthode 3B Récup'](/3b-recup/#methode)`,
    },
    // À quelles conditions ?
    {
      type: 'richText',
      anchor: 'conditions',
      content: `## Les conditions **d'un réemploi réussi**

### 1. Connaître le bâtiment avant d'y toucher

Le **diagnostic PEMD** (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative :

- des bâtiments de plus de 1 000 m² de surface de plancher cumulée ;
- des bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses.

En dessous, on parle souvent de **diagnostic ressources** : un repérage volontaire, la démarche la plus réaliste pour une maison, une grange ou un petit bâtiment.`,
    },
    {
      type: 'callout',
      kind: 'definition',
      title: 'Les textes',
      text: "Décrets n° 2021-821 et n° 2021-822 du 25 juin 2021, articles L. 126-34 et R. 126-12 du Code de la construction et de l'habitation. Depuis le 1er juillet 2023, un **formulaire de récolement** est exigé : ce que sont réellement devenus les matériaux après travaux.",
      link: { label: 'Tout savoir sur le diagnostic PEMD', href: '/3b-recup/diagnostic-pemd/' },
    },
    {
      type: 'richText',
      content: `### 2. Déposer sans abîmer

**Une pièce cassée à la dépose est une pièce perdue.** Une charpente tient par ses assemblages (tenons, mortaises, chevilles) : pour la démonter sans casse, il faut savoir comment elle a été taillée. C'est un travail de charpentier, qui se prévoit dans le planning. [La déconstruction sélective](/3b-recup/deconstruction-selective/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image:
            "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG",
          caption:
            "Dépose d'une ancienne charpente par les charpentiers de 3B Charpente à L'Argentière-la-Bessée",
        },
        {
          image: 'abris-voiture-a-l-argentiere-la-bessee/tenons mortaise chevillé.JPG',
          caption: 'Tenons mortaise chevillé',
        },
      ],
    },
    {
      type: 'richText',
      content: `### 3. Trier et préparer chaque pièce

Un vieux bois n'est ni bon ni mauvais par principe : tout dépend de la pièce. Le **tri** l'oriente vers le bon usage, le **nettoyage** la débarrasse de ce qui gêne, l'**usinage** la remet à dimension et prépare ses assemblages.

### 4. Adapter le projet au matériau

Avec du bois neuf, on commande les sections voulues. Avec du réemploi, **on part des pièces disponibles** : leurs longueurs, leurs sections et leur aspect guident le dessin. Plus c'est prévu tôt, plus c'est simple.

### 5. Vérifier les pièces qui portent

Pour une poutre, une solive ou une ferme, la capacité de chaque pièce se juge au cas par cas.`,
    },
    {
      type: 'callout',
      kind: 'tip',
      text: "Avant de vous engager, demandez à l'entreprise **comment elle vérifie les pièces de réemploi** et comment son assurance couvre l'ouvrage. Une réponse claire est bon signe.",
    },
    {
      type: 'richText',
      content: `### 6. Le cadre de la RE2020

La RE2020 pousse le bâtiment à réduire son impact carbone sur tout le cycle de vie. Le réemploi, qui prolonge la vie des matériaux et réduit les déchets, va dans ce sens. Les règles de calcul dépassent ce guide : votre architecte ou votre bureau d'études vous dira comment il est pris en compte dans votre projet.`,
    },
    // Le réemploi du bois dans les Hautes-Alpes
    {
      type: 'manifesto',
      anchor: 'hautes-alpes',
      layout: 'columns',
      title: 'Le réemploi du bois **dans les Hautes-Alpes**',
      text: 'Granges, chalets, maisons de pays : rénover dans les vallées, c’est souvent rencontrer du bois ancien. Plusieurs acteurs travaillent sur le réemploi, avec des métiers différents.',
      items: [
        {
          title: "Une plateforme de réemploi à L'Argentière-la-Bessée",
          text: 'Portée par la ressourcerie La Miraille (association Environnement & Solidarité), 11 rue de la Série E, ZA des Sablonnières.',
        },
        {
          title: 'Des réseaux régionaux',
          text: "Raediviva fédère les acteurs du réemploi dans le BTP en PACA. PRECI, animée par le CIRIDD, est la plateforme régionale de l'économie circulaire.",
        },
        {
          title: 'Un charpentier qui déconstruit et réemploie',
          text: "3B Récup', la filière de 3B Charpente : ses charpentiers évaluent, déposent, transforment et reposent le bois.",
        },
        {
          title: 'Une filière de bois neuf local',
          text: 'Surtout du mélèze et du sapin des Hautes-Alpes, sciés par la Scierie Savoldelli. Réemploi et bois local se complètent.',
        },
      ],
      emphasis:
        'Une plateforme remet des matériaux en circulation ; un charpentier dépose le bois, le transforme et le pose. Savoir à qui s’adresser fait gagner du temps.',
    },
    // Particuliers
    {
      type: 'richText',
      anchor: 'particuliers',
      content: `## Particuliers : **cinq questions** avant de jeter vos vieilles poutres`,
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          title: 'Mon bâtiment est-il concerné par le diagnostic PEMD ?',
          text: 'Oui au-delà de 1 000 m², ou après une activité agricole, industrielle ou commerciale avec des substances dangereuses. Sinon, un diagnostic ressources vous aide à savoir quoi garder.',
        },
        {
          title: 'Le bois est-il sain ?',
          text: 'Un charpentier sait repérer une pièce affaiblie. Faites-le regarder avant de décider, pas après la dépose.',
        },
        {
          title: 'Peut-il rester en place ?',
          text: 'Le meilleur réemploi est parfois de ne rien déposer : une charpente se rénove et se renforce.',
          link: {
            label: 'Rénover une charpente existante',
            href: '/renovation-charpente-combles/',
          },
        },
        {
          title: 'Où le stocker en attendant ?',
          text: "Au sec, à l'abri de la pluie et du sol, avec de l'air autour des pièces.",
        },
        {
          title: 'Que deviendra-t-il ?',
          text: 'Bardage, garde-corps, charpente apparente, plancher : le nouvel usage se décide avec le projet.',
          link: {
            label: "Le bois de réemploi chez 3B Récup'",
            href: '/3b-recup/bois-de-reemploi/',
          },
        },
      ],
      image: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      caption: "Reprise des fermes, rénovation d'une copropriété à Briançon",
    },
    // Professionnels
    {
      type: 'richText',
      anchor: 'professionnels',
      content: `## Professionnels : prévoir le réemploi **dès l'étude de faisabilité**

Le réemploi se décide tôt : une fois la démolition calée, il est souvent trop tard pour déposer avec soin. Architectes, maîtres d'ouvrage, collectivités, entreprises, cinq réflexes :`,
    },
    {
      type: 'list',
      style: 'checks',
      inCard: true,
      items: [
        { text: 'Faire évaluer le gisement bois avec le diagnostic, pas après' },
        { text: "Prévoir au planning le temps d'une dépose soignée" },
        { text: "Dessiner l'ouvrage avec les sections et longueurs disponibles" },
        { text: 'Organiser la logistique : évacuation, transport, stockage' },
        { text: 'Garder trace du réemploi, utile pour le formulaire de récolement' },
      ],
    },
    {
      type: 'richText',
      content: `C'est l'ambition de 3B Récup' : être associé aux déconstructions locales dès l'étude de faisabilité.`,
    },
    // FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Le réemploi du bois **en questions**',
      faqs: [
        'reemploi-bois-construction-q1',
        'reemploi-bois-construction-q2',
        'reemploi-bois-construction-q3',
        'reemploi-bois-construction-q4',
        'reemploi-bois-construction-q5',
        'reemploi-bois-construction-q6',
      ],
    },
    // Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      title: 'Un bâtiment, une grange, un projet ? **Parlons-en**',
      text: "3B Récup' accompagne architectes, maîtres d'ouvrage, collectivités, entreprises et particuliers, de la dépose à la repose.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      secondary: { label: 'Parlons de votre bâtiment', href: '/contact/' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'reemploi-bois-construction-q1',
      topic: 'guides',
      question: 'Peut-on réutiliser une vieille charpente ?',
      answer:
        "Souvent, au moins en partie. Tout dépend de l'état des pièces, de leurs sections et de la dépose. Démontée en suivant ses assemblages, une charpente fournit des pièces de charpente, un bardage ou un garde-corps. Parfois, le meilleur réemploi est de la garder en place et de la rénover.",
    },
    {
      key: 'reemploi-bois-construction-q2',
      topic: 'guides',
      question: 'Le bois de réemploi est-il aussi solide que le bois neuf ?',
      answer:
        "Ni plus ni moins par principe : tout dépend de la pièce et de l'usage. Une pièce ancienne s'examine, se trie et se prépare avant d'être reposée. Pour un usage porteur, demandez à l'entreprise comment elle vérifie les pièces et comment son assurance couvre l'ouvrage.",
    },
    {
      key: 'reemploi-bois-construction-q3',
      topic: 'guides',
      question: 'Le diagnostic PEMD est-il obligatoire pour une maison ?',
      answer:
        "Pas sous 1 000 m² de surface de plancher, sauf si elle a accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Une maison relève donc plutôt d'un diagnostic ressources, volontaire.",
    },
    {
      key: 'reemploi-bois-construction-q4',
      topic: 'guides',
      question: "Qu'est-ce qu'une matériauthèque ?",
      answer:
        "Un lieu qui collecte des matériaux de construction pour les remettre en circulation : on parle aussi de plateforme de réemploi ou de ressourcerie de matériaux. À L'Argentière-la-Bessée, une plateforme de ce type est portée par la ressourcerie La Miraille, ZA des Sablonnières.",
    },
    {
      key: 'reemploi-bois-construction-q5',
      topic: 'guides',
      question: 'Où trouver du bois de réemploi dans les Hautes-Alpes ?',
      answer:
        "À L'Argentière-la-Bessée, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille. 3B Récup', dans la même commune, déconstruit, transforme et repose du bois de réemploi sur ses chantiers. À l'échelle régionale, Raediviva fédère les acteurs du réemploi dans le BTP.",
    },
    {
      key: 'reemploi-bois-construction-q6',
      topic: 'guides',
      question: 'Qui peut déposer une vieille charpente pour la réemployer ?',
      answer:
        "Un charpentier : une charpente tient par ses assemblages, et il faut savoir comment elle a été taillée pour la démonter sans casse. Dans les Hautes-Alpes, les charpentiers de 3B Récup' déposent charpente, solivage, ossature, couverture, isolation et parements, puis transforment le bois à l'atelier.",
    },
  ],
  seo: {
    title: 'Réemploi du bois en construction : le guide | 3B Charpente',
    description:
      'Réemployer le bois en construction : quoi réutiliser, comment, à quelles conditions (PEMD, RE2020). Le guide de 3B Charpente, charpentier depuis 2007.',
    image: HERO,
  },
  photoAlts: [
    {
      photo: HERO,
      alt: "Ferme de charpente en vieux bois réemployée par 3B Charpente lors de la réfection d'une toiture",
      caption: "Ferme de charpente en vieux bois, réfection d'une toiture par 3B Charpente.",
    },
    {
      photo:
        "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG",
      alt: "Dépose d'une ancienne charpente par les charpentiers de 3B Charpente à L'Argentière-la-Bessée",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      alt: "Bardage en vieux bois sur une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
    },
  ],
  validationPoints: [
    {
      question:
        "Mention neutre de la plateforme de réemploi de L'Argentière-la-Bessée (La Miraille), de Raediviva et de PRECI : Jean est-il d'accord pour les citer ?",
      decision:
        'Cités de façon neutre comme acteurs du territoire (décision par défaut), jamais comme partenaires. Aucun lien externe vers leurs sites tant que les adresses exactes ne sont pas vérifiées.',
      priority: 'normal',
    },
    {
      question:
        'Relecture réglementaire : faire relire la condition 1 (section « À quelles conditions ? »), la question 1 des particuliers et la FAQ 3 par un diagnostiqueur PEMD, ou au regard du formulaire Cerfa de récolement et de la note de la SPREC.',
      decision: 'Textes publiés tels que rédigés dans la fiche, en attendant la relecture.',
      priority: 'high',
    },
    {
      question:
        'Conseils pratiques (bois peint ou traité, stockage au sec, vérification des pièces porteuses, assurance) : Jean les valide-t-il ? Souhaite-t-il ajouter son expérience (ce qu’il refuse de réemployer, par exemple) ?',
      decision:
        'Conseils publiés tels que rédigés, présentés comme des conseils et non comme des règles.',
      priority: 'normal',
    },
    {
      question: 'Auteur : guide signé « l’équipe de 3B Charpente » ou par Jean-Michel Tardy ?',
      decision:
        "Signé « L'équipe de 3B Charpente » (décision par défaut). La ligne d'information de la fiche (« Par l'équipe de 3B Charpente et 3B Récup', L'Argentière-la-Bessée · Mis à jour le … ») est remplacée par la signature et la date générées par le site.",
      priority: 'normal',
    },
    {
      question: 'Date de publication et page /conseils/ (liste des guides) pour le fil d’Ariane.',
      decision:
        'Date = date de mise en ligne. Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide.',
      priority: 'low',
    },
    {
      question:
        'Durée de lecture : « 8 minutes » est une estimation à recalculer sur le texte final.',
      decision: 'Mention non transcrite : la ligne d’information est générée par le site.',
      priority: 'low',
    },
    {
      question:
        'Vente de bois : adapter la FAQ « Où trouver du bois de réemploi dans les Hautes-Alpes ? » si la variante B de la fiche 14 est retenue.',
      decision:
        'Variante A (pas de vente) : réponse publiée sans « et en propose aussi à la vente ».',
      priority: 'low',
    },
    {
      question:
        "Meta description de la fiche : « Le guide de 3B Récup', charpentier depuis 2007 » associe 3B Récup' à 2007.",
      decision:
        "Remplacé par « Le guide de 3B Charpente, charpentier depuis 2007. » (décision : on n'écrit jamais « 3B Récup' depuis 2007 »). « À lire. » retiré pour rester sous 155 caractères.",
      priority: 'normal',
    },
    {
      question: 'Scierie Savoldelli : formulation de la carte « Une filière de bois neuf local ».',
      decision:
        'Formulation de la FAQ validée appliquée : « sciés par notre partenaire local, la Scierie Savoldelli » (fiche : « sciés par la Scierie Savoldelli »).',
      priority: 'low',
    },
    {
      question:
        'Liens optionnels « à ajouter si la mise en page le permet » : « mélèze et sapin des Hautes-Alpes » → /charpente-bois/ et « rénover un chalet ou une maison ancienne » → /conseils/renover-chalet-maison-ancienne/.',
      decision:
        'Non posés : les cartes du bandeau sombre n’acceptent pas de lien dans leur texte, et l’expression « rénover un chalet ou une maison ancienne » ne figure pas dans le texte du guide. Les deux autres liens optionnels (maison rénovée à L’Argentière-la-Bessée, réfection d’une toiture) sont dans le texte.',
      priority: 'low',
    },
    {
      question:
        'Photos à demander : pièces de vieux bois stockées correctement (sur cales, à l’abri), tri à l’atelier, plateforme de réemploi de L’Argentière-la-Bessée (avec l’accord de la structure).',
      decision: 'Photos existantes utilisées en attendant.',
      priority: 'low',
    },
  ],
}
