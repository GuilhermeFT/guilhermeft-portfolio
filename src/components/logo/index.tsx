'use client'

import { twMerge } from 'tailwind-merge'

import { Logo } from './logo'
import { Text } from './text'

export const AnimatedLogo = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 justify-center items-center',
        className,
      )}
    >
      <Logo className="w-16 h-auto" />
      <Text className="" />
    </div>
  )
}
