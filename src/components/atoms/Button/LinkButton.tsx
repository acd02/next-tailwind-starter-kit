import cx from 'classcat'
import { ComponentPropsWithoutRef } from 'react'

type Color = 'gray' | 'blue'
type Props = {
  className?: string
  href: string
  color?: Color
}

const colorMapper: Record<Color, string> = {
  gray: 'bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:ring-gray-300',
  blue: 'bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 focus:ring-blue-300',
}

function LinkButton({
  className,
  color = 'gray',
  children,
  href,
  ...rest
}: ComponentPropsWithoutRef<'a'> & Props) {
  return (
    <a
      href={href}
      className={cx([
        'relative px-2 py-1 mb-2 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 ring-offset-1',
        colorMapper[color],
        className,
      ])}
      {...rest}
    >
      {children}
    </a>
  )
}

export { LinkButton }
