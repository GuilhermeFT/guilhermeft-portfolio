import type { Metadata } from 'next'
import { HeroSection } from './components/hero-section'

export const metadata: Metadata = {
  title: 'Guilherme FT — Consultoria e Tecnologia',
  description:
    'Consultoria e desenvolvimento de software para empresas que querem crescer com tecnologia.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  )
}
