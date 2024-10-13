import { Composer } from 'grammy'

export const onMessage = new Composer()

onMessage.on('message:text', async (context) => {
  const userMessage = context.message.text
  await context.reply(userMessage)
})
