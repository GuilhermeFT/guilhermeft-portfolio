import styled from 'styled-components'

import Navigation from '../Navigation'
import { NavigationWrapper } from '../Navigation/styles'

export const HeaderWrapper = styled.header`
  width: 100%;

  padding: 1rem;
  display: grid;

  justify-content: center;
  align-items: center;

  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    ${NavigationWrapper} {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
`
export const Logo = styled.a`
  cursor: pointer;
  width: max-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-area: 1 / 1 / 2 / 2;
  }
`
