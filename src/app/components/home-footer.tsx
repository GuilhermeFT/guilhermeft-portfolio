import Link from 'next/link'
import { getAllProjects } from '@/services/payload/projects'

export async function HomeFooter() {
  const projects = await getAllProjects(5)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-10 pt-[74px] pb-[76px] md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Contact */}
          <div>
            <h3 className="mb-4 font-[800] text-foreground">
              Informações de contato —
            </h3>
            <p className="text-small text-muted-foreground mb-4">
              Fique à vontade para entrar em contato a qualquer momento. Prefiro
              e-mail, mas respondo a tudo.
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="mailto:contato@guilhermeft.dev"
                  className="text-small text-foreground font-[500] transition-colors duration-200 hover:text-gray-mid"
                >
                  contato@guilhermeft.dev
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5566992433225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-foreground font-[500] transition-colors duration-200 hover:text-gray-mid"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2 — Recent projects */}
          <div>
            <h5 className="mb-4">Projetos recentes —</h5>
            <ul className="space-y-1">
              {projects.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-small text-foreground font-[500] transition-colors duration-200 hover:text-gray-mid"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/#projects"
                  className="text-small font-[800] uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:text-gray-mid"
                >
                  Todos os projetos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Availability */}
          <div>
            <h5 className="mb-4">Disponibilidade —</h5>
            <p className="text-small text-muted-foreground">
              Atualmente trabalhando em projetos selecionados. Aceito freelas e
              consultorias pontuais. Mande uma mensagem e conversamos.
            </p>
          </div>

          {/* Col 4 — Social */}
          <div>
            <h5 className="mb-4">Me siga em —</h5>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://github.com/GuilhermeFT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-foreground font-[500] transition-colors duration-200 hover:text-gray-mid"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/guilhermeft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-foreground font-[500] transition-colors duration-200 hover:text-gray-mid"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tabnews.com.br/guilhermeft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-foreground font-[500] transition-colors duration-200 hover:text-gray-mid"
                >
                  TabNews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className="flex items-center gap-3 border-t border-border py-6">
          <Link
            href="/"
            aria-label="Voltar ao topo"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-border text-sm font-[800] uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:bg-surface"
          >
            ↑
          </Link>
          <p className="text-small text-muted-foreground">
            © {year} Guilherme Trindade. Feito com ♥ no Brasil.
          </p>
        </div>
      </div>
    </footer>
  )
}
