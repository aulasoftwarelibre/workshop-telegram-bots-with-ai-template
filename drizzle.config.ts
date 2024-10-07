import type { Config } from 'drizzle-kit'

import { environment } from './src/lib/environment.mjs'

export default {
  dbCredentials: {
    url: environment.DATABASE_URL,
  },
  dialect: 'postgresql',
  out: './migrations',
  schema: './src/lib/db/schema',
} satisfies Config
