'use client'

import { twMerge } from 'tailwind-merge'

type PageTitleProps = {
  children: string
  className?: string
}

export const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <h1
      className={twMerge(
        'h-40 w-max bg-gradient-to-r from-g-blue from-0% to-g-light-blue to-100% bg-clip-text font-normal text-transparent [font-size:_clamp(2rem,13.25vw,6.875rem)] md:text-[6.875rem]',
        className,
      )}
    >
      
    </h1>
  )
}
