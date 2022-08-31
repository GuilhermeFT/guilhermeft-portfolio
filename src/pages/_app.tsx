import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '@/styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
