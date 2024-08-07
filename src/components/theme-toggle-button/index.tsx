'use client'

import { LoaderCircle, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ThemeToggleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ThemeToggleButton = ({
  className,
  ...props
}: ThemeToggleButtonProps) => {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isDark = theme === 'dark'

  const handleThemeChange = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return isClient ? (
    <button
      {...props}
      className={twMerge(className)}
      onClick={handleThemeChange}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  ) : (
    <div className="w-5 h-5">
      <LoaderCircle />
    </div>
  )
}
