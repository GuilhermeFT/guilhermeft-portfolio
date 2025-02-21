import { AllPostsResponse } from './types'

import { format } from '@/utils/date'

export const formatTabnewsData = (
  data: AllPostsResponse[],
): AllPostsResponse[] => {
  return data.map((item) => ({
    ...item,
    created_at: format(new Date(item.created_at)),
    updated_at: format(new Date(item.updated_at)),
    published_at: format(new Date(item.published_at)),
  }))
}
