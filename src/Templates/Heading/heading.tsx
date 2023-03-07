import React from 'react';

type propsType = {
    prefix?:string,
    heading:string
}
export default function Heading({ prefix, heading }:propsType) {
    return (
        <h1 className={`${prefix as string}__title`}>{heading}</h1>
    );
}



