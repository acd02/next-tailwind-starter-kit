import { NextPage } from 'next'
import { ReactNode } from 'react'

declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export = classNames
}

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactNode) => ReactNode
}
