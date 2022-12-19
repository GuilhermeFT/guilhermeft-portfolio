import Link from 'next/link'

import * as S from './styles'

export type TimelineData = {
  company: string
  cityState: string
  timeOfJob: string
  companyLink: string
}

interface ExperienceTimelineProps {
  title: string
  timeline: TimelineData[]
}

const ExperienceTimeline = ({
  title = 'Experience Timeline',
  timeline
}: ExperienceTimelineProps) => {
  return (
    <S.TimelineWrapper>
      <S.TitleTimeline>{title}</S.TitleTimeline>

      <S.CompanyList>
        {timeline?.map((data, index) => (
          <S.CompanyListItem key={data.company + index}>
            <S.ListContentWrapper>
              <S.CompanyName>
                <Link href={data.companyLink} target="_blank">
                  {data.company}
                </Link>
                <S.City>{data.cityState}</S.City>
              </S.CompanyName>
            </S.ListContentWrapper>

            <S.ListContentWrapper>
              <S.Text>{data.timeOfJob}</S.Text>
            </S.ListContentWrapper>
          </S.CompanyListItem>
        ))}
      </S.CompanyList>
    </S.TimelineWrapper>
  )
}

export default ExperienceTimeline
