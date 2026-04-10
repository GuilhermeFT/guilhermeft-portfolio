import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | GTDEV Studio',
  description: 'Política de privacidade e termos de uso do GTDEV Studio',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-muted flex min-h-screen flex-col text-zinc-800">
      <header className="bg-muted/90 py-6">
        <div className="container mx-auto px-4">
          <Link href="/studio" className="text-accent hover:text-foreground">
            ← Voltar para o studio
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">
            Política de Privacidade
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                1. Informações Gerais
              </h2>
              <p className="mb-4 text-zinc-600">
                Esta Política de Privacidade descreve como o GTDEV Studio (
                {'nós'}, {'nosso'} ou {'nossos'}) coleta, usa, processa e
                divulga seus dados, incluindo informações pessoais, em conexão
                com o acesso e uso do nosso site e serviços.
              </p>
              <p className="text-zinc-600">
                Ao utilizar nosso site e serviços, você concorda com os termos
                desta Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                2. Informações Coletadas
              </h2>
              <p className="mb-4 text-zinc-600">
                Podemos coletar as seguintes informações:
              </p>
              <ul className="list-disc pl-6 text-zinc-600">
                <li className="mb-2">
                  Informações de contato (nome, e-mail, telefone, etc.)
                </li>
                <li className="mb-2">
                  Informações técnicas (endereço IP, tipo de navegador, etc.)
                </li>
                <li className="mb-2">
                  Informações de uso (páginas visitadas, tempo gasto no site,
                  etc.)
                </li>
                <li>
                  Outras informações necessárias para fornecer nossos serviços
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                3. Uso das Informações
              </h2>
              <p className="mb-4 text-zinc-600">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 text-zinc-600">
                <li className="mb-2">
                  Fornecer, manter e melhorar nossos serviços
                </li>
                <li className="mb-2">
                  Comunicar com você sobre nossos serviços
                </li>
                <li className="mb-2">
                  Processar transações e enviar notificações relacionadas
                </li>
                <li className="mb-2">
                  Personalizar sua experiência em nosso site
                </li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                4. Compartilhamento de Informações
              </h2>
              <p className="mb-4 text-zinc-600">
                Podemos compartilhar suas informações nas seguintes
                circunstâncias:
              </p>
              <ul className="list-disc pl-6 text-zinc-600">
                <li className="mb-2">
                  Com prestadores de serviços que nos ajudam a operar nosso site
                </li>
                <li className="mb-2">Para cumprir obrigações legais</li>
                <li className="mb-2">
                  Com seu consentimento ou conforme divulgado no momento da
                  coleta
                </li>
                <li>
                  Em caso de fusão, venda ou transferência de ativos da empresa
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                5. Seus Direitos
              </h2>
              <p className="mb-4 text-zinc-600">Você tem direito a:</p>
              <ul className="list-disc pl-6 text-zinc-600">
                <li className="mb-2">Acessar suas informações pessoais</li>
                <li className="mb-2">Corrigir informações imprecisas</li>
                <li className="mb-2">
                  Solicitar a exclusão de suas informações
                </li>
                <li>Optar por não receber comunicações de marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                6. Contato
              </h2>
              <p className="text-zinc-600">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre
                em contato conosco pelo e-mail:{' '}
                <a
                  href="mailto:contato@guilhermeft.dev"
                  className="text-accent hover:text-foreground"
                >
                  contato@guilhermeft.dev
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-accent mb-4 text-xl font-semibold">
                7. Alterações nesta Política
              </h2>
              <p className="text-zinc-600">
                Podemos atualizar esta Política de Privacidade periodicamente. A
                versão mais recente estará sempre disponível em nosso site, e
                incentivamos você a revisá-la regularmente.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-muted/95 py-8 text-center text-sm text-zinc-600">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} GTDEV Studio | CNPJ: 43.673.320/0001-15
          </p>
          <div className="mt-2 flex flex-col justify-center gap-2">
            <Link
              href="/studio"
              className="transition-colors hover:text-zinc-800"
            >
              Voltar o studio
            </Link>
            <Link href="/" className="transition-colors hover:text-zinc-800">
              Voltar para o site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
