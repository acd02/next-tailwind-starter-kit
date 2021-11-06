import { ComponentPropsWithoutRef } from 'react'

import { getButtonClassNames } from './styles'
import type { Color } from './types'

type Props = {
  className?: string
  color?: Color
}

function Button({
  className,
  color = 'gray',
  children,
  ...rest
}: ComponentPropsWithoutRef<'button'> & Props) {
  return (
    <button className={getButtonClassNames(color, className)} {...rest}>
      {children}
    </button>
  )
}

export { Button }
