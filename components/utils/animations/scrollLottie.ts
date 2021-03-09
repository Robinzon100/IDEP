import Lottie from 'lottie-web';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface scrollLottieType {
    target: string,
    path: string,
    duration: number,
    speed: string
}

export const scrollLottie = (obj: scrollLottieType) => {
    let anim = Lottie.loadAnimation({
        container: document.querySelector(obj.target),
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        path: obj.path,
        rendererSettings: {
            filterSize: {
                width: "100%",
                height: "100%",
                x: '10%',
                y: '-50%'
            },
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: false,
            preserveAspectRatio: 'xMidYMin slice'
        }
    });

    document.querySelector(obj.target).getBoundingClientRect().height = 1080




    let timeObj = { currentFrame: 0 }
    let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";


    ScrollTrigger.create({
        trigger: obj.target,
        scrub: 1,
        pin: true,
        start: "top top",
        end: endString,
        onUpdate: self => {
            if (obj.duration) {
                gsap.to(timeObj, {
                    duration: obj.duration,
                    currentFrame: (Math.floor(self.progress * (anim.totalFrames - 1))),
                    onUpdate: () => {
                        anim.goToAndStop(timeObj.currentFrame, true)
                    },
                    ease: 'expo'
                })
            } else {
                anim.goToAndStop(self.progress * (anim.totalFrames - 1), true)
            }
        }
    });

    window.addEventListener('resize', () => {
        anim.resize()
    })

}