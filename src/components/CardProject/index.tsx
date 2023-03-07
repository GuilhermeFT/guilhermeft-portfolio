import * as S from './styles'

type CardProjectProps = {
  title: string
  description?: string
  url?: string
}

const CardProject = ({ title }: CardProjectProps) => {
  return <S.CardProjectWrapper>{title}</S.CardProjectWrapper>
}

export default CardProject
