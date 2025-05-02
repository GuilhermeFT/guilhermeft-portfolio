import { getAuthenticatedSheet } from '@/lib/googleapi'
import { ENV } from '@/utils/env'
import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(10).max(15),
  email: z.string().email().min(5).max(100),

  source: z.enum(['whatsapp', 'email']),
})

export type Lead = z.infer<typeof leadSchema>

export const registerLead = async (data: Lead) => {
  const sheet = await getAuthenticatedSheet()

  sheet.spreadsheets.values.append({
    spreadsheetId: ENV.SHEET_ID,
    range: 'A1:E1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          data.name,
          data.phone,
          data.email,
          data.source,
          new Date().toISOString(),
        ],
      ],
    },
  })
}
