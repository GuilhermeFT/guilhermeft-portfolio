import Link from 'next/link'
import { Metadata } from 'next'
import { TimelineItem } from '@/components/timeline-item'

import { EmailModal } from '@/components/modal/email-modal'
import { WhatsAppModal } from '@/components/modal/whatsapp-modal'

export const metadata: Metadata = {
  title: 'Consultoria Digital | Guilhermeft Studio',
  description:
    'Soluções digitais completas para o seu negócio: landing pages, sites profissionais e automações que transformam seu fluxo de trabalho.',
  keywords:
    'consultoria digital, landing pages, desenvolvimento web, automação de negócios, presença online',
}

export default function StudioPage() {
  return (
    <div className="bg-g-background flex min-h-screen flex-col text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 md:px-8">
        <div className="absolute inset-0 z-0">
          <div className="bg-g-background/70 absolute inset-0"></div>
          <div className="absolute top-0 right-0 h-full w-full md:w-1/2">
            {/* Background gradient */}
            <div className="from-g-dark-blue/30 to-g-background absolute inset-0 bg-gradient-to-l"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto grid gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Consultoria digital{' '}
              <span className="gradient-text">para seu negócio</span> crescer
              online
            </h1>
            <p className="text-g-light-gray mb-8 text-lg">
              Desenvolvemos landing pages, websites e automações que transformam
              seus processos e impulsionam seus resultados
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="bg-g-blue hover:bg-g-dark-blue rounded-full px-6 py-3 font-medium text-white transition-all"
              >
                Agendar Consultoria →
              </Link>
              <Link
                href="#process"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Conheça nossa abordagem
              </Link>
            </div>
          </div>
          {/* <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative h-[700px] w-full max-w-[600px]">
              <Image
                src={photo}
                alt="Desenvolvedor de sites"
                fill
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-g-background/90 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-g-light-blue mb-2 text-lg font-medium">
              Nossa consultoria
            </h2>
            <h3 className="mb-8 text-3xl font-bold md:text-4xl">
              Soluções digitais completas para cada fase do seu negócio
            </h3>
            <p className="text-g-light-gray mb-6 text-justify text-lg text-pretty">
              Somos especialistas em identificar gargalos e criar soluções
              digitais eficientes. Nossa abordagem conecta estratégia,
              tecnologia e design para desenvolver landing pages de alta
              conversão, websites profissionais e sistemas de automação que
              simplificam processos complexos. Transformamos desafios em
              oportunidades digitais, permitindo que você foque no crescimento
              do seu negócio enquanto nossas soluções trabalham por você.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-g-background py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Nossas especialidades
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-g-dark-gray/20 rounded-lg p-6">
              <div className="text-g-light-blue mb-4">
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
              <h3 className="mb-2 text-xl font-bold">Landing Pages</h3>
              <p className="text-g-light-gray">
                Páginas de conversão otimizadas para transformar visitantes em
                clientes, com design persuasivo e copy estratégico.
              </p>
            </div>

            <div className="bg-g-dark-gray/20 rounded-lg p-6">
              <div className="text-g-light-blue mb-4">
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
              <h3 className="mb-2 text-xl font-bold">Websites Profissionais</h3>
              <p className="text-g-light-gray">
                Sites completos que estabelecem sua autoridade online,
                otimizados para SEO e com experiência de usuário intuitiva.
              </p>
            </div>

            <div className="bg-g-dark-gray/20 rounded-lg p-6">
              <div className="text-g-light-blue mb-4">
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
              <h3 className="mb-2 text-xl font-bold">Automação de Processos</h3>
              <p className="text-g-light-gray">
                Sistemas inteligentes que automatizam tarefas repetitivas,
                otimizam fluxos de trabalho e aumentam a produtividade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-g-background/95 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
            Nossa metodologia em 6 etapas
          </h2>
          <p className="text-g-light-gray mb-12 text-center">
            Conheça o passo a passo da nossa consultoria digital
          </p>

          <div className="relative mx-auto max-w-3xl">
            {/* Timeline line */}
            <div className="bg-g-blue/30 absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-24">
              <TimelineItem
                step={1}
                title="Diagnóstico"
                description="Analisamos seu negócio, desafios e objetivos para identificar oportunidades digitais e definir prioridades."
                position="left"
              />

              <TimelineItem
                step={2}
                title="Estratégia"
                description="Desenvolvemos um plano personalizado com as soluções ideais para suas necessidades específicas."
                position="right"
              />

              <TimelineItem
                step={3}
                title="Prototipagem"
                description="Criamos protótipos interativos das soluções propostas para validação e refinamento."
                position="left"
              />

              <TimelineItem
                step={4}
                title="Desenvolvimento"
                description="Implementamos as soluções com foco em tecnologias robustas, segurança e escalabilidade."
                position="right"
              />

              <TimelineItem
                step={5}
                title="Integração"
                description="Conectamos suas novas soluções aos sistemas existentes e realizamos testes abrangentes."
                position="left"
              />

              <TimelineItem
                step={6}
                title="Acompanhamento"
                description="Fornecemos suporte contínuo, ajustes e atualizações para garantir resultados consistentes."
                position="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-g-background py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Pronto para transformar seu negócio digitalmente?
              </h2>
              <p className="text-g-light-gray">
                Entre em contato para uma consultoria inicial gratuita
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-g-dark-gray/20 rounded-lg p-6">
                <h3 className="text-g-light-blue mb-4 text-xl font-bold">
                  <svg
                    className="mb-4 h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945l-1.688 6.163 6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0z" />
                  </svg>
                  Atendimento rápido
                </h3>
                <p className="text-g-light-gray mb-6">
                  Converse diretamente com um de nossos consultores via WhatsApp
                  e tenha uma resposta rápida para suas principais dúvidas.
                </p>
                <WhatsAppModal whatsappNumber="5566992433225" />
              </div>

              <div className="bg-g-dark-gray/20 rounded-lg p-6">
                <h3 className="text-g-light-blue mb-4 text-xl font-bold">
                  <svg
                    className="mb-4 h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Proposta detalhada
                </h3>
                <p className="text-g-light-gray mb-6">
                  Envie-nos as informações do seu projeto para receber uma
                  proposta completa com análise preliminar e plano de ação
                  customizado.
                </p>
                <EmailModal emailAddress="contato@guilhermeft.dev" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-g-background/95 text-g-light-gray py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Guilhermeft Studio | CNPJ:
            43.673.320/0001-15
          </p>
          <p className="mt-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Política de Privacidade
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
