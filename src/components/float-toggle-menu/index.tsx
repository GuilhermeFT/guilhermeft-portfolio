'use client'

import useWindowSize from '@/hooks/use-window-size'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useNavigation } from '@/store/use-navigation'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatToggleMenu = () => {
  const { toggleMenu, isOpen } = useNavigation()
  const [showButton, setShowButton] = useState(false)
  const [isOnTop, setIsOnTop] = useState(true)

  const { scrollY } = useScroll()
  const { width } = useWindowSize()

  const isMobile = width < 768

  useMotionValueEvent(scrollY, 'change', (value) => {
    setShowButton(value > 200)
    setIsOnTop(value === 0)
  })

  return (
    <motion.button
      onClick={() => {
        toggleMenu()
      }}
      className={cn(
        'bg-g-dark-blue fixed top-4 right-2 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full px-5 opacity-0 transition-all duration-500 hover:scale-105 md:h-20 md:w-20 md:px-7',
      )}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        scale: showButton || (isMobile && isOpen && !isOnTop) ? 1 : 0,
        opacity: showButton || (isMobile && isOpen && !isOnTop) ? 1 : 0,
        transition: {
          stiffness: 200,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
    >
      <div className="relative flex h-3 w-full flex-col justify-between">
        <span
          className={twMerge(
            'absolute top-0 h-0.5 w-full rounded-xl bg-white transition-all duration-500',
            isOpen && 'top-1.5 -translate-y-1/2 -rotate-45',
          )}
        />
        <span
          className={twMerge(
            'absolute bottom-0 h-0.5 w-full rounded-xl bg-white transition-all duration-500',
            isOpen && 'bottom-1.5 w-full translate-y-1/2 rotate-45',
          )}
        />
      </div>
    </motion.button>
  )
}
