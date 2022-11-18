import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

const Navigation = () => {
  const { route, pathname } = useRouter()

  const pages = [
    {
      pageName: 'Sobre',
      pagePath: '/about'
    },
    {
      pageName: 'Projetos',
      pagePath: '/projects'
    },
    {
      pageName: 'Contato',
      pagePath: '/contact'
    },
    {
      pageName: 'Blog',
      pagePath: '/blog'
    }
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
