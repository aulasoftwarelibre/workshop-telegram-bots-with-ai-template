import { openai as originalOpenAI } from '@ai-sdk/openai'
import {
  experimental_createProviderRegistry as createProviderRegistry,
  experimental_customProvider as customProvider,
} from 'ai'
import { ollama as originalOllama } from 'ollama-ai-provider'

const ollama = customProvider({
  fallbackProvider: originalOllama,
  languageModels: {
    'qwen-2_5': originalOllama('qwen2.5'),
  },
})

export const openai = customProvider({
  fallbackProvider: originalOpenAI,
  languageModels: {
    'gpt-4o-mini': originalOpenAI('gpt-4o-mini', {
      structuredOutputs: true,
    }),
  },
})

export const registry = createProviderRegistry({
  ollama,
  openai,
})
