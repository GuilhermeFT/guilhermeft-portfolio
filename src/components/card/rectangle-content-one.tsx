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
        className="object-cover object-center transition-transform group-hover:scale-110"
      />

      <Link
        href={href || `/projetos/${id}`}
        className="w-full h-full absolute transition-all group-hover:bg-zinc-950 group-hover:bg-opacity-85"
      >
        <div className="p-4 pb-16 flex flex-col gap-4 bg-gradient-to-b from-zinc-950 to-transparent transition-all lg:pl-16 lg:pt-10 lg:pr-24">
          <time
            dateTime="qws"
            className="block font-light text-gft-light-gray text-sm animate-duration-500 animate-ease-out group-hover:animate-fade-up"
          >
            {project?.year_started} — {project?.year_finished}
          </time>
          <h3 className="font-bold text-4xl animate-duration-500 animate-ease-out animate-delay-75 break-md:words lg:max-w-80 group-hover:animate-fade-up">
            {project?.project_name}
          </h3>

          <button className="hidden animate-duration-500 items-center gap-2 text-gft-light-gray animate-delay-150 group-hover:flex group-hover:animate-fade-right">
            <span>Veja mais</span>
            <MoveRight />
          </button>
        </div>
      </Link>
    </>
  )
}
