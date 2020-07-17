import { MainLayout } from 'components/layouts/main'
import { User } from 'models/user'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RenderUser } from 'pagesContent/users/[id]'
import * as React from 'react'
import { constant, identity, noop } from 'utils/function'
import { get } from 'utils/http'

type Props = {
  fetchedUser?: User
}

export default function UserDetail({ fetchedUser }: Props) {
  return (
    <MainLayout title={fetchedUser?.name ?? ''} description="user details">
      {fetchedUser && <RenderUser user={fetchedUser} />}
    </MainLayout>
  )
}

// Next.js API

export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedUsers = await get<User[], unknown>(
    'https://jsonplaceholder.typicode.com/users'
  )

  const paths = fetchedUsers
    .fold(constant([]), identity)
    .map(u => ({ params: { id: String(u.id) } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({ params }) => {
  return {
    props: {
      fetchedUser: await (
        await get<User, unknown>(
          `https://jsonplaceholder.typicode.com/users/${params?.id ?? ''}`
        )
      ).fold(noop, identity),
    },
  }
}
