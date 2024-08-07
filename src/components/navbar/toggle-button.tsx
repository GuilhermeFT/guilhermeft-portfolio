import { twMerge } from 'tailwind-merge'

type ToggleButtonProps = {
  isOpen?: boolean
  toggleMenu?: () => void
}

export const ToggleButton = ({ isOpen, toggleMenu }: ToggleButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="p-2 w-10 h-10 flex justify-center items-center  md:hidden"
    >
      <div className="relative flex flex-col w-full h-3 justify-between">
        <span
          className={twMerge(
            'absolute top-0 w-full h-0.5 bg-white rounded-xl transition-all duration-500',
            isOpen && 'top-1.5 -rotate-45 -translate-y-1/2',
          )}
        />
        <span
          className={twMerge(
            'absolute bottom-0 w-3/4 h-0.5 bg-white rounded-xl transition-all duration-500',
            isOpen && 'w-full bottom-1.5 rotate-45 translate-y-1/2',
          )}
        />
      </div>
    </button>
  )
}
