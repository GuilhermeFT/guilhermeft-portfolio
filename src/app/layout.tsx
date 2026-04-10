import '@/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guilherme Trindade - Developer',
  description: 'I am a Developer based in Brazil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
