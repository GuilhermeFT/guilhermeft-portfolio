import styled from 'styled-components'

type CardProjectWrapperProps = {
  backgroundUrl: string
}

export const CardProjectWrapper = styled.div<CardProjectWrapperProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  border-radius: 0.8rem;
  width: 37rem;
  height: 25.5rem;
  padding: 2.2rem;
  border: ${({ theme }) => `1px solid ${theme.colors.violet[200]}99`};

  transition: transform 0.2s;

  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-size: cover;

  ::after {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 0.8rem;

    background: linear-gradient(
      180deg,
      rgba(190, 138, 255, 0.3) 0%,
      rgba(108, 149, 255, 0.3) 30%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  :hover {
    transform: scale(1.01);
  }
`
export const CardTitle = styled.h1`
  z-index: 1;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
`

export const CardDescription = styled.p`
  z-index: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-height: 7.2rem;

  text-align: justify;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.dark[100]};
`
