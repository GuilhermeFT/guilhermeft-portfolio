import styled, { css } from 'styled-components'

interface ListItemWrapperProps {
  isActive?: boolean
}

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
`

export const ListWrapper = styled.ul`
  width: 100%;
  max-width: 29.8rem;
  list-style-type: none;

  display: flex;
  padding: 1.6rem 0;
  justify-content: space-between;
`

export const StyledLink = styled.a``

export const ListItemWrapper = styled.li<ListItemWrapperProps>`
  position: relative;
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  padding: 0.4rem 1rem;

  a {
    transition: all 0.2s;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.light[100] : theme.colors.dark[100]};

    :hover {
      color: ${({ theme }) => theme.colors.light[100]};
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      a {
        cursor: default;
      }

      ::after {
        content: '';
        bottom: 0;

        width: 2rem;
        height: 0.2rem;
        border-radius: 100%;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.light[100]};
      }
    `}
`
