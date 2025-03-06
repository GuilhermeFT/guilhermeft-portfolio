import { createClient, filter } from '@/lib/prismicio'

export const getAllProjects = async (max?: number) => {
  const client = createClient()

  const projects = await client.getAllByType('projects')

  if (max) {
    return projects.slice(0, max)
  }

  return projects
}

export const getHighlightedProjects = async (max?: number) => {
  const client = createClient()

  const projects = await client.getAllByType('projects', {
    filters: [filter.at('my.projects.is_highlighted', true)],
  })

  if (max) {
    return projects.slice(0, max)
  }

  return projects
}

export const getProjectByUid = async (uid: string) => {
  const client = createClient()

  const project = await client.getByUID('projects', uid)

  return project
}
