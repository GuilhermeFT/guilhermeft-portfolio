import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/card'
import { MouseIcon } from '@/components/icons/mouse-icon'
import { PageTitle } from '@/components/page-title'
import { companies } from '@/utils/const'
import { ScrollFade } from '@/components/scroll-fade'
import { ScrollToButton } from '@/components/scroll-to-button'

export default async function Home() {
  return (
    <main>
      <section className="px-4 h-[calc(100dvh-5rem)] flex flex-col items-center gap-8 bg-gradient-to-b from-gft-dark-gray from-75% to-gft-background">
        <div className="container flex flex-1 flex-col justify-center items-center gap-2 md:items-start">
          <PageTitle>Guilherme FT</PageTitle>
          <p className="text-2xl text-center max-w-2xl md:text-left">
            Front-end Developer | Dev-leader at Fuerza Studio.
          </p>
          <p className="text-xl text-center max-w-2xl text-gft-light-gray md:text-justify">
            A Software Engineer student focused in develop the best solutions
            and manage teams.
          </p>
        </div>

        <ScrollFade>
          <ScrollToButton elementId="projetos-selecionados">
            <MouseIcon className="mb-8 w-7 h-7 transition-transform  hover:scale-110" />
          </ScrollToButton>
        </ScrollFade>
      </section>

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
            <Card.Rectangle />
            <Card.Rectangle />
            <Card.Rectangle />
          </div>
        </div>
      </section>

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

      <section className="px-4 py-32 lg:px-12">
        <div className="container flex flex-col gap-9">
          <h2 className="flex flex-col gap-1 text-center md:text-left">
            <span className="uppercase text-gft-light-gray text-base">
              Projetos selecionados
            </span>
            <span className="text-5xl text-gft-purple font-extrabold uppercase">
              Projetos
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-16">
            <Card.Square />
            <Card.Square />
            <Card.Square />
          </div>
        </div>
      </section>
    </main>
  )
}
