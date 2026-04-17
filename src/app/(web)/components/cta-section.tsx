'use client'

import { motion, useReducedMotion } from 'motion/react'

const WHATSAPP_URL = 'https://wa.me/SEUNUMERO'
const EMAIL = 'contato@guilhermeft.dev'

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.3, 0, 0.5, 1] as const },
  },
}

export function CtaSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="contact"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px', amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 0.7, ease: [0.3, 0, 0.5, 1] as const }
      }
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      <div className="container">
        <h2
          className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: 'var(--color-white)' }}
        >
          Tem um problema pra resolver?
        </h2>

        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: 'var(--color-gray-mid)', maxWidth: '52ch' }}
        >
          Me conta o que trava seu negócio. Em 24h te respondo com um caminho.
        </p>

        <motion.div
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
          variants={shouldReduceMotion ? undefined : containerVariant}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variants={shouldReduceMotion ? undefined : itemVariant}
            className="inline-flex items-center justify-center gap-2 px-8 text-sm font-bold tracking-wide uppercase transition-opacity duration-150 hover:opacity-90"
            style={{
              height: 'var(--btn-height)',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-darkest)',
            }}
          >
            💬 Falar no WhatsApp
          </motion.a>

          <motion.a
            href={`mailto:${EMAIL}`}
            variants={shouldReduceMotion ? undefined : itemVariant}
            className="inline-flex items-center justify-center gap-2 px-8 text-sm font-bold tracking-wide uppercase transition-colors duration-150 hover:border-white"
            style={{
              height: 'var(--btn-height)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'var(--color-white)',
            }}
          >
            ✉️ {EMAIL}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
