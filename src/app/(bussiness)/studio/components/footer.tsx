import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-g-dark-gray py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="text-g-light">
          © {new Date().getFullYear()} GTDEV | CNPJ: 43.673.320/0001-15
        </p>
        <p className="mt-2">
          <Link
            href="/privacy-policy"
            className="text-g-light hover:text-g-light-blue transition-colors"
          >
            Política de Privacidade
          </Link>
        </p>
      </div>
    </footer>
  )
}
