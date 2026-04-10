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
          <span key={label} className="text-foreground font-medium">
            {label}
          </span>
        ) : (
          <Link
            key={href}
            href={href}
            className="text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  )
}
