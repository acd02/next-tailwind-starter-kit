import { Link } from 'components/atoms/link'
import React, { memo } from 'react'

function NavContent() {
  return (
    <nav className="flex-none py-4 text-center border-b border-gray-300">
      <header className="mb-4">nav</header>
      <div className="flex flex-wrap justify-center">
        <Link className="mr-3" to="/" label="home" />
        <Link to="/users" label="users" />
      </div>
    </nav>
  )
}

export const Nav = memo(NavContent)
