import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: auto;

  gap: 0.1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 100%;
  }
`
