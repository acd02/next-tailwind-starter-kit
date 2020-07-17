import cx from 'classcat'
import NextLink from 'next/link'
import * as React from 'react'
import { DynamicRoutesDetail } from 'routes'

import { handleKeyPress } from './utils'

type Props = {
  routeDetails: DynamicRoutesDetail
  param: string
  label: string
}

export function DynamicLink({ routeDetails, label, param }: Props) {
  const { basePath } = routeDetails

  return (
    <NextLink
      href={`${basePath}/${routeDetails.paramBracket}`}
      as={`${basePath}/${param}`}
    >
      <a
        tabIndex={0}
        onKeyPress={handleKeyPress}
        className={cx('cursor-pointer text-gray-600')}
      >
        {label}
      </a>
    </NextLink>
  )
}
