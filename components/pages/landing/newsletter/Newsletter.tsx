import Button from 'components/lib/button/Button';
import { Inbox } from "react-feather";




const Newsletter = () => {
    return (
        <>
            <section className="newsletter_main">
                <div className="blob_red" />
                <div className="blob_orange" />
                <div className="container">
                    <h1 className='f-size-h3 f-weight-bl'>subscribe to our newsletter</h1>
                    <div className="inputs">
                        <div className="input_container">
                            <input className='input' type="email" name="email" />
                        </div>
                        <Button size={2} textColor='white' color='black' style={{marginTop: 'calc(1rem + 2vw)'}}>
                            <Inbox
                                style={{ marginRight: '1rem' }}
                                strokeWidth={1.5}
                                color={'var(--dark-grey)'} />
                            <p className="f-size-p1 f-weight-r">subscribe</p>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter
