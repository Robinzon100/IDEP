import { useEffect } from 'react';
import { scrollLottie } from "components/utils/animations/scrollLottie";
// import Lottie from 'lottie-web';
import { content } from './swap.content';

const Swap = () => {


    useEffect(() => {
        init()
    }, [])


    const init = () => {
        scrollLottie({
            target: '#swap_canvas',
            path: 'animations/galaxy.json',
            duration: 0.2,
            speed: 'slow'
        })
    }

    return (
        <>
            <div className="swap_main">
                <div className="swap_container">
                    <div className="animation" id="swap_canvas" />
                </div>

                <div style={{ height: '190vh' }} />

                <div className="content_container">
                    <h1 className="f-size-h1 f-weight-bl">IDEP SWAP</h1>
                    <p className='main_description f-size-p2 f-weight-l'>With the fusion of traditional digital content and blockchain technology, a new need arises for <b>trustless exchange</b> of content. The Marketplace for the openweb, IDEP SWAP allows anyone to launch their own blockchain powered market easily and integrate it into virtually any application unlocking a whole new level of liquid assets.</p>
                    <div className="features">
                        {content.map((feature, i) => (
                            <div key={i} className="feature">
                                <div className="image_container" style={{
                                    backgroundImage: `url("images/swap_icon/${feature.imageUrl}")`,
                                    backgroundSize: ` ${i == 1 || i == 4 ? '100%' : '55%'}`
                                }} />
                                <div className="content">
                                    <h2 className="f-size-h4 f-weight-bo feature_title">{feature.title}</h2>
                                    <p className="f-size-p2 f-weight-m feature_description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Swap
