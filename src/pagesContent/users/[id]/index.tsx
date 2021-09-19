import { User } from 'types/user'

import { Row } from './components/Row'

type Props = {
  user: User
}

function RenderUser({ user }: Props) {
  return (
    <>
      <Row label="name" value={user.name} />
      <Row label="email" value={user.email} />
      <Row label="company" value={user.company.name} />
      <Row label="city" value={user.address.city} />
      <Row label="street" value={user.address.street} />
    </>
  )
}

export { RenderUser }
