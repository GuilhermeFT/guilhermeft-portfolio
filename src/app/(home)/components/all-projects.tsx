import { Card } from '@/components/card'
import { Section } from '@/components/section'
import { getAllProjects } from '@/services/prismic/projects'

export const AllProjects = async () => {
  const projects = await getAllProjects()

  const hasProjects = projects.length > 0

  return (
    <Section className="py-24" id="all-projects">
      <div className="container">
        <header className="grid gap-2">
          <span className="text-sm text-zinc-400 uppercase md:text-lg">
            Veja todos os meus projetos
          </span>
          <h3 className="gradient-text text-2xl font-normal uppercase md:text-4xl">
            Todos os Projetos
          </h3>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {hasProjects ? (
            <>
              {projects.map((project) => (
                <Card.Rectangle
                  key={project.id}
                  isButton={false}
                  id={project.uid}
                  project={project.data}
                />
              ))}
            </>
          ) : (
            <p className="text-lg">Nenhum projeto encontrado</p>
          )}
        </div>
      </div>
    </Section>
  )
}
