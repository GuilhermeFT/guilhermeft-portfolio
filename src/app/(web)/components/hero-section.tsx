'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ScrollIndicator } from '@/components/scroll-indicator'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
}

const bleedIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.0, delay: 0.2 },
  },
}

export function HeroSection() {
  return (
    <section className="bg-editorial-bg relative flex h-dvh min-h-150 overflow-hidden">
      {/* Bleed text — absolute, starts at left edge, bleeds off-screen right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[28%] left-0 z-0 w-max -translate-y-1/2"
      >
        <motion.span
          className="hero-bleed-text"
          initial="hidden"
          animate="visible"
          variants={bleedIn}
        >
          Software
        </motion.span>
      </div>

      {/* Portrait — absolute, anchored bottom-right, slides off-screen on smaller viewports. */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-1 flex h-full items-end translate-x-[clamp(0%,calc(75%*(768px-100vw)/378px),75%)] md:right-[8vw] xl:right-[14vw]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/picture.png"
          alt=""
          className="h-[90%] w-auto max-w-none select-none"
          draggable={false}
        />
      </div>

      {/* Left content — flex child, stretches full height, content sits near bottom */}
      <div className="relative z-10 flex w-full max-w-[630px] flex-col justify-end pl-6 pr-6 pb-20 md:pl-[8vw] md:pr-0">
        {/* Eyebrow */}
        <motion.p
          className="text-editorial-muted py-[5px] text-[14px] font-medium tracking-[0.4em] uppercase"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          GUILHERME FT
        </motion.p>

        {/* H1 headline */}
        <motion.h1
          className="font-display text-editorial-dark mb-0 text-[clamp(2rem,9.5vw,2.75rem)] leading-[1.06] font-[800] tracking-[-0.01em] md:text-[clamp(3.875rem,6vw,4.5rem)] md:leading-[1.04]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
        >
          Consultoria e Desenvolvimento de Software
        </motion.h1>

        {/* Bio paragraph */}
        <motion.p
          className="text-editorial-body mt-[20px] text-[16px] leading-[1.5] font-medium md:text-[22px] md:leading-[1.36]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
        >
          Ajudamos empresas a construir produtos digitais de alto impacto — com
          estratégia, design e tecnologia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-[20px] flex items-center gap-[15px]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.3}
        >
          <Link
            href="#projects"
            className="text-editorial-ink text-[18px] font-[800] underline-offset-2 transition-all duration-150 hover:underline"
          >
            Ver Projetos
          </Link>
          <span className="text-editorial-sep text-base font-medium">ou</span>
          <Link
            href="#how-it-works"
            className="text-editorial-ink text-[18px] font-[800] underline-offset-2 transition-all duration-150 hover:underline"
          >
            Como Funciona
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom-center */}
      <ScrollIndicator />
    </section>
  )
}
