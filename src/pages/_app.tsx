import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import { ThemeProvider, useTheme } from 'styled-components'

import GlobalStyles from '@/styles/global'
import { darkTheme } from '@/styles/themes'
import MainLayout from '@/templates/Mainlayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <NextNProgress height={1} color={darkTheme.colors.blue[200]} />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
