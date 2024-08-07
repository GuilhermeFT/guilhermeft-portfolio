'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type MenuItemProps = {
  href: string
  children: React.ReactNode
}

export const MenuItem = ({ href, children }: MenuItemProps) => {
  const pathname = usePathname()

  return (
    <li
      className={twMerge(
        'px-2 py-4 text-center text-4xl font-bold text-gft-light-gray',
        'md:font-normal md:text-base md:p-0',
      )}
    >
      {pathname === href ? (
        <span className="text-white">{children}</span>
      ) : (
        <Link className="transition-colors hover:text-white" href={href}>
          {children}
        </Link>
      )}
    </li>
  )
}
