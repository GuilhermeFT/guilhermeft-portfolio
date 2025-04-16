import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Guilhermeft Studio',
  description: 'Política de privacidade e termos de uso do Guilhermeft Studio',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-g-background flex min-h-screen flex-col text-white">
      <header className="bg-g-background/90 py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-g-blue hover:text-g-light-blue">
            ← Voltar para a home
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
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                1. Informações Gerais
              </h2>
              <p className="text-g-light-gray mb-4">
                Esta Política de Privacidade descreve como o Guilhermeft Studio
                ({'nós'}, {'nosso'} ou {'nossos'}) coleta, usa, processa e
                divulga seus dados, incluindo informações pessoais, em conexão
                com o acesso e uso do nosso site e serviços.
              </p>
              <p className="text-g-light-gray">
                Ao utilizar nosso site e serviços, você concorda com os termos
                desta Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                2. Informações Coletadas
              </h2>
              <p className="text-g-light-gray mb-4">
                Podemos coletar as seguintes informações:
              </p>
              <ul className="text-g-light-gray list-disc pl-6">
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
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                3. Uso das Informações
              </h2>
              <p className="text-g-light-gray mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="text-g-light-gray list-disc pl-6">
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
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-g-light-gray mb-4">
                Podemos compartilhar suas informações nas seguintes
                circunstâncias:
              </p>
              <ul className="text-g-light-gray list-disc pl-6">
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
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                5. Seus Direitos
              </h2>
              <p className="text-g-light-gray mb-4">Você tem direito a:</p>
              <ul className="text-g-light-gray list-disc pl-6">
                <li className="mb-2">Acessar suas informações pessoais</li>
                <li className="mb-2">Corrigir informações imprecisas</li>
                <li className="mb-2">
                  Solicitar a exclusão de suas informações
                </li>
                <li>Optar por não receber comunicações de marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                6. Contato
              </h2>
              <p className="text-g-light-gray">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre
                em contato conosco pelo e-mail:{' '}
                <a
                  href="mailto:contato@guilhermeft.dev"
                  className="text-g-blue hover:text-g-light-blue"
                >
                  contato@guilhermeft.dev
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-g-light-blue mb-4 text-xl font-semibold">
                7. Alterações nesta Política
              </h2>
              <p className="text-g-light-gray">
                Podemos atualizar esta Política de Privacidade periodicamente. A
                versão mais recente estará sempre disponível em nosso site, e
                incentivamos você a revisá-la regularmente.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-g-background/95 text-g-light-gray py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Guilhermeft Studio | CNPJ:
            43.673.320/0001-15
          </p>
          <p className="mt-2">
            <Link href="/" className="transition-colors hover:text-white">
              Voltar para o site
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
