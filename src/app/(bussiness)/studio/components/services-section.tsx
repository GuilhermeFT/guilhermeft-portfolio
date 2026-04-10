import { Section } from '@/components/section'

export const ServicesSection = () => {
  return (
    <Section id="services" className="bg-foreground py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-16 text-center text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          O que fazemos
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="group bg-primary/40 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-accent-light mb-4 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="group-hover:text-accent-light mb-3 text-lg font-bold text-white transition-colors duration-300 md:text-xl">
              Websites & Landing Pages
            </h3>
            <p className="text-sm leading-relaxed text-gray-200 md:text-base">
              Criação de sites profissionais e páginas de alta conversão com
              design moderno e experiência do usuário excepcional.
            </p>
          </div>

          <div className="group bg-primary/40 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-accent-light mb-4 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="group-hover:text-accent-light mb-3 text-lg font-bold text-white transition-colors duration-300 md:text-xl">
              Projetos Especiais
            </h3>
            <p className="text-sm leading-relaxed text-gray-200 md:text-base">
              Desenvolvimento de projetos digitais únicos, desde plataformas
              customizadas até integrações e automações específicas.
            </p>
          </div>

          <div className="group bg-primary/40 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-accent-light mb-4 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="group-hover:text-accent-light mb-3 text-lg font-bold text-white transition-colors duration-300 md:text-xl">
              Produtos Digitais
            </h3>
            <p className="text-sm leading-relaxed text-gray-200 md:text-base">
              Nossas soluções SaaS e produtos próprios que ajudam empresas a
              resolverem desafios específicos de forma eficiente.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
