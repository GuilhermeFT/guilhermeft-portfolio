'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

const menuItems = [
  { label: 'Projetos', href: '/#projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Artigos', href: '/articles' },
  { label: 'Contato', href: '/contact' },
]

const overlayVariants = {
  closed: {
    height: '0%',
    transition: { duration: 0.4, ease: [0.3, 0, 0.5, 1] as const },
  },
  open: {
    height: '100%',
    transition: { duration: 0.5, ease: [0.3, 0, 0.5, 1] as const, delay: 0.1 },
  },
}

const listVariants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.35 },
  },
}

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.3, 0, 0.5, 1] as const },
  },
}

const labelVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.3, 0, 0.5, 1] as const, delay: 0.3 },
  },
}

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={overlayVariants}
      className="fixed inset-x-0 top-0 z-25 overflow-hidden bg-darkest"
      aria-hidden={!isOpen}
    >
      {/* Top bar — logo left, close right */}
      <div className="flex h-[var(--header-height)] items-center justify-between px-[14px]">
        <Link
          href="/"
          onClick={onClose}
          className="text-[13px] font-[800] uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:text-gray-mid"
        >
          GUILHERME FT
        </Link>

        <button
          onClick={onClose}
          className="flex cursor-pointer items-center gap-2"
          aria-label="Fechar menu"
        >
          <span className="text-[13px] font-[800] uppercase tracking-[0.2em] text-gray-mid">
            FECHAR
          </span>
          {/* X icon */}
          <div className="relative h-[22px] w-[22px]">
            <i className="absolute inset-0 m-auto block h-[3px] w-full origin-center rotate-45 bg-gray-mid" />
            <i className="absolute inset-0 m-auto block h-[3px] w-full origin-center -rotate-45 bg-gray-mid" />
          </div>
        </button>
      </div>

      {/* Centered menu */}
      <div className="flex h-[calc(100%-var(--header-height))] flex-col items-center justify-center">
        <motion.h5
          variants={labelVariants}
          className="mb-6 uppercase tracking-[0.4em] text-gray-mid"
        >
          Menu
        </motion.h5>

        <motion.ul variants={listVariants} className="text-center">
          {menuItems.map((item) => (
            <motion.li key={item.href} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-[2.125rem] font-[800] leading-[2.8125rem] tracking-[-0.01em] text-gray-mid transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}
