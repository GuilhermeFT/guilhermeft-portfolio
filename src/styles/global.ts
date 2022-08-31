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
    background-color: ${({ theme }) => theme.colors.dark[900]};
    color: ${({ theme }) => theme.colors.light[100]};
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
  }
`

const GlobalStyles = createGlobalStyle`${styles}`

export default GlobalStyles
