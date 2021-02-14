import Link from 'next/link'
import { File, MessageSquare } from "react-feather";






const Navigation = () => {
    return (
        <>
            <nav className='navigation'>
                <div className="container">

                    <div className="logo" />

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
            <style jsx>{`
                .navigation {
                   position: fixed;
                   z-index: 99;
                   width: 100vw;
                } 
            
                
                .container{
                    padding: calc(2.5vw + 1rem) 7.5vw;        
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-content: center;
                } 


                .logo{
                    width: 25%;
                    height: calc(1.1vw + 2.8rem);
                    background-image: url('/images/png/logo.png');
                    background-size: contain;
                    background-position: left center;
                    background-repeat: no-repeat; 
                }


                .links_container{
                    display: inline-flex;
                    flex-direction: row;
                    align-content: center;
                    justify-self: center;
                    height: 0%;
                }


                .link{
                }

                .link_container{
                    padding: .4vw 1vw;
                    border: 1px solid #ffffff00;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: transparent;
                    border: none;
                    box-shadow: none;
                    border-radius: 13px;
                    transition: all .2s ease;
                    cursor: pointer;
                    user-select: none;
                } 

                .link_container:hover{
                    background: linear-gradient(360deg, #EEEEEE 0%, rgba(255, 255, 255, 0) 60.87%), linear-gradient(180deg, #FFFFFF 1.54%, rgba(255, 255, 255, 0) 81.22%), #E3E3E3;
                    box-sizing: border-box;
                    box-shadow: 0px 14px 16px -6px rgba(0, 0, 0, 0.05), inset 0px 0px 7px 4px rgba(255, 255, 255, 0.73);
                }


                .link:not(:last-child){
                    margin-right: calc(.5vw + .5rem)
                }


                .link a{
                    color: var(--black);
                    margin-left: .7vw; 
                }


            `}</style>

        </>
    )
}


export default Navigation