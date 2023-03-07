import React from 'react';
import Prefix from '../../../Services/Prefix-consumer/prefixConsumer';

type PropsType = {
    children: JSX.Element | JSX.Element[],
    prefix: string
}

function Wrapper({ children, prefix }: PropsType) {
    return (
        <div className={prefix}>
            {children}
        </div>
    );
}

export default Prefix(Wrapper);
