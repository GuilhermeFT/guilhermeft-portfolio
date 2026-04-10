import { getPayload } from 'payload'
import config from '@payload-config'

export type Project = {
  id: string
  slug: string
  name: string
  isHighlighted: boolean
  projectLink?: string | null
  repositoryLink?: string | null
  yearStarted?: number | null
  yearFinished?: number | null
  stack: string[]
  imageUrl?: string | null
  imageAlt?: string | null
  bannerUrl?: string | null
  content?: unknown
}

async function getPayloadClient() {
  return getPayload({ config })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toProject(doc: any): Project {
  return {
    id: String(doc.id),
    slug: doc.slug,
    name: doc.name,
    isHighlighted: doc.isHighlighted ?? false,
    projectLink: doc.projectLink ?? null,
    repositoryLink: doc.repositoryLink ?? null,
    yearStarted: doc.yearStarted ?? null,
    yearFinished: doc.yearFinished ?? null,
    stack: doc.stack ?? [],
    imageUrl: doc.image?.url ?? null,
    imageAlt: doc.image?.alt ?? doc.name,
    bannerUrl: doc.banner?.url ?? null,
    content: doc.content ?? null,
  }
}

export async function getAllProjects(max?: number): Promise<Project[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    limit: max ?? 100,
    sort: '-yearStarted',
  })
  return docs.map(toProject)
}

export async function getHighlightedProjects(max?: number): Promise<Project[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    where: { isHighlighted: { equals: true } },
    limit: max ?? 10,
    sort: '-yearStarted',
  })
  return docs.map(toProject)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (!docs[0]) return null
  return toProject(docs[0])
}
