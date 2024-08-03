import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'
import { navLinks } from '@/utils/const'
import { GitHub } from '@/components/icons/github'

import { ThemeToggleButton } from '../theme-toggle-button'

import { MenuItem } from './menu-item'

export const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center grid-rows-1 gap-4 py-5 px-4 md:px-20 md:grid-cols-3">
      <Link
        href="/"
        className="z-10 w-max mx-auto col-span-2 md:row-start-1 md:col-start-1 md:col-span-1 md:mx-0"
      >
        <Image src={logo} alt="Logo Guilherme Trindade" />
      </Link>

      <nav className="flex-1 flex justify-center col-span-2 md:col-span-3 md:row-start-1 md:col-start-1">
        <ul className="flex gap-10 items-center md:gap-14">
          {navLinks.map(({ href, label }) => (
            <MenuItem key={href} href={href}>
              {label}
            </MenuItem>
          ))}
        </ul>
      </nav>

      <div className="hidden ml-auto pl-6 border-l border-l-gray-400 transition-colors gap-6 md:flex row-start-1 col-start-3">
        <ThemeToggleButton className="" />

        <Link
          href="https://github.com/GuilhermeFT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="text-custom-gray-dark transition-colors hover:text-gray-400 dark:text-custom-gray-light" />
        </Link>
      </div>
    </header>
  )
}
