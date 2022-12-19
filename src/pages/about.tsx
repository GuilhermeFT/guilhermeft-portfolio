import type { NextPage } from 'next'
import Head from 'next/head'

import AboutPage from '@/templates/About'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme FT | About</title>
      </Head>

      <AboutPage />
    </>
  )
}

export default About
