import { NextApiRequest, NextApiResponse } from 'next'

import { exitPreview } from '@prismicio/next'

const ePreview = async function exit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  exitPreview({ res, req })
}

export default ePreview
