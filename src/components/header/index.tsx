'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Navbar } from '../navbar'

import logo from '@/assets/logo.svg'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()

  const isAnimateEnabled = pathname === '/'

  return (
    <motion.header
      initial={
        isAnimateEnabled && {
          opacity: 0,
          y: -100,
        }
      }
      animate={
        isAnimateEnabled && {
          opacity: 1,
          y: 0,

          transition: {
            bounce: 0,
            duration: 1.2,
            delay: 2,
            ease: 'easeInOut',
          },
        }
      }
      className="absolute z-10 flex h-20 w-full flex-col items-center justify-center gap-2 px-4 pt-6"
    >
      <div className="container flex w-full items-center justify-between">
        <Link className="flex w-max" href="/">
          <Image src={logo} alt="Logo Guilherme Trindade" className="w-12" />
        </Link>

        <Navbar />
      </div>
    </motion.header>
  )
}
