import { getHighlightedProjects } from '@/services/payload/projects'
import { ProjectCard } from '@/components/card/project-card'
import { Section } from '@/components/section'

export async function ProjectsSection() {
  const projects = await getHighlightedProjects(6)

  return (
    <section id="projects" className="pt-[60px]">
      <div className="container">
        <Section disableAnimation>
          <h5 className="mb-2">Trabalhos selecionados</h5>
          <h1>Case Studies</h1>
        </Section>

        {projects.length > 0 ? (
          <div className="mt-12 flex flex-wrap gap-x-[28px] gap-y-[30px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full md:w-[calc(50%-14px)]"
              >
                <Section>
                  <ProjectCard project={project} />
                </Section>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-wrap gap-x-[28px] gap-y-[30px]">
            {/* Skeleton placeholders */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full animate-pulse md:w-[calc(50%-14px)]"
                style={{ aspectRatio: '1 / 1.40', backgroundColor: '#f3f3f5' }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
