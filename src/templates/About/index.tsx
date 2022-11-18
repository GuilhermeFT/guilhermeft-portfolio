import Typewriter from 'typewriter-effect'

import ExperienceTimeline, {
  TimelineData
} from '@/components/ExperienceTimeline'

import * as S from './styles'

const AboutPage = () => {
  const timeline: TimelineData[] = [
    {
      company: 'Fuerza Studio',
      cityState: 'Porto Alegre, RS',
      companyLink: 'https://www.fuerzastudio.com.br/',
      timeOfJob: 'Out 2021 - o momento'
    },
    {
      company: 'SinalizeWeb® SEO & Performance',
      cityState: 'Guarulhos, SP',
      companyLink: 'https://sinalizeweb.com.br/',
      timeOfJob: 'Nov 2020 - Jun 2021'
    }
  ]

  return (
    <S.Wrapper>
      <S.Title>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Sobre mim.').start()
          }}
        />
      </S.Title>

      <S.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the {"industry's"} standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </S.Description>

      <S.AboutFooter>
        <ExperienceTimeline title="Front-end Developer" timeline={timeline} />
      </S.AboutFooter>
    </S.Wrapper>
  )
}

export default AboutPage
