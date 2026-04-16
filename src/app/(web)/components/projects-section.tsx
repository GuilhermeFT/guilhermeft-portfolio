import { getHighlightedProjects } from '@/services/payload/projects'
import { ProjectsGrid } from './projects-grid'

export async function ProjectsSection() {
  const projects = await getHighlightedProjects()

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}
