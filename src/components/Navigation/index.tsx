import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

const Navigation = () => {
  const { route } = useRouter()

  const pages = [
    {
      pageName: 'Home',
      pagePath: '/'
    },
    {
      pageName: 'About',
      pagePath: '/about'
    },
    {
      pageName: 'Projects',
      pagePath: '/projects'
    } /*,
    {
      pageName: 'Contact',
      pagePath: '/contact'
    }  ,
    {
      pageName: 'Blog',
      pagePath: '/blog'
    } */
  ]

  return (
    <S.NavigationWrapper>
      <S.ListWrapper>
        {pages.map((page, index) => (
          <S.ListItemWrapper key={index} isActive={route === page.pagePath}>
            <Link href={page.pagePath}>{page.pageName}</Link>
          </S.ListItemWrapper>
        ))}
      </S.ListWrapper>
    </S.NavigationWrapper>
  )
}

export default Navigation
