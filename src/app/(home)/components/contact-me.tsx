import { Section } from '@/components/section'

export const ContactMe = () => {
  return (
    <Section id="contact-me" className="pb-32">
      <div className="container mx-auto grid gap-4 px-4 py-8 text-center">
        <header className="grid gap-2">
          <h3 className="gradient-text text-2xl font-normal uppercase md:text-4xl">
            Vamos Conversar?
          </h3>
        </header>

        <div className="grid gap-8">
          <div className="grid gap-2">
            <h4 className="gradient-text text-lg font-normal">E-mail</h4>
            <a
              href="mailto:contato@guilhermeft.dev"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-g-light-gray text-base font-normal">
                contato@guilhermeft.dev
              </p>
            </a>
            <a
              href="mailto:contato@guilhermeft.dev"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-g-light-gray text-base font-normal">
                guilhermetrind12@gmail.com
              </p>
            </a>
          </div>
          <div className="grid gap-2">
            <h4 className="gradient-text text-lg font-normal">Telefone</h4>
            <a
              href="tel:+5511999999999"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-g-light-gray text-base font-normal">
                +55 (66) 99243-3225
              </p>
            </a>
          </div>
          <div className="grid gap-2">
            <h4 className="gradient-text text-lg font-normal">Redes Sociais</h4>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/guilhermeft/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-g-light-gray text-base font-normal">
                  LinkedIn
                </p>
              </a>
              <a
                href="https://www.github.com/guilhermeft/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-g-light-gray text-base font-normal">
                  GitHub
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
