import Link from 'next/link'

import * as S from './styles'

type CardProjectProps = {
  title: string
  description: string
  url: string
  backgroundUrl: string
}

const CardProject = ({
  title,
  description,
  url,
  backgroundUrl
}: CardProjectProps) => {
  return (
    <Link href={url}>
      <S.CardProjectWrapper backgroundUrl={backgroundUrl}>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
      </S.CardProjectWrapper>
    </Link>
  )
}

export default CardProject
