import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

import { isDoc } from '../lib/richtext'
import { isLexical, lexicalToTiptap, tiptapToLexical } from '../lib/richtext-lexical'
import { pathFor } from '../payload/utilities/routes'

type Db = MigrateUpArgs['db']
type Row = { id: number | string; value: unknown }

/** Every jsonb column of the schema: rich texts live in documents, versions and section tables alike. */
async function jsonColumns(db: Db) {
  const { rows } = await db.execute(sql`
    SELECT table_name, column_name FROM information_schema.columns
    WHERE table_schema = current_schema() AND data_type = 'jsonb'`)
  return rows as { table_name: string; column_name: string }[]
}

/** Current address of every document, for the internal links of the former editor. */
async function addresses(db: Db) {
  const map = new Map<string, string>()
  const read = async (collection: 'pages' | 'services' | 'projects' | 'articles', withPath: boolean) => {
    const { rows } = withPath
      ? await db.execute(sql`SELECT id, slug, path FROM ${sql.identifier(collection)}`)
      : await db.execute(sql`SELECT id, slug FROM ${sql.identifier(collection)}`)
    for (const row of rows as { id: number; slug?: string; path?: string }[]) {
      const path = pathFor(collection, row)
      if (path) map.set(`${collection}:${row.id}`, path)
    }
  }
  // One query at a time: the migration shares a single connection.
  await read('pages', true)
  await read('services', false)
  await read('projects', false)
  await read('articles', false)
  return map
}

async function convertColumns(db: Db, select: 'root' | 'doc', convert: (value: unknown) => unknown) {
  let count = 0
  for (const { table_name: table, column_name: column } of await jsonColumns(db)) {
    const where =
      select === 'root'
        ? sql`${sql.identifier(column)} -> 'root' IS NOT NULL`
        : sql`${sql.identifier(column)} ->> 'type' = 'doc'`
    const { rows } = await db.execute(sql`SELECT id, ${sql.identifier(column)} AS value FROM ${sql.identifier(table)} WHERE ${where}`)
    for (const row of rows as Row[]) {
      const next = convert(row.value)
      if (next === undefined) continue
      await db.execute(
        sql`UPDATE ${sql.identifier(table)} SET ${sql.identifier(column)} = ${next === null ? null : JSON.stringify(next)}::jsonb WHERE id = ${row.id}`,
      )
      count += 1
    }
  }
  return count
}

/** Every rich text written with the former editor (Lexical) becomes a Tiptap document. */
export async function up({ db, payload }: MigrateUpArgs): Promise<void> {
  const paths = await addresses(db)
  const count = await convertColumns(db, 'root', (value) =>
    isLexical(value) ? lexicalToTiptap(value, (relationTo, id) => paths.get(`${relationTo}:${id}`) ?? null) : undefined,
  )
  payload.logger.info(`[migration] ${count} texte(s) converti(s) au format Tiptap`)
}

export async function down({ db, payload }: MigrateDownArgs): Promise<void> {
  const count = await convertColumns(db, 'doc', (value) => (isDoc(value) ? tiptapToLexical(value) : undefined))
  payload.logger.info(`[migration] ${count} texte(s) remis au format Lexical`)
}
