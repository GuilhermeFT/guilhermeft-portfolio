import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

import { Navbar } from '../navbar'

export const Header = async () => {
  return (
    <header className="absolute flex z-10 h-20 w-full flex-col items-center justify-center gap-2 px-4 pt-6">
      <div className="container flex w-full items-center justify-between">
        <Link className="flex w-max" href="/">
          <Image src={logo} alt="Logo Guilherme Trindade" className="w-12" />
        </Link>

        <Navbar />
      </div>
    </header>
  )
}
