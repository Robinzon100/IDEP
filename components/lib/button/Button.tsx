import { CSSProperties, FC, MouseEventHandler } from 'react';


interface props {
    size: number,
    textColor?: string;
    className?: string,
    id?: string,
    disabled?: boolean,
    ctaMode?: boolean,
    style?: CSSProperties
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onHover?: MouseEventHandler<HTMLButtonElement>
}



const Button: FC<props> = ({
    size = 1,
    textColor = 'var(--black)',
    className,
    id,
    disabled = false,
    ctaMode = false,
    children,
    style,
    onClick,
    onHover }) => {



    return (
        <>
            <button
                className={`button ${className}`}
                id={`${id}`}
                onClick={(e) => !onClick || disabled && onClick(e)}
                onMouseOver={onHover}
                style={style}>
                <div className={`button_container ${ctaMode && 'cta_mode'}`}>
                    {children}
                </div>
            </button>


            <style jsx>{`

                a{
                    color: var(--black)
                }
            
                .button{
                   color: ${textColor}; 
                    background: transparent;
                    border: none;
                    padding: 0;
                    user-select: none;
                    display: inline-block;
                    transition: all .3s ease;
                }
                


                .button_container{
                    pointer-events: ${disabled && 'none'};
                    cursor: ${disabled ? 'not-allowed' : 'pointer'};
                    padding: calc(${size} * .38vw) calc(${size} * 1.1vw);
                    border-radius: calc(${size} * .28vw);
                    border: 1px solid #ffffff00;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(0deg, #DEDEDE -26.01%, rgba(255, 255, 255, 0) 60.87%), linear-gradient(180deg, #FFFFFF 1.54%, rgba(255, 255, 255, 0) 81.22%), rgba(227, 227, 227, 0.22);
                    border: 1px solid #F0F0F0;
                    box-sizing: border-box;
                    box-shadow: 0px 30px 19px -22px rgba(0, 0, 0, 0.1), inset 0px 0px 14px #FFFFFF;
                    backdrop-filter: blur(28px);
                    transition: all .2s ease;
                    user-select: none;
                }



                .button:focus { outline: none; }
                .button:hover .button_container{
                    backdrop-filter: blur(14px);
                    filter: saturation(20px);
                    transform: translateY(-3%);
                    box-shadow: 0px 45px 50px -10px rgba(0, 0, 0, .28), inset 0px 0px 14px #FFFFFF !important;
                }

                .button:active .button_container{
                    transform: translateY(0%) !important;
                    box-shadow: 0px 18px 25px -10px rgba(0, 0, 0, .35), inset 0px 0px 14px #FFFFFF !important;
                }



                .button a{
                    color: var(--black);
                }



                @media screen and (max-width: 1000px) {
                    .button_container {
                        border-radius: calc(${size} * .28vw);
                        padding: calc(${size} * .8vw) calc(${size} * 2vw);
                    }
                }
                
            
            `}</style>
        </>
    )
}


export default Button
