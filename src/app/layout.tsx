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
  title: 'Guilherme FT — Full-Stack Software Developer',
  description: 'Full-Stack Software Developer based in Brazil.',
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
        <ScrollToTop />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
