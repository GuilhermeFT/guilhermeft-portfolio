import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getPrismicClient } from '@/services/prismic'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme FT | Projects</title>
      </Head>

      <h1>Projects</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const client = getPrismicClient()

  const projects = await client.getByType('projects', { pageSize: 1 })
  console.log(JSON.stringify(projects))

  return {
    props: {}
  }
}

export default Projects
