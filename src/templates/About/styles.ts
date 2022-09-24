import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 0.1rem;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 3.8rem;
  font-weight: 700;

  background: linear-gradient(
    267.14deg,
    ${({ theme }) => theme.colors.violet[100]} 0%,
    ${({ theme }) => theme.colors.blue[100]} 100%
  );
  line-height: 8.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    font-size: 5.6rem;
  }
`

export const Description = styled.p`
  text-align: justify;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.dark[100]};
`
