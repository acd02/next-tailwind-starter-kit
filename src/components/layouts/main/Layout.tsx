import React from 'react'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'

type Props = Parameters<typeof Meta>[0]

export const MainLayout = ({
  title,
  description,
  children,
}: Props & React.Props<Props>) => (
  <div className="flex flex-col h-full">
    <Meta title={title} description={description} />
    <Nav />
    <div className="p-4 flex-grow">{children}</div>
    <Footer />
  </div>
)
