import Link from 'next/link'

import Typewriter from 'typewriter-effect'

import * as S from './styles'

const HomePage = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Guilherme FT').start()
          }}
        />
      </S.Title>

      <S.Paragraph>
        Front-end Developer | Dev-leader at{' '}
        <Link href="https://www.fuerzastudio.com.br/">Fuerza Studio</Link>.
      </S.Paragraph>

      <S.Description>
        A Software Engineer student focused in develop the best solutions and
        manage teams.
      </S.Description>
    </S.Wrapper>
  )
}

export default HomePage
