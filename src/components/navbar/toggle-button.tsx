import { twMerge } from 'tailwind-merge'

type ToggleButtonProps = {
  isOpen?: boolean
  toggleMenu?: () => void
}

export const ToggleButton = ({ isOpen, toggleMenu }: ToggleButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="absolute right-10 z-30 flex h-10 w-10 items-center justify-center p-2"
    >
      <div className="relative flex h-3 w-full flex-col justify-between">
        <span
          className={twMerge(
            'absolute top-0 h-0.5 w-full rounded-xl bg-white transition-all duration-500',
            isOpen && 'top-1.5 -translate-y-1/2 -rotate-45',
          )}
        />
        <span
          className={twMerge(
            'absolute bottom-0 h-0.5 w-3/4 rounded-xl bg-white transition-all duration-500',
            isOpen && 'bottom-1.5 w-full translate-y-1/2 rotate-45',
          )}
        />
      </div>
    </button>
  )
}
