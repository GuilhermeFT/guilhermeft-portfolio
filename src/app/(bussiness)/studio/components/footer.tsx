import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-foreground py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="text-muted">
          © {new Date().getFullYear()} GTDEV Studio | CNPJ: 43.673.320/0001-15
        </p>
        <p className="mt-2">
          <Link
            href="/privacy-policy"
            className="text-muted hover:text-accent-light transition-colors"
          >
            Política de Privacidade
          </Link>
        </p>
      </div>
    </footer>
  )
}
