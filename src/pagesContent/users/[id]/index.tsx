import { User } from 'models/user'
import * as React from 'react'

type Props = {
  user: User
}

export function RenderUser({ user }: Props) {
  return (
    <>
      <Line label="name" value={user.name} />
      <Line label="email" value={user.email} />
      <Line label="company" value={user.company.name} />
      <Line label="city" value={user.address.city} />
      <Line label="street" value={user.address.street} />
    </>
  )
}

// utils

function Line({ label, value }: { label: string; value: string }) {
  return (
    <p className="mb-4">
      <span className="font-bold">{label}:</span> {value}
    </p>
  )
}
