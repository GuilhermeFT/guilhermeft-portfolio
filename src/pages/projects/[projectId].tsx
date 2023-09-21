import type { GetStaticPaths, NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getPrismicClient } from '@/services/prismic'
import ProjectPage, { Project as ProjectType } from '@/templates/Project'

type ProjectProps = {
  project: ProjectType
}

const Project: NextPage<ProjectProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title} | Guilherme FT</title>
        <meta name="description" content={project.excerpt} />
        <meta name="keywords" content={project.excerpt.split(' ').join(', ')} />
      </Head>

      <ProjectPage project={project} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  previewData,
  params
}) => {
  const projectId = params?.projectId

  const client = getPrismicClient({ previewData })

  const projectResponse = await client.getByUID('projects', String(projectId))

  const project: ProjectType = {
    id: projectResponse.id,
    title: projectResponse.data.title,
    image: {
      src: projectResponse.data?.thumb?.url ?? null,
      height: projectResponse.data?.thumb?.dimensions?.height ?? 0,
      width: projectResponse.data?.thumb?.dimensions?.width ?? 0
    },
    githubLink: projectResponse.data?.repository?.url ?? null,
    link: projectResponse.data?.link?.url ?? null,
    content: projectResponse.data?.content,
    excerpt:
      projectResponse.data.content.find(
        (content: Record<string, string>) =>
          content.type === 'paragraph' && content.text
      )?.text ?? ''
  }

  return {
    props: {
      project
    }
  }
}

export default Project
