import '@/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
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
  title: 'Guilherme FT — Consultoria e Tecnologia',
  description:
    'Consultoria e desenvolvimento de software para empresas que querem crescer com tecnologia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
