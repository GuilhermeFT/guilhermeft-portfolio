import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ContactMe = () => {
  return (
    <Section id="contact-me" className="pb-32">
      <div className="container grid gap-4 py-8 text-center">
        <h5 className="mx-auto">Precisa de um desenvolvedor?</h5>
        <h2>Vamos Conversar?</h2>
        <div className="mt-4 flex justify-center">
          <Link href="/contact">
            <Button variant="pill">Entrar em contato</Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
