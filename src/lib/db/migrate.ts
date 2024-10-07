import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { environment } from '../environment.mjs'

const runMigrate = async (): Promise<void> => {
  if (!environment.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined')
  }

  const connection = postgres(environment.DATABASE_URL, { max: 1 })

  const database = drizzle(connection)

  console.log('⏳ Running migrations...')

  const start = Date.now()

  await migrate(database, { migrationsFolder: 'migrations' })

  const end = Date.now()

  console.log('✅ Migrations completed in', end - start, 'ms')

  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(0)
}

runMigrate().catch((error) => {
  console.error('❌ Migration failed')
  console.error(error)
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1)
})
