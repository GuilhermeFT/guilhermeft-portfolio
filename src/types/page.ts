import { TabMenuType } from './tab-menu'

export type PageProps<T = void> = {
  params: Promise<
    T & {
      lang: string
    }
  >
  searchParams: Promise<{
    tabId?: TabMenuType['id']
  }>
}
