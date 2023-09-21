import { RiExternalLinkLine } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'

import Image, {
  ImageLoader,
  ImageLoaderProps,
  StaticImageData
} from 'next/image'
import Link from 'next/link'

import Typewriter from 'typewriter-effect'

import { PrismicRichText } from '@prismicio/react'

import * as S from './styles'

export type Project = {
  id: string
  title: string
  image: StaticImageData
  githubLink: string
  excerpt: string
  link: string
  content: []
}

type ProjectPageProps = {
  project: Project
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <S.Wrapper>
      <S.Title>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(project.title).start()
          }}
        />
      </S.Title>
      <S.LinksWrapper>
        {project.link ? (
          <S.LinkGroup>
            <RiExternalLinkLine />
            <Link href={project.link} passHref>
              <S.StyledLink>{project.link}</S.StyledLink>
            </Link>
          </S.LinkGroup>
        ) : null}
        {project.githubLink ? (
          <S.LinkGroup>
            <SiGithub />
            <Link href={project.githubLink} passHref>
              <S.StyledLink>{project.githubLink}</S.StyledLink>
            </Link>
          </S.LinkGroup>
        ) : null}
      </S.LinksWrapper>

      <S.ImageWrapper>
        {project.image?.src ? (
          <Image
            src={project.image}
            alt={'Image for ' + project.title}
            objectFit="cover"
            loader={customLoader}
          />
        ) : null}
      </S.ImageWrapper>

      <S.ContentWrapper>
        <PrismicRichText field={project.content} />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ProjectPage
