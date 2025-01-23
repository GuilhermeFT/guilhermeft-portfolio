import Link from 'next/link'

import { Card } from '@/components/card'
import { getHighlightedProjects } from '@/services/prismic/projects'
import { Section } from '@/components/section'
import { Button } from '@/components/button'

export default async function Home() {
  const projects = await getHighlightedProjects(2)

  const hasProjects = projects.length > 0

  return (
    <main>
      <Section className="flex h-dvh">
        <div className="container relative flex flex-col items-center justify-center">
          <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 text-center">
            <h6 className="gradient-text uppercase">Olá, eu sou</h6>
            <h1 className="mb-6 flex items-center gap-2 text-5xl font-extralight tracking-widest md:text-7xl">
              Guilherme Trindade
            </h1>

            <h6 className="gradient-text uppercase">
              Desenvolvedor Front-end.
            </h6>
          </div>

          <div className="bottom-0 bg-red-500 p-2"></div>
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
