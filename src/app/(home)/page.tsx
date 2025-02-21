import { HeroSection } from './components/hero-section'
import { ResumeSection } from './components/resume-section'

import { Card } from '@/components/card'
import { getHighlightedProjects } from '@/services/prismic/projects'
import { Section } from '@/components/section'

export default async function Home() {
  const projects = await getHighlightedProjects(2)

  const hasProjects = projects.length > 0

  return (
    <main>
      <HeroSection />

      <ResumeSection />

      <Section className="py-24">
        <div className="container">
          <header className="grid gap-2">
            <span className="text-sm text-zinc-400 uppercase md:text-lg">
              Veja alguns dos meus projetos
            </span>
            <h3 className="gradient-text text-4xl font-normal uppercase md:text-5xl">
              Projetos Selecionados
            </h3>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                <Card.Rectangle isButton />
              </>
            ) : (
              <p className="text-lg">Nenhum projeto encontrado</p>
            )}
          </div>
        </div>
      </Section>
    </main>
  )
}
