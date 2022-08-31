import HomePage from '@/templates/Home'
import type { NextPage } from 'next'
import Head from 'next/head'

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
