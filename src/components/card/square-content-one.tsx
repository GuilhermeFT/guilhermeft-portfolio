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
        className="group-hover:bg-opacity-85 absolute h-full w-full transition-all group-hover:bg-zinc-950"
      >
        <div className="flex flex-col gap-4 bg-linear-to-b from-zinc-950 to-transparent p-4 transition-all lg:pt-8 lg:pr-12 lg:pl-10">
          <span className="text-g-light-gray animate-duration-500 animate-ease-out group-hover:animate-fade-up block text-sm font-light">
            {project?.year_started} — {project?.year_finished}
          </span>
          <h3 className="break-md:words animate-delay-75 animate-duration-500 animate-ease-out group-hover:animate-fade-up text-2xl font-bold lg:max-w-80">
            {project?.project_name}
          </h3>

          <button className="text-g-light-gray animate-delay-150 animate-duration-500 group-hover:animate-fade-right hidden items-center gap-2 group-hover:flex">
            <span>Veja mais</span>
            <MoveRight />
          </button>
        </div>
      </Link>
    </>
  )
}
