'use client'

import { ReactElement } from 'react'

type ScrollToButtonProps = {
  elementId: string
  children: ReactElement
}

export const ScrollToButton = ({
  elementId,
  children,
}: ScrollToButtonProps) => {
  const handleClick = () => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
  }
  return <button onClick={handleClick}>{children}</button>
}
