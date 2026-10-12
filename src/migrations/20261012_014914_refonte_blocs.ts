import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_b_fig_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_note_kind" AS ENUM('tip', 'site', 'definition', 'aid');
  CREATE TYPE "public"."enum_pages_b_note_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_note_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_pc_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_fig_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_note_v_kind" AS ENUM('tip', 'site', 'definition', 'aid');
  CREATE TYPE "public"."enum___pages_v_b_note_v_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_note_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_pc_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_fig_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_note_kind" AS ENUM('tip', 'site', 'definition', 'aid');
  CREATE TYPE "public"."enum_articles_b_note_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_note_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_pc_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_fig_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_note_v_kind" AS ENUM('tip', 'site', 'definition', 'aid');
  CREATE TYPE "public"."enum___articles_v_b_note_v_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_note_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_pc_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_fig_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_note_kind" AS ENUM('tip', 'site', 'definition', 'aid');
  CREATE TYPE "public"."enum_services_b_note_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_note_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_pc_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_fig_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_note_v_kind" AS ENUM('tip', 'site', 'definition', 'aid');
  CREATE TYPE "public"."enum___services_v_b_note_v_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_note_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_pc_v_tone" AS ENUM('cream', 'light');
  CREATE TABLE "pages_b_txtimg_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_fig_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"unit" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_b_fig" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_pages_b_fig_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_note" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_pages_b_note_kind" DEFAULT 'tip',
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_note_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"tone" "enum_pages_b_note_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_pc_pros" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_pc_cons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_pc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"pros_label" varchar DEFAULT 'Points forts',
  	"cons_label" varchar DEFAULT 'Points d’attention',
  	"tone" "enum_pages_b_pc_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_txtimg_v_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_fig_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"unit" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_fig_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___pages_v_b_fig_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_note_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum___pages_v_b_note_v_kind" DEFAULT 'tip',
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_note_v_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"tone" "enum___pages_v_b_note_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_pc_v_pros" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_pc_v_cons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_pc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"pros_label" varchar DEFAULT 'Points forts',
  	"cons_label" varchar DEFAULT 'Points d’attention',
  	"tone" "enum___pages_v_b_pc_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_txtimg_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_fig_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"unit" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "articles_b_fig" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_articles_b_fig_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_note" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_articles_b_note_kind" DEFAULT 'tip',
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_note_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"tone" "enum_articles_b_note_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_pc_pros" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_pc_cons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_pc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"pros_label" varchar DEFAULT 'Points forts',
  	"cons_label" varchar DEFAULT 'Points d’attention',
  	"tone" "enum_articles_b_pc_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_txtimg_v_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_fig_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"unit" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_fig_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___articles_v_b_fig_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_note_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum___articles_v_b_note_v_kind" DEFAULT 'tip',
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_note_v_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"tone" "enum___articles_v_b_note_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_pc_v_pros" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_pc_v_cons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_pc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"pros_label" varchar DEFAULT 'Points forts',
  	"cons_label" varchar DEFAULT 'Points d’attention',
  	"tone" "enum___articles_v_b_pc_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_txtimg_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_fig_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"unit" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "services_b_fig" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_services_b_fig_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_note" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_services_b_note_kind" DEFAULT 'tip',
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum_services_b_note_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"tone" "enum_services_b_note_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_pc_pros" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_pc_cons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_pc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"pros_label" varchar DEFAULT 'Points forts',
  	"cons_label" varchar DEFAULT 'Points d’attention',
  	"tone" "enum_services_b_pc_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_txtimg_v_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_fig_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"unit" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_fig_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___services_v_b_fig_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_note_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum___services_v_b_note_v_kind" DEFAULT 'tip',
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_note_v_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"tone" "enum___services_v_b_note_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_pc_v_pros" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_pc_v_cons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_pc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"pros_label" varchar DEFAULT 'Points forts',
  	"cons_label" varchar DEFAULT 'Points d’attention',
  	"tone" "enum___services_v_b_pc_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_b_txtimg_points" ADD CONSTRAINT "pages_b_txtimg_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_txtimg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_fig_items" ADD CONSTRAINT "pages_b_fig_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_fig"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_fig" ADD CONSTRAINT "pages_b_fig_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_note" ADD CONSTRAINT "pages_b_note_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_pc_pros" ADD CONSTRAINT "pages_b_pc_pros_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_pc"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_pc_cons" ADD CONSTRAINT "pages_b_pc_cons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_pc"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_pc" ADD CONSTRAINT "pages_b_pc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_txtimg_v_points" ADD CONSTRAINT "__pages_v_b_txtimg_v_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_txtimg_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_fig_v_items" ADD CONSTRAINT "__pages_v_b_fig_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_fig_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_fig_v" ADD CONSTRAINT "__pages_v_b_fig_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_note_v" ADD CONSTRAINT "__pages_v_b_note_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_pc_v_pros" ADD CONSTRAINT "__pages_v_b_pc_v_pros_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_pc_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_pc_v_cons" ADD CONSTRAINT "__pages_v_b_pc_v_cons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_pc_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_pc_v" ADD CONSTRAINT "__pages_v_b_pc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_txtimg_points" ADD CONSTRAINT "articles_b_txtimg_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_txtimg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_fig_items" ADD CONSTRAINT "articles_b_fig_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_fig"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_fig" ADD CONSTRAINT "articles_b_fig_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_note" ADD CONSTRAINT "articles_b_note_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_pc_pros" ADD CONSTRAINT "articles_b_pc_pros_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_pc"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_pc_cons" ADD CONSTRAINT "articles_b_pc_cons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_pc"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_pc" ADD CONSTRAINT "articles_b_pc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_txtimg_v_points" ADD CONSTRAINT "__articles_v_b_txtimg_v_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_txtimg_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_fig_v_items" ADD CONSTRAINT "__articles_v_b_fig_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_fig_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_fig_v" ADD CONSTRAINT "__articles_v_b_fig_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_note_v" ADD CONSTRAINT "__articles_v_b_note_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_pc_v_pros" ADD CONSTRAINT "__articles_v_b_pc_v_pros_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_pc_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_pc_v_cons" ADD CONSTRAINT "__articles_v_b_pc_v_cons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_pc_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_pc_v" ADD CONSTRAINT "__articles_v_b_pc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_txtimg_points" ADD CONSTRAINT "services_b_txtimg_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_txtimg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_fig_items" ADD CONSTRAINT "services_b_fig_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_fig"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_fig" ADD CONSTRAINT "services_b_fig_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_note" ADD CONSTRAINT "services_b_note_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_pc_pros" ADD CONSTRAINT "services_b_pc_pros_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_pc"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_pc_cons" ADD CONSTRAINT "services_b_pc_cons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_pc"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_pc" ADD CONSTRAINT "services_b_pc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_txtimg_v_points" ADD CONSTRAINT "__services_v_b_txtimg_v_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_txtimg_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_fig_v_items" ADD CONSTRAINT "__services_v_b_fig_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_fig_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_fig_v" ADD CONSTRAINT "__services_v_b_fig_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_note_v" ADD CONSTRAINT "__services_v_b_note_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_pc_v_pros" ADD CONSTRAINT "__services_v_b_pc_v_pros_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_pc_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_pc_v_cons" ADD CONSTRAINT "__services_v_b_pc_v_cons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_pc_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_pc_v" ADD CONSTRAINT "__services_v_b_pc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_b_txtimg_points_order_idx" ON "pages_b_txtimg_points" USING btree ("_order");
  CREATE INDEX "pages_b_txtimg_points_parent_id_idx" ON "pages_b_txtimg_points" USING btree ("_parent_id");
  CREATE INDEX "pages_b_fig_items_order_idx" ON "pages_b_fig_items" USING btree ("_order");
  CREATE INDEX "pages_b_fig_items_parent_id_idx" ON "pages_b_fig_items" USING btree ("_parent_id");
  CREATE INDEX "pages_b_fig_order_idx" ON "pages_b_fig" USING btree ("_order");
  CREATE INDEX "pages_b_fig_parent_id_idx" ON "pages_b_fig" USING btree ("_parent_id");
  CREATE INDEX "pages_b_fig_path_idx" ON "pages_b_fig" USING btree ("_path");
  CREATE INDEX "pages_b_note_order_idx" ON "pages_b_note" USING btree ("_order");
  CREATE INDEX "pages_b_note_parent_id_idx" ON "pages_b_note" USING btree ("_parent_id");
  CREATE INDEX "pages_b_note_path_idx" ON "pages_b_note" USING btree ("_path");
  CREATE INDEX "pages_b_pc_pros_order_idx" ON "pages_b_pc_pros" USING btree ("_order");
  CREATE INDEX "pages_b_pc_pros_parent_id_idx" ON "pages_b_pc_pros" USING btree ("_parent_id");
  CREATE INDEX "pages_b_pc_cons_order_idx" ON "pages_b_pc_cons" USING btree ("_order");
  CREATE INDEX "pages_b_pc_cons_parent_id_idx" ON "pages_b_pc_cons" USING btree ("_parent_id");
  CREATE INDEX "pages_b_pc_order_idx" ON "pages_b_pc" USING btree ("_order");
  CREATE INDEX "pages_b_pc_parent_id_idx" ON "pages_b_pc" USING btree ("_parent_id");
  CREATE INDEX "pages_b_pc_path_idx" ON "pages_b_pc" USING btree ("_path");
  CREATE INDEX "__pages_v_b_txtimg_v_points_order_idx" ON "__pages_v_b_txtimg_v_points" USING btree ("_order");
  CREATE INDEX "__pages_v_b_txtimg_v_points_parent_id_idx" ON "__pages_v_b_txtimg_v_points" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_fig_v_items_order_idx" ON "__pages_v_b_fig_v_items" USING btree ("_order");
  CREATE INDEX "__pages_v_b_fig_v_items_parent_id_idx" ON "__pages_v_b_fig_v_items" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_fig_v_order_idx" ON "__pages_v_b_fig_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_fig_v_parent_id_idx" ON "__pages_v_b_fig_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_fig_v_path_idx" ON "__pages_v_b_fig_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_note_v_order_idx" ON "__pages_v_b_note_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_note_v_parent_id_idx" ON "__pages_v_b_note_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_note_v_path_idx" ON "__pages_v_b_note_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_pc_v_pros_order_idx" ON "__pages_v_b_pc_v_pros" USING btree ("_order");
  CREATE INDEX "__pages_v_b_pc_v_pros_parent_id_idx" ON "__pages_v_b_pc_v_pros" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_pc_v_cons_order_idx" ON "__pages_v_b_pc_v_cons" USING btree ("_order");
  CREATE INDEX "__pages_v_b_pc_v_cons_parent_id_idx" ON "__pages_v_b_pc_v_cons" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_pc_v_order_idx" ON "__pages_v_b_pc_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_pc_v_parent_id_idx" ON "__pages_v_b_pc_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_pc_v_path_idx" ON "__pages_v_b_pc_v" USING btree ("_path");
  CREATE INDEX "articles_b_txtimg_points_order_idx" ON "articles_b_txtimg_points" USING btree ("_order");
  CREATE INDEX "articles_b_txtimg_points_parent_id_idx" ON "articles_b_txtimg_points" USING btree ("_parent_id");
  CREATE INDEX "articles_b_fig_items_order_idx" ON "articles_b_fig_items" USING btree ("_order");
  CREATE INDEX "articles_b_fig_items_parent_id_idx" ON "articles_b_fig_items" USING btree ("_parent_id");
  CREATE INDEX "articles_b_fig_order_idx" ON "articles_b_fig" USING btree ("_order");
  CREATE INDEX "articles_b_fig_parent_id_idx" ON "articles_b_fig" USING btree ("_parent_id");
  CREATE INDEX "articles_b_fig_path_idx" ON "articles_b_fig" USING btree ("_path");
  CREATE INDEX "articles_b_note_order_idx" ON "articles_b_note" USING btree ("_order");
  CREATE INDEX "articles_b_note_parent_id_idx" ON "articles_b_note" USING btree ("_parent_id");
  CREATE INDEX "articles_b_note_path_idx" ON "articles_b_note" USING btree ("_path");
  CREATE INDEX "articles_b_pc_pros_order_idx" ON "articles_b_pc_pros" USING btree ("_order");
  CREATE INDEX "articles_b_pc_pros_parent_id_idx" ON "articles_b_pc_pros" USING btree ("_parent_id");
  CREATE INDEX "articles_b_pc_cons_order_idx" ON "articles_b_pc_cons" USING btree ("_order");
  CREATE INDEX "articles_b_pc_cons_parent_id_idx" ON "articles_b_pc_cons" USING btree ("_parent_id");
  CREATE INDEX "articles_b_pc_order_idx" ON "articles_b_pc" USING btree ("_order");
  CREATE INDEX "articles_b_pc_parent_id_idx" ON "articles_b_pc" USING btree ("_parent_id");
  CREATE INDEX "articles_b_pc_path_idx" ON "articles_b_pc" USING btree ("_path");
  CREATE INDEX "__articles_v_b_txtimg_v_points_order_idx" ON "__articles_v_b_txtimg_v_points" USING btree ("_order");
  CREATE INDEX "__articles_v_b_txtimg_v_points_parent_id_idx" ON "__articles_v_b_txtimg_v_points" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_fig_v_items_order_idx" ON "__articles_v_b_fig_v_items" USING btree ("_order");
  CREATE INDEX "__articles_v_b_fig_v_items_parent_id_idx" ON "__articles_v_b_fig_v_items" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_fig_v_order_idx" ON "__articles_v_b_fig_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_fig_v_parent_id_idx" ON "__articles_v_b_fig_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_fig_v_path_idx" ON "__articles_v_b_fig_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_note_v_order_idx" ON "__articles_v_b_note_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_note_v_parent_id_idx" ON "__articles_v_b_note_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_note_v_path_idx" ON "__articles_v_b_note_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_pc_v_pros_order_idx" ON "__articles_v_b_pc_v_pros" USING btree ("_order");
  CREATE INDEX "__articles_v_b_pc_v_pros_parent_id_idx" ON "__articles_v_b_pc_v_pros" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_pc_v_cons_order_idx" ON "__articles_v_b_pc_v_cons" USING btree ("_order");
  CREATE INDEX "__articles_v_b_pc_v_cons_parent_id_idx" ON "__articles_v_b_pc_v_cons" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_pc_v_order_idx" ON "__articles_v_b_pc_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_pc_v_parent_id_idx" ON "__articles_v_b_pc_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_pc_v_path_idx" ON "__articles_v_b_pc_v" USING btree ("_path");
  CREATE INDEX "services_b_txtimg_points_order_idx" ON "services_b_txtimg_points" USING btree ("_order");
  CREATE INDEX "services_b_txtimg_points_parent_id_idx" ON "services_b_txtimg_points" USING btree ("_parent_id");
  CREATE INDEX "services_b_fig_items_order_idx" ON "services_b_fig_items" USING btree ("_order");
  CREATE INDEX "services_b_fig_items_parent_id_idx" ON "services_b_fig_items" USING btree ("_parent_id");
  CREATE INDEX "services_b_fig_order_idx" ON "services_b_fig" USING btree ("_order");
  CREATE INDEX "services_b_fig_parent_id_idx" ON "services_b_fig" USING btree ("_parent_id");
  CREATE INDEX "services_b_fig_path_idx" ON "services_b_fig" USING btree ("_path");
  CREATE INDEX "services_b_note_order_idx" ON "services_b_note" USING btree ("_order");
  CREATE INDEX "services_b_note_parent_id_idx" ON "services_b_note" USING btree ("_parent_id");
  CREATE INDEX "services_b_note_path_idx" ON "services_b_note" USING btree ("_path");
  CREATE INDEX "services_b_pc_pros_order_idx" ON "services_b_pc_pros" USING btree ("_order");
  CREATE INDEX "services_b_pc_pros_parent_id_idx" ON "services_b_pc_pros" USING btree ("_parent_id");
  CREATE INDEX "services_b_pc_cons_order_idx" ON "services_b_pc_cons" USING btree ("_order");
  CREATE INDEX "services_b_pc_cons_parent_id_idx" ON "services_b_pc_cons" USING btree ("_parent_id");
  CREATE INDEX "services_b_pc_order_idx" ON "services_b_pc" USING btree ("_order");
  CREATE INDEX "services_b_pc_parent_id_idx" ON "services_b_pc" USING btree ("_parent_id");
  CREATE INDEX "services_b_pc_path_idx" ON "services_b_pc" USING btree ("_path");
  CREATE INDEX "__services_v_b_txtimg_v_points_order_idx" ON "__services_v_b_txtimg_v_points" USING btree ("_order");
  CREATE INDEX "__services_v_b_txtimg_v_points_parent_id_idx" ON "__services_v_b_txtimg_v_points" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_fig_v_items_order_idx" ON "__services_v_b_fig_v_items" USING btree ("_order");
  CREATE INDEX "__services_v_b_fig_v_items_parent_id_idx" ON "__services_v_b_fig_v_items" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_fig_v_order_idx" ON "__services_v_b_fig_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_fig_v_parent_id_idx" ON "__services_v_b_fig_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_fig_v_path_idx" ON "__services_v_b_fig_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_note_v_order_idx" ON "__services_v_b_note_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_note_v_parent_id_idx" ON "__services_v_b_note_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_note_v_path_idx" ON "__services_v_b_note_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_pc_v_pros_order_idx" ON "__services_v_b_pc_v_pros" USING btree ("_order");
  CREATE INDEX "__services_v_b_pc_v_pros_parent_id_idx" ON "__services_v_b_pc_v_pros" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_pc_v_cons_order_idx" ON "__services_v_b_pc_v_cons" USING btree ("_order");
  CREATE INDEX "__services_v_b_pc_v_cons_parent_id_idx" ON "__services_v_b_pc_v_cons" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_pc_v_order_idx" ON "__services_v_b_pc_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_pc_v_parent_id_idx" ON "__services_v_b_pc_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_pc_v_path_idx" ON "__services_v_b_pc_v" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_b_txtimg_points" CASCADE;
  DROP TABLE "pages_b_fig_items" CASCADE;
  DROP TABLE "pages_b_fig" CASCADE;
  DROP TABLE "pages_b_note" CASCADE;
  DROP TABLE "pages_b_pc_pros" CASCADE;
  DROP TABLE "pages_b_pc_cons" CASCADE;
  DROP TABLE "pages_b_pc" CASCADE;
  DROP TABLE "__pages_v_b_txtimg_v_points" CASCADE;
  DROP TABLE "__pages_v_b_fig_v_items" CASCADE;
  DROP TABLE "__pages_v_b_fig_v" CASCADE;
  DROP TABLE "__pages_v_b_note_v" CASCADE;
  DROP TABLE "__pages_v_b_pc_v_pros" CASCADE;
  DROP TABLE "__pages_v_b_pc_v_cons" CASCADE;
  DROP TABLE "__pages_v_b_pc_v" CASCADE;
  DROP TABLE "articles_b_txtimg_points" CASCADE;
  DROP TABLE "articles_b_fig_items" CASCADE;
  DROP TABLE "articles_b_fig" CASCADE;
  DROP TABLE "articles_b_note" CASCADE;
  DROP TABLE "articles_b_pc_pros" CASCADE;
  DROP TABLE "articles_b_pc_cons" CASCADE;
  DROP TABLE "articles_b_pc" CASCADE;
  DROP TABLE "__articles_v_b_txtimg_v_points" CASCADE;
  DROP TABLE "__articles_v_b_fig_v_items" CASCADE;
  DROP TABLE "__articles_v_b_fig_v" CASCADE;
  DROP TABLE "__articles_v_b_note_v" CASCADE;
  DROP TABLE "__articles_v_b_pc_v_pros" CASCADE;
  DROP TABLE "__articles_v_b_pc_v_cons" CASCADE;
  DROP TABLE "__articles_v_b_pc_v" CASCADE;
  DROP TABLE "services_b_txtimg_points" CASCADE;
  DROP TABLE "services_b_fig_items" CASCADE;
  DROP TABLE "services_b_fig" CASCADE;
  DROP TABLE "services_b_note" CASCADE;
  DROP TABLE "services_b_pc_pros" CASCADE;
  DROP TABLE "services_b_pc_cons" CASCADE;
  DROP TABLE "services_b_pc" CASCADE;
  DROP TABLE "__services_v_b_txtimg_v_points" CASCADE;
  DROP TABLE "__services_v_b_fig_v_items" CASCADE;
  DROP TABLE "__services_v_b_fig_v" CASCADE;
  DROP TABLE "__services_v_b_note_v" CASCADE;
  DROP TABLE "__services_v_b_pc_v_pros" CASCADE;
  DROP TABLE "__services_v_b_pc_v_cons" CASCADE;
  DROP TABLE "__services_v_b_pc_v" CASCADE;
  DROP TYPE "public"."enum_pages_b_fig_tone";
  DROP TYPE "public"."enum_pages_b_note_kind";
  DROP TYPE "public"."enum_pages_b_note_link_type";
  DROP TYPE "public"."enum_pages_b_note_tone";
  DROP TYPE "public"."enum_pages_b_pc_tone";
  DROP TYPE "public"."enum___pages_v_b_fig_v_tone";
  DROP TYPE "public"."enum___pages_v_b_note_v_kind";
  DROP TYPE "public"."enum___pages_v_b_note_v_link_type";
  DROP TYPE "public"."enum___pages_v_b_note_v_tone";
  DROP TYPE "public"."enum___pages_v_b_pc_v_tone";
  DROP TYPE "public"."enum_articles_b_fig_tone";
  DROP TYPE "public"."enum_articles_b_note_kind";
  DROP TYPE "public"."enum_articles_b_note_link_type";
  DROP TYPE "public"."enum_articles_b_note_tone";
  DROP TYPE "public"."enum_articles_b_pc_tone";
  DROP TYPE "public"."enum___articles_v_b_fig_v_tone";
  DROP TYPE "public"."enum___articles_v_b_note_v_kind";
  DROP TYPE "public"."enum___articles_v_b_note_v_link_type";
  DROP TYPE "public"."enum___articles_v_b_note_v_tone";
  DROP TYPE "public"."enum___articles_v_b_pc_v_tone";
  DROP TYPE "public"."enum_services_b_fig_tone";
  DROP TYPE "public"."enum_services_b_note_kind";
  DROP TYPE "public"."enum_services_b_note_link_type";
  DROP TYPE "public"."enum_services_b_note_tone";
  DROP TYPE "public"."enum_services_b_pc_tone";
  DROP TYPE "public"."enum___services_v_b_fig_v_tone";
  DROP TYPE "public"."enum___services_v_b_note_v_kind";
  DROP TYPE "public"."enum___services_v_b_note_v_link_type";
  DROP TYPE "public"."enum___services_v_b_note_v_tone";
  DROP TYPE "public"."enum___services_v_b_pc_v_tone";`)
}
