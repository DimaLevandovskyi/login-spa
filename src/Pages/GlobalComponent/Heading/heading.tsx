import React from 'react';

export default function Heading({ className, heading }) {
    return (
        <h1 className={className}>{heading}</h1>
    );
}
