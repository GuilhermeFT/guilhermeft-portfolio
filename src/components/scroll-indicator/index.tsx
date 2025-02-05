'use client'

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { useState } from 'react'

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (current) => {
    setIsVisible(current < 20)
  })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.span
            className="text-xs uppercase tracking-widest text-gray-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            Scroll
          </motion.span>
          <motion.div
            className="h-8 w-0.5 origin-top bg-gradient-to-b from-g-dark-blue to-transparent"
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
