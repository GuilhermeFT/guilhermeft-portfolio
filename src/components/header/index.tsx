'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NavOverlay } from '@/components/nav-overlay'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        style={{
          background: 'var(--color-overlay-white-95)',
          transitionTimingFunction: 'var(--ease-default)',
        }}
        className={`fixed left-0 right-0 top-0 z-20 transition-[padding] duration-[400ms] ${
          isScrolled ? 'py-2' : 'py-0'
        }`}
      >
        <div className="flex h-[var(--header-height)] items-center justify-between px-[14px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-[13px] font-[800] uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:text-gray-mid"
          >
            GUILHERME FT
          </Link>

          {/* MENU button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex cursor-pointer items-center gap-2"
            aria-label="Abrir menu"
          >
            <span className="text-[13px] font-[800] uppercase tracking-[0.2em] text-foreground">
              MENU
            </span>
            {/* Hamburger icon */}
            <div className="relative h-[22px] w-[22px]">
              <i className="absolute left-0 right-0 top-[3px] block h-[3px] bg-foreground" />
              <i className="absolute left-0 right-0 top-[10px] block h-[3px] bg-foreground" />
              <i className="absolute bottom-[2px] left-0 right-0 block h-[3px] bg-foreground" />
            </div>
          </button>
        </div>
      </header>

      <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
