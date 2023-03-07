import React from 'react';

export const PagesContext = React.createContext('');

type PropsType = {
    children: JSX.Element|JSX.Element[],
    prefix: string
}

export default function prefixProvider({ children, prefix }:PropsType) {
    return (
        <PagesContext.Provider value={ prefix }>
            { children }
        </PagesContext.Provider>
    );
}
