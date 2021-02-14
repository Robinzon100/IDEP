import dynamic from 'next/dynamic'
import Navigation from 'components/global/navigation/Navigation';



const BuildingCanvas = dynamic(() => import('../components/three_js/Hero'), { ssr: false })


const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <BuildingCanvas />
      </main>
    </>
  )
}




export default Index;
