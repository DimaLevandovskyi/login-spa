import React from 'react';

export default function LoginWrapper({ children }) {
    return (
        <div className='login'>
            {children}
        </div>
    );
}
