import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionProps = HTMLAttributes<HTMLElement>

export const Section = ({ className, children, ...props }: SectionProps) => (
  <section
    {...props}
    className={twMerge('border-b border-b-gray-800 px-2', className)}
  >
    {children}
  </section>
)
