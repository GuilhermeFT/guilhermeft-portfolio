import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getPrismicClient } from '@/services/prismic'
import ProjectsPage, { Projects as ProjectType } from '@/templates/Projects'

type ProjectsProps = {
  projects: ProjectType[]
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Guilherme FT | Projects</title>
        <meta
          name="description"
          content="Hello, I am Guilherme and I'm a front-end developer"
        />
        <meta
          name="keywords"
          content="developer, desenvolvedor, frontend, front-end, frontend developer, desenvolvedor front-end"
        />
      </Head>

      <ProjectsPage projects={projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({
  previewData
}) => {
  const client = getPrismicClient({ previewData })

  const projects = await client.getByType('projects', { pageSize: 100 })

  const projectList: ProjectType[] = projects.results.map((project) => ({
    id: project.id,
    title: project.data.title,
    thumbnail: project.data.thumb.url,
    isHighlighted: project.data.highlighted,
    url: `/projects/${project.uid}`,
    excerpt:
      project.data.content.find(
        (content: Record<string, string>) =>
          content.type === 'paragraph' && content.text
      )?.text ?? ''
  }))

  return {
    props: {
      projects: projectList
    }
  }
}

export default Projects
