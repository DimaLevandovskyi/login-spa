import React from 'react';

type PropsType = {
    children: JSX.Element|JSX.Element[];
}
export default function Layout({ children }: PropsType) {
    return (
        <div className='layout'>
            {children}
        </div>
    );
}
