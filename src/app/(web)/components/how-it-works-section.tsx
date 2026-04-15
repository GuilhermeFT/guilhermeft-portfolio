'use client'

import { motion, useReducedMotion } from 'motion/react'

const STEPS = [
  {
    number: '01',
    title: 'Conversa',
    description: 'Entendo o problema do seu negócio, sem jargão técnico.',
  },
  {
    number: '02',
    title: 'Proposta',
    description:
      'Apresento a solução mais direta e o que você pode esperar de resultado.',
  },
  {
    number: '03',
    title: 'Entrega',
    description: 'Desenvolvo, testo e entrego com acompanhamento real.',
  },
]

export function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 32,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      id="how-it-works"
      className="bg-surface overflow-hidden py-24 md:py-32"
    >
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.3, 0, 0.5, 1] }}
          className="mb-16"
        >
          <p className="text-gray-dark mb-3 text-xs font-medium tracking-[0.25em] uppercase">
            Processo
          </p>
          <h2 className="text-darkest text-4xl font-[800] tracking-tight md:text-5xl">
            Como funciona
          </h2>
        </motion.div>

        {/* Steps — vertical timeline (mobile) / horizontal grid (desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Desktop: horizontal connector line */}
          <div
            className="absolute top-[1.75rem] right-0 left-0 hidden h-px bg-gray-200 md:block"
            aria-hidden
          />

          {/* Mobile: vertical connector line */}
          <div
            className="absolute top-0 bottom-0 left-3.5 w-px bg-gray-200 md:hidden"
            aria-hidden
          />

          <div className="flex flex-col gap-12 md:grid md:grid-cols-3 md:gap-12">
            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative pl-10 md:pt-14 md:pl-0"
              >
                {/* Dot — vertical line (mobile) */}
                <div
                  className="bg-accent absolute top-1 left-0 size-3 -translate-x-[1px] rounded-full md:hidden"
                  aria-hidden
                />

                {/* Dot — horizontal line (desktop) */}
                <div
                  className="bg-accent absolute top-[22px] left-0 hidden size-3 -translate-y-1/2 rounded-full md:block"
                  aria-hidden
                />

                {/* Step number */}
                <span className="block text-6xl leading-none font-[800] tracking-tight text-gray-300 md:text-7xl">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-darkest mt-4 text-xl font-[700] md:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-dark mt-2 text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
