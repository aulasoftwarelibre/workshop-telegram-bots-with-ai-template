import process from 'node:process'

import { Bot } from 'grammy'

import { start } from './lib/commands/start'
import { environment } from './lib/environment.mjs'
import { onMessage } from './lib/handlers/on-message'

async function main(): Promise<void> {
  const bot = new Bot(environment.BOT_TOKEN)

  bot.command('start', start)

  bot.use(onMessage)

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())
  process.once('SIGUSR2', () => bot.stop())

  await bot.start()
}

main().catch((error) => console.error(error))
