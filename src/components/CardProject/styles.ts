import styled from 'styled-components'

export const CardProjectWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  border-radius: 0.8rem;
  width: 37rem;
  height: 25.5rem;
  padding: 2.2rem;
  border: ${({ theme }) => `2px solid ${theme.colors.violet[200]}99`};

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(190, 138, 255, 0.2) 50%,
    rgba(12, 47, 138, 0.7) 100%
  );

  :hover {
  }
`
export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
`

export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: justify;

  color: ${({ theme }) => theme.};
`
