import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

import { ThemeToggleButton } from '../theme-toggle-button'
import { GitHub } from '../icons/github'

type NavButtonsProps = {
  className?: string
}

export const NavButtons = ({ className }: NavButtonsProps) => {
  return (
    <div
      className={twMerge(
        'flex justify-center min-w-44 text-gft-light-gray',
        className,
        'md:justify-end',
      )}
    >
      <div className="flex justify-center gap-4 w-max md:pl-4 md:border-l md:border-l-gft-light-gray">
        <ThemeToggleButton className="transition-colors hover:text-white" />

        <Link
          className="flex w-max transition-colors hover:text-white"
          href="https://github.com/GuilhermeFT"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </Link>
      </div>
    </div>
  )
}
