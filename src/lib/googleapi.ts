import { ENV } from '@/utils/env'
import { google } from 'googleapis'

export const getAuthenticatedSheet = async () => {
  const auth = await google.auth.getClient({
    credentials: {
      client_email: ENV.GOOGLE_CLIENT_EMAIL,
      private_key: ENV.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  const sheets = google.sheets({
    auth,
    version: 'v4',
  })

  return sheets
}
