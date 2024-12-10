'use client'

import { twMerge } from 'tailwind-merge'
import Typewriter from 'typewriter-effect'

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
      <Typewriter
        options={{
          cursorClassName: 'Typewriter__cursor text-g-light-blue',
        }}
        onInit={(typewriter) => {
          typewriter.typeString(children).start()
        }}
      />
    </h1>
  )
}
