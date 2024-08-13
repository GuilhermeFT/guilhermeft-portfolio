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
        '[font-size:_clamp(2rem,13.25vw,6.875rem)] h-40 bg-gradient-to-r from-gft-purple from-0% to-gft-light-purple to-100% bg-clip-text text-transparent w-max font-bold md:text-[6.875rem]',
        className,
      )}
    >
      <Typewriter
        options={{
          cursorClassName: 'Typewriter__cursor text-gft-light-purple',
        }}
        onInit={(typewriter) => {
          typewriter.typeString(children).start()
        }}
      />
    </h1>
  )
}
