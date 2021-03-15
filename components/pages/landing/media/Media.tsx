import gsap from "gsap"
import { MouseEvent, useState } from "react"

const Media = () => {
    const [videoIndex, setVideoIndex] = useState('01')

    const handleVideoChange = (e: MouseEvent<HTMLElement>) => {
        const videoIndex: number = +e.currentTarget.dataset.videoindex
        const container = document.querySelector('.media_main') as HTMLElement
        const mustPlayVideo = container.querySelectorAll('.media_main video')[videoIndex - 1] as HTMLVideoElement
        const mustStopVideos = Array.from(container.querySelectorAll('.media_main video')).filter(el => el != mustPlayVideo) as HTMLVideoElement[]
        mustPlayVideo.currentTime = 0


        const tl = gsap.timeline({
            onComplete: () => mustPlayVideo.play(),
            defaults: { duration: .3 }
        })
        tl.to(mustStopVideos[0], { opacity: 0 })
        tl.to(mustPlayVideo, { opacity: 1 })

        const currentTitle = e.currentTarget.querySelector('.video_title')
        currentTitle.classList.add('active')
        Array.from(container.querySelectorAll('.video_title')).filter(el => el != currentTitle)[0].classList.remove('active')
        setVideoIndex(`0${videoIndex}`)
    }





    return (
        <>
            <div className="media_main">
                <div className="container">
                    <p className="description f-size-p2 f-weight-l">Through a series of innovative apps and standards, the Intergalactic Data Exchange Protocol enables developers to create anything the mind can imagine: from a website <b> selling NFTs </b> of unicorns to a <b> trustless Intellectual property </b> framework, and everything in between. All can be built through IDEP.</p>
                    <div className="video_container">
                        <p className="video_number f-size-h3 f-weight-bl">{videoIndex}</p>
                        <video muted autoPlay playsInline src="/videos/media/planet.mp4" />
                        <video muted autoPlay playsInline src="/videos/media/profit.mp4" className='layer_under' />
                    </div>
                    <div className="buttons">
                        <div className="button" data-videoindex={1} onClick={(e) => handleVideoChange(e)} >
                            <p className='video_title active f-size-h6 f-weight-l'>establish verifiable intellectual property rights.</p>
                        </div>
                        <div className="button" data-videoindex={2} onClick={(e) => handleVideoChange(e)} >
                            <p className='video_title f-size-h6 f-weight-l'>license and monetize your content trustlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media
