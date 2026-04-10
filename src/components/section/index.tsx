'use client'

import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion/react'

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  disableAnimation?: boolean
}

export const Section = ({
  className,
  children,
  id,
  disableAnimation,
}: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={disableAnimation ? undefined : { opacity: 0, y: 30 }}
      whileInView={disableAnimation ? undefined : { opacity: 1, y: 0 }}
      viewport={
        disableAnimation
          ? undefined
          : { margin: '100px', once: true, amount: 0.2 }
      }
      transition={
        disableAnimation
          ? undefined
          : { duration: 0.7, ease: [0.3, 0, 0.5, 1] }
      }
      className={twMerge('px-2', className)}
    >
      {children}
    </motion.section>
  )
}
