import { User } from 'types/user'
import { useState } from 'react'

import { UserLink } from './components/UserLink'
import { Button } from 'components/atoms/Button'

type Props = {
  users: User[]
}

export function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = useState(true)

  return (
    <>
      <Button onClick={() => setShowUsers(s => !s)}>
        {showUsers ? 'hide' : 'show'} users
      </Button>
      <h2 className="mb-4 text-4xl">Users:</h2>
      {showUsers && users.map(u => <UserLink key={u.id} {...u} />)}
    </>
  )
}
