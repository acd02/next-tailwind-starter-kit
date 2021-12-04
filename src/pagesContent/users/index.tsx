import { Button } from 'components/atoms/Button'
import { Link } from 'components/atoms/Link'
import { useState } from 'react'
import { User } from 'types/user'

type Props = {
  users: User[]
}

export function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = useState(true)

  const links = users.map(({ id, name }) => (
    <li className="block mb-2 w-[fit-content]">
      <Link route="users" param={String(id)} label={name} />
    </li>
  ))

  return (
    <>
      <Button onClick={() => setShowUsers(s => !s)}>
        {showUsers ? 'hide' : 'show'} users
      </Button>
      <h2 className="mb-4 text-4xl">Users:</h2>
      <ul>{showUsers && links}</ul>
    </>
  )
}
