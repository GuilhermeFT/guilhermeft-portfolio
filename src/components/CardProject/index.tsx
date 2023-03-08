import * as S from './styles'

type CardProjectProps = {
  title: string
  description?: string
  url?: string
}

const CardProject = ({ title, description }: CardProjectProps) => {
  return (
    <S.CardProjectWrapper>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.CardProjectWrapper>
  )
}

export default CardProject
