import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { File, MessageSquare } from "react-feather";






const Navigation = () => {
    const router = useRouter()

    const logoClickHandler = () => {
        if (router.pathname == '/') {
            window.scrollTo(0, 1400)
        }else{
            router.push('/')
        }
    }



    return (
        <>
            <nav className='navigation'>
                <div className="container">

                    <div className="logo" onClick={() => logoClickHandler()} />

                    <div className="links_container">
                        <div className="link">
                            <Link href='/paper' >
                                <div className="link_container" data-icon='paper'>
                                    <File
                                        className='paper_icon'
                                        style={{ transform: 'translateY(8%)' }}
                                        strokeWidth={2.2}
                                        size={25.4}
                                        color={'var(--black)'}
                                    />
                                    <a className='f-size-p3 f-weight-m'>paper.</a>
                                </div>
                            </Link>
                        </div>
                        <div className="link">
                            <Link href='/contact' >
                                <div className="link_container" data-icon='contact'>
                                    <MessageSquare
                                        className='message_icon'
                                        style={{ transform: 'translateY(8%)' }}
                                        strokeWidth={2.2}
                                        size={25.4}
                                        color={'var(--black)'}
                                    />
                                    <a className='f-size-p3 f-weight-m'>contact.</a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            <svg style={{
                width: 0,
                height: 0,
                position: 'absolute'
            }} aria-hidden="true" focusable="false">
                <linearGradient id="cpo_gradient" x2="1" y2="1">
                    <stop offset="-11%" stopColor="var(--cyan)" />
                    <stop offset="58%" stopColor="var(--purple)" />
                    <stop offset="132%" stopColor="var(--orange)" />
                </linearGradient>
            </svg>




            <svg style={{
                width: 0,
                height: 0,
                position: 'absolute'
            }} aria-hidden="true" focusable="false">
                <linearGradient id="ro_gradient" x2="1" y2="1">
                    <stop offset="9%" stopColor="var(--red)" />
                    <stop offset="80%" stopColor="var(--orange)" />
                </linearGradient>
            </svg>


        </>
    )
}


export default Navigation