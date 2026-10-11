import * as migration_20261011_192649_initial from './20261011_192649_initial';
import * as migration_20261011_194543_article_menu_label from './20261011_194543_article_menu_label';
import * as migration_20261011_204444_media_storage_prefix from './20261011_204444_media_storage_prefix';
import * as migration_20261011_212140_hero_highlight_texts from './20261011_212140_hero_highlight_texts';

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
    name: '20261011_212140_hero_highlight_texts'
  },
];
