import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

import Link from 'next/link'

import * as S from '../Social/styles'

const Social = () => {
  return (
    <S.SocialWrapper>
      <Link
        href="https://www.instagram.com/guilherme.gft/"
        target="_blank"
        passHref
      >
        <S.StyledAnchor>
          <SiInstagram />

          <S.StyledSpan>Instagram</S.StyledSpan>
        </S.StyledAnchor>
      </Link>

      <Link
        href="https://www.linkedin.com/in/guilhermeft/"
        target="_blank"
        passHref
      >
        <S.StyledAnchor>
          <SiLinkedin />

          <S.StyledSpan>Linkedin</S.StyledSpan>
        </S.StyledAnchor>
      </Link>

      <Link href="https://github.com/GuilhermeFT" target="_blank" passHref>
        <S.StyledAnchor>
          <SiGithub />

          <S.StyledSpan>Github</S.StyledSpan>
        </S.StyledAnchor>
      </Link>
    </S.SocialWrapper>
  )
}

export default Social
