import Image from 'next/image'
import Link from 'next/link'
import { HubCard } from '@/components/hub-card'
import { ToolLinks } from '@/utils/enum'

import logo from '@/assets/logo.svg'

import profilePicture from '@/assets/images/profile.png'
import cardBackgroundOne from '@/assets/images/card-background-1.png'
import cardBackgroundTwo from '@/assets/images/card-background-2.png'

export default function HubPage() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <header className="flex items-center justify-between p-6">
        <Link href="/">
          <Image src={logo} alt="Logo Guilherme Trindade" className="w-12" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <h2 className="text-lg font-medium text-white">
              Guilherme Trindade
            </h2>
            <p className="text-sm text-gray-400">Software Developer</p>
          </div>
          <Image
            src={profilePicture}
            alt="Guilherme Trindade"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </header>

      <main className="flex-1 px-6 pt-8 pb-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8">
          <HubCard
            title="Portfólio Pessoal"
            subtitle="MINHA JORNADA"
            href={ToolLinks.PORTFOLIO}
            imageSrc={cardBackgroundTwo}
            alt="My portfolio"
          />

          <HubCard
            title="Contrate-me"
            subtitle="MINHA EMPRESA"
            href={ToolLinks.CREATE_SITE}
            imageSrc={cardBackgroundOne}
            alt="Site creation"
          />
        </div>
      </main>

      <footer className="text-g-light-gray py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} GTDEV Studio | CNPJ:
            43.673.320/0001-15
          </p>
          <p className="mt-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Política de Privacidade
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
