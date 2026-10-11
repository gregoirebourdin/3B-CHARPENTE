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
  title: "Réemployer le bois en construction : **ce qu'on peut réutiliser**, comment, et à quelles conditions",
  topic: 'Réemploi',
  menuLabel: 'Réemployer le bois',
  excerpt:
    "Une vieille charpente, un plancher de grange, un bardage grisé : dans un bâtiment qu'on rénove ou qu'on démolit, une partie du bois peut resservir. Encore faut-il savoir lequel, comment le récupérer et à quelles conditions le reposer. Ce guide répond à ces trois questions avec notre regard de charpentiers, en citant les règles officielles sans les exagérer.",
  cardSummary: 'Les mots du réemploi, les bois concernés, les cinq étapes et les conditions à réunir.',
  image: HERO,
  tldr: 'Réemployer le bois, c\'est remettre en œuvre dans un nouvel ouvrage une pièce qui a déjà servi : charpente, solives, planchers, bardages. Cela suppose de connaître le bâtiment avant travaux (diagnostic PEMD obligatoire au-delà de 1 000 m², diagnostic ressources sinon), de déposer avec soin, de trier et préparer les pièces, puis d\'adapter le projet au matériau.',
  layout: [
    // 3.4 Les mots du réemploi
    {
      type: 'richText',
      anchor: 'vocabulaire',
      content: `## Réemploi, recyclage, gisement : **les mots à connaître**`,
    },
    {
      type: 'list',
      style: 'definitions',
      items: [
        {
          title: 'Réemploi',
          text: 'remettre en œuvre un élément qui a déjà servi, sans le transformer en nouvelle matière. Une poutre redevient une pièce de charpente, ou devient un garde-corps.',
        },
        {
          title: 'Recyclage',
          text: 'transformer le matériau en matière première pour fabriquer autre chose. Le bois est alors broyé ou refaçonné, et la pièce disparaît en tant que telle.',
        },
        {
          title: 'Déconstruction sélective',
          text: 'démonter un bâtiment élément par élément, en séparant les matériaux, au lieu de le démolir.',
        },
        { title: 'Gisement', text: "l'ensemble des matériaux réemployables d'un bâtiment." },
        {
          title: 'Diagnostic PEMD',
          text: 'le repérage réglementaire des produits, équipements, matériaux et déchets avant certaines démolitions et rénovations significatives (détails plus bas).',
        },
        {
          title: 'Matériauthèque',
          text: 'un lieu qui collecte des matériaux de construction pour les remettre en circulation. On parle aussi de plateforme de réemploi ou de ressourcerie de matériaux.',
        },
      ],
    },
    {
      type: 'richText',
      content: `Le réemploi garde la pièce telle qu'elle est : c'est toute sa différence avec le recyclage, qui la transforme.`,
    },
    // 3.5 Quels bois peut-on réemployer ?
    {
      type: 'richText',
      anchor: 'quels-bois',
      content: `## Quels bois **peut-on réemployer** ?

Tout le bois d'un bâtiment n'est pas réemployable, mais beaucoup d'éléments peuvent l'être s'ils sont en bon état et déposés avec soin. Voici les grandes familles, celles que des charpentiers savent déposer.`,
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
      content: `Quelques repères pour lire ce tableau :

- la **ferme** est l'assemblage triangulé qui porte la toiture ; les **pannes** et les **chevrons** portent la couverture ; les **solives** portent un plancher ;
- une pièce longue et saine offre le plus de possibilités : elle peut être recoupée, l'inverse est impossible ;
- un bois peint ou traité demande un examen particulier avant tout réemploi, surtout pour un usage intérieur.

### Ce que le bois de réemploi devient

Sur les chantiers de 3B Charpente, le bois de réemploi est par exemple devenu un **bardage vieux bois** et un **garde-corps** dans une [maison rénovée à L'Argentière-la-Bessée](/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/), ou une **ferme de charpente en vieux bois** lors de la [réfection d'une toiture](/realisations/refection-d-une-toiture-a-ronatlon/).

[Voir ces réalisations](/3b-recup/bois-de-reemploi/#realisations)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
          caption: "Bardage en vieux bois sur une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
        },
        {
          image: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
          caption: 'Garde-corps en bois de réemploi',
        },
      ],
    },
    // 3.6 Comment : les cinq étapes
    {
      type: 'richText',
      anchor: 'etapes',
      content: `## Du bâtiment existant au nouvel ouvrage : **cinq étapes**`,
    },
    {
      type: 'steps',
      variant: 'timeline',
      steps: [
        {
          title: 'Diagnostic',
          text: "Connaître le gisement avant les travaux : ce qu'il y a, dans quel état, en quelle quantité. C'est le rôle du diagnostic PEMD quand il est obligatoire, du diagnostic ressources sinon.",
        },
        {
          title: 'Stratégie',
          text: 'Établir une feuille de route : ce qui sera déposé, dans quel ordre, et ce que chaque pièce pourra devenir.',
        },
        {
          title: 'Dépose',
          text: "Démonter l'ouvrage élément par élément, dans l'ordre inverse de sa construction, en préservant les pièces : c'est la déconstruction sélective.",
        },
        {
          title: 'Transformation',
          text: 'Trier, nettoyer et usiner les pièces pour les préparer à leur nouvel usage.',
        },
        {
          title: 'Repose',
          text: 'Remettre les pièces en œuvre, en adaptant le système constructif aux matériaux de réemploi.',
        },
      ],
    },
    {
      type: 'richText',
      content: `C'est la méthode que suit 3B Récup' : diagnostic, stratégie, intervention sur site, transformation dans nos ateliers, repose sur le chantier.

[La méthode 3B Récup'](/3b-recup/#methode)`,
    },
    // 3.7 À quelles conditions ?
    {
      type: 'richText',
      anchor: 'conditions',
      content: `## Les conditions **d'un réemploi réussi**

### 1. Connaître le bâtiment avant d'y toucher

Le **diagnostic PEMD** (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments dont la surface de plancher cumulée dépasse 1 000 m², ou de bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses.

En dessous de 1 000 m², on parle souvent de **diagnostic ressources** : un repérage volontaire des matériaux réemployables. C'est la démarche la plus réaliste pour une maison, une grange ou un petit bâtiment.`,
    },
    {
      type: 'richText',
      boxed: true,
      content: `**Les textes :** Le diagnostic PEMD est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021 et par les articles L. 126-34 et R. 126-12 du Code de la construction et de l'habitation. Pour les demandes d'autorisation déposées après le 1er juillet 2023, un formulaire de récolement est exigé : il rend compte de ce que sont réellement devenus les matériaux après les travaux.

[Tout savoir sur le diagnostic PEMD](/3b-recup/diagnostic-pemd/)`,
    },
    {
      type: 'richText',
      content: `### 2. Déposer sans abîmer

Une pièce cassée à la dépose est une pièce perdue. Une charpente tient par ses assemblages (tenons, mortaises, chevilles) : pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée. C'est un travail de charpentier, qui se prévoit dans le planning.

[La déconstruction sélective](/3b-recup/deconstruction-selective/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG",
          caption: "Dépose d'une ancienne charpente par les charpentiers de 3B Charpente à L'Argentière-la-Bessée",
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

Un vieux bois n'est ni bon ni mauvais par principe : tout dépend de la pièce. Le tri oriente chaque pièce vers l'usage qui lui convient ; le nettoyage la débarrasse de ce qui gêne ; l'usinage la remet à dimension et prépare ses assemblages.

### 4. Adapter le projet au matériau

Avec du bois neuf, on commande les sections dont on a besoin. Avec du bois de réemploi, on part des pièces disponibles : leurs longueurs, leurs sections et leur aspect guident le dessin de l'ouvrage. Plus cette adaptation est prévue tôt, plus le réemploi est simple.

### 5. Vérifier les pièces qui portent

Pour un usage porteur (une poutre, une solive, une ferme), la capacité de chaque pièce se juge au cas par cas. Avant de vous engager, demandez à l'entreprise comment elle vérifie les pièces de réemploi et comment son assurance couvre l'ouvrage. Une réponse claire est bon signe.

### 6. Le cadre de la RE2020

La RE2020, la réglementation environnementale 2020, pousse le secteur du bâtiment à réduire son impact carbone sur tout le cycle de vie des bâtiments. Le réemploi, qui prolonge la vie des matériaux et réduit les déchets, s'inscrit dans cette logique. Les règles de calcul dépassent le cadre de ce guide : votre architecte ou votre bureau d'études vous dira comment le réemploi est pris en compte dans votre projet.`,
    },
    // 3.8 Le réemploi du bois dans les Hautes-Alpes (acteurs cités de façon neutre)
    {
      type: 'manifesto',
      anchor: 'hautes-alpes',
      layout: 'columns',
      title: 'Le réemploi du bois **dans les Hautes-Alpes**',
      text: 'Granges, chalets, maisons de pays : quand on rénove dans les vallées des Hautes-Alpes, on rencontre souvent du bois ancien, en charpente, en plancher ou en bardage. Plusieurs acteurs travaillent sur le réemploi des matériaux du bâtiment, avec des métiers différents.',
      items: [
        {
          title: "Une plateforme de réemploi à L'Argentière-la-Bessée",
          text: "Une plateforme de réemploi des matériaux du bâtiment, portée par la ressourcerie La Miraille (association Environnement & Solidarité), se trouve 11 rue de la Série E, ZA des Sablonnières, à L'Argentière-la-Bessée.",
        },
        {
          title: 'Des réseaux régionaux',
          text: "L'association Raediviva fédère les acteurs du réemploi dans le BTP en Provence-Alpes-Côte d'Azur. PRECI est la plateforme régionale de l'économie circulaire de la Région Sud, animée par le CIRIDD.",
        },
        {
          title: 'Un charpentier qui déconstruit et réemploie',
          text: "3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007 : ses charpentiers évaluent, déposent, transforment et reposent le bois.",
        },
        {
          title: 'Une filière de bois neuf local',
          text: '3B Charpente travaille principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Réemploi et bois local se complètent.',
        },
      ],
    },
    {
      type: 'richText',
      content: `Ces acteurs ne font pas le même métier. Une plateforme de réemploi rassemble des matériaux et les remet en circulation ; un charpentier dépose le bois, le transforme et le pose dans un ouvrage. Pour un projet, savoir à qui s'adresser fait gagner du temps.`,
    },
    // 3.9 Particuliers : cinq questions avant de jeter vos vieilles poutres
    {
      type: 'richText',
      anchor: 'particuliers',
      content: `## Particuliers : **cinq questions** avant de jeter vos vieilles poutres`,
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          title: 'Mon bâtiment est-il concerné par le diagnostic PEMD ?',
          text: 'Au-delà de 1 000 m² de surface de plancher, ou si le bâtiment a accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, oui. Sinon, un diagnostic ressources, volontaire, vous aide à savoir quoi garder.',
        },
        {
          title: 'Le bois est-il sain ?',
          text: "Un charpentier sait repérer une pièce affaiblie. Faites regarder le bois avant de décider, plutôt qu'après la dépose.",
        },
        {
          title: 'Peut-il rester en place ?',
          text: 'Le meilleur réemploi est parfois de ne rien déposer : une charpente existante peut se rénover et se renforcer, par exemple pour aménager les combles.',
          link: { label: 'Rénover une charpente existante', href: '/renovation-charpente-combles/' },
        },
        {
          title: 'Où le stocker en attendant ?',
          text: "Au sec, à l'abri de la pluie et du sol, avec de l'air autour des pièces.",
        },
        {
          title: 'Que deviendra-t-il ?',
          text: 'Un bardage, un garde-corps, une charpente apparente, un plancher : le nouvel usage se décide avec le projet.',
          link: { label: "Le bois de réemploi chez 3B Récup'", href: '/3b-recup/bois-de-reemploi/' },
        },
      ],
      image: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      caption: "Reprise des fermes, rénovation d'une copropriété à Briançon",
    },
    // 3.10 Professionnels : prévoir le réemploi dès la faisabilité
    {
      type: 'richText',
      anchor: 'professionnels',
      content: `## Professionnels : prévoir le réemploi **dès l'étude de faisabilité**

Le réemploi se décide tôt. Une fois la démolition calée, il est souvent trop tard pour déposer avec soin. Architectes, maîtres d'ouvrage, collectivités, entreprises de construction et de démolition, cinq réflexes :`,
    },
    {
      type: 'list',
      style: 'checks',
      inCard: true,
      items: [
        { text: 'faire évaluer le gisement bois en même temps que le diagnostic, et non après ;' },
        { text: "prévoir dans le planning le temps d'une dépose soignée ;" },
        { text: "dessiner l'ouvrage avec les sections et les longueurs disponibles ;" },
        { text: 'organiser la logistique : évacuation, transport, stockage des pièces ;' },
        { text: 'garder trace de ce qui est réemployé, utile pour le formulaire de récolement quand il est exigé.' },
      ],
    },
    {
      type: 'richText',
      content: `C'est l'ambition de 3B Récup' : être associé aux déconstructions locales dès l'étude de faisabilité.`,
    },
    // 3.11 FAQ
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
    // 3.12 Appel à l'action
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      title: 'Un bâtiment, une grange, un projet ? **Parlons-en**',
      text: "3B Récup' accompagne les architectes, les maîtres d'ouvrage, les collectivités, les entreprises et les particuliers, de la dépose à la repose. Chaque projet débute par une étude sur mesure.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      secondary: { label: 'Parlons de votre bâtiment', href: '/contact/' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'reemploi-bois-construction-q1',
      topic: 'guides',
      question: 'Peut-on réutiliser une vieille charpente ?',
      answer:
        "Souvent, oui, en partie au moins. Tout dépend de l'état des pièces, de leurs sections et de la façon dont elles sont déposées. Une charpente démontée en suivant ses assemblages peut fournir des pièces de charpente, un bardage ou un garde-corps. Parfois, le meilleur réemploi est de garder la charpente en place et de la rénover.",
    },
    {
      key: 'reemploi-bois-construction-q2',
      topic: 'guides',
      question: 'Le bois de réemploi est-il aussi solide que le bois neuf ?',
      answer:
        "Ni plus ni moins par principe : tout dépend de chaque pièce et de l'usage prévu. Une pièce ancienne doit être examinée, triée et préparée avant d'être reposée. Pour un usage porteur, demandez à l'entreprise comment elle vérifie les pièces de réemploi et comment son assurance couvre l'ouvrage.",
    },
    {
      key: 'reemploi-bois-construction-q3',
      topic: 'guides',
      question: 'Le diagnostic PEMD est-il obligatoire pour une maison ?',
      answer:
        'Le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Une maison sous ce seuil, sans une telle activité, relève plutôt d\'un diagnostic ressources, volontaire.',
    },
    {
      key: 'reemploi-bois-construction-q4',
      topic: 'guides',
      question: "Qu'est-ce qu'une matériauthèque ?",
      answer:
        "Une matériauthèque est un lieu qui collecte des matériaux de construction pour les remettre en circulation. On parle aussi de plateforme de réemploi ou de ressourcerie de matériaux. À L'Argentière-la-Bessée, dans les Hautes-Alpes, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille, ZA des Sablonnières.",
    },
    {
      key: 'reemploi-bois-construction-q5',
      topic: 'guides',
      question: 'Où trouver du bois de réemploi dans les Hautes-Alpes ?',
      answer:
        "Plusieurs acteurs existent. À L'Argentière-la-Bessée, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille. 3B Récup', la filière de 3B Charpente installée dans la même commune, déconstruit, transforme et repose du bois de réemploi dans ses chantiers. À l'échelle régionale, Raediviva fédère les acteurs du réemploi dans le BTP.",
    },
    {
      key: 'reemploi-bois-construction-q6',
      topic: 'guides',
      question: 'Qui peut déposer une vieille charpente pour la réemployer ?',
      answer:
        "Un charpentier est bien placé : une charpente tient par ses assemblages, et il faut savoir comment elle a été taillée pour la démonter en préservant les pièces. Dans les Hautes-Alpes, les charpentiers de 3B Récup' déposent charpente, solivage, murs à ossature bois, couverture, isolation et parements, puis transforment le bois dans leurs ateliers.",
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
      alt: 'Ferme de charpente en vieux bois réemployée par 3B Charpente lors de la réfection d\'une toiture',
      caption: "Ferme de charpente en vieux bois, réfection d'une toiture par 3B Charpente.",
    },
    {
      photo: "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG",
      alt: "Dépose d'une ancienne charpente par les charpentiers de 3B Charpente à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
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
      decision: 'Conseils publiés tels que rédigés, présentés comme des conseils et non comme des règles.',
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
      decision: 'Date = date de mise en ligne. Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide.',
      priority: 'low',
    },
    {
      question: 'Durée de lecture : « 8 minutes » est une estimation à recalculer sur le texte final.',
      decision: 'Mention non transcrite : la ligne d’information est générée par le site.',
      priority: 'low',
    },
    {
      question: 'Vente de bois : adapter la FAQ « Où trouver du bois de réemploi dans les Hautes-Alpes ? » si la variante B de la fiche 14 est retenue.',
      decision: 'Variante A (pas de vente) : réponse publiée sans « et en propose aussi à la vente ».',
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
        "Formulation de la FAQ validée appliquée : « sciés par notre partenaire local, la Scierie Savoldelli » (fiche : « sciés par la Scierie Savoldelli »).",
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
