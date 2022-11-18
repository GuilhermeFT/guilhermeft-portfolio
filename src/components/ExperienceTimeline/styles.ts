import styled from 'styled-components'

export const TimelineWrapper = styled.div`
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: 2s lineUp ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    align-items: flex-start;
  }
`

export const TitleTimeline = styled.h2`
  font-weight: 700;
  font-size: 2.2rem;
`
export const CompanyList = styled.ul`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  list-style-type: none;
`

export const CompanyListItem = styled.li`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.light[100]};
`

export const CompanyName = styled.p``

export const Anchor = styled.a`
  margin-right: 0.6rem;
`
export const City = styled.span`
  color: ${({ theme }) => theme.colors.dark[100]};
  ::before {
    content: ' • ';
  }
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark[100]};
`

export const ListContentWrapper = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    justify-content: flex-start;
    text-align: left;
  }
`
