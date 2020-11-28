import Prismic from 'prismic-javascript'

import { accessToken, apiEndpoint } from '../../prismic-configuration'

// Client method to query documents from the Prismic repo
function PrismicClient(req?: unknown) {
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
}

// utils

function createClientOptions(req: unknown, prismicAccessToken?: string) {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}

  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export { Prismic, PrismicClient }
