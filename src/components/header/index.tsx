import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

export const Header = async () => {
  return (
    <header className="fixed z-10 flex w-full flex-col items-center gap-2 bg-gradient-to-b from-gft-background to-black/0 p-6 pb-9">
      <Link className="flex w-max" href="/">
        <Image src={logo} alt="Logo Guilherme Trindade" className="w-12" />
      </Link>

      {/* <Navbar /> */}
    </header>
  )
}
