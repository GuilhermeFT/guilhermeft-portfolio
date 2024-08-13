import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import { RectangleCardProps } from './rectangle'

type RectangleContentTwoProps = RectangleCardProps
export const RectangleContentTwo = ({}: RectangleContentTwoProps) => {
  return (
    <Link
      href="/projetos"
      className="w-full h-full flex flex-col gap-4 justify-center items-center transition-all group-hover:bg-zinc-950"
    >
      <div className="rounded-full p-7 bg-zinc-900 animate-duration-500 animate-ease-out group-hover:animate-fade-up">
        <MoveRight className="w-24 h-24 text-zinc-400 group-hover:text-white" />
      </div>
      <span className="font-bold text-4xl animate-duration-500 animate-ease-out animate-delay-75 opacity-0 group-hover:opacity-100 group-hover:animate-fade-up">
        Ver Mais
      </span>
    </Link>
  )
}
