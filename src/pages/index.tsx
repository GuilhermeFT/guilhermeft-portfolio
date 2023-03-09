import type { NextPage } from 'next'
import Head from 'next/head'

import HomePage from '@/templates/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme FT | Home</title>
        <meta
          name="description"
          content="Hello, I am Guilherme and I'm a front-end developer"
        />
        <meta
          name="keywords"
          content="developer, desenvolvedor, frontend, front-end, frontend developer, desenvolvedor front-end"
        />
      </Head>

      <HomePage />
    </>
  )
}

export default Home
