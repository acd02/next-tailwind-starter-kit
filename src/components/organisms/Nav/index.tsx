import { Link } from 'components/atoms/Link'
import { memo } from 'react'

function NavContent() {
  return (
    <nav className="flex-none border-b border-gray-300 py-4 text-center">
      <header className="mb-4">nav</header>
      <div className="flex flex-wrap justify-center gap-3">
        <Link route="index" label="home" />
        <Link route="users" label="users" />
      </div>
    </nav>
  )
}

export const Nav = memo(NavContent)
