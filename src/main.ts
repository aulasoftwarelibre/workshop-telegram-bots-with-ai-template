import process from 'node:process'

import dotenv from 'dotenv'
import { Bot } from 'grammy'

dotenv.config()

async function main(): Promise<void> {
  const bot = new Bot(process.env.BOT_TOKEN ?? '')

  bot.command('start', async (context) => {
    const content = 'Welcome, how can I help you?'

    await context.reply(content)
  })

  bot.on('message:text', async (context) => {
    const userMessage = context.message.text

    await context.reply(userMessage)
  })

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())
  process.once('SIGUSR2', () => bot.stop())

  await bot.start()
}

main().catch((error) => console.error(error))
