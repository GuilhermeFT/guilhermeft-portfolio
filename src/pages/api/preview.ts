import { NextApiRequest, NextApiResponse } from 'next'

import { getPrismicClient } from '@/services/prismic'
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = getPrismicClient({ req })

  setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client })
}

export default preview
