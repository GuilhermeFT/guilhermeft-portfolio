import { SmoothScroll } from '@/components/animations/smooth-scroll'
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
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
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
