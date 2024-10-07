import 'dotenv/config'

import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const environment = createEnv({
  server: {
    BOT_TOKEN: z.string(),
    DATABASE_URL: z.string().min(1),
    MODEL: z.string(),
    MODEL_EMBEDDING: z.string(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
})
