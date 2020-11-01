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
        className="cursor-pointer py-1 px-2 bg-gray-300 mb-2
        hover:bg-gray-400 focus:bg-gray-400 transition-colors duration-200"
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </button>
      <h2 className="text-4xl mb-4">Users:</h2>
      {showUsers && users.map(u => <UserLink key={u.id} {...u} />)}
    </>
  )
}
