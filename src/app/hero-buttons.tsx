import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/button'

type HeroButtonsProps = {
  className?: string
}

export const HeroButtons = ({ className }: HeroButtonsProps) => {
  return (
    <div
      className={twMerge(
        'flex justify-center gap-5 self-start lg:justify-start',
        className,
      )}
    >
      <Link href="/projects">
        <Button>Ver projetos</Button>
      </Link>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/files/resume - Guilherme F. Trindade.pdf"
      >
        <Button>Visualizar Currículo</Button>
      </Link>
    </div>
  )
}
