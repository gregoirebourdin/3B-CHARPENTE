import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" ADD COLUMN "menu_label" varchar;
  ALTER TABLE "_articles_v" ADD COLUMN "version_menu_label" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" DROP COLUMN "menu_label";
  ALTER TABLE "_articles_v" DROP COLUMN "version_menu_label";`)
}
