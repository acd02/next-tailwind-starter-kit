import { NextPage, PageConfig } from 'next'
import { ReactElement } from 'react'

declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export = classNames
}

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement<T>) => ReactElement
}

declare type ValueOf<T> = T[keyof T]
