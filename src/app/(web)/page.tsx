import type { Metadata } from 'next'
import { HeroSection } from './components/hero-section'

export const metadata: Metadata = {
  title: 'Guilherme FT — Full-Stack Software Developer',
  description: 'Full-Stack Software Developer based in Brazil.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  )
}
