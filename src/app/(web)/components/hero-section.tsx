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

      {/* Portrait — absolute, anchored top-right, full section height.
          Clips on the right at smaller viewports (overflow-hidden on section). */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 z-1 h-full translate-x-[clamp(0%,calc(75%*(768px-100vw)/378px),75%)] md:right-[8vw] xl:right-[14vw]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/picture.png"
          alt=""
          className="h-full w-auto max-w-none select-none"
          draggable={false}
        />
      </div>

      {/* Left content — flex child, stretches full height, content sits near bottom */}
      <div className="relative z-10 flex max-w-3xl flex-col justify-end pr-6 pb-20 pl-[8vw] md:pr-0 xl:max-w-4xl">
        {/* Eyebrow */}
        <motion.p
          className="text-editorial-muted mb-4 text-xs font-medium tracking-[0.25em] uppercase"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          GUILHERME F. Trindade
        </motion.p>

        {/* H1 headline */}
        <motion.h1
          className="font-display text-editorial-dark mb-0 text-5xl leading-[1.05] font-extrabold tracking-[-0.035em] md:text-6xl lg:text-7xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
        >
          Engenheiro de Software
        </motion.h1>

        {/* Bio paragraph */}
        <motion.p
          className="text-editorial-body max-w-120 text-base leading-[1.65]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
        >
          Transformo problemas complexos em soluções digitais simples — do
          design ao código.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.3}
        >
          <Link
            href="#projects"
            className="text-editorial-ink text-sm font-bold underline-offset-2 transition-all duration-150 hover:underline"
          >
            Ver Projetos
          </Link>
          <span className="text-editorial-sep text-sm">ou</span>
          <Link
            href="#about"
            className="text-editorial-ink text-sm font-bold underline-offset-2 transition-all duration-150 hover:underline"
          >
            Sobre Mim
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom-center */}
      <ScrollIndicator />
    </section>
  )
}
