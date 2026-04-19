import '@/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { ScrollToTop } from '@/components/scroll-to-top'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://guilhermeft.dev'),
  title: {
    default: 'Guilherme FT | Engenheiro de Software & Desenvolvimento Sob Medida',
    template: '%s | Guilherme FT',
  },
  description:
    'Desenvolvimento de software sob medida para negócios que querem crescer. Transformo problemas reais em soluções digitais que funcionam. Conheça os projetos em guilhermeft.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header />
        {children}
        <ScrollToTop />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
