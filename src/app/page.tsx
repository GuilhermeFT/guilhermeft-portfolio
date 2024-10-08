import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/card'
import { MouseIcon } from '@/components/icons/mouse-icon'
import { PageTitle } from '@/components/page-title'
import { companies } from '@/utils/const'
import { ScrollFade } from '@/components/scroll-fade'
import { ScrollToButton } from '@/components/scroll-to-button'
import { getHighlightedProjects } from '@/services/projects'

export default async function Home() {
  const projects = await getHighlightedProjects(3)

  const hasProjects = projects.length > 0
  const hasPersonalProjects = false

  return (
    <main>
      <section className="px-4 h-[calc(100dvh-5rem)] flex flex-col items-center gap-8 bg-gradient-to-b from-gft-dark-gray from-60%% to-gft-background">
        <div className="container flex flex-1 flex-col justify-center items-center gap-2 md:items-start">
          <PageTitle>Guilherme FT</PageTitle>
          <p className="text-2xl text-center max-w-2xl md:text-left">
            Olá 👋, eu sou o Guilherme, um estudante de Engenharia de Software
          </p>
          <p className="text-xl text-center max-w-2xl text-gft-light-gray md:text-justify">
            Desenvolvedor Front-end com foco em React e Next.js e com o pesinho
            no back-end com Node.js. Bem-vindo ao meu portfólio!
          </p>
        </div>

        <ScrollFade>
          <ScrollToButton elementId="projetos-selecionados">
            <MouseIcon className="mb-8 w-7 h-7 transition-transform  hover:scale-110" />
          </ScrollToButton>
        </ScrollFade>
      </section>

      {hasProjects ? (
        <section id="projetos-selecionados" className="px-4 py-32 lg:px-12">
          <div className="container flex flex-col gap-9">
            <h2 className="flex flex-col gap-1 text-center md:text-left">
              <span className="uppercase text-gft-light-gray text-base">
                Projetos selecionados
              </span>
              <span className="text-5xl text-gft-purple font-extrabold uppercase">
                Projetos
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              {projects.map((project, index) => (
                <Card.Rectangle
                  key={index}
                  isButton={false}
                  id={project.uid}
                  project={project.data}
                />
              ))}
              <Card.Rectangle isButton />
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-24 bg-gft-dark-gray">
        <div className="container flex flex-col gap-16">
          <h2 className="flex flex-col gap-1 text-center">
            <span className="uppercase text-gft-light-gray text-base">
              Empresas em que eu colaborei
            </span>
            <span className="text-5xl text-white font-extrabold uppercase">
              Minha Jornada
            </span>
          </h2>

          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            {companies.map((company, index) => (
              <Link
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Image
                  src={company.logo}
                  alt={company.alt}
                  className={company.className}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {hasPersonalProjects ? (
        <section className="px-4 py-32 lg:px-12">
          <div className="container flex flex-col gap-9">
            <h2 className="flex flex-col gap-1 text-center md:text-left">
              <span className="uppercase text-gft-light-gray text-base">
                Projetos no ar
              </span>
              <span className="text-5xl text-gft-purple font-extrabold uppercase">
                Projetos Pessais
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-16">
              {/* 
              <Card.Square isButton={false} />
              <Card.Square isButton={false} />
              <Card.Square isButton={false} />
              */}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-32 lg:px-12">
        <div className="container flex flex-col gap-9">
          <p className="text-slate-200 text-2xl text-center max-w-2xl md:text-justify">
            Se você gostou do que viu e quer saber mais sobre mim, meus projetos
            ou até mesmo bater um papo, fique a vontade para me chamar nas redes
            sociais ou me enviar um e-mail.
          </p>

          <Link
            className="text-xl underline text-center text-gft-light-gray py-2 rounded-md transition-colors w-max hover:text-gft-purple"
            href="/sobre-mim?tabId=contact"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </main>
  )
}
