import type { Config, Plugin } from 'payload'

type WithGroup = { admin?: { group?: unknown } }

/**
 * Plugins append their collections at the end of the config. This plugin
 * re-orders collections and globals so the admin sidebar follows the order of
 * daily use: requests first, settings and administration last.
 */
export const orderAdminNav =
  (groups: string[]): Plugin =>
  (config: Config): Config => {
    const rank = (entity: WithGroup) => {
      const group = typeof entity.admin?.group === 'string' ? entity.admin.group : ''
      const index = groups.indexOf(group)
      return index === -1 ? groups.length : index
    }
    const sortStable = <T extends WithGroup>(items: T[] = []) =>
      items
        .map((item, index) => ({ item, index }))
        .sort((a, b) => rank(a.item) - rank(b.item) || a.index - b.index)
        .map(({ item }) => item)

    return {
      ...config,
      collections: sortStable(config.collections),
      globals: sortStable(config.globals),
    }
  }
