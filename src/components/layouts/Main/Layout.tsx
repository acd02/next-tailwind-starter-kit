import { Meta } from 'components/atoms/Meta'
import type { PropsWithChildren } from 'react'

type Props = Parameters<typeof Meta>[0]

export function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex h-full flex-col">
      <Meta title={title} description={description} />
      <div className="flex-grow p-4">{children}</div>
    </div>
  )
}
