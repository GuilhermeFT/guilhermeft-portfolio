import { Marquee } from '@/components/animations/marquee'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { getAllProjects } from '@/services/prismic/projects'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

export const RecentProjects = async () => {
  const projects = await getAllProjects(6)

  return (
    <Section className="py-24">
      <div className="grid">
        <div className="container">
          <header className="grid gap-2">
            <h3 className="gradient-text text-2xl font-normal uppercase md:text-4xl">
              Trabalhos Recentes
            </h3>
          </header>

          <div className="mt-7 cursor-grab">
            <Marquee speed={-0.2}>
              {projects.map((project) => (
                <div
                  key={project.uid}
                  className="group relative mx-3 flex aspect-square w-[75vw] items-center gap-4 overflow-hidden transition-all hover:scale-105 md:w-[40vw] lg:w-[35vw]"
                >
                  <PrismicNextImage
                    fill
                    alt=""
                    field={project.data.banner}
                    className="pointer-events-none w-full object-cover object-bottom transition-all delay-100 ease-in-out group-hover:grayscale-0 md:grayscale-100"
                  />

                  <div className="absolute inset-0 flex h-full w-full items-end overflow-hidden bg-gradient-to-t from-black to-transparent p-8 opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100">
                    <Link
                      href={`/projects/${project.uid}`}
                      className="block text-2xl font-bold text-pretty break-words"
                    >
                      <p>{project.data.project_name}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <Link href="#all-projects" className="mt-10 place-self-center text-lg">
          <Button size="lg" className="cursor-pointer">
            Ver todos os projetos
          </Button>
        </Link>
      </div>
    </Section>
  )
}
