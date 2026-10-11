import * as migration_20261011_192649_initial from './20261011_192649_initial';
import * as migration_20261011_194543_article_menu_label from './20261011_194543_article_menu_label';

export const migrations = [
  {
    up: migration_20261011_192649_initial.up,
    down: migration_20261011_192649_initial.down,
    name: '20261011_192649_initial',
  },
  {
    up: migration_20261011_194543_article_menu_label.up,
    down: migration_20261011_194543_article_menu_label.down,
    name: '20261011_194543_article_menu_label'
  },
];
