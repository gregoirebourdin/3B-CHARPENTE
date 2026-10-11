import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
  },
  globalIgnores([
    '.next/**',
    'node_modules/**',
    '3b-charpente-kit/**',
    'src/payload-types.ts',
    'src/app/(payload)/admin/importMap.js',
    'src/migrations/**',
    'next-env.d.ts',
  ]),
])
