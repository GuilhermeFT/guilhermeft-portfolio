'use client'

import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { ToggleButton } from './toggle-button'
import { paths } from './desktop-navbar'
import { cn } from '@/lib/utils'

export const MobileNavbar = () => {
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>()

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = 'fixed'
      document.body.style.overflowY = 'scroll'
    }
  }, [isMenuOpen])

  return (
    <>
      <ToggleButton isOpen={isMenuOpen} toggleMenu={handleToggleMenu} />

      <motion.div
        className={cn(
          'bg-g-dark-blue fixed top-0 left-0 z-10 flex h-dvh w-dvw items-center justify-center backdrop-blur-lg md:hidden',
          !isMenuOpen && 'hidden',
        )}
        initial={{
          y: '100%',
        }}
        animate={{
          y:
            isMenuOpen === undefined
              ? '100%'
              : isMenuOpen
                ? ['100%', 0]
                : [0, '-100%'],
          transition: {
            bounce: 0,
            duration: 0.5,
          },
        }}
        onAnimationComplete={() => {
          if (!isMenuOpen) {
            document.body.style.position = 'static'
            document.body.style.overflowY = 'auto'
          }
        }}
      >
        <nav className="flex flex-col gap-2">
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{
              bounce: 0,
              delay: isMenuOpen ? 0.4 : 0,
            }}
            className="text-center text-sm text-zinc-400 uppercase"
          >
            Menu
          </motion.span>

          <ul className="text-3xl font-bold md:text-5xl">
            <AnimatePresence>
              {isMenuOpen &&
                paths.map((path, i) => (
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
                      delay: (isMenuOpen ? 0.4 : 0) + i * 0.08,
                      bounce: 0,
                    }}
                    className="flex justify-center p-4"
                  >
                    <Link href={path.href} className="flex items-center gap-2">
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
    </>
  )
}
