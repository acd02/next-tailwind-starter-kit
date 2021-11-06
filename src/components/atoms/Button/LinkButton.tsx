import { ComponentPropsWithoutRef } from 'react'

import { getButtonClassNames } from './styles'
import type { Color } from './types'

type Props = {
  className?: string
  href: string
  color?: Color
}

function LinkButton({
  className,
  color = 'gray',
  children,
  href,
  ...rest
}: ComponentPropsWithoutRef<'a'> & Props) {
  return (
    <a href={href} className={getButtonClassNames(color, className)} {...rest}>
      {children}
    </a>
  )
}

export { LinkButton }
