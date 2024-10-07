import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { environment } from '../environment.mjs'

const client = postgres(environment.DATABASE_URL)
// eslint-disable-next-line unicorn/prevent-abbreviations
export const db = drizzle(client)
