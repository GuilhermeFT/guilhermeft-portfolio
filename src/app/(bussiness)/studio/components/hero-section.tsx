import Link from 'next/link'
import { Section } from '@/components/section'

export const HeroSection = () => {
  return (
    <Section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 md:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-g-dark-blue mb-8 text-[2.5rem] leading-tight font-bold md:text-6xl lg:text-7xl">
            Tecnologia e inovação{' '}
            <span className="gradient-text">para seu negócio</span> evoluir
          </h1>
          <p className="text-g-medium-gray mx-auto mb-10 max-w-2xl text-lg md:text-xl">
            De landing pages impactantes a produtos inovadores, desenvolvemos
            soluções que transformam ideias em realidade e criam experiências
            digitais memoráveis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="bg-g-blue hover:bg-g-dark-blue rounded-full px-6 py-3 text-base font-medium text-white transition-all md:text-lg"
            >
              Iniciar Projeto →
            </Link>
            <Link
              href="#process"
              className="border-g-medium-gray text-g-medium-gray hover:bg-g-light rounded-full border bg-white px-6 py-3 text-base font-medium transition-all md:text-lg"
            >
              Conheça nossas soluções
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
