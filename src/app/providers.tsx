'use client'

import { PrismicPreview } from '@prismicio/next'
import { ThemeProvider } from 'next-themes'

import { repositoryName } from '@/prismicio'

type ProvidersProps = {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <ThemeProvider
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </PrismicPreview>
  )
}
