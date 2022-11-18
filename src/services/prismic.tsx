import sm from 'sm.json'

import * as prismic from '@prismicio/client'

export const repositoryName = prismic.getRepositoryName(
  sm.apiEndpoint || String(process.env.PRISMIC_API_ENDPOINT)
)

export const getPrismicClient = () => {
  const client = prismic.createClient(sm.apiEndpoint)

  return client
}
