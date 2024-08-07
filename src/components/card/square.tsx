import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const SquareCard = () => {
  return (
    <div className="group aspect-square w-full bg-zinc-900 relative flex justify-center items-center overflow-hidden">
      <Image
        fill
        quality={100}
        alt="Imagem de um projeto"
        className="object-cover object-center transition-transform group-hover:scale-110"
        src="https://watracz.com/images/tile_basicux.jpg"
      />
      <Link
        href="#"
        className="w-full h-full absolute transition-all group-hover:bg-zinc-950 group-hover:bg-opacity-85"
      >
        <div className="p-4 pb-16 flex flex-col gap-4 bg-gradient-to-b from-zinc-950 to-transparent transition-all md:pl-16 md:pt-10 md:pr-24">
          <time
            dateTime="qws"
            className="block font-light text-gft-light-gray text-sm animate-duration-500 animate-ease-out group-hover:animate-fade-up"
          >
            2029 — 2030
          </time>
          <h3 className="font-bold text-4xl animate-duration-500 animate-ease-out animate-delay-75 break-words group-hover:animate-fade-up">
            Basic UX — design resources for InVision Studio
          </h3>

          <button className="hidden animate-duration-500 items-center gap-2 text-gft-light-gray animate-delay-150 group-hover:flex group-hover:animate-fade-right">
            <span>Veja mais</span>
            <MoveRight />
          </button>
        </div>
      </Link>
    </div>
  )
}
