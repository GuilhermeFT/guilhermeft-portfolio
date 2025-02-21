import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import { RectangleCardProps } from './rectangle'

type SquareContentTwoProps = RectangleCardProps

export const SquareContentTwo = ({}: SquareContentTwoProps) => {
  return (
    <Link
      href="/projetos"
      className="flex h-full w-full flex-col items-center justify-center gap-4 transition-all group-hover:bg-zinc-950"
    >
      <div className="animate-duration-500 animate-ease-out group-hover:animate-fade-up rounded-full bg-zinc-900 p-7">
        <MoveRight className="h-24 w-24" />
      </div>
      <span className="animate-delay-75 animate-duration-500 animate-ease-out group-hover:animate-fade-up text-4xl font-bold opacity-0 group-hover:opacity-100">
        Ver Mais
      </span>
    </Link>
  )
}
