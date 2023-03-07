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

export const ProjectsListWrapper = styled.div`
  margin-top: 3rem;
  gap: 1.6rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 37rem);

  /*   @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    gap: 3rem 1.6rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(4, auto);
  } */
`
