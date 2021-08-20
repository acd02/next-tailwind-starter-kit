import { PropsWithChildren } from 'react'

import { Meta } from 'components/atoms/Meta'
import { Nav } from 'components/organisms/Nav'
import { Footer } from 'components/organisms/Footer'

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
