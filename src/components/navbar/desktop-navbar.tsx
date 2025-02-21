'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const paths = [
  {
    href: '/',
    label: 'Início',
  },
  {
    href: '/about-me',
    label: 'Sobre mim',
  },
  {
    href: '/projects',
    label: 'Projetos',
  },
  {
    href: '/articles',
    label: 'Blog',
  },
]

export const DesktopNavbar = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden gap-8 md:flex">
      {paths.map(({ href, label }) =>
        href === pathname ? (
          <span key={label} className="text-g-light-blue font-light">
            {label}
          </span>
        ) : (
          <Link
            key={href}
            href={href}
            className="hover:text-g-light-gray font-light text-zinc-300 transition-colors"
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  )
}
