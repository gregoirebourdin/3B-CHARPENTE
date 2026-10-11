import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_tone" AS ENUM('cream', 'forest');
  CREATE TYPE "public"."enum__pages_v_version_hero_tone" AS ENUM('cream', 'forest');
  CREATE TYPE "public"."enum_services_hero_tone" AS ENUM('cream', 'forest');
  CREATE TYPE "public"."enum__services_v_version_hero_tone" AS ENUM('cream', 'forest');
  ALTER TYPE "public"."enum_pages_b_cards_variant" ADD VALUE 'index' BEFORE 'plain';
  ALTER TYPE "public"."enum_pages_hero_variant" ADD VALUE 'map' BEFORE 'simple';
  ALTER TYPE "public"."enum___pages_v_b_cards_v_variant" ADD VALUE 'index' BEFORE 'plain';
  ALTER TYPE "public"."enum__pages_v_version_hero_variant" ADD VALUE 'map' BEFORE 'simple';
  ALTER TYPE "public"."enum_articles_b_cards_variant" ADD VALUE 'index' BEFORE 'plain';
  ALTER TYPE "public"."enum___articles_v_b_cards_v_variant" ADD VALUE 'index' BEFORE 'plain';
  ALTER TYPE "public"."enum_services_b_cards_variant" ADD VALUE 'index' BEFORE 'plain';
  ALTER TYPE "public"."enum_services_hero_variant" ADD VALUE 'map' BEFORE 'simple';
  ALTER TYPE "public"."enum___services_v_b_cards_v_variant" ADD VALUE 'index' BEFORE 'plain';
  ALTER TYPE "public"."enum__services_v_version_hero_variant" ADD VALUE 'map' BEFORE 'simple';
  CREATE TABLE "pages_hero_sheet" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_sheet" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "services_hero_sheet" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "_services_v_version_hero_sheet" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "hero_tone" "enum_pages_hero_tone" DEFAULT 'cream';
  ALTER TABLE "pages" ADD COLUMN "hero_photo_tag" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_backdrop_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_tone" "enum__pages_v_version_hero_tone" DEFAULT 'cream';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_photo_tag" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_backdrop_id" integer;
  ALTER TABLE "services" ADD COLUMN "hero_tone" "enum_services_hero_tone" DEFAULT 'cream';
  ALTER TABLE "services" ADD COLUMN "hero_photo_tag" varchar;
  ALTER TABLE "services" ADD COLUMN "hero_backdrop_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN "version_hero_tone" "enum__services_v_version_hero_tone" DEFAULT 'cream';
  ALTER TABLE "_services_v" ADD COLUMN "version_hero_photo_tag" varchar;
  ALTER TABLE "_services_v" ADD COLUMN "version_hero_backdrop_id" integer;
  ALTER TABLE "site_texts" ADD COLUMN "general_hero_sheet_label" varchar DEFAULT 'Fiche d’atelier';
  ALTER TABLE "site_texts" ADD COLUMN "general_hero_sheet_number" varchar DEFAULT 'N° {n}';
  ALTER TABLE "site_texts" ADD COLUMN "general_map_here" varchar DEFAULT 'Nos chantiers ici';
  ALTER TABLE "site_texts" ADD COLUMN "general_map_other" varchar DEFAULT 'Nos autres chantiers';
  ALTER TABLE "site_texts" ADD COLUMN "general_map_scale" varchar DEFAULT 'Schéma sans échelle';
  ALTER TABLE "site_texts" ADD COLUMN "general_directions" varchar DEFAULT 'Itinéraire';
  ALTER TABLE "site_texts" ADD COLUMN "general_toc_count" varchar DEFAULT '{n} rubriques';
  ALTER TABLE "site_texts" ADD COLUMN "project_map_current" varchar DEFAULT 'Ce chantier';
  ALTER TABLE "site_texts" ADD COLUMN "project_map_nearby" varchar DEFAULT 'Réalisations proches';
  ALTER TABLE "site_texts" ADD COLUMN "article_toc_cta" varchar DEFAULT 'Demander mon devis';
  ALTER TABLE "site_texts" ADD COLUMN "article_author_link" varchar DEFAULT 'Vérifier notre qualification';
  ALTER TABLE "site_texts" ADD COLUMN "article_more_kicker" varchar DEFAULT 'Pour aller plus loin';
  ALTER TABLE "site_texts" ADD COLUMN "article_more_title" varchar DEFAULT 'Nos autres **guides**';
  ALTER TABLE "site_texts" ADD COLUMN "article_more_link" varchar DEFAULT 'Tous nos conseils';
  ALTER TABLE "site_texts" ADD COLUMN "article_list_count" varchar DEFAULT '{n} guides';
  ALTER TABLE "site_texts" ADD COLUMN "article_list_topics" varchar DEFAULT 'par sujet';
  ALTER TABLE "site_texts" ADD COLUMN "article_list_featured" varchar DEFAULT 'À la une';
  ALTER TABLE "site_texts" ADD COLUMN "article_list_others" varchar DEFAULT 'Les autres guides';
  ALTER TABLE "site_texts" ADD COLUMN "article_list_toc" varchar DEFAULT 'Au sommaire';
  ALTER TABLE "site_texts" ADD COLUMN "explorer_by_family" varchar DEFAULT 'classés par famille';
  ALTER TABLE "site_texts" ADD COLUMN "form_phone_label" varchar DEFAULT 'Téléphone';
  ALTER TABLE "site_texts" ADD COLUMN "form_email_label" varchar DEFAULT 'E-mail';
  ALTER TABLE "site_texts" ADD COLUMN "form_address_label" varchar DEFAULT 'Adresse';
  ALTER TABLE "site_texts" ADD COLUMN "not_found_services_kicker" varchar DEFAULT 'Nos prestations';
  ALTER TABLE "site_texts" ADD COLUMN "not_found_projects_kicker" varchar DEFAULT 'Réalisations';
  ALTER TABLE "site_texts" ADD COLUMN "not_found_projects_link" varchar DEFAULT 'Voir nos réalisations';
  ALTER TABLE "site_texts" ADD COLUMN "not_found_contact_kicker" varchar DEFAULT 'Contact et devis';
  ALTER TABLE "site_texts" ADD COLUMN "not_found_recup_kicker" varchar DEFAULT '3B Récup’';
  ALTER TABLE "site_texts" ADD COLUMN "not_found_recup_link" varchar DEFAULT 'Découvrir 3B Récup’';
  ALTER TABLE "pages_hero_sheet" ADD CONSTRAINT "pages_hero_sheet_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_sheet" ADD CONSTRAINT "_pages_v_version_hero_sheet_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_hero_sheet" ADD CONSTRAINT "services_hero_sheet_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_hero_sheet" ADD CONSTRAINT "_services_v_version_hero_sheet_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_sheet_order_idx" ON "pages_hero_sheet" USING btree ("_order");
  CREATE INDEX "pages_hero_sheet_parent_id_idx" ON "pages_hero_sheet" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_sheet_order_idx" ON "_pages_v_version_hero_sheet" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_sheet_parent_id_idx" ON "_pages_v_version_hero_sheet" USING btree ("_parent_id");
  CREATE INDEX "services_hero_sheet_order_idx" ON "services_hero_sheet" USING btree ("_order");
  CREATE INDEX "services_hero_sheet_parent_id_idx" ON "services_hero_sheet" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_hero_sheet_order_idx" ON "_services_v_version_hero_sheet" USING btree ("_order");
  CREATE INDEX "_services_v_version_hero_sheet_parent_id_idx" ON "_services_v_version_hero_sheet" USING btree ("_parent_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_backdrop_id_media_id_fk" FOREIGN KEY ("hero_backdrop_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_backdrop_id_media_id_fk" FOREIGN KEY ("version_hero_backdrop_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_backdrop_id_media_id_fk" FOREIGN KEY ("hero_backdrop_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_backdrop_id_media_id_fk" FOREIGN KEY ("version_hero_backdrop_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_backdrop_idx" ON "pages" USING btree ("hero_backdrop_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_backdrop_idx" ON "_pages_v" USING btree ("version_hero_backdrop_id");
  CREATE INDEX "services_hero_hero_backdrop_idx" ON "services" USING btree ("hero_backdrop_id");
  CREATE INDEX "_services_v_version_hero_version_hero_backdrop_idx" ON "_services_v" USING btree ("version_hero_backdrop_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_hero_sheet" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_sheet" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_hero_sheet" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_services_v_version_hero_sheet" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_hero_sheet" CASCADE;
  DROP TABLE "_pages_v_version_hero_sheet" CASCADE;
  DROP TABLE "services_hero_sheet" CASCADE;
  DROP TABLE "_services_v_version_hero_sheet" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_backdrop_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_backdrop_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_hero_backdrop_id_media_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_hero_backdrop_id_media_id_fk";
  
  ALTER TABLE "pages_b_cards" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "pages_b_cards" ALTER COLUMN "variant" SET DEFAULT 'icon'::text;
  DROP TYPE "public"."enum_pages_b_cards_variant";
  CREATE TYPE "public"."enum_pages_b_cards_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  ALTER TABLE "pages_b_cards" ALTER COLUMN "variant" SET DEFAULT 'icon'::"public"."enum_pages_b_cards_variant";
  ALTER TABLE "pages_b_cards" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_pages_b_cards_variant" USING "variant"::"public"."enum_pages_b_cards_variant";
  ALTER TABLE "pages" ALTER COLUMN "hero_variant" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_variant" SET DEFAULT 'collage'::text;
  DROP TYPE "public"."enum_pages_hero_variant";
  CREATE TYPE "public"."enum_pages_hero_variant" AS ENUM('collage', 'photo', 'simple');
  ALTER TABLE "pages" ALTER COLUMN "hero_variant" SET DEFAULT 'collage'::"public"."enum_pages_hero_variant";
  ALTER TABLE "pages" ALTER COLUMN "hero_variant" SET DATA TYPE "public"."enum_pages_hero_variant" USING "hero_variant"::"public"."enum_pages_hero_variant";
  ALTER TABLE "__pages_v_b_cards_v" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "__pages_v_b_cards_v" ALTER COLUMN "variant" SET DEFAULT 'icon'::text;
  DROP TYPE "public"."enum___pages_v_b_cards_v_variant";
  CREATE TYPE "public"."enum___pages_v_b_cards_v_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  ALTER TABLE "__pages_v_b_cards_v" ALTER COLUMN "variant" SET DEFAULT 'icon'::"public"."enum___pages_v_b_cards_v_variant";
  ALTER TABLE "__pages_v_b_cards_v" ALTER COLUMN "variant" SET DATA TYPE "public"."enum___pages_v_b_cards_v_variant" USING "variant"::"public"."enum___pages_v_b_cards_v_variant";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_variant" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_variant" SET DEFAULT 'collage'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_variant";
  CREATE TYPE "public"."enum__pages_v_version_hero_variant" AS ENUM('collage', 'photo', 'simple');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_variant" SET DEFAULT 'collage'::"public"."enum__pages_v_version_hero_variant";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_variant" SET DATA TYPE "public"."enum__pages_v_version_hero_variant" USING "version_hero_variant"::"public"."enum__pages_v_version_hero_variant";
  ALTER TABLE "articles_b_cards" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "articles_b_cards" ALTER COLUMN "variant" SET DEFAULT 'icon'::text;
  DROP TYPE "public"."enum_articles_b_cards_variant";
  CREATE TYPE "public"."enum_articles_b_cards_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  ALTER TABLE "articles_b_cards" ALTER COLUMN "variant" SET DEFAULT 'icon'::"public"."enum_articles_b_cards_variant";
  ALTER TABLE "articles_b_cards" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_articles_b_cards_variant" USING "variant"::"public"."enum_articles_b_cards_variant";
  ALTER TABLE "__articles_v_b_cards_v" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "__articles_v_b_cards_v" ALTER COLUMN "variant" SET DEFAULT 'icon'::text;
  DROP TYPE "public"."enum___articles_v_b_cards_v_variant";
  CREATE TYPE "public"."enum___articles_v_b_cards_v_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  ALTER TABLE "__articles_v_b_cards_v" ALTER COLUMN "variant" SET DEFAULT 'icon'::"public"."enum___articles_v_b_cards_v_variant";
  ALTER TABLE "__articles_v_b_cards_v" ALTER COLUMN "variant" SET DATA TYPE "public"."enum___articles_v_b_cards_v_variant" USING "variant"::"public"."enum___articles_v_b_cards_v_variant";
  ALTER TABLE "services_b_cards" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "services_b_cards" ALTER COLUMN "variant" SET DEFAULT 'icon'::text;
  DROP TYPE "public"."enum_services_b_cards_variant";
  CREATE TYPE "public"."enum_services_b_cards_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  ALTER TABLE "services_b_cards" ALTER COLUMN "variant" SET DEFAULT 'icon'::"public"."enum_services_b_cards_variant";
  ALTER TABLE "services_b_cards" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_services_b_cards_variant" USING "variant"::"public"."enum_services_b_cards_variant";
  ALTER TABLE "services" ALTER COLUMN "hero_variant" SET DATA TYPE text;
  ALTER TABLE "services" ALTER COLUMN "hero_variant" SET DEFAULT 'collage'::text;
  DROP TYPE "public"."enum_services_hero_variant";
  CREATE TYPE "public"."enum_services_hero_variant" AS ENUM('collage', 'photo', 'simple');
  ALTER TABLE "services" ALTER COLUMN "hero_variant" SET DEFAULT 'collage'::"public"."enum_services_hero_variant";
  ALTER TABLE "services" ALTER COLUMN "hero_variant" SET DATA TYPE "public"."enum_services_hero_variant" USING "hero_variant"::"public"."enum_services_hero_variant";
  ALTER TABLE "__services_v_b_cards_v" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "__services_v_b_cards_v" ALTER COLUMN "variant" SET DEFAULT 'icon'::text;
  DROP TYPE "public"."enum___services_v_b_cards_v_variant";
  CREATE TYPE "public"."enum___services_v_b_cards_v_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  ALTER TABLE "__services_v_b_cards_v" ALTER COLUMN "variant" SET DEFAULT 'icon'::"public"."enum___services_v_b_cards_v_variant";
  ALTER TABLE "__services_v_b_cards_v" ALTER COLUMN "variant" SET DATA TYPE "public"."enum___services_v_b_cards_v_variant" USING "variant"::"public"."enum___services_v_b_cards_v_variant";
  ALTER TABLE "_services_v" ALTER COLUMN "version_hero_variant" SET DATA TYPE text;
  ALTER TABLE "_services_v" ALTER COLUMN "version_hero_variant" SET DEFAULT 'collage'::text;
  DROP TYPE "public"."enum__services_v_version_hero_variant";
  CREATE TYPE "public"."enum__services_v_version_hero_variant" AS ENUM('collage', 'photo', 'simple');
  ALTER TABLE "_services_v" ALTER COLUMN "version_hero_variant" SET DEFAULT 'collage'::"public"."enum__services_v_version_hero_variant";
  ALTER TABLE "_services_v" ALTER COLUMN "version_hero_variant" SET DATA TYPE "public"."enum__services_v_version_hero_variant" USING "version_hero_variant"::"public"."enum__services_v_version_hero_variant";
  DROP INDEX "pages_hero_hero_backdrop_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_backdrop_idx";
  DROP INDEX "services_hero_hero_backdrop_idx";
  DROP INDEX "_services_v_version_hero_version_hero_backdrop_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_tone";
  ALTER TABLE "pages" DROP COLUMN "hero_photo_tag";
  ALTER TABLE "pages" DROP COLUMN "hero_backdrop_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_tone";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_photo_tag";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_backdrop_id";
  ALTER TABLE "services" DROP COLUMN "hero_tone";
  ALTER TABLE "services" DROP COLUMN "hero_photo_tag";
  ALTER TABLE "services" DROP COLUMN "hero_backdrop_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_hero_tone";
  ALTER TABLE "_services_v" DROP COLUMN "version_hero_photo_tag";
  ALTER TABLE "_services_v" DROP COLUMN "version_hero_backdrop_id";
  ALTER TABLE "site_texts" DROP COLUMN "general_hero_sheet_label";
  ALTER TABLE "site_texts" DROP COLUMN "general_hero_sheet_number";
  ALTER TABLE "site_texts" DROP COLUMN "general_map_here";
  ALTER TABLE "site_texts" DROP COLUMN "general_map_other";
  ALTER TABLE "site_texts" DROP COLUMN "general_map_scale";
  ALTER TABLE "site_texts" DROP COLUMN "general_directions";
  ALTER TABLE "site_texts" DROP COLUMN "general_toc_count";
  ALTER TABLE "site_texts" DROP COLUMN "project_map_current";
  ALTER TABLE "site_texts" DROP COLUMN "project_map_nearby";
  ALTER TABLE "site_texts" DROP COLUMN "article_toc_cta";
  ALTER TABLE "site_texts" DROP COLUMN "article_author_link";
  ALTER TABLE "site_texts" DROP COLUMN "article_more_kicker";
  ALTER TABLE "site_texts" DROP COLUMN "article_more_title";
  ALTER TABLE "site_texts" DROP COLUMN "article_more_link";
  ALTER TABLE "site_texts" DROP COLUMN "article_list_count";
  ALTER TABLE "site_texts" DROP COLUMN "article_list_topics";
  ALTER TABLE "site_texts" DROP COLUMN "article_list_featured";
  ALTER TABLE "site_texts" DROP COLUMN "article_list_others";
  ALTER TABLE "site_texts" DROP COLUMN "article_list_toc";
  ALTER TABLE "site_texts" DROP COLUMN "explorer_by_family";
  ALTER TABLE "site_texts" DROP COLUMN "form_phone_label";
  ALTER TABLE "site_texts" DROP COLUMN "form_email_label";
  ALTER TABLE "site_texts" DROP COLUMN "form_address_label";
  ALTER TABLE "site_texts" DROP COLUMN "not_found_services_kicker";
  ALTER TABLE "site_texts" DROP COLUMN "not_found_projects_kicker";
  ALTER TABLE "site_texts" DROP COLUMN "not_found_projects_link";
  ALTER TABLE "site_texts" DROP COLUMN "not_found_contact_kicker";
  ALTER TABLE "site_texts" DROP COLUMN "not_found_recup_kicker";
  ALTER TABLE "site_texts" DROP COLUMN "not_found_recup_link";
  DROP TYPE "public"."enum_pages_hero_tone";
  DROP TYPE "public"."enum__pages_v_version_hero_tone";
  DROP TYPE "public"."enum_services_hero_tone";
  DROP TYPE "public"."enum__services_v_version_hero_tone";`)
}
