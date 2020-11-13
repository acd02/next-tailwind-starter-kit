import { User } from 'models/user'
import React from 'react'

type Props = {
  user: User
}

function RenderUser({ user }: Props) {
  return (
    <>
      <Line label="name" value={user.name} />
      <Line label="email" value={user.email} />
      <Line label="city" value={user.address[0].city} />
      <Line label="street" value={user.address[0].street} />
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

export { RenderUser }
