import Header from '@/components/Header'
import * as S from './styles'

import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import Social from '@/components/Social'

const HomePage = () => {
  return (
    <S.Wrapper>
      <Image src={Logo} alt="Guilherme FT | Logotipo" />
      <S.Paragraph>em construção...</S.Paragraph>

      <Social />
    </S.Wrapper>
  )
}

export default HomePage
