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
  const initial = {
    opacity: 0,
    y: 100,
  }

  return (
    <motion.section
      viewport={
        disableAnimation
          ? undefined
          : { margin: '100px', once: true, amount: 0.2 }
      }
      initial={disableAnimation ? undefined : initial}
      id={id}
      className={twMerge('px-2', className)}
    >
      {children}
    </motion.section>
  )
}
