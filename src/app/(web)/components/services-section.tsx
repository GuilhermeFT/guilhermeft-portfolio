'use client'

import { useState } from 'react'
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

/** Directional entry: left ← | bottom ↑ | right → */
const entryVariants = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
] as const

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

        {/* Cards grid — gap-px + bg-border = hairline separators */}
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
              isDimmed={hoveredIndex !== null && hoveredIndex !== index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
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
  isDimmed: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

function ServiceCard({
  service,
  index,
  shouldReduceMotion,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: ServiceCardProps) {
  const { Icon, number, title, description } = service
  const entry = entryVariants[index]

  return (
    /*
     * Outer div owns the spotlight dimming effect independently from Framer's
     * whileInView / whileHover — avoids any animate vs whileInView conflicts.
     */
    <div
      style={
        shouldReduceMotion
          ? undefined
          : {
              opacity: isDimmed ? 0.38 : 1,
              transform: isDimmed ? 'scale(0.985)' : 'scale(1)',
              transition: 'opacity 0.45s ease, transform 0.45s ease',
            }
      }
    >
      <motion.article
        /* Directional scroll-in entry */
        initial={shouldReduceMotion ? undefined : entry.hidden}
        whileInView={shouldReduceMotion ? undefined : entry.visible}
        viewport={{ once: true, margin: '-80px' }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 0.6,
                delay: index * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }
        }
        /* Hover — propagates "hover" variant name to all motion children */
        whileHover={shouldReduceMotion ? undefined : 'hover'}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className="relative flex min-h-[420px] flex-col justify-between overflow-hidden p-10"
        style={{ backgroundColor: 'var(--color-darkest)' }}
      >
        {/* ── Subtle bg highlight ──────────────────────────────── */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          variants={shouldReduceMotion ? undefined : { hover: { opacity: 1 } }}
          transition={{ duration: 0.45 }}
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
        />

        {/* ── Left accent bar — scaleY from top ───────────────── */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          variants={
            shouldReduceMotion
              ? undefined
              : {
                  hover: {
                    scaleY: 1,
                    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                  },
                }
          }
          className="pointer-events-none absolute top-0 left-0 h-full w-[2px] origin-top"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />

        {/* ── Ghost number — large decorative bg text ──────────── */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, y: 16 }}
          variants={
            shouldReduceMotion
              ? undefined
              : {
                  hover: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }
          }
          className="pointer-events-none absolute right-7 bottom-7 text-[128px] leading-none font-[900] tabular-nums select-none"
          style={{ color: 'rgba(255,255,255,0.05)' }}
        >
          {number}
        </motion.span>

        {/* ── Top row: icon + number ───────────────────────────── */}
        <div className="flex items-start justify-between">
          {/* Icon: spring scale + slight tilt + color to gray-300 */}
          <motion.div
            initial={{ scale: 1, rotate: 0, color: 'var(--color-white)' }}
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hover: {
                      scale: 1.22,
                      rotate: -7,
                      color: 'var(--color-gray-300)',
                      transition: {
                        type: 'spring',
                        stiffness: 340,
                        damping: 18,
                      },
                    },
                  }
            }
          >
            <Icon size={48} strokeWidth={1.25} />
          </motion.div>

          {/* Service number: fades in to gray-mid */}
          <motion.span
            initial={{ opacity: 0.18 }}
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hover: {
                      opacity: 0.65,
                      transition: { duration: 0.3 },
                    },
                  }
            }
            className="text-sm font-[500] tracking-[0.12em] tabular-nums"
            style={{ color: 'var(--color-gray-dark)' }}
          >
            {number}
          </motion.span>
        </div>

        {/* ── Bottom text block ─────────────────────────────────── */}
        <div>
          {/* Title: slides right */}
          <motion.h3
            initial={{ x: 0 }}
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hover: {
                      x: 8,
                      transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                    },
                  }
            }
            className="mb-3 text-2xl leading-tight font-[800] tracking-[-0.01em]"
            style={{ color: 'var(--color-white)' }}
          >
            {title}
          </motion.h3>

          {/* Description: slides right + brightens, slight delay */}
          <motion.p
            initial={{ x: 0, opacity: 0.65 }}
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hover: {
                      x: 8,
                      opacity: 1,
                      transition: {
                        duration: 0.32,
                        delay: 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }
            }
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-gray-mid)' }}
          >
            {description}
          </motion.p>

          {/* CTA */}
          <div className="mt-8">
            <span
              className="relative inline-flex items-center gap-1 text-sm font-[700] tracking-wide uppercase"
              style={{ color: 'var(--color-accent)' }}
            >
              Saiba mais
              {/* Arrow slides right */}
              <motion.span
                initial={{ x: 0 }}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : {
                        hover: {
                          x: 6,
                          transition: {
                            duration: 0.26,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }
                }
              >
                →
              </motion.span>
              {/* Underline grows from left */}
              <motion.span
                aria-hidden
                initial={{ width: '0%' }}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : {
                        hover: {
                          width: '100%',
                          transition: {
                            duration: 0.32,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }
                }
                className="absolute bottom-[-2px] left-0 block h-px"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  )
}
