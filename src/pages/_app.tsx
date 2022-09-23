import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import { darkTheme } from '@/styles/themes'
import MainLayout from '@/templates/Mainlayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
