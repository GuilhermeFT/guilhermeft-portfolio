import * as S from './styles'

type PaginationType = {
  totalPages: number
  currentPage: number
}

interface ProjectsPageProps {
  pagination: PaginationType
}

const ProjectsPage = () => {
  return <S.Wrapper>ProjectsPage</S.Wrapper>
}

export default ProjectsPage
