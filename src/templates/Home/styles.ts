import styled from 'styled-components'

export const Wrapper = styled.div`
  gap: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 60vh;
  margin: auto;
`

export const Paragraph = styled.p`
  flex: 1;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.dark[100]};
`
