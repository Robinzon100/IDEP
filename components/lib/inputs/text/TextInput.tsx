import { ChangeEventHandler, CSSProperties } from 'react';

interface props {
    size: number,
    className?: string,
    id?: string,
    dissabled?: boolean,
    style?: CSSProperties,
    onChange?: ChangeEventHandler,
}



const TextInput = ({ size, className, id, dissabled, style, onChange }: props) => {
    return (
        <>
            <input 
            data-size={size} 
            style={style} 
            onChange={onChange} 
            className={className} 
            id={id} 
            disabled={dissabled} 
            type="text" 
            name="" />
        </>
    )
}

export default TextInput
