import { tv, type VariantProps } from 'tailwind-variants'

export type ButtonVariants = VariantProps<typeof buttonStyles>

export const buttonStyles = tv({
  base: 'flex w-max self-end rounded px-4 py-3 text-white transition-all',

  variants: {
    variant: {
      primary: 'bg-g-dark-blue hover:bg-g-blue',
      secondary:
        'border-g-dark-blue border bg-transparent hover:bg-g-dark-blue',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
