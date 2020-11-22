import NextLink from 'next/link'
import React from 'react'
import type { DynamicRoutesDetail } from 'routes'

import { handleKeyPress } from './utils'

type Props = {
  routeDetails: DynamicRoutesDetail
  param: string
  label: string
}

export function DynamicLink({ routeDetails, label, param }: Props) {
  const { basePath } = routeDetails

  return (
    <NextLink href={`${basePath}/${param}`}>
      <a
        tabIndex={0}
        onKeyPress={handleKeyPress}
        className="text-gray-600 cursor-pointer"
      >
        {label}
      </a>
    </NextLink>
  )
}
