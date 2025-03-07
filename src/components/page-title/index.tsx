'use client'

import { twMerge } from 'tailwind-merge'

type PageTitleProps = {
  children: string
  className?: string
}

export const PageTitle = ({ className }: PageTitleProps) => {
  return (
    <h1
      className={twMerge(
        'from-g-blue to-g-light-blue h-40 w-max bg-linear-to-r from-0% to-100% bg-clip-text [font-size:_clamp(2rem,13.25vw,6.875rem)] font-normal text-transparent md:text-[6.875rem]',
        className,
      )}
    ></h1>
  )
}
