import type { CollectionConfig } from 'payload'

import { adminOrSelf, isAdmin, isAdminField } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Utilisateur', plural: 'Utilisateurs' },
  admin: {
    group: 'Administration',
    useAsTitle: 'name',
    defaultColumns: ['name', 'username', 'role', 'updatedAt'],
    description: 'Les personnes qui peuvent se connecter. Seul un administrateur peut en ajouter.',
  },
  auth: {
    loginWithUsername: { allowEmailLogin: true, requireEmail: false, requireUsername: true },
    // 5 wrong passwords → account locked for 15 minutes.
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    // Sessions last a working day.
    tokenExpiration: 60 * 60 * 10,
    useSessions: true,
    cookies: { sameSite: 'Lax', secure: process.env.NODE_ENV === 'production' },
  },
  access: {
    admin: ({ req }) => Boolean(req.user),
    read: adminOrSelf,
    create: isAdmin,
    update: adminOrSelf,
    delete: isAdmin,
    unlock: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text', label: 'Nom', required: true, maxLength: 80 },
    {
      name: 'role',
      type: 'select',
      label: 'Rôle',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      options: [
        { label: 'Éditeur (contenu, coordonnées, menus, demandes)', value: 'editor' },
        { label: 'Administrateur (tout, réglages techniques compris)', value: 'admin' },
      ],
      access: { create: isAdminField, update: isAdminField },
    },
  ],
}
