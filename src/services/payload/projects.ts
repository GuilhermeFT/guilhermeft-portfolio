// STUB — substituir pelas chamadas reais ao Payload após plan-payload-supabase.md

export type Project = {
  id: string
  slug: string
  name: string
  isHighlighted: boolean
  projectLink?: string
  repositoryLink?: string
  yearStarted?: number
  yearFinished?: number
  stack: string[]
  imageUrl?: string
  bannerUrl?: string
  content?: string
}

export async function getAllProjects(_max?: number): Promise<Project[]> {
  return []
}

export async function getHighlightedProjects(
  _max?: number,
): Promise<Project[]> {
  return []
}

export async function getProjectBySlug(_slug: string): Promise<Project | null> {
  return null
}
