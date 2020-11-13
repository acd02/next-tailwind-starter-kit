import cx from 'classcat'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import type { Routes } from 'routes'

import { handleKeyPress } from './utils'

type Props = {
  to: Routes
  label: string
  className?: string
}

export function Link({ to, label, className }: Props) {
  const { pathname } = useRouter()
  const isActive = to === pathname

  return (
    <NextLink href={to}>
      <a
        tabIndex={0}
        className={cx([
          'cursor-pointer text-gray-600',
          isActive && 'border-b border-gray-600',
          className,
        ])}
        onKeyPress={handleKeyPress}
      >
        {label}
      </a>
    </NextLink>
  )
}
