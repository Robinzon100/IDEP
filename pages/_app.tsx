import type { AppProps } from 'next/app'
import '../styles/main.scss'
// import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
