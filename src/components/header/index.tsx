'use client'

import { useEffect, useState } from 'react'
import { NavOverlay } from '@/components/nav-overlay'
import { LogoLockup } from './logo-lockup'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
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
        className="fixed top-0 right-0 left-0 z-[100]"
        style={{
          background: isScrolled
            ? 'var(--color-header-scrolled)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'background 300ms ease, backdrop-filter 300ms ease',
        }}
      >
        <div className="flex h-[var(--header-height)] items-center justify-between px-6 md:px-10">
          <LogoLockup />

          {/* MENU button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex cursor-pointer items-center gap-[10px] transition-opacity duration-200 hover:opacity-50"
            aria-label="Open menu"
          >
            <span
              className="text-[11px] font-[600] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-editorial-ink)' }}
            >
              MENU
            </span>
            {/* Hamburger — 3 lines × 22px wide × 1.5px tall, 5px gap */}
            <div className="relative h-[22px] w-[22px]">
              <i
                className="absolute top-[2px] right-0 left-0 block h-[1.5px]"
                style={{ background: 'var(--color-editorial-ink)' }}
              />
              <i
                className="absolute top-[9px] right-0 left-0 block h-[1.5px]"
                style={{ background: 'var(--color-editorial-ink)' }}
              />
              <i
                className="absolute top-[16px] right-0 left-0 block h-[1.5px]"
                style={{ background: 'var(--color-editorial-ink)' }}
              />
            </div>
          </button>
        </div>
      </header>

      <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
