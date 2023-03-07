import React from 'react';
import Prefix from '../Prefix-consumer/prefixConsumer';

export type PropsType = {
    children: JSX.Element|JSX.Element[],
    prefix?: string
}
function Wrapper({ children, prefix }:PropsType) {
    return (
        <div className={prefix as string}>
            { children }
        </div>
    );
}

export default Prefix(Wrapper);
