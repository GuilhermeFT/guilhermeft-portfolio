import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted-foreground text-sm">
          © {year} Guilherme Trindade
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/GuilhermeFT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/guilhermeft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Contato"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
