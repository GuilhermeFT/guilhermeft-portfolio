import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const ContentWrapper = styled.main`
  margin: auto;
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxContent};

  display: flex;
  flex-direction: column;
`

export const AssetShadow = styled.span`
  z-index: 0;
  top: 100%;
  left: 100%;
  position: fixed;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;

  background: linear-gradient(120deg, rgba(0, 194, 255, 0.2) 0%, #ff29c3 100%);

  opacity: 0.3;
  filter: blur(100px);
  transform: translate(-50%, -50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 75vw;
    height: 75vw;
  }
`
