import Link from 'next/link'
import { MapPin } from 'lucide-react'

import { Card } from '@/components/card'
import { getHighlightedProjects } from '@/services/prismic/projects'
import { Section } from '@/components/section'
import { Button } from '@/components/button'

import { HeroButtons } from './hero-buttons'

export default async function Home() {
  const projects = await getHighlightedProjects(2)

  const hasProjects = projects.length > 0

  return (
    <main>
      <Section className="flex h-[88dvh]">
        <div className="container grid auto-rows-auto gap-10 lg:grid-cols-[1fr_40%] lg:justify-between">
          <div className="grid w-full gap-2 self-end lg:self-center">
            <p className="gradient-text md:text-xl">Olá, meu nome é</p>

            <h1 className="flex flex-col gap-2 pl-4 text-5xl font-extralight sm:flex-row md:text-6xl xl:text-nowrap xl:text-7xl">
              <span>Guilherme</span>
              <span className="translate-x-[30vw] sm:translate-x-0">
                Trindade
              </span>
            </h1>

            <p className="gradient-text ml-4 mt-6 flex w-max gap-2 text-xl md:text-3xl lg:flex-col">
              <span className="ml-10">Desenvolvedor</span>
              <span>Front-end.</span>
            </p>

            <HeroButtons className="mt-16 hidden lg:flex" />
          </div>

          <div className="grid w-full gap-3 self-start lg:self-center">
            <span className="gradient-text text-lg md:text-xl">Eu sou</span>

            <p className="pl-4 text-xl md:text-2xl">
              Um desenvolvedor front-end especializado em React e Next.js.
            </p>

            <div className="mt-4 flex w-max items-center justify-center gap-2 pl-4">
              <MapPin className="w-5 text-g-blue" />
              <span className="md:text-lg">Anápolis, GO</span>
            </div>
          </div>

          <HeroButtons className="lg:hidden" />
        </div>
      </Section>

      <Section className="py-16 text-zinc-200">
        <div className="container flex flex-col gap-6 md:grid-cols-2">
          <h3 className="gradient-text text-2xl">Um pouco sobre mim</h3>

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="grid gap-7 text-xl">
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
              <p className="gradient-text text-xl">Em diversos projetos eu</p>

              <ul className="mb-10 list-inside list-disc text-lg">
                <li>Integrei CI/CD com GitHub Actions;</li>
                <li>Configurei servidores para games;</li>
                <li>Liderei times tecnicamente em projetos relevantes;</li>
                <li>
                  Criei servidores do zero usando nginx para hospedagem de APIs
                  e CMS;
                </li>
              </ul>

              <Link href="/about-me">
                <Button variant="secondary">Mais sobre minha carreira</Button>
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
