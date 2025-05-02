import { TimelineItem } from '../../../../components/timeline-item'
import { Section } from '../../../../components/section'

export const ProcessSection = () => {
  return (
    <Section id="process" className="bg-g-light py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-g-dark-blue mb-16 text-center text-3xl font-bold md:text-4xl">
          Nossa metodologia em 6 etapas
        </h2>
        <p className="text-g-medium-gray mb-12 text-center">
          Conheça o passo a passo da nossa consultoria digital
        </p>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="bg-g-blue absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2"></div>

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
    </Section>
  )
}
