# Next.js Starter Kit (with typescript)

## Usage:

- Clone the repo
- install the dependencies `$ npm install`
- create a `.env` file at the root of the project.
  - populate it with this content:
    ```
    PRISMIC_TOKEN=${your_api_token}
    PRISMIC_REPO=${your_prismic_repo}
    ```
- dev mode `$ npm run dev`
  - if getting and error, run `$ npm run build`, then `$ npm run dev`
- build `$ npm run build`
- test `$ npm run test`
- specific test coverage `$ npm run test:coverage:only src=pathToFolder`

## Features:

- CMS: [Prismic.io](https://prismic.io/)
- Styles: [Tailwind](https://tailwindcss.com/)
