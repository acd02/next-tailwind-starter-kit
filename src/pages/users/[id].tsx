import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global-next'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { RenderUser } from 'pagesContent/users/[id]'
import type { User } from 'types/user'
import { constant, identity, noop } from 'utils/function'
import { get } from 'utils/http'

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
  const fetchedUsers = await get<User[], unknown>(
    'https://jsonplaceholder.typicode.com/users'
  )

  const paths = fetchedUsers.match({
    Ok: users => users.map(({ id }) => ({ params: { id: String(id) } })),
    Error: constant([]),
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = async ({ params }) => {
  return {
    props: {
      fetchedUser: (
        await get<User, unknown>(
          `https://jsonplaceholder.typicode.com/users/${params?.id ?? ''}`
        )
      ).match({
        Ok: identity,
        Error: noop,
      }),
    },
  }
}

export default UserDetail
