import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.svg'
import Navigation from '@/components/Navigation'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Link href="/">
        <S.Logo>
          <Image src={Logo} alt="Guilherme FT | Logotipo" />
        </S.Logo>
      </Link>

      <Navigation />
    </S.HeaderWrapper>
  )
}

export default Header
