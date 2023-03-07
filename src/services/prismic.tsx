import { PreviewData } from 'next'

import sm from 'sm.json'

import {
  Client,
  ClientConfig,
  createClient,
  getRepositoryName,
  HttpRequestLike
} from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

export const repositoryName = getRepositoryName(
  sm.apiEndpoint || String(process.env.PRISMIC_API_ENDPOINT)
)

type GetPrismicClientProps = {
  config?: ClientConfig
  previewData?: PreviewData
  req?: HttpRequestLike
}

export const getPrismicClient = ({
  config,
  previewData,
  req
}: GetPrismicClientProps): Client => {
  const client = createClient(sm.apiEndpoint, config)

  enableAutoPreviews({
    client,
    previewData,
    req
  })

  return client
}
