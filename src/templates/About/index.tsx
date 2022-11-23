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
        Hey, {"I'm"} Guilherme Trindade and {"I'm"} 35 years old. Currently{' '}
        {"I'm"} studying Software Engineer and I work as Front-end Developer
        since 2020. Today
        {" I'm"} working at Fuerza Studio.
        <br />
        As goal I pretender improve my english and learn mobile development,
        agile methodology and best practices of Software Engineering.
      </S.Description>

      <S.AboutFooter>
        <ExperienceTimeline title="Front-end Developer" timeline={timeline} />
      </S.AboutFooter>
    </S.Wrapper>
  )
}

export default AboutPage
