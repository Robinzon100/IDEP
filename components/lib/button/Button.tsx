import { CSSProperties, MouseEventHandler, ReactNode } from 'react';


interface buttonProps {
    size: number,
    color?: string,
    textColor?: string,
    className?: string,
    id?: string,
    disabled?: boolean,
    ctaMode?: boolean,
    children?: ReactNode,
    style?: CSSProperties,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onHover?: MouseEventHandler<HTMLButtonElement>,
}



const Button = ({
    size = 1,
    color = 'black',
    textColor = 'white',
    className = '',
    id = '',
    disabled = false,
    ctaMode = false,
    children,
    style,
    onClick = () => console.log('clicked'),
    onHover }: buttonProps) => {



    return (
        <>
            <button
                className={`button ${className}`}
                id={`${id}`}
                onClick={(e) => onClick(e)}
                onMouseOver={onHover}
                disabled={!onClick && disabled}
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
                    width: fit-content;
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
                    padding: calc(${size} * .44vw) calc(${size} * .9vw);
                    border-radius: ${~~size * 6}px;
                    ${color == 'white' ? `
                        box-shadow: 0px 30px 19px -22px rgba(0, 0, 0, 0.1), inset 0px 0px 14px #FFFFFF;
                        backdrop-filter: blur(28px);
                        background: linear-gradient(0deg, #DEDEDE -26.01%, rgba(255, 255, 255, 0) 60.87%), linear-gradient(180deg, #FFFFFF 1.54%, rgba(255, 255, 255, 0) 81.22%), rgba(227, 227, 227, 0.22);
                    `:
                    `background-color: var(--${color});`}
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    transition: all .2s ease;
                    user-select: none;
                }



                .button:focus { outline: none; }
                .button:hover .button_container{
                    transform: translateY(-3%);
                    ${color == 'white' && `
                        backdrop-filter: blur(14px);
                        filter: saturation(20px);
                        box-shadow: 0px 45px 50px -10px rgba(0, 0, 0, .28), inset 0px 0px 14px #FFFFFF !important;
                    `}
                }

                .button:active .button_container{
                    transform: translateY(0%) !important;
                    ${color == 'white' ? ` 
                        box-shadow: 0px 18px 25px -10px rgba(0, 0, 0, .35), inset 0px 0px 14px #FFFFFF !important;
                    `: `
                        box-shadow: 0px 18px 25px -10px rgba(0, 0, 0, .35) !important;
                    `}
                }



                .button a{
                    color: var(--black);
                }



                @media screen and (max-width: 1000px) {
                    .button_container {
                        border-radius: ${~~size * 3.8}px;
                        padding: calc(${size} * 1.7vw) calc(${size} * 2vw);
                    }
                }


            `}</style>
        </>
    )
}


export default Button
