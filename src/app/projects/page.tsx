import { Card } from '@/components/card'
import { PageTitle } from '@/components/page-title'
import { Section } from '@/components/section'
import { getAllProjects } from '@/services/prismic/projects'

export default async function Projects() {
  const projects = await getAllProjects()

  const hasProjects = projects.length > 0

  return (
    <main>
      <Section>
        <div className="container flex flex-1 flex-col gap-2 py-36 md:items-start">
          <PageTitle className="[font-size:_clamp(2rem,13.25vw,4rem)] md:text-[4rem]">
            Meus projetos
          </PageTitle>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hasProjects ? (
              projects.map((project, index) => (
                <Card.Square
                  key={index}
                  isButton={false}
                  id={project.uid}
                  project={project.data}
                />
              ))
            ) : (
              <p className="text-center text-white">
                Nenhum projeto encontrado.
              </p>
            )}
          </div>
        </div>
      </Section>
    </main>
  )
}
