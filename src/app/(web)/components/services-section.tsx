'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const services = [
  {
    icon: '🖥️',
    title: 'Sistemas sob medida',
    description:
      'Da ideia ao deploy — sistemas que automatizam processos, centralizam dados e eliminam retrabalho no seu negócio.',
  },
  {
    icon: '🌐',
    title: 'Sites e Landing Pages',
    description:
      'Presença digital que converte. Do portfólio institucional à página de vendas focada em geração de leads.',
  },
  {
    icon: '🤖',
    title: 'Automações com IA',
    description:
      'Integração de inteligência artificial no seu fluxo de trabalho — atendimento, geração de documentos, análise de dados.',
  },
]

const entryDirections = [
  { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
] as const

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
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
          <h2
            className="text-3xl leading-tight font-[800] tracking-[-0.01em] md:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-white)' }}
          >
            O que eu entrego
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const variant = entryDirections[index]

            return (
              <ServiceCard
                key={service.title}
                service={service}
                variant={variant}
                shouldReduceMotion={!!shouldReduceMotion}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

type ServiceCardProps = {
  service: (typeof services)[number]
  variant: (typeof entryDirections)[number]
  shouldReduceMotion: boolean
}

function ServiceCard({
  service,
  variant,
  shouldReduceMotion,
}: ServiceCardProps) {
  return (
    <motion.article
      variants={
        shouldReduceMotion
          ? undefined
          : {
              hidden: { ...variant.hidden },
              show: {
                ...variant.show,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              },
            }
      }
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={
        shouldReduceMotion
          ? undefined
          : { type: 'spring', stiffness: 300, damping: 20 }
      }
      className="group flex flex-col gap-6 border p-8"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(255,255,255,0.03)',
      }}
      onMouseEnter={(e) => {
        if (shouldReduceMotion) return
        const el = e.currentTarget
        el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)'
        el.style.borderColor = 'var(--color-accent)'
      }}
      onMouseLeave={(e) => {
        if (shouldReduceMotion) return
        const el = e.currentTarget
        el.style.boxShadow = 'none'
        el.style.borderColor = 'rgba(255,255,255,0.08)'
      }}
    >
      {/* Icon */}
      <motion.span
        className="block text-5xl leading-none select-none md:text-6xl"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 5 }}
        transition={
          shouldReduceMotion
            ? undefined
            : { type: 'spring', stiffness: 300, damping: 20 }
        }
        aria-hidden
      >
        {service.icon}
      </motion.span>

      {/* Text */}
      <div className="flex flex-grow flex-col gap-3">
        <h3
          className="text-2xl leading-tight font-[800] tracking-[-0.01em]"
          style={{ color: 'var(--color-white)' }}
        >
          {service.title}
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: 'var(--color-gray-mid)' }}
        >
          {service.description}
        </p>
      </div>

      {/* "Saiba mais" link with animated underline */}
      <div className="mt-auto pt-2">
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
    </motion.article>
  )
}
