import styled from 'styled-components'

export const CardProjectWrapper = styled('div')`
  position: relative;
  border-radius: 0.8rem;
  width: 37rem;
  padding: 25%;
  border: ${({ theme }) => `2px solid ${theme.colors.violet[200]}99`};

  ::after {
    content: '';
    position: absolute;
    border-radius: 0.8rem;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    opacity: 0;
    width: 100%;

    transition: opacity 0.2s;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(190, 138, 255, 0.2) 50%,
      rgba(12, 47, 138, 0.7) 100%
    );
  }

  :hover {
    ::after {
      opacity: 0.5;
    }
  }
`
