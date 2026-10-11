import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "hero_highlight_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_highlight_id" integer;
  ALTER TABLE "services" ADD COLUMN "hero_highlight_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN "version_hero_highlight_id" integer;
  ALTER TABLE "site_texts" ADD COLUMN "general_header_phone_label" varchar DEFAULT 'Appelez-nous';
  ALTER TABLE "site_texts" ADD COLUMN "general_hero_highlight_label" varchar DEFAULT 'Chantier';
  ALTER TABLE "site_texts" ADD COLUMN "general_faq_help_title" varchar DEFAULT 'Une autre question ?';
  ALTER TABLE "site_texts" ADD COLUMN "general_faq_help_text" varchar DEFAULT 'Appelez-nous ou écrivez-nous : nous vous répondons.';
  ALTER TABLE "site_texts" ADD COLUMN "general_faq_help_link" varchar DEFAULT 'Nous écrire';
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_highlight_id_projects_id_fk" FOREIGN KEY ("hero_highlight_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_highlight_id_projects_id_fk" FOREIGN KEY ("version_hero_highlight_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_highlight_id_projects_id_fk" FOREIGN KEY ("hero_highlight_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_highlight_id_projects_id_fk" FOREIGN KEY ("version_hero_highlight_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_highlight_idx" ON "pages" USING btree ("hero_highlight_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_highlight_idx" ON "_pages_v" USING btree ("version_hero_highlight_id");
  CREATE INDEX "services_hero_hero_highlight_idx" ON "services" USING btree ("hero_highlight_id");
  CREATE INDEX "_services_v_version_hero_version_hero_highlight_idx" ON "_services_v" USING btree ("version_hero_highlight_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_highlight_id_projects_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_highlight_id_projects_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_hero_highlight_id_projects_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_hero_highlight_id_projects_id_fk";
  
  DROP INDEX "pages_hero_hero_highlight_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_highlight_idx";
  DROP INDEX "services_hero_hero_highlight_idx";
  DROP INDEX "_services_v_version_hero_version_hero_highlight_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_highlight_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_highlight_id";
  ALTER TABLE "services" DROP COLUMN "hero_highlight_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_hero_highlight_id";
  ALTER TABLE "site_texts" DROP COLUMN "general_header_phone_label";
  ALTER TABLE "site_texts" DROP COLUMN "general_hero_highlight_label";
  ALTER TABLE "site_texts" DROP COLUMN "general_faq_help_title";
  ALTER TABLE "site_texts" DROP COLUMN "general_faq_help_text";
  ALTER TABLE "site_texts" DROP COLUMN "general_faq_help_link";`)
}
