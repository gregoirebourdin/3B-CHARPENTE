import type { Config, Plugin } from 'payload'

/**
 * Removes the « API » tab from every edit screen, plugin collections included:
 * a developer tool, of no use to the team and confusing next to « Éditer ».
 */
export const hideApiTab: Plugin = (config: Config): Config => ({
  ...config,
  collections: config.collections?.map((collection) => ({ ...collection, admin: { ...collection.admin, hideAPIURL: true } })),
  globals: config.globals?.map((global) => ({ ...global, admin: { ...global.admin, hideAPIURL: true } })),
})
