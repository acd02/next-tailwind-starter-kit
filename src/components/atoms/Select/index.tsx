import type { ComponentPropsWithoutRef } from 'react'

export function Select({ children, ...rest }: ComponentPropsWithoutRef<'select'>) {
  return (
    <select
      {...rest}
      className={
        'block appearance-none rounded-md border border-gray-300 bg-down-arrow bg-[length:1.5em_1.5em] bg-[right_.5rem_center] bg-no-repeat py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm'
      }
    >
      {children}
    </select>
  )
}
