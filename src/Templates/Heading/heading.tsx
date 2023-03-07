import React from 'react';
import Prefix from '../../Services/Prefix-consumer/prefixConsumer';

type propsType = {
    prefix?:string,
    heading:string
}
function Heading({ prefix, heading }:propsType) {
    return (
        <h1 className={`${prefix as string}__title`}>{heading}</h1>
    );
}

export default Prefix(Heading);


