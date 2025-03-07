'use client'
import { Section } from '@/components/section'
export const TextSection = () => {
  return (
    <Section className="py-32 text-zinc-200">
      <div className="container flex flex-col gap-4 md:grid-cols-2">
        <div className="overflow-hidden">
          <h3 className="max-w-max text-3xl font-semibold md:text-4xl">
            <span className="block">Construindo soluções de alto</span>
            <span className="block">
              impacto, sólidas e escaláveis com tecnologia.
            </span>
          </h3>
        </div>
      </div>
    </Section>
  )
}
