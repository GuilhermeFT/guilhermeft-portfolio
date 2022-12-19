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

export const Paragraph = styled.p`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.light[100]};

  animation: 2s lineUp ease-out;
`

export const Description = styled.p`
  text-align: justify;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.dark[100]};

  animation: 2s lineUp ease-out;
`
