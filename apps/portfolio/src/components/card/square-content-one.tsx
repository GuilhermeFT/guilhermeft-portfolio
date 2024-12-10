import { PrismicNextImage } from '@prismicio/next'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import { SquareCardProps } from './square'

type SquareContentOneProps = SquareCardProps

export const SquareContentOne = ({
  href,
  id,
  project,
}: SquareContentOneProps) => {
  return (
    <>
      <PrismicNextImage
        alt=""
        field={project?.banner}
        quality={100}
        className="object-cover object-center opacity-50 transition-transform group-hover:scale-110"
      />

      <Link
        href={href || `/projects/${id}`}
        className="absolute h-full w-full transition-all group-hover:bg-zinc-950 group-hover:bg-opacity-85"
      >
        <div className="flex flex-col gap-4 bg-gradient-to-b from-zinc-950 to-transparent p-4 transition-all lg:pl-10 lg:pr-12 lg:pt-8">
          <span className="text-g-light-gray block text-sm font-light animate-duration-500 animate-ease-out group-hover:animate-fade-up">
            {project?.year_started} — {project?.year_finished}
          </span>
          <h3 className="break-md:words text-2xl font-bold animate-delay-75 animate-duration-500 animate-ease-out group-hover:animate-fade-up lg:max-w-80">
            {project?.project_name}
          </h3>

          <button className="text-g-light-gray hidden items-center gap-2 animate-delay-150 animate-duration-500 group-hover:flex group-hover:animate-fade-right">
            <span>Veja mais</span>
            <MoveRight />
          </button>
        </div>
      </Link>
    </>
  )
}
