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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Pill shape */}
          <div
            className="relative h-8 w-5 overflow-hidden rounded-full"
            style={{ border: '1.5px solid var(--color-editorial-muted)' }}
          >
            {/* Animated dot */}
            <motion.div
              className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
              style={{
                top: '5px',
                background: 'var(--color-editorial-muted)',
              }}
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
