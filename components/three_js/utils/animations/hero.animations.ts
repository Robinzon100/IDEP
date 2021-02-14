import gsap from 'gsap';

export const planetAnimation = (e, camera, direction?) => {
    let scrollConditional = e.deltaY == 100 || direction == 'panup'
    gsap.to(camera.position, {
        duration: 4,
        z: scrollConditional ? 4 : .8,
        y: scrollConditional ? 0.9 : 0,
        ease: "Expo.easeOut"
    })

    gsap.to('.title', {
        duration: 1.2,
        y: scrollConditional ? -200 : 0,
        opacity: scrollConditional ? 0 : 1,
        ease: "Expo.easeOut",
    })

    if (scrollConditional) {
        fadeInTransformUp(['.main_header', '.hero_button', '.navigation'], 'in')
    } else {
        fadeInTransformUp(['.main_header', '.hero_button', '.navigation'], 'out')
    }
}


export const fadeOutFadeIn = (fadeOutElementClass: string, fadeInElementClassesArray: string[]) => {
    const tl = gsap.timeline()
    tl.to(fadeOutElementClass, {
        opacity: 0,
        duration: 1,
        display: 'none'
    })

    fadeInElementClassesArray.forEach((className, i) => {
        tl.from(className, {
            opacity: 0
        })
        tl.to(className, {
            opacity: 1,
            duration: .6,
            delay: .3,
            ease: "Expo.easeOut",
        })
    })
}



export const fadeInTransformUp = (fadeInElementClassNames: string[], fade: 'in' | 'out') => {


    fadeInElementClassNames.forEach((className, i) => {
        gsap
            .to(className, {
                display: fade == 'in' ? 'initial' : 'noen',
                opacity: fade == 'in' ? 1 : 0,
                delay: .4,
                duration: .6,
                y: fade == 'out' ? 80 : 0
            })

    })
}




export const dissableBlurOnElement = (e: any, elementClassname: string) => {
    const element = document.querySelector(elementClassname) as HTMLElement
    let { x, y, width, height } = element.getBoundingClientRect()



    if (e.clientX > x && e.clientX < x + width && e.clientY > y && e.clientY < y + height) {
        //    element.classList.add('dissable_blur')
        element.style.zIndex = '5'
    } else {
        // element.classList.remove('dissable_blur')
        element.style.zIndex = '1'
    }
}

