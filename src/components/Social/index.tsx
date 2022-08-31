import * as S from '../Social/styles'

import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Social = () => {
  return (
    <S.SocialWrapper>
      <Link href="https://www.instagram.com/guilherme.gft/" target="_blank">
        <S.StyledAnchor>
          <FaInstagram />
        </S.StyledAnchor>
      </Link>
      <Link href="https://www.linkedin.com/in/guilhermeft/" target="_blank">
        <S.StyledAnchor>
          <FaLinkedinIn />
        </S.StyledAnchor>
      </Link>
      <Link href="https://github.com/GuilhermeFT" target="_blank">
        <S.StyledAnchor>
          <FaGithub />
        </S.StyledAnchor>
      </Link>
    </S.SocialWrapper>
  )
}

export default Social
