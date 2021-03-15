// import dynamic from 'next/dynamic'
import { useEffect } from 'react';
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


// ─── OWN IMPORT ─────────────────────────────────────────────────────────────────
import Navigation from 'components/global/navigation/Navigation';
import Blockchain from 'components/pages/landing/blockchain/Blockchain';
import Media from 'components/pages/landing/media/Media';
import Newsletter from 'components/pages/landing/newsletter/Newsletter';
import Swap from 'components/pages/landing/swap/Swap';
import Identt from 'components/pages/landing/identt/Identt';
import Uptake from 'components/pages/landing/uptake/Uptake';
import Hero from 'components/pages/landing/hero/Hero';
import Software from 'components/pages/landing/software/Software';
// const Hero = dynamic(() => import('components/pages/landing/hero/Hero'), { ssr: false })
// const Swap = dynamic(() => import('components/pages/landing/swap/Swap'), { ssr: false })





const Index = () => {
  useEffect(() => {
    init()
  }, [])


  const init = () => {
    gsap.to('#paralaxImage', {
      scrollTrigger: {
        trigger: "#paralaxImage",
        start: 'top bottom',
        scrub: .3,
      },
      backgroundPositionY: 100,
    })
  }





  return (
    <>
      <Navigation />
      <main className='main'>
        <Hero />
        <Blockchain />
        <Media />
        <Identt />
        <Uptake />
        <div style={{ height: '50vh' }} />
        <Swap />
        <Software />
        <Newsletter />
      </main>
    </>
  )
}




export default Index;
