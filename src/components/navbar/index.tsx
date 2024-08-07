'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { navLinks } from '@/utils/const'

import { MenuItem } from './menu-item'
import { NavButtons } from './nav-buttons'
import { ToggleButton } from './toggle-button'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <>
      <ToggleButton isOpen={isMenuOpen} toggleMenu={handleToggleMenu} />

      <nav
        className={twMerge(
          'hidden absolute z-20 top-full h-[calc(100dvh-5rem)] left-0 w-full px-4 pb-8 bg-gft-background flex-col items-center my-auto',
          isMenuOpen && 'flex',
          isMenuOpen && 'border-t border-t-zinc-700',

          'md:flex md:flex-row md:h-auto md:bg-transparent md:static md:p-0 md:w-max md:flex-1 md:border-t-0',
        )}
      >
        <ul
          className={twMerge(
            'w-full m-auto mt-[calc(50%-5rem)]',
            'md:m-0 md:flex md:gap-20 md:justify-center',
          )}
        >
          {navLinks.map(({ href, label }) => (
            <MenuItem key={href} href={href}>
              {label}
            </MenuItem>
          ))}
        </ul>

        <NavButtons />
      </nav>
    </>
  )
}
