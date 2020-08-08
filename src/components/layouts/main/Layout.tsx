import React, { PropsWithChildren } from 'react'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'

type Props = Parameters<typeof Meta>[0]

export function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col h-full">
      <Meta title={title} description={description} />
      <Nav />
      <div className="p-4 flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
