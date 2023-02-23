import React from 'react';

const prefix = 'login';

export const PagesContext = React.createContext(prefix);

type PropsType = {
    children: JSX.Element|JSX.Element[];
}

export default function prefixProvider({ children }:PropsType) {
    return (
        <PagesContext.Provider value={ prefix }>
            { children }
        </PagesContext.Provider>
    );
}
