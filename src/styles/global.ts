import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
`

const GlobalStyles = createGlobalStyle`${styles}`

export default GlobalStyles
