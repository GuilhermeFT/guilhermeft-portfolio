import Link from 'next/link'

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-g-dark-blue text-lg font-bold md:text-xl"
          >
            GTDEV
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link
              href="#services"
              className="text-g-medium-gray hover:text-g-blue text-sm font-medium transition-colors md:text-base"
            >
              Serviços
            </Link>
            <Link
              href="#process"
              className="text-g-medium-gray hover:text-g-blue text-sm font-medium transition-colors md:text-base"
            >
              Processo
            </Link>
            <Link
              href="#contact"
              className="text-g-medium-gray hover:text-g-blue text-sm font-medium transition-colors md:text-base"
            >
              Contato
            </Link>
          </nav>
          <Link
            href="#contact"
            className="bg-g-blue hover:bg-g-dark-blue rounded-full px-4 py-2 text-sm font-medium text-white transition-all md:text-base"
          >
            Iniciar Projeto
          </Link>
        </div>
      </div>
    </header>
  )
}
