import Typewriter from 'typewriter-effect'

import CardProject from '@/components/CardProject'

import * as S from './styles'

export type Projects = {
  id: string
  title: string
  thumbnail: string
  isHighlighted: boolean
  url: string
  excerpt: string
}

type ProjectsPageProps = {
  projects: Projects[]
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
        {projects.length ? (
          projects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.excerpt}
              url={project.url}
              backgroundUrl={project.thumbnail}
            />
          ))
        ) : (
          <S.Paragraph>{'We have no projects at the moment :('}</S.Paragraph>
        )}
      </S.ProjectsListWrapper>
    </S.Wrapper>
  )
}

export default ProjectsPage
