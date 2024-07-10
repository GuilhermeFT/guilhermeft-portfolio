'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { twMerge } from 'tailwind-merge'

type ThemeToggleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ThemeToggleButton = ({
  className,
  ...props
}: ThemeToggleButtonProps) => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  const handleThemeChange = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      {...props}
      className={twMerge(
        'w-8 h-8 flex items-center justify-center transition-colors ease-in-out duration-300 text-custom-gray-light hover:text-custom-gray-dark dark:hover:text-gray-300',
        className,
      )}
      onClick={handleThemeChange}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  )
}
