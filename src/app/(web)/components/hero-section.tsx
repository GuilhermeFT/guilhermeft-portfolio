'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ScrollIndicator } from '@/components/scroll-indicator'

const WHATSAPP_URL = 'https://wa.me/SEUNUMERO'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40])

  const entryVariant = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: (delayIndex: number) => ({
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
            delay: delayIndex * 0.12,
          },
    }),
  }

  const bleedVariant = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 1.0, delay: 0.2 },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="bg-editorial-bg relative flex h-dvh min-h-150 overflow-hidden"
    >
      {/* Background decorative gradient — subtle animated glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,122,255,0.04) 0%, transparent 70%)',
        }}
        animate={shouldReduceMotion ? { opacity: 0.4 } : { opacity: [0.3, 0.6, 0.3] }}
        transition={
          shouldReduceMotion
            ? {}
            : { duration: 3, ease: 'easeInOut', repeat: Infinity }
        }
      />

      {/* Bleed text — absolute, starts at left edge, bleeds off-screen right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[28%] left-0 z-0 w-max -translate-y-1/2"
      >
        <motion.span
          className="hero-bleed-text"
          initial="hidden"
          animate="visible"
          variants={bleedVariant}
        >
          Software
        </motion.span>
      </div>

      {/* Portrait — absolute, anchored bottom-right, parallax on scroll */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-1 flex h-full items-end translate-x-[clamp(0%,calc(75%*(768px-100vw)/378px),75%)] md:right-[8vw] xl:right-[14vw]"
        style={shouldReduceMotion ? {} : { y: portraitY }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/picture.png"
          alt=""
          className="h-[90%] w-auto max-w-none select-none"
          draggable={false}
        />
      </motion.div>

      {/* Left content — flex child, stretches full height, content sits near bottom */}
      <div className="relative z-10 flex w-full max-w-[760px] flex-col justify-end pl-6 pr-6 pb-20 md:pl-[8vw] md:pr-0">
        {/* Eyebrow */}
        <motion.p
          className="text-editorial-muted py-[5px] text-[14px] font-medium tracking-[0.4em] uppercase"
          initial="hidden"
          animate="visible"
          variants={entryVariant}
          custom={0}
        >
          Desenvolvimento Sob Medida
        </motion.p>

        {/* H1 headline */}
        <motion.h1
          className="font-display text-editorial-dark mb-0 text-[clamp(2rem,9.5vw,2.75rem)] leading-[1.06] font-[800] tracking-[-0.01em] md:text-[clamp(3.875rem,6vw,4.5rem)] md:leading-[1.04]"
          initial="hidden"
          animate="visible"
          variants={entryVariant}
          custom={1}
        >
          Software que resolve. Não que complica.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-editorial-body mt-[20px] text-[16px] leading-[1.5] font-medium md:text-[22px] md:leading-[1.36]"
          initial="hidden"
          animate="visible"
          variants={entryVariant}
          custom={2}
        >
          Desenvolvo sistemas, aplicações e automações para negócios que
          precisam de resultado — não de promessa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-[20px] flex flex-wrap items-center gap-[15px]"
          initial="hidden"
          animate="visible"
          variants={entryVariant}
          custom={3}
        >
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 text-[16px] font-[800] text-white transition-opacity duration-150 hover:opacity-90"
            style={{
              height: 'var(--btn-height)',
              backgroundColor: 'var(--color-editorial-dark)',
            }}
          >
            💬 Falar no WhatsApp
          </Link>
          <Link
            href="#projects"
            className="text-editorial-ink text-[18px] font-[800] underline-offset-2 transition-all duration-150 hover:underline"
          >
            Ver Projetos
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom-center */}
      <ScrollIndicator />
    </section>
  )
}
