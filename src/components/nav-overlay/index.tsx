'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { LogoLockup } from '@/components/header/logo-lockup'

const menuItems = [
  { label: 'Projetos', href: '#projects' },
  { label: 'Serviços', href: '#services' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Contato', href: '#contact' },
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

const overlayVariantsReduced = {
  closed: { opacity: 0, height: '100%', transition: { duration: 0 } },
  open: { opacity: 1, height: '100%', transition: { duration: 0 } },
}

const listVariants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.35 },
  },
}

const listVariantsReduced = {
  closed: {},
  open: {},
}

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.3, 0, 0.5, 1] as const },
  },
}

const itemVariantsReduced = {
  closed: { opacity: 1, y: 0 },
  open: { opacity: 1, y: 0 },
}

const labelVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.3, 0, 0.5, 1] as const, delay: 0.3 },
  },
}

const labelVariantsReduced = {
  closed: { opacity: 1 },
  open: { opacity: 1 },
}

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={prefersReducedMotion ? overlayVariantsReduced : overlayVariants}
      className="bg-darkest fixed inset-x-0 top-0 z-[200] overflow-hidden"
      aria-hidden={!isOpen}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Top bar — logo left, close right */}
      <div className="flex h-[var(--header-height)] items-center justify-between px-6 md:px-10">
        <LogoLockup inverted onLinkClick={onClose} />

        <button
          onClick={onClose}
          className="flex cursor-pointer items-center gap-[10px] transition-opacity duration-200 hover:opacity-50 motion-reduce:transition-none"
          aria-label="Fechar menu"
        >
          <span
            className="text-[11px] font-[600] tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-gray-mid)' }}
          >
            CLOSE
          </span>
          {/* X icon */}
          <div className="relative h-[22px] w-[22px]" aria-hidden="true">
            <i
              className="absolute inset-0 m-auto block h-[1.5px] w-full origin-center rotate-45"
              style={{ background: 'var(--color-gray-mid)' }}
            />
            <i
              className="absolute inset-0 m-auto block h-[1.5px] w-full origin-center -rotate-45"
              style={{ background: 'var(--color-gray-mid)' }}
            />
          </div>
        </button>
      </div>

      {/* Centered menu */}
      <div className="flex h-[calc(100%-var(--header-height))] flex-col items-center justify-center">
        <motion.h5
          variants={prefersReducedMotion ? labelVariantsReduced : labelVariants}
          className="text-gray-mid mb-6 tracking-[0.4em] uppercase"
        >
          Menu
        </motion.h5>

        <motion.ul
          variants={prefersReducedMotion ? listVariantsReduced : listVariants}
          className="text-center"
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.href}
              variants={
                prefersReducedMotion ? itemVariantsReduced : itemVariants
              }
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="text-gray-mid block text-5xl leading-tight font-[800] tracking-[-0.01em] transition-colors duration-200 hover:text-white motion-reduce:transition-none md:text-6xl lg:text-7xl"
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
