'use client'

import useWindowSize from '@/hooks/use-window-size'
import { useScroll, useSpring, motion, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const { height } = useWindowSize()

  const smoothProgress = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    mass: 0.1,
  })

  const y = useTransform(smoothProgress, (value) => -value)

  useEffect(() => {
    if (ref.current) {
      document.body.style.height = `${ref.current.getBoundingClientRect().height}px`
    }
  }, [height])

  return (
    <div className="fixed h-full w-full overflow-hidden">
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
