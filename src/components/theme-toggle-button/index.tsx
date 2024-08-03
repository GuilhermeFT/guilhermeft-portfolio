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
      className={twMerge(
        'w-5 h-5 flex items-center justify-center text-custom-gray-dark hover:text-gray-400 transition-colors dark:text-custom-gray-light',
        className,
      )}
      onClick={handleThemeChange}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  ) : (
    <div className="w-5 h-5">
      <LoaderCircle className="animate-spin w-5 h-5 text-custom-gray-light" />
    </div>
  )
}
