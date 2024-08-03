'use client'

import Typewriter from 'typewriter-effect'

type PageTitleProps = {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="[font-size:_clamp(2rem,13.25vw,6.875rem)] h-40 bg-gradient-to-r from-custom-blue-medium from-0% to-custom-blue to-100% bg-clip-text text-transparent w-max font-bold md:text-[6.875rem]">
      <Typewriter
        options={{
          cursorClassName: 'Typewriter__cursor text-custom-blue',
        }}
        onInit={(typewriter) => {
          typewriter.typeString(title).start()
        }}
      />
    </h1>
  )
}
