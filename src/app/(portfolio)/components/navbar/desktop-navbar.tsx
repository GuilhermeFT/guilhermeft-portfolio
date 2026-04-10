'use client'

import { navLinks } from '@/utils/const'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const DesktopNavbar = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden gap-8 md:flex">
      {navLinks.map(({ href, label }) =>
        href === pathname ? (
          <span key={label} className="text-accent-light font-light">
            {label}
          </span>
        ) : (
          <Link
            key={href}
            href={href}
            className="hover:text-muted-foreground text-muted-foreground/60 font-light transition-colors"
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  )
}
