import type { Metadata } from 'next'
import { HeroSection } from './components/hero-section'
import { ProblemsSection } from './components/problems-section'
import { ServicesSection } from './components/services-section'
import { ProjectsSection } from './components/projects-section'

export const metadata: Metadata = {
  title: 'Guilherme FT — Consultoria e Tecnologia',
  description:
    'Consultoria e desenvolvimento de software para empresas que querem crescer com tecnologia.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
