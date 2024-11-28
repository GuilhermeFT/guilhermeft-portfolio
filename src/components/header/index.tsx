import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

import { Navbar } from '../navbar/'

export const Header = async () => {
  return (
    <header className="flex flex-col items-center gap-2 p-6 w-full bg-gradient-to-b from-gft-background to-black/0 fixed">
      <Link className="flex w-max" href="/">
        <Image src={logo} alt="Logo Guilherme Trindade" className="w-12" />
      </Link>

      {/* <Navbar /> */}
    </header>
  )
}
