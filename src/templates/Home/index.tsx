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
        Desenvolvedor front-end | Líder de desenvolvimento na{' '}
        <Link href="https://www.fuerzastudio.com.br/">Fuerza Studio</Link>.
      </S.Paragraph>

      <S.Description>
        Estudante de Engenharia de Software focado em desenvolver as melhores
        soluções e gerenciar equipes.
      </S.Description>
    </S.Wrapper>
  )
}

export default HomePage
