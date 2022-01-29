import cx from 'classcat'

import type { Color } from './types'

const colorMapper: Record<Color, string> = {
  gray: 'bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:ring-gray-300',
  blue: 'bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 focus:ring-blue-300',
}

export const getButtonClassNames = (color: Color, className?: string) =>
  cx([
    'relative mb-2 cursor-pointer px-2 py-1 ring-offset-1 transition-colors duration-200 focus:outline-none focus:ring-2',
    colorMapper[color],
    className,
  ])
