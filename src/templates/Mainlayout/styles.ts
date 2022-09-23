import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const ContentWrapper = styled.main`
  margin: auto;
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
`
