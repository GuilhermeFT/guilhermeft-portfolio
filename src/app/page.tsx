import type { Metadata } from 'next'
import { HeroSection } from '@/app/components/hero-section'
import { ProjectsSection } from '@/app/components/projects-section'
import { QuickContactSection } from '@/app/components/quick-contact-section'
import { HomeFooter } from '@/app/components/home-footer'

export const metadata: Metadata = {
  title: 'Guilherme Trindade — Desenvolvedor Full Stack',
  description:
    'Desenvolvedor Full Stack baseado no Brasil. Construindo interfaces e sistemas que fazem a diferença.',
}

export default function HomePage() {
  return (
    <div className="pt-[var(--header-height)]">
      <HeroSection />
      <ProjectsSection />
      <QuickContactSection />
      <HomeFooter />
    </div>
  )
}
