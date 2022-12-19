import { ElementType } from 'react'

import type { AppProps } from 'next/app'
import Link, { LinkProps } from 'next/link'
import NextNProgress from 'nextjs-progressbar'

import { ThemeProvider, useTheme } from 'styled-components'

import { repositoryName } from '@/services/prismic'
import GlobalStyles from '@/styles/global'
import { darkTheme } from '@/styles/themes'
import MainLayout from '@/templates/Mainlayout'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => <Link {...props} />}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={darkTheme}>
          <NextNProgress height={1} color={darkTheme.colors.blue[200]} />

          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <GlobalStyles />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
