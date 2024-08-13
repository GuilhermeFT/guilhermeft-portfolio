import { PageTitle } from '@/components/page-title'
import { TabMenu } from '@/components/tab-menu'
import { ScrollFade } from '@/components/scroll-fade'
import { ScrollToButton } from '@/components/scroll-to-button'
import { MouseIcon } from '@/components/icons/mouse-icon'
import { PageProps } from '@/types/page'

import { tabMenuItems } from './content'

export default async function About({ searchParams }: PageProps) {
  return (
    <main>
      <section className="h-[calc(100dvh-5rem)] px-4 bg-gradient-to-b from-gft-dark-gray from-60%% to-gft-background flex flex-col justify-center items-center gap-8">
        <div className="container flex flex-1 flex-col items-center pt-36 gap-2 md:items-start">
          <PageTitle>Sobre mim</PageTitle>

          <p className="text-2xl text-center mb-8 md:text-left">
            Olá, Meu nome é Guilherme Trindade e sou um desenvolvedor Front-end.
          </p>
          <p className="text-xl text-center text-gft-light-gray max-w-5xl md:text-left">
            Trabalho com isso desde 2020 e estou sempre em busca de me aprimorar
            e aprender coisas novas.
          </p>
          <p className="text-xl text-center text-gft-light-gray max-w-5xl md:text-left">
            <strong>
              Mais abaixo você encontrará mais informações sobre mim separadas
              por tópicos. 😊
            </strong>
          </p>
        </div>

        <ScrollFade>
          <ScrollToButton elementId="about-me">
            <MouseIcon className="mb-8 w-7 h-7 transition-transform  hover:scale-110" />
          </ScrollToButton>
        </ScrollFade>
      </section>

      <section id="about-me" className="min-h-dvh pb-8">
        <TabMenu id={searchParams?.tabId} items={tabMenuItems} />
      </section>
    </main>
  )
}
