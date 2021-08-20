import { Link } from 'components/atoms/Link'
import { User } from 'types/user'

export function UserLink({ id, name }: User) {
  return (
    <span className="block mb-2">
      <Link route="users" param={`${id}`} label={name} />
    </span>
  )
}
