import styled, { css } from 'styled-components'

type ListItemWrapperProps = {
  isActive?: boolean
  isDisabled?: boolean
}

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
`

export const ListWrapper = styled.ul`
  gap: 3.2rem;
  width: auto;
  max-width: 29.8rem;
  list-style-type: none;

  display: flex;
  padding: 1.6rem 0;
  justify-content: space-between;
`

export const ListItemWrapper = styled.li<ListItemWrapperProps>`
  position: relative;
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  padding: 0.4rem 1rem;

  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.light[100] : theme.colors.dark[100]};

  a {
    text-decoration: none;
    transition: all 0.2s;

    :hover {
      color: ${({ theme, isDisabled }) =>
        !isDisabled && theme.colors.light[100]};
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
        height: 0.3rem;
        border-radius: 10rem;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.light[100]};
      }
    `}
`
