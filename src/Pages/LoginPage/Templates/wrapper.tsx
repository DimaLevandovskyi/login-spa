import React from 'react';

type PropsType = {
    children: JSX.Element|JSX.Element[],
    prefix?: string
}
export default function Wrapper({ children, prefix }:PropsType) {
    return (
        <div className={prefix as string}>
            { children }
        </div>
    );
}


