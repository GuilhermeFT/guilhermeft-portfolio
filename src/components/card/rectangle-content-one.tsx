import { PrismicNextImage } from '@prismicio/next'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import { RectangleCardProps } from './rectangle'

type RectangleContentOneProps = RectangleCardProps
export const RectangleContentOne = ({
  href,
  id,
  project,
}: RectangleContentOneProps) => {
  return (
    <>
      <PrismicNextImage
        field={project?.banner}
        quality={100}
        className="h-full object-cover object-center transition-transform group-hover:scale-110"
      />

      <Link
        href={href || `/projetos/${id}`}
        className="group-hover:bg-opacity-85 absolute h-full w-full transition-all group-hover:bg-gray-950"
      >
        <div className="flex flex-col gap-4 bg-linear-to-b from-gray-900 to-transparent p-4 pb-16 transition-all lg:pt-10 lg:pr-24 lg:pl-16">
          <time
            dateTime="qws"
            className="text-g-light-gray animate-duration-500 animate-ease-out group-hover:animate-fade-up block text-sm font-light"
          >
            {project?.year_started} — {project?.year_finished}
          </time>
          <h3 className="break-md:words animate-delay-75 animate-duration-500 animate-ease-out group-hover:animate-fade-up text-4xl font-bold lg:max-w-80">
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
