import { useEffect } from 'react';
import { scrollLottie } from "components/utils/animations/scrollLottie";
// import Lottie from 'lottie-web';

const Swap = () => {

    useEffect(() => {
        init()
    }, [])


    const init = () => {
        scrollLottie({  
            target: '#swap_canvas',
            path: 'animations/galaxy.json',
            duration: 1.4,
            speed: 'slow'
        })

        // let anim = Lottie.loadAnimation({
        //     container: document.querySelector('#swap_canvas'),
        //     renderer: 'canvas',
        //     loop: false,
        //     autoplay: false,
        //     path:'animations/galaxy.json',
        // }).play()
        // let animation = Lottie.loadAnimation({
        //     container: document.querySelector('#swap_canvas'),
        //     renderer: 'canvas',
        //     loop: true,
        //     animationData: require('../../../../public/animations/galaxy.json'),
        //     // path: 'https://assets9.lottiefiles.com/packages/lf20_1yqc9qdg.json',
        //     rendererSettings: {
        //         clearCanvas: true,
        //         progressiveLoad: true,
        //         hideOnTransparent: false,
        //         preserveAspectRatio: 'xMaxYMin slice'
        //     }
        // });

        // animation.play()

        // window.addEventListener('resize', () => {
        //     if (window.innerWidth > 950) {
        //         animation.resize()
        //     }
        // })
    }

    return (
        <>
            <div className="swap_main">
                <div className="container">
                    <div className="animation" id="swap_canvas" />
                </div>
            </div>
        </>
    )
}

export default Swap
