import gsap from 'gsap';

export const planetAnimation = (e, camera, direction?) => {
    gsap.to(camera.position, {
        duration: 4,
        z: e.deltaY == 100 || direction == 'panup' ? 4 : 1.1,
        y: e.deltaY == 100 || direction == 'panup' ? 0.8 : 0,
        ease: "Expo.easeOut"
    })

    if (e.deltaY == 100 || direction == 'panup') {
        gsap.to('.title', {
            duration: 1.2,
            y: -200,
            skewY: 10,
            opacity: 0,
            ease: "Expo.easeOut",
            clipPath: 'circle(0%)'
        })
    } else {
        gsap.to('.title', {
            duration: 1.2,
            y: 0,
            skewY: 0,
            opacity: 1,
            ease: "Expo.easeOut",
            clipPath: 'circle(100%)'
        })
    }
}