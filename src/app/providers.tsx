'use client'

import { PrismicPreview } from '@prismicio/next'

import { repositoryName } from '@/prismicio'

type ProvidersProps = {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <PrismicPreview repositoryName={repositoryName}>{children}</PrismicPreview>
  )
}
