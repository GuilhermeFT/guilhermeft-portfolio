import Link from 'next/link'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-g-dark-gray border-t py-4">
      <p className="text-center text-sm">
        © {year} - Código fonte disponível no{' '}
        <Link
          href="https://github.com/GuilhermeFT/guilhermeft-portfolio"
          className="text-blue-400 underline transition-colors hover:text-blue-500"
        >
          GitHub
        </Link>
      </p>
    </footer>
  )
}
