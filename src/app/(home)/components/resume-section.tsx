'use client'

import Link from 'next/link'

import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'

export const ResumeSection = () => {
  return (
    <Section className="py-16 text-zinc-200">
      <div className="container flex flex-col gap-4 md:grid-cols-2">
        <h3 className="gradient-text text-xl">Um pouco sobre mim</h3>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="grid gap-7 text-2xl">
            <p className="text-pretty">
              Atuo como desenvolvedor a +5 anos, trabalhando ativamente no
              desenvolvimento de aplicações web e mobile.
            </p>

            <p className="text-pretty">
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
                Criei servidores do zero usando nginx para hospedagem de APIs e
                CMS;
              </li>
            </ul>

            <Link href="/about-me">
              <Button variant="secondary">Mais sobre minha carreira</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
