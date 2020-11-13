import dotenv from 'dotenv'

// make the values defined inside ".env" available
dotenv.config()

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${process.env.PRISMIC_REPO}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN
