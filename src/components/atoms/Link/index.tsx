import cx from 'classcat'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { Routes } from 'routes'
import { routes } from 'routes'

type Props = {
  route: keyof Routes
  label: string
  param?: string
  className?: string
  isActive?: (pathname: string) => boolean
}

export function Link({ label, className, param, route, isActive: isActiveProp }: Props) {
  const { pathname } = useRouter()
  const href = param ? `${routes[route]}/${param}` : routes[route]
  const isActive = isActiveProp?.(pathname) ?? href === pathname

  return (
    <NextLink href={href}>
      <a
        tabIndex={0}
        className={cx([
          'border-b cursor-pointer text-gray-600',
          isActive ? 'border-gray-600' : 'border-transparent',
          className,
        ])}
      >
        {label}
      </a>
    </NextLink>
  )
}
