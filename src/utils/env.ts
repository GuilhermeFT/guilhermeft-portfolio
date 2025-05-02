import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_TABNEWS_API_URL: z.string().url(),
  GOOGLE_CLIENT_EMAIL: z.string().optional(),
  GOOGLE_PRIVATE_KEY: z.string().optional(),
  SHEET_ID: z.string().optional(),
})

export const ENV = envSchema.parse(process.env)
