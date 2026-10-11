import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_b_quote" ADD COLUMN "lead" varchar;
  ALTER TABLE "__pages_v_b_quote_v" ADD COLUMN "lead" varchar;
  ALTER TABLE "articles_b_quote" ADD COLUMN "lead" varchar;
  ALTER TABLE "__articles_v_b_quote_v" ADD COLUMN "lead" varchar;
  ALTER TABLE "services_b_quote" ADD COLUMN "lead" varchar;
  ALTER TABLE "__services_v_b_quote_v" ADD COLUMN "lead" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_b_quote" DROP COLUMN "lead";
  ALTER TABLE "__pages_v_b_quote_v" DROP COLUMN "lead";
  ALTER TABLE "articles_b_quote" DROP COLUMN "lead";
  ALTER TABLE "__articles_v_b_quote_v" DROP COLUMN "lead";
  ALTER TABLE "services_b_quote" DROP COLUMN "lead";
  ALTER TABLE "__services_v_b_quote_v" DROP COLUMN "lead";`)
}
