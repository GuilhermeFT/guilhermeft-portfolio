import '@/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { ScrollToTop } from '@/components/scroll-to-top'

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guilherme FT — Full-Stack Software Developer',
  description: 'Full-Stack Software Developer based in Brazil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
