import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

import { Navbar } from '../navbar/'

export const Header = async () => {
  return (
    <header className="bg-gft-dark-gray">
      <div className="relative m-auto flex justify-between py-5 px-2 max-w-[100rem]">
        <Link className="flex w-max" href="/">
          <Image src={logo} alt="Logo Guilherme Trindade" className="w-44" />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
