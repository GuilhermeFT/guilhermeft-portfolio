import { Section } from '@/components/section'
import Link from 'next/link'

export const ContactMe = () => {
  return (
    <Section id="contact-me" className="pb-32">
      <div className="container mx-auto grid gap-4 px-4 py-8 text-center">
        <span className="text-sm text-zinc-400 uppercase md:text-lg">
          Precisa de um desenvolvedor?
        </span>
        <Link
          href="/contact"
          className="gradient-text block text-2xl font-bold uppercase transition-all hover:scale-105 md:text-4xl"
        >
          Vamos Conversar?
        </Link>
      </div>
    </Section>
  )
}
