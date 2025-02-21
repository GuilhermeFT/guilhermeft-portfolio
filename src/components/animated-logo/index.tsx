'use client'

import { twMerge } from 'tailwind-merge'

import { Logo } from './logo'
import { Text } from './text'

export const AnimatedLogo = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center gap-4',
        className,
      )}
    >
      <Logo className="h-auto w-16" />
      <Text className="" />
    </div>
  )
}
