import { useEffect } from 'react';
import gsap from 'gsap';
import { fixScrollToTop } from 'components/utils/animations/gsap.animations';
const tl = gsap.timeline()




const Loading = ({ isLoading }: { isLoading: boolean }) => {


    useEffect(() => {
        init()
    }, [])


    useEffect(() => {
        console.log(`need loading ${isLoading}`)
        if (!isLoading) {
            removeLoadingScreen()
        }
    }, [isLoading])

    const init = () => {
        fixScrollToTop(7)
        tl.fromTo(".loading_main .fact", {
            yPercent: 100,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        }, {
            yPercent: 0,
            delay: 1.5,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.2,
        })

        Array.from(document.querySelectorAll('.sphere')).map((sphere, i) => {
            tl.fromTo(sphere, {
                yPercent: 50,
                opacity: 0
            }, {
                yPercent: 0,
                opacity: 1,
                delay: i * .15,
                ease: "Bounce,easeOut",
            })
        })
        
    }

    const removeLoadingScreen = () => {
        tl.fromTo('.loading_main', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'
        }, {
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%'
        })
        tl.to('.hero_title', {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "Expo.easeOut",
        })
    }



    return (
        <>
            <section className="loading_main">
                <div className="container">
                    <div className="content">
                        <p className="fact f-size-h4 f-weight-bl">Intergalactic Data Exchange Protocol Intergalactic Data</p>
                        <div className="sphere_container">
                            <div className="sphere"><div className="gradient purple" /></div>
                            <div className="sphere"><div className="gradient green" /></div>
                            <div className="sphere"><div className="gradient red" /></div>
                            <div className="sphere"><div className="gradient black" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loading
