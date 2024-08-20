export interface AllPostsResponse {
  id: string
  owner_id: string
  parent_id: string
  slug: string
  title: string
  status: string
  type: string
  source_url: string
  created_at: string
  updated_at: string
  published_at: string
  deleted_at: string
  owner_username: string
  tabcoins: number
  tabcoins_credit: number
  tabcoins_debit: number
  children_deep_count: number

  // internal fields
  excerpt?: string
}

export interface PostBySlugResponse {
  id: string
  owner_id: string
  parent_id: string
  slug: string
  title: string
  body: string
  status: string
  type: string
  source_url: string
  created_at: string
  updated_at: string
  published_at: string
  deleted_at: string
  owner_username: string
  tabcoins: number
  tabcoins_credit: number
  tabcoins_debit: number
  children_deep_count: number
}

export interface TabnewsResponseError {
  name: string
  message: string
  action: string
  status_code: number
  error_id: string
  request_id: string
  error_location_code: string
  key: string
}

export type ReturnType<T> =
  | {
      success: true
      data: T
    }
  | {
      success: false
      error: string
    }
