import styled from 'styled-components'

export const SocialWrapper = styled.div`
  gap: 7rem;
  display: flex;
`

export const StyledAnchor = styled.a`
  svg {
    width: 2.2rem;
    height: 2.2rem;
    fill: ${({ theme }) => theme.colors.dark[100]};
  }
`
