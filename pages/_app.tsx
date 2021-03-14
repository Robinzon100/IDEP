import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';

//
// ─── OWN IMPORTS ────────────────────────────────────────────────────────────────
import '../styles/main.scss'
import HeadAndMeta from 'components/global/head/HeadAndMeta';
import Loading from 'components/global/loading/Loading';





function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    // window.addEventListener("load", function () {
      setTimeout(() => {
        console.log('should load')
        setIsLoading(false)
      }, 8000);
    // });
  }, [])


  return (
    <>
      <HeadAndMeta />
      <Loading isLoading={isLoading} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
