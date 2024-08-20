import { AxiosError } from 'axios'

import { TabnewsRoutes } from '@/utils/enum'

import { TabnewsAPI } from '../api'

import {
  AllPostsResponse,
  PostBySlugResponse,
  ReturnType,
  TabnewsResponseError,
} from './types'
import { formatTabnewsData } from './helpers'

export const getMyPosts = async (): Promise<ReturnType<AllPostsResponse[]>> => {
  try {
    const { data } = await TabnewsAPI.get<AllPostsResponse[]>(
      TabnewsRoutes.contents,
    )

    const newData = await Promise.all(
      data.map((post) =>
        getPostBySlug(post.slug).then((response) => {
          if (response.success) {
            return {
              ...post,
              excerpt: response.data.body.slice(0, 100),
            }
          }

          return post
        }),
      ),
    )

    return {
      success: true,
      data: formatTabnewsData(newData),
    }
  } catch (error) {
    const axiosError = error as AxiosError<TabnewsResponseError>

    return {
      success: false,
      error:
        axiosError.response?.data?.message ||
        'Ocorreu um erro, tente novamente mais tarde',
    }
  }
}

export const getPostBySlug = async (
  slug: string,
): Promise<ReturnType<PostBySlugResponse>> => {
  try {
    const { data } = await TabnewsAPI.get<PostBySlugResponse>(
      `${TabnewsRoutes.contents}/${slug}`,
    )

    return {
      success: true,
      data,
    }
  } catch (error) {
    const axiosError = error as AxiosError<TabnewsResponseError>

    return {
      success: false,
      error:
        axiosError.response?.data?.message ||
        'Ocorreu um erro, tente novamente mais tarde',
    }
  }
}
