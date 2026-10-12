import * as migration_20261011_192649_initial from './20261011_192649_initial';
import * as migration_20261011_194543_article_menu_label from './20261011_194543_article_menu_label';
import * as migration_20261011_204444_media_storage_prefix from './20261011_204444_media_storage_prefix';
import * as migration_20261011_212140_hero_highlight_texts from './20261011_212140_hero_highlight_texts';
import * as migration_20261011_220046_interior_pages_v2 from './20261011_220046_interior_pages_v2';
import * as migration_20261011_223439_quote_lead from './20261011_223439_quote_lead';
import * as migration_20261012_004448_tiptap_rich_text from './20261012_004448_tiptap_rich_text';
import * as migration_20261012_014914_refonte_blocs from './20261012_014914_refonte_blocs';

export const migrations = [
  {
    up: migration_20261011_192649_initial.up,
    down: migration_20261011_192649_initial.down,
    name: '20261011_192649_initial',
  },
  {
    up: migration_20261011_194543_article_menu_label.up,
    down: migration_20261011_194543_article_menu_label.down,
    name: '20261011_194543_article_menu_label',
  },
  {
    up: migration_20261011_204444_media_storage_prefix.up,
    down: migration_20261011_204444_media_storage_prefix.down,
    name: '20261011_204444_media_storage_prefix',
  },
  {
    up: migration_20261011_212140_hero_highlight_texts.up,
    down: migration_20261011_212140_hero_highlight_texts.down,
    name: '20261011_212140_hero_highlight_texts',
  },
  {
    up: migration_20261011_220046_interior_pages_v2.up,
    down: migration_20261011_220046_interior_pages_v2.down,
    name: '20261011_220046_interior_pages_v2',
  },
  {
    up: migration_20261011_223439_quote_lead.up,
    down: migration_20261011_223439_quote_lead.down,
    name: '20261011_223439_quote_lead',
  },
  {
    up: migration_20261012_004448_tiptap_rich_text.up,
    down: migration_20261012_004448_tiptap_rich_text.down,
    name: '20261012_004448_tiptap_rich_text',
  },
  {
    up: migration_20261012_014914_refonte_blocs.up,
    down: migration_20261012_014914_refonte_blocs.down,
    name: '20261012_014914_refonte_blocs'
  },
];
