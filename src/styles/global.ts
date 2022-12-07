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

  @keyframes lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.dark[900]};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10rem;
    background: ${({ theme }) => theme.colors.violet[200]};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const GlobalStyles = createGlobalStyle`${styles}`

export default GlobalStyles
