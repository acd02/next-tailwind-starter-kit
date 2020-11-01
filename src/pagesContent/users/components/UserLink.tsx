import { DynamicLink } from 'components/atoms/link'
import { User } from 'models/user'
import React from 'react'
import { getRouteDetails } from 'routes'

export function UserLink({ id, name }: User) {
  return (
    <span className="block mb-2">
      <DynamicLink routeDetails={getRouteDetails('user')} param={`${id}`} label={name} />
    </span>
  )
}
