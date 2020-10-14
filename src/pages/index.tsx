import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import React from 'react'

export default function Home() {
  return <p className="font-medium">content</p>
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)
