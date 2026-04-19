import type { Metadata } from 'next'
import { HeroSection } from './components/hero-section'
import { ProblemsSection } from './components/problems-section'
import { ServicesSection } from './components/services-section'

export const metadata: Metadata = {
  title: 'Guilherme FT | Engenheiro de Software & Desenvolvimento Sob Medida',
  description:
    'Desenvolvimento de software sob medida para negócios que querem crescer. Transformo problemas reais em soluções digitais que funcionam. Conheça os projetos em guilhermeft.dev',
  keywords: [
    'desenvolvedor de software',
    'criação de sistemas sob medida',
    'desenvolvimento web',
    'automação com IA',
    'freelancer desenvolvimento',
    'Next.js developer',
    'Guilherme FT',
  ],
  authors: [{ name: 'Guilherme FT', url: 'https://guilhermeft.dev' }],
  creator: 'Guilherme FT',
  alternates: {
    canonical: 'https://guilhermeft.dev',
  },
  openGraph: {
    title: 'Guilherme FT — Engenheiro de Software',
    description: 'Software sob medida para negócios reais. Veja os projetos.',
    url: 'https://guilhermeft.dev',
    siteName: 'Guilherme FT',
    images: [
      {
        url: '/og/image',
        width: 1200,
        height: 630,
        alt: 'Guilherme FT — Engenheiro de Software & Desenvolvimento Sob Medida',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme FT — Engenheiro de Software',
    description: 'Software sob medida para negócios reais.',
    images: ['/og/image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://guilhermeft.dev/#person',
      name: 'Guilherme FT',
      url: 'https://guilhermeft.dev',
      jobTitle: 'Engenheiro de Software',
      description:
        'Desenvolvimento de software sob medida para negócios que querem crescer.',
      sameAs: [
        'https://github.com/guilhermeft',
        'https://linkedin.com/in/guilhermeft/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://guilhermeft.dev/#website',
      url: 'https://guilhermeft.dev',
      name: 'Guilherme FT',
      description:
        'Desenvolvimento de software sob medida para negócios que querem crescer.',
      author: { '@id': 'https://guilhermeft.dev/#person' },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
      </main>
    </>
  )
}
