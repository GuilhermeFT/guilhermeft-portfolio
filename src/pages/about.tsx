import type { NextPage } from 'next'
import Head from 'next/head'

import AboutPage from '@/templates/About'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme FT | About</title>
        <meta
          name="description"
          content="Hello, I am Guilherme and I'm a front-end developer"
        />
        <meta
          name="keywords"
          content="developer, desenvolvedor, frontend, front-end, frontend developer, desenvolvedor front-end"
        />
      </Head>

      <AboutPage />
    </>
  )
}

export default About
