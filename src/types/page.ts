import { TabMenuType } from './tab-menu'

export type PageProps<T = void> = {
  params: T & {
    lang: string
  }
  searchParams: {
    tabId?: TabMenuType['id']
  }
}
