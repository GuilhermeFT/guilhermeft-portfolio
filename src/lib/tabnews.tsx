import axios from 'axios'

import { env } from '@/utils/env'

export const TabnewsAPI = axios.create({
  baseURL: `${env.NEXT_PUBLIC_TABNEWS_API_URL}/api/v1`,
})
