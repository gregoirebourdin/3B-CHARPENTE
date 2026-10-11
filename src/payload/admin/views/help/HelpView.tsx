import { SetStepNav } from '@payloadcms/ui'
import { ArrowRight, Camera, Clock, Image as ImageIcon, Inbox, PenLine, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import type { AdminViewServerProps } from 'payload'
import type { ReactNode } from 'react'

import { Button } from '../../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Alert, Disc, Page, PageHeader } from '../../ui/page'
import { cn, focusRing } from '../../ui/utils'
import { AdminShell } from '../AdminShell'

type Guide = { id: string; title: string; icon: ReactNode; intro: string; steps: ReactNode[]; href: string; action: string }

const GUIDES: Guide[] = [
  {
    id: 'demande',
    title: 'Répondre à une demande de devis',
    icon: <Inbox />,
    intro: 'Chaque demande envoyée depuis le site arrive dans « Demandes » et dans votre boîte e-mail.',
    steps: [
      <>
        Cliquez sur <strong>Demandes</strong> dans le menu de gauche. Les nouvelles ont un point vert.
      </>,
      <>Cliquez sur une demande pour l’ouvrir : le message, la commune et les photos jointes s’affichent.</>,
      <>
        Utilisez <strong>Appeler</strong> ou <strong>Répondre par e-mail</strong> : le numéro ou l’adresse sont déjà remplis.
      </>,
      <>
        Une fois la réponse faite, cliquez sur <strong>Marquer comme traitée</strong>. Elle passe dans l’onglet « Traitées ».
      </>,
    ],
    href: '/admin/demandes',
    action: 'Ouvrir les demandes',
  },
  {
    id: 'chantier',
    title: 'Ajouter un chantier',
    icon: <Camera />,
    intro: 'Trois étapes guidées. Rien n’est publié avant le dernier bouton.',
    steps: [
      <>
        Sur l’accueil, cliquez sur <strong>Ajouter un chantier</strong>.
      </>,
      <>Donnez un titre (« Ouvrage à Commune »), choisissez la commune et cochez les prestations.</>,
      <>Déposez vos photos dans l’ordre du chantier. La première est la photo principale ; glissez une photo par sa poignée pour changer l’ordre.</>,
      <>Écrivez une phrase de résumé et quelques phrases sur le projet. La description pour Google est proposée toute seule.</>,
      <>
        Cliquez sur <strong>Publier le chantier</strong>. Il apparaît sur la page Réalisations et sur les pages des prestations cochées.
      </>,
    ],
    href: '/admin/nouveau-chantier',
    action: 'Ajouter un chantier',
  },
  {
    id: 'horaires',
    title: 'Changer vos horaires ou votre téléphone',
    icon: <Clock />,
    intro: 'Une seule page pour tout le site : en-tête, pied de page, page Contact et Google.',
    steps: [
      <>
        Dans le menu, ouvrez <strong>Réglages</strong> puis <strong>Coordonnées et horaires</strong>.
      </>,
      <>Pour chaque jour, choisissez Ouvert ou Fermé, puis les heures. « Pause de midi » ajoute une seconde plage.</>,
      <>Pour des congés, ajoutez une fermeture exceptionnelle avec ses deux dates.</>,
      <>
        Cliquez sur <strong>Enregistrer</strong>. L’aperçu du pied de page montre ce que verront vos clients.
      </>,
    ],
    href: '/admin/horaires',
    action: 'Changer mes horaires',
  },
  {
    id: 'texte',
    title: 'Corriger un texte',
    icon: <PenLine />,
    intro: 'Les pages sont faites de sections : vous changez le texte, la mise en page reste en place.',
    steps: [
      <>
        Ouvrez <strong>Mon site</strong> puis <strong>Pages</strong> (ou <strong>Prestations</strong>, <strong>Chantiers</strong>, <strong>Conseils</strong>).
      </>,
      <>Cliquez sur la page, puis sur la section à corriger pour la déplier. Changez le texte.</>,
      <>Votre travail est enregistré tout seul en brouillon, au fur et à mesure. Le site ne change pas encore.</>,
      <>
        Cliquez sur <strong>Aperçu</strong> pour voir le résultat, puis sur <strong>Publier les modifications</strong>.
      </>,
    ],
    href: '/admin/collections/pages',
    action: 'Voir les pages',
  },
  {
    id: 'photo',
    title: 'Remplacer une photo',
    icon: <ImageIcon />,
    intro: 'Une photo remplacée change partout où elle est utilisée sur le site.',
    steps: [
      <>
        Dans le menu, ouvrez <strong>Photos</strong> et cherchez la photo par son nom ou sa description.
      </>,
      <>Ouvrez-la et déposez la nouvelle version à la place de l’ancienne.</>,
      <>Vérifiez la description de la photo : elle sert aux personnes aveugles et à Google.</>,
      <>
        Cliquez sur <strong>Enregistrer</strong>. Les pages qui utilisent cette photo suivent.
      </>,
    ],
    href: '/admin/collections/media',
    action: 'Ouvrir les photos',
  },
]

/** « Aide » : the five things Jean-Michel does, step by step, each with a button to do it now. */
export function HelpView(props: AdminViewServerProps) {
  return (
    <AdminShell {...props}>
      <Page>
        <SetStepNav nav={[{ label: 'Aide' }]} />
        <PageHeader
          title="Aide"
          description="Les cinq choses que l’on fait le plus souvent, étape par étape. Chaque guide se termine par un bouton qui vous y emmène."
        />

        <Alert icon={<ShieldCheck />}>
          <p>
            <strong>Vous ne pouvez rien casser.</strong> Les textes s’enregistrent en brouillon pendant que vous écrivez, et le site ne change qu’au moment où vous cliquez sur
            le bouton vert « Publier ». Une erreur ? L’onglet « Versions » d’une page permet de revenir en arrière.
          </p>
        </Alert>

        <div className="tw:grid tw:items-start tw:gap-6 tw:wide:grid-cols-[260px_minmax(0,1fr)]">
          <nav aria-label="Guides" className="tw:wide:sticky tw:wide:top-6">
            <ol className="tw:m-0 tw:grid tw:list-none tw:gap-0.5 tw:rounded-md tw:border tw:border-line tw:bg-card tw:p-2">
              {GUIDES.map((guide, index) => (
                <li key={guide.id}>
                  <a
                    href={`#${guide.id}`}
                    className={cn(
                      'tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:rounded-sm tw:px-3 tw:py-1.5 tw:text-base tw:font-medium tw:leading-[1.25] tw:text-ink tw:no-underline tw:hover:bg-surface',
                      focusRing,
                    )}
                  >
                    <span aria-hidden="true" className="tw:font-heading tw:text-[15px] tw:font-bold tw:text-leaf">
                      {index + 1}
                    </span>
                    {guide.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="tw:grid tw:gap-6">
            {GUIDES.map((guide) => (
              <Card key={guide.id} id={guide.id} className="tw:scroll-mt-6">
                <CardHeader>
                  <div className="tw:flex tw:items-center tw:gap-4">
                    <Disc tone="sage">{guide.icon}</Disc>
                    <div className="tw:grid tw:gap-0.5">
                      <CardTitle>{guide.title}</CardTitle>
                      <p className="tw:m-0 tw:text-[15px] tw:text-stone-text">{guide.intro}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="tw:m-0 tw:grid tw:list-none tw:gap-4 tw:p-0">
                    {guide.steps.map((step, index) => (
                      <li key={index} className="tw:flex tw:gap-3.5">
                        <span
                          aria-hidden="true"
                          className="tw:grid tw:size-[34px] tw:shrink-0 tw:place-items-center tw:rounded-full tw:bg-sage-soft tw:font-heading tw:text-base tw:font-bold tw:text-leaf"
                        >
                          {index + 1}
                        </span>
                        <p className="tw:m-0 tw:pt-1 tw:text-base tw:leading-normal">{step}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
                <CardFooter className="tw:justify-end">
                  <Button variant="outline" asChild>
                    <Link href={guide.href}>
                      {guide.action}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Page>
    </AdminShell>
  )
}
