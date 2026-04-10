import { Card } from '@/components/card'
import { Section } from '@/components/section'
import { getHighlightedProjects } from '@/services/payload/projects'

export const SelectedProjects = async () => {
  const projects = await getHighlightedProjects(3)

  const hasProjects = projects.length > 0

  return (
    <Section className="py-24">
      <div className="container">
        <header className="grid gap-2">
          <h5>Selecionados</h5>
          <h2>Projetos em Destaque</h2>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {hasProjects ? (
            <>
              {projects.map((project) => (
                <Card.Square
                  key={project.id}
                  isButton={false}
                  id={project.slug}
                  project={project}
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
