'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ClipboardList, RefreshCw, Unplug } from 'lucide-react'

const problems = [
  {
    number: '01',
    Icon: ClipboardList,
    title: 'Processos no papel ou no Excel',
    description: 'Controle manual que some, erra e atrasa tudo.',
  },
  {
    number: '02',
    Icon: RefreshCw,
    title: 'Tarefas repetitivas que consomem seu time',
    description: 'Horas perdidas em coisas que um sistema faria em segundos.',
  },
  {
    number: '03',
    Icon: Unplug,
    title: 'Sistemas que não conversam entre si',
    description: 'Dados espalhados, retrabalho e decisões no escuro.',
  },
]

export function ProblemsSection() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
    },
  })

  const containerVariant = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const cardVariant = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 64,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section id="problems" className="py-24 lg:py-32">
      <div className="container">
        {/* Eyebrow */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp(0)}
          className="text-editorial-muted mb-4 text-xs font-medium tracking-[0.4em] uppercase"
        >
          Identificação
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp(0.08)}
          className="text-editorial-dark text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight"
        >
          Seu negócio ainda depende disso?
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp(0.14)}
          className="bg-border mt-8 mb-14 h-px w-full"
        />

        {/* Cards — stagger entry from bottom */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariant}
          className="grid grid-cols-1 divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0"
        >
          {problems.map(({ number, Icon, title, description }) => (
            <motion.div
              key={number}
              variants={cardVariant}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={[
                'group relative overflow-hidden',
                'flex flex-col gap-6 px-8 py-10',
                'first:pl-0 last:pr-0 lg:first:pl-0 lg:last:pr-0',
                shouldReduceMotion
                  ? ''
                  : [
                      'before:absolute before:inset-x-0 before:top-0',
                      'before:h-[2px] before:bg-darkest',
                      'before:origin-left before:scale-x-0',
                      'before:transition-transform before:duration-500',
                      'before:ease-[cubic-bezier(0.22,1,0.36,1)]',
                      'hover:before:scale-x-100',
                    ].join(' '),
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {/* Icon + number row */}
              <div className="flex items-start justify-between">
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className={[
                    'origin-bottom-left text-foreground',
                    'transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    shouldReduceMotion ? '' : 'group-hover:scale-125',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden
                />
                <span className="text-editorial-muted text-sm font-medium tabular-nums">
                  {number}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground text-base font-bold leading-snug">
                  {title}
                </h3>
                <p className="text-editorial-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp(0)}
          className="border-border mt-14 border-t pt-10"
        >
          <p className="text-editorial-dark text-lg font-bold md:text-xl">
            Se você se identificou com algum desses,{' '}
            <span className="text-editorial-muted font-medium italic">
              está no lugar certo.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
