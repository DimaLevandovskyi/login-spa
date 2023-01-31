import React from 'react';

type PropsType = {
    children: JSX.Element[];
}
export default function Wrapper({ children }:PropsType) {
    return (
        <div className='login'>
            {children}
        </div>
    );
}
