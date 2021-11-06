import { ComponentPropsWithoutRef } from 'react'

import { getButtonClassNames } from './styles'
import type { Color } from './types'

type Props = {
  className?: string
  color?: Color
}

function LinkButton({
  className,
  color = 'gray',
  children,

  ...rest
}: ComponentPropsWithoutRef<'a'> & Props) {
  return (
    <a className={getButtonClassNames(color, className)} {...rest}>
      {children}
    </a>
  )
}

export { LinkButton }
