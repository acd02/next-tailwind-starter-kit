import { Link } from 'components/atoms/link'
import * as React from 'react'
import { Routes } from 'routes'

export const Nav = React.memo(() => (
  <nav className="flex-none py-4 text-center border-b border-gray-300">
    <header className="mb-4">nav</header>
    <div className="flex flex-wrap justify-center">
      <Link className="mr-3" to={Routes.index} label="home" />
      <Link to={Routes.users} label="users" />
    </div>
  </nav>
))
