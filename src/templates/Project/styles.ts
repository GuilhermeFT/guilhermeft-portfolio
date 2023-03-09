import Link from 'next/link'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'name image' 'link image' 'content content';
    grid-auto-rows: auto 1fr;
  }
`

export const Title = styled.div`
  font-size: 3.8rem;
  font-weight: 700;
  width: max-content;

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
    grid-area: name;
    font-size: 5.6rem;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  max-width: 67rem;

  border-radius: 0.8rem;

  animation: 2s lineUp ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-area: image;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  animation: 2s lineUp ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-area: link;
  }
`

export const LinkGroup = styled.div`
  display: flex;
  gap: 1.2rem;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    fill: ${({ theme }) => theme.colors.dark[100]};
  }
`

export const StyledLink = styled.a`
  cursor: pointer;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.dark[100]};
  transition: opacity 0.2s;
  text-decoration: underline;
`

export const ContentWrapper = styled.div`
  animation: 2s lineUp ease-out;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  text-align: justify;

  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.light[300]};

  img {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-area: content;
  }
`
