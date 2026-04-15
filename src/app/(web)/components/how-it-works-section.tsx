'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

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

function DesktopScrollSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const step1Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.33],
    shouldReduceMotion ? [1, 1, 1] : [1, 1, 0],
  )
  const step2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.53, 0.66],
    shouldReduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0],
  )
  const step3Opacity = useTransform(
    scrollYProgress,
    [0.53, 0.66, 1],
    shouldReduceMotion ? [1, 1, 1] : [0, 1, 1],
  )

  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const stepOpacities = [step1Opacity, step2Opacity, step3Opacity]

  return (
    <div
      ref={containerRef}
      className="relative hidden md:block"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6 md:px-[8vw]">
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

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-8 right-0 left-0 hidden h-px bg-gray-200 md:block"
            aria-hidden
          >
            <motion.div
              className="bg-accent h-full origin-left"
              style={
                shouldReduceMotion ? { scaleX: 1 } : { width: lineProgress }
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-12">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                style={{ opacity: stepOpacities[index] }}
                className="relative pt-16"
              >
                {/* Step dot on connector line */}
                <div
                  className="bg-accent absolute top-[28px] left-0 size-3 -translate-y-1/2 rounded-full"
                  aria-hidden
                />

                {/* Step number */}
                <span className="block text-7xl leading-none font-[800] tracking-tight text-gray-300">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-darkest mt-4 text-2xl font-[700]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-dark mt-2 text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileSection() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
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
    <div className="block px-6 py-20 md:hidden">
      {/* Section header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: [0.3, 0, 0.5, 1] }}
        className="mb-12"
      >
        <p className="text-gray-dark mb-3 text-xs font-medium tracking-[0.25em] uppercase">
          Processo
        </p>
        <h2 className="text-darkest text-4xl font-[800] tracking-tight">
          Como funciona
        </h2>
      </motion.div>

      {/* Vertical timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative"
      >
        {/* Vertical connector */}
        <div
          className="absolute top-0 bottom-0 left-5 w-px bg-gray-200"
          aria-hidden
        />

        <div className="flex flex-col gap-10">
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex gap-6 pl-14"
            >
              {/* Dot on vertical line */}
              <div
                className="bg-accent absolute top-1 left-[17px] size-3 -translate-x-1/2 rounded-full"
                aria-hidden
              />

              <div>
                {/* Step number */}
                <span className="block text-5xl leading-none font-[800] tracking-tight text-gray-300">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-darkest mt-3 text-xl font-[700]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-dark mt-1.5 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-surface overflow-hidden">
      <DesktopScrollSection />
      <MobileSection />
    </section>
  )
}
