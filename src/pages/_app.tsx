import '../css/tailwind.css'

import { NextPageWithLayout } from 'global'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as NextPageWithLayout<unknown>).getLayout || (page => page)

  return getLayout(<Component {...pageProps}></Component>)
}

export default App
