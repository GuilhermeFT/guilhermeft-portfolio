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
        className="absolute h-full w-full transition-all group-hover:bg-gray-950 group-hover:bg-opacity-85"
      >
        <div className="flex flex-col gap-4 bg-gradient-to-b from-gray-900 to-transparent p-4 pb-16 transition-all lg:pl-16 lg:pr-24 lg:pt-10">
          <time
            dateTime="qws"
            className="block text-sm font-light text-gft-light-gray animate-duration-500 animate-ease-out group-hover:animate-fade-up"
          >
            {project?.year_started} — {project?.year_finished}
          </time>
          <h3 className="break-md:words text-4xl font-bold animate-delay-75 animate-duration-500 animate-ease-out group-hover:animate-fade-up lg:max-w-80">
            {project?.project_name}
          </h3>

          <button className="hidden items-center gap-2 text-gft-light-gray animate-delay-150 animate-duration-500 group-hover:flex group-hover:animate-fade-right">
            <span>Veja mais</span>
            <MoveRight />
          </button>
        </div>
      </Link>
    </>
  )
}
