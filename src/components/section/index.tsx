import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionProps = HTMLAttributes<HTMLElement>

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section {...props} className={twMerge('px-2', className)}>
      {children}
    </section>
  )
}
