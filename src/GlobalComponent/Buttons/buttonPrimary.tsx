import React from 'react';

type PropsType = {
    className:string,
    text: string,
    onClick: (e: React.SyntheticEvent) => void
}
const Button = ({ className, text, onClick }:PropsType) => {
    return (
        <button onClick={(e:React.SyntheticEvent) => onClick(e)} className={className} type='submit'>
            {text}
        </button>
    );
};

export default Button;
