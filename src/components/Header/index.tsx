import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

import Logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Link href="/">
        <S.Logo>
          <Image src={Logo} alt="Guilherme FT | Logotipo" />
        </S.Logo>
      </Link>
    </S.HeaderWrapper>
  )
}

export default Header
