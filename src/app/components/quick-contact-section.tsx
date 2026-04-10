import Link from 'next/link'
import { Section } from '@/components/section'

export function QuickContactSection() {
  return (
    <Section id="contact-cta" className="py-[70px] text-center">
      <div className="container">
        <h5 className="mb-2">Tem um projeto em mente?</h5>
        <h1 className="h1-large">Vamos trabalhar juntos</h1>
        <Link
          href="/contact"
          className="mt-6 inline-block text-sm font-[800] uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:text-gray-mid"
        >
          Vamos trabalhar juntos →
        </Link>
      </div>
    </Section>
  )
}
