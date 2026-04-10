'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
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
    <section
      className="relative h-dvh min-h-[600px]"
      style={{ background: 'var(--color-editorial-bg)' }}
    >
      {/* Bleed text — absolutely centered, overflows both viewport edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[45%] left-1/2 z-0 w-max -translate-x-1/2 -translate-y-1/2"
      >
        <motion.span
          className="hero-bleed-text"
          initial="hidden"
          animate="visible"
          variants={bleedIn}
        >
          developer
        </motion.span>
      </div>

      {/* Portrait placeholder — right 55%, full height, desktop only */}
      <div
        aria-hidden
        className="absolute top-0 right-0 z-[1] hidden h-full w-[55%] md:block"
      >
        {/*
          Replace this div with:
          <Image
            src="/images/portrait.jpg"
            fill
            alt=""
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
          when portrait photo is available.
        */}
        <div
          className="h-full w-full"
          style={{ background: 'var(--color-surface)' }}
        />
      </div>

      {/* Left content column */}
      <div className="absolute top-1/2 left-[8vw] z-10 max-w-[480px] -translate-y-1/2">
        {/* Eyebrow */}
        <motion.p
          className="mb-4 text-[11px] font-[500] tracking-[0.25em] uppercase"
          style={{ color: 'var(--color-editorial-muted)' }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          GUILHERME FT
        </motion.p>

        {/* H1 headline */}
        <motion.h1
          className="font-display mb-0 text-[clamp(42px,5.5vw,72px)] leading-[1.05] font-[800] tracking-[-0.02em]"
          style={{
            color: 'var(--color-editorial-dark)',
            fontFamily: 'var(--font-display)',
          }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
        >
          Full-Stack Software
          <br />
          Developer
        </motion.h1>

        {/* Bio paragraph */}
        <motion.p
          className="mt-5 max-w-[420px] text-[15px] leading-[1.65]"
          style={{ color: 'var(--color-editorial-body)' }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.2}
        >
          Building interfaces and digital experiences that make a difference.
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
            className="text-sm font-[700] underline-offset-2 transition-all duration-150 hover:underline"
            style={{ color: 'var(--color-editorial-ink)' }}
          >
            View Projects
          </Link>
          <span
            className="text-sm"
            style={{ color: 'var(--color-editorial-sep)' }}
          >
            or
          </span>
          <Link
            href="#about"
            className="text-sm font-[700] underline-offset-2 transition-all duration-150 hover:underline"
            style={{ color: 'var(--color-editorial-ink)' }}
          >
            About Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom-center */}
      <ScrollIndicator />

      {/* Floating email badge — fixed, persists across scroll */}
      <a
        href="mailto:guilhermeft.dev@gmail.com"
        aria-label="Send email"
        className="fixed bottom-8 left-8 z-[99] flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 ease-out hover:scale-110"
        style={{
          background: 'var(--color-editorial-ink)',
          color: 'var(--color-white)',
        }}
      >
        <Mail size={16} />
      </a>
    </section>
  )
}
