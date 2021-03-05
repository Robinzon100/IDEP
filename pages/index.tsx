import { useEffect } from 'react';
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


// ─── OWN IMPORT ─────────────────────────────────────────────────────────────────
import dynamic from 'next/dynamic'
import Navigation from 'components/global/navigation/Navigation';
import Blockchain from '../components/pages/landing/blockchain/Blockchain';
const Hero = dynamic(() => import('../components/pages/landing/hero/Hero'), { ssr: false })





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
      </main>
    </>
  )
}




export default Index;
