import '../css/tailwind.css'

import { AppProps } from 'next/app'
import Router from 'next/router'
import * as NProgress from 'nprogress'
import * as React from 'react'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
