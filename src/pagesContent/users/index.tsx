import { User } from 'models/user'
import React, { useState } from 'react'

import { UserLink } from './components/UserLink'

type Props = {
  users: User[]
}

export function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = useState(true)

  return (
    <>
      <button
        className="hover:bg-gray-400 focus:bg-gray-400 px-2 py-1 mb-2 transition-colors duration-200 bg-gray-300 cursor-pointer"
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </button>
      <h2 className="mb-4 text-4xl">Users:</h2>
      {showUsers && users.map(u => <UserLink key={u.id} {...u} />)}
    </>
  )
}
