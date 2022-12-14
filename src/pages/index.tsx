import type { NextPage } from 'next'
import Head from 'next/head'

import HomePage from '@/templates/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme FT | Home</title>
      </Head>
      <HomePage />
    </>
  )
}

export default Home
