import { DynamicLink } from 'components/atoms/link'
import { User } from 'models/user'
import React from 'react'
import { DynamicRoutes, getRouteDetails } from 'routes'

type Props = {
  users: User[]
}

export function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = React.useState(true)

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
      {showUsers && users.map(renderUserLink)}
    </>
  )
}

// utils

function renderUserLink({ id, name }: User) {
  return (
    <span className="block mb-2" key={id}>
      <DynamicLink
        routeDetails={getRouteDetails(DynamicRoutes.user)}
        param={`${id}`}
        label={name}
      />
    </span>
  )
}
