import { Section } from '@/components/section'

export default async function Contact() {
  return (
    <main className="flex min-h-dvh items-center">
      <Section className="container flex max-w-4xl flex-1 flex-col gap-6 pt-36 pb-32">
        <header className="grid gap-4 text-center">
          <h3 className="gradient-text text-3xl font-bold uppercase md:text-5xl">
            Vamos Conversar?
          </h3>
          <p className="text-lg text-zinc-400 md:text-xl">
            Estou disponível para novos projetos e oportunidades. Entre em
            contato e vamos discutir como posso ajudar a transformar suas ideias
            em realidade.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-8">
          <div className="grid gap-4 place-self-center text-center">
            <h4 className="text-2xl font-semibold text-white">E-mail</h4>
            <a
              href="mailto:contato@guilhermeft.dev"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-g-light-gray text-lg font-normal">
                contato@guilhermeft.dev
              </p>
            </a>
            <a
              href="mailto:contato@guilhermeft.dev"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-g-light-gray text-lg font-normal">
                guilhermetrind12@gmail.com
              </p>
            </a>
          </div>

          <div className="grid gap-4 place-self-center text-center">
            <h4 className="text-2xl font-semibold text-white">Telefone</h4>
            <a
              href="tel:+5566992433225"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-g-light-gray text-lg font-normal">
                +55 (66) 99243-3225
              </p>
            </a>
          </div>

          <div className="grid gap-4 text-center">
            <h4 className="text-2xl font-semibold text-white">Redes Sociais</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/guilhermeft/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-g-light-gray text-lg font-normal">
                  LinkedIn
                </p>
              </a>
              <a
                href="https://www.github.com/guilhermeft/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-g-light-gray text-lg font-normal">GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
