import { when } from 'acd-utils'
import to from 'await-to-js'
import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import { User } from 'models/user'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RenderUser } from 'pagesContent/users/[id]'
import React from 'react'
import { constant } from 'utils/function'
import { Prismic, PrismicClient } from 'utils/prismic'

type Props = {
  fetchedUser?: User
}

function UserDetail({ fetchedUser }: Props) {
  return fetchedUser && <RenderUser user={fetchedUser} />
}

;(UserDetail as NextPageWithLayout<Props>).getLayout = page => (
  <MainLayout title={page.props.fetchedUser?.name ?? ''} description="user details">
    {page}
  </MainLayout>
)

// Next.js API
export const getStaticPaths: GetStaticPaths = async () => {
  const [, data] = await to(
    PrismicClient().query(Prismic.Predicates.at('document.type', 'user'), {})
  )

  const paths = when(data)
    .fold(constant([]), d => d.results)
    .map(r => ({ params: { id: String(r.id) } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: Partial<Props>
}> => {
  const [, data] = await to(
    PrismicClient().query(Prismic.Predicates.at('document.id', params?.id ?? ''), {})
  )

  const fetchedUser: User = when(data)
    .filter(d => d.results.length > 0)
    .fold(constant([]), d => d.results)
    .map(r => ({
      id: r.id,
      ...r.data,
    }))[0]

  return {
    props: {
      fetchedUser,
    },
  }
}

export default UserDetail
