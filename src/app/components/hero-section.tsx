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
      duration: 0.6 + delay * 0.2,
      ease: [0.3, 0, 0.5, 1] as const,
      delay,
    },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-dvh overflow-hidden pt-[370px] pb-24">
      {/* Background watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-0 w-full select-none overflow-hidden"
      >
        <svg
          viewBox="0 0 1200 200"
          className="h-auto w-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="80%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="inherit"
            fontWeight="800"
            fontSize="180"
            letterSpacing="-4"
            fill="currentColor"
          >
            developer
          </text>
        </svg>
      </div>

      {/* Portrait placeholder — swap src for real photo when available */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 z-0 hidden h-[460px] w-auto select-none md:block"
      >
        {/* Replace with: <Image src="/portrait.jpg" alt="Guilherme Trindade" fill className="object-cover object-top" /> */}
        <div className="h-full w-[320px] bg-surface opacity-40" />
      </div>

      {/* Copy */}
      <div className="container relative z-10">
        <motion.h5
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          GUILHERME FT
        </motion.h5>

        <motion.h1
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-3 max-w-xl"
        >
          Desenvolvedor Full Stack
        </motion.h1>

        <motion.h3
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-4 max-w-md text-muted-foreground"
        >
          Construindo interfaces e sistemas que fazem a diferença — para
          empresas que querem crescer.
        </motion.h3>

        <motion.nav
          custom={0.45}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/#projects"
            className="text-sm font-[800] uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:text-gray-mid"
          >
            Ver Projetos ↓
          </Link>
          <Link
            href="/about"
            className="text-sm font-[800] uppercase tracking-[0.2em] text-gray-mid transition-colors duration-200 hover:text-foreground"
          >
            Sobre mim →
          </Link>
        </motion.nav>
      </div>

      <ScrollIndicator />
    </section>
  )
}
