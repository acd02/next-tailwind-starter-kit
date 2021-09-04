import { Meta } from 'components/atoms/Meta'
import { Footer } from 'components/organisms/Footer'
import { Nav } from 'components/organisms/Nav'
import type { PropsWithChildren } from 'react'

type Props = Parameters<typeof Meta>[0]

export function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col h-full">
      <Meta title={title} description={description} />
      <Nav />
      <div className="flex-grow p-4">{children}</div>
      <Footer />
    </div>
  )
}
