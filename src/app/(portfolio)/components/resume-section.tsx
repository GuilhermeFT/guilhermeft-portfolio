'use client'

import { Section } from '@/components/section'

import { motion } from 'motion/react'

export const ResumeSection = () => {
  return (
    <Section className="flex items-center bg-gray-950 py-16 md:py-32">
      <motion.div className="container grid gap-8">
        <motion.div
          className="from-g-dark-blue grid w-full gap-2 bg-gradient-to-r to-transparent p-4 transition-transform delay-100 duration-700 ease-in-out hover:scale-105"
          viewport={{
            margin: '100px',
            once: true,
          }}
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 0.8,
              delay: 0.5,
            },
          }}
        >
          <h3 className="text-2xl font-bold uppercase md:text-4xl">Frontend</h3>

          <p className="w-full max-w-md text-lg text-pretty">
            Desenvolvimento de interfaces web com React, Next.js, Tailwind CSS e
            Styled Components.
          </p>
        </motion.div>

        <motion.div
          className="from-g-dark-gray grid w-full justify-end gap-2 place-self-end bg-gradient-to-l to-transparent p-4 transition-transform delay-100 duration-700 ease-in-out hover:scale-105"
          viewport={{
            margin: '100px',
            once: true,
          }}
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 0.8,
              delay: 0.5,
            },
          }}
        >
          <h3 className="text-right text-2xl font-bold uppercase md:text-4xl">
            Mobile
          </h3>

          <p className="w-full max-w-md text-right text-lg text-pretty">
            Desenvolvimento de aplicativos mobile com React Native, Expo e
            Android Nativo (Kotlin).
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
