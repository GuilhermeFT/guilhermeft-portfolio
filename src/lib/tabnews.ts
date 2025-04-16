import axios from 'axios'

import { ENV } from '@/utils/env'

export const TabnewsAPI = axios.create({
  baseURL: `${ENV.NEXT_PUBLIC_TABNEWS_API_URL}/api/v1`,
})
