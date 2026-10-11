# Données initiales (seed)

Le contenu du site est transcrit **fidèlement** des fiches `3b-charpente-kit/docs/pages/*.md` dans des fichiers TypeScript typés, puis importé dans Payload par `scripts/seed.ts`. Après l'import, tout se modifie dans l'administration : ces fichiers ne servent qu'au premier lancement (et à reconstruire une base vierge).

- Format : `src/seed/types.ts` (lisez les conventions en tête du fichier).
- Contrôle : `pnpm tsx scripts/check-seed.ts [fichier…]` vérifie photos, liens, références et mentions « À VALIDER ».
- Plan du site (slugs) : `src/seed/data/routes.ts`. Communes : `src/seed/data/communes.ts`.

## Fichiers

| Dossier | Un fichier par | Export |
|---|---|---|
| `data/pages/NN-slug.ts` | fiche de page, de prestation ou de guide | `export const page: SeedPage` · `export const service: SeedService` · `export const article: SeedArticle` |
| `data/projects/NN-slug.ts` | réalisation (fiche 16, numéro de `realisations-source.md`) | `export const project: SeedProject` |
| `data/settings.ts` | réglages globaux, formulaire, redirections, points à valider généraux | |

## Règles de transcription

1. **Le texte vient des fiches, mot pour mot.** On peut raccourcir une phrase qui casse la mise en page, jamais ajouter un fait. Les espaces insécables des fiches sont conservées.
2. **Mentions `[À VALIDER …]` / `[À COMPLÉTER …]`** : on applique `docs/decisions-par-defaut.md` (sinon on retire la phrase ou l'élément sans laisser de trou) et on ajoute une entrée dans `validationPoints` : question + décision appliquée.
3. **Titres** : les mots entre `**` de la fiche restent entre `**` (ils passeront en vert). Dans les paragraphes, `**` = gras.
4. **Sections communes** (en-tête, pied de page, fil d'Ariane) : ne pas les transcrire, elles sont globales.
5. **Héros** de la fiche → `hero` (H1 = `hero.title`). **En bref** → `tldr`.
6. **FAQ** : chaque question devient une entrée `faqs` (clé unique `slug-q1`…, réponse en texte simple, sans Markdown), et la section FAQ devient un bloc `{ type: 'faq', faqs: [clés] }`.
7. **Photos** : uniquement les photos de `3b-charpente-kit/photos-chantiers` (référence = champ `fichier` de `manifest.json`). Textes alternatifs proposés par la fiche → `photoAlts`.
8. **Liens internes** : exactement ceux du tableau « Liens internes » de la fiche, avec les mêmes textes de lien.

## Correspondance composant de la fiche → bloc

| Dans la fiche (« Composant Framer ») | Bloc |
|---|---|
| Bloc deux colonnes texte + photo(s), photos superposées, « inversé » | `textImage` (`imagePosition`, `images` 1 ou 2, `badge` pour une pastille sur la photo) |
| Texte en deux colonnes sans photo, encadré | `textImage` avec `twoColumns: true`, ou `richText` (`boxed: true` pour un encadré clair à filet vert) |
| Cartes de services blanches avec icône en pastille (contenu libre) | `cards` (`variant: 'icon'`) |
| Trois cartes Bio / Bâti / Bois avec grande lettre | `cards` (`variant: 'letter'`, `eyebrow` = étymologie) |
| Cartes avec photo, cartes « matière » avec vignette | `cards` (`variant: 'photo'`) |
| Deux colonnes : photo à gauche, cartes en liste à droite | `cards` avec `asideImage` |
| Cartes « Réemployé » / « Non réemployable » (pastille pierre) | `cards` avec `muted: true` sur la carte grise |
| Grille des prestations (toutes) | `servicesGrid` (`mode: 'all'`) |
| Prestations liées (petites cartes) | `servicesGrid` (`mode: 'manual'`, `variant: 'compact'`, `services: [slugs]`) |
| Cartes de réalisations | `projects` (`mode: 'manual'`, `items` avec titre et texte de carte de la fiche) |
| Page Réalisations avec filtres et familles | `projectsExplorer` |
| Onglets numérotés 01 à 0N (méthode) | `steps` (`variant: 'tabs'`, `isHowTo: true` pour la méthode 3B Récup') |
| Liste numérotée verticale, frise | `steps` (`variant: 'timeline'`) ou `list` (`style: 'numbered'`) |
| Liste à puces, coches, définitions, pastilles | `list` (`style`), `inCard: true` pour « dans une grande carte blanche » |
| Tableau comparatif | `comparisonTable` |
| FAQ en accordéon | `faq` |
| Bandeau vert forêt d'appel à l'action | `cta` (`variant: 'band'`), `card` si « carte arrondie », `slim` si « bandeau étroit sur fond clair » |
| Bandeau 3B Récup' vert forêt dans une page | `cta` avec `badge: '3B Récup’'` |
| Bloc 3B Récup' mis en avant de l'accueil (étapes courtes + liens) | `spotlight` |
| Section plein cadre « forêt » sombre, titre blanc, mots en sauge | `manifesto` (`layout`: `centered`, `split` avec photo, `columns`) |
| Citation de Jean | `quote` |
| Bandeau de preuves (Depuis 2007 · Compagnons…) | `proofs` |
| Zone d'intervention + carte + cartes secteur | `serviceArea` |
| Équipe | `team` |
| Formulaire de contact + coordonnées | `contactForm` (`form: 'contact'`) |
| Corps d'article, mentions légales | `richText` (titres `##` et `###`) |
| Liste des guides | `articles` |
| Galerie photos | `gallery` |
