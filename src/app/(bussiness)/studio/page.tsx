import { Metadata } from 'next'
import { Header } from '@/app/(bussiness)/studio/components/header'
import { HeroSection } from '@/app/(bussiness)/studio/components/hero-section'
import { AboutSection } from '@/app/(bussiness)/studio/components/about-section'
import { ServicesSection } from '@/app/(bussiness)/studio/components/services-section'
import { ProcessSection } from '@/app/(bussiness)/studio/components/process-section'
import { ContactSection } from '@/app/(bussiness)/studio/components/contact-section'
import { Footer } from '@/app/(bussiness)/studio/components/footer'

export const metadata: Metadata = {
  title: 'Consultoria de Desenvolvimento | GTDEV Studio',
  description:
    'Soluções digitais completas para o seu negócio: landing pages, sites profissionais e automações que transformam seu fluxo de trabalho.',
  keywords:
    'consultoria digital, landing pages, desenvolvimento web, automação de negócios, presença online',
}

export default function StudioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
