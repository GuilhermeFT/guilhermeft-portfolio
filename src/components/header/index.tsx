'use client'

import { useEffect, useState } from 'react'
import { NavOverlay } from '@/components/nav-overlay'
import { LogoLockup } from './logo-lockup'

const navLinks = [
  { label: 'Projetos', href: '#projects' },
  { label: 'Serviços', href: '#services' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Contato', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

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

  // Scroll spy — highlight active nav link based on visible section
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        }
      },
      // Active when section occupies the middle band of the viewport
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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

          {/* Desktop navigation — hidden on mobile, shown on large screens */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative pb-[3px] text-[13px] font-[600] tracking-[0.02em] transition-colors duration-200 motion-reduce:transition-none"
                  style={{
                    color: isActive
                      ? 'var(--color-editorial-ink)'
                      : 'var(--color-editorial-muted)',
                  }}
                >
                  {link.label}
                  {/* Animated underline: full when active, grows on hover */}
                  <span
                    className="absolute bottom-0 left-0 h-[1px] transition-[width] duration-300 ease-out group-hover:w-full motion-reduce:transition-none"
                    style={{
                      background: 'var(--color-editorial-ink)',
                      width: isActive ? '100%' : '0%',
                    }}
                  />
                </a>
              )
            })}
          </nav>

          {/* MENU button — visible on all screen sizes */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex cursor-pointer items-center gap-[10px] transition-opacity duration-200 hover:opacity-50 motion-reduce:transition-none"
            aria-label="Abrir menu"
          >
            <span
              className="text-[11px] font-[600] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-editorial-ink)' }}
            >
              MENU
            </span>
            {/* Hamburger — 3 lines × 22px wide × 1.5px tall, 5px gap */}
            <div className="relative h-[22px] w-[22px]" aria-hidden="true">
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
