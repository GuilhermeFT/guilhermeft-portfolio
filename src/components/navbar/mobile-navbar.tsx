'use client'

import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'
import { useNavigation } from '@/store/use-navigation'
import { useEffect } from 'react'
import { navLinks } from '@/utils/const'

export const MobileNavbar = () => {
  const pathname = usePathname()

  const { isOpen, toggleMenu } = useNavigation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])

  return (
    <motion.div
      className={cn(
        'bg-g-dark-blue fixed top-0 left-0 z-10 flex h-dvh w-dvw items-center justify-center backdrop-blur-lg',
      )}
      initial={{
        y: '-100%',
      }}
      animate={{
        y: isOpen === undefined ? '-100%' : isOpen ? ['100%', 0] : [0, '-100%'],
        transition: {
          bounce: 0,
          duration: 0.5,
        },
      }}
    >
      <nav className="flex flex-col gap-2">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            bounce: 0,
            delay: isOpen ? 0.4 : 0,
          }}
          className="text-center text-sm text-zinc-400 uppercase"
        >
          Menu
        </motion.span>

        <ul className="text-3xl font-bold md:text-5xl">
          <AnimatePresence>
            {isOpen &&
              navLinks.map((path, i) => (
                <motion.li
                  key={path.href}
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0,
                      duration: 0.2,
                    },
                  }}
                  transition={{
                    delay: (isOpen ? 0.4 : 0) + i * 0.08,
                    bounce: 0,
                  }}
                  className="flex justify-center p-4"
                >
                  <Link
                    href={path.href}
                    className="flex items-center gap-2"
                    onClick={isOpen && toggleMenu}
                  >
                    <span
                      className={twMerge(
                        'text-white',
                        pathname === path.href && 'text-g-blue',
                      )}
                    >
                      {path.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
      </nav>
    </motion.div>
  )
}
