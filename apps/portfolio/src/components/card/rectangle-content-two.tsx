import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import { RectangleCardProps } from './rectangle'

type RectangleContentTwoProps = RectangleCardProps

export const RectangleContentTwo = (_: RectangleContentTwoProps) => {
  return (
    <Link
      href="/projetos"
      className="flex h-full w-full flex-col items-center justify-center gap-4 transition-all group-hover:bg-gray-950"
    >
      <div className="rounded-full bg-gray-900 p-7 animate-duration-500 animate-ease-out group-hover:animate-fade-up">
        <MoveRight className="h-24 w-24 text-gray-400 group-hover:text-white" />
      </div>
      <span className="text-3xl font-bold opacity-0 animate-delay-75 animate-duration-500 animate-ease-out group-hover:animate-fade-up group-hover:opacity-100">
        Ver Mais
      </span>
    </Link>
  )
}
