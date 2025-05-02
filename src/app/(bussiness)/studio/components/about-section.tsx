import { Section } from '@/components/section'

export const AboutSection = () => {
  return (
    <Section className="bg-g-light py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-g-blue mb-3 text-base font-medium tracking-wider uppercase md:text-lg">
            Nossa essência
          </h2>
          <h3 className="text-g-dark-blue mb-8 text-2xl font-bold md:text-4xl lg:text-5xl">
            Onde criatividade encontra tecnologia
          </h3>
          <p className="text-g-medium-gray mx-auto mb-6 max-w-3xl text-base leading-relaxed md:text-lg">
            Somos um estúdio digital que une design e desenvolvimento para criar
            experiências únicas. Desenvolvemos desde websites personalizados até
            produtos próprios, sempre buscando inovação e excelência em cada
            projeto.
          </p>
        </div>
      </div>
    </Section>
  )
}
