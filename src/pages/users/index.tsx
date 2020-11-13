import { when } from 'acd-utils'
import to from 'await-to-js'
import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import { User } from 'models/user'
import { GetStaticProps } from 'next'
import { RenderUsers } from 'pagesContent/users'
import React from 'react'
import { constant } from 'utils/function'
import { Prismic, PrismicClient } from 'utils/prismic'

type Props = {
  fetchedUsers: User[]
}

function Users({ fetchedUsers }: Props) {
  return <RenderUsers users={fetchedUsers} />
}

;(Users as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="users" description="list of all users">
    {page}
  </MainLayout>
)

// Next.js API
export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Partial<Props>
}> => {
  const [, data] = await to(
    PrismicClient().query(Prismic.Predicates.at('document.type', 'user'), {
      orderings: '[my.user.name]',
    })
  )

  const fetchedUsers: User[] = when(data)
    .fold(constant([]), d => d.results)
    .map(r => ({
      id: r.id,
      ...r.data,
    }))

  return {
    props: {
      fetchedUsers,
    },
  }
}

export default Users
