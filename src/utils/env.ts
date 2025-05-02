import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_TABNEWS_API_URL: z.string().url(),
  GOOGLE_CLIENT_EMAIL: z.string(),
  GOOGLE_PRIVATE_KEY: z.string(),
})

export const ENV = envSchema.parse(process.env)
