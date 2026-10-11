import type { Metadata } from 'next'

import { ProjectView } from '@/components/templates/ProjectView'
import { getProjectBySlug, listPublished } from '@/lib/cms/queries'

import { projectMetadata, redirectOrNotFound } from '../../metadata-helpers'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const projects = await listPublished('projects').catch(() => [])
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug)
  return project ? projectMetadata(project) : { robots: { index: false } }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return redirectOrNotFound(`/realisations/${slug}/`)
  return <ProjectView project={project} />
}
