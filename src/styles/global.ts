import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 56.25%;
    transition: font-size 0.2s;

    @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      font-size: 62.5%;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.poppins};
    background-color: ${({ theme }) => theme.colors.dark[900]};
    color: ${({ theme }) => theme.colors.light[100]};
  }

  a {
    color: inherit;
  }

  .Typewriter__cursor {
    background: ${({ theme }) => theme.colors.violet[100]};
  }
`

const GlobalStyles = createGlobalStyle`${styles}`

export default GlobalStyles
