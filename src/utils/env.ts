import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_TABNEWS_API_URL: z.string().url(),
})

export const ENV = envSchema.parse(process.env)
