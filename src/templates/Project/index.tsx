import { RiExternalLinkLine } from 'react-icons/ri'
import { SiGithub } from 'react-icons/si'

import Image, { StaticImageData } from 'next/image'
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
        <S.LinkGroup>
          <RiExternalLinkLine />
          <Link href={project.link} passHref>
            <S.StyledLink>{project.link}</S.StyledLink>
          </Link>
        </S.LinkGroup>
        <S.LinkGroup>
          <SiGithub />
          <Link href={project.githubLink} passHref>
            <S.StyledLink>{project.githubLink}</S.StyledLink>
          </Link>
        </S.LinkGroup>
      </S.LinksWrapper>

      <S.ImageWrapper>
        <Image
          src={project.image}
          alt={'Image for ' + project.title}
          objectFit="cover"
        />
      </S.ImageWrapper>

      <S.ContentWrapper>
        <PrismicRichText field={project.content} />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ProjectPage
