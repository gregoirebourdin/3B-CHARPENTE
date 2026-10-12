# Architecture du site 3B Charpente

Ce document décrit comment le site est construit : la pile technique et pourquoi, le modèle de contenu, les rôles, et ce qui se passe entre « Publier » dans l’administration et la page vue par un visiteur.

## 1. La pile technique, et pourquoi

| Brique | Choix | Raison |
|---|---|---|
| Site et rendu | **Next.js 16** (App Router, React 19, Turbopack) | Pages générées à l’avance puis servies depuis le réseau de Vercel : très rapides, idéales pour le référencement. Composants serveur : aucun JavaScript envoyé quand il n’est pas utile. |
| Administration | **Payload CMS 3** dans la même application | Administration en français, champs sur mesure, brouillons et versions, aperçu en direct, API locale typée. Pas de second service à héberger ni à mettre à jour. |
| Base de données | **PostgreSQL (Neon)**, créée depuis Vercel | Base gérée, sauvegardée, avec branches. Le schéma évolue par **migrations** versionnées (`src/migrations`), jamais par modification silencieuse. |
| Photos et fichiers | **Vercel Blob** (authentification OIDC) | Stockage durable des photos, servi par le réseau de Vercel. Les photos sont converties en WebP (2 400 px au plus) et déclinées en vignette 480 px et image de partage 1 200 × 630. |
| Hébergement | **Vercel** (fonctions en `fra1`, Francfort) | Déploiement à chaque envoi sur la branche, aperçus, tâches planifiées (sauvegarde quotidienne). |
| Style du site | **CSS Modules + jetons CSS** (`src/styles/tokens.css`) | Zéro dépendance de style côté visiteur, CSS minimal par page, thème jour et nuit. |
| Style de l’administration | **shadcn/ui** (Radix + Tailwind 4, préfixe `tw:`, sans remise à zéro) | Composants accessibles et cohérents. Tous les champs de saisie sont les nôtres (texte, listes, cases, choix), branchés automatiquement sur chaque fiche (`src/payload/utilities/customFields.ts`). |
| Éditeur de texte | **Tiptap 3** (`src/payload/admin/fields/RichTextField.tsx`) | Barre d’outils réduite à l’utile (gras, italique, listes, liens ; titres et citations pour les guides), liens choisis parmi les pages du site. Texte enregistré en JSON, affiché par le site sans JavaScript ; un lien vers une page suit cette page si son adresse change. |
| E-mails | **Resend** (si la clé est fournie) | Notification de chaque demande et accusé de réception au visiteur. |
| Polices | Nohemi (titres) et Inter (texte), **auto-hébergées** | Aucune requête vers un service tiers, pas de cookie, chargement optimisé par `next/font`. |

## 2. Organisation du dépôt

```
src/
  app/(site)/          pages publiques (accueil, [...path], réalisations, conseils, plan, robots, llms.txt, planche /styleguide/)
  app/(payload)/       administration Payload, styles de l’administration (admin-ui.css, custom.scss)
  components/          blocs, gabarits, en-tête, pied de page, éléments d’interface (props seulement, sans requête)
  lib/                 données (cms/queries.ts), SEO (seo/), horaires, liens, sauvegarde
  payload/             collections, réglages globaux, blocs, champs, crochets, administration (admin/)
  seed/                import du contenu initial (données transcrites des 27 fiches du kit + photos)
  migrations/          évolutions du schéma de la base
scripts/               seed.ts, backup.ts, restore.ts
3b-charpente-kit/      kit d’origine, en lecture seule
```

Les composants du site ne lisent jamais la base : chaque gabarit reçoit ses données en propriétés depuis `src/lib/cms/queries.ts`, mis en cache par requête.

## 3. Modèle de contenu

### Collections

| Collection | Rôle | Relations |
|---|---|---|
| `pages` | Accueil, 3B Récup’ et ses sous-pages, secteurs, à propos, contact, mentions, réalisations, conseils | `parent` (arborescence et fil d’Ariane), blocs de sections |
| `services` | Les 9 prestations (menu, cartes, pages) | blocs de sections, photo principale |
| `projects` | Les 23 réalisations | `commune`, `services` (la première est la principale), `heroImage`, `gallery[]`, `related` |
| `articles` | Les 4 guides conseils | photo, blocs, sommaire |
| `communes` | Communes des chantiers (filtres, carte, zone desservie) | page secteur |
| `faqs` | Questions fréquentes réutilisables (137) | appelées par les blocs « Questions fréquentes » ; données `FAQPage` |
| `team` | Équipe | — |
| `reviews` | Avis clients (vides au lancement : aucun avis n’est inventé) | — |
| `media` | Photos (texte alternatif obligatoire, légende, type : chantier, ambiance, portrait, visuel) | — |
| `validation-points` | Points restés ouverts dans le kit, avec la décision prudente appliquée | — |
| `users` | Comptes (identifiant ou e-mail) | — |
| `forms`, `form-submissions` | Formulaire de contact et demandes reçues (statut, notes, pièces jointes) | — |
| `redirects` | Redirections 301 (créées aussi automatiquement) | — |

### Réglages globaux (une seule source de vérité)

| Réglage | Contenu |
|---|---|
| `company` | Nom, adresse, téléphone, e-mail, horaires, fermetures, SIREN, qualification RGE et ses domaines, réseaux, fondateur |
| `header`, `footer` | Menu, bouton d’appel, colonnes et liens du pied de page |
| `proofs` | Preuves et labels (Qualibat RGE, Éco Artisan, depuis 2007…) |
| `seo-settings` | Modèle de titre, description par défaut, image de partage, vérifications Google et Bing |
| `analytics` | Mesure d’audience sans cookie (Plausible ou Umami), désactivée par défaut |
| `site-texts` | Toutes les petites phrases des gabarits (libellés, boutons, titres fixes), avec leur libellé en français |

Un numéro de téléphone changé dans « Coordonnées et horaires » change à la fois l’en-tête, le pied de page, la page Contact, les boutons d’appel et les données structurées.

### Blocs de sections (21)

`textImage`, `cards`, `servicesGrid`, `projects`, `projectsExplorer`, `steps`, `list`, `faq`, `cta`, `manifesto`, `spotlight`, `gallery`, `comparisonTable`, `quote`, `proofs`, `serviceArea`, `team`, `reviews`, `articles`, `contactForm`, `richText`.

Chaque bloc = une configuration dans `src/payload/blocks/` et un composant dans `src/components/blocks/`, reliés par `RenderBlocks.tsx`. La planche `/styleguide/` (non indexée) montre chaque bloc dans chacune de ses variantes avec le contenu réel.

## 4. Rôles

| Rôle | Peut | Ne peut pas |
|---|---|---|
| **Éditeur** (Jean-Michel, l’équipe) | Tout le contenu : pages, prestations, chantiers, conseils, photos, coordonnées, demandes, textes du site | Gérer les comptes des autres, les réglages techniques réservés |
| **Administrateur** | Tout, y compris les comptes et les réglages techniques | — |

Sécurité : verrouillage du compte 15 minutes après 5 échecs de connexion, session de 10 heures, `/admin` en `noindex` et interdit dans `robots.txt`, mots de passe jamais dans le dépôt (variables d’environnement chiffrées sur Vercel).

## 5. De « Publier » à la page vue

1. **Brouillon** : chaque modification est enregistrée automatiquement en brouillon (versions : 30 par document). Le site ne change pas.
2. **Aperçu** : bouton « Aperçu » ou aperçu en direct (téléphone, tablette, ordinateur), servis par `/site-api/preview` aux seuls comptes connectés.
3. **Publier** : un contrôle refuse la publication s’il manque la description Google ou si un lien interne est cassé (`hooks/publishGuards.ts`).
4. **Adresse** : changer le slug d’une page publiée crée automatiquement une redirection 301 de l’ancienne adresse vers la nouvelle (`hooks/routing.ts`).
5. **Régénération** : après chaque changement visible, tout le site est marqué à régénérer (`hooks/revalidate.ts`), ainsi que `sitemap.xml`, `robots.txt` et `llms.txt`. La page suivante servie est déjà à jour : quelques secondes, sans redéploiement.

## 6. Référencement et moteurs de réponse

- Titre et description propres à chaque page (50–60 et 140–155 caractères), adresse canonique, image de partage 1 200 × 630.
- Données structurées : entreprise (`GeneralContractor` / `RoofingContractor` avec horaires, zone desservie, qualification RGE, SIREN, fondateur), `WebSite`, `WebPage`, `BreadcrumbList`, `Service`, `CreativeWork` pour chaque chantier, `Article`, `FAQPage`, `HowTo`, `ItemList`.
- `sitemap.xml` et `robots.txt` générés depuis la base ; `llms.txt` résume l’entreprise et liste les pages pour les assistants.
- Encadré « En bref » en tête des pages : la réponse en deux phrases, citable telle quelle.

## 7. Sauvegardes

Chaque nuit (Vercel Cron, 2 h 17), `/site-api/backup` exporte tout le contenu, le chiffre avec une clé dérivée de `PAYLOAD_SECRET` et le dépose dans Vercel Blob ; les 30 dernières copies sont gardées. Restauration : `pnpm restore <adresse ou fichier>`. La base Neon garde en plus son propre historique.

## 8. Variables d’environnement

| Variable | Rôle |
|---|---|
| `DATABASE_URL` / `STORAGE_POSTGRES_URL` | Base Neon |
| `PAYLOAD_SECRET` | Chiffrement des sessions et des sauvegardes |
| `BLOB_STORE_ID` (OIDC) ou `BLOB_READ_WRITE_TOKEN` | Stockage des photos |
| `NEXT_PUBLIC_SITE_URL` | Adresse publique (canoniques, plan du site) |
| `SEED_ADMIN_PASSWORD`, `SEED_EDITOR_PASSWORD` | Mots de passe des comptes créés au premier import |
| `CRON_SECRET` | Authentifie l’appel de sauvegarde |
| `RESEND_API_KEY` | Envoi des e-mails (facultatif) |
| `SEED_FORCE` | À n’utiliser que pour un déploiement : réimporte le contenu initial |
