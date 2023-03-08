import Typewriter from 'typewriter-effect'

import CardProject from '@/components/CardProject'

import * as S from './styles'

export type Project = {
  title: string
  thumbnail: string
  isHighlighted: boolean
  url: string
  excerpt: string
}

type ProjectsPageProps = {
  projects: Project[]
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <S.Wrapper>
      <S.Title>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('My projects.').start()
          }}
        />
      </S.Title>

      <S.ProjectsListWrapper>
        {projects.map((project) => (
          <CardProject key={project.title} title={project.title} />
        ))}
        {projects.map((project) => (
          <CardProject key={project.title} title={project.title} />
        ))}
        {projects.map((project) => (
          <CardProject
            key={project.title}
            title={project.title}
            description="Fast Refresh had to perform a full reload. Read more: https://nextjs.org/docs/basic-features/fast-refresh#how-it-works"
          />
        ))}
        {projects.map((project) => (
          <CardProject key={project.title} title={project.title} />
        ))}
      </S.ProjectsListWrapper>
    </S.Wrapper>
  )
}

export default ProjectsPage
