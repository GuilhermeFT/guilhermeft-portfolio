import { ButtonHTMLAttributes } from 'react'

import { buttonStyles, type ButtonVariants } from './types'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  const styles = buttonStyles({
    className,
    variant,
  })

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  )
}
