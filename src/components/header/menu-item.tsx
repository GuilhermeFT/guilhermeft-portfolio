'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuItemProps = {
  href: string
  children: React.ReactNode
}

export const MenuItem = ({ href, children }: MenuItemProps) => {
  const pathname = usePathname()

  return (
    <li>
      {pathname === href ? (
        <span className="text-custom-blue-upper-medium">{children}</span>
      ) : (
        <Link
          href={href}
          className="text-custom-gray-dark transition-colors hover:text-gray-400 dark:text-custom-gray-light"
        >
          {children}
        </Link>
      )}
    </li>
  )
}
