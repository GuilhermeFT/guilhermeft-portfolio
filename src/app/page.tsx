import Link from 'next/link'
import { MapPin } from 'lucide-react'

import { Card } from '@/components/card'
import { getHighlightedProjects } from '@/services/prismic/projects'
import { Section } from '@/components/section'

export default async function Home() {
  const projects = await getHighlightedProjects(2)

  const hasProjects = projects.length > 0

  return (
    <main>
      <Section className="flex h-dvh items-center">
        <div className="container grid items-center gap-10 sm:gap-0 lg:grid-cols-2 lg:justify-between xl:grid-cols-[1fr_40%]">
          <div className="grid w-full gap-3 p-4">
            <span className="gradient-text text-2xl">Olá, meu nome é</span>
            <h1 className="pl-4 text-5xl font-extralight sm:text-7xl xl:text-nowrap">
              Guilherme Trindade
            </h1>
            <h2 className="gradient-text mt-6 pl-4 text-3xl">
              Desenvolvedor Front-end
            </h2>
          </div>

          <div className="grid w-full gap-3 p-4">
            <span className="gradient-text text-2xl">Eu sou</span>
            <p className="pl-4 text-3xl">
              Um desenvolvedor front-end especializado em React e Next.js.
            </p>

            <div className="mt-4 flex w-max items-center justify-center gap-2 pl-4">
              <MapPin className="text-g-blue" />
              <span className="text-xl">Anápolis, GO</span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 text-zinc-200">
        <div className="container flex flex-col gap-6 md:grid-cols-2">
          <h3 className="gradient-text text-4xl">Um pouco sobre mim</h3>

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="grid gap-7 text-2xl">
              <p className="text-pretty pl-4 text-justify text-lg">
                Atuo como desenvolvedor a +5 anos, trabalhando ativamente no{' '}
                <strong className="font-semibold">Frontend</strong> com{' '}
                <strong className="font-semibold">React.js</strong>,{' '}
                <strong className="font-semibold">Next.js</strong> e{' '}
                <strong className="font-semibold">TypeScript</strong>.
              </p>

              <p className="text-pretty pl-4 text-justify text-lg">
                Tenho experiências em Node.js no Backend e já tive contato com
                diversas linguagens (Lua, Java Kotlin, C) para aplicações
                específicas.
              </p>
            </div>

            <div className="grid gap-3">
              <p className="gradient-text text-2xl">Em diversos projetos eu</p>

              <ul className="mb-10 list-inside list-disc text-lg">
                <li>Integrei CI/CD com GitHub Actions;</li>
                <li>Configurei servidores para games;</li>
                <li>Liderei times tecnicamente em projetos relevantes;</li>
                <li>
                  Criei servidores do zero usando nginx para hospedagem de APIs
                  e CMS;
                </li>
              </ul>

              <Link
                href="#"
                className="flex w-max self-end rounded border border-g-blue px-4 py-3 text-white transition-all hover:bg-g-blue"
              >
                Mais sobre minha carreira
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="container">
          <header className="grid gap-2">
            <span className="text-sm uppercase text-zinc-400 md:text-lg">
              Veja alguns dos meus projetos
            </span>
            <h3 className="gradient-text text-4xl font-normal md:text-5xl">
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
