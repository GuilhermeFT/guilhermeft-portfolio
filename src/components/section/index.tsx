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

  const anim = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  }
  return (
    <motion.section
      viewport={
        disableAnimation
          ? undefined
          : { margin: '100px', once: true, amount: 0.3 }
      }
      initial={disableAnimation ? undefined : initial}
      whileInView={disableAnimation ? undefined : anim}
      id={id}
      className={twMerge('px-2', className)}
    >
      {children}
    </motion.section>
  )
}
