import type { CommandContext, Context } from 'grammy'

export async function start(context: CommandContext<Context>): Promise<void> {
  const content = 'Welcome, how can I help you?'
  await context.reply(content)
}
