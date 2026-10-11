import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_forms_blocks_text_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_email_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_tel_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_commune_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_textarea_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_select_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_radio_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_checkbox_group_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_forms_blocks_file_input_width" AS ENUM('full', 'half');
  CREATE TYPE "public"."enum_form_submissions_status" AS ENUM('new', 'in-progress', 'done', 'archived');
  CREATE TYPE "public"."enum_pages_hero_proofs_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_pages_b_txtimg_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_txtimg_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_pages_b_txtimg_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_txtimg_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_cards_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_pages_b_cards_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_cards_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  CREATE TYPE "public"."enum_pages_b_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_b_cards_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_cards_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_svc_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum_pages_b_svc_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum_pages_b_svc_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_svc_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_proj_mode" AS ENUM('manual', 'service', 'commune', 'sector', 'featured');
  CREATE TYPE "public"."enum_pages_b_proj_label" AS ENUM('commune', 'brand');
  CREATE TYPE "public"."enum_pages_b_proj_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_proj_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_explr_groups_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_explr_empty_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_steps_variant" AS ENUM('tabs', 'timeline');
  CREATE TYPE "public"."enum_pages_b_steps_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_steps_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_list_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_list_style" AS ENUM('checks', 'bullets', 'numbered', 'pills', 'definitions');
  CREATE TYPE "public"."enum_pages_b_list_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_list_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_faq_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_cta_variant" AS ENUM('band', 'card', 'slim');
  CREATE TYPE "public"."enum_pages_b_cta_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_cta_secondary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_cta_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_pages_b_mnf_layout" AS ENUM('centered', 'split', 'columns');
  CREATE TYPE "public"."enum_pages_b_mnf_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_spot_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_spot_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_gal_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_table_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_quote_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_proofs_variant" AS ENUM('band', 'compact');
  CREATE TYPE "public"."enum_pages_b_area_sectors_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_area_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_team_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_reviews_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_arts_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum_pages_b_arts_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_b_arts_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_b_rich_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_pages_hero_variant" AS ENUM('collage', 'photo', 'simple');
  CREATE TYPE "public"."enum_pages_hero_primary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_hero_secondary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_proofs_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___pages_v_b_txtimg_v_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_txtimg_v_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum___pages_v_b_txtimg_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_txtimg_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_cards_v_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___pages_v_b_cards_v_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_cards_v_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  CREATE TYPE "public"."enum___pages_v_b_cards_v_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum___pages_v_b_cards_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_cards_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_svc_v_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum___pages_v_b_svc_v_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum___pages_v_b_svc_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_svc_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_proj_v_mode" AS ENUM('manual', 'service', 'commune', 'sector', 'featured');
  CREATE TYPE "public"."enum___pages_v_b_proj_v_label" AS ENUM('commune', 'brand');
  CREATE TYPE "public"."enum___pages_v_b_proj_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_proj_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_explr_v_groups_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_explr_v_empty_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_steps_v_variant" AS ENUM('tabs', 'timeline');
  CREATE TYPE "public"."enum___pages_v_b_steps_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_steps_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_list_v_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_list_v_style" AS ENUM('checks', 'bullets', 'numbered', 'pills', 'definitions');
  CREATE TYPE "public"."enum___pages_v_b_list_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_list_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_faq_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_cta_v_variant" AS ENUM('band', 'card', 'slim');
  CREATE TYPE "public"."enum___pages_v_b_cta_v_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_cta_v_secondary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_cta_v_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___pages_v_b_mnf_v_layout" AS ENUM('centered', 'split', 'columns');
  CREATE TYPE "public"."enum___pages_v_b_mnf_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_spot_v_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_spot_v_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_gal_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_table_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_quote_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_proofs_v_variant" AS ENUM('band', 'compact');
  CREATE TYPE "public"."enum___pages_v_b_area_v_sectors_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_area_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_team_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_reviews_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_arts_v_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum___pages_v_b_arts_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___pages_v_b_arts_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___pages_v_b_rich_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum__pages_v_version_hero_variant" AS ENUM('collage', 'photo', 'simple');
  CREATE TYPE "public"."enum__pages_v_version_hero_primary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum__pages_v_version_hero_secondary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_articles_b_txtimg_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_txtimg_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_articles_b_txtimg_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_txtimg_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_cards_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_articles_b_cards_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_cards_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  CREATE TYPE "public"."enum_articles_b_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_articles_b_cards_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_cards_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_svc_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum_articles_b_svc_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum_articles_b_svc_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_svc_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_proj_mode" AS ENUM('manual', 'service', 'commune', 'sector', 'featured');
  CREATE TYPE "public"."enum_articles_b_proj_label" AS ENUM('commune', 'brand');
  CREATE TYPE "public"."enum_articles_b_proj_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_proj_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_explr_groups_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_explr_empty_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_steps_variant" AS ENUM('tabs', 'timeline');
  CREATE TYPE "public"."enum_articles_b_steps_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_steps_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_list_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_list_style" AS ENUM('checks', 'bullets', 'numbered', 'pills', 'definitions');
  CREATE TYPE "public"."enum_articles_b_list_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_list_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_faq_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_cta_variant" AS ENUM('band', 'card', 'slim');
  CREATE TYPE "public"."enum_articles_b_cta_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_cta_secondary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_cta_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_articles_b_mnf_layout" AS ENUM('centered', 'split', 'columns');
  CREATE TYPE "public"."enum_articles_b_mnf_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_spot_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_spot_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_gal_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_table_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_quote_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_proofs_variant" AS ENUM('band', 'compact');
  CREATE TYPE "public"."enum_articles_b_area_sectors_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_area_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_team_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_reviews_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_arts_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum_articles_b_arts_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_articles_b_arts_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_b_rich_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_articles_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum___articles_v_b_txtimg_v_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_txtimg_v_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum___articles_v_b_txtimg_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_txtimg_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_cards_v_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___articles_v_b_cards_v_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_cards_v_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  CREATE TYPE "public"."enum___articles_v_b_cards_v_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum___articles_v_b_cards_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_cards_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_svc_v_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum___articles_v_b_svc_v_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum___articles_v_b_svc_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_svc_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_proj_v_mode" AS ENUM('manual', 'service', 'commune', 'sector', 'featured');
  CREATE TYPE "public"."enum___articles_v_b_proj_v_label" AS ENUM('commune', 'brand');
  CREATE TYPE "public"."enum___articles_v_b_proj_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_proj_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_explr_v_groups_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_explr_v_empty_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_steps_v_variant" AS ENUM('tabs', 'timeline');
  CREATE TYPE "public"."enum___articles_v_b_steps_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_steps_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_list_v_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_list_v_style" AS ENUM('checks', 'bullets', 'numbered', 'pills', 'definitions');
  CREATE TYPE "public"."enum___articles_v_b_list_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_list_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_faq_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_cta_v_variant" AS ENUM('band', 'card', 'slim');
  CREATE TYPE "public"."enum___articles_v_b_cta_v_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_cta_v_secondary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_cta_v_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___articles_v_b_mnf_v_layout" AS ENUM('centered', 'split', 'columns');
  CREATE TYPE "public"."enum___articles_v_b_mnf_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_spot_v_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_spot_v_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_gal_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_table_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_quote_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_proofs_v_variant" AS ENUM('band', 'compact');
  CREATE TYPE "public"."enum___articles_v_b_area_v_sectors_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_area_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_team_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_reviews_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_arts_v_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum___articles_v_b_arts_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___articles_v_b_arts_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___articles_v_b_rich_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum__articles_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_services_hero_proofs_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_services_b_txtimg_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_txtimg_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_services_b_txtimg_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_txtimg_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_cards_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_services_b_cards_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_cards_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  CREATE TYPE "public"."enum_services_b_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_services_b_cards_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_cards_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_svc_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum_services_b_svc_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum_services_b_svc_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_svc_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_proj_mode" AS ENUM('manual', 'service', 'commune', 'sector', 'featured');
  CREATE TYPE "public"."enum_services_b_proj_label" AS ENUM('commune', 'brand');
  CREATE TYPE "public"."enum_services_b_proj_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_proj_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_explr_groups_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_explr_empty_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_steps_variant" AS ENUM('tabs', 'timeline');
  CREATE TYPE "public"."enum_services_b_steps_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_steps_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_list_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_list_style" AS ENUM('checks', 'bullets', 'numbered', 'pills', 'definitions');
  CREATE TYPE "public"."enum_services_b_list_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_list_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_faq_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_cta_variant" AS ENUM('band', 'card', 'slim');
  CREATE TYPE "public"."enum_services_b_cta_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_cta_secondary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_cta_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_services_b_mnf_layout" AS ENUM('centered', 'split', 'columns');
  CREATE TYPE "public"."enum_services_b_mnf_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_spot_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_spot_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_gal_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_table_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_quote_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_proofs_variant" AS ENUM('band', 'compact');
  CREATE TYPE "public"."enum_services_b_area_sectors_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_area_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_team_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_reviews_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_arts_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum_services_b_arts_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_b_arts_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_b_rich_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum_services_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_services_hero_variant" AS ENUM('collage', 'photo', 'simple');
  CREATE TYPE "public"."enum_services_hero_primary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_hero_secondary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_hero_proofs_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___services_v_b_txtimg_v_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_txtimg_v_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum___services_v_b_txtimg_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_txtimg_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_cards_v_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___services_v_b_cards_v_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_cards_v_variant" AS ENUM('icon', 'letter', 'photo', 'numbered', 'plain');
  CREATE TYPE "public"."enum___services_v_b_cards_v_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum___services_v_b_cards_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_cards_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_svc_v_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum___services_v_b_svc_v_variant" AS ENUM('full', 'compact');
  CREATE TYPE "public"."enum___services_v_b_svc_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_svc_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_proj_v_mode" AS ENUM('manual', 'service', 'commune', 'sector', 'featured');
  CREATE TYPE "public"."enum___services_v_b_proj_v_label" AS ENUM('commune', 'brand');
  CREATE TYPE "public"."enum___services_v_b_proj_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_proj_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_explr_v_groups_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_explr_v_empty_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_steps_v_variant" AS ENUM('tabs', 'timeline');
  CREATE TYPE "public"."enum___services_v_b_steps_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_steps_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_list_v_items_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_list_v_style" AS ENUM('checks', 'bullets', 'numbered', 'pills', 'definitions');
  CREATE TYPE "public"."enum___services_v_b_list_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_list_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_faq_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_cta_v_variant" AS ENUM('band', 'card', 'slim');
  CREATE TYPE "public"."enum___services_v_b_cta_v_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_cta_v_secondary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_cta_v_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum___services_v_b_mnf_v_layout" AS ENUM('centered', 'split', 'columns');
  CREATE TYPE "public"."enum___services_v_b_mnf_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_spot_v_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_spot_v_primary_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_gal_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_table_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_quote_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_proofs_v_variant" AS ENUM('band', 'compact');
  CREATE TYPE "public"."enum___services_v_b_area_v_sectors_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_area_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_team_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_reviews_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_arts_v_mode" AS ENUM('all', 'manual');
  CREATE TYPE "public"."enum___services_v_b_arts_v_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum___services_v_b_arts_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum___services_v_b_rich_v_tone" AS ENUM('cream', 'light');
  CREATE TYPE "public"."enum__services_v_version_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum__services_v_version_hero_variant" AS ENUM('collage', 'photo', 'simple');
  CREATE TYPE "public"."enum__services_v_version_hero_primary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum__services_v_version_hero_secondary_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_communes_area" AS ENUM('brianconnais', 'serre-chevalier', 'vallouise-ecrins', 'hors-05');
  CREATE TYPE "public"."enum_faqs_topic" AS ENUM('general', 'charpente', 'isolation', 'ossature', 'escaliers', 'exterieur', 'recup', 'secteurs', 'contact', 'guides');
  CREATE TYPE "public"."enum_media_kind" AS ENUM('chantier', 'ambiance', 'portrait', 'visuel');
  CREATE TYPE "public"."enum_reviews_source" AS ENUM('google', 'facebook', 'pagesjaunes', 'other');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TYPE "public"."enum_validation_points_status" AS ENUM('open', 'done', 'dropped');
  CREATE TYPE "public"."enum_validation_points_priority" AS ENUM('high', 'normal', 'low');
  CREATE TYPE "public"."enum_users_role" AS ENUM('editor', 'admin');
  CREATE TYPE "public"."enum_company_hours_day" AS ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
  CREATE TYPE "public"."enum_header_nav_kind" AS ENUM('link', 'services');
  CREATE TYPE "public"."enum_header_nav_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_header_cta_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_footer_columns_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_footer_columns_source" AS ENUM('manual', 'services', 'articles');
  CREATE TYPE "public"."enum_footer_legal_links_link_type" AS ENUM('internal', 'phone', 'email', 'external');
  CREATE TYPE "public"."enum_proofs_items_icon" AS ENUM('roof', 'hammer', 'leaf', 'layers', 'wall', 'house', 'arrowUp', 'stairs', 'balcony', 'recycle', 'medal', 'calendar', 'tree', 'shield', 'check', 'mapPin', 'phone', 'mail', 'clock', 'document', 'search', 'users', 'ruler', 'saw', 'truck', 'sun', 'snow', 'window', 'euro', 'info');
  CREATE TYPE "public"."enum_analytics_provider" AS ENUM('vercel', 'plausible', 'umami', 'none');
  CREATE TABLE "forms_blocks_text_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_text_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_email_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_tel_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_tel_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_commune_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_commune_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_textarea_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"placeholder" varchar,
  	"rows" numeric DEFAULT 6,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_input_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"prefill" varchar
  );
  
  CREATE TABLE "forms_blocks_select_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_select_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_radio_input_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"prefill" varchar
  );
  
  CREATE TABLE "forms_blocks_radio_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_radio_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_checkbox_group_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"prefill" varchar
  );
  
  CREATE TABLE "forms_blocks_checkbox_group" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_checkbox_group_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_file_input" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"width" "enum_forms_blocks_file_input_width" DEFAULT 'full',
  	"required" boolean DEFAULT false,
  	"error_message" varchar,
  	"help_text" varchar,
  	"max_files" numeric DEFAULT 5,
  	"max_size_mb" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"success_title" varchar,
  	"error_message" jsonb,
  	"notify_email" varchar,
  	"send_acknowledgement" boolean DEFAULT true,
  	"acknowledgement_subject" varchar,
  	"acknowledgement_text" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "enum_form_submissions_status" DEFAULT 'new',
  	"summary" varchar,
  	"contact_name" varchar,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"commune" varchar,
  	"notes" varchar,
  	"form_id" integer NOT NULL,
  	"source_page" varchar,
  	"ip_hash" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_hero_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"icon" "enum_pages_hero_proofs_icon" DEFAULT 'check'
  );
  
  CREATE TABLE "pages_b_txtimg_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_txtimg_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_b_txtimg" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"image_position" "enum_pages_b_txtimg_image_position" DEFAULT 'right',
  	"badge" varchar,
  	"caption" varchar,
  	"two_columns" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_txtimg_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_txtimg_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_pages_b_cards_items_icon",
  	"letter" varchar,
  	"eyebrow" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"muted" boolean DEFAULT false,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_cards_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_b_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum_pages_b_cards_variant" DEFAULT 'icon',
  	"columns" "enum_pages_b_cards_columns" DEFAULT '3',
  	"aside_image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_cards_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_cards_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_svc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_pages_b_svc_mode" DEFAULT 'all',
  	"variant" "enum_pages_b_svc_variant" DEFAULT 'full',
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_svc_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_svc_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_proj_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"title" varchar,
  	"tag" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_proj" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_pages_b_proj_mode" DEFAULT 'manual',
  	"limit" numeric DEFAULT 6,
  	"label" "enum_pages_b_proj_label" DEFAULT 'commune',
  	"service_id" integer,
  	"sector_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_proj_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_proj_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_explr_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_explr_groups_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_b_explr_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"anchor" varchar
  );
  
  CREATE TABLE "pages_b_explr" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_filter_label" varchar DEFAULT 'Par prestation',
  	"commune_filter_label" varchar DEFAULT 'Par commune',
  	"recup_filter_label" varchar DEFAULT 'Réemploi (3B Récup’)',
  	"empty_message" varchar,
  	"empty_cta_label" varchar,
  	"empty_cta_type" "enum_pages_b_explr_empty_cta_type" DEFAULT 'internal',
  	"empty_cta_anchor" varchar,
  	"empty_cta_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_b_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum_pages_b_steps_variant" DEFAULT 'tabs',
  	"is_how_to" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_steps_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_steps_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_list_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_b_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"text" jsonb,
  	"style" "enum_pages_b_list_style" DEFAULT 'checks',
  	"in_card" boolean DEFAULT false,
  	"image_id" integer,
  	"caption" varchar,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_list_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_list_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_pages_b_faq_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_b_cta_variant" DEFAULT 'band',
  	"badge" varchar,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum_pages_b_cta_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_type" "enum_pages_b_cta_secondary_type" DEFAULT 'internal',
  	"secondary_anchor" varchar,
  	"secondary_url" varchar,
  	"icon" "enum_pages_b_cta_icon",
  	"show_address" boolean DEFAULT false,
  	"image_id" integer,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_mnf_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_mnf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"layout" "enum_pages_b_mnf_layout" DEFAULT 'centered',
  	"text" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"emphasis" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_mnf_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_spot_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_spot_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_spot_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_b_spot" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT '3B Récup’',
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum_pages_b_spot_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_gal_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_b_gal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_pages_b_gal_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_b_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_b_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_b_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"tone" "enum_pages_b_table_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"tone" "enum_pages_b_quote_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_b_proofs_variant" DEFAULT 'band',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_area_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_pages_b_area_sectors_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_b_area" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"show_map" boolean DEFAULT true,
  	"tone" "enum_pages_b_area_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_pages_b_team_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_pages_b_reviews_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_arts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_pages_b_arts_mode" DEFAULT 'all',
  	"cta_label" varchar,
  	"cta_type" "enum_pages_b_arts_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_pages_b_arts_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"form_id" integer,
  	"show_company_info" boolean DEFAULT true,
  	"privacy_notice" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_b_rich" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"show_toc" boolean DEFAULT false,
  	"boxed" boolean DEFAULT false,
  	"tone" "enum_pages_b_rich_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"breadcrumb_label" varchar,
  	"hero_variant" "enum_pages_hero_variant" DEFAULT 'collage',
  	"hero_kicker" varchar,
  	"hero_title" varchar,
  	"hero_title_accent" varchar,
  	"hero_text" jsonb,
  	"hero_primary_cta_label" varchar,
  	"hero_primary_cta_type" "enum_pages_hero_primary_cta_type" DEFAULT 'internal',
  	"hero_primary_cta_anchor" varchar,
  	"hero_primary_cta_url" varchar,
  	"hero_secondary_cta_label" varchar,
  	"hero_secondary_cta_type" "enum_pages_hero_secondary_cta_type" DEFAULT 'internal',
  	"hero_secondary_cta_anchor" varchar,
  	"hero_secondary_cta_url" varchar,
  	"hero_caption" varchar,
  	"tldr" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_noindex" boolean DEFAULT false,
  	"slug" varchar,
  	"parent_id" integer,
  	"path" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"media_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"icon" "enum__pages_v_version_hero_proofs_icon" DEFAULT 'check',
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_txtimg_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_txtimg_v_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_txtimg_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"image_position" "enum___pages_v_b_txtimg_v_image_position" DEFAULT 'right',
  	"badge" varchar,
  	"caption" varchar,
  	"two_columns" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_txtimg_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_txtimg_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_cards_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum___pages_v_b_cards_v_items_icon",
  	"letter" varchar,
  	"eyebrow" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"muted" boolean DEFAULT false,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_cards_v_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum___pages_v_b_cards_v_variant" DEFAULT 'icon',
  	"columns" "enum___pages_v_b_cards_v_columns" DEFAULT '3',
  	"aside_image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_cards_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_cards_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_svc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___pages_v_b_svc_v_mode" DEFAULT 'all',
  	"variant" "enum___pages_v_b_svc_v_variant" DEFAULT 'full',
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_svc_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_svc_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_proj_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"title" varchar,
  	"tag" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_proj_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___pages_v_b_proj_v_mode" DEFAULT 'manual',
  	"limit" numeric DEFAULT 6,
  	"label" "enum___pages_v_b_proj_v_label" DEFAULT 'commune',
  	"service_id" integer,
  	"sector_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_proj_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_proj_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_explr_v_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_explr_v_groups_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_explr_v_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_explr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service_filter_label" varchar DEFAULT 'Par prestation',
  	"commune_filter_label" varchar DEFAULT 'Par commune',
  	"recup_filter_label" varchar DEFAULT 'Réemploi (3B Récup’)',
  	"empty_message" varchar,
  	"empty_cta_label" varchar,
  	"empty_cta_type" "enum___pages_v_b_explr_v_empty_cta_type" DEFAULT 'internal',
  	"empty_cta_anchor" varchar,
  	"empty_cta_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_steps_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum___pages_v_b_steps_v_variant" DEFAULT 'tabs',
  	"is_how_to" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_steps_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_steps_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_list_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_list_v_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"text" jsonb,
  	"style" "enum___pages_v_b_list_v_style" DEFAULT 'checks',
  	"in_card" boolean DEFAULT false,
  	"image_id" integer,
  	"caption" varchar,
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_list_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_list_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_faq_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___pages_v_b_faq_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_cta_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum___pages_v_b_cta_v_variant" DEFAULT 'band',
  	"badge" varchar,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum___pages_v_b_cta_v_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_type" "enum___pages_v_b_cta_v_secondary_type" DEFAULT 'internal',
  	"secondary_anchor" varchar,
  	"secondary_url" varchar,
  	"icon" "enum___pages_v_b_cta_v_icon",
  	"show_address" boolean DEFAULT false,
  	"image_id" integer,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_mnf_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_mnf_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"layout" "enum___pages_v_b_mnf_v_layout" DEFAULT 'centered',
  	"text" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"emphasis" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_mnf_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_spot_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_spot_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_spot_v_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_spot_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT '3B Récup’',
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum___pages_v_b_spot_v_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_gal_v_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_gal_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___pages_v_b_gal_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_table_v_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_table_v_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_table_v_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_table_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"tone" "enum___pages_v_b_table_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_quote_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"tone" "enum___pages_v_b_quote_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_proofs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum___pages_v_b_proofs_v_variant" DEFAULT 'band',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_area_v_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum___pages_v_b_area_v_sectors_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__pages_v_b_area_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"show_map" boolean DEFAULT true,
  	"tone" "enum___pages_v_b_area_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_team_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___pages_v_b_team_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_reviews_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___pages_v_b_reviews_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_arts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___pages_v_b_arts_v_mode" DEFAULT 'all',
  	"cta_label" varchar,
  	"cta_type" "enum___pages_v_b_arts_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___pages_v_b_arts_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_form_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"form_id" integer,
  	"show_company_info" boolean DEFAULT true,
  	"privacy_notice" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__pages_v_b_rich_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"show_toc" boolean DEFAULT false,
  	"boxed" boolean DEFAULT false,
  	"tone" "enum___pages_v_b_rich_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_breadcrumb_label" varchar,
  	"version_hero_variant" "enum__pages_v_version_hero_variant" DEFAULT 'collage',
  	"version_hero_kicker" varchar,
  	"version_hero_title" varchar,
  	"version_hero_title_accent" varchar,
  	"version_hero_text" jsonb,
  	"version_hero_primary_cta_label" varchar,
  	"version_hero_primary_cta_type" "enum__pages_v_version_hero_primary_cta_type" DEFAULT 'internal',
  	"version_hero_primary_cta_anchor" varchar,
  	"version_hero_primary_cta_url" varchar,
  	"version_hero_secondary_cta_label" varchar,
  	"version_hero_secondary_cta_type" "enum__pages_v_version_hero_secondary_cta_type" DEFAULT 'internal',
  	"version_hero_secondary_cta_anchor" varchar,
  	"version_hero_secondary_cta_url" varchar,
  	"version_hero_caption" varchar,
  	"version_tldr" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_slug" varchar,
  	"version_parent_id" integer,
  	"version_path" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"media_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "articles_b_txtimg_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_txtimg_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "articles_b_txtimg" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"image_position" "enum_articles_b_txtimg_image_position" DEFAULT 'right',
  	"badge" varchar,
  	"caption" varchar,
  	"two_columns" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_txtimg_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_txtimg_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_articles_b_cards_items_icon",
  	"letter" varchar,
  	"eyebrow" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"muted" boolean DEFAULT false,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_cards_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "articles_b_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum_articles_b_cards_variant" DEFAULT 'icon',
  	"columns" "enum_articles_b_cards_columns" DEFAULT '3',
  	"aside_image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_cards_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_cards_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_svc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_articles_b_svc_mode" DEFAULT 'all',
  	"variant" "enum_articles_b_svc_variant" DEFAULT 'full',
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_svc_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_svc_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_proj_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"title" varchar,
  	"tag" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_proj" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_articles_b_proj_mode" DEFAULT 'manual',
  	"limit" numeric DEFAULT 6,
  	"label" "enum_articles_b_proj_label" DEFAULT 'commune',
  	"service_id" integer,
  	"sector_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_proj_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_proj_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_explr_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_explr_groups_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "articles_b_explr_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"anchor" varchar
  );
  
  CREATE TABLE "articles_b_explr" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_filter_label" varchar DEFAULT 'Par prestation',
  	"commune_filter_label" varchar DEFAULT 'Par commune',
  	"recup_filter_label" varchar DEFAULT 'Réemploi (3B Récup’)',
  	"empty_message" varchar,
  	"empty_cta_label" varchar,
  	"empty_cta_type" "enum_articles_b_explr_empty_cta_type" DEFAULT 'internal',
  	"empty_cta_anchor" varchar,
  	"empty_cta_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "articles_b_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum_articles_b_steps_variant" DEFAULT 'tabs',
  	"is_how_to" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_steps_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_steps_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_list_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "articles_b_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"text" jsonb,
  	"style" "enum_articles_b_list_style" DEFAULT 'checks',
  	"in_card" boolean DEFAULT false,
  	"image_id" integer,
  	"caption" varchar,
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_list_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_list_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_articles_b_faq_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_articles_b_cta_variant" DEFAULT 'band',
  	"badge" varchar,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum_articles_b_cta_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_type" "enum_articles_b_cta_secondary_type" DEFAULT 'internal',
  	"secondary_anchor" varchar,
  	"secondary_url" varchar,
  	"icon" "enum_articles_b_cta_icon",
  	"show_address" boolean DEFAULT false,
  	"image_id" integer,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_mnf_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_mnf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"layout" "enum_articles_b_mnf_layout" DEFAULT 'centered',
  	"text" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"emphasis" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_mnf_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_spot_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_spot_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_spot_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "articles_b_spot" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT '3B Récup’',
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum_articles_b_spot_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_gal_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "articles_b_gal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_articles_b_gal_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "articles_b_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "articles_b_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "articles_b_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"tone" "enum_articles_b_table_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"tone" "enum_articles_b_quote_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_articles_b_proofs_variant" DEFAULT 'band',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_area_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_articles_b_area_sectors_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "articles_b_area" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"show_map" boolean DEFAULT true,
  	"tone" "enum_articles_b_area_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_articles_b_team_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_articles_b_reviews_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_arts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_articles_b_arts_mode" DEFAULT 'all',
  	"cta_label" varchar,
  	"cta_type" "enum_articles_b_arts_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_articles_b_arts_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"form_id" integer,
  	"show_company_info" boolean DEFAULT true,
  	"privacy_notice" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_b_rich" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"show_toc" boolean DEFAULT false,
  	"boxed" boolean DEFAULT false,
  	"tone" "enum_articles_b_rich_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"title_accent" varchar,
  	"topic" varchar,
  	"excerpt" varchar,
  	"card_summary" varchar,
  	"image_id" integer,
  	"tldr" varchar,
  	"author" varchar DEFAULT 'L’équipe de 3B Charpente',
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_noindex" boolean DEFAULT false,
  	"slug" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_articles_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "articles_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "__articles_v_b_txtimg_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_txtimg_v_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_txtimg_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"image_position" "enum___articles_v_b_txtimg_v_image_position" DEFAULT 'right',
  	"badge" varchar,
  	"caption" varchar,
  	"two_columns" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_txtimg_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_txtimg_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_cards_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum___articles_v_b_cards_v_items_icon",
  	"letter" varchar,
  	"eyebrow" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"muted" boolean DEFAULT false,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_cards_v_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum___articles_v_b_cards_v_variant" DEFAULT 'icon',
  	"columns" "enum___articles_v_b_cards_v_columns" DEFAULT '3',
  	"aside_image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_cards_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_cards_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_svc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___articles_v_b_svc_v_mode" DEFAULT 'all',
  	"variant" "enum___articles_v_b_svc_v_variant" DEFAULT 'full',
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_svc_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_svc_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_proj_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"title" varchar,
  	"tag" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_proj_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___articles_v_b_proj_v_mode" DEFAULT 'manual',
  	"limit" numeric DEFAULT 6,
  	"label" "enum___articles_v_b_proj_v_label" DEFAULT 'commune',
  	"service_id" integer,
  	"sector_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_proj_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_proj_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_explr_v_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_explr_v_groups_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_explr_v_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_explr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service_filter_label" varchar DEFAULT 'Par prestation',
  	"commune_filter_label" varchar DEFAULT 'Par commune',
  	"recup_filter_label" varchar DEFAULT 'Réemploi (3B Récup’)',
  	"empty_message" varchar,
  	"empty_cta_label" varchar,
  	"empty_cta_type" "enum___articles_v_b_explr_v_empty_cta_type" DEFAULT 'internal',
  	"empty_cta_anchor" varchar,
  	"empty_cta_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_steps_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum___articles_v_b_steps_v_variant" DEFAULT 'tabs',
  	"is_how_to" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_steps_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_steps_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_list_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_list_v_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"text" jsonb,
  	"style" "enum___articles_v_b_list_v_style" DEFAULT 'checks',
  	"in_card" boolean DEFAULT false,
  	"image_id" integer,
  	"caption" varchar,
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_list_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_list_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_faq_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___articles_v_b_faq_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_cta_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum___articles_v_b_cta_v_variant" DEFAULT 'band',
  	"badge" varchar,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum___articles_v_b_cta_v_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_type" "enum___articles_v_b_cta_v_secondary_type" DEFAULT 'internal',
  	"secondary_anchor" varchar,
  	"secondary_url" varchar,
  	"icon" "enum___articles_v_b_cta_v_icon",
  	"show_address" boolean DEFAULT false,
  	"image_id" integer,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_mnf_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_mnf_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"layout" "enum___articles_v_b_mnf_v_layout" DEFAULT 'centered',
  	"text" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"emphasis" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_mnf_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_spot_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_spot_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_spot_v_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_spot_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT '3B Récup’',
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum___articles_v_b_spot_v_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_gal_v_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_gal_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___articles_v_b_gal_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_table_v_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_table_v_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_table_v_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_table_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"tone" "enum___articles_v_b_table_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_quote_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"tone" "enum___articles_v_b_quote_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_proofs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum___articles_v_b_proofs_v_variant" DEFAULT 'band',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_area_v_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum___articles_v_b_area_v_sectors_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__articles_v_b_area_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"show_map" boolean DEFAULT true,
  	"tone" "enum___articles_v_b_area_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_team_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___articles_v_b_team_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_reviews_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___articles_v_b_reviews_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_arts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___articles_v_b_arts_v_mode" DEFAULT 'all',
  	"cta_label" varchar,
  	"cta_type" "enum___articles_v_b_arts_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___articles_v_b_arts_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_form_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"form_id" integer,
  	"show_company_info" boolean DEFAULT true,
  	"privacy_notice" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__articles_v_b_rich_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"show_toc" boolean DEFAULT false,
  	"boxed" boolean DEFAULT false,
  	"tone" "enum___articles_v_b_rich_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_title_accent" varchar,
  	"version_topic" varchar,
  	"version_excerpt" varchar,
  	"version_card_summary" varchar,
  	"version_image_id" integer,
  	"version_tldr" varchar,
  	"version_author" varchar DEFAULT 'L’équipe de 3B Charpente',
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__articles_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_articles_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "services_hero_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"icon" "enum_services_hero_proofs_icon" DEFAULT 'check'
  );
  
  CREATE TABLE "services_b_txtimg_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_services_b_txtimg_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_b_txtimg" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"image_position" "enum_services_b_txtimg_image_position" DEFAULT 'right',
  	"badge" varchar,
  	"caption" varchar,
  	"two_columns" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_txtimg_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_txtimg_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_services_b_cards_items_icon",
  	"letter" varchar,
  	"eyebrow" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"muted" boolean DEFAULT false,
  	"link_label" varchar,
  	"link_type" "enum_services_b_cards_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_b_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum_services_b_cards_variant" DEFAULT 'icon',
  	"columns" "enum_services_b_cards_columns" DEFAULT '3',
  	"aside_image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_cards_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_cards_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_svc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_services_b_svc_mode" DEFAULT 'all',
  	"variant" "enum_services_b_svc_variant" DEFAULT 'full',
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_svc_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_svc_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_proj_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"title" varchar,
  	"tag" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_proj" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_services_b_proj_mode" DEFAULT 'manual',
  	"limit" numeric DEFAULT 6,
  	"label" "enum_services_b_proj_label" DEFAULT 'commune',
  	"service_id" integer,
  	"sector_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_proj_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_proj_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_explr_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_services_b_explr_groups_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_b_explr_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"anchor" varchar
  );
  
  CREATE TABLE "services_b_explr" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_filter_label" varchar DEFAULT 'Par prestation',
  	"commune_filter_label" varchar DEFAULT 'Par commune',
  	"recup_filter_label" varchar DEFAULT 'Réemploi (3B Récup’)',
  	"empty_message" varchar,
  	"empty_cta_label" varchar,
  	"empty_cta_type" "enum_services_b_explr_empty_cta_type" DEFAULT 'internal',
  	"empty_cta_anchor" varchar,
  	"empty_cta_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "services_b_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum_services_b_steps_variant" DEFAULT 'tabs',
  	"is_how_to" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_steps_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_steps_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum_services_b_list_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_b_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"text" jsonb,
  	"style" "enum_services_b_list_style" DEFAULT 'checks',
  	"in_card" boolean DEFAULT false,
  	"image_id" integer,
  	"caption" varchar,
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_list_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_list_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_services_b_faq_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_services_b_cta_variant" DEFAULT 'band',
  	"badge" varchar,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum_services_b_cta_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_type" "enum_services_b_cta_secondary_type" DEFAULT 'internal',
  	"secondary_anchor" varchar,
  	"secondary_url" varchar,
  	"icon" "enum_services_b_cta_icon",
  	"show_address" boolean DEFAULT false,
  	"image_id" integer,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_mnf_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_mnf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"layout" "enum_services_b_mnf_layout" DEFAULT 'centered',
  	"text" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"emphasis" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_mnf_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_spot_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_spot_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_services_b_spot_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_b_spot" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT '3B Récup’',
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum_services_b_spot_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_gal_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "services_b_gal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_services_b_gal_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "services_b_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_b_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "services_b_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"tone" "enum_services_b_table_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"tone" "enum_services_b_quote_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_services_b_proofs_variant" DEFAULT 'band',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_area_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_services_b_area_sectors_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_b_area" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"show_map" boolean DEFAULT true,
  	"tone" "enum_services_b_area_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_services_b_team_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum_services_b_reviews_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_arts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum_services_b_arts_mode" DEFAULT 'all',
  	"cta_label" varchar,
  	"cta_type" "enum_services_b_arts_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum_services_b_arts_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"form_id" integer,
  	"show_company_info" boolean DEFAULT true,
  	"privacy_notice" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_b_rich" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"show_toc" boolean DEFAULT false,
  	"boxed" boolean DEFAULT false,
  	"tone" "enum_services_b_rich_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"menu_label" varchar,
  	"order" numeric DEFAULT 10,
  	"icon" "enum_services_icon" DEFAULT 'roof',
  	"card_title" varchar,
  	"short_label" varchar,
  	"filter_key" varchar,
  	"card_text" varchar,
  	"card_link_label" varchar DEFAULT 'En savoir plus',
  	"image_id" integer,
  	"schema_service_type" varchar,
  	"schema_description" varchar,
  	"hero_variant" "enum_services_hero_variant" DEFAULT 'collage',
  	"hero_kicker" varchar,
  	"hero_title" varchar,
  	"hero_title_accent" varchar,
  	"hero_text" jsonb,
  	"hero_primary_cta_label" varchar,
  	"hero_primary_cta_type" "enum_services_hero_primary_cta_type" DEFAULT 'internal',
  	"hero_primary_cta_anchor" varchar,
  	"hero_primary_cta_url" varchar,
  	"hero_secondary_cta_label" varchar,
  	"hero_secondary_cta_type" "enum_services_hero_secondary_cta_type" DEFAULT 'internal',
  	"hero_secondary_cta_anchor" varchar,
  	"hero_secondary_cta_url" varchar,
  	"hero_caption" varchar,
  	"tldr" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_noindex" boolean DEFAULT false,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"media_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "_services_v_version_hero_proofs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"text" varchar,
  	"icon" "enum__services_v_version_hero_proofs_icon" DEFAULT 'check',
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_txtimg_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_txtimg_v_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_txtimg_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"image_position" "enum___services_v_b_txtimg_v_image_position" DEFAULT 'right',
  	"badge" varchar,
  	"caption" varchar,
  	"two_columns" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_txtimg_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_txtimg_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_cards_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum___services_v_b_cards_v_items_icon",
  	"letter" varchar,
  	"eyebrow" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"muted" boolean DEFAULT false,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_cards_v_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum___services_v_b_cards_v_variant" DEFAULT 'icon',
  	"columns" "enum___services_v_b_cards_v_columns" DEFAULT '3',
  	"aside_image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_cards_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_cards_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_svc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___services_v_b_svc_v_mode" DEFAULT 'all',
  	"variant" "enum___services_v_b_svc_v_variant" DEFAULT 'full',
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_svc_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_svc_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_proj_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"title" varchar,
  	"tag" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_proj_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___services_v_b_proj_v_mode" DEFAULT 'manual',
  	"limit" numeric DEFAULT 6,
  	"label" "enum___services_v_b_proj_v_label" DEFAULT 'commune',
  	"service_id" integer,
  	"sector_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_proj_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_proj_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_explr_v_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_explr_v_groups_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_explr_v_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_explr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service_filter_label" varchar DEFAULT 'Par prestation',
  	"commune_filter_label" varchar DEFAULT 'Par commune',
  	"recup_filter_label" varchar DEFAULT 'Réemploi (3B Récup’)',
  	"empty_message" varchar,
  	"empty_cta_label" varchar,
  	"empty_cta_type" "enum___services_v_b_explr_v_empty_cta_type" DEFAULT 'internal',
  	"empty_cta_anchor" varchar,
  	"empty_cta_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_steps_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"variant" "enum___services_v_b_steps_v_variant" DEFAULT 'tabs',
  	"is_how_to" boolean DEFAULT false,
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_steps_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_steps_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_list_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" jsonb,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_list_v_items_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"text" jsonb,
  	"style" "enum___services_v_b_list_v_style" DEFAULT 'checks',
  	"in_card" boolean DEFAULT false,
  	"image_id" integer,
  	"caption" varchar,
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_list_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_list_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_faq_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___services_v_b_faq_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_cta_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum___services_v_b_cta_v_variant" DEFAULT 'band',
  	"badge" varchar,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum___services_v_b_cta_v_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"secondary_label" varchar,
  	"secondary_type" "enum___services_v_b_cta_v_secondary_type" DEFAULT 'internal',
  	"secondary_anchor" varchar,
  	"secondary_url" varchar,
  	"icon" "enum___services_v_b_cta_v_icon",
  	"show_address" boolean DEFAULT false,
  	"image_id" integer,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_mnf_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_mnf_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"layout" "enum___services_v_b_mnf_v_layout" DEFAULT 'centered',
  	"text" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"emphasis" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_mnf_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_spot_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_spot_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_spot_v_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_spot_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT '3B Récup’',
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"primary_label" varchar,
  	"primary_type" "enum___services_v_b_spot_v_primary_type" DEFAULT 'internal',
  	"primary_anchor" varchar,
  	"primary_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_gal_v_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_gal_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___services_v_b_gal_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_table_v_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_table_v_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_table_v_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_table_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"note" varchar,
  	"tone" "enum___services_v_b_table_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_quote_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"role" varchar,
  	"image_id" integer,
  	"tone" "enum___services_v_b_quote_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_proofs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum___services_v_b_proofs_v_variant" DEFAULT 'band',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_area_v_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum___services_v_b_area_v_sectors_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_b_area_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"text" jsonb,
  	"show_map" boolean DEFAULT true,
  	"tone" "enum___services_v_b_area_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_team_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___services_v_b_team_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_reviews_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"tone" "enum___services_v_b_reviews_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_arts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"mode" "enum___services_v_b_arts_v_mode" DEFAULT 'all',
  	"cta_label" varchar,
  	"cta_type" "enum___services_v_b_arts_v_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"tone" "enum___services_v_b_arts_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_form_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"intro" varchar,
  	"form_id" integer,
  	"show_company_info" boolean DEFAULT true,
  	"privacy_notice" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "__services_v_b_rich_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"show_toc" boolean DEFAULT false,
  	"boxed" boolean DEFAULT false,
  	"tone" "enum___services_v_b_rich_v_tone" DEFAULT 'cream',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_menu_label" varchar,
  	"version_order" numeric DEFAULT 10,
  	"version_icon" "enum__services_v_version_icon" DEFAULT 'roof',
  	"version_card_title" varchar,
  	"version_short_label" varchar,
  	"version_filter_key" varchar,
  	"version_card_text" varchar,
  	"version_card_link_label" varchar DEFAULT 'En savoir plus',
  	"version_image_id" integer,
  	"version_schema_service_type" varchar,
  	"version_schema_description" varchar,
  	"version_hero_variant" "enum__services_v_version_hero_variant" DEFAULT 'collage',
  	"version_hero_kicker" varchar,
  	"version_hero_title" varchar,
  	"version_hero_title_accent" varchar,
  	"version_hero_text" jsonb,
  	"version_hero_primary_cta_label" varchar,
  	"version_hero_primary_cta_type" "enum__services_v_version_hero_primary_cta_type" DEFAULT 'internal',
  	"version_hero_primary_cta_anchor" varchar,
  	"version_hero_primary_cta_url" varchar,
  	"version_hero_secondary_cta_label" varchar,
  	"version_hero_secondary_cta_type" "enum__services_v_version_hero_secondary_cta_type" DEFAULT 'internal',
  	"version_hero_secondary_cta_anchor" varchar,
  	"version_hero_secondary_cta_url" varchar,
  	"version_hero_caption" varchar,
  	"version_tldr" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"media_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "projects_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "projects_materials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "projects_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"title_accent" varchar,
  	"short_title" varchar,
  	"commune_id" integer,
  	"locality" varchar,
  	"hero_image_id" integer,
  	"summary" varchar,
  	"description" jsonb,
  	"facts_year" varchar,
  	"facts_duration" varchar,
  	"facts_surface" varchar,
  	"facts_architect" varchar,
  	"facts_context" varchar,
  	"show_recup_link" boolean DEFAULT false,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_noindex" boolean DEFAULT false,
  	"slug" varchar,
  	"featured" boolean DEFAULT false,
  	"order" numeric DEFAULT 100,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"pages_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "_projects_v_version_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_materials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_title_accent" varchar,
  	"version_short_title" varchar,
  	"version_commune_id" integer,
  	"version_locality" varchar,
  	"version_hero_image_id" integer,
  	"version_summary" varchar,
  	"version_description" jsonb,
  	"version_facts_year" varchar,
  	"version_facts_duration" varchar,
  	"version_facts_surface" varchar,
  	"version_facts_architect" varchar,
  	"version_facts_context" varchar,
  	"version_show_recup_link" boolean DEFAULT false,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_noindex" boolean DEFAULT false,
  	"version_slug" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_order" numeric DEFAULT 100,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_projects_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_projects_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"pages_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "communes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"department" varchar DEFAULT 'Hautes-Alpes',
  	"area" "enum_communes_area" DEFAULT 'vallouise-ecrins',
  	"villages" varchar,
  	"sector_id" integer,
  	"latitude" numeric,
  	"longitude" numeric,
  	"show_on_map" boolean DEFAULT true,
  	"in_area_served" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"source_key" varchar,
  	"topic" "enum_faqs_topic" DEFAULT 'general',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"kind" "enum_media_kind" DEFAULT 'chantier',
  	"credit" varchar,
  	"blur_data_u_r_l" varchar,
  	"source_key" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"photo_id" integer,
  	"bio" varchar,
  	"order" numeric DEFAULT 10,
  	"visible" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "reviews" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"author" varchar NOT NULL,
  	"commune" varchar,
  	"text" varchar NOT NULL,
  	"rating" numeric NOT NULL,
  	"source" "enum_reviews_source" DEFAULT 'google',
  	"date" timestamp(3) with time zone NOT NULL,
  	"published" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"type" "enum_redirects_type" DEFAULT '301' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer
  );
  
  CREATE TABLE "validation_points" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"page" varchar NOT NULL,
  	"status" "enum_validation_points_status" DEFAULT 'open' NOT NULL,
  	"priority" "enum_validation_points_priority" DEFAULT 'normal',
  	"question" varchar NOT NULL,
  	"decision" varchar NOT NULL,
  	"answer" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar,
  	"username" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"pages_id" integer,
  	"articles_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"communes_id" integer,
  	"faqs_id" integer,
  	"media_id" integer,
  	"team_id" integer,
  	"reviews_id" integer,
  	"redirects_id" integer,
  	"validation_points_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "company_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"day" "enum_company_hours_day" NOT NULL,
  	"closed" boolean DEFAULT false,
  	"opens" varchar,
  	"closes" varchar,
  	"opens2" varchar,
  	"closes2" varchar
  );
  
  CREATE TABLE "company_closures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"from" timestamp(3) with time zone NOT NULL,
  	"to" timestamp(3) with time zone NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "company_rge_domains" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "company_other_profiles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "company" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"tagline" varchar,
  	"description" varchar,
  	"address_street" varchar NOT NULL,
  	"address_postal_code" varchar NOT NULL,
  	"address_city" varchar NOT NULL,
  	"address_region" varchar,
  	"phone" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"geo_latitude" numeric,
  	"geo_longitude" numeric,
  	"hours_note" varchar,
  	"legal_name" varchar,
  	"legal_form" varchar,
  	"siren" varchar,
  	"siret" varchar,
  	"ape" varchar,
  	"founding_year" numeric,
  	"founder" varchar,
  	"founder_role" varchar,
  	"rge_label" varchar DEFAULT 'Qualifié RGE (Qualibat)',
  	"rge_holder" varchar,
  	"rge_directory_url" varchar,
  	"rge_certificate_number" varchar,
  	"legal_publication_director" varchar,
  	"legal_trade_register" varchar,
  	"legal_vat_number" varchar,
  	"legal_insurance" varchar,
  	"legal_mediator" varchar,
  	"legal_host_name" varchar DEFAULT 'Vercel Inc.',
  	"legal_host_address" varchar DEFAULT '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  	"legal_host_website" varchar DEFAULT 'https://vercel.com',
  	"facebook" varchar,
  	"google_business_profile" varchar,
  	"google_review_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"kind" "enum_header_nav_kind" DEFAULT 'link',
  	"highlight" boolean DEFAULT false,
  	"link_type" "enum_header_nav_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"cta_type" "enum_header_cta_type" DEFAULT 'internal',
  	"cta_anchor" varchar,
  	"cta_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_footer_columns_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"source" "enum_footer_columns_source" DEFAULT 'manual'
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar NOT NULL,
  	"link_type" "enum_footer_legal_links_link_type" DEFAULT 'internal',
  	"link_anchor" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"projects_id" integer,
  	"articles_id" integer
  );
  
  CREATE TABLE "proofs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"icon" "enum_proofs_items_icon"
  );
  
  CREATE TABLE "proofs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"general_breadcrumb_home" varchar DEFAULT 'Accueil',
  	"general_tldr_label" varchar DEFAULT 'En bref',
  	"general_call_label" varchar DEFAULT 'Appeler',
  	"general_review_prompt" varchar DEFAULT 'Vous avez travaillé avec nous ?',
  	"general_review_link" varchar DEFAULT 'Laissez un avis sur Google',
  	"general_project_card_link" varchar DEFAULT 'Voir les travaux',
  	"general_project_photos" varchar DEFAULT '{n} photos',
  	"general_article_card_link" varchar DEFAULT 'Lire le guide',
  	"general_service_card_link" varchar DEFAULT 'En savoir plus',
  	"project_hero_primary" varchar DEFAULT 'Demander mon devis',
  	"project_hero_secondary" varchar DEFAULT 'Toutes nos réalisations',
  	"project_intro_kicker" varchar DEFAULT 'Le projet',
  	"project_intro_title" varchar DEFAULT 'Le projet à **{commune}**',
  	"project_intro_title_no_commune" varchar DEFAULT 'Le **projet**',
  	"project_facts_title" varchar DEFAULT 'Fiche technique',
  	"project_fact_commune" varchar DEFAULT 'Commune',
  	"project_fact_service" varchar DEFAULT 'Prestation',
  	"project_fact_year" varchar DEFAULT 'Année',
  	"project_fact_duration" varchar DEFAULT 'Durée',
  	"project_fact_surface" varchar DEFAULT 'Surface',
  	"project_fact_context" varchar DEFAULT 'Contexte',
  	"project_fact_architect" varchar DEFAULT 'Architecte',
  	"project_steps_kicker" varchar DEFAULT 'Étape par étape',
  	"project_steps_title" varchar DEFAULT 'Ce que nous avons **fait**',
  	"project_gallery_kicker" varchar DEFAULT 'En images',
  	"project_gallery_title" varchar DEFAULT 'Le chantier en **{n} photos**',
  	"project_materials_kicker" varchar DEFAULT 'Matériaux',
  	"project_materials_title" varchar DEFAULT 'Les **matériaux** du chantier',
  	"project_recup_link" varchar DEFAULT 'Découvrir 3B Récup’',
  	"project_more_kicker" varchar DEFAULT 'Pour aller plus loin',
  	"project_more_title" varchar DEFAULT 'Le **savoir-faire** derrière ce chantier',
  	"project_service_card_text" varchar DEFAULT 'Techniques, étapes et questions fréquentes : tout ce que nous faisons en {prestation}.',
  	"project_service_card_link" varchar DEFAULT 'Voir la prestation',
  	"project_sector_card_text" varchar DEFAULT 'Nos autres chantiers et les communes où nous intervenons autour de {secteur}.',
  	"project_sector_card_link" varchar DEFAULT 'Voir nos chantiers du secteur',
  	"project_outside_title" varchar DEFAULT 'Où intervenons-nous ?',
  	"project_outside_text" varchar DEFAULT '« Basé dans le nord des Hautes-Alpes, nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes. »',
  	"project_outside_link" varchar DEFAULT 'Voir toutes nos réalisations',
  	"project_similar_kicker" varchar DEFAULT 'D’autres chantiers',
  	"project_similar_title" varchar DEFAULT 'Des réalisations **proches**',
  	"project_similar_link" varchar DEFAULT 'Voir toutes nos réalisations',
  	"project_cta_title" varchar DEFAULT 'Un projet **semblable** ?',
  	"project_cta_text" varchar DEFAULT 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlons du vôtre lors d’une rencontre : nous vous proposerons un devis détaillé, adapté à votre projet.',
  	"project_cta_primary" varchar DEFAULT 'Demander mon devis',
  	"project_cta_secondary" varchar DEFAULT 'Appeler le {telephone}',
  	"article_toc_title" varchar DEFAULT 'Sommaire',
  	"article_byline" varchar DEFAULT 'Par {auteur}',
  	"article_published" varchar DEFAULT 'Publié le {date}',
  	"article_updated" varchar DEFAULT 'Mis à jour le {date}',
  	"article_reading_time" varchar DEFAULT '{n} min de lecture',
  	"explorer_all" varchar DEFAULT 'Toutes',
  	"explorer_all_communes" varchar DEFAULT 'Toutes les communes',
  	"explorer_count" varchar DEFAULT '{n} chantiers',
  	"explorer_count_one" varchar DEFAULT '1 chantier',
  	"explorer_reset" varchar DEFAULT 'Effacer les filtres',
  	"explorer_other_group" varchar DEFAULT 'Autres chantiers',
  	"explorer_area_brianconnais" varchar DEFAULT 'Briançon et Briançonnais',
  	"explorer_area_serre_chevalier" varchar DEFAULT 'Serre Chevalier',
  	"explorer_area_vallouise" varchar DEFAULT 'Vallouise et Pays des Écrins',
  	"explorer_area_outside" varchar DEFAULT 'Hors Hautes-Alpes',
  	"form_required_note" varchar DEFAULT 'Les champs marqués d’un astérisque sont obligatoires.',
  	"form_sending" varchar DEFAULT 'Envoi en cours…',
  	"form_add_files" varchar DEFAULT 'Ajouter des fichiers',
  	"form_remove_file" varchar DEFAULT 'Retirer',
  	"form_too_soon" varchar DEFAULT 'Merci de prendre quelques secondes pour relire votre demande avant de l’envoyer.',
  	"form_too_many" varchar DEFAULT 'Plusieurs demandes viennent d’être envoyées depuis votre connexion. Réessayez dans quelques minutes ou appelez-nous au {telephone}.',
  	"form_success_cta" varchar DEFAULT 'Voir nos réalisations en attendant',
  	"form_required_error" varchar DEFAULT 'Ce champ est obligatoire.',
  	"form_email_error" varchar DEFAULT 'Indiquez une adresse e-mail valide.',
  	"form_phone_error" varchar DEFAULT 'Indiquez un numéro de téléphone valide.',
  	"form_file_error" varchar DEFAULT 'Ce fichier ne peut pas être envoyé (format ou taille).',
  	"form_uploading" varchar DEFAULT 'Envoi du fichier…',
  	"form_contact_title" varchar DEFAULT 'Nos coordonnées',
  	"form_hours_title" varchar DEFAULT 'Horaires',
  	"not_found_title" varchar DEFAULT 'Cette page n’existe pas (ou plus)',
  	"not_found_text" varchar DEFAULT 'L’adresse a peut-être changé. Voici nos prestations, ou appelez-nous directement au {telephone}.',
  	"not_found_search_label" varchar DEFAULT 'Trouver une prestation',
  	"not_found_search_placeholder" varchar DEFAULT 'Ex. : escalier, isolation, charpente…',
  	"not_found_home_link" varchar DEFAULT 'Retour à l’accueil',
  	"not_found_contact_link" varchar DEFAULT 'Nous contacter',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_settings_area_served" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "seo_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_template" varchar DEFAULT '%s | 3B Charpente',
  	"default_description" varchar,
  	"default_image_id" integer,
  	"llms_intro" varchar,
  	"google_verification" varchar,
  	"bing_verification" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_settings_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "analytics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"provider" "enum_analytics_provider" DEFAULT 'vercel',
  	"plausible_domain" varchar,
  	"umami_website_id" varchar,
  	"umami_script_url" varchar DEFAULT 'https://cloud.umami.is/script.js',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "forms_blocks_text_input" ADD CONSTRAINT "forms_blocks_text_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email_input" ADD CONSTRAINT "forms_blocks_email_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_tel_input" ADD CONSTRAINT "forms_blocks_tel_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_commune_input" ADD CONSTRAINT "forms_blocks_commune_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea_input" ADD CONSTRAINT "forms_blocks_textarea_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_input_options" ADD CONSTRAINT "forms_blocks_select_input_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_input"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_input" ADD CONSTRAINT "forms_blocks_select_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_radio_input_options" ADD CONSTRAINT "forms_blocks_radio_input_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_radio_input"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_radio_input" ADD CONSTRAINT "forms_blocks_radio_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox_group_options" ADD CONSTRAINT "forms_blocks_checkbox_group_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox_group"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox_group" ADD CONSTRAINT "forms_blocks_checkbox_group_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_file_input" ADD CONSTRAINT "forms_blocks_file_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_attachments" ADD CONSTRAINT "form_submissions_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_hero_proofs" ADD CONSTRAINT "pages_hero_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_txtimg_links" ADD CONSTRAINT "pages_b_txtimg_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_txtimg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_txtimg" ADD CONSTRAINT "pages_b_txtimg_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_cards_items" ADD CONSTRAINT "pages_b_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_cards_items" ADD CONSTRAINT "pages_b_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_cards" ADD CONSTRAINT "pages_b_cards_aside_image_id_media_id_fk" FOREIGN KEY ("aside_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_cards" ADD CONSTRAINT "pages_b_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_svc" ADD CONSTRAINT "pages_b_svc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_proj_items" ADD CONSTRAINT "pages_b_proj_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_proj_items" ADD CONSTRAINT "pages_b_proj_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_proj" ADD CONSTRAINT "pages_b_proj_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_proj" ADD CONSTRAINT "pages_b_proj_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_proj" ADD CONSTRAINT "pages_b_proj_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_explr_groups_links" ADD CONSTRAINT "pages_b_explr_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_explr_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_explr_groups" ADD CONSTRAINT "pages_b_explr_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_explr"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_explr" ADD CONSTRAINT "pages_b_explr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_steps_steps" ADD CONSTRAINT "pages_b_steps_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_steps_steps" ADD CONSTRAINT "pages_b_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_steps" ADD CONSTRAINT "pages_b_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_list_items" ADD CONSTRAINT "pages_b_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_list" ADD CONSTRAINT "pages_b_list_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_list" ADD CONSTRAINT "pages_b_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_faq" ADD CONSTRAINT "pages_b_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_cta" ADD CONSTRAINT "pages_b_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_cta" ADD CONSTRAINT "pages_b_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_mnf_items" ADD CONSTRAINT "pages_b_mnf_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_mnf"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_mnf" ADD CONSTRAINT "pages_b_mnf_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_mnf" ADD CONSTRAINT "pages_b_mnf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_spot_steps" ADD CONSTRAINT "pages_b_spot_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_spot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_spot_links" ADD CONSTRAINT "pages_b_spot_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_spot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_spot" ADD CONSTRAINT "pages_b_spot_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_gal_images" ADD CONSTRAINT "pages_b_gal_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_gal_images" ADD CONSTRAINT "pages_b_gal_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_gal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_gal" ADD CONSTRAINT "pages_b_gal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_table_columns" ADD CONSTRAINT "pages_b_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_table_rows_cells" ADD CONSTRAINT "pages_b_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_table_rows" ADD CONSTRAINT "pages_b_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_table" ADD CONSTRAINT "pages_b_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_quote" ADD CONSTRAINT "pages_b_quote_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_quote" ADD CONSTRAINT "pages_b_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_proofs" ADD CONSTRAINT "pages_b_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_area_sectors" ADD CONSTRAINT "pages_b_area_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_b_area"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_area" ADD CONSTRAINT "pages_b_area_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_team" ADD CONSTRAINT "pages_b_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_reviews" ADD CONSTRAINT "pages_b_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_arts" ADD CONSTRAINT "pages_b_arts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_form" ADD CONSTRAINT "pages_b_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_b_form" ADD CONSTRAINT "pages_b_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_b_rich" ADD CONSTRAINT "pages_b_rich_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_proofs" ADD CONSTRAINT "_pages_v_version_hero_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_txtimg_v_links" ADD CONSTRAINT "__pages_v_b_txtimg_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_txtimg_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_txtimg_v" ADD CONSTRAINT "__pages_v_b_txtimg_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_cards_v_items" ADD CONSTRAINT "__pages_v_b_cards_v_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_cards_v_items" ADD CONSTRAINT "__pages_v_b_cards_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_cards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_cards_v" ADD CONSTRAINT "__pages_v_b_cards_v_aside_image_id_media_id_fk" FOREIGN KEY ("aside_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_cards_v" ADD CONSTRAINT "__pages_v_b_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_svc_v" ADD CONSTRAINT "__pages_v_b_svc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_proj_v_items" ADD CONSTRAINT "__pages_v_b_proj_v_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_proj_v_items" ADD CONSTRAINT "__pages_v_b_proj_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_proj_v" ADD CONSTRAINT "__pages_v_b_proj_v_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_proj_v" ADD CONSTRAINT "__pages_v_b_proj_v_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_proj_v" ADD CONSTRAINT "__pages_v_b_proj_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_explr_v_groups_links" ADD CONSTRAINT "__pages_v_b_explr_v_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_explr_v_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_explr_v_groups" ADD CONSTRAINT "__pages_v_b_explr_v_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_explr_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_explr_v" ADD CONSTRAINT "__pages_v_b_explr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_steps_v_steps" ADD CONSTRAINT "__pages_v_b_steps_v_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_steps_v_steps" ADD CONSTRAINT "__pages_v_b_steps_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_steps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_steps_v" ADD CONSTRAINT "__pages_v_b_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_list_v_items" ADD CONSTRAINT "__pages_v_b_list_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_list_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_list_v" ADD CONSTRAINT "__pages_v_b_list_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_list_v" ADD CONSTRAINT "__pages_v_b_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_faq_v" ADD CONSTRAINT "__pages_v_b_faq_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_cta_v" ADD CONSTRAINT "__pages_v_b_cta_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_cta_v" ADD CONSTRAINT "__pages_v_b_cta_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_mnf_v_items" ADD CONSTRAINT "__pages_v_b_mnf_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_mnf_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_mnf_v" ADD CONSTRAINT "__pages_v_b_mnf_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_mnf_v" ADD CONSTRAINT "__pages_v_b_mnf_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_spot_v_steps" ADD CONSTRAINT "__pages_v_b_spot_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_spot_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_spot_v_links" ADD CONSTRAINT "__pages_v_b_spot_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_spot_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_spot_v" ADD CONSTRAINT "__pages_v_b_spot_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_gal_v_images" ADD CONSTRAINT "__pages_v_b_gal_v_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_gal_v_images" ADD CONSTRAINT "__pages_v_b_gal_v_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_gal_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_gal_v" ADD CONSTRAINT "__pages_v_b_gal_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_table_v_columns" ADD CONSTRAINT "__pages_v_b_table_v_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_table_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_table_v_rows_cells" ADD CONSTRAINT "__pages_v_b_table_v_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_table_v_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_table_v_rows" ADD CONSTRAINT "__pages_v_b_table_v_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_table_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_table_v" ADD CONSTRAINT "__pages_v_b_table_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_quote_v" ADD CONSTRAINT "__pages_v_b_quote_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_quote_v" ADD CONSTRAINT "__pages_v_b_quote_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_proofs_v" ADD CONSTRAINT "__pages_v_b_proofs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_area_v_sectors" ADD CONSTRAINT "__pages_v_b_area_v_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__pages_v_b_area_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_area_v" ADD CONSTRAINT "__pages_v_b_area_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_team_v" ADD CONSTRAINT "__pages_v_b_team_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_reviews_v" ADD CONSTRAINT "__pages_v_b_reviews_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_arts_v" ADD CONSTRAINT "__pages_v_b_arts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_form_v" ADD CONSTRAINT "__pages_v_b_form_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__pages_v_b_form_v" ADD CONSTRAINT "__pages_v_b_form_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__pages_v_b_rich_v" ADD CONSTRAINT "__pages_v_b_rich_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_txtimg_links" ADD CONSTRAINT "articles_b_txtimg_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_txtimg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_txtimg" ADD CONSTRAINT "articles_b_txtimg_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_cards_items" ADD CONSTRAINT "articles_b_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_cards_items" ADD CONSTRAINT "articles_b_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_cards" ADD CONSTRAINT "articles_b_cards_aside_image_id_media_id_fk" FOREIGN KEY ("aside_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_cards" ADD CONSTRAINT "articles_b_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_svc" ADD CONSTRAINT "articles_b_svc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_proj_items" ADD CONSTRAINT "articles_b_proj_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_proj_items" ADD CONSTRAINT "articles_b_proj_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_proj" ADD CONSTRAINT "articles_b_proj_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_proj" ADD CONSTRAINT "articles_b_proj_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_proj" ADD CONSTRAINT "articles_b_proj_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_explr_groups_links" ADD CONSTRAINT "articles_b_explr_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_explr_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_explr_groups" ADD CONSTRAINT "articles_b_explr_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_explr"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_explr" ADD CONSTRAINT "articles_b_explr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_steps_steps" ADD CONSTRAINT "articles_b_steps_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_steps_steps" ADD CONSTRAINT "articles_b_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_steps" ADD CONSTRAINT "articles_b_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_list_items" ADD CONSTRAINT "articles_b_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_list" ADD CONSTRAINT "articles_b_list_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_list" ADD CONSTRAINT "articles_b_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_faq" ADD CONSTRAINT "articles_b_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_cta" ADD CONSTRAINT "articles_b_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_cta" ADD CONSTRAINT "articles_b_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_mnf_items" ADD CONSTRAINT "articles_b_mnf_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_mnf"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_mnf" ADD CONSTRAINT "articles_b_mnf_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_mnf" ADD CONSTRAINT "articles_b_mnf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_spot_steps" ADD CONSTRAINT "articles_b_spot_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_spot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_spot_links" ADD CONSTRAINT "articles_b_spot_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_spot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_spot" ADD CONSTRAINT "articles_b_spot_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_gal_images" ADD CONSTRAINT "articles_b_gal_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_gal_images" ADD CONSTRAINT "articles_b_gal_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_gal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_gal" ADD CONSTRAINT "articles_b_gal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_table_columns" ADD CONSTRAINT "articles_b_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_table_rows_cells" ADD CONSTRAINT "articles_b_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_table_rows" ADD CONSTRAINT "articles_b_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_table" ADD CONSTRAINT "articles_b_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_quote" ADD CONSTRAINT "articles_b_quote_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_quote" ADD CONSTRAINT "articles_b_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_proofs" ADD CONSTRAINT "articles_b_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_area_sectors" ADD CONSTRAINT "articles_b_area_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_b_area"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_area" ADD CONSTRAINT "articles_b_area_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_team" ADD CONSTRAINT "articles_b_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_reviews" ADD CONSTRAINT "articles_b_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_arts" ADD CONSTRAINT "articles_b_arts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_form" ADD CONSTRAINT "articles_b_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_b_form" ADD CONSTRAINT "articles_b_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_b_rich" ADD CONSTRAINT "articles_b_rich_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles" ADD CONSTRAINT "articles_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles" ADD CONSTRAINT "articles_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_txtimg_v_links" ADD CONSTRAINT "__articles_v_b_txtimg_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_txtimg_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_txtimg_v" ADD CONSTRAINT "__articles_v_b_txtimg_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_cards_v_items" ADD CONSTRAINT "__articles_v_b_cards_v_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_cards_v_items" ADD CONSTRAINT "__articles_v_b_cards_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_cards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_cards_v" ADD CONSTRAINT "__articles_v_b_cards_v_aside_image_id_media_id_fk" FOREIGN KEY ("aside_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_cards_v" ADD CONSTRAINT "__articles_v_b_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_svc_v" ADD CONSTRAINT "__articles_v_b_svc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_proj_v_items" ADD CONSTRAINT "__articles_v_b_proj_v_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_proj_v_items" ADD CONSTRAINT "__articles_v_b_proj_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_proj_v" ADD CONSTRAINT "__articles_v_b_proj_v_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_proj_v" ADD CONSTRAINT "__articles_v_b_proj_v_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_proj_v" ADD CONSTRAINT "__articles_v_b_proj_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_explr_v_groups_links" ADD CONSTRAINT "__articles_v_b_explr_v_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_explr_v_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_explr_v_groups" ADD CONSTRAINT "__articles_v_b_explr_v_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_explr_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_explr_v" ADD CONSTRAINT "__articles_v_b_explr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_steps_v_steps" ADD CONSTRAINT "__articles_v_b_steps_v_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_steps_v_steps" ADD CONSTRAINT "__articles_v_b_steps_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_steps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_steps_v" ADD CONSTRAINT "__articles_v_b_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_list_v_items" ADD CONSTRAINT "__articles_v_b_list_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_list_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_list_v" ADD CONSTRAINT "__articles_v_b_list_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_list_v" ADD CONSTRAINT "__articles_v_b_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_faq_v" ADD CONSTRAINT "__articles_v_b_faq_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_cta_v" ADD CONSTRAINT "__articles_v_b_cta_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_cta_v" ADD CONSTRAINT "__articles_v_b_cta_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_mnf_v_items" ADD CONSTRAINT "__articles_v_b_mnf_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_mnf_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_mnf_v" ADD CONSTRAINT "__articles_v_b_mnf_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_mnf_v" ADD CONSTRAINT "__articles_v_b_mnf_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_spot_v_steps" ADD CONSTRAINT "__articles_v_b_spot_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_spot_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_spot_v_links" ADD CONSTRAINT "__articles_v_b_spot_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_spot_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_spot_v" ADD CONSTRAINT "__articles_v_b_spot_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_gal_v_images" ADD CONSTRAINT "__articles_v_b_gal_v_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_gal_v_images" ADD CONSTRAINT "__articles_v_b_gal_v_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_gal_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_gal_v" ADD CONSTRAINT "__articles_v_b_gal_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_table_v_columns" ADD CONSTRAINT "__articles_v_b_table_v_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_table_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_table_v_rows_cells" ADD CONSTRAINT "__articles_v_b_table_v_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_table_v_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_table_v_rows" ADD CONSTRAINT "__articles_v_b_table_v_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_table_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_table_v" ADD CONSTRAINT "__articles_v_b_table_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_quote_v" ADD CONSTRAINT "__articles_v_b_quote_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_quote_v" ADD CONSTRAINT "__articles_v_b_quote_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_proofs_v" ADD CONSTRAINT "__articles_v_b_proofs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_area_v_sectors" ADD CONSTRAINT "__articles_v_b_area_v_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__articles_v_b_area_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_area_v" ADD CONSTRAINT "__articles_v_b_area_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_team_v" ADD CONSTRAINT "__articles_v_b_team_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_reviews_v" ADD CONSTRAINT "__articles_v_b_reviews_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_arts_v" ADD CONSTRAINT "__articles_v_b_arts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_form_v" ADD CONSTRAINT "__articles_v_b_form_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__articles_v_b_form_v" ADD CONSTRAINT "__articles_v_b_form_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__articles_v_b_rich_v" ADD CONSTRAINT "__articles_v_b_rich_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_parent_id_articles_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_hero_proofs" ADD CONSTRAINT "services_hero_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_txtimg_links" ADD CONSTRAINT "services_b_txtimg_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_txtimg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_txtimg" ADD CONSTRAINT "services_b_txtimg_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_cards_items" ADD CONSTRAINT "services_b_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_cards_items" ADD CONSTRAINT "services_b_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_cards" ADD CONSTRAINT "services_b_cards_aside_image_id_media_id_fk" FOREIGN KEY ("aside_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_cards" ADD CONSTRAINT "services_b_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_svc" ADD CONSTRAINT "services_b_svc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_proj_items" ADD CONSTRAINT "services_b_proj_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_proj_items" ADD CONSTRAINT "services_b_proj_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_proj"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_proj" ADD CONSTRAINT "services_b_proj_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_proj" ADD CONSTRAINT "services_b_proj_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_proj" ADD CONSTRAINT "services_b_proj_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_explr_groups_links" ADD CONSTRAINT "services_b_explr_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_explr_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_explr_groups" ADD CONSTRAINT "services_b_explr_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_explr"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_explr" ADD CONSTRAINT "services_b_explr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_steps_steps" ADD CONSTRAINT "services_b_steps_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_steps_steps" ADD CONSTRAINT "services_b_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_steps" ADD CONSTRAINT "services_b_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_list_items" ADD CONSTRAINT "services_b_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_list" ADD CONSTRAINT "services_b_list_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_list" ADD CONSTRAINT "services_b_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_faq" ADD CONSTRAINT "services_b_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_cta" ADD CONSTRAINT "services_b_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_cta" ADD CONSTRAINT "services_b_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_mnf_items" ADD CONSTRAINT "services_b_mnf_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_mnf"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_mnf" ADD CONSTRAINT "services_b_mnf_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_mnf" ADD CONSTRAINT "services_b_mnf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_spot_steps" ADD CONSTRAINT "services_b_spot_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_spot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_spot_links" ADD CONSTRAINT "services_b_spot_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_spot"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_spot" ADD CONSTRAINT "services_b_spot_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_gal_images" ADD CONSTRAINT "services_b_gal_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_gal_images" ADD CONSTRAINT "services_b_gal_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_gal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_gal" ADD CONSTRAINT "services_b_gal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_table_columns" ADD CONSTRAINT "services_b_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_table_rows_cells" ADD CONSTRAINT "services_b_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_table_rows" ADD CONSTRAINT "services_b_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_table" ADD CONSTRAINT "services_b_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_quote" ADD CONSTRAINT "services_b_quote_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_quote" ADD CONSTRAINT "services_b_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_proofs" ADD CONSTRAINT "services_b_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_area_sectors" ADD CONSTRAINT "services_b_area_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_b_area"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_area" ADD CONSTRAINT "services_b_area_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_team" ADD CONSTRAINT "services_b_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_reviews" ADD CONSTRAINT "services_b_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_arts" ADD CONSTRAINT "services_b_arts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_form" ADD CONSTRAINT "services_b_form_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_b_form" ADD CONSTRAINT "services_b_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_b_rich" ADD CONSTRAINT "services_b_rich_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_hero_proofs" ADD CONSTRAINT "_services_v_version_hero_proofs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_txtimg_v_links" ADD CONSTRAINT "__services_v_b_txtimg_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_txtimg_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_txtimg_v" ADD CONSTRAINT "__services_v_b_txtimg_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_cards_v_items" ADD CONSTRAINT "__services_v_b_cards_v_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_cards_v_items" ADD CONSTRAINT "__services_v_b_cards_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_cards_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_cards_v" ADD CONSTRAINT "__services_v_b_cards_v_aside_image_id_media_id_fk" FOREIGN KEY ("aside_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_cards_v" ADD CONSTRAINT "__services_v_b_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_svc_v" ADD CONSTRAINT "__services_v_b_svc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_proj_v_items" ADD CONSTRAINT "__services_v_b_proj_v_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_proj_v_items" ADD CONSTRAINT "__services_v_b_proj_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_proj_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_proj_v" ADD CONSTRAINT "__services_v_b_proj_v_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_proj_v" ADD CONSTRAINT "__services_v_b_proj_v_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_proj_v" ADD CONSTRAINT "__services_v_b_proj_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_explr_v_groups_links" ADD CONSTRAINT "__services_v_b_explr_v_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_explr_v_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_explr_v_groups" ADD CONSTRAINT "__services_v_b_explr_v_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_explr_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_explr_v" ADD CONSTRAINT "__services_v_b_explr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_steps_v_steps" ADD CONSTRAINT "__services_v_b_steps_v_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_steps_v_steps" ADD CONSTRAINT "__services_v_b_steps_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_steps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_steps_v" ADD CONSTRAINT "__services_v_b_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_list_v_items" ADD CONSTRAINT "__services_v_b_list_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_list_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_list_v" ADD CONSTRAINT "__services_v_b_list_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_list_v" ADD CONSTRAINT "__services_v_b_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_faq_v" ADD CONSTRAINT "__services_v_b_faq_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_cta_v" ADD CONSTRAINT "__services_v_b_cta_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_cta_v" ADD CONSTRAINT "__services_v_b_cta_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_mnf_v_items" ADD CONSTRAINT "__services_v_b_mnf_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_mnf_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_mnf_v" ADD CONSTRAINT "__services_v_b_mnf_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_mnf_v" ADD CONSTRAINT "__services_v_b_mnf_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_spot_v_steps" ADD CONSTRAINT "__services_v_b_spot_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_spot_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_spot_v_links" ADD CONSTRAINT "__services_v_b_spot_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_spot_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_spot_v" ADD CONSTRAINT "__services_v_b_spot_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_gal_v_images" ADD CONSTRAINT "__services_v_b_gal_v_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_gal_v_images" ADD CONSTRAINT "__services_v_b_gal_v_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_gal_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_gal_v" ADD CONSTRAINT "__services_v_b_gal_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_table_v_columns" ADD CONSTRAINT "__services_v_b_table_v_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_table_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_table_v_rows_cells" ADD CONSTRAINT "__services_v_b_table_v_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_table_v_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_table_v_rows" ADD CONSTRAINT "__services_v_b_table_v_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_table_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_table_v" ADD CONSTRAINT "__services_v_b_table_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_quote_v" ADD CONSTRAINT "__services_v_b_quote_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_quote_v" ADD CONSTRAINT "__services_v_b_quote_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_proofs_v" ADD CONSTRAINT "__services_v_b_proofs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_area_v_sectors" ADD CONSTRAINT "__services_v_b_area_v_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."__services_v_b_area_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_area_v" ADD CONSTRAINT "__services_v_b_area_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_team_v" ADD CONSTRAINT "__services_v_b_team_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_reviews_v" ADD CONSTRAINT "__services_v_b_reviews_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_arts_v" ADD CONSTRAINT "__services_v_b_arts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_form_v" ADD CONSTRAINT "__services_v_b_form_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_b_form_v" ADD CONSTRAINT "__services_v_b_form_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_b_rich_v" ADD CONSTRAINT "__services_v_b_rich_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_steps" ADD CONSTRAINT "projects_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_materials" ADD CONSTRAINT "projects_materials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_commune_id_communes_id_fk" FOREIGN KEY ("commune_id") REFERENCES "public"."communes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_texts" ADD CONSTRAINT "projects_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_steps" ADD CONSTRAINT "_projects_v_version_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_materials" ADD CONSTRAINT "_projects_v_version_materials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_commune_id_communes_id_fk" FOREIGN KEY ("version_commune_id") REFERENCES "public"."communes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_texts" ADD CONSTRAINT "_projects_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "communes" ADD CONSTRAINT "communes_sector_id_pages_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_communes_fk" FOREIGN KEY ("communes_id") REFERENCES "public"."communes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_reviews_fk" FOREIGN KEY ("reviews_id") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_validation_points_fk" FOREIGN KEY ("validation_points_id") REFERENCES "public"."validation_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "company_hours" ADD CONSTRAINT "company_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "company_closures" ADD CONSTRAINT "company_closures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "company_rge_domains" ADD CONSTRAINT "company_rge_domains_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "company_other_profiles" ADD CONSTRAINT "company_other_profiles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav" ADD CONSTRAINT "header_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proofs_items" ADD CONSTRAINT "proofs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proofs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings_area_served" ADD CONSTRAINT "seo_settings_area_served_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_default_image_id_media_id_fk" FOREIGN KEY ("default_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings_texts" ADD CONSTRAINT "seo_settings_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "forms_blocks_text_input_order_idx" ON "forms_blocks_text_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_input_parent_id_idx" ON "forms_blocks_text_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_input_path_idx" ON "forms_blocks_text_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_input_order_idx" ON "forms_blocks_email_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_input_parent_id_idx" ON "forms_blocks_email_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_input_path_idx" ON "forms_blocks_email_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_tel_input_order_idx" ON "forms_blocks_tel_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_tel_input_parent_id_idx" ON "forms_blocks_tel_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_tel_input_path_idx" ON "forms_blocks_tel_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_commune_input_order_idx" ON "forms_blocks_commune_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_commune_input_parent_id_idx" ON "forms_blocks_commune_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_commune_input_path_idx" ON "forms_blocks_commune_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_input_order_idx" ON "forms_blocks_textarea_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_input_parent_id_idx" ON "forms_blocks_textarea_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_input_path_idx" ON "forms_blocks_textarea_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_input_options_order_idx" ON "forms_blocks_select_input_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_input_options_parent_id_idx" ON "forms_blocks_select_input_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_input_order_idx" ON "forms_blocks_select_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_input_parent_id_idx" ON "forms_blocks_select_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_input_path_idx" ON "forms_blocks_select_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_radio_input_options_order_idx" ON "forms_blocks_radio_input_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_radio_input_options_parent_id_idx" ON "forms_blocks_radio_input_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_radio_input_order_idx" ON "forms_blocks_radio_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_radio_input_parent_id_idx" ON "forms_blocks_radio_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_radio_input_path_idx" ON "forms_blocks_radio_input" USING btree ("_path");
  CREATE INDEX "forms_blocks_checkbox_group_options_order_idx" ON "forms_blocks_checkbox_group_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_group_options_parent_id_idx" ON "forms_blocks_checkbox_group_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_group_order_idx" ON "forms_blocks_checkbox_group" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_group_parent_id_idx" ON "forms_blocks_checkbox_group" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_group_path_idx" ON "forms_blocks_checkbox_group" USING btree ("_path");
  CREATE INDEX "forms_blocks_file_input_order_idx" ON "forms_blocks_file_input" USING btree ("_order");
  CREATE INDEX "forms_blocks_file_input_parent_id_idx" ON "forms_blocks_file_input" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_file_input_path_idx" ON "forms_blocks_file_input" USING btree ("_path");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_attachments_order_idx" ON "form_submissions_attachments" USING btree ("_order");
  CREATE INDEX "form_submissions_attachments_parent_id_idx" ON "form_submissions_attachments" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "pages_hero_proofs_order_idx" ON "pages_hero_proofs" USING btree ("_order");
  CREATE INDEX "pages_hero_proofs_parent_id_idx" ON "pages_hero_proofs" USING btree ("_parent_id");
  CREATE INDEX "pages_b_txtimg_links_order_idx" ON "pages_b_txtimg_links" USING btree ("_order");
  CREATE INDEX "pages_b_txtimg_links_parent_id_idx" ON "pages_b_txtimg_links" USING btree ("_parent_id");
  CREATE INDEX "pages_b_txtimg_order_idx" ON "pages_b_txtimg" USING btree ("_order");
  CREATE INDEX "pages_b_txtimg_parent_id_idx" ON "pages_b_txtimg" USING btree ("_parent_id");
  CREATE INDEX "pages_b_txtimg_path_idx" ON "pages_b_txtimg" USING btree ("_path");
  CREATE INDEX "pages_b_cards_items_order_idx" ON "pages_b_cards_items" USING btree ("_order");
  CREATE INDEX "pages_b_cards_items_parent_id_idx" ON "pages_b_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_b_cards_items_image_idx" ON "pages_b_cards_items" USING btree ("image_id");
  CREATE INDEX "pages_b_cards_order_idx" ON "pages_b_cards" USING btree ("_order");
  CREATE INDEX "pages_b_cards_parent_id_idx" ON "pages_b_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_b_cards_path_idx" ON "pages_b_cards" USING btree ("_path");
  CREATE INDEX "pages_b_cards_aside_image_idx" ON "pages_b_cards" USING btree ("aside_image_id");
  CREATE INDEX "pages_b_svc_order_idx" ON "pages_b_svc" USING btree ("_order");
  CREATE INDEX "pages_b_svc_parent_id_idx" ON "pages_b_svc" USING btree ("_parent_id");
  CREATE INDEX "pages_b_svc_path_idx" ON "pages_b_svc" USING btree ("_path");
  CREATE INDEX "pages_b_proj_items_order_idx" ON "pages_b_proj_items" USING btree ("_order");
  CREATE INDEX "pages_b_proj_items_parent_id_idx" ON "pages_b_proj_items" USING btree ("_parent_id");
  CREATE INDEX "pages_b_proj_items_project_idx" ON "pages_b_proj_items" USING btree ("project_id");
  CREATE INDEX "pages_b_proj_order_idx" ON "pages_b_proj" USING btree ("_order");
  CREATE INDEX "pages_b_proj_parent_id_idx" ON "pages_b_proj" USING btree ("_parent_id");
  CREATE INDEX "pages_b_proj_path_idx" ON "pages_b_proj" USING btree ("_path");
  CREATE INDEX "pages_b_proj_service_idx" ON "pages_b_proj" USING btree ("service_id");
  CREATE INDEX "pages_b_proj_sector_idx" ON "pages_b_proj" USING btree ("sector_id");
  CREATE INDEX "pages_b_explr_groups_links_order_idx" ON "pages_b_explr_groups_links" USING btree ("_order");
  CREATE INDEX "pages_b_explr_groups_links_parent_id_idx" ON "pages_b_explr_groups_links" USING btree ("_parent_id");
  CREATE INDEX "pages_b_explr_groups_order_idx" ON "pages_b_explr_groups" USING btree ("_order");
  CREATE INDEX "pages_b_explr_groups_parent_id_idx" ON "pages_b_explr_groups" USING btree ("_parent_id");
  CREATE INDEX "pages_b_explr_order_idx" ON "pages_b_explr" USING btree ("_order");
  CREATE INDEX "pages_b_explr_parent_id_idx" ON "pages_b_explr" USING btree ("_parent_id");
  CREATE INDEX "pages_b_explr_path_idx" ON "pages_b_explr" USING btree ("_path");
  CREATE INDEX "pages_b_steps_steps_order_idx" ON "pages_b_steps_steps" USING btree ("_order");
  CREATE INDEX "pages_b_steps_steps_parent_id_idx" ON "pages_b_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_b_steps_steps_image_idx" ON "pages_b_steps_steps" USING btree ("image_id");
  CREATE INDEX "pages_b_steps_order_idx" ON "pages_b_steps" USING btree ("_order");
  CREATE INDEX "pages_b_steps_parent_id_idx" ON "pages_b_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_b_steps_path_idx" ON "pages_b_steps" USING btree ("_path");
  CREATE INDEX "pages_b_list_items_order_idx" ON "pages_b_list_items" USING btree ("_order");
  CREATE INDEX "pages_b_list_items_parent_id_idx" ON "pages_b_list_items" USING btree ("_parent_id");
  CREATE INDEX "pages_b_list_order_idx" ON "pages_b_list" USING btree ("_order");
  CREATE INDEX "pages_b_list_parent_id_idx" ON "pages_b_list" USING btree ("_parent_id");
  CREATE INDEX "pages_b_list_path_idx" ON "pages_b_list" USING btree ("_path");
  CREATE INDEX "pages_b_list_image_idx" ON "pages_b_list" USING btree ("image_id");
  CREATE INDEX "pages_b_faq_order_idx" ON "pages_b_faq" USING btree ("_order");
  CREATE INDEX "pages_b_faq_parent_id_idx" ON "pages_b_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_b_faq_path_idx" ON "pages_b_faq" USING btree ("_path");
  CREATE INDEX "pages_b_cta_order_idx" ON "pages_b_cta" USING btree ("_order");
  CREATE INDEX "pages_b_cta_parent_id_idx" ON "pages_b_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_b_cta_path_idx" ON "pages_b_cta" USING btree ("_path");
  CREATE INDEX "pages_b_cta_image_idx" ON "pages_b_cta" USING btree ("image_id");
  CREATE INDEX "pages_b_mnf_items_order_idx" ON "pages_b_mnf_items" USING btree ("_order");
  CREATE INDEX "pages_b_mnf_items_parent_id_idx" ON "pages_b_mnf_items" USING btree ("_parent_id");
  CREATE INDEX "pages_b_mnf_order_idx" ON "pages_b_mnf" USING btree ("_order");
  CREATE INDEX "pages_b_mnf_parent_id_idx" ON "pages_b_mnf" USING btree ("_parent_id");
  CREATE INDEX "pages_b_mnf_path_idx" ON "pages_b_mnf" USING btree ("_path");
  CREATE INDEX "pages_b_mnf_image_idx" ON "pages_b_mnf" USING btree ("image_id");
  CREATE INDEX "pages_b_spot_steps_order_idx" ON "pages_b_spot_steps" USING btree ("_order");
  CREATE INDEX "pages_b_spot_steps_parent_id_idx" ON "pages_b_spot_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_b_spot_links_order_idx" ON "pages_b_spot_links" USING btree ("_order");
  CREATE INDEX "pages_b_spot_links_parent_id_idx" ON "pages_b_spot_links" USING btree ("_parent_id");
  CREATE INDEX "pages_b_spot_order_idx" ON "pages_b_spot" USING btree ("_order");
  CREATE INDEX "pages_b_spot_parent_id_idx" ON "pages_b_spot" USING btree ("_parent_id");
  CREATE INDEX "pages_b_spot_path_idx" ON "pages_b_spot" USING btree ("_path");
  CREATE INDEX "pages_b_gal_images_order_idx" ON "pages_b_gal_images" USING btree ("_order");
  CREATE INDEX "pages_b_gal_images_parent_id_idx" ON "pages_b_gal_images" USING btree ("_parent_id");
  CREATE INDEX "pages_b_gal_images_image_idx" ON "pages_b_gal_images" USING btree ("image_id");
  CREATE INDEX "pages_b_gal_order_idx" ON "pages_b_gal" USING btree ("_order");
  CREATE INDEX "pages_b_gal_parent_id_idx" ON "pages_b_gal" USING btree ("_parent_id");
  CREATE INDEX "pages_b_gal_path_idx" ON "pages_b_gal" USING btree ("_path");
  CREATE INDEX "pages_b_table_columns_order_idx" ON "pages_b_table_columns" USING btree ("_order");
  CREATE INDEX "pages_b_table_columns_parent_id_idx" ON "pages_b_table_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_b_table_rows_cells_order_idx" ON "pages_b_table_rows_cells" USING btree ("_order");
  CREATE INDEX "pages_b_table_rows_cells_parent_id_idx" ON "pages_b_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "pages_b_table_rows_order_idx" ON "pages_b_table_rows" USING btree ("_order");
  CREATE INDEX "pages_b_table_rows_parent_id_idx" ON "pages_b_table_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_b_table_order_idx" ON "pages_b_table" USING btree ("_order");
  CREATE INDEX "pages_b_table_parent_id_idx" ON "pages_b_table" USING btree ("_parent_id");
  CREATE INDEX "pages_b_table_path_idx" ON "pages_b_table" USING btree ("_path");
  CREATE INDEX "pages_b_quote_order_idx" ON "pages_b_quote" USING btree ("_order");
  CREATE INDEX "pages_b_quote_parent_id_idx" ON "pages_b_quote" USING btree ("_parent_id");
  CREATE INDEX "pages_b_quote_path_idx" ON "pages_b_quote" USING btree ("_path");
  CREATE INDEX "pages_b_quote_image_idx" ON "pages_b_quote" USING btree ("image_id");
  CREATE INDEX "pages_b_proofs_order_idx" ON "pages_b_proofs" USING btree ("_order");
  CREATE INDEX "pages_b_proofs_parent_id_idx" ON "pages_b_proofs" USING btree ("_parent_id");
  CREATE INDEX "pages_b_proofs_path_idx" ON "pages_b_proofs" USING btree ("_path");
  CREATE INDEX "pages_b_area_sectors_order_idx" ON "pages_b_area_sectors" USING btree ("_order");
  CREATE INDEX "pages_b_area_sectors_parent_id_idx" ON "pages_b_area_sectors" USING btree ("_parent_id");
  CREATE INDEX "pages_b_area_order_idx" ON "pages_b_area" USING btree ("_order");
  CREATE INDEX "pages_b_area_parent_id_idx" ON "pages_b_area" USING btree ("_parent_id");
  CREATE INDEX "pages_b_area_path_idx" ON "pages_b_area" USING btree ("_path");
  CREATE INDEX "pages_b_team_order_idx" ON "pages_b_team" USING btree ("_order");
  CREATE INDEX "pages_b_team_parent_id_idx" ON "pages_b_team" USING btree ("_parent_id");
  CREATE INDEX "pages_b_team_path_idx" ON "pages_b_team" USING btree ("_path");
  CREATE INDEX "pages_b_reviews_order_idx" ON "pages_b_reviews" USING btree ("_order");
  CREATE INDEX "pages_b_reviews_parent_id_idx" ON "pages_b_reviews" USING btree ("_parent_id");
  CREATE INDEX "pages_b_reviews_path_idx" ON "pages_b_reviews" USING btree ("_path");
  CREATE INDEX "pages_b_arts_order_idx" ON "pages_b_arts" USING btree ("_order");
  CREATE INDEX "pages_b_arts_parent_id_idx" ON "pages_b_arts" USING btree ("_parent_id");
  CREATE INDEX "pages_b_arts_path_idx" ON "pages_b_arts" USING btree ("_path");
  CREATE INDEX "pages_b_form_order_idx" ON "pages_b_form" USING btree ("_order");
  CREATE INDEX "pages_b_form_parent_id_idx" ON "pages_b_form" USING btree ("_parent_id");
  CREATE INDEX "pages_b_form_path_idx" ON "pages_b_form" USING btree ("_path");
  CREATE INDEX "pages_b_form_form_idx" ON "pages_b_form" USING btree ("form_id");
  CREATE INDEX "pages_b_rich_order_idx" ON "pages_b_rich" USING btree ("_order");
  CREATE INDEX "pages_b_rich_parent_id_idx" ON "pages_b_rich" USING btree ("_parent_id");
  CREATE INDEX "pages_b_rich_path_idx" ON "pages_b_rich" USING btree ("_path");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE UNIQUE INDEX "pages_path_idx" ON "pages" USING btree ("path");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_services_id_idx" ON "pages_rels" USING btree ("services_id");
  CREATE INDEX "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX "pages_rels_articles_id_idx" ON "pages_rels" USING btree ("articles_id");
  CREATE INDEX "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  CREATE INDEX "pages_rels_communes_id_idx" ON "pages_rels" USING btree ("communes_id");
  CREATE INDEX "pages_rels_faqs_id_idx" ON "pages_rels" USING btree ("faqs_id");
  CREATE INDEX "_pages_v_version_hero_proofs_order_idx" ON "_pages_v_version_hero_proofs" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_proofs_parent_id_idx" ON "_pages_v_version_hero_proofs" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_txtimg_v_links_order_idx" ON "__pages_v_b_txtimg_v_links" USING btree ("_order");
  CREATE INDEX "__pages_v_b_txtimg_v_links_parent_id_idx" ON "__pages_v_b_txtimg_v_links" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_txtimg_v_order_idx" ON "__pages_v_b_txtimg_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_txtimg_v_parent_id_idx" ON "__pages_v_b_txtimg_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_txtimg_v_path_idx" ON "__pages_v_b_txtimg_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_cards_v_items_order_idx" ON "__pages_v_b_cards_v_items" USING btree ("_order");
  CREATE INDEX "__pages_v_b_cards_v_items_parent_id_idx" ON "__pages_v_b_cards_v_items" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_cards_v_items_image_idx" ON "__pages_v_b_cards_v_items" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_cards_v_order_idx" ON "__pages_v_b_cards_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_cards_v_parent_id_idx" ON "__pages_v_b_cards_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_cards_v_path_idx" ON "__pages_v_b_cards_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_cards_v_aside_image_idx" ON "__pages_v_b_cards_v" USING btree ("aside_image_id");
  CREATE INDEX "__pages_v_b_svc_v_order_idx" ON "__pages_v_b_svc_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_svc_v_parent_id_idx" ON "__pages_v_b_svc_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_svc_v_path_idx" ON "__pages_v_b_svc_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_proj_v_items_order_idx" ON "__pages_v_b_proj_v_items" USING btree ("_order");
  CREATE INDEX "__pages_v_b_proj_v_items_parent_id_idx" ON "__pages_v_b_proj_v_items" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_proj_v_items_project_idx" ON "__pages_v_b_proj_v_items" USING btree ("project_id");
  CREATE INDEX "__pages_v_b_proj_v_order_idx" ON "__pages_v_b_proj_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_proj_v_parent_id_idx" ON "__pages_v_b_proj_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_proj_v_path_idx" ON "__pages_v_b_proj_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_proj_v_service_idx" ON "__pages_v_b_proj_v" USING btree ("service_id");
  CREATE INDEX "__pages_v_b_proj_v_sector_idx" ON "__pages_v_b_proj_v" USING btree ("sector_id");
  CREATE INDEX "__pages_v_b_explr_v_groups_links_order_idx" ON "__pages_v_b_explr_v_groups_links" USING btree ("_order");
  CREATE INDEX "__pages_v_b_explr_v_groups_links_parent_id_idx" ON "__pages_v_b_explr_v_groups_links" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_explr_v_groups_order_idx" ON "__pages_v_b_explr_v_groups" USING btree ("_order");
  CREATE INDEX "__pages_v_b_explr_v_groups_parent_id_idx" ON "__pages_v_b_explr_v_groups" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_explr_v_order_idx" ON "__pages_v_b_explr_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_explr_v_parent_id_idx" ON "__pages_v_b_explr_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_explr_v_path_idx" ON "__pages_v_b_explr_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_steps_v_steps_order_idx" ON "__pages_v_b_steps_v_steps" USING btree ("_order");
  CREATE INDEX "__pages_v_b_steps_v_steps_parent_id_idx" ON "__pages_v_b_steps_v_steps" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_steps_v_steps_image_idx" ON "__pages_v_b_steps_v_steps" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_steps_v_order_idx" ON "__pages_v_b_steps_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_steps_v_parent_id_idx" ON "__pages_v_b_steps_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_steps_v_path_idx" ON "__pages_v_b_steps_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_list_v_items_order_idx" ON "__pages_v_b_list_v_items" USING btree ("_order");
  CREATE INDEX "__pages_v_b_list_v_items_parent_id_idx" ON "__pages_v_b_list_v_items" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_list_v_order_idx" ON "__pages_v_b_list_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_list_v_parent_id_idx" ON "__pages_v_b_list_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_list_v_path_idx" ON "__pages_v_b_list_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_list_v_image_idx" ON "__pages_v_b_list_v" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_faq_v_order_idx" ON "__pages_v_b_faq_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_faq_v_parent_id_idx" ON "__pages_v_b_faq_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_faq_v_path_idx" ON "__pages_v_b_faq_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_cta_v_order_idx" ON "__pages_v_b_cta_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_cta_v_parent_id_idx" ON "__pages_v_b_cta_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_cta_v_path_idx" ON "__pages_v_b_cta_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_cta_v_image_idx" ON "__pages_v_b_cta_v" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_mnf_v_items_order_idx" ON "__pages_v_b_mnf_v_items" USING btree ("_order");
  CREATE INDEX "__pages_v_b_mnf_v_items_parent_id_idx" ON "__pages_v_b_mnf_v_items" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_mnf_v_order_idx" ON "__pages_v_b_mnf_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_mnf_v_parent_id_idx" ON "__pages_v_b_mnf_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_mnf_v_path_idx" ON "__pages_v_b_mnf_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_mnf_v_image_idx" ON "__pages_v_b_mnf_v" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_spot_v_steps_order_idx" ON "__pages_v_b_spot_v_steps" USING btree ("_order");
  CREATE INDEX "__pages_v_b_spot_v_steps_parent_id_idx" ON "__pages_v_b_spot_v_steps" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_spot_v_links_order_idx" ON "__pages_v_b_spot_v_links" USING btree ("_order");
  CREATE INDEX "__pages_v_b_spot_v_links_parent_id_idx" ON "__pages_v_b_spot_v_links" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_spot_v_order_idx" ON "__pages_v_b_spot_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_spot_v_parent_id_idx" ON "__pages_v_b_spot_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_spot_v_path_idx" ON "__pages_v_b_spot_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_gal_v_images_order_idx" ON "__pages_v_b_gal_v_images" USING btree ("_order");
  CREATE INDEX "__pages_v_b_gal_v_images_parent_id_idx" ON "__pages_v_b_gal_v_images" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_gal_v_images_image_idx" ON "__pages_v_b_gal_v_images" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_gal_v_order_idx" ON "__pages_v_b_gal_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_gal_v_parent_id_idx" ON "__pages_v_b_gal_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_gal_v_path_idx" ON "__pages_v_b_gal_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_table_v_columns_order_idx" ON "__pages_v_b_table_v_columns" USING btree ("_order");
  CREATE INDEX "__pages_v_b_table_v_columns_parent_id_idx" ON "__pages_v_b_table_v_columns" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_table_v_rows_cells_order_idx" ON "__pages_v_b_table_v_rows_cells" USING btree ("_order");
  CREATE INDEX "__pages_v_b_table_v_rows_cells_parent_id_idx" ON "__pages_v_b_table_v_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_table_v_rows_order_idx" ON "__pages_v_b_table_v_rows" USING btree ("_order");
  CREATE INDEX "__pages_v_b_table_v_rows_parent_id_idx" ON "__pages_v_b_table_v_rows" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_table_v_order_idx" ON "__pages_v_b_table_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_table_v_parent_id_idx" ON "__pages_v_b_table_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_table_v_path_idx" ON "__pages_v_b_table_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_quote_v_order_idx" ON "__pages_v_b_quote_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_quote_v_parent_id_idx" ON "__pages_v_b_quote_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_quote_v_path_idx" ON "__pages_v_b_quote_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_quote_v_image_idx" ON "__pages_v_b_quote_v" USING btree ("image_id");
  CREATE INDEX "__pages_v_b_proofs_v_order_idx" ON "__pages_v_b_proofs_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_proofs_v_parent_id_idx" ON "__pages_v_b_proofs_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_proofs_v_path_idx" ON "__pages_v_b_proofs_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_area_v_sectors_order_idx" ON "__pages_v_b_area_v_sectors" USING btree ("_order");
  CREATE INDEX "__pages_v_b_area_v_sectors_parent_id_idx" ON "__pages_v_b_area_v_sectors" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_area_v_order_idx" ON "__pages_v_b_area_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_area_v_parent_id_idx" ON "__pages_v_b_area_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_area_v_path_idx" ON "__pages_v_b_area_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_team_v_order_idx" ON "__pages_v_b_team_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_team_v_parent_id_idx" ON "__pages_v_b_team_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_team_v_path_idx" ON "__pages_v_b_team_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_reviews_v_order_idx" ON "__pages_v_b_reviews_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_reviews_v_parent_id_idx" ON "__pages_v_b_reviews_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_reviews_v_path_idx" ON "__pages_v_b_reviews_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_arts_v_order_idx" ON "__pages_v_b_arts_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_arts_v_parent_id_idx" ON "__pages_v_b_arts_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_arts_v_path_idx" ON "__pages_v_b_arts_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_form_v_order_idx" ON "__pages_v_b_form_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_form_v_parent_id_idx" ON "__pages_v_b_form_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_form_v_path_idx" ON "__pages_v_b_form_v" USING btree ("_path");
  CREATE INDEX "__pages_v_b_form_v_form_idx" ON "__pages_v_b_form_v" USING btree ("form_id");
  CREATE INDEX "__pages_v_b_rich_v_order_idx" ON "__pages_v_b_rich_v" USING btree ("_order");
  CREATE INDEX "__pages_v_b_rich_v_parent_id_idx" ON "__pages_v_b_rich_v" USING btree ("_parent_id");
  CREATE INDEX "__pages_v_b_rich_v_path_idx" ON "__pages_v_b_rich_v" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX "_pages_v_version_version_path_idx" ON "_pages_v" USING btree ("version_path");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_services_id_idx" ON "_pages_v_rels" USING btree ("services_id");
  CREATE INDEX "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  CREATE INDEX "_pages_v_rels_articles_id_idx" ON "_pages_v_rels" USING btree ("articles_id");
  CREATE INDEX "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id");
  CREATE INDEX "_pages_v_rels_communes_id_idx" ON "_pages_v_rels" USING btree ("communes_id");
  CREATE INDEX "_pages_v_rels_faqs_id_idx" ON "_pages_v_rels" USING btree ("faqs_id");
  CREATE INDEX "articles_b_txtimg_links_order_idx" ON "articles_b_txtimg_links" USING btree ("_order");
  CREATE INDEX "articles_b_txtimg_links_parent_id_idx" ON "articles_b_txtimg_links" USING btree ("_parent_id");
  CREATE INDEX "articles_b_txtimg_order_idx" ON "articles_b_txtimg" USING btree ("_order");
  CREATE INDEX "articles_b_txtimg_parent_id_idx" ON "articles_b_txtimg" USING btree ("_parent_id");
  CREATE INDEX "articles_b_txtimg_path_idx" ON "articles_b_txtimg" USING btree ("_path");
  CREATE INDEX "articles_b_cards_items_order_idx" ON "articles_b_cards_items" USING btree ("_order");
  CREATE INDEX "articles_b_cards_items_parent_id_idx" ON "articles_b_cards_items" USING btree ("_parent_id");
  CREATE INDEX "articles_b_cards_items_image_idx" ON "articles_b_cards_items" USING btree ("image_id");
  CREATE INDEX "articles_b_cards_order_idx" ON "articles_b_cards" USING btree ("_order");
  CREATE INDEX "articles_b_cards_parent_id_idx" ON "articles_b_cards" USING btree ("_parent_id");
  CREATE INDEX "articles_b_cards_path_idx" ON "articles_b_cards" USING btree ("_path");
  CREATE INDEX "articles_b_cards_aside_image_idx" ON "articles_b_cards" USING btree ("aside_image_id");
  CREATE INDEX "articles_b_svc_order_idx" ON "articles_b_svc" USING btree ("_order");
  CREATE INDEX "articles_b_svc_parent_id_idx" ON "articles_b_svc" USING btree ("_parent_id");
  CREATE INDEX "articles_b_svc_path_idx" ON "articles_b_svc" USING btree ("_path");
  CREATE INDEX "articles_b_proj_items_order_idx" ON "articles_b_proj_items" USING btree ("_order");
  CREATE INDEX "articles_b_proj_items_parent_id_idx" ON "articles_b_proj_items" USING btree ("_parent_id");
  CREATE INDEX "articles_b_proj_items_project_idx" ON "articles_b_proj_items" USING btree ("project_id");
  CREATE INDEX "articles_b_proj_order_idx" ON "articles_b_proj" USING btree ("_order");
  CREATE INDEX "articles_b_proj_parent_id_idx" ON "articles_b_proj" USING btree ("_parent_id");
  CREATE INDEX "articles_b_proj_path_idx" ON "articles_b_proj" USING btree ("_path");
  CREATE INDEX "articles_b_proj_service_idx" ON "articles_b_proj" USING btree ("service_id");
  CREATE INDEX "articles_b_proj_sector_idx" ON "articles_b_proj" USING btree ("sector_id");
  CREATE INDEX "articles_b_explr_groups_links_order_idx" ON "articles_b_explr_groups_links" USING btree ("_order");
  CREATE INDEX "articles_b_explr_groups_links_parent_id_idx" ON "articles_b_explr_groups_links" USING btree ("_parent_id");
  CREATE INDEX "articles_b_explr_groups_order_idx" ON "articles_b_explr_groups" USING btree ("_order");
  CREATE INDEX "articles_b_explr_groups_parent_id_idx" ON "articles_b_explr_groups" USING btree ("_parent_id");
  CREATE INDEX "articles_b_explr_order_idx" ON "articles_b_explr" USING btree ("_order");
  CREATE INDEX "articles_b_explr_parent_id_idx" ON "articles_b_explr" USING btree ("_parent_id");
  CREATE INDEX "articles_b_explr_path_idx" ON "articles_b_explr" USING btree ("_path");
  CREATE INDEX "articles_b_steps_steps_order_idx" ON "articles_b_steps_steps" USING btree ("_order");
  CREATE INDEX "articles_b_steps_steps_parent_id_idx" ON "articles_b_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "articles_b_steps_steps_image_idx" ON "articles_b_steps_steps" USING btree ("image_id");
  CREATE INDEX "articles_b_steps_order_idx" ON "articles_b_steps" USING btree ("_order");
  CREATE INDEX "articles_b_steps_parent_id_idx" ON "articles_b_steps" USING btree ("_parent_id");
  CREATE INDEX "articles_b_steps_path_idx" ON "articles_b_steps" USING btree ("_path");
  CREATE INDEX "articles_b_list_items_order_idx" ON "articles_b_list_items" USING btree ("_order");
  CREATE INDEX "articles_b_list_items_parent_id_idx" ON "articles_b_list_items" USING btree ("_parent_id");
  CREATE INDEX "articles_b_list_order_idx" ON "articles_b_list" USING btree ("_order");
  CREATE INDEX "articles_b_list_parent_id_idx" ON "articles_b_list" USING btree ("_parent_id");
  CREATE INDEX "articles_b_list_path_idx" ON "articles_b_list" USING btree ("_path");
  CREATE INDEX "articles_b_list_image_idx" ON "articles_b_list" USING btree ("image_id");
  CREATE INDEX "articles_b_faq_order_idx" ON "articles_b_faq" USING btree ("_order");
  CREATE INDEX "articles_b_faq_parent_id_idx" ON "articles_b_faq" USING btree ("_parent_id");
  CREATE INDEX "articles_b_faq_path_idx" ON "articles_b_faq" USING btree ("_path");
  CREATE INDEX "articles_b_cta_order_idx" ON "articles_b_cta" USING btree ("_order");
  CREATE INDEX "articles_b_cta_parent_id_idx" ON "articles_b_cta" USING btree ("_parent_id");
  CREATE INDEX "articles_b_cta_path_idx" ON "articles_b_cta" USING btree ("_path");
  CREATE INDEX "articles_b_cta_image_idx" ON "articles_b_cta" USING btree ("image_id");
  CREATE INDEX "articles_b_mnf_items_order_idx" ON "articles_b_mnf_items" USING btree ("_order");
  CREATE INDEX "articles_b_mnf_items_parent_id_idx" ON "articles_b_mnf_items" USING btree ("_parent_id");
  CREATE INDEX "articles_b_mnf_order_idx" ON "articles_b_mnf" USING btree ("_order");
  CREATE INDEX "articles_b_mnf_parent_id_idx" ON "articles_b_mnf" USING btree ("_parent_id");
  CREATE INDEX "articles_b_mnf_path_idx" ON "articles_b_mnf" USING btree ("_path");
  CREATE INDEX "articles_b_mnf_image_idx" ON "articles_b_mnf" USING btree ("image_id");
  CREATE INDEX "articles_b_spot_steps_order_idx" ON "articles_b_spot_steps" USING btree ("_order");
  CREATE INDEX "articles_b_spot_steps_parent_id_idx" ON "articles_b_spot_steps" USING btree ("_parent_id");
  CREATE INDEX "articles_b_spot_links_order_idx" ON "articles_b_spot_links" USING btree ("_order");
  CREATE INDEX "articles_b_spot_links_parent_id_idx" ON "articles_b_spot_links" USING btree ("_parent_id");
  CREATE INDEX "articles_b_spot_order_idx" ON "articles_b_spot" USING btree ("_order");
  CREATE INDEX "articles_b_spot_parent_id_idx" ON "articles_b_spot" USING btree ("_parent_id");
  CREATE INDEX "articles_b_spot_path_idx" ON "articles_b_spot" USING btree ("_path");
  CREATE INDEX "articles_b_gal_images_order_idx" ON "articles_b_gal_images" USING btree ("_order");
  CREATE INDEX "articles_b_gal_images_parent_id_idx" ON "articles_b_gal_images" USING btree ("_parent_id");
  CREATE INDEX "articles_b_gal_images_image_idx" ON "articles_b_gal_images" USING btree ("image_id");
  CREATE INDEX "articles_b_gal_order_idx" ON "articles_b_gal" USING btree ("_order");
  CREATE INDEX "articles_b_gal_parent_id_idx" ON "articles_b_gal" USING btree ("_parent_id");
  CREATE INDEX "articles_b_gal_path_idx" ON "articles_b_gal" USING btree ("_path");
  CREATE INDEX "articles_b_table_columns_order_idx" ON "articles_b_table_columns" USING btree ("_order");
  CREATE INDEX "articles_b_table_columns_parent_id_idx" ON "articles_b_table_columns" USING btree ("_parent_id");
  CREATE INDEX "articles_b_table_rows_cells_order_idx" ON "articles_b_table_rows_cells" USING btree ("_order");
  CREATE INDEX "articles_b_table_rows_cells_parent_id_idx" ON "articles_b_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "articles_b_table_rows_order_idx" ON "articles_b_table_rows" USING btree ("_order");
  CREATE INDEX "articles_b_table_rows_parent_id_idx" ON "articles_b_table_rows" USING btree ("_parent_id");
  CREATE INDEX "articles_b_table_order_idx" ON "articles_b_table" USING btree ("_order");
  CREATE INDEX "articles_b_table_parent_id_idx" ON "articles_b_table" USING btree ("_parent_id");
  CREATE INDEX "articles_b_table_path_idx" ON "articles_b_table" USING btree ("_path");
  CREATE INDEX "articles_b_quote_order_idx" ON "articles_b_quote" USING btree ("_order");
  CREATE INDEX "articles_b_quote_parent_id_idx" ON "articles_b_quote" USING btree ("_parent_id");
  CREATE INDEX "articles_b_quote_path_idx" ON "articles_b_quote" USING btree ("_path");
  CREATE INDEX "articles_b_quote_image_idx" ON "articles_b_quote" USING btree ("image_id");
  CREATE INDEX "articles_b_proofs_order_idx" ON "articles_b_proofs" USING btree ("_order");
  CREATE INDEX "articles_b_proofs_parent_id_idx" ON "articles_b_proofs" USING btree ("_parent_id");
  CREATE INDEX "articles_b_proofs_path_idx" ON "articles_b_proofs" USING btree ("_path");
  CREATE INDEX "articles_b_area_sectors_order_idx" ON "articles_b_area_sectors" USING btree ("_order");
  CREATE INDEX "articles_b_area_sectors_parent_id_idx" ON "articles_b_area_sectors" USING btree ("_parent_id");
  CREATE INDEX "articles_b_area_order_idx" ON "articles_b_area" USING btree ("_order");
  CREATE INDEX "articles_b_area_parent_id_idx" ON "articles_b_area" USING btree ("_parent_id");
  CREATE INDEX "articles_b_area_path_idx" ON "articles_b_area" USING btree ("_path");
  CREATE INDEX "articles_b_team_order_idx" ON "articles_b_team" USING btree ("_order");
  CREATE INDEX "articles_b_team_parent_id_idx" ON "articles_b_team" USING btree ("_parent_id");
  CREATE INDEX "articles_b_team_path_idx" ON "articles_b_team" USING btree ("_path");
  CREATE INDEX "articles_b_reviews_order_idx" ON "articles_b_reviews" USING btree ("_order");
  CREATE INDEX "articles_b_reviews_parent_id_idx" ON "articles_b_reviews" USING btree ("_parent_id");
  CREATE INDEX "articles_b_reviews_path_idx" ON "articles_b_reviews" USING btree ("_path");
  CREATE INDEX "articles_b_arts_order_idx" ON "articles_b_arts" USING btree ("_order");
  CREATE INDEX "articles_b_arts_parent_id_idx" ON "articles_b_arts" USING btree ("_parent_id");
  CREATE INDEX "articles_b_arts_path_idx" ON "articles_b_arts" USING btree ("_path");
  CREATE INDEX "articles_b_form_order_idx" ON "articles_b_form" USING btree ("_order");
  CREATE INDEX "articles_b_form_parent_id_idx" ON "articles_b_form" USING btree ("_parent_id");
  CREATE INDEX "articles_b_form_path_idx" ON "articles_b_form" USING btree ("_path");
  CREATE INDEX "articles_b_form_form_idx" ON "articles_b_form" USING btree ("form_id");
  CREATE INDEX "articles_b_rich_order_idx" ON "articles_b_rich" USING btree ("_order");
  CREATE INDEX "articles_b_rich_parent_id_idx" ON "articles_b_rich" USING btree ("_parent_id");
  CREATE INDEX "articles_b_rich_path_idx" ON "articles_b_rich" USING btree ("_path");
  CREATE INDEX "articles_image_idx" ON "articles" USING btree ("image_id");
  CREATE INDEX "articles_meta_meta_image_idx" ON "articles" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "articles_slug_idx" ON "articles" USING btree ("slug");
  CREATE INDEX "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX "articles_created_at_idx" ON "articles" USING btree ("created_at");
  CREATE INDEX "articles__status_idx" ON "articles" USING btree ("_status");
  CREATE INDEX "articles_rels_order_idx" ON "articles_rels" USING btree ("order");
  CREATE INDEX "articles_rels_parent_idx" ON "articles_rels" USING btree ("parent_id");
  CREATE INDEX "articles_rels_path_idx" ON "articles_rels" USING btree ("path");
  CREATE INDEX "articles_rels_media_id_idx" ON "articles_rels" USING btree ("media_id");
  CREATE INDEX "articles_rels_pages_id_idx" ON "articles_rels" USING btree ("pages_id");
  CREATE INDEX "articles_rels_services_id_idx" ON "articles_rels" USING btree ("services_id");
  CREATE INDEX "articles_rels_projects_id_idx" ON "articles_rels" USING btree ("projects_id");
  CREATE INDEX "articles_rels_articles_id_idx" ON "articles_rels" USING btree ("articles_id");
  CREATE INDEX "articles_rels_communes_id_idx" ON "articles_rels" USING btree ("communes_id");
  CREATE INDEX "articles_rels_faqs_id_idx" ON "articles_rels" USING btree ("faqs_id");
  CREATE INDEX "__articles_v_b_txtimg_v_links_order_idx" ON "__articles_v_b_txtimg_v_links" USING btree ("_order");
  CREATE INDEX "__articles_v_b_txtimg_v_links_parent_id_idx" ON "__articles_v_b_txtimg_v_links" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_txtimg_v_order_idx" ON "__articles_v_b_txtimg_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_txtimg_v_parent_id_idx" ON "__articles_v_b_txtimg_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_txtimg_v_path_idx" ON "__articles_v_b_txtimg_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_cards_v_items_order_idx" ON "__articles_v_b_cards_v_items" USING btree ("_order");
  CREATE INDEX "__articles_v_b_cards_v_items_parent_id_idx" ON "__articles_v_b_cards_v_items" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_cards_v_items_image_idx" ON "__articles_v_b_cards_v_items" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_cards_v_order_idx" ON "__articles_v_b_cards_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_cards_v_parent_id_idx" ON "__articles_v_b_cards_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_cards_v_path_idx" ON "__articles_v_b_cards_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_cards_v_aside_image_idx" ON "__articles_v_b_cards_v" USING btree ("aside_image_id");
  CREATE INDEX "__articles_v_b_svc_v_order_idx" ON "__articles_v_b_svc_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_svc_v_parent_id_idx" ON "__articles_v_b_svc_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_svc_v_path_idx" ON "__articles_v_b_svc_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_proj_v_items_order_idx" ON "__articles_v_b_proj_v_items" USING btree ("_order");
  CREATE INDEX "__articles_v_b_proj_v_items_parent_id_idx" ON "__articles_v_b_proj_v_items" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_proj_v_items_project_idx" ON "__articles_v_b_proj_v_items" USING btree ("project_id");
  CREATE INDEX "__articles_v_b_proj_v_order_idx" ON "__articles_v_b_proj_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_proj_v_parent_id_idx" ON "__articles_v_b_proj_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_proj_v_path_idx" ON "__articles_v_b_proj_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_proj_v_service_idx" ON "__articles_v_b_proj_v" USING btree ("service_id");
  CREATE INDEX "__articles_v_b_proj_v_sector_idx" ON "__articles_v_b_proj_v" USING btree ("sector_id");
  CREATE INDEX "__articles_v_b_explr_v_groups_links_order_idx" ON "__articles_v_b_explr_v_groups_links" USING btree ("_order");
  CREATE INDEX "__articles_v_b_explr_v_groups_links_parent_id_idx" ON "__articles_v_b_explr_v_groups_links" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_explr_v_groups_order_idx" ON "__articles_v_b_explr_v_groups" USING btree ("_order");
  CREATE INDEX "__articles_v_b_explr_v_groups_parent_id_idx" ON "__articles_v_b_explr_v_groups" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_explr_v_order_idx" ON "__articles_v_b_explr_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_explr_v_parent_id_idx" ON "__articles_v_b_explr_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_explr_v_path_idx" ON "__articles_v_b_explr_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_steps_v_steps_order_idx" ON "__articles_v_b_steps_v_steps" USING btree ("_order");
  CREATE INDEX "__articles_v_b_steps_v_steps_parent_id_idx" ON "__articles_v_b_steps_v_steps" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_steps_v_steps_image_idx" ON "__articles_v_b_steps_v_steps" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_steps_v_order_idx" ON "__articles_v_b_steps_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_steps_v_parent_id_idx" ON "__articles_v_b_steps_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_steps_v_path_idx" ON "__articles_v_b_steps_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_list_v_items_order_idx" ON "__articles_v_b_list_v_items" USING btree ("_order");
  CREATE INDEX "__articles_v_b_list_v_items_parent_id_idx" ON "__articles_v_b_list_v_items" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_list_v_order_idx" ON "__articles_v_b_list_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_list_v_parent_id_idx" ON "__articles_v_b_list_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_list_v_path_idx" ON "__articles_v_b_list_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_list_v_image_idx" ON "__articles_v_b_list_v" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_faq_v_order_idx" ON "__articles_v_b_faq_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_faq_v_parent_id_idx" ON "__articles_v_b_faq_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_faq_v_path_idx" ON "__articles_v_b_faq_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_cta_v_order_idx" ON "__articles_v_b_cta_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_cta_v_parent_id_idx" ON "__articles_v_b_cta_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_cta_v_path_idx" ON "__articles_v_b_cta_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_cta_v_image_idx" ON "__articles_v_b_cta_v" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_mnf_v_items_order_idx" ON "__articles_v_b_mnf_v_items" USING btree ("_order");
  CREATE INDEX "__articles_v_b_mnf_v_items_parent_id_idx" ON "__articles_v_b_mnf_v_items" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_mnf_v_order_idx" ON "__articles_v_b_mnf_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_mnf_v_parent_id_idx" ON "__articles_v_b_mnf_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_mnf_v_path_idx" ON "__articles_v_b_mnf_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_mnf_v_image_idx" ON "__articles_v_b_mnf_v" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_spot_v_steps_order_idx" ON "__articles_v_b_spot_v_steps" USING btree ("_order");
  CREATE INDEX "__articles_v_b_spot_v_steps_parent_id_idx" ON "__articles_v_b_spot_v_steps" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_spot_v_links_order_idx" ON "__articles_v_b_spot_v_links" USING btree ("_order");
  CREATE INDEX "__articles_v_b_spot_v_links_parent_id_idx" ON "__articles_v_b_spot_v_links" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_spot_v_order_idx" ON "__articles_v_b_spot_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_spot_v_parent_id_idx" ON "__articles_v_b_spot_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_spot_v_path_idx" ON "__articles_v_b_spot_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_gal_v_images_order_idx" ON "__articles_v_b_gal_v_images" USING btree ("_order");
  CREATE INDEX "__articles_v_b_gal_v_images_parent_id_idx" ON "__articles_v_b_gal_v_images" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_gal_v_images_image_idx" ON "__articles_v_b_gal_v_images" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_gal_v_order_idx" ON "__articles_v_b_gal_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_gal_v_parent_id_idx" ON "__articles_v_b_gal_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_gal_v_path_idx" ON "__articles_v_b_gal_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_table_v_columns_order_idx" ON "__articles_v_b_table_v_columns" USING btree ("_order");
  CREATE INDEX "__articles_v_b_table_v_columns_parent_id_idx" ON "__articles_v_b_table_v_columns" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_table_v_rows_cells_order_idx" ON "__articles_v_b_table_v_rows_cells" USING btree ("_order");
  CREATE INDEX "__articles_v_b_table_v_rows_cells_parent_id_idx" ON "__articles_v_b_table_v_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_table_v_rows_order_idx" ON "__articles_v_b_table_v_rows" USING btree ("_order");
  CREATE INDEX "__articles_v_b_table_v_rows_parent_id_idx" ON "__articles_v_b_table_v_rows" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_table_v_order_idx" ON "__articles_v_b_table_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_table_v_parent_id_idx" ON "__articles_v_b_table_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_table_v_path_idx" ON "__articles_v_b_table_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_quote_v_order_idx" ON "__articles_v_b_quote_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_quote_v_parent_id_idx" ON "__articles_v_b_quote_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_quote_v_path_idx" ON "__articles_v_b_quote_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_quote_v_image_idx" ON "__articles_v_b_quote_v" USING btree ("image_id");
  CREATE INDEX "__articles_v_b_proofs_v_order_idx" ON "__articles_v_b_proofs_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_proofs_v_parent_id_idx" ON "__articles_v_b_proofs_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_proofs_v_path_idx" ON "__articles_v_b_proofs_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_area_v_sectors_order_idx" ON "__articles_v_b_area_v_sectors" USING btree ("_order");
  CREATE INDEX "__articles_v_b_area_v_sectors_parent_id_idx" ON "__articles_v_b_area_v_sectors" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_area_v_order_idx" ON "__articles_v_b_area_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_area_v_parent_id_idx" ON "__articles_v_b_area_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_area_v_path_idx" ON "__articles_v_b_area_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_team_v_order_idx" ON "__articles_v_b_team_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_team_v_parent_id_idx" ON "__articles_v_b_team_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_team_v_path_idx" ON "__articles_v_b_team_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_reviews_v_order_idx" ON "__articles_v_b_reviews_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_reviews_v_parent_id_idx" ON "__articles_v_b_reviews_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_reviews_v_path_idx" ON "__articles_v_b_reviews_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_arts_v_order_idx" ON "__articles_v_b_arts_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_arts_v_parent_id_idx" ON "__articles_v_b_arts_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_arts_v_path_idx" ON "__articles_v_b_arts_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_form_v_order_idx" ON "__articles_v_b_form_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_form_v_parent_id_idx" ON "__articles_v_b_form_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_form_v_path_idx" ON "__articles_v_b_form_v" USING btree ("_path");
  CREATE INDEX "__articles_v_b_form_v_form_idx" ON "__articles_v_b_form_v" USING btree ("form_id");
  CREATE INDEX "__articles_v_b_rich_v_order_idx" ON "__articles_v_b_rich_v" USING btree ("_order");
  CREATE INDEX "__articles_v_b_rich_v_parent_id_idx" ON "__articles_v_b_rich_v" USING btree ("_parent_id");
  CREATE INDEX "__articles_v_b_rich_v_path_idx" ON "__articles_v_b_rich_v" USING btree ("_path");
  CREATE INDEX "_articles_v_parent_idx" ON "_articles_v" USING btree ("parent_id");
  CREATE INDEX "_articles_v_version_version_image_idx" ON "_articles_v" USING btree ("version_image_id");
  CREATE INDEX "_articles_v_version_meta_version_meta_image_idx" ON "_articles_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_articles_v_version_version_slug_idx" ON "_articles_v" USING btree ("version_slug");
  CREATE INDEX "_articles_v_version_version_updated_at_idx" ON "_articles_v" USING btree ("version_updated_at");
  CREATE INDEX "_articles_v_version_version_created_at_idx" ON "_articles_v" USING btree ("version_created_at");
  CREATE INDEX "_articles_v_version_version__status_idx" ON "_articles_v" USING btree ("version__status");
  CREATE INDEX "_articles_v_created_at_idx" ON "_articles_v" USING btree ("created_at");
  CREATE INDEX "_articles_v_updated_at_idx" ON "_articles_v" USING btree ("updated_at");
  CREATE INDEX "_articles_v_latest_idx" ON "_articles_v" USING btree ("latest");
  CREATE INDEX "_articles_v_autosave_idx" ON "_articles_v" USING btree ("autosave");
  CREATE INDEX "_articles_v_rels_order_idx" ON "_articles_v_rels" USING btree ("order");
  CREATE INDEX "_articles_v_rels_parent_idx" ON "_articles_v_rels" USING btree ("parent_id");
  CREATE INDEX "_articles_v_rels_path_idx" ON "_articles_v_rels" USING btree ("path");
  CREATE INDEX "_articles_v_rels_media_id_idx" ON "_articles_v_rels" USING btree ("media_id");
  CREATE INDEX "_articles_v_rels_pages_id_idx" ON "_articles_v_rels" USING btree ("pages_id");
  CREATE INDEX "_articles_v_rels_services_id_idx" ON "_articles_v_rels" USING btree ("services_id");
  CREATE INDEX "_articles_v_rels_projects_id_idx" ON "_articles_v_rels" USING btree ("projects_id");
  CREATE INDEX "_articles_v_rels_articles_id_idx" ON "_articles_v_rels" USING btree ("articles_id");
  CREATE INDEX "_articles_v_rels_communes_id_idx" ON "_articles_v_rels" USING btree ("communes_id");
  CREATE INDEX "_articles_v_rels_faqs_id_idx" ON "_articles_v_rels" USING btree ("faqs_id");
  CREATE INDEX "services_hero_proofs_order_idx" ON "services_hero_proofs" USING btree ("_order");
  CREATE INDEX "services_hero_proofs_parent_id_idx" ON "services_hero_proofs" USING btree ("_parent_id");
  CREATE INDEX "services_b_txtimg_links_order_idx" ON "services_b_txtimg_links" USING btree ("_order");
  CREATE INDEX "services_b_txtimg_links_parent_id_idx" ON "services_b_txtimg_links" USING btree ("_parent_id");
  CREATE INDEX "services_b_txtimg_order_idx" ON "services_b_txtimg" USING btree ("_order");
  CREATE INDEX "services_b_txtimg_parent_id_idx" ON "services_b_txtimg" USING btree ("_parent_id");
  CREATE INDEX "services_b_txtimg_path_idx" ON "services_b_txtimg" USING btree ("_path");
  CREATE INDEX "services_b_cards_items_order_idx" ON "services_b_cards_items" USING btree ("_order");
  CREATE INDEX "services_b_cards_items_parent_id_idx" ON "services_b_cards_items" USING btree ("_parent_id");
  CREATE INDEX "services_b_cards_items_image_idx" ON "services_b_cards_items" USING btree ("image_id");
  CREATE INDEX "services_b_cards_order_idx" ON "services_b_cards" USING btree ("_order");
  CREATE INDEX "services_b_cards_parent_id_idx" ON "services_b_cards" USING btree ("_parent_id");
  CREATE INDEX "services_b_cards_path_idx" ON "services_b_cards" USING btree ("_path");
  CREATE INDEX "services_b_cards_aside_image_idx" ON "services_b_cards" USING btree ("aside_image_id");
  CREATE INDEX "services_b_svc_order_idx" ON "services_b_svc" USING btree ("_order");
  CREATE INDEX "services_b_svc_parent_id_idx" ON "services_b_svc" USING btree ("_parent_id");
  CREATE INDEX "services_b_svc_path_idx" ON "services_b_svc" USING btree ("_path");
  CREATE INDEX "services_b_proj_items_order_idx" ON "services_b_proj_items" USING btree ("_order");
  CREATE INDEX "services_b_proj_items_parent_id_idx" ON "services_b_proj_items" USING btree ("_parent_id");
  CREATE INDEX "services_b_proj_items_project_idx" ON "services_b_proj_items" USING btree ("project_id");
  CREATE INDEX "services_b_proj_order_idx" ON "services_b_proj" USING btree ("_order");
  CREATE INDEX "services_b_proj_parent_id_idx" ON "services_b_proj" USING btree ("_parent_id");
  CREATE INDEX "services_b_proj_path_idx" ON "services_b_proj" USING btree ("_path");
  CREATE INDEX "services_b_proj_service_idx" ON "services_b_proj" USING btree ("service_id");
  CREATE INDEX "services_b_proj_sector_idx" ON "services_b_proj" USING btree ("sector_id");
  CREATE INDEX "services_b_explr_groups_links_order_idx" ON "services_b_explr_groups_links" USING btree ("_order");
  CREATE INDEX "services_b_explr_groups_links_parent_id_idx" ON "services_b_explr_groups_links" USING btree ("_parent_id");
  CREATE INDEX "services_b_explr_groups_order_idx" ON "services_b_explr_groups" USING btree ("_order");
  CREATE INDEX "services_b_explr_groups_parent_id_idx" ON "services_b_explr_groups" USING btree ("_parent_id");
  CREATE INDEX "services_b_explr_order_idx" ON "services_b_explr" USING btree ("_order");
  CREATE INDEX "services_b_explr_parent_id_idx" ON "services_b_explr" USING btree ("_parent_id");
  CREATE INDEX "services_b_explr_path_idx" ON "services_b_explr" USING btree ("_path");
  CREATE INDEX "services_b_steps_steps_order_idx" ON "services_b_steps_steps" USING btree ("_order");
  CREATE INDEX "services_b_steps_steps_parent_id_idx" ON "services_b_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "services_b_steps_steps_image_idx" ON "services_b_steps_steps" USING btree ("image_id");
  CREATE INDEX "services_b_steps_order_idx" ON "services_b_steps" USING btree ("_order");
  CREATE INDEX "services_b_steps_parent_id_idx" ON "services_b_steps" USING btree ("_parent_id");
  CREATE INDEX "services_b_steps_path_idx" ON "services_b_steps" USING btree ("_path");
  CREATE INDEX "services_b_list_items_order_idx" ON "services_b_list_items" USING btree ("_order");
  CREATE INDEX "services_b_list_items_parent_id_idx" ON "services_b_list_items" USING btree ("_parent_id");
  CREATE INDEX "services_b_list_order_idx" ON "services_b_list" USING btree ("_order");
  CREATE INDEX "services_b_list_parent_id_idx" ON "services_b_list" USING btree ("_parent_id");
  CREATE INDEX "services_b_list_path_idx" ON "services_b_list" USING btree ("_path");
  CREATE INDEX "services_b_list_image_idx" ON "services_b_list" USING btree ("image_id");
  CREATE INDEX "services_b_faq_order_idx" ON "services_b_faq" USING btree ("_order");
  CREATE INDEX "services_b_faq_parent_id_idx" ON "services_b_faq" USING btree ("_parent_id");
  CREATE INDEX "services_b_faq_path_idx" ON "services_b_faq" USING btree ("_path");
  CREATE INDEX "services_b_cta_order_idx" ON "services_b_cta" USING btree ("_order");
  CREATE INDEX "services_b_cta_parent_id_idx" ON "services_b_cta" USING btree ("_parent_id");
  CREATE INDEX "services_b_cta_path_idx" ON "services_b_cta" USING btree ("_path");
  CREATE INDEX "services_b_cta_image_idx" ON "services_b_cta" USING btree ("image_id");
  CREATE INDEX "services_b_mnf_items_order_idx" ON "services_b_mnf_items" USING btree ("_order");
  CREATE INDEX "services_b_mnf_items_parent_id_idx" ON "services_b_mnf_items" USING btree ("_parent_id");
  CREATE INDEX "services_b_mnf_order_idx" ON "services_b_mnf" USING btree ("_order");
  CREATE INDEX "services_b_mnf_parent_id_idx" ON "services_b_mnf" USING btree ("_parent_id");
  CREATE INDEX "services_b_mnf_path_idx" ON "services_b_mnf" USING btree ("_path");
  CREATE INDEX "services_b_mnf_image_idx" ON "services_b_mnf" USING btree ("image_id");
  CREATE INDEX "services_b_spot_steps_order_idx" ON "services_b_spot_steps" USING btree ("_order");
  CREATE INDEX "services_b_spot_steps_parent_id_idx" ON "services_b_spot_steps" USING btree ("_parent_id");
  CREATE INDEX "services_b_spot_links_order_idx" ON "services_b_spot_links" USING btree ("_order");
  CREATE INDEX "services_b_spot_links_parent_id_idx" ON "services_b_spot_links" USING btree ("_parent_id");
  CREATE INDEX "services_b_spot_order_idx" ON "services_b_spot" USING btree ("_order");
  CREATE INDEX "services_b_spot_parent_id_idx" ON "services_b_spot" USING btree ("_parent_id");
  CREATE INDEX "services_b_spot_path_idx" ON "services_b_spot" USING btree ("_path");
  CREATE INDEX "services_b_gal_images_order_idx" ON "services_b_gal_images" USING btree ("_order");
  CREATE INDEX "services_b_gal_images_parent_id_idx" ON "services_b_gal_images" USING btree ("_parent_id");
  CREATE INDEX "services_b_gal_images_image_idx" ON "services_b_gal_images" USING btree ("image_id");
  CREATE INDEX "services_b_gal_order_idx" ON "services_b_gal" USING btree ("_order");
  CREATE INDEX "services_b_gal_parent_id_idx" ON "services_b_gal" USING btree ("_parent_id");
  CREATE INDEX "services_b_gal_path_idx" ON "services_b_gal" USING btree ("_path");
  CREATE INDEX "services_b_table_columns_order_idx" ON "services_b_table_columns" USING btree ("_order");
  CREATE INDEX "services_b_table_columns_parent_id_idx" ON "services_b_table_columns" USING btree ("_parent_id");
  CREATE INDEX "services_b_table_rows_cells_order_idx" ON "services_b_table_rows_cells" USING btree ("_order");
  CREATE INDEX "services_b_table_rows_cells_parent_id_idx" ON "services_b_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "services_b_table_rows_order_idx" ON "services_b_table_rows" USING btree ("_order");
  CREATE INDEX "services_b_table_rows_parent_id_idx" ON "services_b_table_rows" USING btree ("_parent_id");
  CREATE INDEX "services_b_table_order_idx" ON "services_b_table" USING btree ("_order");
  CREATE INDEX "services_b_table_parent_id_idx" ON "services_b_table" USING btree ("_parent_id");
  CREATE INDEX "services_b_table_path_idx" ON "services_b_table" USING btree ("_path");
  CREATE INDEX "services_b_quote_order_idx" ON "services_b_quote" USING btree ("_order");
  CREATE INDEX "services_b_quote_parent_id_idx" ON "services_b_quote" USING btree ("_parent_id");
  CREATE INDEX "services_b_quote_path_idx" ON "services_b_quote" USING btree ("_path");
  CREATE INDEX "services_b_quote_image_idx" ON "services_b_quote" USING btree ("image_id");
  CREATE INDEX "services_b_proofs_order_idx" ON "services_b_proofs" USING btree ("_order");
  CREATE INDEX "services_b_proofs_parent_id_idx" ON "services_b_proofs" USING btree ("_parent_id");
  CREATE INDEX "services_b_proofs_path_idx" ON "services_b_proofs" USING btree ("_path");
  CREATE INDEX "services_b_area_sectors_order_idx" ON "services_b_area_sectors" USING btree ("_order");
  CREATE INDEX "services_b_area_sectors_parent_id_idx" ON "services_b_area_sectors" USING btree ("_parent_id");
  CREATE INDEX "services_b_area_order_idx" ON "services_b_area" USING btree ("_order");
  CREATE INDEX "services_b_area_parent_id_idx" ON "services_b_area" USING btree ("_parent_id");
  CREATE INDEX "services_b_area_path_idx" ON "services_b_area" USING btree ("_path");
  CREATE INDEX "services_b_team_order_idx" ON "services_b_team" USING btree ("_order");
  CREATE INDEX "services_b_team_parent_id_idx" ON "services_b_team" USING btree ("_parent_id");
  CREATE INDEX "services_b_team_path_idx" ON "services_b_team" USING btree ("_path");
  CREATE INDEX "services_b_reviews_order_idx" ON "services_b_reviews" USING btree ("_order");
  CREATE INDEX "services_b_reviews_parent_id_idx" ON "services_b_reviews" USING btree ("_parent_id");
  CREATE INDEX "services_b_reviews_path_idx" ON "services_b_reviews" USING btree ("_path");
  CREATE INDEX "services_b_arts_order_idx" ON "services_b_arts" USING btree ("_order");
  CREATE INDEX "services_b_arts_parent_id_idx" ON "services_b_arts" USING btree ("_parent_id");
  CREATE INDEX "services_b_arts_path_idx" ON "services_b_arts" USING btree ("_path");
  CREATE INDEX "services_b_form_order_idx" ON "services_b_form" USING btree ("_order");
  CREATE INDEX "services_b_form_parent_id_idx" ON "services_b_form" USING btree ("_parent_id");
  CREATE INDEX "services_b_form_path_idx" ON "services_b_form" USING btree ("_path");
  CREATE INDEX "services_b_form_form_idx" ON "services_b_form" USING btree ("form_id");
  CREATE INDEX "services_b_rich_order_idx" ON "services_b_rich" USING btree ("_order");
  CREATE INDEX "services_b_rich_parent_id_idx" ON "services_b_rich" USING btree ("_parent_id");
  CREATE INDEX "services_b_rich_path_idx" ON "services_b_rich" USING btree ("_path");
  CREATE INDEX "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_pages_id_idx" ON "services_rels" USING btree ("pages_id");
  CREATE INDEX "services_rels_services_id_idx" ON "services_rels" USING btree ("services_id");
  CREATE INDEX "services_rels_projects_id_idx" ON "services_rels" USING btree ("projects_id");
  CREATE INDEX "services_rels_articles_id_idx" ON "services_rels" USING btree ("articles_id");
  CREATE INDEX "services_rels_media_id_idx" ON "services_rels" USING btree ("media_id");
  CREATE INDEX "services_rels_communes_id_idx" ON "services_rels" USING btree ("communes_id");
  CREATE INDEX "services_rels_faqs_id_idx" ON "services_rels" USING btree ("faqs_id");
  CREATE INDEX "_services_v_version_hero_proofs_order_idx" ON "_services_v_version_hero_proofs" USING btree ("_order");
  CREATE INDEX "_services_v_version_hero_proofs_parent_id_idx" ON "_services_v_version_hero_proofs" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_txtimg_v_links_order_idx" ON "__services_v_b_txtimg_v_links" USING btree ("_order");
  CREATE INDEX "__services_v_b_txtimg_v_links_parent_id_idx" ON "__services_v_b_txtimg_v_links" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_txtimg_v_order_idx" ON "__services_v_b_txtimg_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_txtimg_v_parent_id_idx" ON "__services_v_b_txtimg_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_txtimg_v_path_idx" ON "__services_v_b_txtimg_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_cards_v_items_order_idx" ON "__services_v_b_cards_v_items" USING btree ("_order");
  CREATE INDEX "__services_v_b_cards_v_items_parent_id_idx" ON "__services_v_b_cards_v_items" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_cards_v_items_image_idx" ON "__services_v_b_cards_v_items" USING btree ("image_id");
  CREATE INDEX "__services_v_b_cards_v_order_idx" ON "__services_v_b_cards_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_cards_v_parent_id_idx" ON "__services_v_b_cards_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_cards_v_path_idx" ON "__services_v_b_cards_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_cards_v_aside_image_idx" ON "__services_v_b_cards_v" USING btree ("aside_image_id");
  CREATE INDEX "__services_v_b_svc_v_order_idx" ON "__services_v_b_svc_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_svc_v_parent_id_idx" ON "__services_v_b_svc_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_svc_v_path_idx" ON "__services_v_b_svc_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_proj_v_items_order_idx" ON "__services_v_b_proj_v_items" USING btree ("_order");
  CREATE INDEX "__services_v_b_proj_v_items_parent_id_idx" ON "__services_v_b_proj_v_items" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_proj_v_items_project_idx" ON "__services_v_b_proj_v_items" USING btree ("project_id");
  CREATE INDEX "__services_v_b_proj_v_order_idx" ON "__services_v_b_proj_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_proj_v_parent_id_idx" ON "__services_v_b_proj_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_proj_v_path_idx" ON "__services_v_b_proj_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_proj_v_service_idx" ON "__services_v_b_proj_v" USING btree ("service_id");
  CREATE INDEX "__services_v_b_proj_v_sector_idx" ON "__services_v_b_proj_v" USING btree ("sector_id");
  CREATE INDEX "__services_v_b_explr_v_groups_links_order_idx" ON "__services_v_b_explr_v_groups_links" USING btree ("_order");
  CREATE INDEX "__services_v_b_explr_v_groups_links_parent_id_idx" ON "__services_v_b_explr_v_groups_links" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_explr_v_groups_order_idx" ON "__services_v_b_explr_v_groups" USING btree ("_order");
  CREATE INDEX "__services_v_b_explr_v_groups_parent_id_idx" ON "__services_v_b_explr_v_groups" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_explr_v_order_idx" ON "__services_v_b_explr_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_explr_v_parent_id_idx" ON "__services_v_b_explr_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_explr_v_path_idx" ON "__services_v_b_explr_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_steps_v_steps_order_idx" ON "__services_v_b_steps_v_steps" USING btree ("_order");
  CREATE INDEX "__services_v_b_steps_v_steps_parent_id_idx" ON "__services_v_b_steps_v_steps" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_steps_v_steps_image_idx" ON "__services_v_b_steps_v_steps" USING btree ("image_id");
  CREATE INDEX "__services_v_b_steps_v_order_idx" ON "__services_v_b_steps_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_steps_v_parent_id_idx" ON "__services_v_b_steps_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_steps_v_path_idx" ON "__services_v_b_steps_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_list_v_items_order_idx" ON "__services_v_b_list_v_items" USING btree ("_order");
  CREATE INDEX "__services_v_b_list_v_items_parent_id_idx" ON "__services_v_b_list_v_items" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_list_v_order_idx" ON "__services_v_b_list_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_list_v_parent_id_idx" ON "__services_v_b_list_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_list_v_path_idx" ON "__services_v_b_list_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_list_v_image_idx" ON "__services_v_b_list_v" USING btree ("image_id");
  CREATE INDEX "__services_v_b_faq_v_order_idx" ON "__services_v_b_faq_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_faq_v_parent_id_idx" ON "__services_v_b_faq_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_faq_v_path_idx" ON "__services_v_b_faq_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_cta_v_order_idx" ON "__services_v_b_cta_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_cta_v_parent_id_idx" ON "__services_v_b_cta_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_cta_v_path_idx" ON "__services_v_b_cta_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_cta_v_image_idx" ON "__services_v_b_cta_v" USING btree ("image_id");
  CREATE INDEX "__services_v_b_mnf_v_items_order_idx" ON "__services_v_b_mnf_v_items" USING btree ("_order");
  CREATE INDEX "__services_v_b_mnf_v_items_parent_id_idx" ON "__services_v_b_mnf_v_items" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_mnf_v_order_idx" ON "__services_v_b_mnf_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_mnf_v_parent_id_idx" ON "__services_v_b_mnf_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_mnf_v_path_idx" ON "__services_v_b_mnf_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_mnf_v_image_idx" ON "__services_v_b_mnf_v" USING btree ("image_id");
  CREATE INDEX "__services_v_b_spot_v_steps_order_idx" ON "__services_v_b_spot_v_steps" USING btree ("_order");
  CREATE INDEX "__services_v_b_spot_v_steps_parent_id_idx" ON "__services_v_b_spot_v_steps" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_spot_v_links_order_idx" ON "__services_v_b_spot_v_links" USING btree ("_order");
  CREATE INDEX "__services_v_b_spot_v_links_parent_id_idx" ON "__services_v_b_spot_v_links" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_spot_v_order_idx" ON "__services_v_b_spot_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_spot_v_parent_id_idx" ON "__services_v_b_spot_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_spot_v_path_idx" ON "__services_v_b_spot_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_gal_v_images_order_idx" ON "__services_v_b_gal_v_images" USING btree ("_order");
  CREATE INDEX "__services_v_b_gal_v_images_parent_id_idx" ON "__services_v_b_gal_v_images" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_gal_v_images_image_idx" ON "__services_v_b_gal_v_images" USING btree ("image_id");
  CREATE INDEX "__services_v_b_gal_v_order_idx" ON "__services_v_b_gal_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_gal_v_parent_id_idx" ON "__services_v_b_gal_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_gal_v_path_idx" ON "__services_v_b_gal_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_table_v_columns_order_idx" ON "__services_v_b_table_v_columns" USING btree ("_order");
  CREATE INDEX "__services_v_b_table_v_columns_parent_id_idx" ON "__services_v_b_table_v_columns" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_table_v_rows_cells_order_idx" ON "__services_v_b_table_v_rows_cells" USING btree ("_order");
  CREATE INDEX "__services_v_b_table_v_rows_cells_parent_id_idx" ON "__services_v_b_table_v_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_table_v_rows_order_idx" ON "__services_v_b_table_v_rows" USING btree ("_order");
  CREATE INDEX "__services_v_b_table_v_rows_parent_id_idx" ON "__services_v_b_table_v_rows" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_table_v_order_idx" ON "__services_v_b_table_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_table_v_parent_id_idx" ON "__services_v_b_table_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_table_v_path_idx" ON "__services_v_b_table_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_quote_v_order_idx" ON "__services_v_b_quote_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_quote_v_parent_id_idx" ON "__services_v_b_quote_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_quote_v_path_idx" ON "__services_v_b_quote_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_quote_v_image_idx" ON "__services_v_b_quote_v" USING btree ("image_id");
  CREATE INDEX "__services_v_b_proofs_v_order_idx" ON "__services_v_b_proofs_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_proofs_v_parent_id_idx" ON "__services_v_b_proofs_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_proofs_v_path_idx" ON "__services_v_b_proofs_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_area_v_sectors_order_idx" ON "__services_v_b_area_v_sectors" USING btree ("_order");
  CREATE INDEX "__services_v_b_area_v_sectors_parent_id_idx" ON "__services_v_b_area_v_sectors" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_area_v_order_idx" ON "__services_v_b_area_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_area_v_parent_id_idx" ON "__services_v_b_area_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_area_v_path_idx" ON "__services_v_b_area_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_team_v_order_idx" ON "__services_v_b_team_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_team_v_parent_id_idx" ON "__services_v_b_team_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_team_v_path_idx" ON "__services_v_b_team_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_reviews_v_order_idx" ON "__services_v_b_reviews_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_reviews_v_parent_id_idx" ON "__services_v_b_reviews_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_reviews_v_path_idx" ON "__services_v_b_reviews_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_arts_v_order_idx" ON "__services_v_b_arts_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_arts_v_parent_id_idx" ON "__services_v_b_arts_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_arts_v_path_idx" ON "__services_v_b_arts_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_form_v_order_idx" ON "__services_v_b_form_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_form_v_parent_id_idx" ON "__services_v_b_form_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_form_v_path_idx" ON "__services_v_b_form_v" USING btree ("_path");
  CREATE INDEX "__services_v_b_form_v_form_idx" ON "__services_v_b_form_v" USING btree ("form_id");
  CREATE INDEX "__services_v_b_rich_v_order_idx" ON "__services_v_b_rich_v" USING btree ("_order");
  CREATE INDEX "__services_v_b_rich_v_parent_id_idx" ON "__services_v_b_rich_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_b_rich_v_path_idx" ON "__services_v_b_rich_v" USING btree ("_path");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version_image_idx" ON "_services_v" USING btree ("version_image_id");
  CREATE INDEX "_services_v_version_meta_version_meta_image_idx" ON "_services_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE INDEX "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX "_services_v_rels_pages_id_idx" ON "_services_v_rels" USING btree ("pages_id");
  CREATE INDEX "_services_v_rels_services_id_idx" ON "_services_v_rels" USING btree ("services_id");
  CREATE INDEX "_services_v_rels_projects_id_idx" ON "_services_v_rels" USING btree ("projects_id");
  CREATE INDEX "_services_v_rels_articles_id_idx" ON "_services_v_rels" USING btree ("articles_id");
  CREATE INDEX "_services_v_rels_media_id_idx" ON "_services_v_rels" USING btree ("media_id");
  CREATE INDEX "_services_v_rels_communes_id_idx" ON "_services_v_rels" USING btree ("communes_id");
  CREATE INDEX "_services_v_rels_faqs_id_idx" ON "_services_v_rels" USING btree ("faqs_id");
  CREATE INDEX "projects_steps_order_idx" ON "projects_steps" USING btree ("_order");
  CREATE INDEX "projects_steps_parent_id_idx" ON "projects_steps" USING btree ("_parent_id");
  CREATE INDEX "projects_materials_order_idx" ON "projects_materials" USING btree ("_order");
  CREATE INDEX "projects_materials_parent_id_idx" ON "projects_materials" USING btree ("_parent_id");
  CREATE INDEX "projects_gallery_order_idx" ON "projects_gallery" USING btree ("_order");
  CREATE INDEX "projects_gallery_parent_id_idx" ON "projects_gallery" USING btree ("_parent_id");
  CREATE INDEX "projects_gallery_image_idx" ON "projects_gallery" USING btree ("image_id");
  CREATE INDEX "projects_commune_idx" ON "projects" USING btree ("commune_id");
  CREATE INDEX "projects_hero_image_idx" ON "projects" USING btree ("hero_image_id");
  CREATE INDEX "projects_meta_meta_image_idx" ON "projects" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "projects_texts_order_parent" ON "projects_texts" USING btree ("order","parent_id");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_services_id_idx" ON "projects_rels" USING btree ("services_id");
  CREATE INDEX "projects_rels_pages_id_idx" ON "projects_rels" USING btree ("pages_id");
  CREATE INDEX "projects_rels_projects_id_idx" ON "projects_rels" USING btree ("projects_id");
  CREATE INDEX "_projects_v_version_steps_order_idx" ON "_projects_v_version_steps" USING btree ("_order");
  CREATE INDEX "_projects_v_version_steps_parent_id_idx" ON "_projects_v_version_steps" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_materials_order_idx" ON "_projects_v_version_materials" USING btree ("_order");
  CREATE INDEX "_projects_v_version_materials_parent_id_idx" ON "_projects_v_version_materials" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_gallery_order_idx" ON "_projects_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_projects_v_version_gallery_parent_id_idx" ON "_projects_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_gallery_image_idx" ON "_projects_v_version_gallery" USING btree ("image_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_commune_idx" ON "_projects_v" USING btree ("version_commune_id");
  CREATE INDEX "_projects_v_version_version_hero_image_idx" ON "_projects_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX "_projects_v_texts_order_parent" ON "_projects_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_projects_v_rels_order_idx" ON "_projects_v_rels" USING btree ("order");
  CREATE INDEX "_projects_v_rels_parent_idx" ON "_projects_v_rels" USING btree ("parent_id");
  CREATE INDEX "_projects_v_rels_path_idx" ON "_projects_v_rels" USING btree ("path");
  CREATE INDEX "_projects_v_rels_services_id_idx" ON "_projects_v_rels" USING btree ("services_id");
  CREATE INDEX "_projects_v_rels_pages_id_idx" ON "_projects_v_rels" USING btree ("pages_id");
  CREATE INDEX "_projects_v_rels_projects_id_idx" ON "_projects_v_rels" USING btree ("projects_id");
  CREATE INDEX "communes_sector_idx" ON "communes" USING btree ("sector_id");
  CREATE UNIQUE INDEX "communes_slug_idx" ON "communes" USING btree ("slug");
  CREATE INDEX "communes_updated_at_idx" ON "communes" USING btree ("updated_at");
  CREATE INDEX "communes_created_at_idx" ON "communes" USING btree ("created_at");
  CREATE INDEX "faqs_source_key_idx" ON "faqs" USING btree ("source_key");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "media_source_key_idx" ON "media" USING btree ("source_key");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "team_photo_idx" ON "team" USING btree ("photo_id");
  CREATE INDEX "team_updated_at_idx" ON "team" USING btree ("updated_at");
  CREATE INDEX "team_created_at_idx" ON "team" USING btree ("created_at");
  CREATE INDEX "reviews_updated_at_idx" ON "reviews" USING btree ("updated_at");
  CREATE INDEX "reviews_created_at_idx" ON "reviews" USING btree ("created_at");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_services_id_idx" ON "redirects_rels" USING btree ("services_id");
  CREATE INDEX "redirects_rels_projects_id_idx" ON "redirects_rels" USING btree ("projects_id");
  CREATE INDEX "redirects_rels_articles_id_idx" ON "redirects_rels" USING btree ("articles_id");
  CREATE INDEX "validation_points_updated_at_idx" ON "validation_points" USING btree ("updated_at");
  CREATE INDEX "validation_points_created_at_idx" ON "validation_points" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "users_username_idx" ON "users" USING btree ("username");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_communes_id_idx" ON "payload_locked_documents_rels" USING btree ("communes_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_team_id_idx" ON "payload_locked_documents_rels" USING btree ("team_id");
  CREATE INDEX "payload_locked_documents_rels_reviews_id_idx" ON "payload_locked_documents_rels" USING btree ("reviews_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_validation_points_id_idx" ON "payload_locked_documents_rels" USING btree ("validation_points_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "company_hours_order_idx" ON "company_hours" USING btree ("_order");
  CREATE INDEX "company_hours_parent_id_idx" ON "company_hours" USING btree ("_parent_id");
  CREATE INDEX "company_closures_order_idx" ON "company_closures" USING btree ("_order");
  CREATE INDEX "company_closures_parent_id_idx" ON "company_closures" USING btree ("_parent_id");
  CREATE INDEX "company_rge_domains_order_idx" ON "company_rge_domains" USING btree ("_order");
  CREATE INDEX "company_rge_domains_parent_id_idx" ON "company_rge_domains" USING btree ("_parent_id");
  CREATE INDEX "company_other_profiles_order_idx" ON "company_other_profiles" USING btree ("_order");
  CREATE INDEX "company_other_profiles_parent_id_idx" ON "company_other_profiles" USING btree ("_parent_id");
  CREATE INDEX "header_nav_order_idx" ON "header_nav" USING btree ("_order");
  CREATE INDEX "header_nav_parent_id_idx" ON "header_nav" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_services_id_idx" ON "header_rels" USING btree ("services_id");
  CREATE INDEX "header_rels_projects_id_idx" ON "header_rels" USING btree ("projects_id");
  CREATE INDEX "header_rels_articles_id_idx" ON "header_rels" USING btree ("articles_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_services_id_idx" ON "footer_rels" USING btree ("services_id");
  CREATE INDEX "footer_rels_projects_id_idx" ON "footer_rels" USING btree ("projects_id");
  CREATE INDEX "footer_rels_articles_id_idx" ON "footer_rels" USING btree ("articles_id");
  CREATE INDEX "proofs_items_order_idx" ON "proofs_items" USING btree ("_order");
  CREATE INDEX "proofs_items_parent_id_idx" ON "proofs_items" USING btree ("_parent_id");
  CREATE INDEX "seo_settings_area_served_order_idx" ON "seo_settings_area_served" USING btree ("_order");
  CREATE INDEX "seo_settings_area_served_parent_id_idx" ON "seo_settings_area_served" USING btree ("_parent_id");
  CREATE INDEX "seo_settings_default_image_idx" ON "seo_settings" USING btree ("default_image_id");
  CREATE INDEX "seo_settings_texts_order_parent" ON "seo_settings_texts" USING btree ("order","parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "forms_blocks_text_input" CASCADE;
  DROP TABLE "forms_blocks_email_input" CASCADE;
  DROP TABLE "forms_blocks_tel_input" CASCADE;
  DROP TABLE "forms_blocks_commune_input" CASCADE;
  DROP TABLE "forms_blocks_textarea_input" CASCADE;
  DROP TABLE "forms_blocks_select_input_options" CASCADE;
  DROP TABLE "forms_blocks_select_input" CASCADE;
  DROP TABLE "forms_blocks_radio_input_options" CASCADE;
  DROP TABLE "forms_blocks_radio_input" CASCADE;
  DROP TABLE "forms_blocks_checkbox_group_options" CASCADE;
  DROP TABLE "forms_blocks_checkbox_group" CASCADE;
  DROP TABLE "forms_blocks_file_input" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions_attachments" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "pages_hero_proofs" CASCADE;
  DROP TABLE "pages_b_txtimg_links" CASCADE;
  DROP TABLE "pages_b_txtimg" CASCADE;
  DROP TABLE "pages_b_cards_items" CASCADE;
  DROP TABLE "pages_b_cards" CASCADE;
  DROP TABLE "pages_b_svc" CASCADE;
  DROP TABLE "pages_b_proj_items" CASCADE;
  DROP TABLE "pages_b_proj" CASCADE;
  DROP TABLE "pages_b_explr_groups_links" CASCADE;
  DROP TABLE "pages_b_explr_groups" CASCADE;
  DROP TABLE "pages_b_explr" CASCADE;
  DROP TABLE "pages_b_steps_steps" CASCADE;
  DROP TABLE "pages_b_steps" CASCADE;
  DROP TABLE "pages_b_list_items" CASCADE;
  DROP TABLE "pages_b_list" CASCADE;
  DROP TABLE "pages_b_faq" CASCADE;
  DROP TABLE "pages_b_cta" CASCADE;
  DROP TABLE "pages_b_mnf_items" CASCADE;
  DROP TABLE "pages_b_mnf" CASCADE;
  DROP TABLE "pages_b_spot_steps" CASCADE;
  DROP TABLE "pages_b_spot_links" CASCADE;
  DROP TABLE "pages_b_spot" CASCADE;
  DROP TABLE "pages_b_gal_images" CASCADE;
  DROP TABLE "pages_b_gal" CASCADE;
  DROP TABLE "pages_b_table_columns" CASCADE;
  DROP TABLE "pages_b_table_rows_cells" CASCADE;
  DROP TABLE "pages_b_table_rows" CASCADE;
  DROP TABLE "pages_b_table" CASCADE;
  DROP TABLE "pages_b_quote" CASCADE;
  DROP TABLE "pages_b_proofs" CASCADE;
  DROP TABLE "pages_b_area_sectors" CASCADE;
  DROP TABLE "pages_b_area" CASCADE;
  DROP TABLE "pages_b_team" CASCADE;
  DROP TABLE "pages_b_reviews" CASCADE;
  DROP TABLE "pages_b_arts" CASCADE;
  DROP TABLE "pages_b_form" CASCADE;
  DROP TABLE "pages_b_rich" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_proofs" CASCADE;
  DROP TABLE "__pages_v_b_txtimg_v_links" CASCADE;
  DROP TABLE "__pages_v_b_txtimg_v" CASCADE;
  DROP TABLE "__pages_v_b_cards_v_items" CASCADE;
  DROP TABLE "__pages_v_b_cards_v" CASCADE;
  DROP TABLE "__pages_v_b_svc_v" CASCADE;
  DROP TABLE "__pages_v_b_proj_v_items" CASCADE;
  DROP TABLE "__pages_v_b_proj_v" CASCADE;
  DROP TABLE "__pages_v_b_explr_v_groups_links" CASCADE;
  DROP TABLE "__pages_v_b_explr_v_groups" CASCADE;
  DROP TABLE "__pages_v_b_explr_v" CASCADE;
  DROP TABLE "__pages_v_b_steps_v_steps" CASCADE;
  DROP TABLE "__pages_v_b_steps_v" CASCADE;
  DROP TABLE "__pages_v_b_list_v_items" CASCADE;
  DROP TABLE "__pages_v_b_list_v" CASCADE;
  DROP TABLE "__pages_v_b_faq_v" CASCADE;
  DROP TABLE "__pages_v_b_cta_v" CASCADE;
  DROP TABLE "__pages_v_b_mnf_v_items" CASCADE;
  DROP TABLE "__pages_v_b_mnf_v" CASCADE;
  DROP TABLE "__pages_v_b_spot_v_steps" CASCADE;
  DROP TABLE "__pages_v_b_spot_v_links" CASCADE;
  DROP TABLE "__pages_v_b_spot_v" CASCADE;
  DROP TABLE "__pages_v_b_gal_v_images" CASCADE;
  DROP TABLE "__pages_v_b_gal_v" CASCADE;
  DROP TABLE "__pages_v_b_table_v_columns" CASCADE;
  DROP TABLE "__pages_v_b_table_v_rows_cells" CASCADE;
  DROP TABLE "__pages_v_b_table_v_rows" CASCADE;
  DROP TABLE "__pages_v_b_table_v" CASCADE;
  DROP TABLE "__pages_v_b_quote_v" CASCADE;
  DROP TABLE "__pages_v_b_proofs_v" CASCADE;
  DROP TABLE "__pages_v_b_area_v_sectors" CASCADE;
  DROP TABLE "__pages_v_b_area_v" CASCADE;
  DROP TABLE "__pages_v_b_team_v" CASCADE;
  DROP TABLE "__pages_v_b_reviews_v" CASCADE;
  DROP TABLE "__pages_v_b_arts_v" CASCADE;
  DROP TABLE "__pages_v_b_form_v" CASCADE;
  DROP TABLE "__pages_v_b_rich_v" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "articles_b_txtimg_links" CASCADE;
  DROP TABLE "articles_b_txtimg" CASCADE;
  DROP TABLE "articles_b_cards_items" CASCADE;
  DROP TABLE "articles_b_cards" CASCADE;
  DROP TABLE "articles_b_svc" CASCADE;
  DROP TABLE "articles_b_proj_items" CASCADE;
  DROP TABLE "articles_b_proj" CASCADE;
  DROP TABLE "articles_b_explr_groups_links" CASCADE;
  DROP TABLE "articles_b_explr_groups" CASCADE;
  DROP TABLE "articles_b_explr" CASCADE;
  DROP TABLE "articles_b_steps_steps" CASCADE;
  DROP TABLE "articles_b_steps" CASCADE;
  DROP TABLE "articles_b_list_items" CASCADE;
  DROP TABLE "articles_b_list" CASCADE;
  DROP TABLE "articles_b_faq" CASCADE;
  DROP TABLE "articles_b_cta" CASCADE;
  DROP TABLE "articles_b_mnf_items" CASCADE;
  DROP TABLE "articles_b_mnf" CASCADE;
  DROP TABLE "articles_b_spot_steps" CASCADE;
  DROP TABLE "articles_b_spot_links" CASCADE;
  DROP TABLE "articles_b_spot" CASCADE;
  DROP TABLE "articles_b_gal_images" CASCADE;
  DROP TABLE "articles_b_gal" CASCADE;
  DROP TABLE "articles_b_table_columns" CASCADE;
  DROP TABLE "articles_b_table_rows_cells" CASCADE;
  DROP TABLE "articles_b_table_rows" CASCADE;
  DROP TABLE "articles_b_table" CASCADE;
  DROP TABLE "articles_b_quote" CASCADE;
  DROP TABLE "articles_b_proofs" CASCADE;
  DROP TABLE "articles_b_area_sectors" CASCADE;
  DROP TABLE "articles_b_area" CASCADE;
  DROP TABLE "articles_b_team" CASCADE;
  DROP TABLE "articles_b_reviews" CASCADE;
  DROP TABLE "articles_b_arts" CASCADE;
  DROP TABLE "articles_b_form" CASCADE;
  DROP TABLE "articles_b_rich" CASCADE;
  DROP TABLE "articles" CASCADE;
  DROP TABLE "articles_rels" CASCADE;
  DROP TABLE "__articles_v_b_txtimg_v_links" CASCADE;
  DROP TABLE "__articles_v_b_txtimg_v" CASCADE;
  DROP TABLE "__articles_v_b_cards_v_items" CASCADE;
  DROP TABLE "__articles_v_b_cards_v" CASCADE;
  DROP TABLE "__articles_v_b_svc_v" CASCADE;
  DROP TABLE "__articles_v_b_proj_v_items" CASCADE;
  DROP TABLE "__articles_v_b_proj_v" CASCADE;
  DROP TABLE "__articles_v_b_explr_v_groups_links" CASCADE;
  DROP TABLE "__articles_v_b_explr_v_groups" CASCADE;
  DROP TABLE "__articles_v_b_explr_v" CASCADE;
  DROP TABLE "__articles_v_b_steps_v_steps" CASCADE;
  DROP TABLE "__articles_v_b_steps_v" CASCADE;
  DROP TABLE "__articles_v_b_list_v_items" CASCADE;
  DROP TABLE "__articles_v_b_list_v" CASCADE;
  DROP TABLE "__articles_v_b_faq_v" CASCADE;
  DROP TABLE "__articles_v_b_cta_v" CASCADE;
  DROP TABLE "__articles_v_b_mnf_v_items" CASCADE;
  DROP TABLE "__articles_v_b_mnf_v" CASCADE;
  DROP TABLE "__articles_v_b_spot_v_steps" CASCADE;
  DROP TABLE "__articles_v_b_spot_v_links" CASCADE;
  DROP TABLE "__articles_v_b_spot_v" CASCADE;
  DROP TABLE "__articles_v_b_gal_v_images" CASCADE;
  DROP TABLE "__articles_v_b_gal_v" CASCADE;
  DROP TABLE "__articles_v_b_table_v_columns" CASCADE;
  DROP TABLE "__articles_v_b_table_v_rows_cells" CASCADE;
  DROP TABLE "__articles_v_b_table_v_rows" CASCADE;
  DROP TABLE "__articles_v_b_table_v" CASCADE;
  DROP TABLE "__articles_v_b_quote_v" CASCADE;
  DROP TABLE "__articles_v_b_proofs_v" CASCADE;
  DROP TABLE "__articles_v_b_area_v_sectors" CASCADE;
  DROP TABLE "__articles_v_b_area_v" CASCADE;
  DROP TABLE "__articles_v_b_team_v" CASCADE;
  DROP TABLE "__articles_v_b_reviews_v" CASCADE;
  DROP TABLE "__articles_v_b_arts_v" CASCADE;
  DROP TABLE "__articles_v_b_form_v" CASCADE;
  DROP TABLE "__articles_v_b_rich_v" CASCADE;
  DROP TABLE "_articles_v" CASCADE;
  DROP TABLE "_articles_v_rels" CASCADE;
  DROP TABLE "services_hero_proofs" CASCADE;
  DROP TABLE "services_b_txtimg_links" CASCADE;
  DROP TABLE "services_b_txtimg" CASCADE;
  DROP TABLE "services_b_cards_items" CASCADE;
  DROP TABLE "services_b_cards" CASCADE;
  DROP TABLE "services_b_svc" CASCADE;
  DROP TABLE "services_b_proj_items" CASCADE;
  DROP TABLE "services_b_proj" CASCADE;
  DROP TABLE "services_b_explr_groups_links" CASCADE;
  DROP TABLE "services_b_explr_groups" CASCADE;
  DROP TABLE "services_b_explr" CASCADE;
  DROP TABLE "services_b_steps_steps" CASCADE;
  DROP TABLE "services_b_steps" CASCADE;
  DROP TABLE "services_b_list_items" CASCADE;
  DROP TABLE "services_b_list" CASCADE;
  DROP TABLE "services_b_faq" CASCADE;
  DROP TABLE "services_b_cta" CASCADE;
  DROP TABLE "services_b_mnf_items" CASCADE;
  DROP TABLE "services_b_mnf" CASCADE;
  DROP TABLE "services_b_spot_steps" CASCADE;
  DROP TABLE "services_b_spot_links" CASCADE;
  DROP TABLE "services_b_spot" CASCADE;
  DROP TABLE "services_b_gal_images" CASCADE;
  DROP TABLE "services_b_gal" CASCADE;
  DROP TABLE "services_b_table_columns" CASCADE;
  DROP TABLE "services_b_table_rows_cells" CASCADE;
  DROP TABLE "services_b_table_rows" CASCADE;
  DROP TABLE "services_b_table" CASCADE;
  DROP TABLE "services_b_quote" CASCADE;
  DROP TABLE "services_b_proofs" CASCADE;
  DROP TABLE "services_b_area_sectors" CASCADE;
  DROP TABLE "services_b_area" CASCADE;
  DROP TABLE "services_b_team" CASCADE;
  DROP TABLE "services_b_reviews" CASCADE;
  DROP TABLE "services_b_arts" CASCADE;
  DROP TABLE "services_b_form" CASCADE;
  DROP TABLE "services_b_rich" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v_version_hero_proofs" CASCADE;
  DROP TABLE "__services_v_b_txtimg_v_links" CASCADE;
  DROP TABLE "__services_v_b_txtimg_v" CASCADE;
  DROP TABLE "__services_v_b_cards_v_items" CASCADE;
  DROP TABLE "__services_v_b_cards_v" CASCADE;
  DROP TABLE "__services_v_b_svc_v" CASCADE;
  DROP TABLE "__services_v_b_proj_v_items" CASCADE;
  DROP TABLE "__services_v_b_proj_v" CASCADE;
  DROP TABLE "__services_v_b_explr_v_groups_links" CASCADE;
  DROP TABLE "__services_v_b_explr_v_groups" CASCADE;
  DROP TABLE "__services_v_b_explr_v" CASCADE;
  DROP TABLE "__services_v_b_steps_v_steps" CASCADE;
  DROP TABLE "__services_v_b_steps_v" CASCADE;
  DROP TABLE "__services_v_b_list_v_items" CASCADE;
  DROP TABLE "__services_v_b_list_v" CASCADE;
  DROP TABLE "__services_v_b_faq_v" CASCADE;
  DROP TABLE "__services_v_b_cta_v" CASCADE;
  DROP TABLE "__services_v_b_mnf_v_items" CASCADE;
  DROP TABLE "__services_v_b_mnf_v" CASCADE;
  DROP TABLE "__services_v_b_spot_v_steps" CASCADE;
  DROP TABLE "__services_v_b_spot_v_links" CASCADE;
  DROP TABLE "__services_v_b_spot_v" CASCADE;
  DROP TABLE "__services_v_b_gal_v_images" CASCADE;
  DROP TABLE "__services_v_b_gal_v" CASCADE;
  DROP TABLE "__services_v_b_table_v_columns" CASCADE;
  DROP TABLE "__services_v_b_table_v_rows_cells" CASCADE;
  DROP TABLE "__services_v_b_table_v_rows" CASCADE;
  DROP TABLE "__services_v_b_table_v" CASCADE;
  DROP TABLE "__services_v_b_quote_v" CASCADE;
  DROP TABLE "__services_v_b_proofs_v" CASCADE;
  DROP TABLE "__services_v_b_area_v_sectors" CASCADE;
  DROP TABLE "__services_v_b_area_v" CASCADE;
  DROP TABLE "__services_v_b_team_v" CASCADE;
  DROP TABLE "__services_v_b_reviews_v" CASCADE;
  DROP TABLE "__services_v_b_arts_v" CASCADE;
  DROP TABLE "__services_v_b_form_v" CASCADE;
  DROP TABLE "__services_v_b_rich_v" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "projects_steps" CASCADE;
  DROP TABLE "projects_materials" CASCADE;
  DROP TABLE "projects_gallery" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_texts" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "_projects_v_version_steps" CASCADE;
  DROP TABLE "_projects_v_version_materials" CASCADE;
  DROP TABLE "_projects_v_version_gallery" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_texts" CASCADE;
  DROP TABLE "_projects_v_rels" CASCADE;
  DROP TABLE "communes" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "reviews" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "validation_points" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "company_hours" CASCADE;
  DROP TABLE "company_closures" CASCADE;
  DROP TABLE "company_rge_domains" CASCADE;
  DROP TABLE "company_other_profiles" CASCADE;
  DROP TABLE "company" CASCADE;
  DROP TABLE "header_nav" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "proofs_items" CASCADE;
  DROP TABLE "proofs" CASCADE;
  DROP TABLE "site_texts" CASCADE;
  DROP TABLE "seo_settings_area_served" CASCADE;
  DROP TABLE "seo_settings" CASCADE;
  DROP TABLE "seo_settings_texts" CASCADE;
  DROP TABLE "analytics" CASCADE;
  DROP TYPE "public"."enum_forms_blocks_text_input_width";
  DROP TYPE "public"."enum_forms_blocks_email_input_width";
  DROP TYPE "public"."enum_forms_blocks_tel_input_width";
  DROP TYPE "public"."enum_forms_blocks_commune_input_width";
  DROP TYPE "public"."enum_forms_blocks_textarea_input_width";
  DROP TYPE "public"."enum_forms_blocks_select_input_width";
  DROP TYPE "public"."enum_forms_blocks_radio_input_width";
  DROP TYPE "public"."enum_forms_blocks_checkbox_group_width";
  DROP TYPE "public"."enum_forms_blocks_file_input_width";
  DROP TYPE "public"."enum_form_submissions_status";
  DROP TYPE "public"."enum_pages_hero_proofs_icon";
  DROP TYPE "public"."enum_pages_b_txtimg_links_link_type";
  DROP TYPE "public"."enum_pages_b_txtimg_image_position";
  DROP TYPE "public"."enum_pages_b_txtimg_cta_type";
  DROP TYPE "public"."enum_pages_b_txtimg_tone";
  DROP TYPE "public"."enum_pages_b_cards_items_icon";
  DROP TYPE "public"."enum_pages_b_cards_items_link_type";
  DROP TYPE "public"."enum_pages_b_cards_variant";
  DROP TYPE "public"."enum_pages_b_cards_columns";
  DROP TYPE "public"."enum_pages_b_cards_cta_type";
  DROP TYPE "public"."enum_pages_b_cards_tone";
  DROP TYPE "public"."enum_pages_b_svc_mode";
  DROP TYPE "public"."enum_pages_b_svc_variant";
  DROP TYPE "public"."enum_pages_b_svc_cta_type";
  DROP TYPE "public"."enum_pages_b_svc_tone";
  DROP TYPE "public"."enum_pages_b_proj_mode";
  DROP TYPE "public"."enum_pages_b_proj_label";
  DROP TYPE "public"."enum_pages_b_proj_cta_type";
  DROP TYPE "public"."enum_pages_b_proj_tone";
  DROP TYPE "public"."enum_pages_b_explr_groups_links_link_type";
  DROP TYPE "public"."enum_pages_b_explr_empty_cta_type";
  DROP TYPE "public"."enum_pages_b_steps_variant";
  DROP TYPE "public"."enum_pages_b_steps_cta_type";
  DROP TYPE "public"."enum_pages_b_steps_tone";
  DROP TYPE "public"."enum_pages_b_list_items_link_type";
  DROP TYPE "public"."enum_pages_b_list_style";
  DROP TYPE "public"."enum_pages_b_list_cta_type";
  DROP TYPE "public"."enum_pages_b_list_tone";
  DROP TYPE "public"."enum_pages_b_faq_tone";
  DROP TYPE "public"."enum_pages_b_cta_variant";
  DROP TYPE "public"."enum_pages_b_cta_primary_type";
  DROP TYPE "public"."enum_pages_b_cta_secondary_type";
  DROP TYPE "public"."enum_pages_b_cta_icon";
  DROP TYPE "public"."enum_pages_b_mnf_layout";
  DROP TYPE "public"."enum_pages_b_mnf_cta_type";
  DROP TYPE "public"."enum_pages_b_spot_links_link_type";
  DROP TYPE "public"."enum_pages_b_spot_primary_type";
  DROP TYPE "public"."enum_pages_b_gal_tone";
  DROP TYPE "public"."enum_pages_b_table_tone";
  DROP TYPE "public"."enum_pages_b_quote_tone";
  DROP TYPE "public"."enum_pages_b_proofs_variant";
  DROP TYPE "public"."enum_pages_b_area_sectors_link_type";
  DROP TYPE "public"."enum_pages_b_area_tone";
  DROP TYPE "public"."enum_pages_b_team_tone";
  DROP TYPE "public"."enum_pages_b_reviews_tone";
  DROP TYPE "public"."enum_pages_b_arts_mode";
  DROP TYPE "public"."enum_pages_b_arts_cta_type";
  DROP TYPE "public"."enum_pages_b_arts_tone";
  DROP TYPE "public"."enum_pages_b_rich_tone";
  DROP TYPE "public"."enum_pages_hero_variant";
  DROP TYPE "public"."enum_pages_hero_primary_cta_type";
  DROP TYPE "public"."enum_pages_hero_secondary_cta_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_proofs_icon";
  DROP TYPE "public"."enum___pages_v_b_txtimg_v_links_link_type";
  DROP TYPE "public"."enum___pages_v_b_txtimg_v_image_position";
  DROP TYPE "public"."enum___pages_v_b_txtimg_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_txtimg_v_tone";
  DROP TYPE "public"."enum___pages_v_b_cards_v_items_icon";
  DROP TYPE "public"."enum___pages_v_b_cards_v_items_link_type";
  DROP TYPE "public"."enum___pages_v_b_cards_v_variant";
  DROP TYPE "public"."enum___pages_v_b_cards_v_columns";
  DROP TYPE "public"."enum___pages_v_b_cards_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_cards_v_tone";
  DROP TYPE "public"."enum___pages_v_b_svc_v_mode";
  DROP TYPE "public"."enum___pages_v_b_svc_v_variant";
  DROP TYPE "public"."enum___pages_v_b_svc_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_svc_v_tone";
  DROP TYPE "public"."enum___pages_v_b_proj_v_mode";
  DROP TYPE "public"."enum___pages_v_b_proj_v_label";
  DROP TYPE "public"."enum___pages_v_b_proj_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_proj_v_tone";
  DROP TYPE "public"."enum___pages_v_b_explr_v_groups_links_link_type";
  DROP TYPE "public"."enum___pages_v_b_explr_v_empty_cta_type";
  DROP TYPE "public"."enum___pages_v_b_steps_v_variant";
  DROP TYPE "public"."enum___pages_v_b_steps_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_steps_v_tone";
  DROP TYPE "public"."enum___pages_v_b_list_v_items_link_type";
  DROP TYPE "public"."enum___pages_v_b_list_v_style";
  DROP TYPE "public"."enum___pages_v_b_list_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_list_v_tone";
  DROP TYPE "public"."enum___pages_v_b_faq_v_tone";
  DROP TYPE "public"."enum___pages_v_b_cta_v_variant";
  DROP TYPE "public"."enum___pages_v_b_cta_v_primary_type";
  DROP TYPE "public"."enum___pages_v_b_cta_v_secondary_type";
  DROP TYPE "public"."enum___pages_v_b_cta_v_icon";
  DROP TYPE "public"."enum___pages_v_b_mnf_v_layout";
  DROP TYPE "public"."enum___pages_v_b_mnf_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_spot_v_links_link_type";
  DROP TYPE "public"."enum___pages_v_b_spot_v_primary_type";
  DROP TYPE "public"."enum___pages_v_b_gal_v_tone";
  DROP TYPE "public"."enum___pages_v_b_table_v_tone";
  DROP TYPE "public"."enum___pages_v_b_quote_v_tone";
  DROP TYPE "public"."enum___pages_v_b_proofs_v_variant";
  DROP TYPE "public"."enum___pages_v_b_area_v_sectors_link_type";
  DROP TYPE "public"."enum___pages_v_b_area_v_tone";
  DROP TYPE "public"."enum___pages_v_b_team_v_tone";
  DROP TYPE "public"."enum___pages_v_b_reviews_v_tone";
  DROP TYPE "public"."enum___pages_v_b_arts_v_mode";
  DROP TYPE "public"."enum___pages_v_b_arts_v_cta_type";
  DROP TYPE "public"."enum___pages_v_b_arts_v_tone";
  DROP TYPE "public"."enum___pages_v_b_rich_v_tone";
  DROP TYPE "public"."enum__pages_v_version_hero_variant";
  DROP TYPE "public"."enum__pages_v_version_hero_primary_cta_type";
  DROP TYPE "public"."enum__pages_v_version_hero_secondary_cta_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_articles_b_txtimg_links_link_type";
  DROP TYPE "public"."enum_articles_b_txtimg_image_position";
  DROP TYPE "public"."enum_articles_b_txtimg_cta_type";
  DROP TYPE "public"."enum_articles_b_txtimg_tone";
  DROP TYPE "public"."enum_articles_b_cards_items_icon";
  DROP TYPE "public"."enum_articles_b_cards_items_link_type";
  DROP TYPE "public"."enum_articles_b_cards_variant";
  DROP TYPE "public"."enum_articles_b_cards_columns";
  DROP TYPE "public"."enum_articles_b_cards_cta_type";
  DROP TYPE "public"."enum_articles_b_cards_tone";
  DROP TYPE "public"."enum_articles_b_svc_mode";
  DROP TYPE "public"."enum_articles_b_svc_variant";
  DROP TYPE "public"."enum_articles_b_svc_cta_type";
  DROP TYPE "public"."enum_articles_b_svc_tone";
  DROP TYPE "public"."enum_articles_b_proj_mode";
  DROP TYPE "public"."enum_articles_b_proj_label";
  DROP TYPE "public"."enum_articles_b_proj_cta_type";
  DROP TYPE "public"."enum_articles_b_proj_tone";
  DROP TYPE "public"."enum_articles_b_explr_groups_links_link_type";
  DROP TYPE "public"."enum_articles_b_explr_empty_cta_type";
  DROP TYPE "public"."enum_articles_b_steps_variant";
  DROP TYPE "public"."enum_articles_b_steps_cta_type";
  DROP TYPE "public"."enum_articles_b_steps_tone";
  DROP TYPE "public"."enum_articles_b_list_items_link_type";
  DROP TYPE "public"."enum_articles_b_list_style";
  DROP TYPE "public"."enum_articles_b_list_cta_type";
  DROP TYPE "public"."enum_articles_b_list_tone";
  DROP TYPE "public"."enum_articles_b_faq_tone";
  DROP TYPE "public"."enum_articles_b_cta_variant";
  DROP TYPE "public"."enum_articles_b_cta_primary_type";
  DROP TYPE "public"."enum_articles_b_cta_secondary_type";
  DROP TYPE "public"."enum_articles_b_cta_icon";
  DROP TYPE "public"."enum_articles_b_mnf_layout";
  DROP TYPE "public"."enum_articles_b_mnf_cta_type";
  DROP TYPE "public"."enum_articles_b_spot_links_link_type";
  DROP TYPE "public"."enum_articles_b_spot_primary_type";
  DROP TYPE "public"."enum_articles_b_gal_tone";
  DROP TYPE "public"."enum_articles_b_table_tone";
  DROP TYPE "public"."enum_articles_b_quote_tone";
  DROP TYPE "public"."enum_articles_b_proofs_variant";
  DROP TYPE "public"."enum_articles_b_area_sectors_link_type";
  DROP TYPE "public"."enum_articles_b_area_tone";
  DROP TYPE "public"."enum_articles_b_team_tone";
  DROP TYPE "public"."enum_articles_b_reviews_tone";
  DROP TYPE "public"."enum_articles_b_arts_mode";
  DROP TYPE "public"."enum_articles_b_arts_cta_type";
  DROP TYPE "public"."enum_articles_b_arts_tone";
  DROP TYPE "public"."enum_articles_b_rich_tone";
  DROP TYPE "public"."enum_articles_status";
  DROP TYPE "public"."enum___articles_v_b_txtimg_v_links_link_type";
  DROP TYPE "public"."enum___articles_v_b_txtimg_v_image_position";
  DROP TYPE "public"."enum___articles_v_b_txtimg_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_txtimg_v_tone";
  DROP TYPE "public"."enum___articles_v_b_cards_v_items_icon";
  DROP TYPE "public"."enum___articles_v_b_cards_v_items_link_type";
  DROP TYPE "public"."enum___articles_v_b_cards_v_variant";
  DROP TYPE "public"."enum___articles_v_b_cards_v_columns";
  DROP TYPE "public"."enum___articles_v_b_cards_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_cards_v_tone";
  DROP TYPE "public"."enum___articles_v_b_svc_v_mode";
  DROP TYPE "public"."enum___articles_v_b_svc_v_variant";
  DROP TYPE "public"."enum___articles_v_b_svc_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_svc_v_tone";
  DROP TYPE "public"."enum___articles_v_b_proj_v_mode";
  DROP TYPE "public"."enum___articles_v_b_proj_v_label";
  DROP TYPE "public"."enum___articles_v_b_proj_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_proj_v_tone";
  DROP TYPE "public"."enum___articles_v_b_explr_v_groups_links_link_type";
  DROP TYPE "public"."enum___articles_v_b_explr_v_empty_cta_type";
  DROP TYPE "public"."enum___articles_v_b_steps_v_variant";
  DROP TYPE "public"."enum___articles_v_b_steps_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_steps_v_tone";
  DROP TYPE "public"."enum___articles_v_b_list_v_items_link_type";
  DROP TYPE "public"."enum___articles_v_b_list_v_style";
  DROP TYPE "public"."enum___articles_v_b_list_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_list_v_tone";
  DROP TYPE "public"."enum___articles_v_b_faq_v_tone";
  DROP TYPE "public"."enum___articles_v_b_cta_v_variant";
  DROP TYPE "public"."enum___articles_v_b_cta_v_primary_type";
  DROP TYPE "public"."enum___articles_v_b_cta_v_secondary_type";
  DROP TYPE "public"."enum___articles_v_b_cta_v_icon";
  DROP TYPE "public"."enum___articles_v_b_mnf_v_layout";
  DROP TYPE "public"."enum___articles_v_b_mnf_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_spot_v_links_link_type";
  DROP TYPE "public"."enum___articles_v_b_spot_v_primary_type";
  DROP TYPE "public"."enum___articles_v_b_gal_v_tone";
  DROP TYPE "public"."enum___articles_v_b_table_v_tone";
  DROP TYPE "public"."enum___articles_v_b_quote_v_tone";
  DROP TYPE "public"."enum___articles_v_b_proofs_v_variant";
  DROP TYPE "public"."enum___articles_v_b_area_v_sectors_link_type";
  DROP TYPE "public"."enum___articles_v_b_area_v_tone";
  DROP TYPE "public"."enum___articles_v_b_team_v_tone";
  DROP TYPE "public"."enum___articles_v_b_reviews_v_tone";
  DROP TYPE "public"."enum___articles_v_b_arts_v_mode";
  DROP TYPE "public"."enum___articles_v_b_arts_v_cta_type";
  DROP TYPE "public"."enum___articles_v_b_arts_v_tone";
  DROP TYPE "public"."enum___articles_v_b_rich_v_tone";
  DROP TYPE "public"."enum__articles_v_version_status";
  DROP TYPE "public"."enum_services_hero_proofs_icon";
  DROP TYPE "public"."enum_services_b_txtimg_links_link_type";
  DROP TYPE "public"."enum_services_b_txtimg_image_position";
  DROP TYPE "public"."enum_services_b_txtimg_cta_type";
  DROP TYPE "public"."enum_services_b_txtimg_tone";
  DROP TYPE "public"."enum_services_b_cards_items_icon";
  DROP TYPE "public"."enum_services_b_cards_items_link_type";
  DROP TYPE "public"."enum_services_b_cards_variant";
  DROP TYPE "public"."enum_services_b_cards_columns";
  DROP TYPE "public"."enum_services_b_cards_cta_type";
  DROP TYPE "public"."enum_services_b_cards_tone";
  DROP TYPE "public"."enum_services_b_svc_mode";
  DROP TYPE "public"."enum_services_b_svc_variant";
  DROP TYPE "public"."enum_services_b_svc_cta_type";
  DROP TYPE "public"."enum_services_b_svc_tone";
  DROP TYPE "public"."enum_services_b_proj_mode";
  DROP TYPE "public"."enum_services_b_proj_label";
  DROP TYPE "public"."enum_services_b_proj_cta_type";
  DROP TYPE "public"."enum_services_b_proj_tone";
  DROP TYPE "public"."enum_services_b_explr_groups_links_link_type";
  DROP TYPE "public"."enum_services_b_explr_empty_cta_type";
  DROP TYPE "public"."enum_services_b_steps_variant";
  DROP TYPE "public"."enum_services_b_steps_cta_type";
  DROP TYPE "public"."enum_services_b_steps_tone";
  DROP TYPE "public"."enum_services_b_list_items_link_type";
  DROP TYPE "public"."enum_services_b_list_style";
  DROP TYPE "public"."enum_services_b_list_cta_type";
  DROP TYPE "public"."enum_services_b_list_tone";
  DROP TYPE "public"."enum_services_b_faq_tone";
  DROP TYPE "public"."enum_services_b_cta_variant";
  DROP TYPE "public"."enum_services_b_cta_primary_type";
  DROP TYPE "public"."enum_services_b_cta_secondary_type";
  DROP TYPE "public"."enum_services_b_cta_icon";
  DROP TYPE "public"."enum_services_b_mnf_layout";
  DROP TYPE "public"."enum_services_b_mnf_cta_type";
  DROP TYPE "public"."enum_services_b_spot_links_link_type";
  DROP TYPE "public"."enum_services_b_spot_primary_type";
  DROP TYPE "public"."enum_services_b_gal_tone";
  DROP TYPE "public"."enum_services_b_table_tone";
  DROP TYPE "public"."enum_services_b_quote_tone";
  DROP TYPE "public"."enum_services_b_proofs_variant";
  DROP TYPE "public"."enum_services_b_area_sectors_link_type";
  DROP TYPE "public"."enum_services_b_area_tone";
  DROP TYPE "public"."enum_services_b_team_tone";
  DROP TYPE "public"."enum_services_b_reviews_tone";
  DROP TYPE "public"."enum_services_b_arts_mode";
  DROP TYPE "public"."enum_services_b_arts_cta_type";
  DROP TYPE "public"."enum_services_b_arts_tone";
  DROP TYPE "public"."enum_services_b_rich_tone";
  DROP TYPE "public"."enum_services_icon";
  DROP TYPE "public"."enum_services_hero_variant";
  DROP TYPE "public"."enum_services_hero_primary_cta_type";
  DROP TYPE "public"."enum_services_hero_secondary_cta_type";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_hero_proofs_icon";
  DROP TYPE "public"."enum___services_v_b_txtimg_v_links_link_type";
  DROP TYPE "public"."enum___services_v_b_txtimg_v_image_position";
  DROP TYPE "public"."enum___services_v_b_txtimg_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_txtimg_v_tone";
  DROP TYPE "public"."enum___services_v_b_cards_v_items_icon";
  DROP TYPE "public"."enum___services_v_b_cards_v_items_link_type";
  DROP TYPE "public"."enum___services_v_b_cards_v_variant";
  DROP TYPE "public"."enum___services_v_b_cards_v_columns";
  DROP TYPE "public"."enum___services_v_b_cards_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_cards_v_tone";
  DROP TYPE "public"."enum___services_v_b_svc_v_mode";
  DROP TYPE "public"."enum___services_v_b_svc_v_variant";
  DROP TYPE "public"."enum___services_v_b_svc_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_svc_v_tone";
  DROP TYPE "public"."enum___services_v_b_proj_v_mode";
  DROP TYPE "public"."enum___services_v_b_proj_v_label";
  DROP TYPE "public"."enum___services_v_b_proj_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_proj_v_tone";
  DROP TYPE "public"."enum___services_v_b_explr_v_groups_links_link_type";
  DROP TYPE "public"."enum___services_v_b_explr_v_empty_cta_type";
  DROP TYPE "public"."enum___services_v_b_steps_v_variant";
  DROP TYPE "public"."enum___services_v_b_steps_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_steps_v_tone";
  DROP TYPE "public"."enum___services_v_b_list_v_items_link_type";
  DROP TYPE "public"."enum___services_v_b_list_v_style";
  DROP TYPE "public"."enum___services_v_b_list_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_list_v_tone";
  DROP TYPE "public"."enum___services_v_b_faq_v_tone";
  DROP TYPE "public"."enum___services_v_b_cta_v_variant";
  DROP TYPE "public"."enum___services_v_b_cta_v_primary_type";
  DROP TYPE "public"."enum___services_v_b_cta_v_secondary_type";
  DROP TYPE "public"."enum___services_v_b_cta_v_icon";
  DROP TYPE "public"."enum___services_v_b_mnf_v_layout";
  DROP TYPE "public"."enum___services_v_b_mnf_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_spot_v_links_link_type";
  DROP TYPE "public"."enum___services_v_b_spot_v_primary_type";
  DROP TYPE "public"."enum___services_v_b_gal_v_tone";
  DROP TYPE "public"."enum___services_v_b_table_v_tone";
  DROP TYPE "public"."enum___services_v_b_quote_v_tone";
  DROP TYPE "public"."enum___services_v_b_proofs_v_variant";
  DROP TYPE "public"."enum___services_v_b_area_v_sectors_link_type";
  DROP TYPE "public"."enum___services_v_b_area_v_tone";
  DROP TYPE "public"."enum___services_v_b_team_v_tone";
  DROP TYPE "public"."enum___services_v_b_reviews_v_tone";
  DROP TYPE "public"."enum___services_v_b_arts_v_mode";
  DROP TYPE "public"."enum___services_v_b_arts_v_cta_type";
  DROP TYPE "public"."enum___services_v_b_arts_v_tone";
  DROP TYPE "public"."enum___services_v_b_rich_v_tone";
  DROP TYPE "public"."enum__services_v_version_icon";
  DROP TYPE "public"."enum__services_v_version_hero_variant";
  DROP TYPE "public"."enum__services_v_version_hero_primary_cta_type";
  DROP TYPE "public"."enum__services_v_version_hero_secondary_cta_type";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_communes_area";
  DROP TYPE "public"."enum_faqs_topic";
  DROP TYPE "public"."enum_media_kind";
  DROP TYPE "public"."enum_reviews_source";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_validation_points_status";
  DROP TYPE "public"."enum_validation_points_priority";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_company_hours_day";
  DROP TYPE "public"."enum_header_nav_kind";
  DROP TYPE "public"."enum_header_nav_link_type";
  DROP TYPE "public"."enum_header_cta_type";
  DROP TYPE "public"."enum_footer_columns_links_link_type";
  DROP TYPE "public"."enum_footer_columns_source";
  DROP TYPE "public"."enum_footer_legal_links_link_type";
  DROP TYPE "public"."enum_proofs_items_icon";
  DROP TYPE "public"."enum_analytics_provider";`)
}
