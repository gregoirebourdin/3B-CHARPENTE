import { getArticles, getCompany, getPageByPath, getProjects, getSeoSettings, getServices } from '@/lib/cms/queries'
import { groupedHours } from '@/lib/hours'
import { absoluteUrl } from '@/lib/seo/site'
import { pathFor } from '@/payload/utilities/routes'

/**
 * /llms.txt: a plain-text summary of the company for AI assistants (GEO),
 * generated from the admin, with links to every key page.
 */
export async function GET() {
  const [company, settings, services, projects, articles, recup] = await Promise.all([
    getCompany(),
    getSeoSettings(),
    getServices(),
    getProjects(),
    getArticles(),
    getPageByPath('3b-recup'),
  ])
  const lines = [
    `# ${company.name}`,
    '',
    `> ${settings.llmsIntro || company.description || ''}`.trim(),
    '',
    '## Coordonnées',
    `- Adresse : ${company.address.street}, ${company.address.postalCode} ${company.address.city} (${company.address.region ?? ''})`,
    `- Téléphone : ${company.phone}`,
    `- E-mail : ${company.email}`,
    `- Horaires : ${groupedHours(company.hours).map((g) => `${g.days} ${g.hours}`).join(' ; ')}`,
    company.foundingYear ? `- Création : ${company.foundingYear}${company.founder ? `, par ${company.founder}` : ''}` : '',
    company.rge?.label ? `- Qualification : ${company.rge.label} (${(company.rge.domains ?? []).map((d) => d.label).join(' ; ')})` : '',
    '',
    '## Prestations',
    ...services.map((s) => `- [${s.title}](${absoluteUrl(pathFor('services', s) ?? '/')}) : ${s.tldr ?? s.cardText}`),
    '',
    recup ? `## 3B Récup’\n- [${recup.title}](${absoluteUrl('/3b-recup/')}) : ${recup.tldr ?? ''}\n` : '',
    '## Réalisations',
    ...projects.map((p) => `- [${p.title.replace(/\*\*/g, '')}](${absoluteUrl(pathFor('projects', p) ?? '/')}) : ${p.summary}`),
    '',
    '## Conseils',
    ...articles.map((a) => `- [${a.title.replace(/\*\*/g, '')}](${absoluteUrl(pathFor('articles', a) ?? '/')}) : ${a.cardSummary ?? a.excerpt}`),
    '',
    `## Contact\n- [Demander un devis](${absoluteUrl('/contact/')})`,
  ]
  return new Response(lines.filter((line) => line !== '').join('\n').replace(/\n(##)/g, '\n\n$1') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=86400' },
  })
}
