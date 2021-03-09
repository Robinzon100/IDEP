import { ChangeEvent, CSSProperties } from 'react';

interface props {
    size: number,
    className?: string,
    id?: string,
    dissabled?: string,
    style?: CSSProperties,
    onChange?: ChangeEvent,
    
}



const TextInput = () => {
    return (
        <>
            <input type="text" name="" id=""/> 
        </>
    )
}

export default TextInput
