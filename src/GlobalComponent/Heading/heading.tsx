import React from 'react';

type propsType = {
    className:string,
    heading:string
}
export default function Heading({ className, heading }:propsType) {
    return (
        <h1 className={className}>{heading}</h1>
    );
}
