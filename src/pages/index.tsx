import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global-next'

function Home() {
  return <p className="font-medium">content</p>
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
