'use client'

import { ReactElement } from 'react'

type ScrollToButtonProps = {
  elementId: string
  children: ReactElement
  className?: string
}

export const ScrollToButton = ({
  elementId,
  children,
  className
}: ScrollToButtonProps) => {
  const handleClick = () => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
  }
  return <button onClick={handleClick} className={className}>{children}</button>
}
