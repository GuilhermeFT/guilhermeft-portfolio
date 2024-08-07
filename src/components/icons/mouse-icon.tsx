'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

type IconProps = {
  className?: string
}

export function MouseIcon({ className }: IconProps) {
  return (
    <svg
      className={twMerge('w-5 h-5', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <motion.path
        d="M12 6v4"
        animate={{
          y: [0, 8, 0],
          transition: {
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 2,
          },
        }}
      />
    </svg>
  )
}
