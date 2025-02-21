import { tabMenuItems } from './content'

import { TabMenu } from '@/components/tab-menu'
import { ScrollFade } from '@/components/scroll-fade'
import { ScrollToButton } from '@/components/scroll-to-button'
import { MouseIcon } from '@/components/icons/mouse-icon'
import { PageProps } from '@/types/page'
import { Section } from '@/components/section'

export default async function About(props: PageProps) {
  const searchParams = await props.searchParams
  return (
    <main>
      <Section className="relative h-dvh border-b-0">
        <div className="container flex flex-1 flex-col items-center gap-4 pt-36 md:items-start">
          <h1 className="flex h-40 items-end text-5xl md:text-6xl xl:text-7xl">
            Guilherme F. Trindade
          </h1>

          <p className="gradient-text mb-8 flex flex-col text-2xl md:text-3xl">
            <span>Atuando ativamente no Frontend</span>
            <span className="ml-10">com React.js, Next.js e TypeScript.</span>
          </p>
          <p className="max-w-4xl text-lg text-pretty md:pl-4 md:text-xl">
            A minha proatividade e a minha vontade de aprender coisas novas me
            fez ter contato com Node.js no Backend e já tive contato com
            diversas outras linguagens (Lua, Java Kotlin, C) para aplicações
            específicas.
          </p>
          <p className="max-w-4xl text-lg md:pl-4 md:text-xl">
            Acompanhe um pouco mais sobre mim e o que eu posso fazer por você.
          </p>
        </div>

        <div className="absolute bottom-0 flex w-full items-center justify-center py-10">
          <ScrollFade>
            <ScrollToButton elementId="about-me" className="self-center">
              <MouseIcon className="h-7 w-7 self-center transition-transform hover:scale-110" />
            </ScrollToButton>
          </ScrollFade>
        </div>
      </Section>

      <section id="about-me" className="min-h-dvh pb-8">
        <TabMenu id={searchParams?.tabId} items={tabMenuItems} />
      </section>
    </main>
  )
}
