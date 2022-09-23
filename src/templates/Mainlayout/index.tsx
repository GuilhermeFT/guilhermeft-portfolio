import { ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import * as S from './styles'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <Footer />

      <S.AssetShadow />
    </S.Wrapper>
  )
}

export default MainLayout
