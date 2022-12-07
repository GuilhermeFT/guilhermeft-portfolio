import styled from 'styled-components'

export const SocialWrapper = styled.div`
  gap: 7rem;
  display: flex;
`

export const StyledSpan = styled.span`
  opacity: 0;
  display: none;

  font-weight: 300;
  font-size: 1.4rem;

  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.dark[100]};

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: block;
    opacity: 1;
  }
`

export const StyledAnchor = styled.a`
  text-decoration: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 4.8rem;
  height: 4.8rem;

  padding: 1rem;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    fill: ${({ theme }) => theme.colors.dark[100]};

    transition: all 0.2s;
  }

  transition: all 0.2s;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    gap: 0.8rem;
    flex-direction: row;
    width: auto;
    min-width: 6rem;

    height: 6.5rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
      fill: ${({ theme }) => theme.colors.dark[100]};

      transition: all 0.2s;
    }

    :hover {
      svg {
        fill: ${({ theme }) => theme.colors.light[100]};
      }

      ${StyledSpan} {
        color: ${({ theme }) => theme.colors.light[100]};
        opacity: 1;
      }
    }
  }
`
