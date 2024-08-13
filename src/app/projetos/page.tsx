import { Card } from '@/components/card'
import { PageTitle } from '@/components/page-title'
import { getAllProjects } from '@/services/projects'

export default async function Projects() {
  const projects = await getAllProjects()

  const hasProjects = projects.length > 0

  return (
    <main>
      <section className="min-h-[calc(100dvh-5rem)] mb-32 px-4 bg-gradient-to-b from-gft-dark-gray from-60%% to-gft-background flex flex-col justify-center items-center gap-8">
        <div className="container flex flex-1 flex-col pt-36 gap-2 md:items-start">
          <PageTitle className="[font-size:_clamp(2rem,13.25vw,4rem)] md:text-[4rem]">
            Projetos
          </PageTitle>

          <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="text-white text-center">
                Nenhum projeto encontrado.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
