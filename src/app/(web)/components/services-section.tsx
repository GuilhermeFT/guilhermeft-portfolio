'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Code2, Globe, Bot } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: {
  number: string
  Icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    number: '01',
    Icon: Code2,
    title: 'Sistemas sob medida',
    description:
      'Da ideia ao deploy — sistemas que automatizam processos, centralizam dados e eliminam retrabalho no seu negócio.',
  },
  {
    number: '02',
    Icon: Globe,
    title: 'Sites e Landing Pages',
    description:
      'Presença digital que converte. Do portfólio institucional à página de vendas focada em geração de leads.',
  },
  {
    number: '03',
    Icon: Bot,
    title: 'Automações com IA',
    description:
      'Integração de inteligência artificial no seu fluxo de trabalho — atendimento, geração de documentos, análise de dados.',
  },
]

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }
          className="mb-16"
        >
          <p
            className="mb-3 text-xs font-medium tracking-[0.25em] uppercase"
            style={{ color: 'var(--color-gray-mid)' }}
          >
            Serviços
          </p>
          <h2 className="text-3xl leading-tight font-[800] tracking-[-0.01em] md:text-4xl lg:text-5xl">
            O que eu entrego
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 gap-px md:grid-cols-3"
          style={{ backgroundColor: 'var(--color-border)' }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              shouldReduceMotion={!!shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type ServiceCardProps = {
  service: (typeof services)[number]
  index: number
  shouldReduceMotion: boolean
}

function ServiceCard({ service, index, shouldReduceMotion }: ServiceCardProps) {
  const { Icon, number, title, description } = service

  return (
    <motion.article
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 32 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className="group relative flex min-h-[400px] flex-col justify-between p-10"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      {/* Top row: icon + service number */}
      <div className="flex items-start justify-between">
        <div
          className="transition-colors duration-300"
          style={{ color: 'var(--color-white)' }}
        >
          <Icon
            size={48}
            strokeWidth={1.25}
            className="transition-colors duration-300 group-hover:text-[color:var(--color-accent)]"
          />
        </div>
        <span
          className="text-sm font-[500] tracking-[0.1em] tabular-nums"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          {number}
        </span>
      </div>

      {/* Bottom: title + description + cta */}
      <div>
        <h3
          className="mb-3 text-2xl leading-tight font-[800] tracking-[-0.01em]"
          style={{ color: 'var(--color-white)' }}
        >
          {title}
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: 'var(--color-gray-mid)' }}
        >
          {description}
        </p>

        <div className="mt-8">
          <span
            className="relative inline-block text-sm font-[700] tracking-wide uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            Saiba mais →
            <span
              className="absolute bottom-[-2px] left-0 block h-px w-0 transition-[width] duration-300 ease-in-out group-hover:w-full motion-reduce:transition-none"
              style={{ backgroundColor: 'var(--color-accent)' }}
              aria-hidden
            />
          </span>
        </div>
      </div>

      {/* Inset accent border on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[color:var(--color-accent)] motion-reduce:transition-none"
      />
    </motion.article>
  )
}
